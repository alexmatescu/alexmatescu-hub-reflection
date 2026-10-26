"""Captura unei rulări AVL-203 (TC-00…TC-04, TC-06, cereri auxiliare), condusă de planul înghețat.

Ordinea: planul înghețat se verifică înainte de orice request (AVL203-REQ-001, REQ-030); apoi
configurația inițială imuabilă (manifest/config.json, REQ-006), jurnalul requesturilor
(manifest/requests.jsonl), manifestul final (manifest/run-final.json), evidence index-ul și
lista de checksum-uri (TC-07). Artefactele brute nu se rescriu (REQ-023); un run_id existent
nu se suprascrie.
"""
import json
import os
import platform
import shutil
import subprocess
import sys
import time
from urllib.parse import urlsplit

from . import IMPLEMENTATION_STATUS, PROTOCOL_VERSION, GRID_VERSION, RUN_SCHEMA, SCRIPT_VERSION
from . import integrity, uamanifest
from .htmllinks import canonical_targets
from .plan import load_frozen
from .util import read_json, sha256_file, slug, utc_now, utc_stamp, write_json_new

RAW_DIRS = ["manifest", "http", "robots", "sitemap", "agents", "aux", "integrity"]
# câmpuri write-out: fără local_ip/local_port (date despre operator, inutile pentru protocol)
WRITE_OUT = "".join(f"{k}=%{{{k}}}\\n" for k in (
    "http_code", "url_effective", "num_redirects", "redirect_url", "content_type", "size_download",
    "size_header", "remote_ip", "remote_port", "scheme", "http_version", "http_connect", "num_headers",
    "ssl_verify_result", "time_total", "exitcode", "errormsg",
))


class CaptureError(Exception):
    pass


def _env(run):
    lines = [f"start_utc={utc_now()}"]
    for title, cmd in (("curl --version", ["curl", "--version"]), ("uname -a", ["uname", "-a"]),
                       ("sw_vers", ["sw_vers"])):
        if shutil.which(cmd[0]):
            out = subprocess.run(cmd, capture_output=True, text=True).stdout.strip()
            lines += [f"--- {title}", out]
    lines += ["--- python", sys.version.replace("\n", " "), f"--- platform", platform.platform()]
    txt = "\n".join(lines) + "\n"
    with open(os.path.join(run, "manifest", "env.txt"), "x", encoding="utf-8") as f:
        f.write(txt)
    curl_line = next((l for l in txt.splitlines() if l.startswith("curl ")), "UNKNOWN")
    return curl_line


class Recorder:
    """Execută requesturile secvențial, cu pauză, și ține jurnalul."""

    def __init__(self, run, cap, sleep=time.sleep):
        self.run = run
        self.cap = cap
        self.sleep = sleep
        self.n = 0
        self.log = open(os.path.join(run, "manifest", "requests.jsonl"), "x", encoding="utf-8")

    def note(self, entry):
        self.log.write(json.dumps(entry, ensure_ascii=False, sort_keys=True) + "\n")
        self.log.flush()

    def fetch(self, tc, role, rel_prefix, url, ua_key, ua_string, compressed, max_redirs, page_id=None, aux=False):
        """Un request logic: o încercare + o repetare la eroare de rețea (OP-09). Întoarce ultima încercare."""
        self.n += 1
        rid = f"R{self.n:04d}"
        attempts = []
        tries = 1 + int(self.cap["network_retry_count"])
        for a in range(1, tries + 1):
            pre = os.path.join(self.run, f"{rel_prefix}.try{a}")
            args = ["curl", "--silent", "--show-error", "--location",
                    "--max-redirs", str(max_redirs),
                    "--proto", self.cap["allowed_protocols"], "--proto-redir", self.cap["allowed_protocols"],
                    "--connect-timeout", str(self.cap["connect_timeout"]), "--max-time", str(self.cap["max_time"]),
                    "--dump-header", pre + ".headers", "--output", pre + ".body", "--write-out", WRITE_OUT]
            if compressed:
                args.append("--compressed")
            if ua_string:
                args += ["--user-agent", ua_string]
            args.append(url)
            t0 = utc_now()
            with open(pre + ".metrics", "x", encoding="utf-8") as mf, open(pre + ".stderr", "x", encoding="utf-8") as ef:
                rc = subprocess.run(args, stdout=mf, stderr=ef).returncode
            with open(pre + ".metrics", "a", encoding="utf-8") as mf:
                mf.write(f"curl_exit={rc}\n")
            t1 = utc_now()
            files = sorted(os.path.relpath(pre + s, self.run).replace(os.sep, "/")
                           for s in (".headers", ".body", ".metrics", ".stderr") if os.path.exists(pre + s))
            entry = {
                "request_id": rid, "attempt": a, "tc": tc, "role": role, "page_id": page_id, "auxiliary": aux,
                "url": url, "ua_key": ua_key, "ua_string": ua_string or None, "compressed": bool(compressed),
                "max_redirs": max_redirs, "start_utc": t0, "end_utc": t1, "curl_exit": rc, "files": files,
                "body_bytes_saved": os.path.getsize(pre + ".body") if os.path.exists(pre + ".body") else None,
            }
            self.note(entry)
            attempts.append(entry)
            self.sleep(self.cap["delay_seconds"])
            if rc in self.cap["network_error_curl_exits"] and a < tries:
                self.sleep(self.cap["network_retry_pause_seconds"])
                continue
            break
        return attempts[-1]

    def skip(self, tc, role, url, reason, page_id=None):
        self.note({"request_id": None, "tc": tc, "role": role, "page_id": page_id, "url": url,
                   "skipped": True, "reason": reason, "utc": utc_now()})

    def close(self):
        self.log.close()


def _metrics(run, entry):
    out = {}
    m = next((f for f in entry["files"] if f.endswith(".metrics")), None)
    if m:
        with open(os.path.join(run, m), encoding="utf-8", errors="replace") as f:
            for line in f:
                if "=" in line:
                    k, v = line.rstrip("\n").split("=", 1)
                    out[k] = v
    return out


def _declared_sitemaps(body_path, limit):
    """Extrage valorile `Sitemap:` (case-insensitive, comentariile eliminate). Inspecție de captură, nu politică."""
    out = []
    with open(body_path, "rb") as f:
        text = f.read().decode("utf-8", errors="replace")
    for n, raw in enumerate(text.splitlines(), 1):
        line = raw.split("#", 1)[0].strip()
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        if k.strip().lower() == "sitemap" and v.strip():
            out.append({"line": n, "url": v.strip()})
    return out[:limit], len(out)


def _safe(s):
    return "".join(c if c.isalnum() or c in "._-" else "_" for c in s.replace("https://", "").replace("http://", ""))


def capture(frozen_path, out_base, skill_dir, sleep=time.sleep, stamp=None):
    plan, plan_sha = load_frozen(frozen_path)  # oprește înainte de primul request dacă planul nu e valid
    cap = plan["capture_effective"]
    label = plan["measurement_point"]
    run_id = f"AVL203-{slug(plan['entity']['entity_id'])}-{label}-{stamp or utc_stamp()}"
    run = os.path.join(out_base, f"run_{run_id}")
    os.makedirs(out_base, exist_ok=True)
    try:
        os.mkdir(run)
    except FileExistsError:
        raise CaptureError(f"rularea {run_id} există deja; nu se suprascrie")
    for d in RAW_DIRS:
        os.mkdir(os.path.join(run, d))

    ua_path = os.path.join(skill_dir, "config", plan["frozen"]["ua_manifest"]["file"])
    op_path = os.path.join(skill_dir, "config", plan["frozen"]["operational_config"]["file"])
    for p, key in ((ua_path, "ua_manifest"), (op_path, "operational_config")):
        if sha256_file(p) != plan["frozen"][key]["sha256"]:
            raise CaptureError(f"{os.path.basename(p)} diferă de versiunea înregistrată la înghețarea planului")
    shutil.copyfile(frozen_path, os.path.join(run, "manifest", "plan.frozen.json"))
    shutil.copyfile(frozen_path + ".sha256", os.path.join(run, "manifest", "plan.frozen.json.sha256"))
    shutil.copyfile(ua_path, os.path.join(run, "manifest", os.path.basename(ua_path)))
    shutil.copyfile(op_path, os.path.join(run, "manifest", os.path.basename(op_path)))
    uas = uamanifest.load(ua_path, cap["chrome_version"])

    # ---- TC-00: contextul rulării, înaintea primului request (AVL203-REQ-006)
    curl_version = _env(run)
    start = utc_now()
    write_json_new(os.path.join(run, "manifest", "config.json"), {
        "schema": RUN_SCHEMA,
        "run_id": run_id,
        "measurement_point": label,
        "series_id": plan.get("series_id"),
        "methodological_phase": plan.get("methodological_phase"),
        "entity": plan["entity"],
        "origin": plan["origin"],
        "protocol": {"id": "AVL-203", "version": PROTOCOL_VERSION},
        "grid": {"id": "AVL-204", "version": GRID_VERSION},
        "script_version": SCRIPT_VERSION,
        "implementation_status": IMPLEMENTATION_STATUS,
        "plan": {"file": "manifest/plan.frozen.json", "sha256": plan_sha, "plan_id": plan["plan_id"]},
        "ua_manifest": {"file": f"manifest/{os.path.basename(ua_path)}", "sha256": sha256_file(ua_path),
                        "effective": [{k: u[k] for k in ("key", "token", "status", "ua_effective")} for u in uas]},
        "operational_config": {"file": f"manifest/{os.path.basename(op_path)}", "sha256": sha256_file(op_path)},
        "capture": cap,
        "client": {"curl": curl_version, "reference_user_agent": "curl implicit (fără --user-agent)",
                   "tls_verification": "activă; --insecure nu se folosește (AVL203-REQ-010)"},
        "start_utc": start,
        "unknown_fields": ["mediul de rețea/regiunea: nedeclarat (nu se publică date personale)"],
    })

    rec = Recorder(run, cap, sleep=sleep)
    pages = plan["pages"]
    origin = plan["origin"]
    origin_host = urlsplit(origin).netloc
    aux_cfg = plan["auxiliary_requests"]
    aux_hosts = set(aux_cfg["allowed_hosts"]) | {origin_host}
    aux_budget = [aux_cfg["max_requests"]]
    tc01 = {}
    try:
        # ---- TC-01
        for p in pages:
            tc01[p["page_id"]] = rec.fetch("TC-01", "primary", f"http/{p['page_id']}", p["url"], "client", None,
                                           cap["compressed"]["TC-01"], cap["max_redirects"], page_id=p["page_id"])
        # ---- TC-02: numai variantele declarate relevante
        for h in plan["variants"]["hosts"]:
            for s in plan["variants"]["schemes"]:
                rec.fetch("TC-02", "variant", f"http/variant_{s}_{_safe(h)}", f"{s}://{h}/", "client", None,
                          cap["compressed"]["TC-02"], cap["max_redirects"])
        # ---- TC-03
        robots = rec.fetch("TC-03", "robots", f"robots/{_safe(origin)}", origin + "/robots.txt", "client", None,
                           cap["compressed"]["TC-03"], cap["robots_max_redirects"])
        # ---- TC-04: declarate în robots (dacă robots răspunde 2xx), apoi căile convenționale
        rm = _metrics(run, robots)
        body = os.path.join(run, f"robots/{_safe(origin)}.try{robots['attempt']}.body")
        if robots["curl_exit"] == 0 and rm.get("http_code", "").startswith("2") and os.path.exists(body):
            declared, total = _declared_sitemaps(body, cap["max_declared_sitemaps"])
            if total > len(declared):
                rec.skip("TC-04", "sitemap_declared", None,
                         f"{total - len(declared)} declarații Sitemap peste limita de {cap['max_declared_sitemaps']} (incompletitudine declarată)")
            for k, d in enumerate(declared, 1):
                sch, host = urlsplit(d["url"]).scheme, urlsplit(d["url"]).netloc
                if sch not in ("http", "https") or not host:
                    rec.skip("TC-04", "sitemap_declared", d["url"], f"valoare Sitemap neutilizabilă (linia {d['line']})")
                    continue
                if host != origin_host:
                    if "sitemap_declared" not in aux_cfg["types"] or host not in aux_hosts:
                        rec.skip("TC-04", "sitemap_declared", d["url"], f"host {host} în afara limitelor planului (linia {d['line']})")
                        continue
                    if aux_budget[0] <= 0:
                        rec.skip("TC-04", "sitemap_declared", d["url"], "bugetul cererilor auxiliare epuizat")
                        continue
                    aux_budget[0] -= 1
                rec.fetch("TC-04", "sitemap_declared", f"sitemap/declared{k:02d}", d["url"], "client", None,
                          cap["compressed"]["TC-04"], cap["max_redirects"], aux=host != origin_host)
        for k, path in enumerate(cap["conventional_sitemap_paths"], 1):
            rec.fetch("TC-04", "sitemap_conventional", f"sitemap/conventional{k:02d}", origin + path, "client", None,
                      cap["compressed"]["TC-04"], cap["max_redirects"])
        # ---- TC-06: referință înainte, User-Agent-ii din manifest, referință după (OP-11)
        for p in pages:
            pid = p["page_id"]
            refs = cap["reference_captures"]
            rec.fetch("TC-06", "reference", f"agents/{pid}_ref1", p["url"], "client", None,
                      cap["compressed"]["TC-06"], cap["max_redirects"], page_id=pid)
            for u in uas[1:]:
                rec.fetch("TC-06", "agent", f"agents/{pid}_{u['key']}", p["url"], u["key"], u["ua_effective"],
                          cap["compressed"]["TC-06"], cap["max_redirects"], page_id=pid)
            for r in range(2, refs + 1):
                rec.fetch("TC-06", "reference", f"agents/{pid}_ref{r}", p["url"], "client", None,
                          cap["compressed"]["TC-06"], cap["max_redirects"], page_id=pid)
        # ---- cereri auxiliare: ținta canonicalului (R-Z4-02), în limitele planului (OP-08)
        if "canonical" in aux_cfg["types"]:
            for p in pages:
                e = tc01[p["page_id"]]
                m = _metrics(run, e)
                bodyf = next((f for f in e["files"] if f.endswith(".body")), None)
                if e["curl_exit"] != 0 or not bodyf or "html" not in m.get("content_type", "").lower():
                    continue
                with open(os.path.join(run, bodyf), "rb") as f:
                    targets = canonical_targets(f.read(), m.get("url_effective") or p["url"])
                for j, (orig, target) in enumerate(targets, 1):
                    if target == m.get("url_effective"):
                        continue  # canonical identic cu URL-ul final: acoperit de TC-01
                    sch, host = urlsplit(target).scheme, urlsplit(target).netloc
                    if sch not in ("http", "https") or host not in aux_hosts:
                        rec.skip("AUX", "canonical", target, f"țintă în afara limitelor planului (valoare originală: {orig})", page_id=p["page_id"])
                        continue
                    if aux_budget[0] <= 0:
                        rec.skip("AUX", "canonical", target, "bugetul cererilor auxiliare epuizat", page_id=p["page_id"])
                        continue
                    aux_budget[0] -= 1
                    rec.fetch("AUX", "canonical", f"aux/{p['page_id']}_canonical{j:02d}", target, "client", None,
                              cap["compressed"]["AUX"], cap["max_redirects"], page_id=p["page_id"], aux=True)
    finally:
        rec.close()

    # ---- manifestul final, distinct de configurația inițială
    with open(os.path.join(run, "manifest", "requests.jsonl"), encoding="utf-8") as f:
        entries = [json.loads(l) for l in f]
    done = [e for e in entries if not e.get("skipped")]
    write_json_new(os.path.join(run, "manifest", "run-final.json"), {
        "schema": RUN_SCHEMA,
        "run_id": run_id,
        "start_utc": start,
        "end_utc": utc_now(),
        "requests_logical": len({e["request_id"] for e in done}),
        "attempts": len(done),
        "retries": sum(1 for e in done if e["attempt"] > 1),
        "curl_errors": sum(1 for e in done if e["curl_exit"] != 0),
        "skipped": sum(1 for e in entries if e.get("skipped")),
        "links": {
            "config_sha256": sha256_file(os.path.join(run, "manifest", "config.json")),
            "requests_sha256": sha256_file(os.path.join(run, "manifest", "requests.jsonl")),
            "plan_sha256": plan_sha,
        },
    })
    _evidence_index(run, run_id, done)
    integrity.write_checksums(run)
    res = integrity.verify(run)
    integrity.write_report(res, os.path.join(run, "integrity", "verify.capture.json"))
    return run, res


def _evidence_index(run, run_id, done):
    rows, n = [], 0
    kinds = {".headers": "headers", ".body": "body", ".metrics": "metrics", ".stderr": "stderr"}
    for e in done:
        for f in e["files"]:
            n += 1
            ext = os.path.splitext(f)[1]
            rows.append({
                "evidence_id": f"{run_id}-E{n:04d}", "path": f, "kind": kinds.get(ext, ext),
                "size_bytes": os.path.getsize(os.path.join(run, f)), "sha256": sha256_file(os.path.join(run, f)),
                "request_id": e["request_id"], "attempt": e["attempt"], "tc": e["tc"], "role": e["role"],
                "page_id": e["page_id"], "url": e["url"], "ua_key": e["ua_key"], "auxiliary": e["auxiliary"],
                "start_utc": e["start_utc"],
            })
    write_json_new(os.path.join(run, "evidence-index.json"), {"run_id": run_id, "artifacts": rows})
    cols = ["evidence_id", "path", "kind", "size_bytes", "sha256", "request_id", "attempt", "tc", "role",
            "page_id", "url", "ua_key", "auxiliary", "start_utc"]
    with open(os.path.join(run, "evidence-index.tsv"), "x", encoding="utf-8") as f:
        f.write("\t".join(cols) + "\n")
        for r in rows:
            f.write("\t".join("" if r[c] is None else str(r[c]) for c in cols) + "\n")
