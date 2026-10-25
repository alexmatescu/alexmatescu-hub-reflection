"""Diagnosticul după grila AVL-204 v0.1.0, aplicat determinist pe observații (AVL204-REQ-002, REQ-007).

Regulile sunt cele din AVL-204 §6, cu identificatorul și versiunea grilei. Textul condiției e
reprodus în RULES; funcțiile de mai jos îl aplică literal. Când o regulă nu poate fi aplicată
sigur, constatarea nu primește „problemă confirmată” (REQ-003) și abaterea se declară (REQ-012),
cu identificatorii DEV-* din registru (§4.2). Nicio regulă de succes nu se aplică pe date
incomplete (registru, punctul J); o zonă fără constatări e „neevaluată”, nu „fără probleme”.
"""
from urllib.parse import urlsplit

from . import GRID_VERSION

CONFIRMED, POSSIBLE, UNDETERMINED, NONE = "problemă confirmată", "problemă posibilă", "nu poate fi stabilit", "nicio problemă observată"
SEVERITY = {CONFIRMED: 1, POSSIBLE: 2, UNDETERMINED: 3, NONE: 4}
CORE = ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]
TLS_EXITS = {35, 51, 53, 54, 58, 59, 60, 64, 66, 77, 80, 82, 83, 90, 91}

RULES = {
    "R-VAL-01": ("VAL", UNDETERMINED, "manifestul rulării lipsește sau verificarea checksum-urilor eșuează pentru artefactele folosite"),
    "R-Z1-01": ("Z1", CONFIRMED, "URL-ul din plan răspunde, după redirecturi, cu un cod 4xx sau 5xx"),
    "R-Z1-02": ("Z1", CONFIRMED, "captura eșuează cu eroare TLS sau de certificat"),
    "R-Z1-03": ("Z1", CONFIRMED, "variantele http/https și www/fără www relevante ajung la destinații finale diferite"),
    "R-Z1-04": ("Z1", POSSIBLE, "URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan"),
    "R-Z1-05": ("Z1", POSSIBLE, "lanțul de redirecturi are mai mult de un redirect până la URL-ul final"),
    "R-Z1-06": ("Z1", POSSIBLE, "o variantă http răspunde direct 2xx, fără redirect spre https"),
    "R-Z1-07": ("Z1", UNDETERMINED, "captura eșuează cu eroare de rețea sau DNS o singură dată, fără confirmare la o captură repetată"),
    "R-Z1-08": ("Z1", NONE, "URL-ul răspunde 2xx cu cel mult un redirect, iar variantele converg"),
    "R-Z2-01": ("Z2", CONFIRMED, "regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core, contrar politicii de acces declarate"),
    "R-Z2-02": ("Z2", CONFIRMED, "robots.txt răspunde 5xx sau nu poate fi obținut din cauza unei erori de rețea"),
    "R-Z2-03": ("Z2", POSSIBLE, "robots.txt este redirecționat către alt host sau conține linii care nu pot fi interpretate"),
    "R-Z2-04": ("Z2", NONE, "robots.txt răspunde 4xx"),
    "R-Z2-05": ("Z2", NONE, "nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core, sau blocările corespund politicii declarate"),
    "R-Z2-06": ("Z2", UNDETERMINED, "politica aplicabilă nu a putut fi determinată conform RFC 9309"),
    "R-Z3-01": ("Z3", CONFIRMED, "status UNAVAILABLE"),
    "R-Z3-02": ("Z3", POSSIBLE, "status FOUND_AT_CONVENTIONAL_PATH (sitemap existent, dar nedeclarat în robots.txt)"),
    "R-Z3-03": ("Z3", POSSIBLE, "status NOT_FOUND"),
    "R-Z3-04": ("Z3", UNDETERMINED, "status UNKNOWN"),
    "R-Z3-05": ("Z3", NONE, "status DECLARED"),
    "R-Z4-01": ("Z4", CONFIRMED, "meta robots sau X-Robots-Tag conține noindex ori none pentru un URL pe care politica declarată îl vrea indexat"),
    "R-Z4-02": ("Z4", CONFIRMED, "canonicalul declarat trimite la un URL care, capturat, nu răspunde 2xx"),
    "R-Z4-03": ("Z4", CONFIRMED, "un bloc JSON-LD nu este JSON valid sintactic"),
    "R-Z4-04": ("Z4", CONFIRMED, "pagina nu are <title> sau are un <title> gol"),
    "R-Z4-05": ("Z4", POSSIBLE, "canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan"),
    "R-Z4-06": ("Z4", POSSIBLE, "pagina canonică despre entitate nu conține niciun bloc JSON-LD"),
    "R-Z4-07": ("Z4", POSSIBLE, "<html lang> lipsește"),
    "R-Z4-08": ("Z4", UNDETERMINED, "un semnal are valoarea UNKNOWN la extracție"),
    "R-Z4-09": ("Z4", NONE, "niciuna dintre condițiile de mai sus nu se aplică"),
    "R-Z5-01": ("Z5", CONFIRMED, "un text-cheie are statusul ABSENT_FROM_RAW_HTML"),
    "R-Z5-02": ("Z5", POSSIBLE, "un text-cheie are statusul PRESENT_IN_METADATA_ONLY"),
    "R-Z5-03": ("Z5", UNDETERMINED, "un text-cheie are statusul UNKNOWN"),
    "R-Z5-04": ("Z5", NONE, "toate textele-cheie au statusul PRESENT_IN_BODY"),
    "R-Z6-01": ("Z6", CONFIRMED, "pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă de cele ale clientului de referință"),
    "R-Z6-02": ("Z6", CONFIRMED, "pentru un User-Agent declarat, headerele relevante diferă"),
    "R-Z6-03": ("Z6", POSSIBLE, "dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă"),
    "R-Z6-04": ("Z6", UNDETERMINED, "capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut"),
    "R-Z6-05": ("Z6", NONE, "status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform R-Z6-04"),
}
QUALIFICATION = {
    "R-Z5-01": "în HTML-ul brut",
    "R-Z6-01": "răspuns diferit pentru User-Agent-ul declarat",
    "R-Z6-02": "răspuns diferit pentru User-Agent-ul declarat",
    "R-Z6-05": "pentru status, URL și headere",
}
DEVIATIONS = {
    "DEV-P02": "restricție conformă cu politica declarată: nu se raportează drept problemă (AVL204-REQ-004); regula nu prevede cazul (P-02)",
    "DEV-P03": "politica de acces sau de indexare e declarată NECUNOSCUT: regula cere „contrar politicii declarate” și nu poate fi aplicată sigur (P-03)",
    "DEV-P04": "combinație TC-04 neacoperită de tabelul AVL-203 §7 (P-04)",
    "DEV-P05": "text-cheie găsit numai în zone neacoperite de AVL-203 §8.1 (P-05)",
    "DEV-P06": "capturile clientului de referință diferă la status, URL sau headere: diferența nu se atribuie User-Agent-ului (P-06)",
    "DEV-P07": "constatare „nu poate fi stabilit”: recomandarea e o verificare suplimentară, fără clasă de prioritate (AVL-204 §7; P-07)",
    "DEV-P08": "robots.txt după mai mult de 5 redirecturi: RFC 9309 lasă tratamentul opțional (P-08)",
    "DEV-P09": "ținta canonicalului răspunde inițial 3xx și final 2xx; R-Z4-02 se aplică pe statusul final (P-09)",
    "DEV-P10": "date incomplete sau caz neacoperit de reguli (eroare repetată, precondiții lipsă) (P-10)",
    "DEV-N01": "răspunsul final al paginii nu e 2xx: semnalele și conținutul descriu răspunsul de eroare, nu resursa (propunere nouă)",
}
NETWORK_EXITS = {5, 6, 7, 28, 52, 55, 56}


class Diagnoser:
    def __init__(self, obs, plan, ua_rows):
        self.obs, self.plan = obs, plan
        self.token = {u["key"]: u["token"] for u in ua_rows}
        self.findings = []
        self.deviations = []
        self.pages = {p["page_id"]: p for p in plan["pages"]}

    # ---------------------------------------------------------------- utilitare
    def add(self, rule, scope, observation_ids, evidence_ids, detail, state=None, deviation=None, integrity=None):
        zone, default_state, _ = RULES[rule]
        f = {"rule_id": rule, "rule_version": GRID_VERSION, "zone": zone, "state": state or default_state,
             "qualification": QUALIFICATION.get(rule), "scope": scope, "observation_ids": observation_ids,
             "evidence_ids": sorted({e for e in evidence_ids if e}), "detail": detail, "deviation": deviation}
        bad = [i for i in (integrity or []) if i not in (None, "OK")]
        if bad and rule != "R-VAL-01":
            # R-VAL-01: constatarea se sprijină pe artefacte care nu trec verificarea (AVL-204 §5)
            f = {**f, "rule_id": "R-VAL-01", "zone": zone, "state": UNDETERMINED, "qualification": None,
                 "would_apply": rule, "detail": f"artefacte cu integritate compromisă: {bad}; regula {rule} nu se aplică"}
        if deviation:
            self.deviations.append({"deviation": deviation, "text": DEVIATIONS[deviation], "rule_id": rule, "scope": scope,
                                    "state": f["state"], "detail": detail})
        self.findings.append(f)
        return f

    def policy_for(self, crawler, page_id):
        rows = [r for r in self.plan["access_policy"] if r["crawler"].lower() == crawler.lower()]
        specific = [r for r in rows if r["scope"] != "*" and page_id in r["scope"]]
        r = (specific or [r for r in rows if r["scope"] == "*"] or [None])[0]
        return r["policy"] if r else "NECUNOSCUT"

    # ---------------------------------------------------------------- Z1
    def z1(self):
        tc02 = self.obs["TC-02"]
        v_ids = [e for v in tc02["variants"] for e in v["evidence_ids"]]
        v_int = [v["integrity"] if isinstance(v["integrity"], str) else "AFFECTED" for v in tc02["variants"]]
        origin = {"origin": self.plan["origin"]}
        if tc02["convergence"] == "DIVERGENT" or len(tc02["final_urls"]) > 1:
            self.add("R-Z1-03", origin, ["OBS-TC02"], v_ids, f"destinații finale: {tc02['final_urls']}", integrity=v_int)
        for v in tc02["variants"]:
            if v["http_direct_2xx"]:
                self.add("R-Z1-06", {**origin, "variant": v["url_requested"]}, ["OBS-TC02"], v["evidence_ids"],
                         f"{v['url_requested']} → {v['final_status']} fără redirect", integrity=[_int(v)])
        for o in self.obs["TC-01"]:
            pid, scope = o["page_id"], {"page_id": o["page_id"], "url": o["url_requested"]}
            ids, ev, it = [o["obs_id"]], o["evidence_ids"], [_int(o)]
            prev = o.get("previous_attempts") or []
            if not o["transport_ok"]:
                if o["curl_exit"] in TLS_EXITS:
                    self.add("R-Z1-02", scope, ids, ev, f"curl exit {o['curl_exit']}: {o['error']}", integrity=it)
                elif o["curl_exit"] in NETWORK_EXITS and prev:
                    self.add("R-Z1-07", scope, ids, ev, f"eroare de rețea/DNS repetată ({len(prev) + 1} din {len(prev) + 1}): curl exit {o['curl_exit']}",
                             state=UNDETERMINED, deviation="DEV-P10", integrity=it)
                elif o["curl_exit"] in NETWORK_EXITS:
                    self.add("R-Z1-07", scope, ids, ev, f"curl exit {o['curl_exit']}, fără captură repetată", integrity=it)
                else:
                    self.add("R-Z1-07", scope, ids, ev, f"captura a eșuat (curl exit {o['curl_exit']}): caz neacoperit de Z1",
                             state=UNDETERMINED, deviation="DEV-P10", integrity=it)
                continue
            if prev and any(p["curl_exit"] in NETWORK_EXITS for p in prev):
                self.add("R-Z1-07", scope, ids, ev, f"eroare de rețea la prima încercare (curl exit {prev[0]['curl_exit']}), captura repetată a reușit",
                         integrity=it)
            fs = o["final_status"]
            if fs is not None and 400 <= fs < 600:
                self.add("R-Z1-01", scope, ids, ev, f"status final {fs}", integrity=it)
            page = self.pages[pid]
            if o["url_final"] != o["url_requested"] and page.get("intentional_redirect_to") != o["url_final"]:
                self.add("R-Z1-04", scope, ids, ev, f"{o['url_requested']} → {o['url_final']}", integrity=it)
            if (o["num_redirects"] or 0) > 1:
                self.add("R-Z1-05", scope, ids, ev, f"{o['num_redirects']} redirecturi", integrity=it)
            if fs is not None and 200 <= fs < 300 and (o["num_redirects"] or 0) <= 1:
                if tc02["convergence"] == "CONVERGENT":
                    self.add("R-Z1-08", scope, ids + ["OBS-TC02"], ev + v_ids, f"{fs}, {o['num_redirects']} redirect(uri), variante convergente",
                             integrity=it + v_int)
                else:
                    self.add("R-Z1-08", scope, ids + ["OBS-TC02"], ev, f"variantele: {tc02['convergence']} ({tc02['incomplete']})",
                             state=UNDETERMINED, deviation="DEV-P10", integrity=it)

    # ---------------------------------------------------------------- Z2
    def z2(self):
        t = self.obs["TC-03"]
        c = t["capture"]
        origin = {"origin": self.plan["origin"]}
        ev = c["evidence_ids"] if c else []
        it = [_int(c)] if c else []
        st = t["file_state"]
        if st == "UNREACHABLE":
            if c and not c["transport_ok"] and c["curl_exit"] in NETWORK_EXITS and not c.get("previous_attempts"):
                self.add("R-Z2-06", origin, ["OBS-TC03"], ev, "eroare de rețea o singură dată, fără captură repetată",
                         deviation="DEV-P10", integrity=it)
            elif c and not c["transport_ok"] and c["curl_exit"] not in NETWORK_EXITS:
                self.add("R-Z2-06", origin, ["OBS-TC03"], ev, f"captura a eșuat (curl exit {c['curl_exit']}), nu din cauza rețelei",
                         deviation="DEV-P10", integrity=it)
            else:
                self.add("R-Z2-02", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        if st == "UNDETERMINED":
            dev = "DEV-P08" if c and (c["num_redirects"] or 0) > 5 else "DEV-P10"
            self.add("R-Z2-06", origin, ["OBS-TC03"], ev, t["file_state_reason"], deviation=dev, integrity=it)
            return
        if c["url_final"] and urlsplit(c["url_final"]).netloc != urlsplit(self.plan["origin"]).netloc:
            self.add("R-Z2-03", origin, ["OBS-TC03"], ev,
                     f"redirect către {c['url_final']} (permis de RFC 9309 §2.3.1.2; semnalat pentru verificare)", integrity=it)
        if st == "UNAVAILABLE_4XX":
            self.add("R-Z2-04", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        if t["parsed"]["unparseable"]:
            lines = ", ".join(str(u["line"]) for u in t["parsed"]["unparseable"])
            self.add("R-Z2-03", origin, ["OBS-TC03"], ev,
                     f"linii neinterpretabile: {lines} (RFC 9309 §2.3.1.5: regulile parsabile rămân valabile)", integrity=it)
        for d in t["decisions"]:
            if d["token"] == "*":
                continue
            scope = {"page_id": d["page_id"], "url": d["url"], "crawler": d["token"], "method": d["method"]}
            if d["policy"] == "NEDETERMINAT" or d["method"] is None:
                self.add("R-Z2-06", scope, ["OBS-TC03"], ev, (d.get("steps") or {}).get("reason", ""), integrity=it)
                continue
            declared = self.policy_for(d["token"], d["page_id"])
            win = (d.get("steps") or {}).get("winner")
            why = f"metoda {d['method']}; regula câștigătoare: linia {win['line']} {win['directive']}: {win['path']}" if win else f"metoda {d['method']}; {(d.get('steps') or {}).get('reason')}"
            if d["policy"] == "DISALLOW":
                if declared == "BLOCAT_INTENTIONAT":
                    self.add("R-Z2-05", scope, ["OBS-TC03"], ev, f"blocare conformă cu politica declarată; {why}", integrity=it)
                elif declared == "PERMIS":
                    self.add("R-Z2-01", scope, ["OBS-TC03"], ev, f"politica declarată: PERMIS; {why}", integrity=it)
                else:
                    self.add("R-Z2-01", scope, ["OBS-TC03"], ev, f"politica declarată: NECUNOSCUT; {why}",
                             state=POSSIBLE, deviation="DEV-P03", integrity=it)
            else:
                note = "; politica declarată cere blocare, dar robots.txt permite" if declared == "BLOCAT_INTENTIONAT" else ""
                self.add("R-Z2-05", scope, ["OBS-TC03"], ev, f"permis; {why}{note}", integrity=it)

    # ---------------------------------------------------------------- Z3
    def z3(self):
        t = self.obs["TC-04"]
        rule = {"UNAVAILABLE": "R-Z3-01", "FOUND_AT_CONVENTIONAL_PATH": "R-Z3-02", "NOT_FOUND": "R-Z3-03",
                "UNKNOWN": "R-Z3-04", "DECLARED": "R-Z3-05"}[t["status"]]
        ev = [e for s in t["sitemaps"] for e in s.get("evidence_ids", [])] + (self.obs["TC-03"]["capture"] or {}).get("evidence_ids", [])
        it = [_int(s) for s in t["sitemaps"] if "integrity" in s]
        detail = t["reason"] or t["status"]
        if t["notes"]:
            detail += " · " + " · ".join(t["notes"])
        self.add(rule, {"origin": self.plan["origin"]}, ["OBS-TC04", "OBS-TC03"], ev, detail, deviation=t.get("deviation"), integrity=it)

    # ---------------------------------------------------------------- Z4
    def z4(self):
        tc01 = {o["page_id"]: o for o in self.obs["TC-01"]}
        for o in self.obs["TC-05"]:
            pid = o["page_id"]
            page = self.pages[pid]
            scope = {"page_id": pid, "url": o["url"]}
            ids, ev, it = [o["obs_id"], f"OBS-TC01-{pid}"], o["evidence_ids"], [_int(o)]
            fs = tc01[pid]["final_status"]
            if o["status"] != "EXTRACTED":
                self.add("R-Z4-08", scope, ids, ev, o.get("reason"), integrity=it)
                continue
            if fs is None or not 200 <= fs < 300:
                self.add("R-Z4-08", scope, ids, ev, f"status final {fs}", deviation="DEV-N01", integrity=it)
                continue
            fired = []
            if not isinstance(o["x_robots_tag"], list):
                self.add("R-Z4-08", scope, ids, ev, "headerele răspunsului final lipsesc: X-Robots-Tag necunoscut", integrity=it)
                continue
            noindex = [m for m in o["meta_robots"] if any(d.strip().lower() in ("noindex", "none") for d in (m["value"] or "").split(","))]
            noindex += [x for x in o["x_robots_tag"] if any(d in ("noindex", "none") for d in x["directives"])
                        and x["scope"].lower() in ("*", "googlebot", "bingbot", "robots")]
            if noindex:
                intent = page["index_intent"]
                if intent == "INDEXAT":
                    fired.append(self.add("R-Z4-01", scope, ids, ev, f"directive: {noindex}", integrity=it))
                elif intent == "NECUNOSCUT":
                    fired.append(self.add("R-Z4-01", scope, ids, ev, f"directive: {noindex}; indexare declarată NECUNOSCUT",
                                          state=POSSIBLE, deviation="DEV-P03", integrity=it))
            pending_canonical = False
            for c in o["canonical"] + o["canonical_http_header"]:
                tgt = c.get("target") or {}
                if tgt.get("kind") == "CAPTURED_AUX":
                    t_it = it + [tgt["integrity"] if isinstance(tgt["integrity"], str) else "AFFECTED"]
                    if not tgt["transport_ok"] or tgt["final_status"] is None or not 200 <= tgt["final_status"] < 300:
                        fired.append(self.add("R-Z4-02", scope, ids, ev + tgt["evidence_ids"],
                                              f"canonical {c['resolved']} → {tgt['final_status'] if tgt['transport_ok'] else 'curl ' + str(tgt['curl_exit'])}",
                                              integrity=t_it))
                    elif tgt["initial_status"] and 300 <= tgt["initial_status"] < 400:
                        self.deviations.append({"deviation": "DEV-P09", "text": DEVIATIONS["DEV-P09"], "rule_id": "R-Z4-02", "scope": scope,
                                                "state": None, "detail": f"{c['resolved']}: {tgt['initial_status']} → {tgt['final_status']}"})
                elif tgt.get("kind") == "NOT_CAPTURED":
                    pending_canonical = True
                    fired.append(self.add("R-Z4-02", scope, ids, ev, f"canonical {c['resolved']}: {tgt['reason']}", state=UNDETERMINED,
                                          deviation="DEV-P10", integrity=it))
            if any(b["json_syntax"] == "INVALID" for b in o["json_ld"]):
                fired.append(self.add("R-Z4-03", scope, ids, ev, "; ".join(f"linia {b['line']}: {b.get('error')}" for b in o["json_ld"] if b["json_syntax"] == "INVALID"), integrity=it))
            if not any(t["value"] for t in o["title"]):
                fired.append(self.add("R-Z4-04", scope, ids, ev, "fără <title>" if not o["title"] else "<title> gol", integrity=it))
            for c in o["canonical"] + o["canonical_http_header"]:
                if c.get("resolved") and c["resolved"] != tc01[pid]["url_final"] and page.get("intentional_canonical") != c["resolved"]:
                    fired.append(self.add("R-Z4-05", scope, ids, ev, f"canonical {c['resolved']} ≠ URL final {tc01[pid]['url_final']}", integrity=it))
            if page["category"] == "despre" and not o["json_ld"]:
                fired.append(self.add("R-Z4-06", scope, ids, ev, "niciun bloc JSON-LD", integrity=it))
            if not any(h["present"] and (h["value"] or "").strip() for h in o["html_lang"]):
                fired.append(self.add("R-Z4-07", scope, ids, ev, "<html lang> lipsește sau e gol", integrity=it))
            if not fired and not pending_canonical:
                self.add("R-Z4-09", scope, ids, ev, "semnalele extrase nu declanșează R-Z4-01…08", integrity=it)

    # ---------------------------------------------------------------- Z5
    def z5(self):
        tc01 = {o["page_id"]: o for o in self.obs["TC-01"]}
        for o in self.obs["TC-08"]:
            pid = o["page_id"]
            ids, ev, it = [o["obs_id"]], o["evidence_ids"], [_int(o)]
            if not o["key_texts"]:
                continue  # zonă neevaluată pentru pagină (fără texte-cheie în plan)
            fs = tc01[pid]["final_status"]
            if o["status"] == "EVALUATED" and (fs is None or not 200 <= fs < 300):
                for k in o["key_texts"]:
                    self.add("R-Z5-03", {"page_id": pid, "url": o["url"], "kt_id": k["kt_id"]}, ids, ev,
                             f"status final {fs}", deviation="DEV-N01", integrity=it)
                continue
            for k in o["key_texts"]:
                scope = {"page_id": pid, "url": o["url"], "kt_id": k["kt_id"], "text": k["text"]}
                if k["status"] == "ABSENT_FROM_RAW_HTML":
                    self.add("R-Z5-01", scope, ids, ev, "textul nu apare în nicio zonă a HTML-ului brut", integrity=it)
                elif k["status"] == "PRESENT_IN_METADATA_ONLY":
                    self.add("R-Z5-02", scope, ids, ev, "zone: " + ", ".join(sorted({m["zone"] for m in k["matches"]})), integrity=it)
                elif k["status"] == "UNKNOWN":
                    self.add("R-Z5-03", scope, ids, ev, k.get("reason"), deviation=k.get("deviation"), integrity=it)
            if all(k["status"] == "PRESENT_IN_BODY" for k in o["key_texts"]):
                self.add("R-Z5-04", {"page_id": pid, "url": o["url"]}, ids, ev, f"{len(o['key_texts'])} texte-cheie în corp", integrity=it)

    # ---------------------------------------------------------------- Z6
    def z6(self):
        for o in self.obs["TC-06"]:
            pid = o["page_id"]
            ids = [o["obs_id"]]
            ref_ev = [e for r in o["references"] for e in r["evidence_ids"]]
            ref_it = [r["integrity"] if isinstance(r["integrity"], str) else "AFFECTED" for r in o["references"]]
            all_clean = bool(o["agents"])
            for a in o["agents"]:
                crawler = self.token.get(a["ua_key"], a["ua_key"])
                scope = {"page_id": pid, "url": o["url"], "user_agent": a["ua_key"], "crawler": crawler}
                ev = ref_ev + a["evidence_ids"]
                it = ref_it + [a["integrity"] if isinstance(a["integrity"], str) else "AFFECTED"]
                if a.get("comparison") == "UNKNOWN":
                    all_clean = False
                    self.add("R-Z6-04", scope, ids, ev, a["reason"], state=UNDETERMINED, deviation="DEV-P10", integrity=it)
                    continue
                suh = a["status_url_headers"]
                declared_block = self.policy_for(crawler, pid) == "BLOCAT_INTENTIONAT"
                if suh.startswith("NEATRIBUIBIL"):
                    all_clean = False
                    rule = "R-Z6-01" if ("final_status" in a["differences"] or "url_final" in a["differences"]) else "R-Z6-02"
                    if a["differences"]:
                        self.add(rule, scope, ids, ev, f"diferențe {a['differences']}; referința variază: {o['reference_variability'].get('differences')}",
                                 state=UNDETERMINED, deviation="DEV-P06", integrity=it)
                elif suh == "DIFERIT":
                    all_clean = False
                    d = a["differences"]
                    if declared_block:
                        self.add("R-Z6-01" if ("final_status" in d or "url_final" in d) else "R-Z6-02", scope, ids, ev,
                                 f"diferențe {d}; politica declarată pentru {crawler}: BLOCAT_INTENTIONAT", state=NONE, deviation="DEV-P02", integrity=it)
                    else:
                        if "final_status" in d or "url_final" in d:
                            self.add("R-Z6-01", scope, ids, ev, f"{ {k: d[k] for k in ('final_status', 'url_final') if k in d} }", integrity=it)
                        if "headers" in d:
                            self.add("R-Z6-02", scope, ids, ev, f"headere relevante: {d['headers']}", integrity=it)
                content = a.get("content")
                if content == "DIFERIT":
                    all_clean = False
                    self.add("R-Z6-03", scope, ids, ev, "octeți diferiți față de referința stabilă", integrity=it)
                elif content and content.startswith("NEATRIBUIBIL"):
                    self.add("R-Z6-04", scope, ids, ev, "comparația de conținut", integrity=it)
                elif content == "UNKNOWN":
                    all_clean = False
                    self.add("R-Z6-04", scope, ids, ev, o["reference_variability"].get("reason", "fără dublă captură"),
                             deviation="DEV-P10", integrity=it)
            if all_clean:
                self.add("R-Z6-05", {"page_id": pid, "url": o["url"]}, ids, ref_ev + [e for a in o["agents"] for e in a["evidence_ids"]],
                         f"{len(o['agents'])} User-Agent-i declarați", integrity=ref_it)

    def run(self):
        for z in (self.z1, self.z2, self.z3, self.z4, self.z5, self.z6):
            z()
        for i, f in enumerate(self.findings, 1):
            f["finding_id"] = f"F{i:03d}"
        return self.findings, self.deviations


def _int(o):
    v = o.get("integrity") if o else None
    return v if isinstance(v, str) or v is None else "AFFECTED"


def zones(findings, plan):
    out = {}
    for z in ("Z1", "Z2", "Z3", "Z4", "Z5", "Z6"):
        fs = [f for f in findings if f["zone"] == z]
        if not fs:
            out[z] = {"state": "neevaluată", "reason": "nicio constatare (nu e „nicio problemă observată”)", "undetermined": []}
            continue
        worst = min(fs, key=lambda f: SEVERITY[f["state"]])["state"]
        out[z] = {"state": worst, "counts": {s: sum(1 for f in fs if f["state"] == s) for s in SEVERITY if any(f["state"] == s for f in fs)},
                  "undetermined": [f["finding_id"] for f in fs if f["state"] == UNDETERMINED]}
    no_kt = [p["page_id"] for p in plan["pages"] if not p["key_texts"]]
    if no_kt:
        out["Z5"]["pages_not_evaluated"] = no_kt
    return out
