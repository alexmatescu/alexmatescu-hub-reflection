#!/usr/bin/env python3
"""AVL-203 — interfața în linie de comandă (implementare candidată, v0.3.0).

  avl203_cli.py plan init  --out PLAN.json
  avl203_cli.py plan validate PLAN.json
  avl203_cli.py plan freeze   PLAN.json [--out PLAN.frozen.json]
  avl203_cli.py capture --plan PLAN.frozen.json [--out DIR]
  avl203_cli.py verify  --run DIR [--write]
  avl203_cli.py analyze --run DIR [--robots-manual FIȘIER]
  avl203_cli.py diagnose --run DIR --rules 0.1.0 [--analysis DIR]
  avl203_cli.py report  --run DIR [--analysis DIR]
  avl203_cli.py client-report --run DIR [--analysis DIR] [--no-pdf] [--exemplu-public]

Coduri de ieșire: 0 succes; 1 integritate PARTIAL; 2 plan invalid / utilizare greșită;
3 captura nu a putut porni; 4 integritate INVALID.
"""
import argparse
import os
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from avl203 import SCRIPT_VERSION  # noqa: E402
from avl203 import analyze as analyze_mod  # noqa: E402
from avl203 import capture as cap_mod  # noqa: E402
from avl203 import client as client_mod  # noqa: E402
from avl203 import integrity, plan as plan_mod  # noqa: E402
from avl203 import report as report_mod  # noqa: E402
from avl203.util import read_json, utc_stamp  # noqa: E402

SKILL_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OPERATIONAL = os.path.join(SKILL_DIR, "config", "operational.v0.1.0.json")
UA_MANIFEST = os.path.join(SKILL_DIR, "config", "user-agents.v0.1.0.tsv")
TEMPLATE = os.path.join(SKILL_DIR, "config", "plan-template.json")
DEFAULT_OUT = os.path.join("evidence", "work", "avl203")


def _print_list(title, items):
    if items:
        print(title)
        for x in items:
            print(f"  - {x}")


def cmd_plan(a):
    if a.action == "init":
        if os.path.exists(a.out):
            print(f"eroare: {a.out} există deja", file=sys.stderr)
            return 2
        shutil.copyfile(TEMPLATE, a.out)
        print(a.out)
        return 0
    if a.action == "validate":
        errors, warnings = plan_mod.validate(read_json(a.plan))
        _print_list("Erori:", errors)
        _print_list("Avertismente:", warnings)
        print("plan valid" if not errors else "plan INVALID")
        return 0 if not errors else 2
    try:
        out, digest, warnings = plan_mod.freeze(a.plan, OPERATIONAL, UA_MANIFEST, a.out)
    except plan_mod.PlanError as e:
        _print_list("Erori:", e.errors)
        print("plan INVALID: nu a fost înghețat")
        return 2
    except FileExistsError as e:
        print(f"eroare: {e.filename} există deja; un plan înghețat nu se suprascrie", file=sys.stderr)
        return 2
    _print_list("Avertismente:", warnings)
    print(f"plan înghețat: {out}\nsha256: {digest}")
    return 0


def cmd_capture(a):
    try:
        run, res = cap_mod.capture(a.plan, a.out, SKILL_DIR)
    except plan_mod.PlanError as e:
        _print_list("Captura NU a pornit — plan invalid:", e.errors)
        return 2
    except (cap_mod.CaptureError, OSError) as e:
        print(f"Captura NU a pornit: {e}", file=sys.stderr)
        return 3
    print(f"integritate: {res['status']}")
    print(run)
    return {"VALID": 0, "PARTIAL": 1}.get(res["status"], 4)


def cmd_verify(a):
    res = integrity.verify(a.run)
    _print_list("Motive:", res["reasons"])
    bad = {k: v for k, v in res["artifacts"].items() if v != "OK"}
    _print_list("Artefacte cu probleme:", [f"{k}: {v}" for k, v in sorted(bad.items())])
    print(f"integritate: {res['status']} {res['counts']}")
    if a.write:
        d = os.path.join(a.run, "derived", f"verify-{utc_stamp()}")
        os.makedirs(d)
        integrity.write_report(res, os.path.join(d, "verify.json"))
        print(d)
    return {"VALID": 0, "PARTIAL": 1}.get(res["status"], 4)


def cmd_analyze(a):
    out, res, obs = analyze_mod.analyze(a.run, robots_manual=a.robots_manual)
    print(f"integritate: {res['status']}")
    if obs is None:
        print("rulare INVALIDĂ: raport de invaliditate, fără observații")
    elif obs["TC-03"]["manual_errors"]:
        _print_list("Aplicarea manuală robots.txt respinsă:", obs["TC-03"]["manual_errors"])
    print(out)
    return {"VALID": 0, "PARTIAL": 1}.get(res["status"], 4)


def cmd_diagnose(a):
    try:
        d = report_mod.diagnose(a.run, a.analysis or report_mod.latest_analysis(a.run), a.rules)
    except (ValueError, FileNotFoundError, FileExistsError, report_mod.ExcludedClaim) as e:
        print(f"eroare: {e}", file=sys.stderr)
        return 2
    for z, v in d["zones"].items():
        print(f"{z}: {v['state']}")
    print(f"{len(d['findings'])} constatări · {len(d['recommendations'])} recomandări · {len(d['deviations'])} abateri")
    return 0


def cmd_report(a):
    try:
        path = report_mod.report(a.run, a.analysis or report_mod.latest_analysis(a.run))
    except (FileNotFoundError, FileExistsError, report_mod.ExcludedClaim) as e:
        print(f"eroare: {e}", file=sys.stderr)
        return 2
    print(path)
    return 0


def cmd_client_report(a):
    try:
        path = client_mod.client_report(a.run, a.analysis or report_mod.latest_analysis(a.run), pdf=not a.no_pdf, public_example=a.public_example)
    except (FileNotFoundError, FileExistsError, report_mod.ExcludedClaim, client_mod.ClientReportError) as e:
        print(f"eroare: {e}", file=sys.stderr)
        return 2
    print(path)
    return 0


def main(argv=None):
    ap = argparse.ArgumentParser(prog="avl203_cli.py", description=f"AVL-203 implementare candidată v{SCRIPT_VERSION}")
    sub = ap.add_subparsers(dest="cmd", required=True)
    p = sub.add_parser("plan")
    psub = p.add_subparsers(dest="action", required=True)
    pi = psub.add_parser("init")
    pi.add_argument("--out", required=True)
    pv = psub.add_parser("validate")
    pv.add_argument("plan")
    pf = psub.add_parser("freeze")
    pf.add_argument("plan")
    pf.add_argument("--out")
    c = sub.add_parser("capture")
    c.add_argument("--plan", required=True, help="planul înghețat (*.frozen.json)")
    c.add_argument("--out", default=DEFAULT_OUT)
    v = sub.add_parser("verify")
    v.add_argument("--run", required=True)
    v.add_argument("--write", action="store_true", help="scrie raportul în derived/verify-<timp>/")
    an = sub.add_parser("analyze")
    an.add_argument("--run", required=True)
    an.add_argument("--robots-manual", help="aplicarea manuală documentată a RFC 9309 (JSON), AVL203-REQ-041")
    dg = sub.add_parser("diagnose")
    dg.add_argument("--run", required=True)
    dg.add_argument("--rules", required=True, help="versiunea grilei AVL-204 (0.1.0)")
    dg.add_argument("--analysis", help="directorul analizei (implicit: cea mai recentă)")
    rp = sub.add_parser("report")
    rp.add_argument("--run", required=True)
    rp.add_argument("--analysis", help="directorul analizei (implicit: cea mai recentă)")
    cr = sub.add_parser("client-report", help="rezumatul pe zone pentru client (HTML + PDF), fără anexa tehnică")
    cr.add_argument("--run", required=True)
    cr.add_argument("--analysis", help="directorul analizei (implicit: cea mai recentă)")
    cr.add_argument("--no-pdf", action="store_true", help="doar HTML, fără Chrome")
    cr.add_argument("--exemplu-public", dest="public_example", action="store_true",
                    help="varianta publicabilă, numai pentru site-urile proprii ale laboratorului")
    a = ap.parse_args(argv)
    return {"plan": cmd_plan, "capture": cmd_capture, "verify": cmd_verify, "analyze": cmd_analyze,
            "diagnose": cmd_diagnose, "report": cmd_report, "client-report": cmd_client_report}[a.cmd](a)


if __name__ == "__main__":
    sys.exit(main())
