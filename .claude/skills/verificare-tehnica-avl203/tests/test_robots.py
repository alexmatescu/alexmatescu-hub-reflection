import unittest

import helpers  # noqa: F401  (sys.path)
from avl203 import robots

U = "https://example.com"


def pol(txt, token, path):
    return robots.decide(robots.parse(txt), token, U + path)[0]


class Rfc9309Test(unittest.TestCase):
    def test_specific_group_before_star(self):
        t = "User-agent: *\nDisallow: /\n\nUser-agent: Googlebot\nAllow: /\n"
        self.assertEqual(pol(t, "Googlebot", "/x"), "ALLOW")
        self.assertEqual(pol(t, "bingbot", "/x"), "DISALLOW")

    def test_token_case_insensitive_path_case_sensitive(self):
        t = "User-agent: GOOGLEBOT\nDisallow: /Privat\n"
        self.assertEqual(pol(t, "Googlebot", "/Privat/a"), "DISALLOW")
        self.assertEqual(pol(t, "Googlebot", "/privat/a"), "ALLOW")

    def test_groups_for_same_token_combined(self):
        t = "User-agent: bingbot\nDisallow: /a\n\nUser-agent: *\nDisallow: /c\n\nUser-agent: bingbot\nDisallow: /b\n"
        self.assertEqual(pol(t, "bingbot", "/a"), "DISALLOW")
        self.assertEqual(pol(t, "bingbot", "/b"), "DISALLOW")
        self.assertEqual(pol(t, "bingbot", "/c"), "ALLOW")  # grupul * nu se aplică dacă există grup specific

    def test_consecutive_user_agent_lines_share_group(self):
        t = "User-agent: OAI-SearchBot\nUser-agent: PerplexityBot\nDisallow: /\n"
        self.assertEqual(pol(t, "PerplexityBot", "/x"), "DISALLOW")
        self.assertEqual(pol(t, "OAI-SearchBot", "/x"), "DISALLOW")
        self.assertEqual(pol(t, "Googlebot", "/x"), "ALLOW")

    def test_longest_match_wins(self):
        t = "User-agent: *\nDisallow: /a\nAllow: /a/b\n"
        self.assertEqual(pol(t, "x", "/a/b/c"), "ALLOW")
        self.assertEqual(pol(t, "x", "/a/c"), "DISALLOW")
        t2 = "User-agent: *\nAllow: /a\nDisallow: /a/b\n"
        self.assertEqual(pol(t2, "x", "/a/b"), "DISALLOW")

    def test_allow_wins_on_equivalent_rules(self):
        t = "User-agent: *\nDisallow: /p\nAllow: /p\n"
        d, steps = robots.decide(robots.parse(t), "x", U + "/p")
        self.assertEqual(d, "ALLOW")
        self.assertIn("egalitate", steps["reason"])

    def test_wildcards(self):
        t = "User-agent: *\nDisallow: /*.pdf$\nDisallow: /tmp*\n"
        self.assertEqual(pol(t, "x", "/doc/a.pdf"), "DISALLOW")
        self.assertEqual(pol(t, "x", "/doc/a.pdf?x=1"), "ALLOW")
        self.assertEqual(pol(t, "x", "/tmpfile"), "DISALLOW")

    def test_query_part_of_path(self):
        t = "User-agent: *\nDisallow: /cauta?q=\n"
        self.assertEqual(pol(t, "x", "/cauta?q=ai"), "DISALLOW")
        self.assertEqual(pol(t, "x", "/cauta"), "ALLOW")

    def test_percent_encoding(self):
        t = "User-agent: *\nDisallow: /științe\nDisallow: /%7Euser\n"
        self.assertEqual(pol(t, "x", "/%C8%99tiin%C8%9Be/a"), "DISALLOW")
        self.assertEqual(pol(t, "x", "/~user"), "DISALLOW")

    def test_empty_disallow_and_no_rules_allow(self):
        self.assertEqual(pol("User-agent: *\nDisallow:\n", "x", "/a"), "ALLOW")
        self.assertEqual(pol("", "x", "/a"), "ALLOW")

    def test_rules_outside_group_ignored(self):
        p = robots.parse("Disallow: /\nUser-agent: *\nAllow: /\n")
        self.assertEqual(len(p["rules_outside_group"]), 1)
        self.assertEqual(robots.decide(p, "x", U + "/a")[0], "ALLOW")

    def test_robots_txt_implicitly_allowed(self):
        self.assertEqual(pol("User-agent: *\nDisallow: /\n", "x", "/robots.txt"), "ALLOW")

    def test_unknown_lines_do_not_invalidate_rules(self):
        t = "User-agent: *\nDissallow: /a\nthis is garbage\nCrawl-delay: 5\nDisallow: /b\nSitemap: https://example.com/s.xml\n"
        p = robots.parse(t)
        self.assertEqual([u["line"] for u in p["unparseable"]], [2, 3])
        self.assertEqual([u["looks_like"] for u in p["unparseable"]], ["disallow", None])
        self.assertEqual(p["other_records"][0]["key"], "crawl-delay")
        self.assertEqual(p["sitemaps"][0]["url"], "https://example.com/s.xml")
        self.assertEqual(robots.decide(p, "x", U + "/b")[0], "DISALLOW")
        self.assertEqual(robots.decide(p, "x", U + "/a")[0], "ALLOW")

    def test_star_row_uses_only_star_group(self):
        t = "User-agent: Googlebot\nDisallow: /\n"
        self.assertEqual(pol(t, "*", "/a"), "ALLOW")

    def test_near_match_reported_not_used(self):
        t = "User-agent: Googlebot/2.1\nDisallow: /\n"
        d, steps = robots.decide(robots.parse(t), "Googlebot", U + "/a")
        self.assertEqual(d, "ALLOW")
        self.assertEqual(steps["near_matches_not_used"], ["Googlebot/2.1"])

    def test_steps_document_winner_line(self):
        t = "User-agent: *\nDisallow: /a\nAllow: /a/b\n"
        _, steps = robots.decide(robots.parse(t), "x", U + "/a/b")
        self.assertEqual(steps["winner"]["line"], 3)
        self.assertEqual(steps["groups_used_lines"], [1])


def summ(**kw):
    base = {"transport_ok": True, "curl_exit": 0, "num_redirects": 0, "final_status": 200}
    base.update(kw)
    return base


class FileStateTest(unittest.TestCase):
    def test_states(self):
        self.assertEqual(robots.file_state(summ())[0], "AVAILABLE")
        self.assertEqual(robots.file_state(summ(final_status=404))[0], "UNAVAILABLE_4XX")
        s, why = robots.file_state(summ(final_status=429))
        self.assertEqual(s, "TOO_MANY_REQUESTS")
        self.assertIn("429", why)
        self.assertEqual(robots.file_state(summ(final_status=403))[0], "UNAVAILABLE_4XX")
        self.assertEqual(robots.file_state(summ(final_status=503))[0], "UNREACHABLE")
        self.assertEqual(robots.file_state(summ(transport_ok=False, curl_exit=6))[0], "UNREACHABLE")
        self.assertEqual(robots.file_state(summ(num_redirects=6))[0], "REDIRECT_LIMIT")
        self.assertEqual(robots.file_state(summ(num_redirects=5))[0], "AVAILABLE")
        self.assertEqual(robots.file_state(summ(transport_ok=False, curl_exit=47))[0], "UNDETERMINED")

    def test_evaluate_undetermined_has_no_method(self):
        _, _, _, d = robots.evaluate(summ(num_redirects=9), "User-agent: *\n", [("P01", U + "/", "Googlebot")])
        self.assertEqual(d[0]["policy"], "NEDETERMINAT")
        self.assertIsNone(d[0]["method"])


class ManualTest(unittest.TestCase):
    def test_manual_citations_checked(self):
        import json
        import os
        import tempfile
        body = "User-agent: *\nDisallow: /a\n"
        good = {"decisions": [{"page_id": "P01", "url": U + "/a", "token": "Googlebot", "policy": "DISALLOW",
                               "operator": "op", "date": "2026-10-25",
                               "steps": {"winner": {"line": 2}, "cited_lines": [{"line": 1, "text": "User-agent: *"},
                                                                                  {"line": 2, "text": "Disallow: /a"}]}}]}
        with tempfile.TemporaryDirectory() as d:
            p = os.path.join(d, "m.json")
            with open(p, "w") as f:
                json.dump(good, f)
            out, errors = robots.load_manual(p, body)
            self.assertEqual(errors, [])
            self.assertEqual(out[0]["method"], "MANUAL")
            good["decisions"][0]["steps"]["cited_lines"][1]["text"] = "Disallow: /b"
            with open(p, "w") as f:
                json.dump(good, f)
            _, errors = robots.load_manual(p, body)
            self.assertTrue(errors)


if __name__ == "__main__":
    unittest.main()
