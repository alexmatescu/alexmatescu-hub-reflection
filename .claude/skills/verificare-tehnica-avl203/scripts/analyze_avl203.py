#!/usr/bin/env python3
"""AVL-203 — analizorul unei rulări (implementare candidată, nevalidată — AVL-203 §17.4).

Citește artefactele brute capturate de run_avl203.sh și produce, fără să le modifice:
  manifest/run.json        TC-00: identitatea și condițiile rulării
  evidence-index.tsv       index de artefacte (path, dimensiune, sha256, TC, URL, UA)
  observations.json / .md  observațiile permise per TC (AVL-203 §3), fără interpretare
  exceptions.md            erori, abateri și limitări ale rulării

Reguli: valorile care nu pot fi stabilite sigur rămân UNKNOWN cu motiv (AVL-200 §6);
nicio politică robots nu e declarată ALLOW fără parser RFC 9309 validat (AVL-203 §6, §17.5);
nicio diferență de hash nu e numită cloaking (AVL-203 §9). Doar bibliotecă standard.
"""
import hashlib
import json
import os
import re
import sys
from html.parser import HTMLParser

RUN = sys.argv[1]
J = lambda *p: os.path.join(RUN, *p)
TC_PARITY_FIELDS = ["http_code", "url_effective", "num_redirects", "content_type", "x_robots_tag", "size_download", "sha256_body"]
ROBOTS_MATRIX = ["*", "Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]


def rd(path, binary=False):
    try:
        with open(path, "rb" if binary else "r", encoding=None if binary else "utf-8", errors=None if binary else "replace") as f:
            return f.read()
    except FileNotFoundError:
        return None


def sha256(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(65536), b""):
            h.update(b)
    return h.hexdigest()


def kv(path):
    out = {}
    for line in (rd(path) or "").splitlines():
        if "=" in line:
            k, v = line.split("=", 1)
            out[k.strip()] = v.strip()
    return out


def header_blocks(path):
    """Cu --location, fișierul de headere conține toate răspunsurile din lanț (AVL-203 §5)."""
    txt = rd(path)
    if txt is None:
        return []
    blocks, cur = [], None
    for line in txt.replace("\r", "").split("\n"):
        if re.match(r"^HTTP/\S+\s+\d{3}", line):
            cur = {"status_line": line.strip(), "headers": []}
            blocks.append(cur)
        elif cur is not None and ":" in line:
            k, v = line.split(":", 1)
            cur["headers"].append((k.strip().lower(), v.strip()))
    return blocks


def final_headers(path):
    b = header_blocks(path)
    return b[-1] if b else None


def hvals(block, name):
    return [v for k, v in (block or {}).get("headers", []) if k == name]


def capture(prefix):
    """Rezumatul unei capturi: metrics + headere finale + hash corp."""
    m = kv(prefix + ".metrics")
    body = prefix + ".body"
    fin = final_headers(prefix + ".headers")
    c = {
        "files": sorted(os.path.relpath(p, RUN) for p in [prefix + s for s in (".headers", ".body", ".metrics", ".err")] if os.path.exists(p)),
        "curl_exit": m.get("curl_exit", "UNKNOWN"),
        "http_code": m.get("http_code", "UNKNOWN"),
        "url_effective": m.get("url_effective", "UNKNOWN"),
        "num_redirects": m.get("num_redirects", "UNKNOWN"),
        "content_type": m.get("content_type") or "UNKNOWN",
        "size_download": m.get("size_download", "UNKNOWN"),
        "remote_ip": m.get("remote_ip", ""),
        "redirect_chain": [b["status_line"] for b in header_blocks(prefix + ".headers")],
        "final_status_line": fin["status_line"] if fin else "UNKNOWN",
        "x_robots_tag": "; ".join(hvals(fin, "x-robots-tag")) if fin else "UNKNOWN",
        "sha256_body": sha256(body) if os.path.exists(body) else "UNKNOWN",
        "error": (rd(prefix + ".err") or "").strip() or None,
    }
    if c["x_robots_tag"] == "" and fin:
        c["x_robots_tag"] = "ABSENT"
    return c


# ---------------------------------------------------------------- TC-05
class Signals(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title, self.in_title, self.title_line = None, False, None
        self.canonicals, self.meta_robots, self.html_lang = [], [], None
        self.jsonld, self.in_jsonld, self.buf = [], False, []

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        line = self.getpos()[0]
        if tag == "html" and self.html_lang is None and "lang" in a:
            self.html_lang = {"value": a["lang"], "line": line}
        elif tag == "title" and self.title is None:
            self.in_title, self.title_line, self.buf = True, line, []
        elif tag == "link" and "canonical" in a.get("rel", "").lower().split():
            self.canonicals.append({"value": a.get("href", ""), "line": line})
        elif tag == "meta" and a.get("name", "").lower() in ("robots", "googlebot", "bingbot"):
            self.meta_robots.append({"name": a.get("name"), "value": a.get("content", ""), "line": line})
        elif tag == "script" and a.get("type", "").lower().strip() == "application/ld+json":
            self.in_jsonld, self.buf = True, []
            self.jsonld_line = line

    def handle_endtag(self, tag):
        if tag == "title" and self.in_title:
            self.title = {"value": " ".join("".join(self.buf).split()), "line": self.title_line}
            self.in_title = False
        elif tag == "script" and self.in_jsonld:
            raw = "".join(self.buf)
            try:
                d = json.loads(raw)
                types = sorted({str(x.get("@type")) for x in (d.get("@graph", [d]) if isinstance(d, dict) else d) if isinstance(x, dict)})
                self.jsonld.append({"line": self.jsonld_line, "json_parse": "OK", "types": types})
            except Exception as e:  # sintaxă JSON invalidă — observație, nu interpretare
                self.jsonld.append({"line": self.jsonld_line, "json_parse": f"EROARE: {e.__class__.__name__}"})
            self.in_jsonld = False

    def handle_data(self, data):
        if self.in_title or self.in_jsonld:
            self.buf.append(data)


def tc05(prefix, cap):
    ct = cap["content_type"].lower()
    if cap["http_code"] == "UNKNOWN" or not os.path.exists(prefix + ".body"):
        return {"status": "UNKNOWN", "motiv": "corpul răspunsului nu a fost capturat"}
    if "html" not in ct:
        return {"status": "NOT_APPLICABLE", "motiv": f"content-type final: {cap['content_type']}"}
    raw = rd(prefix + ".body", binary=True)
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        return {"status": "UNKNOWN", "motiv": "corpul nu e UTF-8 valid; extragerea nu e sigură"}
    p = Signals()
    try:
        p.feed(text)
        p.close()
    except Exception as e:
        return {"status": "UNKNOWN", "motiv": f"parsare HTML eșuată: {e}"}
    yn = lambda v: "PREZENT" if v else "ABSENT"
    return {
        "status": "EXTRAS",
        "sursa": "raw HTML + headerele răspunsului final (nu DOM randat — AVL-203 §8)",
        "title": p.title or "ABSENT",
        "canonical_declarat": p.canonicals or "ABSENT",
        "meta_robots": p.meta_robots or "ABSENT",
        "x_robots_tag": cap["x_robots_tag"],
        "html_lang": p.html_lang or "ABSENT",
        "json_ld": {"prezenta": yn(p.jsonld), "blocuri": p.jsonld},
        "note": [
            "Canonicalul declarat nu este automat cel selectat de Google.",
            "Prezența JSON-LD nu demonstrează validitatea vocabularului sau utilizarea de către un model.",
        ],
    }


# ---------------------------------------------------------------- TC-03
def robots_inventory(body):
    groups, cur, sitemaps, last_was_ua = [], None, [], False
    for n, raw in enumerate(body.splitlines(), 1):
        line = raw.split("#", 1)[0].strip()
        if ":" not in line:
            continue
        k, v = (x.strip() for x in line.split(":", 1))
        k = k.lower()
        if k == "user-agent":
            if not last_was_ua:
                cur = {"user_agents": [], "rules": []}
                groups.append(cur)
            cur["user_agents"].append(v)
            last_was_ua = True
            continue
        last_was_ua = False
        if k in ("allow", "disallow") and cur is not None:
            cur["rules"].append({"line": n, "directive": k, "path": v})
        elif k == "sitemap":
            sitemaps.append({"line": n, "url": v})
    matrix = {}
    for tok in ROBOTS_MATRIX:
        gs = [g for g in groups if any(u.lower() == tok.lower() for u in g["user_agents"])]
        matrix[tok] = {
            "grup_specific_declarat": "DA" if gs else "NU",
            "reguli_declarate": [r for g in gs for r in g["rules"]],
            "politica_aplicabila": "NEDETERMINAT",
            "motiv": "parser RFC 9309 nevalidat (AVL-203 §6, §17.5); inventarul de mai sus e inspecție preliminară",
        }
    return {"grupuri": groups, "sitemap_declarat": sitemaps, "matrice": matrix}


# ---------------------------------------------------------------- run
def main():
    params = kv(J("manifest", "params.env"))
    env = rd(J("manifest", "env.txt")) or ""
    urls = [u for u in (rd(J("manifest", "urls.txt")) or "").splitlines() if u.strip()]
    reqs = [l.split("\t") for l in (rd(J("manifest", "requests.tsv")) or "").splitlines()[1:] if l.strip()]
    obs, exc = {"run_id": params.get("run_id"), "TC-01": [], "TC-02": [], "TC-03": [], "TC-04": [], "TC-05": [], "TC-06": []}, []

    for tc, rel, url, uakey, rc, t0 in reqs:
        if rc != "0":
            exc.append(f"{tc} · {url} · UA={uakey} · curl_exit={rc} · {(rd(J(rel + '.err')) or '').strip()[:300]}")

    # TC-01 + TC-05
    for i, u in enumerate(urls, 1):
        pre = J("http", f"u{i:02d}")
        cap = capture(pre)
        obs["TC-01"].append({"url_cerut": u, **cap})
        obs["TC-05"].append({"url_cerut": u, **tc05(pre, cap)})

    # TC-02
    variants = {}
    for tc, rel, url, *_ in reqs:
        if tc == "TC-02":
            host = re.sub(r"^https?://(www\.)?", "", url).strip("/")
            variants.setdefault(host, []).append({"varianta": url, **capture(J(rel))})
    for host, vs in variants.items():
        finals = {v["url_effective"] for v in vs if v["curl_exit"] == "0" and v["http_code"].startswith(("2", "3"))}
        errs = [v for v in vs if v["curl_exit"] != "0"]
        conv = "CONVERGENT" if len(finals) == 1 and not errs else ("DIVERGENT" if len(finals) > 1 else ("PARȚIAL" if finals else "UNKNOWN"))
        obs["TC-02"].append({"origine": host, "convergenta": conv, "url_finale": sorted(finals), "variante": vs})

    # TC-03
    for tc, rel, url, *_ in reqs:
        if tc == "TC-03":
            cap = capture(J(rel))
            body = rd(J(rel + ".body"))
            inv = robots_inventory(body) if body is not None and cap["http_code"].startswith("2") else None
            obs["TC-03"].append({"url": url, **cap, "inventar": inv or {"status": "UNKNOWN", "motiv": f"robots.txt necapturat sau status {cap['http_code']}"}})

    # TC-04 — regula de clasificare documentată în SKILL.md (propusă de implementare, v0.1.0)
    by_origin = {}
    for tc, rel, url, *_ in reqs:
        if tc == "TC-04":
            origin = re.match(r"^(.*?)(_declared\d+|_conventional_.*)$", os.path.basename(rel)).group(1)
            by_origin.setdefault(origin, []).append((rel, url, capture(J(rel))))
    robots_ok = {re.sub(r"[^A-Za-z0-9._-]+", "_", re.sub(r"^https?://", "", o["url"].rsplit("/robots.txt", 1)[0])): o for o in obs["TC-03"]}
    for origin, items in by_origin.items():
        decl = [x for x in items if "_declared" in x[0]]
        conv = [x for x in items if "_conventional_" in x[0]]
        ok = lambda c: c["curl_exit"] == "0" and c["http_code"].startswith("2")
        rob = robots_ok.get(origin)
        if rob is None or rob["http_code"] == "UNKNOWN":
            status = "UNKNOWN"
        elif decl:
            status = "DECLARED" if any(ok(c) for _, _, c in decl) else "UNAVAILABLE"
        elif any(ok(c) for _, _, c in conv):
            status = "FOUND_AT_CONVENTIONAL_PATH"
        elif conv and all(c["http_code"] in ("404", "410") for _, _, c in conv):
            status = "NOT_FOUND"
        else:
            status = "UNAVAILABLE"
        obs["TC-04"].append({
            "origine": origin, "status": status,
            "capturi": [{"url": u, "tip": "declarat" if "_declared" in r else "conventional", "http_code": c["http_code"],
                         "content_type": c["content_type"], "size_download": c["size_download"], "curl_exit": c["curl_exit"]} for r, u, c in items],
            "nota": "Un sitemap găsit nu dovedește că întregul site e descoperibil; validarea XML completă e în afara Core (AVL-203 §7).",
        })

    # TC-06
    for i, u in enumerate(urls, 1):
        rows = {}
        for tc, rel, url, uakey, *_ in reqs:
            if tc == "TC-06" and os.path.basename(rel).startswith(f"u{i:02d}_"):
                rows[uakey] = capture(J(rel))
        ref = rows.get("client")
        # Control de variabilitate intrinsecă: TC-01 și TC-06/client folosesc același client și aceiași
        # parametri; dacă diferă, octeții paginii variază de la un request la altul, iar diferențele
        # de hash dintre User-Agent-uri nu pot fi atribuite UA-ului.
        ctrl = capture(J("http", f"u{i:02d}"))
        if ref is None:
            variab = {"status": "UNKNOWN", "motiv": "captura TC-06/client lipsește"}
        else:
            dif_ctrl = {f: f"{ctrl[f]} → {ref[f]}" for f in TC_PARITY_FIELDS if f != "url_effective" and ctrl[f] != ref[f]}
            variab = {"status": "DA" if dif_ctrl else "NU", "comparatie": "TC-01 vs TC-06/client (același client, același URL)", "diferente": dif_ctrl}
        comp = {}
        for k, c in rows.items():
            if k == "client" or ref is None:
                continue
            comp[k] = {}
            for f in TC_PARITY_FIELDS:
                if f in ("size_download", "sha256_body") and variab["status"] != "NU":
                    # AVL-203 §9 (v0.2.0): fără dublă captură stabilă, diferențele de conținut nu se atribuie UA-ului
                    comp[k][f] = "UNKNOWN (fără dublă captură)" if variab["status"] == "UNKNOWN" else (
                        "IDENTIC" if c[f] == ref[f] else "NEATRIBUIBIL (variabilitate intrinsecă)")
                else:
                    comp[k][f] = "IDENTIC" if c[f] == ref[f] else f"DIFERIT ({ref[f]} → {c[f]})"
        obs["TC-06"].append({
            "url_cerut": u, "referinta": "client", "variabilitate_intrinseca": variab, "capturi": rows, "comparatie_fata_de_client": comp,
            "nota": "User-Agent declarat, nu crawler autentificat; o diferență de hash arată doar octeți diferiți, nu cloaking (AVL-203 §9).",
        })

    # evidence index (TC-07, partea de indexare)
    with open(J("evidence-index.tsv"), "w", encoding="utf-8") as f:
        f.write("evidence_id\tpath\tsize_bytes\tsha256\ttc\turl_cerut\tua_cheie\tstart_utc\n")
        n = 0
        for tc, rel, url, uakey, rc, t0 in reqs:
            for suf in (".headers", ".body", ".metrics", ".err"):
                p = J(rel + suf)
                if os.path.exists(p):
                    n += 1
                    f.write(f"{params.get('run_id')}-E{n:04d}\t{rel + suf}\t{os.path.getsize(p)}\t{sha256(p)}\t{tc}\t{url}\t{uakey}\t{t0}\n")

    ua_rows = [l.split("\t") for l in (rd(J("manifest", params.get("ua_manifest", ""))) or "").splitlines() if l and not l.startswith("#")]
    run = {
        **{k: params.get(k) for k in ("run_id", "entity", "label", "protocol", "protocol_version", "script_version", "ua_manifest",
                                     "chrome_version", "connect_timeout", "max_time", "redirect_policy", "compression", "delay_seconds", "insecure_tls")},
        "start_utc": re.search(r"start_utc=(\S+)", env).group(1) if "start_utc=" in env else "UNKNOWN",
        "end_utc": re.search(r"end_utc=(\S+)", env).group(1) if "end_utc=" in env else "UNKNOWN",
        "curl_version": (env.split("--- curl --version\n", 1)[1].splitlines()[0] if "--- curl --version" in env else "UNKNOWN"),
        "urls_testate": urls,
        "origini": sorted({re.match(r"^https?://[^/]+", u).group(0) for u in urls}),
        "user_agents_efective": [{"cheie": r[0], "token": r[1], "status": r[2], "sir": r[4].replace("{CHROME_VERSION}", params.get("chrome_version", "")) if len(r) > 4 else ""} for r in ua_rows],
        "plan_de_masurare": sorted(x for x in os.listdir(J("manifest")) if x.startswith("plan")) or "NEDECLARAT",
        "statut_implementare": "candidată, NEVALIDATĂ ca implementare de referință (AVL-203 §17.4)",
        "nr_requesturi": len(reqs),
        "nr_erori_curl": sum(1 for r in reqs if r[4] != "0"),
    }
    json.dump(run, open(J("manifest", "run.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    json.dump(obs, open(J("observations.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)

    # observations.md — rezumat lizibil, doar observații permise
    L = [f"# Observații tehnice AVL-203 — {run['run_id']}", "",
         f"Entitate: {run['entity']} · Etichetă: {run['label']} · Protocol AVL-203 v{run['protocol_version']} · Script v{run['script_version']}",
         f"Start {run['start_utc']} · Final {run['end_utc']} · {run['nr_requesturi']} requesturi · {run['nr_erori_curl']} erori curl",
         "", "> Observații, nu interpretări: `200` ≠ indexare; `403` pentru un UA declarat ≠ furnizor blocat; politica robots rămâne NEDETERMINAT fără parser RFC 9309 validat.", ""]
    L += ["## TC-01 — HTTP GET / URL final", "", "| URL cerut | Cod | URL final | Redirecturi | Content-Type | Octeți |", "|---|---|---|---|---|---|"]
    L += [f"| {o['url_cerut']} | {o['http_code']} | {o['url_effective']} | {o['num_redirects']} | {o['content_type']} | {o['size_download']} |" for o in obs["TC-01"]]
    L += ["", "## TC-02 — Variante de host și protocol", ""]
    for o in obs["TC-02"]:
        L.append(f"- **{o['origine']}**: {o['convergenta']} → {', '.join(o['url_finale']) or '—'}")
        L += [f"  - `{v['varianta']}` → {v['http_code']} {v['url_effective']}" + (f" · eroare: {v['error'][:120]}" if v['error'] else "") for v in o["variante"]]
    L += ["", "## TC-03 — robots.txt", ""]
    for o in obs["TC-03"]:
        L.append(f"- `{o['url']}` → {o['http_code']} ({o['content_type']}), {o['size_download']} octeți")
        inv = o["inventar"]
        if "matrice" in inv:
            L += [f"  - `{t}`: grup specific {m['grup_specific_declarat']}, {len(m['reguli_declarate'])} reguli · politică: {m['politica_aplicabila']}" for t, m in inv["matrice"].items()]
            L.append(f"  - Sitemap declarat: {', '.join(s['url'] for s in inv['sitemap_declarat']) or 'niciunul'}")
    L += ["", "## TC-04 — Sitemap", ""]
    for o in obs["TC-04"]:
        L.append(f"- **{o['origine']}**: {o['status']}")
        L += [f"  - {c['tip']}: `{c['url']}` → {c['http_code']} ({c['content_type']})" for c in o["capturi"]]
    L += ["", "## TC-05 — Semnale raw HTML", ""]
    for o in obs["TC-05"]:
        if o.get("status") != "EXTRAS":
            L.append(f"- {o['url_cerut']}: {o['status']} — {o.get('motiv')}")
            continue
        t = o["title"]["value"] if isinstance(o["title"], dict) else o["title"]
        c = ", ".join(x["value"] for x in o["canonical_declarat"]) if isinstance(o["canonical_declarat"], list) else o["canonical_declarat"]
        mr = ", ".join(f"{x['name']}={x['value']}" for x in o["meta_robots"]) if isinstance(o["meta_robots"], list) else o["meta_robots"]
        lang = o["html_lang"]["value"] if isinstance(o["html_lang"], dict) else o["html_lang"]
        L += [f"- **{o['url_cerut']}**", f"  - title: {t}", f"  - canonical declarat: {c}", f"  - meta robots: {mr}",
              f"  - X-Robots-Tag: {o['x_robots_tag']}", f"  - html lang: {lang}",
              f"  - JSON-LD: {o['json_ld']['prezenta']} ({len(o['json_ld']['blocuri'])} blocuri; " + ", ".join(b['json_parse'] for b in o['json_ld']['blocuri']) + ")"]
    L += ["", "## TC-06 — User-Agent Response Parity (față de clientul implicit)", ""]
    for o in obs["TC-06"]:
        L.append(f"- **{o['url_cerut']}**")
        v = o["variabilitate_intrinseca"]
        L.append(f"  - control (același client, două requesturi): variabilitate intrinsecă **{v['status']}**"
                 + (f" — {'; '.join(f'{k}: {x}' for k, x in v.get('diferente', {}).items())}; diferențele de dimensiune/hash nu se atribuie User-Agent-ului (AVL-203 §9)" if v["status"] == "DA" else ""))
        for k, comp in o["comparatie_fata_de_client"].items():
            dif = {f: v for f, v in comp.items() if v != "IDENTIC"}
            L.append(f"  - `{k}`: " + ("fără diferențe atribuibile" if not any(v.startswith("DIFERIT") for v in dif.values()) else "; ".join(f"{f}: {v}" for f, v in dif.items() if v.startswith("DIFERIT"))))
    L += ["", "## TC-07 — Integritate", "", "Index: `evidence-index.tsv` · Checksum-uri: `integrity/sha256sums.txt` · Verificare: `integrity/verify.txt`."]
    open(J("observations.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")

    E = ["# Excepții și limitări — " + str(run["run_id"]), "",
         "- Implementare candidată, nevalidată ca implementare de referință (AVL-203 §17.4).",
         "- Politica robots: NEDETERMINAT pentru toți agenții — parser RFC 9309 nevalidat (§17.5).",
         "- Șiruri User-Agent cu status NECONFIRMAT / DOAR_TOKEN în manifest (§17.6): " +
         ", ".join(f"{r[0]}={r[2]}" for r in ua_rows if len(r) > 2 and r[2] in ("NECONFIRMAT", "DOAR_TOKEN", "OFICIAL_CU_VERSIUNE_ALEASA")) + ".",
         "- Raw HTML, nu DOM randat; `curl --user-agent` nu simulează infrastructura IP/WAF a furnizorului."]
    if run["plan_de_masurare"] == "NEDECLARAT":
        E.append("- **Abatere:** planul de măsurare (URL-uri, motiv, limite) nu a fost atașat rulării (AVL-203 §1).")
    E += ["", "## Erori de captură", ""] + ([f"- {e}" for e in exc] or ["Niciuna."])
    open(J("exceptions.md"), "w", encoding="utf-8").write("\n".join(E) + "\n")


if __name__ == "__main__":
    main()
