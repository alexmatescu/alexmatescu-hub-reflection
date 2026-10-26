import json
import os
import shutil
import tempfile
import unittest

from fixture_server import FixtureServer, html, text
from helpers import SKILL_DIR, FakeSleep, local_plan, write_and_freeze
from avl203 import capture as cap_mod
from avl203 import integrity


class IntegrityTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.mkdtemp()
        with FixtureServer({"/": html("<html><body>x</body></html>"), "/robots.txt": text("User-agent: *\nAllow: /\n")}) as srv:
            frozen = write_and_freeze(cls.tmp, local_plan(srv.host, [("P01", "pagina_principala", "/", [])]))
            cls.base, cls.res = cap_mod.capture(frozen, os.path.join(cls.tmp, "out"), SKILL_DIR, sleep=FakeSleep(), stamp="X")

    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(cls.tmp)

    def copy(self):
        d = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, d)
        dst = os.path.join(d, os.path.basename(self.base))
        shutil.copytree(self.base, dst)
        return dst

    def test_fresh_capture_valid(self):
        self.assertEqual(self.res["status"], "VALID")
        self.assertEqual(integrity.verify(self.copy())["status"], "VALID")

    def test_checksum_file_not_in_own_list(self):
        with open(os.path.join(self.base, integrity.CHECKSUMS)) as f:
            listed = f.read()
        self.assertNotIn("integrity/", listed)
        self.assertIn("manifest/config.json", listed)

    def test_modified_artifact_partial(self):
        run = self.copy()
        with open(os.path.join(run, "http", "P01.try1.body"), "ab") as f:
            f.write(b"!")
        res = integrity.verify(run)
        self.assertEqual(res["status"], "PARTIAL")
        self.assertEqual(res["artifacts"]["http/P01.try1.body"], "MODIFICAT")

    def test_missing_artifact_partial(self):
        run = self.copy()
        os.remove(os.path.join(run, "http", "P01.try1.body"))
        res = integrity.verify(run)
        self.assertEqual(res["status"], "PARTIAL")
        self.assertEqual(res["artifacts"]["http/P01.try1.body"], "LIPSA")

    def test_uncovered_file_partial(self):
        run = self.copy()
        with open(os.path.join(run, "http", "extra.body"), "w") as f:
            f.write("adăugat după captură")
        res = integrity.verify(run)
        self.assertEqual(res["status"], "PARTIAL")
        self.assertEqual(res["artifacts"]["http/extra.body"], "NEACOPERIT")

    def test_modified_config_invalid(self):
        run = self.copy()
        p = os.path.join(run, "manifest", "config.json")
        with open(p) as f:
            cfg = json.load(f)
        cfg["start_utc"] = "2000-01-01T00:00:00Z"
        with open(p, "w") as f:
            json.dump(cfg, f)
        self.assertEqual(integrity.verify(run)["status"], "INVALID")

    def test_missing_checksums_invalid(self):
        run = self.copy()
        os.remove(os.path.join(run, integrity.CHECKSUMS))
        self.assertEqual(integrity.verify(run)["status"], "INVALID")

    def test_changed_plan_invalid_even_if_checksums_regenerated(self):
        run = self.copy()
        with open(os.path.join(run, "manifest", "plan.frozen.json"), "ab") as f:
            f.write(b" ")
        os.remove(os.path.join(run, integrity.CHECKSUMS))
        integrity.write_checksums(run)
        res = integrity.verify(run)
        self.assertEqual(res["status"], "INVALID")
        self.assertTrue(any("planul înghețat" in r for r in res["reasons"]))

    def test_derived_dir_ignored(self):
        run = self.copy()
        os.makedirs(os.path.join(run, "derived", "x"))
        with open(os.path.join(run, "derived", "x", "report.md"), "w") as f:
            f.write("derivat")
        self.assertEqual(integrity.verify(run)["status"], "VALID")


if __name__ == "__main__":
    unittest.main()
