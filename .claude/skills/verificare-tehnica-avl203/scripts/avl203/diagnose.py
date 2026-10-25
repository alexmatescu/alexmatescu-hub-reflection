"""Diagnosticul după grila AVL-204 v0.2.0, aplicat determinist pe observații (AVL204-REQ-002, REQ-007).

Regulile sunt cele din AVL-204 §6; textul condiției e reprodus în RULES, iar funcțiile de mai jos
îl aplică literal. Regulile de succes cer date complete (AVL204-REQ-016); o zonă fără constatări
e „neevaluată”. Zonele Z4 și Z5 nu se evaluează pentru URL-urile cu răspuns final 4xx/5xx (§6).
Un caz pe care regulile nu îl acoperă primește „nu poate fi stabilit” și se declară ca abatere
`DEV-G01` (AVL204-REQ-003, REQ-012).
"""
from urllib.parse import urlsplit

from . import GRID_VERSION

CONFIRMED, POSSIBLE, UNDETERMINED, NONE = "problemă confirmată", "problemă posibilă", "nu poate fi stabilit", "nicio problemă observată"
SEVERITY = {CONFIRMED: 1, POSSIBLE: 2, UNDETERMINED: 3, NONE: 4}
CORE = ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]
TLS_EXITS = {35, 51, 53, 54, 58, 59, 60, 64, 66, 77, 80, 82, 83, 90, 91}
NETWORK_EXITS = {5, 6, 7, 28, 52, 55, 56}

RULES = {
    "R-VAL-01": ("VAL", UNDETERMINED, "verificarea checksum-urilor eșuează pentru artefactele pe care se sprijină constatarea"),
    "R-Z1-01": ("Z1", CONFIRMED, "URL-ul din plan răspunde, după redirecturi, cu un cod 4xx sau 5xx, fără ca acest răspuns să fie declarat intenționat în plan"),
    "R-Z1-02": ("Z1", CONFIRMED, "captura eșuează cu eroare TLS sau de certificat"),
    "R-Z1-03": ("Z1", CONFIRMED, "variantele http/https și www/fără www relevante ajung la destinații finale diferite"),
    "R-Z1-04": ("Z1", POSSIBLE, "URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan"),
    "R-Z1-05": ("Z1", POSSIBLE, "lanțul de redirecturi are mai mult de un redirect până la URL-ul final"),
    "R-Z1-06": ("Z1", POSSIBLE, "o variantă http răspunde direct 2xx, fără redirect spre https"),
    "R-Z1-07": ("Z1", UNDETERMINED, "captura eșuează cu eroare de rețea sau DNS o singură dată, iar captura repetată reușește"),
    "R-Z1-08": ("Z1", NONE, "URL-ul răspunde 2xx cu cel mult un redirect, iar toate variantele relevante au fost capturate și converg"),
    "R-Z1-09": ("Z1", CONFIRMED, "captura eșuează cu eroare de rețea, DNS sau timeout și la captura repetată"),
    "R-Z1-10": ("Z1", NONE, "URL-ul răspunde, după redirecturi, cu 4xx sau 5xx, iar acest răspuns este declarat intenționat în plan"),
    "R-Z2-01": ("Z2", CONFIRMED, "regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core, contrar politicii de acces declarate"),
    "R-Z2-02": ("Z2", CONFIRMED, "robots.txt răspunde 5xx, sau nu poate fi obținut din cauza unei erori de rețea nici la captura repetată"),
    "R-Z2-03": ("Z2", POSSIBLE, "robots.txt conține linii care seamănă cu o directivă cunoscută scrisă greșit"),
    "R-Z2-04": ("Z2", NONE, "robots.txt răspunde 4xx, cu excepția 429"),
    "R-Z2-05": ("Z2", NONE, "nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core, sau blocările corespund politicii declarate"),
    "R-Z2-06": ("Z2", UNDETERMINED, "politica aplicabilă nu a putut fi determinată conform RFC 9309"),
    "R-Z2-07": ("Z2", NONE, "robots.txt este redirecționat către alt host și răspunde 2xx după cel mult cinci redirecturi"),
    "R-Z2-08": ("Z2", POSSIBLE, "robots.txt răspunde 429"),
    "R-Z2-09": ("Z2", POSSIBLE, "lanțul de redirecturi al robots.txt are mai mult de cinci redirecturi"),
    "R-Z3-01": ("Z3", CONFIRMED, "status UNAVAILABLE"),
    "R-Z3-02": ("Z3", POSSIBLE, "status FOUND_AT_CONVENTIONAL_PATH (sitemap existent, dar nedeclarat în robots.txt)"),
    "R-Z3-03": ("Z3", POSSIBLE, "status NOT_FOUND"),
    "R-Z3-04": ("Z3", UNDETERMINED, "status UNKNOWN"),
    "R-Z3-05": ("Z3", NONE, "status DECLARED"),
    "R-Z4-01": ("Z4", CONFIRMED, "meta robots sau X-Robots-Tag conține noindex ori none pentru un URL pe care politica declarată îl vrea indexat"),
    "R-Z4-02": ("Z4", CONFIRMED, "canonicalul declarat trimite la un URL care, capturat, nu răspunde 2xx după redirecturi"),
    "R-Z4-03": ("Z4", CONFIRMED, "un bloc JSON-LD nu este JSON valid sintactic"),
    "R-Z4-04": ("Z4", CONFIRMED, "pagina nu are <title> sau are un <title> gol"),
    "R-Z4-05": ("Z4", POSSIBLE, "canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan"),
    "R-Z4-06": ("Z4", POSSIBLE, "pagina canonică despre entitate nu conține niciun bloc JSON-LD"),
    "R-Z4-07": ("Z4", POSSIBLE, "<html lang> lipsește"),
    "R-Z4-08": ("Z4", UNDETERMINED, "un semnal are valoarea UNKNOWN la extracție, sau ținta canonicalului nu a putut fi capturată în limitele planului"),
    "R-Z4-09": ("Z4", NONE, "niciuna dintre condițiile de mai sus nu se aplică, iar toate semnalele și țintele canonicalului au fost evaluate"),
    "R-Z4-10": ("Z4", POSSIBLE, "ținta canonicalului răspunde inițial cu un redirect (3xx) și final 2xx"),
    "R-Z5-01": ("Z5", CONFIRMED, "un text-cheie are statusul ABSENT_FROM_RAW_HTML"),
    "R-Z5-02": ("Z5", POSSIBLE, "un text-cheie are statusul PRESENT_IN_METADATA_ONLY"),
    "R-Z5-03": ("Z5", UNDETERMINED, "un text-cheie are statusul UNKNOWN"),
    "R-Z5-04": ("Z5", NONE, "toate textele-cheie au statusul PRESENT_IN_BODY"),
    "R-Z5-05": ("Z5", POSSIBLE, "un text-cheie are statusul PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY"),
    "R-Z6-01": ("Z6", CONFIRMED, "pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă nefavorabil de cele ale clientului de referință, contrar politicii declarate"),
    "R-Z6-02": ("Z6", CONFIRMED, "pentru un User-Agent declarat, headerele relevante diferă nefavorabil, contrar politicii declarate"),
    "R-Z6-03": ("Z6", POSSIBLE, "dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă"),
    "R-Z6-04": ("Z6", UNDETERMINED, "capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut"),
    "R-Z6-05": ("Z6", NONE, "status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform R-Z6-04"),
    "R-Z6-06": ("Z6", POSSIBLE, "pentru un User-Agent declarat, statusul, URL-ul final sau headerele relevante diferă, dar nu nefavorabil în sensul R-Z6-01 / R-Z6-02"),
    "R-Z6-07": ("Z6", UNDETERMINED, "capturile clientului de referință diferă între ele la status, URL final sau headere relevante: comparația acestor câmpuri"),
    "R-Z6-08": ("Z6", NONE, "răspunsul diferit pentru un User-Agent declarat corespunde politicii declarate (crawler blocat intenționat)"),
}
QUALIFICATION = {
    "R-Z1-09": "în condițiile testate",
    "R-Z1-10": "răspuns declarat",
    "R-Z5-01": "în HTML-ul brut",
    "R-Z6-01": "răspuns diferit pentru User-Agent-ul declarat",
    "R-Z6-02": "răspuns diferit pentru User-Agent-ul declarat",
    "R-Z6-05": "pentru status, URL și headere",
    "R-Z6-08": "restricție declarată",
}
DEVIATIONS = {
    "DEV-G01": "caz neacoperit de regulile grilei AVL-204 0.2.0: constatarea primește „nu poate fi stabilit” (AVL204-REQ-003, REQ-012)",
    "DEV-G02": "intenția de indexare a URL-ului nu e declarată în plan: R-Z4-01 cere „politica declarată îl vrea indexat” și nu poate fi aplicată sigur",
}
NONHTML = ("text/html", "application/xhtml+xml")


class Diagnoser:
    def __init__(self, obs, plan, ua_rows):
        self.obs, self.plan = obs, plan
        self.token = {u["key"]: u["token"] for u in ua_rows}
        self.findings = []
        self.deviations = []
        self.not_evaluated = {"Z4": [], "Z5": []}
        self.pages = {p["page_id"]: p for p in plan["pages"]}

    # ---------------------------------------------------------------- utilitare
    def add(self, rule, scope, observation_ids, evidence_ids, detail, state=None, deviation=None, integrity=None):
        zone, default_state, _ = RULES[rule]
        f = {"rule_id": rule, "rule_version": GRID_VERSION, "zone": zone, "state": state or default_state,
             "qualification": QUALIFICATION.get(rule) if state in (None, default_state) else None, "scope": scope,
             "observation_ids": observation_ids, "evidence_ids": sorted({e for e in evidence_ids if e}), "detail": detail,
             "deviation": deviation}
        bad = [i for i in (integrity or []) if i not in (None, "OK")]
        if bad and rule != "R-VAL-01":
            # R-VAL-01: constatarea se sprijină pe artefacte care nu trec verificarea (AVL-204 §5)
            f = {**f, "rule_id": "R-VAL-01", "state": UNDETERMINED, "qualification": None, "deviation": None,
                 "would_apply": rule, "detail": f"artefacte cu integritate compromisă: {bad}; regula {rule} nu se aplică"}
        elif deviation:
            self.deviations.append({"deviation": deviation, "text": DEVIATIONS[deviation], "rule_id": rule, "scope": scope,
                                    "state": f["state"], "detail": detail})
        self.findings.append(f)
        return f

    def policy_for(self, crawler, page_id):
        rows = [r for r in self.plan["access_policy"] if r["crawler"].lower() == crawler.lower()]
        specific = [r for r in rows if r["scope"] != "*" and page_id in r["scope"]]
        r = (specific or [r for r in rows if r["scope"] == "*"] or [None])[0]
        # AVL-204 §3.1: fără o politică diferită declarată, politica este accesul total
        return r["policy"] if r else "PERMIS"

    def final_2xx(self, pid):
        o = next(x for x in self.obs["TC-01"] if x["page_id"] == pid)
        return o["final_status"] is not None and 200 <= o["final_status"] < 300, o

    # ---------------------------------------------------------------- Z1
    def z1(self):
        tc02 = self.obs["TC-02"]
        v_ids = [e for v in tc02["variants"] for e in v["evidence_ids"]]
        v_int = [_int(v) for v in tc02["variants"]]
        origin = {"origin": self.plan["origin"]}
        if len(tc02["final_urls"]) > 1:
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
                    self.add("R-Z1-09", scope, ids, ev, f"curl exit {o['curl_exit']} la ambele încercări", integrity=it)
                else:
                    why = "fără captură repetată" if o["curl_exit"] in NETWORK_EXITS else "eroare care nu e de rețea, DNS sau TLS"
                    self.add("R-Z1-07", scope, ids, ev, f"curl exit {o['curl_exit']} ({why})", state=UNDETERMINED,
                             deviation="DEV-G01", integrity=it)
                continue
            if prev and any(p["curl_exit"] in NETWORK_EXITS for p in prev):
                self.add("R-Z1-07", scope, ids, ev, f"eroare de rețea la prima încercare (curl exit {prev[0]['curl_exit']}), captura repetată a reușit",
                         integrity=it)
            fs = o["final_status"]
            page = self.pages[pid]
            if fs is not None and 400 <= fs < 600:
                if page.get("intentional_status") == fs:
                    self.add("R-Z1-10", scope, ids, ev, f"status final {fs}, declarat intenționat în plan", integrity=it)
                else:
                    self.add("R-Z1-01", scope, ids, ev, f"status final {fs}", integrity=it)
            if o["url_final"] != o["url_requested"] and page.get("intentional_redirect_to") != o["url_final"]:
                self.add("R-Z1-04", scope, ids, ev, f"{o['url_requested']} → {o['url_final']}", integrity=it)
            if (o["num_redirects"] or 0) > 1:
                self.add("R-Z1-05", scope, ids, ev, f"{o['num_redirects']} redirecturi", integrity=it)
            if fs is not None and 200 <= fs < 300 and (o["num_redirects"] or 0) <= 1:
                if tc02["convergence"] == "CONVERGENT":
                    self.add("R-Z1-08", scope, ids + ["OBS-TC02"], ev + v_ids, f"{fs}, {o['num_redirects']} redirect(uri), variante convergente",
                             integrity=it + v_int)
                elif tc02["convergence"] == "INCOMPLET":
                    # AVL204-REQ-016: succesul cere toate variantele relevante capturate
                    self.add("R-Z1-08", scope, ids + ["OBS-TC02"], ev, f"variante necapturate: {tc02['incomplete']}",
                             state=UNDETERMINED, integrity=it)

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
                self.add("R-Z2-06", origin, ["OBS-TC03"], ev, "eroare de rețea o singură dată, fără captură repetată", integrity=it)
            elif c and not c["transport_ok"] and c["curl_exit"] not in NETWORK_EXITS:
                self.add("R-Z2-06", origin, ["OBS-TC03"], ev, f"captura a eșuat (curl exit {c['curl_exit']}), nu din cauza rețelei",
                         deviation="DEV-G01", integrity=it)
            else:
                self.add("R-Z2-02", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        if st == "REDIRECT_LIMIT":
            self.add("R-Z2-09", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            self.add("R-Z2-06", origin, ["OBS-TC03"], ev, "politica nu se determină după mai mult de cinci redirecturi", integrity=it)
            return
        if st == "TOO_MANY_REQUESTS":
            self.add("R-Z2-08", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        if st == "UNDETERMINED":
            self.add("R-Z2-06", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        if c["url_final"] and urlsplit(c["url_final"]).netloc != urlsplit(self.plan["origin"]).netloc and st == "AVAILABLE":
            self.add("R-Z2-07", origin, ["OBS-TC03"], ev, f"redirect către {c['url_final']}, {c['num_redirects']} redirect(uri); permis de RFC 9309 §2.3.1.2",
                     integrity=it)
        if st == "UNAVAILABLE_4XX":
            self.add("R-Z2-04", origin, ["OBS-TC03"], ev, t["file_state_reason"], integrity=it)
            return
        typos = [u for u in t["parsed"]["unparseable"] if u.get("looks_like")]
        if typos:
            self.add("R-Z2-03", origin, ["OBS-TC03"], ev,
                     "; ".join(f"linia {u['line']}: „{u['text']}” (seamănă cu {u['looks_like']})" for u in typos), integrity=it)
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
            if d["policy"] == "DISALLOW" and declared != "BLOCAT_INTENTIONAT":
                self.add("R-Z2-01", scope, ["OBS-TC03"], ev, f"politica declarată: {declared}; {why}", integrity=it)
            elif d["policy"] == "DISALLOW":
                self.add("R-Z2-05", scope, ["OBS-TC03"], ev, f"blocare conformă cu politica declarată; {why}", integrity=it)
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
        self.add(rule, {"origin": self.plan["origin"]}, ["OBS-TC04", "OBS-TC03"], ev, detail, integrity=it)

    # ---------------------------------------------------------------- Z4
    def z4(self):
        for o in self.obs["TC-05"]:
            pid = o["page_id"]
            page = self.pages[pid]
            scope = {"page_id": pid, "url": o["url"]}
            ids, ev, it = [o["obs_id"], f"OBS-TC01-{pid}"], o["evidence_ids"], [_int(o)]
            ok2xx, tc01 = self.final_2xx(pid)
            if tc01["transport_ok"] and tc01["final_status"] is not None and not ok2xx:
                self.not_evaluated["Z4"].append(pid)  # AVL-204 §6: Z4 nu se evaluează pentru răspunsuri 4xx/5xx
                continue
            if o["status"] != "EXTRACTED":
                self.add("R-Z4-08", scope, ids, ev, o.get("reason"), integrity=it)
                continue
            if not isinstance(o["x_robots_tag"], list):
                self.add("R-Z4-08", scope, ids, ev, "headerele răspunsului final lipsesc: X-Robots-Tag necunoscut", integrity=it)
                continue
            fired, pending = [], False
            noindex = [m for m in o["meta_robots"] if any(d.strip().lower() in ("noindex", "none") for d in (m["value"] or "").split(","))]
            noindex += [x for x in o["x_robots_tag"] if any(d in ("noindex", "none") for d in x["directives"])
                        and x["scope"].lower() in ("*", "googlebot", "bingbot", "robots")]
            if noindex:
                intent = page["index_intent"]
                if intent == "INDEXAT":
                    fired.append(self.add("R-Z4-01", scope, ids, ev, f"directive: {noindex}", integrity=it))
                elif intent == "NECUNOSCUT":
                    pending = True
                    self.add("R-Z4-01", scope, ids, ev, f"directive: {noindex}; intenția de indexare nedeclarată",
                             state=UNDETERMINED, deviation="DEV-G02", integrity=it)
            for c in o["canonical"] + o["canonical_http_header"]:
                tgt = c.get("target") or {}
                if tgt.get("kind") == "CAPTURED_AUX":
                    t_it = it + [_int(tgt)]
                    if not tgt["transport_ok"] or tgt["final_status"] is None or not 200 <= tgt["final_status"] < 300:
                        fired.append(self.add("R-Z4-02", scope, ids, ev + tgt["evidence_ids"],
                                              f"canonical {c['resolved']} → {tgt['final_status'] if tgt['transport_ok'] else 'curl ' + str(tgt['curl_exit'])}",
                                              integrity=t_it))
                    elif tgt["initial_status"] and 300 <= tgt["initial_status"] < 400:
                        fired.append(self.add("R-Z4-10", scope, ids, ev + tgt["evidence_ids"],
                                              f"canonical {c['resolved']}: {tgt['initial_status']} → {tgt['final_status']}", integrity=t_it))
                elif tgt.get("kind") == "NOT_CAPTURED":
                    pending = True
                    self.add("R-Z4-08", scope, ids, ev, f"ținta canonicalului {c['resolved']}: {tgt['reason']}", integrity=it)
            if any(b["json_syntax"] == "INVALID" for b in o["json_ld"]):
                fired.append(self.add("R-Z4-03", scope, ids, ev, "; ".join(f"linia {b['line']}: {b.get('error')}" for b in o["json_ld"] if b["json_syntax"] == "INVALID"), integrity=it))
            if not any(t["value"] for t in o["title"]):
                fired.append(self.add("R-Z4-04", scope, ids, ev, "fără <title>" if not o["title"] else "<title> gol", integrity=it))
            for c in o["canonical"] + o["canonical_http_header"]:
                if c.get("resolved") and c["resolved"] != tc01["url_final"] and page.get("intentional_canonical") != c["resolved"]:
                    fired.append(self.add("R-Z4-05", scope, ids, ev, f"canonical {c['resolved']} ≠ URL final {tc01['url_final']}", integrity=it))
            if page["category"] == "despre" and not o["json_ld"]:
                fired.append(self.add("R-Z4-06", scope, ids, ev, "niciun bloc JSON-LD", integrity=it))
            if not any(h["present"] and (h["value"] or "").strip() for h in o["html_lang"]):
                fired.append(self.add("R-Z4-07", scope, ids, ev, "<html lang> lipsește sau e gol", integrity=it))
            if not fired and not pending:
                self.add("R-Z4-09", scope, ids, ev, "semnalele extrase nu declanșează R-Z4-01…08, R-Z4-10", integrity=it)

    # ---------------------------------------------------------------- Z5
    def z5(self):
        rules = {"ABSENT_FROM_RAW_HTML": "R-Z5-01", "PRESENT_IN_METADATA_ONLY": "R-Z5-02", "UNKNOWN": "R-Z5-03",
                 "PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY": "R-Z5-05"}
        for o in self.obs["TC-08"]:
            pid = o["page_id"]
            ids, ev, it = [o["obs_id"]], o["evidence_ids"], [_int(o)]
            if not o["key_texts"]:
                continue  # neevaluată pentru pagină: fără texte-cheie în plan
            ok2xx, tc01 = self.final_2xx(pid)
            if tc01["transport_ok"] and tc01["final_status"] is not None and not ok2xx:
                self.not_evaluated["Z5"].append(pid)
                continue
            for k in o["key_texts"]:
                if k["status"] in rules:
                    scope = {"page_id": pid, "url": o["url"], "kt_id": k["kt_id"], "text": k["text"]}
                    detail = k.get("reason") or ("zone: " + ", ".join(sorted({m["zone"] for m in k["matches"]})) if k["matches"] else
                                                 "textul nu apare în nicio zonă a HTML-ului brut")
                    self.add(rules[k["status"]], scope, ids, ev, detail, integrity=it)
            if all(k["status"] == "PRESENT_IN_BODY" for k in o["key_texts"]):
                self.add("R-Z5-04", {"page_id": pid, "url": o["url"]}, ids, ev, f"{len(o['key_texts'])} texte-cheie în corp", integrity=it)

    # ---------------------------------------------------------------- Z6
    @staticmethod
    def unfavorable(d):
        """Diferențele nefavorabile din R-Z6-01 / R-Z6-02 (AVL-204 0.2.0)."""
        status_url = False
        if "final_status" in d:
            ref, ua = d["final_status"]
            status_url = ref is not None and 200 <= ref < 300 and not (ua is not None and 200 <= ua < 300)
        if "url_final" in d:
            status_url = True
        headers = False
        h = d.get("headers", {})
        if "x-robots-tag" in h:
            ref, ua = (" ".join(x).lower() for x in h["x-robots-tag"])
            headers |= any(w in ua and w not in ref for w in ("noindex", "none"))
        if "content-type" in h:
            ref, ua = (" ".join(x).lower() for x in h["content-type"])
            headers |= any(t in ref for t in NONHTML) and not any(t in ua for t in NONHTML)
        return status_url, headers

    def z6(self):
        for o in self.obs["TC-06"]:
            pid = o["page_id"]
            ids = [o["obs_id"]]
            ref_ev = [e for r in o["references"] for e in r["evidence_ids"]]
            ref_it = [_int(r) for r in o["references"]]
            var = o["reference_variability"]
            all_clean = bool(o["agents"])
            if var.get("status_url_headers") == "VARIABIL":
                all_clean = False
                self.add("R-Z6-07", {"page_id": pid, "url": o["url"]}, ids, ref_ev, f"referința variază: {var.get('differences')}", integrity=ref_it)
            for a in o["agents"]:
                crawler = self.token.get(a["ua_key"], a["ua_key"])
                scope = {"page_id": pid, "url": o["url"], "user_agent": a["ua_key"], "crawler": crawler}
                ev = ref_ev + a["evidence_ids"]
                it = ref_it + [_int(a)]
                if a.get("comparison") == "UNKNOWN":
                    all_clean = False
                    self.add("R-Z6-04", scope, ids, ev, a["reason"], state=UNDETERMINED, deviation="DEV-G01", integrity=it)
                    continue
                suh, d = a["status_url_headers"], a.get("differences") or {}
                if suh == "DIFERIT":
                    all_clean = False
                    bad_su, bad_h = self.unfavorable(d)
                    if (bad_su or bad_h) and self.policy_for(crawler, pid) == "BLOCAT_INTENTIONAT":
                        self.add("R-Z6-08", scope, ids, ev, f"diferențe {d}; politica declarată pentru {crawler}: BLOCAT_INTENTIONAT", integrity=it)
                    else:
                        if bad_su:
                            self.add("R-Z6-01", scope, ids, ev, f"{ {k: d[k] for k in ('final_status', 'url_final') if k in d} }", integrity=it)
                        if bad_h:
                            self.add("R-Z6-02", scope, ids, ev, f"headere relevante: {d.get('headers')}", integrity=it)
                        if not (bad_su or bad_h):
                            self.add("R-Z6-06", scope, ids, ev, f"diferențe care nu sunt nefavorabile: {d}", integrity=it)
                content = a.get("content")
                if content == "DIFERIT":
                    all_clean = False
                    self.add("R-Z6-03", scope, ids, ev, "octeți diferiți față de referința stabilă", integrity=it)
                elif content and content.startswith("NEATRIBUIBIL"):
                    self.add("R-Z6-04", scope, ids, ev, "comparația de conținut", integrity=it)
                elif content == "UNKNOWN":
                    all_clean = False
                    self.add("R-Z6-04", scope, ids, ev, var.get("reason", "fără dublă captură"), deviation="DEV-G01", integrity=it)
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


def zones(findings, plan, not_evaluated=None):
    out = {}
    for z in ("Z1", "Z2", "Z3", "Z4", "Z5", "Z6"):
        fs = [f for f in findings if f["zone"] == z]
        if not fs:
            out[z] = {"state": "neevaluată", "reason": "nicio constatare (nu e „nicio problemă observată”, AVL204-REQ-016)", "undetermined": []}
        else:
            worst = min(fs, key=lambda f: SEVERITY[f["state"]])["state"]
            out[z] = {"state": worst, "counts": {s: sum(1 for f in fs if f["state"] == s) for s in SEVERITY if any(f["state"] == s for f in fs)},
                      "undetermined": [f["finding_id"] for f in fs if f["state"] == UNDETERMINED]}
    no_kt = [p["page_id"] for p in plan["pages"] if not p["key_texts"]]
    if no_kt:
        out["Z5"]["pages_not_evaluated"] = no_kt
    for z, pids in (not_evaluated or {}).items():
        if pids:
            out[z]["pages_not_evaluated_non_2xx"] = pids
    return out
