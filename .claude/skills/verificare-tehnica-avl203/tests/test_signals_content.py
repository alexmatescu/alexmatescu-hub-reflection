import unittest

import helpers  # noqa: F401
from avl203 import content, signals


def summ(ct="text/html; charset=utf-8", headers=None, url="https://example.com/a/"):
    return {"transport_ok": True, "final_status": 200, "content_type": ct, "url_final": url,
            "final_headers": headers if headers is not None else [["content-type", ct]]}


class SignalsTest(unittest.TestCase):
    def ex(self, html_text, **kw):
        return signals.extract(summ(**kw), html_text.encode("utf-8"))

    def test_attribute_order_quotes_multiline(self):
        r = self.ex("<html lang='ro'>\n<head><title>\n  Titlu   pagină\n</title>\n"
                    "<link\n href=\"/c\"\n rel='canonical'>\n<meta content=\"noindex, follow\" NAME=\"Googlebot\">\n</head></html>")
        self.assertEqual(r["status"], "EXTRACTED")
        self.assertEqual(r["title"][0]["value"], "Titlu pagină")
        self.assertEqual(r["canonical"][0]["value"], "/c")
        self.assertEqual(r["canonical"][0]["resolved"], "https://example.com/c")
        self.assertEqual(r["canonical"][0]["line"], 5)
        self.assertEqual(r["meta_robots"][0], {"name": "googlebot", "value": "noindex, follow", "line": 8, "col": 1})
        self.assertEqual(r["html_lang"][0]["value"], "ro")

    def test_relative_canonical_uses_base_href(self):
        r = self.ex('<head><base href="https://cdn.example.com/x/"><link rel="canonical" href="p"></head>')
        self.assertEqual(r["canonical"][0]["resolved"], "https://cdn.example.com/x/p")
        self.assertEqual(r["canonical"][0]["value"], "p")

    def test_all_occurrences_kept(self):
        r = self.ex('<title>A</title><title>B</title><link rel=canonical href=/1><link rel=canonical href=/2>')
        self.assertEqual([t["value"] for t in r["title"]], ["A", "B"])
        self.assertEqual(len(r["canonical"]), 2)

    def test_svg_title_ignored_and_missing_lang(self):
        r = self.ex('<html><body><svg><title>icon</title></svg></body></html>')
        self.assertEqual(r["title"], [])
        self.assertFalse(r["html_lang"][0]["present"])

    def test_jsonld_valid_and_invalid(self):
        r = self.ex('<script type="application/ld+json">{"@type":"Person","name":"A"}</script>'
                    '<script type="application/ld+json">{"@type": "Org",}</script>')
        self.assertEqual([b["json_syntax"] for b in r["json_ld"]], ["VALID", "INVALID"])
        self.assertEqual(r["json_ld"][0]["types"], ['"Person"'])

    def test_x_robots_tag_scoped_and_link_header(self):
        h = [["content-type", "text/html"], ["x-robots-tag", "googlebot: noindex, nofollow"], ["x-robots-tag", "noarchive"],
             ["link", '<https://example.com/c>; rel="canonical"']]
        r = self.ex("<p>x</p>", headers=h)
        self.assertEqual(r["x_robots_tag"][0]["scope"], "googlebot")
        self.assertEqual(r["x_robots_tag"][0]["directives"], ["noindex", "nofollow"])
        self.assertEqual(r["x_robots_tag"][1]["scope"], "*")
        self.assertEqual(r["canonical_http_header"][0]["resolved"], "https://example.com/c")

    def test_non_html_and_bad_encoding_unknown(self):
        self.assertEqual(signals.extract(summ(ct="application/pdf"), b"%PDF")["status"], "UNKNOWN")
        r = signals.extract(summ(ct="text/html"), "<title>Ștefan</title>".encode("utf-16"))
        self.assertEqual(r["status"], "UNKNOWN")
        r = signals.extract(summ(ct="text/html; charset=iso-8859-2"), "<title>Ţară</title>".encode("iso-8859-2"))
        self.assertEqual(r["title"][0]["value"], "Ţară")


class ContentTest(unittest.TestCase):
    def run_kt(self, html_text, *texts, ct="text/html; charset=utf-8"):
        kts = [{"kt_id": f"KT{i:02d}", "text": t, "purpose": "test"} for i, t in enumerate(texts, 1)]
        return content.analyze(summ(ct=ct), html_text.encode("utf-8"), kts)["key_texts"]

    def st(self, html_text, text):
        return self.run_kt(html_text, text)[0]["status"]

    def test_body(self):
        self.assertEqual(self.st("<body><p>Consultanță AI în Sibiu</p></body>", "consultanță ai"), "PRESENT_IN_BODY")

    def test_metadata_only(self):
        h = '<head><meta name="description" content="Consultanță AI"></head><body><img alt="Alex Matescu"></body>'
        self.assertEqual(self.st(h, "Consultanță AI"), "PRESENT_IN_METADATA_ONLY")
        self.assertEqual(self.st(h, "Alex Matescu"), "PRESENT_IN_METADATA_ONLY")
        self.assertEqual(self.st('<script type="application/ld+json">{"name":"Alex Matescu"}</script>', "alex matescu"),
                         "PRESENT_IN_METADATA_ONLY")

    def test_jsonld_unicode_escape(self):
        self.assertEqual(self.st('<script type="application/ld+json">{"name":"\\u0218tefan"}</script>', "Ștefan"),
                         "PRESENT_IN_METADATA_ONLY")

    def test_absent(self):
        self.assertEqual(self.st("<body><p>altceva</p></body>", "Alex Matescu"), "ABSENT_FROM_RAW_HTML")

    def test_hydration_payload_only_is_unknown_not_absent(self):
        r = self.run_kt('<body><div id="root"></div><script>window.__DATA__={"t":"Alex Matescu"}</script></body>', "Alex Matescu")[0]
        self.assertEqual(r["status"], "PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")
        self.assertEqual(r["matches"][0]["zone"], "script_non_jsonld")

    def test_title_only_and_comment_only_unknown(self):
        self.assertEqual(self.st("<head><title>Alex Matescu</title></head><body>x</body>", "Alex Matescu"), "PRESENT_IN_METADATA_ONLY")
        self.assertEqual(self.st("<body><!-- Alex Matescu --></body>", "Alex Matescu"), "PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")

    def test_style_not_body(self):
        self.assertEqual(self.st("<style>.alex-matescu{}</style><body>x</body>", "alex-matescu"), "ABSENT_FROM_RAW_HTML")

    def test_inline_split_matches_block_split_separated(self):
        self.assertEqual(self.st("<p>Alex <b>Mate</b>scu</p>", "Alex Matescu"), "PRESENT_IN_BODY")
        self.assertEqual(self.st("<div>Alex</div><div>Matescu</div>", "Alex Matescu"), "PRESENT_IN_BODY")
        # blocuri separate: nu e PRESENT_IN_BODY, dar octeții conțin textul unit → UNKNOWN, nu ABSENT
        self.assertEqual(self.st("<li>conferinț</li><li>a</li>", "conferința"), "UNKNOWN")

    def test_adjacent_inline_without_space_is_unknown(self):
        r = self.run_kt("<p><span>Alex</span><span>Matescu</span></p>", "Alex Matescu")[0]
        self.assertEqual(r["status"], "UNKNOWN")
        self.assertIn("fără separatori", r["reason"])

    def test_entities_nbsp_case_and_diacritics(self):
        self.assertEqual(self.st("<p>Alex&nbsp;MATESCU &amp; asociații</p>", "alex matescu & Asociații"), "PRESENT_IN_BODY")
        self.assertEqual(self.st("<p>Consultan&#355;&#259;</p>", "Consultanţă"), "PRESENT_IN_BODY")
        # ș cu virgulă (U+0219) ≠ ş cu sedilă (U+015F): diacriticele se păstrează (OP-01)
        self.assertEqual(self.st("<p>Brașov</p>", "Braşov"), "ABSENT_FROM_RAW_HTML")
        # NFC: „ă” compus din a + U+0306 se potrivește cu „ă” precompus
        self.assertEqual(self.st("<p>consultanta\u0306</p>", "consultantă"), "PRESENT_IN_BODY")

    def test_location_is_original_line_and_col(self):
        r = self.run_kt("<html>\n<body>\n  <p>x &amp; Alex   Matescu</p>\n</body>", "alex matescu")[0]
        m = r["matches"][0]
        self.assertEqual((m["zone"], m["line"], m["col"]), ("body", 3, 14))

    def test_every_zone_reported(self):
        h = ('<head><title>Fixture SRL</title><meta name="description" content="Fixture SRL"></head>'
             '<body><p>Fixture SRL</p><img alt="Fixture SRL"></body>')
        r = self.run_kt(h, "Fixture SRL")[0]
        self.assertEqual(r["status"], "PRESENT_IN_BODY")
        self.assertEqual(sorted({m["zone"] for m in r["matches"]}), ["attributes", "body", "meta", "title"])

    def test_noscript_and_template_aux(self):
        self.assertEqual(self.st("<body><noscript>Alex Matescu</noscript></body>", "Alex Matescu"), "PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")
        self.assertEqual(self.st("<body><template><p>Alex Matescu</p></template></body>", "Alex Matescu"), "PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY")

    def test_unknown_for_non_html_or_bad_bytes(self):
        r = content.analyze(summ(ct="application/json"), b"{}", [{"kt_id": "KT01", "text": "x", "purpose": "p"}])
        self.assertEqual(r["key_texts"][0]["status"], "UNKNOWN")
        r = content.analyze(summ(ct="text/html"), b"\xff\xfe\x00bad", [{"kt_id": "KT01", "text": "x", "purpose": "p"}])
        self.assertEqual(r["key_texts"][0]["status"], "UNKNOWN")


if __name__ == "__main__":
    unittest.main()
