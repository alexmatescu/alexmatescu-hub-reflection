import json
import os
import tempfile
import unittest

from helpers import OPERATIONAL, UA_MANIFEST, local_plan, template, write_and_freeze
from avl203 import plan as plan_mod


def dump(path, obj):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f)


class ValidateTest(unittest.TestCase):
    def errors(self, plan):
        return plan_mod.validate(plan)[0]

    def test_template_is_valid(self):
        self.assertEqual(self.errors(template()), [])

    def test_contact_not_applicable_rejected(self):
        p = template()
        p["pages"] = [x for x in p["pages"] if x["category"] != "contact_identitate"]
        p["categories_not_applicable"].append({"category": "contact_identitate", "reason": "nu există"})
        self.assertTrue(any("REQ-042" in e for e in self.errors(p)))

    def test_contact_absent_requires_provenance(self):
        p = template()
        p["pages"] = [x for x in p["pages"] if x["category"] != "contact_identitate"]
        self.assertTrue(any("contact_identitate lipsește" in e for e in self.errors(p)))
        p["identity_page_absent"] = {"method": "meniu, footer, sitemap", "date": "2026-10-25", "by": "operator", "limit": ""}
        self.assertTrue(any("identity_page_absent.limit" in e for e in self.errors(p)))
        p["identity_page_absent"]["limit"] = "constatare a operatorului, nu dovadă exhaustivă"
        self.assertEqual(self.errors(p), [])

    def test_contact_both_url_and_absent_rejected(self):
        p = template()
        p["identity_page_absent"] = {"method": "x", "date": "2026-10-25", "by": "x", "limit": "x"}
        self.assertTrue(any("identity_page_absent e completat" in e for e in self.errors(p)))

    def test_required_category_missing(self):
        p = template()
        p["categories_not_applicable"] = []
        self.assertTrue(any("referinta" in e for e in self.errors(p)))

    def test_missing_reason_and_limits(self):
        p = template()
        p["pages"][0]["reason"] = ""
        p["sample_limits"] = ""
        errs = self.errors(p)
        self.assertTrue(any("reason" in e for e in errs))
        self.assertTrue(any("sample_limits" in e for e in errs))

    def test_series_requires_series_id(self):
        p = template()
        p["measurement_point"] = "T0"
        self.assertTrue(any("series_id" in e for e in self.errors(p)))
        p["series_id"] = "AVL203-exemplu-2026"
        self.assertEqual(self.errors(p), [])
        p["measurement_point"] = "F0"
        self.assertTrue(any("measurement_point" in e for e in self.errors(p)))

    def test_local_origin_needs_fixture_permission_and_test_label(self):
        p = local_plan("127.0.0.1:8000", [("P01", "pagina_principala", "/", [])])
        self.assertEqual(self.errors(p), [])
        p["allow_local_fixture"] = False
        self.assertTrue(any("local" in e for e in self.errors(p)))
        p["allow_local_fixture"] = True
        p["measurement_point"], p["series_id"] = "T0", "s"
        self.assertTrue(any("allow_local_fixture" in e for e in self.errors(p)))

    def test_core_crawler_policy_required(self):
        p = template()
        p["access_policy"] = [x for x in p["access_policy"] if x["crawler"] != "Claude-SearchBot"]
        self.assertTrue(any("Claude-SearchBot" in e for e in self.errors(p)))

    def test_url_off_origin_and_duplicates(self):
        p = template()
        p["pages"][1]["url"] = "https://other.example/despre"
        p["pages"][2]["page_id"] = "P01"
        errs = self.errors(p)
        self.assertTrue(any("originul declarat" in e for e in errs))
        self.assertTrue(any("page_id duplicat" in e for e in errs))

    def test_main_offer_count(self):
        p = template()
        p["main_offer_count_declared"] = 3
        self.assertTrue(any("main_offer_count_declared" in e for e in self.errors(p)))

    def test_extensions_must_be_explicit(self):
        p = template()
        del p["extensions"]
        self.assertTrue(any("extensions" in e for e in self.errors(p)))

    def test_pages_without_key_texts_warn(self):
        _, warnings = plan_mod.validate(template())
        self.assertTrue(any("Z5" in w for w in warnings))


class FreezeTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)

    def test_freeze_and_load(self):
        frozen = write_and_freeze(self.tmp.name, template())
        plan, digest = plan_mod.load_frozen(frozen)
        self.assertEqual(plan["capture_effective"]["max_redirects"], 10)
        self.assertEqual(plan["frozen"]["ua_manifest"]["file"], "user-agents.v0.1.0.tsv")
        with open(frozen + ".sha256") as f:
            self.assertIn(digest, f.read())

    def test_frozen_plan_tamper_detected(self):
        frozen = write_and_freeze(self.tmp.name, template())
        with open(frozen, "r+b") as f:
            data = f.read().replace(b"Exemplu SRL", b"Altceva SRL", 1)
            f.seek(0)
            f.write(data)
            f.truncate()
        with self.assertRaises(plan_mod.PlanError) as cm:
            plan_mod.load_frozen(frozen)
        self.assertIn("modificat după înghețare", cm.exception.errors[0])

    def test_unfrozen_plan_rejected(self):
        path = os.path.join(self.tmp.name, "p.json")
        dump(path, template())
        with self.assertRaises(plan_mod.PlanError):
            plan_mod.load_frozen(path)

    def test_invalid_plan_not_frozen(self):
        p = template()
        p["sample_limits"] = ""
        path = os.path.join(self.tmp.name, "p.json")
        dump(path, p)
        with self.assertRaises(plan_mod.PlanError):
            plan_mod.freeze(path, OPERATIONAL, UA_MANIFEST)
        self.assertFalse(os.path.exists(os.path.join(self.tmp.name, "p.frozen.json")))

    def test_freeze_does_not_overwrite(self):
        write_and_freeze(self.tmp.name, template())
        with self.assertRaises(FileExistsError):
            write_and_freeze(self.tmp.name, template())

    def test_unknown_capture_parameter_rejected(self):
        p = template()
        p["capture"] = {"insecure": True}
        path = os.path.join(self.tmp.name, "p.json")
        dump(path, p)
        with self.assertRaises(plan_mod.PlanError):
            plan_mod.freeze(path, OPERATIONAL, UA_MANIFEST)


if __name__ == "__main__":
    unittest.main()
