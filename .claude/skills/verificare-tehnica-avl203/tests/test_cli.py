import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

from fixture_server import FixtureServer
from helpers import SKILL_DIR, local_plan
from test_capture import PAGES, site

CLI = [sys.executable, os.path.join(SKILL_DIR, "scripts", "avl203_cli.py")]


def cli(*args):
    r = subprocess.run(CLI + list(args), capture_output=True, text=True)
    return r.returncode, r.stdout, r.stderr


class EndToEndTest(unittest.TestCase):
    def test_pipeline(self):
        tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, tmp)
        srv = FixtureServer({})
        srv.routes.update(site(srv.origin))
        with srv:
            plan = local_plan(srv.host, PAGES)
            plan["capture"]["network_retry_pause_seconds"] = 0
            p = os.path.join(tmp, "plan.json")
            with open(p, "w", encoding="utf-8") as f:
                json.dump(plan, f)
            self.assertEqual(cli("plan", "validate", p)[0], 0)
            self.assertEqual(cli("plan", "freeze", p)[0], 0)
            code, out, err = cli("capture", "--plan", p[:-5] + ".frozen.json", "--out", os.path.join(tmp, "out"))
            self.assertEqual(code, 0, err)
            run = out.strip().splitlines()[-1]
        self.assertEqual(cli("verify", "--run", run)[0], 0)
        self.assertEqual(cli("analyze", "--run", run)[0], 0)
        self.assertEqual(cli("diagnose", "--run", run, "--rules", "9.9.9")[0], 2)
        code, out, err = cli("diagnose", "--run", run, "--rules", "0.2.0")
        self.assertEqual(code, 0, err)
        self.assertIn("Z6: problemă confirmată", out)
        code, out, err = cli("report", "--run", run)
        self.assertEqual(code, 0, err)
        with open(out.strip(), encoding="utf-8") as f:
            md = f.read()
        for section in ("RULARE TEST", "## 3. Observații", "## 4. Diagnostic", "## 5. Recomandări", "## 7. Abateri", "## 8. Limitele", "## 9. Trasabilitate"):
            self.assertIn(section, md)
        self.assertEqual(cli("report", "--run", run)[0], 2)  # raportul nu se suprascrie
        # reanaliza nu atinge dovezile brute
        self.assertEqual(cli("verify", "--run", run)[0], 0)

    def test_invalid_plan_stops_before_capture(self):
        tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, tmp)
        with FixtureServer({}) as srv:
            plan = local_plan(srv.host, PAGES)
            plan["sample_limits"] = ""
            p = os.path.join(tmp, "plan.json")
            with open(p, "w", encoding="utf-8") as f:
                json.dump(plan, f)
            self.assertEqual(cli("plan", "freeze", p)[0], 2)
            self.assertEqual(cli("capture", "--plan", p, "--out", os.path.join(tmp, "out"))[0], 2)
            self.assertEqual(srv.log, [])


if __name__ == "__main__":
    unittest.main()
