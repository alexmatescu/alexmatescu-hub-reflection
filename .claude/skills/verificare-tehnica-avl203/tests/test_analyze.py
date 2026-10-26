import itertools
import os
import shutil
import tempfile
import unittest

from fixture_server import FixtureServer, by_ua, html, redirect, text
from helpers import SKILL_DIR, FakeSleep, local_plan, write_and_freeze
from test_capture import PAGES, site
from avl203 import analyze as an
from avl203 import capture as cap_mod
from avl203.util import read_json

_stamp = itertools.count(1)


def capture_site(tmp, routes, pages=None, **plan_over):
    with FixtureServer(routes) as srv:
        if callable(routes.get("__init__")):
            routes.pop("__init__")(srv)
        plan = local_plan(srv.host, pages or [("P01", "pagina_principala", "/", [])], **plan_over)
        d = tempfile.mkdtemp(dir=tmp)
        frozen = write_and_freeze(d, plan)
        run, _ = cap_mod.capture(frozen, os.path.join(d, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="S")
        return run, srv


def analyze(run):
    out, res, obs = an.analyze(run, stamp=f"A{next(_stamp):03d}")
    return obs


class FullSiteTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.mkdtemp()
        routes = {}
        routes["__init__"] = lambda srv: routes.update(site(srv.origin))
        cls.rdir, cls.srv = capture_site(cls.tmp, routes, PAGES)
        cls.out, cls.res, cls.obs = an.analyze(cls.rdir, stamp="A000")

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def page(self, tc, pid):
        return next(o for o in self.obs[tc] if o["page_id"] == pid)

    def test_written_in_new_derived_dir(self):
        self.assertTrue(self.out.startswith(os.path.join(self.rdir, "derived", "analysis-")))
        self.assertTrue(os.path.exists(os.path.join(self.out, "observations.json")))

    def test_tc01_redirect_and_status(self):
        p02 = self.page("TC-01", "P02")
        self.assertEqual((p02["initial_status"], p02["final_status"], p02["num_redirects"]), (301, 200, 1))
        self.assertEqual(self.page("TC-01", "P03")["final_status"], 404)
        self.assertTrue(all(self.page("TC-01", "P01")["evidence_ids"]))

    def test_tc03_decisions_parser(self):
        d = self.obs["TC-03"]["decisions"]
        self.assertEqual(self.obs["TC-03"]["file_state"], "AVAILABLE")
        self.assertEqual(len(d), len(PAGES) * len(an.MATRIX))
        self.assertTrue(all(x["policy"] == "ALLOW" and x["method"] == "PARSER" for x in d))

    def test_tc04_declared_with_out_of_bounds_kept(self):
        t = self.obs["TC-04"]
        self.assertEqual(t["status"], "DECLARED")
        self.assertTrue(any(i["type"] == "declared_not_captured" for i in t["sitemaps"]))
        self.assertEqual(len([i for i in t["sitemaps"] if i["type"] == "conventional"]), 2)

    def test_tc05_canonical_targets(self):
        c1 = self.page("TC-05", "P01")["canonical"][0]
        self.assertEqual(c1["target"]["kind"], "CAPTURED_AUX")
        self.assertEqual(c1["target"]["final_status"], 200)
        c2 = self.page("TC-05", "P02")["canonical"][0]
        self.assertEqual(c2["target"]["kind"], "NOT_CAPTURED")
        self.assertIn("în afara limitelor", c2["target"]["reason"])

    def test_tc06_difference_for_declared_agent(self):
        t = self.page("TC-06", "P04")
        self.assertEqual(t["reference_variability"]["status_url_headers"], "STABIL")
        perp = next(a for a in t["agents"] if a["ua_key"] == "perplexitybot")
        self.assertEqual(perp["status_url_headers"], "DIFERIT")
        self.assertEqual(perp["differences"]["final_status"], [200, 403])
        g = next(a for a in t["agents"] if a["ua_key"] == "googlebot")
        self.assertEqual((g["status_url_headers"], g["content"]), ("IDENTIC", "IDENTIC"))

    def test_tc08(self):
        self.assertEqual(self.page("TC-08", "P01")["key_texts"][0]["status"], "PRESENT_IN_BODY")

    def test_deterministic_reanalysis(self):
        o2 = analyze(self.rdir)
        a, b = dict(self.obs), dict(o2)
        a.pop("analysis_utc"), b.pop("analysis_utc")
        self.assertEqual(a, b)


class IntegrityGateTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, self.tmp)
        self.rdir, _ = capture_site(self.tmp, {"/": html("<p>x</p>")})

    def test_invalid_run_gets_invalidity_report_only(self):
        with open(os.path.join(self.rdir, "manifest", "config.json"), "a") as f:
            f.write(" ")
        out, res, obs = an.analyze(self.rdir, stamp="I")
        self.assertIsNone(obs)
        self.assertTrue(os.path.exists(os.path.join(out, "invalidity.json")))
        self.assertFalse(os.path.exists(os.path.join(out, "observations.json")))

    def test_partial_marks_affected_observations(self):
        with open(os.path.join(self.rdir, "http", "P01.try1.body"), "ab") as f:
            f.write(b"!")
        obs = analyze(self.rdir)
        self.assertEqual(obs["integrity"]["status"], "PARTIAL")
        self.assertIn("AFFECTED", obs["TC-01"][0]["integrity"])
        self.assertEqual(obs["TC-03"]["capture"]["integrity"], "OK")


class Tc04Test(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, self.tmp)

    def status(self, routes):
        run, _ = capture_site(self.tmp, routes)
        return analyze(run)["TC-04"]

    def test_no_declaration_403_and_404_unknown(self):
        t = self.status({"/robots.txt": text("User-agent: *\nAllow: /\n"), "/sitemap.xml": text("no", status=403)})
        self.assertEqual(t["status"], "UNKNOWN")
        self.assertIn("403", t["reason"])

    def test_robots_5xx_unknown(self):
        self.assertEqual(self.status({"/robots.txt": text("err", status=500)})["status"], "UNKNOWN")

    def test_robots_404_and_paths_404_not_found(self):
        t = self.status({})
        self.assertEqual(t["status"], "NOT_FOUND")
        self.assertTrue(any("fără declarații" in n for n in t["notes"]))

    def test_declared_failing_unavailable(self):
        t = self.status({"/robots.txt": lambda r: (200, {"Content-Type": "text/plain"},
                                                     f"Sitemap: http://{r.headers['Host']}/lipsa.xml\n".encode())})
        self.assertEqual(t["status"], "UNAVAILABLE")

    def test_conventional_html_200_is_unknown(self):
        t = self.status({"/robots.txt": text("User-agent: *\n"), "/sitemap.xml": html("<!doctype html><html>SPA</html>")})
        self.assertEqual(t["status"], "UNKNOWN")  # AVL-203 0.5.0: FOUND_AT_CONVENTIONAL_PATH cere un document XML
        self.assertTrue(any("HTML" in n for n in t["notes"]))

    def test_conventional_xml_200_found(self):
        t = self.status({"/robots.txt": text("User-agent: *\n"), "/sitemap.xml": text("<?xml version='1.0'?><urlset/>", ctype="application/xml")})
        self.assertEqual(t["status"], "FOUND_AT_CONVENTIONAL_PATH")

    def test_conventional_5xx_unavailable(self):
        t = self.status({"/robots.txt": text(""), "/sitemap.xml": text("e", status=503), "/sitemap_index.xml": text("e", status=500)})
        self.assertEqual(t["status"], "UNAVAILABLE")


class Tc06VariabilityTest(unittest.TestCase):
    def test_dynamic_reference_content_not_attributed(self):
        tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, tmp)
        n = itertools.count()
        run, _ = capture_site(tmp, {"/": lambda r: (200, {"Content-Type": "text/html"}, f"<p>{next(n)}</p>".encode())})
        t = analyze(run)["TC-06"][0]
        self.assertEqual(t["reference_variability"]["content"], "VARIABIL")
        self.assertTrue(all(a["content"].startswith("NEATRIBUIBIL") for a in t["agents"]))
        self.assertEqual(t["reference_variability"]["status_url_headers"], "STABIL")

    def test_variable_reference_status_not_attributed(self):
        tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, tmp)
        seen = {"n": 0}

        def flaky(r):
            if "curl/" in r.headers.get("User-Agent", ""):
                seen["n"] += 1
                if seen["n"] == 3:  # TC-01 și TC-02 sunt 1–2; a treia cerere curl e ref1 din TC-06
                    return 429, {"Content-Type": "text/html"}, b"rate"
            return 200, {"Content-Type": "text/html"}, b"<p>ok</p>"
        run, _ = capture_site(tmp, {"/": flaky})
        t = analyze(run)["TC-06"][0]
        self.assertEqual(t["reference_variability"]["status_url_headers"], "VARIABIL")
        self.assertTrue(all(a["status_url_headers"].startswith("NEATRIBUIBIL") for a in t["agents"]))


if __name__ == "__main__":
    unittest.main()
