"""Fiecare regulă AVL-204: un caz care o declanșează, unul care nu o declanșează, unul cu date insuficiente."""
import copy
import unittest

import helpers  # noqa: F401
from avl203 import diagnose as dg
from avl203 import recommend, report

O = "https://example.com"
CORE = dg.CORE
UAS = [{"key": "client", "token": "*"}] + [{"key": c.lower(), "token": c} for c in CORE]
OK = "OK"


def plan():
    pages = [("P01", "pagina_principala", "/"), ("P02", "despre", "/despre"), ("P03", "contact_identitate", "/contact")]
    return {"origin": O, "pages": [{"page_id": p, "category": c, "url": O + u, "index_intent": "INDEXAT",
                                    "key_texts": [{"kt_id": f"KT0{i}", "text": "Exemplu", "purpose": "nume"}]}
                                   for i, (p, c, u) in enumerate(pages, 1)],
            "access_policy": [{"crawler": c, "kind": "cautare", "policy": "PERMIS", "scope": "*"} for c in CORE]}


def summ(url, **kw):
    s = {"obs_id": None, "url_requested": url, "url_final": url, "transport_ok": True, "curl_exit": 0, "error": None,
         "initial_status": 200, "final_status": 200, "num_redirects": 0, "content_type": "text/html",
         "evidence_ids": [f"E-{url}"], "integrity": OK}
    s.update(kw)
    return s


def clean():
    p = plan()
    obs = {"TC-01": [], "TC-05": [], "TC-06": [], "TC-08": []}
    for pg in p["pages"]:
        pid, u = pg["page_id"], pg["url"]
        obs["TC-01"].append({**summ(u), "obs_id": f"OBS-TC01-{pid}", "page_id": pid})
        obs["TC-05"].append({"obs_id": f"OBS-TC05-{pid}", "page_id": pid, "url": u, "evidence_ids": [f"E-{u}"], "integrity": OK,
                             "status": "EXTRACTED", "title": [{"value": "Titlu"}], "canonical": [{"value": u, "resolved": u, "target": {"kind": "SELF"}}],
                             "canonical_http_header": [], "meta_robots": [], "x_robots_tag": [], "html_lang": [{"present": True, "value": "ro"}],
                             "json_ld": [{"json_syntax": "VALID", "line": 1}]})
        obs["TC-06"].append({"obs_id": f"OBS-TC06-{pid}", "page_id": pid, "url": u, "reference_variability": {"status_url_headers": "STABIL", "content": "STABIL"},
                             "references": [{"evidence_ids": ["R1"], "integrity": OK}, {"evidence_ids": ["R2"], "integrity": OK}],
                             "agents": [{"ua_key": c.lower(), "status_url_headers": "IDENTIC", "content": "IDENTIC", "differences": {},
                                         "evidence_ids": [f"A-{c}"], "integrity": OK} for c in CORE]})
        obs["TC-08"].append({"obs_id": f"OBS-TC08-{pid}", "page_id": pid, "url": u, "evidence_ids": [f"E-{u}"], "integrity": OK, "status": "EVALUATED",
                             "key_texts": [{"kt_id": pg["key_texts"][0]["kt_id"], "text": "Exemplu", "status": "PRESENT_IN_BODY", "matches": [{"zone": "body"}]}]})
    obs["TC-02"] = {"convergence": "CONVERGENT", "final_urls": [O + "/"], "incomplete": [],
                    "variants": [{**summ("https://example.com/"), "http_direct_2xx": False},
                                 {**summ("http://example.com/", initial_status=301, num_redirects=1, url_final=O + "/"), "http_direct_2xx": False}]}
    rcap = summ(O + "/robots.txt")
    obs["TC-03"] = {"capture": rcap, "file_state": "AVAILABLE", "file_state_reason": "2xx",
                    "parsed": {"unparseable": [], "groups": [], "sitemaps": []},
                    "decisions": [{"page_id": pg["page_id"], "url": pg["url"], "token": t, "policy": "ALLOW", "method": "PARSER",
                                   "steps": {"winner": None, "reason": "nicio regulă"}} for pg in p["pages"] for t in ["*"] + CORE]}
    obs["TC-04"] = {"status": "DECLARED", "reason": None, "deviation": None, "notes": [], "sitemaps": [{"evidence_ids": ["S1"], "integrity": OK}]}
    return p, obs


def run(p, obs):
    return dg.Diagnoser(obs, p, UAS).run()


def rules(findings, state=None):
    return [f["rule_id"] for f in findings if state is None or f["state"] == state]


class BaselineTest(unittest.TestCase):
    def test_clean_site_only_success_rules(self):
        f, d = run(*clean())
        self.assertEqual(set(rules(f)), {"R-Z1-08", "R-Z2-05", "R-Z3-05", "R-Z4-09", "R-Z5-04", "R-Z6-05"})
        self.assertEqual(d, [])
        self.assertTrue(all(x["rule_version"] == "0.2.0" and x["observation_ids"] and x["evidence_ids"] for x in f))

    def test_zone_without_findings_is_not_evaluated(self):
        p, obs = clean()
        obs["TC-08"] = []
        f, _ = run(p, obs)
        self.assertEqual(dg.zones(f, p)["Z5"]["state"], "neevaluată")

    def test_zone_state_is_most_severe_and_undetermined_listed(self):
        p, obs = clean()
        obs["TC-08"][0]["key_texts"][0]["status"] = "UNKNOWN"
        obs["TC-08"][1]["key_texts"][0]["status"] = "ABSENT_FROM_RAW_HTML"
        f, _ = run(p, obs)
        z = dg.zones(f, p)["Z5"]
        self.assertEqual(z["state"], dg.CONFIRMED)
        self.assertEqual(len(z["undetermined"]), 1)


class Z1Test(unittest.TestCase):
    def mut(self, fn):
        p, obs = clean()
        fn(p, obs)
        return run(p, obs)[0]

    def test_r_z1_01(self):
        f = self.mut(lambda p, o: o["TC-01"][2].update(final_status=503))
        self.assertIn("R-Z1-01", rules(f, dg.CONFIRMED))
        self.assertNotIn("R-Z1-01", rules(run(*clean())[0]))
        f = self.mut(lambda p, o: o["TC-01"][2].update(final_status=None, transport_ok=False, curl_exit=47))
        self.assertNotIn("R-Z1-01", rules(f))
        self.assertIn("R-Z1-07", rules(f, dg.UNDETERMINED))

    def test_r_z1_02_tls(self):
        f = self.mut(lambda p, o: o["TC-01"][0].update(transport_ok=False, curl_exit=60, final_status=None))
        self.assertIn("R-Z1-02", rules(f, dg.CONFIRMED))
        self.assertNotIn("R-Z1-08", [x["rule_id"] for x in f if x["scope"].get("page_id") == "P01"])

    def test_r_z1_03(self):
        def m(p, o):
            o["TC-02"].update(convergence="DIVERGENT", final_urls=[O + "/", "https://www.example.com/"])
        f = self.mut(m)
        self.assertIn("R-Z1-03", rules(f, dg.CONFIRMED))
        self.assertTrue(all(x["state"] == dg.UNDETERMINED for x in f if x["rule_id"] == "R-Z1-08"))
        f = self.mut(lambda p, o: o["TC-02"].update(convergence="INCOMPLET", incomplete=["http://www.example.com/"]))
        self.assertNotIn("R-Z1-03", rules(f))
        r08 = [x for x in f if x["rule_id"] == "R-Z1-08"]
        self.assertTrue(r08 and all(x["state"] == dg.UNDETERMINED and x["deviation"] is None for x in r08))  # AVL204-REQ-016

    def test_r_z1_04_with_and_without_declared_redirect(self):
        f = self.mut(lambda p, o: o["TC-01"][1].update(url_final=O + "/despre/", num_redirects=1, initial_status=301))
        self.assertIn("R-Z1-04", rules(f, dg.POSSIBLE))

        def declared(p, o):
            o["TC-01"][1].update(url_final=O + "/despre/", num_redirects=1)
            p["pages"][1]["intentional_redirect_to"] = O + "/despre/"
        self.assertNotIn("R-Z1-04", rules(self.mut(declared)))

    def test_r_z1_05(self):
        f = self.mut(lambda p, o: o["TC-01"][1].update(url_final=O + "/x", num_redirects=2))
        self.assertIn("R-Z1-05", rules(f, dg.POSSIBLE))
        self.assertNotIn("R-Z1-08", [x["rule_id"] for x in f if x["scope"].get("page_id") == "P02"])
        f = self.mut(lambda p, o: o["TC-01"][1].update(url_final=O + "/x", num_redirects=1))
        self.assertNotIn("R-Z1-05", rules(f))

    def test_r_z1_06(self):
        f = self.mut(lambda p, o: o["TC-02"]["variants"][1].update(http_direct_2xx=True))
        self.assertIn("R-Z1-06", rules(f, dg.POSSIBLE))
        self.assertNotIn("R-Z1-06", rules(run(*clean())[0]))

    def test_r_z1_07_single_and_repeated(self):
        def once(p, o):
            o["TC-01"][0]["previous_attempts"] = [{"curl_exit": 6}]
        f = self.mut(once)
        self.assertIn("R-Z1-07", rules(f, dg.UNDETERMINED))
        self.assertIn("R-Z1-08", [x["rule_id"] for x in f if x["scope"].get("page_id") == "P01"])

        def twice(p, o):
            o["TC-01"][0].update(transport_ok=False, curl_exit=6, final_status=None, previous_attempts=[{"curl_exit": 6}])
        f = self.mut(twice)
        r = [x for x in f if x["rule_id"] == "R-Z1-09"][0]
        self.assertEqual((r["state"], r["qualification"]), (dg.CONFIRMED, "în condițiile testate"))

    def test_r_z1_10_declared_status(self):
        def m(p, o):
            o["TC-01"][2].update(final_status=410)
            p["pages"][2]["intentional_status"] = 410
        f = self.mut(m)
        self.assertIn("R-Z1-10", rules(f, dg.NONE))
        self.assertNotIn("R-Z1-01", rules(f))


class Z2Test(unittest.TestCase):
    def mut(self, fn):
        p, obs = clean()
        fn(p, obs)
        return run(p, obs)

    def disallow(self, o, token="PerplexityBot", page="P01"):
        for d in o["TC-03"]["decisions"]:
            if d["token"] == token and d["page_id"] == page:
                d.update(policy="DISALLOW", steps={"winner": {"line": 2, "directive": "disallow", "path": "/"}})

    def test_r_z2_01_contrary_to_policy(self):
        f, _ = self.mut(lambda p, o: self.disallow(o))
        self.assertIn("R-Z2-01", rules(f, dg.CONFIRMED))

    def test_r_z2_01_not_when_block_declared(self):
        def m(p, o):
            self.disallow(o)
            p["access_policy"][4]["policy"] = "BLOCAT_INTENTIONAT"
        f, _ = self.mut(m)
        self.assertNotIn("R-Z2-01", rules(f))
        self.assertTrue(any(x["rule_id"] == "R-Z2-05" and x["scope"].get("crawler") == "PerplexityBot" and x["scope"]["page_id"] == "P01" for x in f))

    def test_r_z2_01_default_policy_is_full_access(self):
        def m(p, o):
            self.disallow(o)
            p["access_policy"] = [x for x in p["access_policy"] if x["crawler"] != "PerplexityBot"]
        f, d = self.mut(m)
        r = [x for x in f if x["rule_id"] == "R-Z2-01"][0]
        self.assertEqual((r["state"], r["deviation"]), (dg.CONFIRMED, None))  # AVL-204 §3.1: implicit acces total

    def test_r_z2_02(self):
        def m(p, o):
            o["TC-03"].update(file_state="UNREACHABLE", file_state_reason="503")
            o["TC-03"]["capture"]["final_status"] = 503
        f, _ = self.mut(m)
        self.assertEqual(rules(f, dg.CONFIRMED), ["R-Z2-02"])

        def net_once(p, o):
            o["TC-03"].update(file_state="UNREACHABLE", file_state_reason="rețea")
            o["TC-03"]["capture"].update(transport_ok=False, curl_exit=7)
        f, _ = self.mut(net_once)
        self.assertNotIn("R-Z2-02", rules(f))
        self.assertIn("R-Z2-06", rules(f, dg.UNDETERMINED))

        def net_twice(p, o):
            net_once(p, o)
            o["TC-03"]["capture"]["previous_attempts"] = [{"curl_exit": 7}]
        f, _ = self.mut(net_twice)
        self.assertIn("R-Z2-02", rules(f, dg.CONFIRMED))

    def test_r_z2_03(self):
        f, _ = self.mut(lambda p, o: o["TC-03"]["parsed"]["unparseable"].append({"line": 3, "text": "Dissallow: /x", "looks_like": "disallow"}))
        self.assertIn("R-Z2-03", rules(f, dg.POSSIBLE))
        self.assertIn("R-Z2-05", rules(f))  # regulile parsabile rămân valabile
        f, _ = self.mut(lambda p, o: o["TC-03"]["parsed"]["unparseable"].append({"line": 3, "text": "garbage", "looks_like": None}))
        self.assertNotIn("R-Z2-03", rules(f))  # doar directivele scrise greșit se semnalează
        self.assertNotIn("R-Z2-03", rules(run(*clean())[0]))

    def test_r_z2_07_cross_host_redirect_not_a_problem(self):
        f, _ = self.mut(lambda p, o: o["TC-03"]["capture"].update(url_final="https://cdn.example.net/robots.txt", num_redirects=1))
        self.assertIn("R-Z2-07", rules(f, dg.NONE))
        self.assertIn("R-Z2-05", rules(f))

    def test_r_z2_08_429(self):
        f, _ = self.mut(lambda p, o: o["TC-03"].update(file_state="TOO_MANY_REQUESTS", file_state_reason="429"))
        self.assertEqual([x["rule_id"] for x in f if x["zone"] == "Z2"], ["R-Z2-08"])

    def test_r_z2_04(self):
        f, _ = self.mut(lambda p, o: o["TC-03"].update(file_state="UNAVAILABLE_4XX", file_state_reason="404"))
        self.assertEqual(rules(f, dg.NONE).count("R-Z2-04"), 1)
        self.assertNotIn("R-Z2-05", rules(f))

    def test_r_z2_09_and_06_redirect_limit(self):
        def m(p, o):
            o["TC-03"].update(file_state="REDIRECT_LIMIT", file_state_reason="7 redirecturi")
            o["TC-03"]["capture"]["num_redirects"] = 7
        f, d = self.mut(m)
        self.assertEqual([(x["rule_id"], x["state"]) for x in f if x["zone"] == "Z2"],
                         [("R-Z2-09", dg.POSSIBLE), ("R-Z2-06", dg.UNDETERMINED)])
        self.assertEqual(d, [])

    def test_r_z2_06_undetermined(self):
        f, _ = self.mut(lambda p, o: o["TC-03"].update(file_state="UNDETERMINED", file_state_reason="status 1xx final"))
        self.assertEqual([x["rule_id"] for x in f if x["zone"] == "Z2"], ["R-Z2-06"])

    def test_star_row_not_diagnosed(self):
        f, _ = run(*clean())
        self.assertFalse(any(x["scope"].get("crawler") == "*" for x in f))


class Z3Test(unittest.TestCase):
    def test_each_status(self):
        for st, rule, state in (("UNAVAILABLE", "R-Z3-01", dg.CONFIRMED), ("FOUND_AT_CONVENTIONAL_PATH", "R-Z3-02", dg.POSSIBLE),
                                ("NOT_FOUND", "R-Z3-03", dg.POSSIBLE), ("UNKNOWN", "R-Z3-04", dg.UNDETERMINED), ("DECLARED", "R-Z3-05", dg.NONE)):
            p, obs = clean()
            obs["TC-04"]["status"] = st
            f, _ = run(p, obs)
            self.assertEqual([(x["rule_id"], x["state"]) for x in f if x["zone"] == "Z3"], [(rule, state)])

    def test_unknown_is_table_rule_not_deviation(self):
        p, obs = clean()
        obs["TC-04"].update(status="UNKNOWN", reason="403")
        f, d = run(p, obs)
        self.assertEqual(d, [])
        self.assertIn("403", [x for x in f if x["rule_id"] == "R-Z3-04"][0]["detail"])


class Z4Test(unittest.TestCase):
    def mut(self, fn, page=0):
        p, obs = clean()
        fn(p, obs, obs["TC-05"][page])
        return run(p, obs)

    def z4(self, f, pid="P01"):
        return [(x["rule_id"], x["state"]) for x in f if x["zone"] == "Z4" and x["scope"].get("page_id") == pid]

    def test_r_z4_01(self):
        f, _ = self.mut(lambda p, o, s: s["meta_robots"].append({"name": "robots", "value": "noindex, follow"}))
        self.assertIn(("R-Z4-01", dg.CONFIRMED), self.z4(f))
        f, _ = self.mut(lambda p, o, s: (s["meta_robots"].append({"name": "robots", "value": "noindex"}),
                                         p["pages"][0].update(index_intent="NEINDEXAT_INTENTIONAT")))
        self.assertNotIn("R-Z4-01", [r for r, _ in self.z4(f)])
        f, _ = self.mut(lambda p, o, s: (s["x_robots_tag"].append({"scope": "googlebot", "directives": ["none"]}),
                                         p["pages"][0].update(index_intent="NECUNOSCUT")))
        self.assertIn(("R-Z4-01", dg.UNDETERMINED), self.z4(f))  # DEV-G02: intenția de indexare nedeclarată

    def test_r_z4_02(self):
        bad = {"kind": "CAPTURED_AUX", "transport_ok": True, "initial_status": 404, "final_status": 404, "curl_exit": 0, "evidence_ids": ["X"], "integrity": OK}
        f, _ = self.mut(lambda p, o, s: s["canonical"][0].update(resolved=O + "/c", target=bad))
        self.assertIn(("R-Z4-02", dg.CONFIRMED), self.z4(f))
        good = {**bad, "initial_status": 301, "final_status": 200}
        f, d = self.mut(lambda p, o, s: s["canonical"][0].update(resolved=O + "/c", target=good))
        self.assertNotIn("R-Z4-02", [r for r, _ in self.z4(f)])
        self.assertIn(("R-Z4-10", dg.POSSIBLE), self.z4(f))
        self.assertEqual(d, [])
        f, _ = self.mut(lambda p, o, s: s["canonical"][0].update(resolved="https://alt.example/c", target={"kind": "NOT_CAPTURED", "reason": "limite"}))
        self.assertIn(("R-Z4-08", dg.UNDETERMINED), self.z4(f))
        self.assertNotIn("R-Z4-09", [r for r, _ in self.z4(f)])

    def test_r_z4_03_04_06_07(self):
        f, _ = self.mut(lambda p, o, s: s["json_ld"].append({"json_syntax": "INVALID", "line": 9, "error": "x"}))
        self.assertIn(("R-Z4-03", dg.CONFIRMED), self.z4(f))
        f, _ = self.mut(lambda p, o, s: s.update(title=[{"value": ""}]))
        self.assertIn(("R-Z4-04", dg.CONFIRMED), self.z4(f))
        f, _ = self.mut(lambda p, o, s: s.update(json_ld=[]), page=1)
        self.assertIn(("R-Z4-06", dg.POSSIBLE), self.z4(f, "P02"))
        f, _ = self.mut(lambda p, o, s: s.update(json_ld=[]), page=0)
        self.assertNotIn("R-Z4-06", [r for r, _ in self.z4(f)])  # doar pagina canonică despre entitate
        f, _ = self.mut(lambda p, o, s: s.update(html_lang=[{"present": False, "value": None}]))
        self.assertIn(("R-Z4-07", dg.POSSIBLE), self.z4(f))

    def test_r_z4_05(self):
        tgt = {"kind": "CAPTURED_AUX", "transport_ok": True, "initial_status": 200, "final_status": 200, "curl_exit": 0, "evidence_ids": [], "integrity": OK}
        f, _ = self.mut(lambda p, o, s: s["canonical"][0].update(resolved=O + "/alt", target=tgt))
        self.assertIn(("R-Z4-05", dg.POSSIBLE), self.z4(f))
        f, _ = self.mut(lambda p, o, s: (s["canonical"][0].update(resolved=O + "/alt", target=tgt), p["pages"][0].update(intentional_canonical=O + "/alt")))
        self.assertNotIn("R-Z4-05", [r for r, _ in self.z4(f)])

    def test_r_z4_08_and_non_2xx(self):
        f, _ = self.mut(lambda p, o, s: s.update(status="UNKNOWN", reason="nu e HTML"))
        self.assertEqual(self.z4(f), [("R-Z4-08", dg.UNDETERMINED)])
        p, obs = clean()
        obs["TC-01"][0]["final_status"] = 404
        obs["TC-05"][0]["title"] = []
        dgn = dg.Diagnoser(obs, p, UAS)
        f, d = dgn.run()
        self.assertEqual(self.z4(f), [])  # AVL-204 §6: Z4 nu se evaluează pentru 4xx/5xx
        self.assertEqual(dgn.not_evaluated["Z4"], ["P01"])
        self.assertIn("R-Z1-01", rules(f, dg.CONFIRMED))

    def test_r_z4_09(self):
        f, _ = run(*clean())
        self.assertEqual(self.z4(f), [("R-Z4-09", dg.NONE)])


class Z5Test(unittest.TestCase):
    def st(self, *statuses):
        p, obs = clean()
        obs["TC-08"][0]["key_texts"] = [{"kt_id": f"KT{i}", "text": "x", "status": s, "matches": []} for i, s in enumerate(statuses)]
        f, d = run(p, obs)
        return [(x["rule_id"], x["state"]) for x in f if x["zone"] == "Z5" and x["scope"]["page_id"] == "P01"], d

    def test_each_status(self):
        self.assertEqual(self.st("ABSENT_FROM_RAW_HTML")[0], [("R-Z5-01", dg.CONFIRMED)])
        self.assertEqual(self.st("PRESENT_IN_METADATA_ONLY")[0], [("R-Z5-02", dg.POSSIBLE)])
        self.assertEqual(self.st("UNKNOWN")[0], [("R-Z5-03", dg.UNDETERMINED)])
        self.assertEqual(self.st("PRESENT_IN_BODY", "PRESENT_IN_BODY")[0], [("R-Z5-04", dg.NONE)])
        self.assertEqual(self.st("PRESENT_IN_BODY", "UNKNOWN")[0], [("R-Z5-03", dg.UNDETERMINED)])
        self.assertEqual(self.st("PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")[0], [("R-Z5-05", dg.POSSIBLE)])
        self.assertEqual(self.st("PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")[1], [])

    def test_qualification_kept(self):
        p, obs = clean()
        obs["TC-08"][0]["key_texts"][0]["status"] = "ABSENT_FROM_RAW_HTML"
        f, _ = run(p, obs)
        self.assertEqual([x for x in f if x["rule_id"] == "R-Z5-01"][0]["qualification"], "în HTML-ul brut")

    def test_no_key_texts_no_success(self):
        p, obs = clean()
        obs["TC-08"][0]["key_texts"] = []
        f, _ = run(p, obs)
        self.assertFalse(any(x["zone"] == "Z5" and x["scope"]["page_id"] == "P01" for x in f))


class Z6Test(unittest.TestCase):
    def agent(self, fn, policy=None):
        p, obs = clean()
        a = obs["TC-06"][0]["agents"][4]  # perplexitybot
        fn(obs["TC-06"][0], a)
        if policy:
            p["access_policy"][4]["policy"] = policy
        f, d = run(p, obs)
        return [(x["rule_id"], x["state"], x.get("deviation")) for x in f if x["zone"] == "Z6" and x["scope"]["page_id"] == "P01"], d, f

    def test_r_z6_01_02(self):
        z, _, f = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT", differences={"final_status": [200, 403]}))
        self.assertIn(("R-Z6-01", dg.CONFIRMED, None), z)
        self.assertEqual([x for x in f if x["rule_id"] == "R-Z6-01"][0]["qualification"], "răspuns diferit pentru User-Agent-ul declarat")
        self.assertNotIn("R-Z6-05", [r for r, _, _ in z])
        z, _, _ = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT", differences={"headers": {"x-robots-tag": [[], ["noindex"]]}}))
        self.assertIn(("R-Z6-02", dg.CONFIRMED, None), z)

    def test_declared_block_not_a_problem(self):
        z, d, _ = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT", differences={"final_status": [200, 403]}), policy="BLOCAT_INTENTIONAT")
        self.assertIn(("R-Z6-08", dg.NONE, None), z)

    def test_reference_variable_not_attributed(self):
        def m(o, a):
            o["reference_variability"]["status_url_headers"] = "VARIABIL"
            a.update(status_url_headers="NEATRIBUIBIL (referința variază)", differences={"final_status": [200, 403]})
        z, _, _ = self.agent(m)
        self.assertIn(("R-Z6-07", dg.UNDETERMINED, None), z)
        self.assertNotIn(dg.CONFIRMED, [s for _, s, _ in z])
        self.assertNotIn("R-Z6-05", [r for r, _, _ in z])

    def test_favorable_difference_only_possible(self):
        z, _, _ = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT", differences={"final_status": [404, 200]}))
        self.assertIn(("R-Z6-06", dg.POSSIBLE, None), z)
        self.assertNotIn("R-Z6-01", [r for r, _, _ in z])
        z, _, _ = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT",
                                                   differences={"headers": {"content-type": [["text/html; charset=utf-8"], ["text/html"]]}}))
        self.assertIn(("R-Z6-06", dg.POSSIBLE, None), z)
        z, _, _ = self.agent(lambda o, a: a.update(status_url_headers="DIFERIT",
                                                   differences={"headers": {"content-type": [["text/html"], ["application/json"]]}}))
        self.assertIn(("R-Z6-02", dg.CONFIRMED, None), z)

    def test_r_z6_03_04_05(self):
        z, _, _ = self.agent(lambda o, a: a.update(content="DIFERIT"))
        self.assertIn(("R-Z6-03", dg.POSSIBLE, None), z)
        z, _, _ = self.agent(lambda o, a: a.update(content="NEATRIBUIBIL (variabilitate intrinsecă)"))
        self.assertIn(("R-Z6-04", dg.UNDETERMINED, None), z)
        self.assertIn(("R-Z6-05", dg.NONE, None), z)  # conținut neevaluabil conform R-Z6-04
        z, _, _ = self.agent(lambda o, a: a.update(comparison="UNKNOWN", reason="captura a eșuat"))
        self.assertNotIn("R-Z6-05", [r for r, _, _ in z])


class IntegrityRuleTest(unittest.TestCase):
    def test_r_val_01_replaces_rule_on_affected_artifacts(self):
        p, obs = clean()
        obs["TC-01"][2].update(final_status=500, integrity="AFFECTED")
        f, _ = run(p, obs)
        r = [x for x in f if x.get("would_apply") == "R-Z1-01"]
        self.assertEqual((r[0]["rule_id"], r[0]["state"]), ("R-VAL-01", dg.UNDETERMINED))
        self.assertNotIn("R-Z1-01", rules(f))


class RecommendTest(unittest.TestCase):
    def test_priorities_and_null_for_undetermined(self):
        p, obs = clean()
        for d in obs["TC-03"]["decisions"]:
            if d["page_id"] == "P01" and d["token"] != "*":
                d.update(policy="DISALLOW", steps={"winner": {"line": 2, "directive": "disallow", "path": "/"}})
        obs["TC-08"][2]["key_texts"][0]["status"] = "PRESENT_IN_METADATA_ONLY"
        obs["TC-04"]["status"] = "UNKNOWN"
        f, _ = run(p, obs)
        recs = {r["rule_id"]: r for r in recommend.build(f, p)}
        self.assertEqual((recs["R-Z2-01"]["priority"], recs["R-Z2-01"]["impact"]), ("P1", "mare"))
        self.assertEqual((recs["R-Z5-02"]["priority"], recs["R-Z5-02"]["impact"]), ("P3", "mic"))
        self.assertIsNone(recs["R-Z3-04"]["priority"])
        self.assertIn("AVL204-REQ-009", recs["R-Z3-04"]["priority_reason"])
        self.assertTrue(all(r["effort"] is None and r["follow_up"] for r in recs.values()))
        order = [r["priority"] for r in recommend.build(f, p)]
        self.assertEqual(order, sorted(order, key=lambda x: {"P1": 1, "P2": 2, "P3": 3, None: 4}[x]))

    def test_no_recommendation_for_success(self):
        f, _ = run(*clean())
        self.assertEqual(recommend.build(f, plan()), [])


class ExcludedClaimsTest(unittest.TestCase):
    def test_forbidden_phrases_detected(self):
        for t in ("Pagina este indexată.", "ChatGPT nu vă poate accesa site-ul.", "Site-ul face cloaking.",
                  "Tot site-ul poate fi descoperit.", "Google a ales acest canonical.", "Datele structurate sunt corecte.",
                  "După corectare veți apărea în răspunsurile AI."):
            with self.assertRaises(report.ExcludedClaim):
                report.check_excluded(t)
        report.check_excluded("Pagina răspunde 200 la URL-ul declarat. Nu confirmă cloaking.")


if __name__ == "__main__":
    unittest.main()
