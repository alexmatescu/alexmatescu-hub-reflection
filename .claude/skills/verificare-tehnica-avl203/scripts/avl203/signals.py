"""TC-05: semnalele declarative din raw HTML și din headerele răspunsului final (AVL203-REQ-016, REQ-017).

Se păstrează toate aparițiile, valoarea originală și locația (linie, coloană) din documentul
capturat. O extracție nesigură (corp lipsă, non-HTML, codare necunoscută, parsare eșuată) dă
`UNKNOWN` cu motiv, niciodată `ABSENT`. JSON valid sintactic nu înseamnă Schema.org valid.
"""
import codecs
import json
import re
from html.parser import HTMLParser
from urllib.parse import urljoin

META_ROBOTS_NAMES = ("robots", "googlebot", "bingbot")
CHARSET_RE = re.compile(r"charset\s*=\s*[\"']?([A-Za-z0-9_\-:.]+)", re.I)


def decode_html(raw, content_type):
    """Întoarce (text, charset, None) sau (None, None, motiv). Fără ghicire: o codare nedeclarată se citește doar ca UTF-8 strict."""
    if raw is None:
        return None, None, "corpul răspunsului lipsește"
    m = CHARSET_RE.search(content_type or "")
    source = "Content-Type"
    if not m:
        m = re.search(rb"<meta[^>]+charset\s*=\s*[\"']?([A-Za-z0-9_\-:.]+)", raw[:4096], re.I)
        source = "meta charset"
        cs = m.group(1).decode("ascii") if m else None
    else:
        cs = m.group(1)
    if raw.startswith(codecs.BOM_UTF8):
        cs, source, raw = "utf-8", "BOM", raw[3:]
    if cs is None:
        cs, source = "utf-8", "implicit (nedeclarat)"
    try:
        codecs.lookup(cs)
    except LookupError:
        return None, None, f"codare declarată necunoscută: {cs}"
    try:
        return raw.decode(cs), f"{cs.lower()} ({source})", None
    except UnicodeDecodeError:
        return None, None, f"corpul nu poate fi decodat ca {cs} ({source}); extracția nu e sigură"


def is_html(content_type):
    ct = (content_type or "").split(";")[0].strip().lower()
    return ct in ("text/html", "application/xhtml+xml")


class _Signals(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.foreign = 0  # adâncimea în <svg>/<math>: <title> de acolo nu e titlul documentului
        self.base = None
        self.titles, self.canonicals, self.meta_robots, self.html_lang, self.jsonld = [], [], [], [], []
        self.html_tags = 0
        self._title = None
        self._script = None

    def pos(self):
        line, col = self.getpos()
        return {"line": line, "col": col + 1}

    def handle_starttag(self, tag, attrs):
        a = {}
        for k, v in attrs:
            a.setdefault(k.lower(), v if v is not None else "")
        if tag in ("svg", "math"):
            self.foreign += 1
        if tag == "html":
            self.html_tags += 1
            self.html_lang.append({"value": a.get("lang"), "present": "lang" in a, **self.pos()})
        elif tag == "base" and self.base is None and a.get("href"):
            self.base = a["href"].strip()
        elif tag == "title" and not self.foreign:
            self._title = {"parts": [], **self.pos()}
        elif tag == "link" and "canonical" in a.get("rel", "").lower().split():
            self.canonicals.append({"value": a.get("href"), "source": "html", **self.pos()})
        elif tag == "meta" and a.get("name", "").strip().lower() in META_ROBOTS_NAMES:
            self.meta_robots.append({"name": a["name"].strip().lower(), "value": a.get("content"), **self.pos()})
        elif tag == "script":
            t = a.get("type", "").split(";")[0].strip().lower()
            self._script = {"jsonld": t == "application/ld+json", "parts": [], **self.pos()}

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag in ("svg", "math"):
            self.foreign -= 1

    def handle_endtag(self, tag):
        if tag in ("svg", "math") and self.foreign:
            self.foreign -= 1
        elif tag == "title" and self._title is not None:
            raw = "".join(self._title.pop("parts"))
            self.titles.append({"value": " ".join(raw.split()), "raw": raw, **self._title})
            self._title = None
        elif tag == "script" and self._script is not None:
            s = self._script
            self._script = None
            if s["jsonld"]:
                raw = "".join(s["parts"])
                block = {"line": s["line"], "col": s["col"], "bytes": len(raw.encode("utf-8"))}
                try:
                    d = json.loads(raw)
                    items = d.get("@graph", [d]) if isinstance(d, dict) else (d if isinstance(d, list) else [])
                    block["json_syntax"] = "VALID"
                    block["types"] = sorted({json.dumps(x.get("@type"), ensure_ascii=False) for x in items if isinstance(x, dict) and "@type" in x})
                except ValueError as e:
                    block["json_syntax"] = "INVALID"
                    block["error"] = str(e)
                self.jsonld.append(block)

    def handle_data(self, data):
        if self._title is not None:
            self._title["parts"].append(data)
        if self._script is not None:
            self._script["parts"].append(data)


def _x_robots(headers):
    out = []
    for k, v in headers or []:
        if k != "x-robots-tag":
            continue
        m = re.match(r"^\s*([A-Za-z0-9_\-]+)\s*:\s*(.*)$", v)
        scope, rest = (m.group(1), m.group(2)) if m and m.group(1).lower() not in ("unavailable_after",) else ("*", v)
        out.append({"value": v, "scope": scope, "directives": [d.strip().lower() for d in rest.split(",") if d.strip()]})
    return out


def _link_canonicals(headers):
    out = []
    for k, v in headers or []:
        if k != "link":
            continue
        for part in v.split(","):
            m = re.match(r'\s*<([^>]*)>\s*;(.*)', part)
            if m and re.search(r'rel\s*=\s*"?[^";]*\bcanonical\b', m.group(2), re.I):
                out.append({"value": m.group(1), "source": "http_link_header"})
    return out


def extract(summary, raw_body):
    """TC-05 pentru o captură TC-01 rezumată de httpobs.summarize."""
    res = {"status": None, "document_url": summary["url_final"], "source": "raw HTML + headerele răspunsului final (nu DOM randat)"}
    headers = summary.get("final_headers")
    res["x_robots_tag"] = _x_robots(headers) if headers is not None else "UNKNOWN"
    res["canonical_http_header"] = _link_canonicals(headers) if headers is not None else "UNKNOWN"
    if not summary["transport_ok"] or summary["final_status"] is None:
        res.update(status="UNKNOWN", reason="captura a eșuat sau statusul final lipsește")
        return res
    if not is_html(summary["content_type"]):
        res.update(status="UNKNOWN", reason=f"răspunsul nu este HTML (Content-Type: {summary['content_type']})")
        return res
    text, charset, why = decode_html(raw_body, summary["content_type"])
    if text is None:
        res.update(status="UNKNOWN", reason=why)
        return res
    p = _Signals()
    try:
        p.feed(text)
        p.close()
    except Exception as e:  # parserul standard e tolerant; orice excepție = extracție nesigură
        res.update(status="UNKNOWN", reason=f"parsare HTML eșuată: {e}")
        return res
    base = urljoin(summary["url_final"], p.base) if p.base else summary["url_final"]
    for c in p.canonicals + res["canonical_http_header"]:
        c["resolved"] = urljoin(base, (c["value"] or "").strip()) if c.get("value") else None
    res.update(
        status="EXTRACTED",
        charset=charset,
        base_href=p.base,
        title=p.titles,
        canonical=p.canonicals,
        meta_robots=p.meta_robots,
        html_lang=p.html_lang,
        html_tags=p.html_tags,
        json_ld=p.jsonld,
        notes=["Canonicalul declarat nu este automat cel selectat de un motor.",
               "JSON valid sintactic nu înseamnă vocabular Schema.org valid și nici utilizare de către un model."],
    )
    return res
