"""Diagnosticul și raportul în română (AVL203-REQ-033, REQ-040; AVL-203 §15.1).

`diagnose` scrie `diagnostic.json` (constatări, zone, abateri, recomandări) în directorul
analizei; `report` scrie `report.md` și `report.json`. Observațiile, diagnosticul și
recomandările sunt secțiuni separate. Formulările excluse (AVL204-REQ-010) se verifică automat.
"""
import json
import os
import re

from . import GRID_VERSION, IMPLEMENTATION_STATUS, SCRIPT_VERSION
from . import diagnose as dg
from . import recommend
from .util import read_json, sha256_file, utc_now, write_json_new, write_text_new

# AVL-204 §8: formulări excluse (forme afirmative); textele generate nu au voie să le conțină
FORBIDDEN = [
    r"\b(pagina|site-ul)\s+(este|e)\s+indexat",
    r"\bnu\s+vă\s+poate\s+accesa\b",
    r"\b(site-ul|serverul)\s+face\s+cloaking\b",
    r"\btot\s+site-ul\s+poate\s+fi\s+descoperit\b",
    r"\bgoogle\s+a\s+ales\b",
    r"\bdatele\s+structurate\s+sunt\s+corecte\b",
    r"\bveți\s+apărea\b",
    r"\bcreștere\s+garantată\b",
]


class ExcludedClaim(Exception):
    pass


def check_excluded(text):
    hits = [p for p in FORBIDDEN if re.search(p, text, re.I)]
    if hits:
        raise ExcludedClaim(f"formulări excluse de AVL-204 §8 în text: {hits}")


def latest_analysis(run):
    d = os.path.join(run, "derived")
    cands = sorted(x for x in os.listdir(d) if x.startswith("analysis-") and os.path.exists(os.path.join(d, x, "observations.json")))
    if not cands:
        raise FileNotFoundError("nicio analiză cu observații; rulează întâi „analyze”")
    return os.path.join(d, cands[-1])


def diagnose(run, analysis_dir, rules_version):
    if rules_version != GRID_VERSION:
        raise ValueError(f"grila {rules_version} nu e implementată; versiunea disponibilă: {GRID_VERSION}")
    obs = read_json(os.path.join(analysis_dir, "observations.json"))
    plan = read_json(os.path.join(run, "manifest", "plan.frozen.json"))
    cfg = read_json(os.path.join(run, "manifest", "config.json"))
    d = dg.Diagnoser(obs, plan, cfg["ua_manifest"]["effective"])
    findings, deviations = d.run()
    recs = recommend.build(findings, plan)
    out = {"run_id": obs["run_id"], "grid": {"id": "AVL-204", "version": GRID_VERSION}, "script_version": SCRIPT_VERSION,
           "diagnosis_utc": utc_now(), "observations_sha256": sha256_file(os.path.join(analysis_dir, "observations.json")),
           "rules": {k: {"zone": v[0], "state": v[1], "condition": v[2]} for k, v in dg.RULES.items()},
           "findings": findings, "zones": dg.zones(findings, plan), "deviations": deviations, "recommendations": recs,
           "layer": "interpretare (separată de observații, AVL203-REQ-033)"}
    check_excluded(json.dumps({"f": findings, "r": recs}, ensure_ascii=False))
    write_json_new(os.path.join(analysis_dir, "diagnostic.json"), out)
    return out


def _scope(s):
    parts = []
    if "origin" in s:
        parts.append(s["origin"])
    if "page_id" in s:
        parts.append(f"{s['page_id']} {s.get('url', '')}".strip())
    for k in ("crawler", "user_agent", "kt_id", "variant", "method"):
        if s.get(k) and not (k == "user_agent" and s.get("crawler")):
            parts.append(f"{k}={s[k]}")
    return " · ".join(parts)


def _md(text):
    return str(text).replace("|", "\\|").replace("\n", " ")


def report(run, analysis_dir):
    obs = read_json(os.path.join(analysis_dir, "observations.json"))
    diag = read_json(os.path.join(analysis_dir, "diagnostic.json"))
    plan = read_json(os.path.join(run, "manifest", "plan.frozen.json"))
    cfg = read_json(os.path.join(run, "manifest", "config.json"))
    checks_sha = sha256_file(os.path.join(run, "integrity", "sha256sums.txt"))
    label = cfg["measurement_point"]
    L = [f"# Raport de verificare tehnică — {plan['entity']['name']}", ""]
    if label == "TEST":
        L += ["> **RULARE TEST — raport intern.** Nu face parte dintr-o serie de măsurare, nu se compară cu alte rulări și nu susține concluzii publicate (AVL203-REQ-026).", ""]
    L += [f"> {IMPLEMENTATION_STATUS}. Protocol AVL-203 v{cfg['protocol']['version']} (draft), grilă AVL-204 v{diag['grid']['version']} (draft).", ""]

    # ---- rezumat
    zs = diag["zones"]
    names = {"Z1": "Răspunsul site-ului și adresa oficială", "Z2": "Regulile pentru crawlere", "Z3": "Descoperirea prin sitemap",
             "Z4": "Semnalele paginilor", "Z5": "Conținutul livrat în HTML", "Z6": "Răspunsurile pentru crawlere declarate"}
    L += ["## 1. Rezumat", "", "| Zonă | Stare | Constatări „nu poate fi stabilit” |", "|---|---|---|"]
    for z, n in names.items():
        L.append(f"| {z} — {n} | {zs[z]['state']} | {len(zs[z]['undetermined'])} |")
    L += ["", f"Integritatea rulării (TC-07): **{obs['integrity']['status']}**. "
          f"Recomandări: {sum(1 for r in diag['recommendations'] if r['priority'])} cu prioritate, "
          f"{sum(1 for r in diag['recommendations'] if not r['priority'])} verificări suplimentare.", "",
          "„Nicio problemă observată” descrie condițiile testate; nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI (AVL204-REQ-006).", ""]

    # ---- plan
    L += ["## 2. Planul de măsurare", "", f"Entitate: {plan['entity']['name']} ({plan['entity']['type']}) · Origin: {plan['origin']} · "
          f"Punct de măsurare: {label}" + (f" · Serie: {plan['series_id']}" if plan.get("series_id") else ""), "",
          f"Limitele eșantionului: {plan['sample_limits']}", "", "| Pagină | Categorie | URL | Motiv | Texte-cheie |", "|---|---|---|---|---|"]
    for p in plan["pages"]:
        L.append(f"| {p['page_id']} | {p['category']} | {p['url']} | {_md(p['reason'])} | {_md(', '.join(k['text'] for k in p['key_texts']) or '—')} |")
    for x in plan["categories_not_applicable"]:
        L.append(f"| — | {x['category']} | NOT_APPLICABLE | {_md(x['reason'])} | — |")
    if plan.get("identity_page_absent"):
        a = plan["identity_page_absent"]
        L += ["", f"**Pagina de contact / date de identitate: absentă de pe site** (AVL203-REQ-042). Constatare: {a['method']}, {a['date']}, {a['by']}. Limită: {a['limit']}."]
    L += ["", "Politica de acces declarată:", ""]
    L += [f"- {r['crawler']} ({r['kind']}): {r['policy']} · domeniu {r['scope']} · sursa: {r['source']}, {r['declared_on']}" for r in plan["access_policy"]]
    L.append("")

    # ---- observații
    L += ["## 3. Observații (fără interpretare)", "", "### TC-01 — HTTP GET / URL final", "",
          "| Pagină | Status final | URL final | Redirecturi | Content-Type | curl |", "|---|---|---|---|---|---|"]
    for o in obs["TC-01"]:
        L.append(f"| {o['page_id']} | {o['final_status']} | {o['url_final']} | {o['num_redirects']} | {o['content_type']} | {o['curl_exit']} |")
    t2 = obs["TC-02"]
    L += ["", f"### TC-02 — Variante: {t2['convergence']}", ""] + [f"- `{v['url_requested']}` → {v['final_status']} {v['url_final']} (curl {v['curl_exit']})" for v in t2["variants"]]
    t3 = obs["TC-03"]
    L += ["", f"### TC-03 — robots.txt: {t3['file_state']}", "", f"{t3['file_state_reason']}. Mod: {t3['mode']}.", ""]
    if t3["parsed"]:
        L.append(f"Grupuri: {len(t3['parsed']['groups'])} · linii neinterpretabile: {len(t3['parsed']['unparseable'])} · declarații Sitemap: {len(t3['parsed']['sitemaps'])}")
    t4 = obs["TC-04"]
    L += ["", f"### TC-04 — Sitemap: {t4['status']}", ""] + [f"- {s['type']}: `{s['url']}` → {s.get('final_status', s.get('reason'))} {s.get('document_type_observed') or ''}" for s in t4["sitemaps"]]
    L += [f"- Notă: {n}" for n in t4["notes"]]
    L += ["", "### TC-05 — Semnale raw HTML", ""]
    for o in obs["TC-05"]:
        if o["status"] != "EXTRACTED":
            L.append(f"- {o['page_id']}: UNKNOWN — {o.get('reason')}")
            continue
        title = "; ".join(t["value"] for t in o["title"]) or "—"
        canon = "; ".join(c.get("resolved") or "?" for c in o["canonical"]) or "—"
        L.append(f"- {o['page_id']}: title „{title}” · canonical {canon} · meta robots {[m['value'] for m in o['meta_robots']] or '—'} · "
                 f"X-Robots-Tag {[x['value'] for x in o['x_robots_tag']] or '—'} · lang {[h['value'] for h in o['html_lang']] or '—'} · "
                 f"JSON-LD {[b['json_syntax'] for b in o['json_ld']] or '—'}")
    L += ["", "### TC-06 — Răspunsuri pentru User-Agent-ii declarați", ""]
    for o in obs["TC-06"]:
        v = o["reference_variability"]
        L.append(f"- {o['page_id']}: referință — status/URL/headere {v.get('status_url_headers')}, conținut {v.get('content')}")
        for a in o["agents"]:
            L.append(f"  - {a['ua_key']}: {a.get('status_url_headers', a.get('comparison'))}; conținut {a.get('content', '—')}"
                     + (f"; diferențe {a['differences']}" if a.get("differences") else ""))
    L += ["", "### TC-08 — Textele-cheie în HTML-ul brut", ""]
    for o in obs["TC-08"]:
        for k in o["key_texts"]:
            loc = "; ".join(f"{m['zone']} L{m['line']}:{m['col']}" for m in k["matches"][:5]) or "—"
            L.append(f"- {o['page_id']} {k['kt_id']} „{k['text']}”: **{k['status']}** · {loc}" + (f" · {k['reason']}" if k.get("reason") else ""))
    L += ["", "`ABSENT_FROM_RAW_HTML` descrie octeții capturați, nu pagina randată; un User-Agent declarat nu e crawlerul autentificat al furnizorului.", ""]

    # ---- diagnostic
    L += ["## 4. Diagnostic (interpretare după AVL-204 v" + diag["grid"]["version"] + ")", "",
          "| ID | Regulă | Zonă | Stare | Domeniu | Detalii | Observații |", "|---|---|---|---|---|---|---|"]
    for f in sorted(diag["findings"], key=lambda f: (f["zone"], dg.SEVERITY[f["state"]], f["finding_id"])):
        st = f["state"] + (f" ({f['qualification']})" if f.get("qualification") else "")
        rule = f["rule_id"] + (f" (în loc de {f['would_apply']})" if f.get("would_apply") else "") + (f" · {f['deviation']}" if f.get("deviation") else "")
        L.append(f"| {f['finding_id']} | {rule} | {f['zone']} | {st} | {_md(_scope(f['scope']))} | {_md(f['detail'])} | {', '.join(f['observation_ids'])} |")
    L.append("")

    # ---- recomandări
    L += ["## 5. Recomandări", "", "Prioritatea este o judecată de interpretare (AVL-204 §7). Efortul e o estimare a redactorului și poate fi corectat de entitatea evaluată.", ""]
    for r in diag["recommendations"]:
        L += [f"### {r['recommendation_id']} · {r['priority'] or 'fără clasă'} · {r['rule_id']} — {r['element']}", "",
              f"- Certitudine: {r['state']}", f"- Ce se poate face: {r['action']}", f"- Verificare ulterioară: {r['follow_up']}",
              f"- Impact potențial: {r['impact']} · efort: {r['effort'] or 'necompletat (estimare)'} · dependențe: {r['dependencies'] or 'necompletate'}",
              f"- Prioritate: {r['priority_reason']}", f"- Constatări: {', '.join(r['finding_ids'])} · observații: {', '.join(r['observation_ids'])}", ""]
    if not diag["recommendations"]:
        L += ["Nicio recomandare.", ""]

    # ---- necunoscute, abateri, limite, trasabilitate
    L += ["## 6. Ce nu a putut fi stabilit", ""]
    und = [f for f in diag["findings"] if f["state"] == dg.UNDETERMINED]
    L += [f"- {f['finding_id']} {f['rule_id']} · {_scope(f['scope'])}: {f['detail']}" for f in und] or ["Nimic."]
    for z, v in zs.items():
        if v["state"] == "neevaluată":
            L.append(f"- Zona {z} nu a fost evaluată: {v['reason']}.")
        if v.get("pages_not_evaluated"):
            L.append(f"- Zona {z}: pagini fără texte-cheie declarate, neevaluate: {', '.join(v['pages_not_evaluated'])}.")
    L += ["", "## 7. Abateri de la grilă (AVL204-REQ-012)", ""]
    devs = {}
    for d in diag["deviations"]:
        devs.setdefault(d["deviation"], []).append(d)
    if any(r["priority"] is None for r in diag["recommendations"]):
        devs.setdefault("DEV-P07", [])
    for k in sorted(devs):
        L.append(f"- **{k}** — {dg.DEVIATIONS[k]}" + (f": {len(devs[k])} cazuri" if devs[k] else ""))
    if not devs:
        L.append("Niciuna.")
    L += ["", "## 8. Limitele evaluării (AVL-203 §14)", "",
          "- Protocolul nu demonstrează indexarea, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.",
          "- Un răspuns `200` nu e indexare; un `403` pentru un User-Agent declarat nu dovedește că infrastructura furnizorului e blocată.",
          "- Raw HTML, nu DOM randat; `curl --user-agent` nu reproduce IP-urile sau infrastructura furnizorului.",
          "- O schimbare tehnică nu se prezintă drept cauză a unei schimbări de vizibilitate pe baza succesiunii temporale.",
          f"- Eșantion: {plan['sample_limits']}", "",
          "## 9. Trasabilitate", "",
          f"- Run ID: `{cfg['run_id']}` · etichetă `{label}`",
          f"- Protocol AVL-203 v{cfg['protocol']['version']} · grilă AVL-204 v{diag['grid']['version']} · script v{SCRIPT_VERSION}",
          f"- Plan înghețat: sha256 `{cfg['plan']['sha256']}`",
          f"- Manifest User-Agent: `{os.path.basename(cfg['ua_manifest']['file'])}` sha256 `{cfg['ua_manifest']['sha256']}`",
          f"- Configurație operațională: sha256 `{cfg['operational_config']['sha256']}`",
          f"- Lista de checksum-uri (`integrity/sha256sums.txt`): sha256 `{checks_sha}`",
          f"- Observații: `{os.path.relpath(os.path.join(analysis_dir, 'observations.json'), run)}` · diagnostic: sha256 observații `{diag['observations_sha256']}`", ""]
    text = "\n".join(L)
    check_excluded(text)
    write_text_new(os.path.join(analysis_dir, "report.md"), text)
    write_json_new(os.path.join(analysis_dir, "report.json"), {
        "run_id": cfg["run_id"], "measurement_point": label, "report_utc": utc_now(), "integrity": obs["integrity"]["status"],
        "zones": zs, "findings": diag["findings"], "recommendations": diag["recommendations"], "deviations": diag["deviations"],
        "trace": {"protocol": cfg["protocol"], "grid": diag["grid"], "script_version": SCRIPT_VERSION, "plan_sha256": cfg["plan"]["sha256"],
                  "checksums_sha256": checks_sha, "observations_sha256": diag["observations_sha256"]}})
    return os.path.join(analysis_dir, "report.md")
