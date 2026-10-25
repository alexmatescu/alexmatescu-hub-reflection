import json
import os
import shutil
import tempfile
import unittest

from fixture_server import FixtureServer, by_ua, dead_port, gzipped, html, redirect, slow, text
from helpers import SKILL_DIR, FakeSleep, local_plan, read_requests, write_and_freeze
from avl203 import capture as cap_mod
from avl203 import integrity
from avl203.plan import PlanError

UA_KEYS = ["googlebot", "bingbot", "oai-searchbot", "claude-searchbot", "perplexitybot"]


def site(origin):
    return {
        "/": html(f'<html lang="ro"><head><title>Acasă</title><link rel="canonical" href="/canon"></head><body>Fixture SRL</body></html>'),
        "/canon": html("<html><body>canonical</body></html>"),
        "/despre": redirect("/despre-final"),
        "/despre-final": html('<html><head><link rel="canonical" href="http://other.example/despre"></head><body>Despre</body></html>'),
        "/contact": html("<html><body>Contact</body></html>", status=404),
        "/servicii": by_ua(html("<html><body>Servicii</body></html>"),
                           PerplexityBot=html("<html><body>blocat</body></html>", status=403)),
        "/gzip": gzipped("<html><body>" + "comprimat " * 500 + "</body></html>"),
        "/robots.txt": text(f"User-agent: *\nDisallow: /privat\n# comentariu\nSitemap: {origin}/sitemap-declarat.xml\n"
                            "SITEMAP: http://other.example/sitemap.xml\n"),
        "/sitemap-declarat.xml": text("<?xml version='1.0'?><urlset/>", ctype="application/xml"),
        "/sitemap.xml": text("<?xml version='1.0'?><urlset/>", ctype="application/xml"),
    }


PAGES = [
    ("P01", "pagina_principala", "/", [{"kt_id": "KT01", "text": "Fixture SRL", "purpose": "nume"}]),
    ("P02", "despre", "/despre", []),
    ("P03", "contact_identitate", "/contact", []),
    ("P04", "oferta_principala", "/servicii", []),
    ("P05", "oferta_principala", "/gzip", []),
]


class FullCaptureTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.mkdtemp()
        cls.srv = FixtureServer({})
        cls.srv.routes.update(site(cls.srv.origin))
        cls.srv.__enter__()
        cls.frozen = write_and_freeze(cls.tmp, local_plan(cls.srv.host, PAGES))
        cls.sleep = FakeSleep()
        cls.rdir, cls.res = cap_mod.capture(cls.frozen, os.path.join(cls.tmp, "out"), SKILL_DIR, sleep=cls.sleep, stamp="20261025T000000Z")
        cls.reqs = read_requests(cls.rdir)

    @classmethod
    def tearDownClass(cls):
        cls.srv.__exit__()
        shutil.rmtree(cls.tmp)

    def by_tc(self, tc):
        return [r for r in self.reqs if r["tc"] == tc and not r.get("skipped")]

    def test_structure_and_integrity(self):
        for d in ("manifest", "http", "robots", "sitemap", "agents", "aux", "integrity"):
            self.assertTrue(os.path.isdir(os.path.join(self.rdir, d)), d)
        self.assertEqual(self.res["status"], "VALID", self.res)
        self.assertTrue(os.path.basename(self.rdir).startswith("run_AVL203-fixture-TEST-20261025T000000Z"))

    def test_config_written_before_first_request(self):
        with open(os.path.join(self.rdir, "manifest", "config.json")) as f:
            cfg = json.load(f)
        first = min(r["start_utc"] for r in self.reqs if not r.get("skipped"))
        self.assertLessEqual(cfg["start_utc"], first)
        self.assertEqual(cfg["protocol"]["version"], "0.4.0")
        self.assertEqual(cfg["grid"]["version"], "0.1.0")
        self.assertEqual(len(cfg["ua_manifest"]["effective"]), 6)
        with open(os.path.join(self.rdir, "http", "P01.try1.metrics")) as f:
            self.assertNotIn("local_ip", f.read())

    def test_request_counts(self):
        self.assertEqual(len(self.by_tc("TC-01")), 5)
        self.assertEqual(len(self.by_tc("TC-02")), 1)
        self.assertEqual(len(self.by_tc("TC-03")), 1)
        roles = [r["role"] for r in self.by_tc("TC-04")]
        self.assertEqual(roles.count("sitemap_declared"), 1)
        self.assertEqual(roles.count("sitemap_conventional"), 2)
        self.assertEqual(len(self.by_tc("TC-06")), 5 * (2 + len(UA_KEYS)))
        self.assertEqual(len(self.by_tc("AUX")), 1)

    def test_tc06_order_reference_before_and_after_agents(self):
        p04 = [r for r in self.by_tc("TC-06") if r["page_id"] == "P04"]
        self.assertEqual(p04[0]["role"], "reference")
        self.assertEqual(p04[-1]["role"], "reference")
        self.assertEqual([r["ua_key"] for r in p04[1:-1]], UA_KEYS)
        ua_log = [x["ua"] for x in self.srv.log if x["path"] == "/servicii"]
        self.assertTrue(any("PerplexityBot/1.0" in u for u in ua_log))
        self.assertTrue(any(u.startswith("curl/") for u in ua_log))
        with open(os.path.join(self.rdir, "agents", "P04_perplexitybot.try1.metrics")) as f:
            self.assertIn("http_code=403", f.read())

    def test_out_of_bounds_targets_skipped_not_requested(self):
        skipped = [r for r in self.reqs if r.get("skipped")]
        self.assertTrue(any(r["tc"] == "TC-04" and "other.example" in (r["url"] or "") for r in skipped))
        self.assertTrue(any(r["tc"] == "AUX" and "other.example" in (r["url"] or "") for r in skipped))
        aux = self.by_tc("AUX")[0]
        self.assertEqual(aux["url"], self.srv.origin + "/canon")
        self.assertTrue(aux["auxiliary"])

    def test_redirect_headers_kept_for_chain(self):
        with open(os.path.join(self.rdir, "http", "P02.try1.headers")) as f:
            h = f.read()
        self.assertEqual(h.count("HTTP/1."), 2)
        with open(os.path.join(self.rdir, "http", "P02.try1.metrics")) as f:
            m = f.read()
        self.assertIn("num_redirects=1", m)
        self.assertIn("url_effective=" + self.srv.origin + "/despre-final", m)

    def test_compressed_size_separate_from_saved_body(self):
        r = [x for x in self.by_tc("TC-01") if x["page_id"] == "P05"][0]
        with open(os.path.join(self.rdir, "http", "P05.try1.metrics")) as f:
            m = dict(l.rstrip("\n").split("=", 1) for l in f if "=" in l)
        self.assertLess(int(m["size_download"]), r["body_bytes_saved"])
        self.assertIn("gzip", [x for x in self.srv.log if x["path"] == "/gzip"][0]["accept_encoding"])

    def test_robots_not_compressed(self):
        self.assertFalse(self.by_tc("TC-03")[0]["compressed"])

    def test_evidence_index_covers_every_raw_file(self):
        with open(os.path.join(self.rdir, "evidence-index.json")) as f:
            idx = json.load(f)
        paths = {a["path"] for a in idx["artifacts"]}
        raw = {p for p in integrity.covered_files(self.rdir)
               if p.split("/")[0] in ("http", "robots", "sitemap", "agents", "aux")}
        self.assertEqual(paths, raw)

    def test_existing_run_id_not_overwritten(self):
        with self.assertRaises(cap_mod.CaptureError):
            cap_mod.capture(self.frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="20261025T000000Z")


class FailureModesTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, self.tmp)

    def test_network_error_retried_once_with_declared_pause(self):
        host = f"127.0.0.1:{dead_port()}"
        frozen = write_and_freeze(self.tmp, local_plan(host, [("P01", "pagina_principala", "/", [])]))
        sleep = FakeSleep()
        run, res = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=sleep, stamp="X")
        p01 = [r for r in read_requests(run) if r["tc"] == "TC-01"]
        self.assertEqual([r["attempt"] for r in p01], [1, 2])
        self.assertEqual({r["curl_exit"] for r in p01}, {7})
        self.assertIn(30, sleep.calls)
        self.assertEqual(res["status"], "VALID")
        # robots necapturat → nicio cerere pentru sitemap-uri declarate
        self.assertFalse(any(r.get("role") == "sitemap_declared" for r in read_requests(run)))

    def test_redirect_loop_stops_at_limit(self):
        with FixtureServer({"/": redirect("/")}) as srv:
            plan = local_plan(srv.host, [("P01", "pagina_principala", "/", [])])
            plan["capture"]["max_redirects"] = 3
            frozen = write_and_freeze(self.tmp, plan)
            run, _ = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
        r = [x for x in read_requests(run) if x["tc"] == "TC-01"][0]
        self.assertEqual(r["curl_exit"], 47)
        self.assertEqual(r["attempt"], 1)  # 47 nu e eroare de rețea: fără repetare

    def test_tls_error_kept_not_retried_not_bypassed(self):
        with FixtureServer({"/": html("x")}, tls_dir=self.tmp) as srv:
            plan = local_plan(srv.host, [("P01", "pagina_principala", "/", [])])
            plan["origin"] = srv.origin
            plan["pages"][0]["url"] = srv.origin + "/"
            plan["variants"]["schemes"] = ["https"]
            frozen = write_and_freeze(self.tmp, plan)
            run, _ = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
        r = [x for x in read_requests(run) if x["tc"] == "TC-01"]
        self.assertEqual(len(r), 1)
        self.assertIn(r[0]["curl_exit"], (35, 60))
        with open(os.path.join(run, "http", "P01.try1.stderr")) as f:
            self.assertTrue(f.read().strip())
        with open(os.path.join(run, "manifest", "requests.jsonl")) as f:
            self.assertNotIn("--insecure", f.read())

    def test_dns_error_retried(self):
        host = "nu-exista.invalid"
        plan = local_plan(host, [("P01", "pagina_principala", "/", [])], allow_local_fixture=False)
        frozen = write_and_freeze(self.tmp, plan)
        run, _ = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
        r = [x for x in read_requests(run) if x["tc"] == "TC-01"]
        self.assertEqual([(x["attempt"], x["curl_exit"]) for x in r], [(1, 6), (2, 6)])

    def test_timeout_retried(self):
        with FixtureServer({"/": slow(3, html("lent"))}) as srv:
            plan = local_plan(srv.host, [("P01", "pagina_principala", "/", [])])
            plan["capture"]["max_time"] = 1
            frozen = write_and_freeze(self.tmp, plan)
            run, _ = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
        r = [x for x in read_requests(run) if x["tc"] == "TC-01"]
        self.assertEqual([(x["attempt"], x["curl_exit"]) for x in r], [(1, 28), (2, 28)])

    def test_aux_budget_respected(self):
        with FixtureServer({"/": html('<link rel="canonical" href="/c">'), "/c": html("c")}) as srv:
            plan = local_plan(srv.host, [("P01", "pagina_principala", "/", [])])
            plan["auxiliary_requests"]["max_requests"] = 0
            frozen = write_and_freeze(self.tmp, plan)
            run, _ = cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
            self.assertNotIn("/c", [x["path"] for x in srv.log])
        self.assertTrue(any(r.get("skipped") and "bugetul" in r["reason"] for r in read_requests(run)))

    def test_tampered_plan_makes_no_request(self):
        with FixtureServer({"/": html("x")}) as srv:
            frozen = write_and_freeze(self.tmp, local_plan(srv.host, [("P01", "pagina_principala", "/", [])]))
            with open(frozen, "ab") as f:
                f.write(b" ")
            with self.assertRaises(PlanError):
                cap_mod.capture(frozen, os.path.join(self.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")
            self.assertEqual(srv.log, [])
        self.assertFalse(os.path.exists(os.path.join(self.tmp, "out")))


if __name__ == "__main__":
    unittest.main()
