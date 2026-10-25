"""TC-08: textele-cheie în HTML-ul brut, pe zone, cu locația din fișierul original (AVL203-REQ-031, REQ-032).

Zonele din AVL-203 §8.1: `body` (corpul, în afara scripturilor și a stilurilor), `attributes`
(alt, title, aria-label), `json_ld`, `meta`. Zonele auxiliare (registru, punctul D): `title`,
`script_non_jsonld`, `comment`, `template`, `noscript` — se raportează, iar un text găsit numai
acolo dă `UNKNOWN` cu abatere (DEV-P05), niciodată `ABSENT_FROM_RAW_HTML`.

Normalizarea (OP-01) se aplică identic textului-cheie și zonelor, iar fiecare caracter normalizat
păstrează poziția caracterului original (OP-03). Unirea nodurilor (OP-02): separator la granița
elementelor bloc și la <br>, fără separator la elementele inline.
"""
import bisect
import html
import json
import unicodedata
from html.parser import HTMLParser

from .signals import decode_html, is_html

MAIN_ZONES = ("body", "attributes", "json_ld", "meta")
METADATA_ZONES = ("attributes", "json_ld", "meta")
AUX_ZONES = ("title", "script_non_jsonld", "comment", "template", "noscript")
TEXT_ATTRIBUTES = ("alt", "title", "aria-label")
BLOCK = set("""address article aside blockquote body br caption center dd details dialog dir div dl dt fieldset
figcaption figure footer form frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html legend li main menu nav ol
optgroup option p pre section summary table tbody td tfoot th thead tr ul""".split())
DEV_AUX = "DEV-P05"


# ---------------------------------------------------------------- normalizare (OP-01)
def _is_space(c):
    return c.isspace() or unicodedata.category(c) == "Zs"


def normalize_units(units):
    """units = [(caracter, offset_original)] → [(caracter_normalizat, offset_original)]."""
    out, i = [], 0
    while i < len(units):
        j = i + 1
        while j < len(units) and unicodedata.combining(units[j][0]):
            j += 1
        cluster = unicodedata.normalize("NFC", "".join(c for c, _ in units[i:j]))
        off = units[i][1]
        for c in cluster:
            if _is_space(c):
                if out and out[-1][0] == " ":
                    continue
                out.append((" ", off))
            else:
                for f in c.casefold():
                    out.append((f, off))
        i = j
    return out


def normalize_text(s):
    return "".join(c for c, _ in normalize_units([(c, 0) for c in html.unescape(s)])).strip()


# ---------------------------------------------------------------- zone
class _Zones(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=False)
        self.text = text
        self.starts = [0] + [i + 1 for i, c in enumerate(text) if c == "\n"]
        self.zones = {z: [] for z in MAIN_ZONES + AUX_ZONES}
        self.state = []  # elemente care schimbă zona: head, title, script, style, template, noscript, svg
        self.script_jsonld = False
        self.jsonld_blocks = []

    def off(self):
        line, col = self.getpos()
        return self.starts[line - 1] + col

    def zone(self):
        for s in reversed(self.state):
            if s == "script":
                return "json_ld" if self.script_jsonld else "script_non_jsonld"
            if s in ("style",):
                return None
            if s in ("title", "template", "noscript"):
                return s
        if "head" in self.state:
            return None
        return "body"

    def sep(self, zone="body"):
        z = self.zones[zone]
        if z and z[-1][0] != " ":
            z.append((" ", self.off()))

    def handle_starttag(self, tag, attrs):
        a = {}
        for k, v in attrs:
            a.setdefault(k.lower(), v if v is not None else "")
        start = self.off()
        for k in TEXT_ATTRIBUTES:
            if a.get(k):
                self.zones["attributes"] += [(c, start) for c in a[k]] + [(" ", start)]
        if tag == "meta" and a.get("content") and (a.get("name") or a.get("property") or a.get("itemprop")):
            self.zones["meta"] += [(c, start) for c in a["content"]] + [(" ", start)]
        if tag in BLOCK and self.zone() in ("body", "template", "noscript"):
            self.sep(self.zone())
        if tag in ("head", "title", "script", "style", "template", "noscript"):
            if tag == "script":
                self.script_jsonld = a.get("type", "").split(";")[0].strip().lower() == "application/ld+json"
                if self.script_jsonld:
                    self.jsonld_blocks.append({"offset": start, "raw": []})
            self.state.append(tag)
        elif tag == "body" and "head" in self.state:
            self.state = [s for s in self.state if s != "head"]

    def handle_startendtag(self, tag, attrs):
        if tag in ("head", "title", "script", "style", "template", "noscript"):
            return  # elemente care nu se închid singure
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag in BLOCK and self.zone() in ("body", "template", "noscript"):
            self.sep(self.zone())
        if tag in self.state:
            while self.state:
                if self.state.pop() == tag:
                    break
            if tag == "script":
                self.script_jsonld = False

    def _add(self, s, start, step=True):
        z = self.zone()
        if z is None:
            return
        if step:
            self.zones[z] += [(c, start + i) for i, c in enumerate(s)]
        else:
            self.zones[z] += [(c, start) for c in s]
        if z == "json_ld" and self.jsonld_blocks:
            self.jsonld_blocks[-1]["raw"].append(s)

    def handle_data(self, data):
        self._add(data, self.off())

    def handle_entityref(self, name):
        self._add(html.unescape(f"&{name};"), self.off(), step=False)

    def handle_charref(self, name):
        self._add(html.unescape(f"&#{name};"), self.off(), step=False)

    def handle_comment(self, data):
        start = self.off() + 4
        self.zones["comment"] += [(c, start + i) for i, c in enumerate(data)] + [(" ", start)]

    def loc(self, offset):
        line = bisect.bisect_right(self.starts, offset)
        return {"line": line, "col": offset - self.starts[line - 1] + 1}


def _find_all(hay, needle):
    out, i = [], hay.find(needle)
    while i >= 0:
        out.append(i)
        i = hay.find(needle, i + 1)
    return out


def analyze(summary, raw_body, key_texts):
    """Rezultatul TC-08 pentru fiecare text-cheie al unei pagini (din captura TC-01, fără request nou)."""
    base = {"source": "corpul final TC-01; fără request nou și fără JavaScript", "normalization": "OP-01", "location": "OP-03"}
    unknown = None
    if not summary["transport_ok"] or summary["final_status"] is None:
        unknown = "captura a eșuat"
    elif raw_body is None:
        unknown = "corpul lipsește"
    elif not is_html(summary["content_type"]):
        unknown = f"răspunsul nu este HTML (Content-Type: {summary['content_type']})"
    text = None
    if unknown is None:
        text, _, why = decode_html(raw_body, summary["content_type"])
        if text is None:
            unknown = why
    if unknown is not None:
        return {**base, "status": "UNKNOWN", "reason": unknown,
                "key_texts": [{"kt_id": k["kt_id"], "text": k["text"], "status": "UNKNOWN", "reason": unknown, "matches": []} for k in key_texts]}
    p = _Zones(text)
    try:
        p.feed(text)
        p.close()
    except Exception as e:
        reason = f"parsare HTML eșuată: {e}"
        return {**base, "status": "UNKNOWN", "reason": reason,
                "key_texts": [{"kt_id": k["kt_id"], "text": k["text"], "status": "UNKNOWN", "reason": reason, "matches": []} for k in key_texts]}
    norm = {z: normalize_units(u) for z, u in p.zones.items()}
    hay = {z: "".join(c for c, _ in u) for z, u in norm.items()}
    # JSON-LD: și valorile șir decodate (\uXXXX), cu locația la începutul blocului
    jsonld_values = []
    for b in p.jsonld_blocks:
        try:
            vals = []

            def walk(x):
                if isinstance(x, str):
                    vals.append(x)
                elif isinstance(x, dict):
                    for v in x.values():
                        walk(v)
                elif isinstance(x, list):
                    for v in x:
                        walk(v)
            walk(json.loads("".join(b["raw"])))
            jsonld_values.append((normalize_text(" \n ".join(vals)), b["offset"]))
        except ValueError:
            pass
    flat = "".join(c for z in hay.values() for c in z if c != " ")
    results = []
    for k in key_texts:
        needle = normalize_text(k["text"])
        matches = []
        for z in MAIN_ZONES + AUX_ZONES:
            for i in _find_all(hay[z], needle):
                matches.append({"zone": z, **p.loc(norm[z][i][1]), "precision": "caracter" if z not in ("attributes", "meta") else "începutul tagului"})
        if not any(m["zone"] == "json_ld" for m in matches):
            for vals, off in jsonld_values:
                if needle and needle in vals:
                    matches.append({"zone": "json_ld", **p.loc(off), "precision": "începutul blocului (valoare JSON decodată)"})
        zones = {m["zone"] for m in matches}
        if not needle:
            st, reason = "UNKNOWN", "textul-cheie e gol după normalizare"
        elif "body" in zones:
            st, reason = "PRESENT_IN_BODY", None
        elif zones & set(METADATA_ZONES):
            st, reason = "PRESENT_IN_METADATA_ONLY", None
        elif zones & set(AUX_ZONES):
            st, reason = "UNKNOWN", f"{DEV_AUX}: text găsit numai în zone neacoperite de AVL-203 §8.1 ({', '.join(sorted(zones))})"
        elif needle.replace(" ", "") and needle.replace(" ", "") in flat:
            st, reason = "UNKNOWN", "extracție nesigură: textul apare doar unit fără separatori între noduri"
        else:
            st, reason = "ABSENT_FROM_RAW_HTML", None
        results.append({"kt_id": k["kt_id"], "text": k["text"], "normalized": needle, "status": st, "reason": reason,
                        "matches": matches,
                        "deviation": DEV_AUX if reason and reason.startswith(DEV_AUX) else None})
    return {**base, "status": "EVALUATED", "key_texts": results,
            "note": "ABSENT_FROM_RAW_HTML descrie octeții capturați; nu dovedește absența din pagina randată (AVL203-REQ-032). "
                    "PRESENT_IN_BODY descrie zona din HTML, nu vizibilitatea în browser."}
