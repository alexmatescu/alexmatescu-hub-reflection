"""TC-07: lista de checksum-uri și verificarea integrității (AVL203-REQ-022, REQ-023).

Rezultatul validării e separat de diagnostic (registru, punctul A):
  VALID    toate artefactele acoperite trec, manifestul și planul sunt intacte;
  PARTIAL  manifestul și planul sunt intacte, dar unele artefacte sunt modificate, lipsă sau neacoperite
           → constatările care depind de ele primesc R-VAL-01;
  INVALID  lipsește sau e compromis manifestul, lista de checksum-uri ori planul înghețat
           → nu se produce diagnostic, ci raport de invaliditate.
Un hash verifică octeții după captură, nu autenticitatea răspunsului serverului (AVL-203 §10).
"""
import json
import os

from .util import read_json, sha256_file

COVERED_DIRS = ["manifest", "http", "robots", "sitemap", "agents", "aux"]
COVERED_FILES = ["evidence-index.json", "evidence-index.tsv"]
CHECKSUMS = os.path.join("integrity", "sha256sums.txt")
REQUIRED = [
    "manifest/config.json",
    "manifest/requests.jsonl",
    "manifest/run-final.json",
    "manifest/plan.frozen.json",
    "manifest/plan.frozen.json.sha256",
]
TOOL = "Python hashlib.sha256 (format compatibil `shasum -a 256 -c` / `sha256sum -c`)"


def covered_files(run):
    out = []
    for d in COVERED_DIRS:
        root = os.path.join(run, d)
        for dp, _, fs in os.walk(root):
            for f in fs:
                out.append(os.path.relpath(os.path.join(dp, f), run).replace(os.sep, "/"))
    for f in COVERED_FILES:
        if os.path.exists(os.path.join(run, f)):
            out.append(f)
    return sorted(out)


def write_checksums(run):
    os.makedirs(os.path.join(run, "integrity"), exist_ok=True)
    lines = [f"{sha256_file(os.path.join(run, p))}  {p}\n" for p in covered_files(run)]
    with open(os.path.join(run, CHECKSUMS), "x", encoding="utf-8") as f:
        f.writelines(lines)
    return len(lines)


def _parse_checksums(path):
    entries = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.rstrip("\n")
            if not line:
                continue
            digest, rel = line.split("  ", 1)
            entries[rel] = digest
    return entries


def verify(run):
    res = {"tool": TOOL, "status": None, "reasons": [], "artifacts": {}, "counts": {}}
    path = os.path.join(run, CHECKSUMS)
    if not os.path.exists(path):
        res["status"] = "INVALID"
        res["reasons"].append(f"lipsește {CHECKSUMS}")
        return res
    try:
        listed = _parse_checksums(path)
    except (ValueError, UnicodeDecodeError):
        res["status"] = "INVALID"
        res["reasons"].append(f"{CHECKSUMS} nu poate fi citit")
        return res
    arts = res["artifacts"]
    for rel, digest in listed.items():
        full = os.path.join(run, rel)
        if not os.path.exists(full):
            arts[rel] = "LIPSA"
        elif sha256_file(full) != digest:
            arts[rel] = "MODIFICAT"
        else:
            arts[rel] = "OK"
    for rel in covered_files(run):
        if rel not in listed:
            arts[rel] = "NEACOPERIT"

    for rel in REQUIRED:
        st = arts.get(rel)
        if st is None:
            res["reasons"].append(f"{rel} lipsește din rulare și din lista de checksum-uri")
        elif st != "OK":
            res["reasons"].append(f"{rel}: {st}")

    if not res["reasons"]:
        # legăturile dintre configurația inițială, plan, jurnal și manifestul final
        cfg = read_json(os.path.join(run, "manifest", "config.json"))
        fin = read_json(os.path.join(run, "manifest", "run-final.json"))
        plan_sha = sha256_file(os.path.join(run, "manifest", "plan.frozen.json"))
        with open(os.path.join(run, "manifest", "plan.frozen.json.sha256"), encoding="utf-8") as f:
            side = f.read().split()[0]
        if not (plan_sha == side == cfg.get("plan", {}).get("sha256")):
            res["reasons"].append("planul înghețat nu corespunde hash-ului din config.json / .sha256")
        if fin.get("links", {}).get("config_sha256") != sha256_file(os.path.join(run, "manifest", "config.json")):
            res["reasons"].append("run-final.json nu trimite la config.json-ul prezent")
        if fin.get("links", {}).get("requests_sha256") != sha256_file(os.path.join(run, "manifest", "requests.jsonl")):
            res["reasons"].append("run-final.json nu trimite la requests.jsonl-ul prezent")
        if cfg.get("run_id") != fin.get("run_id") or cfg.get("run_id") != os.path.basename(os.path.normpath(run))[4:]:
            res["reasons"].append("run_id diferă între director, config.json și run-final.json")

    counts = {}
    for st in arts.values():
        counts[st] = counts.get(st, 0) + 1
    res["counts"] = counts
    if res["reasons"]:
        res["status"] = "INVALID"
    elif any(st != "OK" for st in arts.values()):
        res["status"] = "PARTIAL"
    else:
        res["status"] = "VALID"
    return res


def write_report(res, path):
    with open(path, "x", encoding="utf-8") as f:
        json.dump(res, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")
