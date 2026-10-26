"""Recomandări și prioritizare după AVL-204 §7 (AVL203-REQ-035, AVL204-REQ-009).

Fiecare recomandare are observațiile-suport, gradul de certitudine, elementul de intervenție și
verificarea ulterioară. Impactul se calculează din plan; efortul și dependențele sunt estimări ale
redactorului și rămân `null` până la completare (registru, punctul F). Constatările „nu poate fi
stabilit” primesc o verificare suplimentară fără clasă de prioritate (AVL204-REQ-009, v0.2.0).
"""
from .diagnose import CONFIRMED, CORE, NONE, POSSIBLE, UNDETERMINED

TEMPLATES = {
    "R-Z1-01": ("statusul HTTP al URL-ului din plan", "Verificați de ce URL-ul răspunde cu eroare; dacă pagina trebuie să existe, restabiliți un răspuns 2xx sau un redirect spre adresa oficială.", "TC-01"),
    "R-Z1-02": ("certificatul TLS al originului", "Verificați certificatul și lanțul de certificare servite pentru host.", "TC-01, TC-02"),
    "R-Z1-03": ("redirecturile dintre variantele de host și protocol", "Faceți ca toate variantele relevante să ajungă la aceeași adresă oficială.", "TC-02"),
    "R-Z1-04": ("redirectul URL-ului din plan", "Confirmați dacă redirectul e intenționat; dacă da, declarați-l în plan; dacă nu, corectați adresa sau redirectul.", "TC-01"),
    "R-Z1-05": ("lanțul de redirecturi", "Reduceți lanțul la un singur redirect direct spre URL-ul final.", "TC-01"),
    "R-Z1-06": ("redirectul http → https", "Redirecționați varianta http spre https.", "TC-02"),
    "R-Z1-09": ("disponibilitatea serverului", "Verificați rezolvarea DNS, conectivitatea și timpul de răspuns al serverului pentru URL-ul semnalat.", "TC-01"),
    "R-Z2-01": ("regula din robots.txt", "Ajustați regula din robots.txt ca să corespundă politicii de acces declarate pentru crawler.", "TC-03"),
    "R-Z2-02": ("disponibilitatea fișierului robots.txt", "Asigurați un răspuns 2xx (sau 404, dacă nu doriți reguli) pentru robots.txt.", "TC-03"),
    "R-Z2-03": ("fișierul robots.txt", "Corectați liniile care par directive scrise greșit.", "TC-03"),
    "R-Z2-08": ("răspunsul pentru robots.txt", "Faceți ca robots.txt să răspundă 2xx (sau 404, dacă nu doriți reguli), fără limitare de rată.", "TC-03"),
    "R-Z2-09": ("redirecturile fișierului robots.txt", "Reduceți lanțul de redirecturi al robots.txt la cel mult cinci, ideal la zero.", "TC-03"),
    "R-Z3-01": ("sitemap-ul declarat", "Faceți ca sitemap-ul declarat să răspundă 2xx sau corectați declarația din robots.txt.", "TC-04"),
    "R-Z3-02": ("declarația Sitemap din robots.txt", "Declarați sitemap-ul existent în robots.txt, cu URL complet.", "TC-04"),
    "R-Z3-03": ("sitemap-ul", "Publicați un sitemap și declarați-l în robots.txt.", "TC-04"),
    "R-Z4-01": ("directiva noindex", "Eliminați noindex/none de pe URL-ul pe care politica declarată îl vrea indexat.", "TC-05"),
    "R-Z4-02": ("canonicalul declarat", "Faceți canonicalul să trimită la un URL care răspunde 2xx.", "TC-05"),
    "R-Z4-03": ("blocul JSON-LD", "Corectați sintaxa JSON a blocului semnalat.", "TC-05"),
    "R-Z4-04": ("elementul <title>", "Adăugați un <title> descriptiv.", "TC-05"),
    "R-Z4-05": ("canonicalul declarat", "Confirmați canonicalul; dacă e intenționat, declarați-l în plan, altfel aliniați-l la URL-ul final.", "TC-05"),
    "R-Z4-06": ("datele structurate ale paginii despre entitate", "Adăugați un bloc JSON-LD care descrie entitatea.", "TC-05"),
    "R-Z4-07": ("atributul lang", "Declarați limba documentului în <html lang>.", "TC-05"),
    "R-Z4-10": ("canonicalul declarat", "Faceți canonicalul să trimită direct la URL-ul final, fără redirect.", "TC-05"),
    "R-Z5-01": ("conținutul livrat în HTML", "Livrați textul-cheie în HTML-ul inițial al răspunsului (de exemplu prin randare pe server).", "TC-08"),
    "R-Z5-02": ("conținutul livrat în HTML", "Includeți textul-cheie și în corpul documentului, nu doar în metadate.", "TC-08"),
    "R-Z5-05": ("conținutul livrat în HTML", "Livrați textul-cheie în corpul HTML-ului inițial, nu doar în scripturi sau în zone neafișate.", "TC-08"),
    "R-Z6-01": ("configurația serverului, a WAF-ului sau a CDN-ului", "Verificați regulile care tratează diferit User-Agent-ul declarat.", "TC-06"),
    "R-Z6-02": ("configurația serverului, a WAF-ului sau a CDN-ului", "Verificați de unde vin headerele diferite pentru User-Agent-ul declarat.", "TC-06"),
    "R-Z6-03": ("configurația serverului sau a aplicației", "Verificați de ce conținutul diferă pentru User-Agent-ul declarat.", "TC-06"),
    "R-Z6-06": ("configurația serverului, a WAF-ului sau a CDN-ului", "Verificați dacă diferența de răspuns pentru User-Agent-ul declarat este intenționată.", "TC-06"),
}


def _impact(group, plan):
    pages = {p["page_id"]: p for p in plan["pages"]}
    cats = {pages[s["page_id"]]["category"] for s in group["scopes"] if s.get("page_id") in pages}
    crawlers = {s.get("crawler") for s in group["scopes"] if s.get("crawler")}
    if any("origin" in s for s in group["scopes"]) or "pagina_principala" in cats or set(CORE) <= crawlers:
        return "mare"
    if len({s.get("page_id") for s in group["scopes"]}) > 1 or "despre" in cats:
        return "mediu"
    return "mic"


def _class(state, zone, impact):
    if state == CONFIRMED and zone in ("Z1", "Z2", "Z6") and impact == "mare":
        return "P1"
    if state == CONFIRMED or (state == POSSIBLE and impact == "mare"):
        return "P2"
    if state == POSSIBLE:
        return "P3"
    return None


def build(findings, plan):
    groups = {}
    for f in findings:
        if f["state"] == NONE:
            continue
        key = (f["rule_id"], f.get("would_apply"), f["state"])
        g = groups.setdefault(key, {"rule_id": f["rule_id"], "would_apply": f.get("would_apply"), "state": f["state"],
                                    "zone": f["zone"], "finding_ids": [], "scopes": [], "observation_ids": [], "evidence_ids": [],
                                    "deviations": []})
        g["finding_ids"].append(f["finding_id"])
        g["scopes"].append(f["scope"])
        g["observation_ids"] += [o for o in f["observation_ids"] if o not in g["observation_ids"]]
        g["evidence_ids"] += [e for e in f["evidence_ids"] if e not in g["evidence_ids"]]
        if f.get("deviation") and f["deviation"] not in g["deviations"]:
            g["deviations"].append(f["deviation"])
    recs = []
    for g in groups.values():
        impact = _impact(g, plan)
        if g["state"] == UNDETERMINED:
            rec = {**g, "kind": "verificare suplimentară", "element": "datele evaluării",
                   "action": "Repetați captura sau completați evaluarea cu o extensie declarată (AVL203-REQ-038) pentru constatările de mai jos.",
                   "follow_up": "aceeași verificare TC-* la o rulare nouă", "priority": None,
                   "priority_reason": "constatările „nu poate fi stabilit” nu primesc clasă de prioritate (AVL204-REQ-009, AVL-204 §7)"}
        else:
            element, action, tc = TEMPLATES[g["rule_id"]]
            cls = _class(g["state"], g["zone"], impact)
            rec = {**g, "kind": "intervenție", "element": element, "action": action,
                   "follow_up": f"schimbarea tehnică poate fi verificată la remăsurare prin {tc}", "priority": cls,
                   "priority_reason": f"stare: {g['state']}; zona {g['zone']}; impact potențial {impact} (AVL-204 §7)"}
        rec.update(impact=impact, effort=None, effort_note="estimare a redactorului, necompletată (AVL204-REQ-009)",
                   dependencies=None, verifiability="integral, cu o verificare TC-* la remăsurare" if rec["kind"] == "intervenție" else "parțial")
        recs.append(rec)
    order = {"P1": 1, "P2": 2, "P3": 3, None: 4}
    recs.sort(key=lambda r: (order[r["priority"]], r["zone"], r["rule_id"], r["finding_ids"][0]))
    for i, r in enumerate(recs, 1):
        r["recommendation_id"] = f"REC-{i:02d}"
    return recs
