"""Observațiile TC-00…TC-08 dintr-o rulare salvată, offline, fără recaptură.

Integritatea se verifică întâi (TC-07). Rularea INVALID produce doar un raport de invaliditate.
La PARTIAL, observațiile care se sprijină pe artefacte afectate sunt marcate, iar diagnosticul le
va da R-VAL-01. Rezultatul merge într-un director derivat nou (`derived/analysis-<timp>/`);
artefactele brute nu se modifică (AVL203-REQ-023). Observațiile nu conțin interpretări.
"""
import json
import os

from . import SCRIPT_VERSION, IMPLEMENTATION_STATUS
from . import content, integrity, robots, signals
from .httpobs import is_2xx, summarize
from .util import read_json, sha256_file, utc_now, utc_stamp, write_json_new

MATRIX = ["*", "Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]


class Run:
    def __init__(self, path):
        self.path = path
        self.config = read_json(os.path.join(path, "manifest", "config.json"))
        self.plan = read_json(os.path.join(path, "manifest", "plan.frozen.json"))
        self.final = read_json(os.path.join(path, "manifest", "run-final.json"))
        with open(os.path.join(path, "manifest", "requests.jsonl"), encoding="utf-8") as f:
            self.log = [json.loads(l) for l in f]
        idx = read_json(os.path.join(path, "evidence-index.json"))
        self.eid = {a["path"]: a["evidence_id"] for a in idx["artifacts"]}
        op = self.config["operational_config"]["file"]
        self.operational = read_json(os.path.join(path, op))
        self.integrity = None

    def done(self):
        return [e for e in self.log if not e.get("skipped")]

    def last_attempts(self, **flt):
        by = {}
        for e in self.done():
            if all(e.get(k) == v for k, v in flt.items()):
                by[e["request_id"]] = e  # ultima încercare câștigă
        return list(by.values())

    def attempts(self, request_id):
        return [e for e in self.done() if e["request_id"] == request_id]

    def body(self, entry):
        f = next((x for x in entry["files"] if x.endswith(".body")), None)
        if not f:
            return None
        with open(os.path.join(self.path, f), "rb") as fh:
            return fh.read()

    def summary(self, entry):
        s = summarize(self.path, entry)
        s["evidence_ids"] = [self.eid.get(f) for f in entry["files"]]
        bad = {f: self.integrity["artifacts"].get(f) for f in entry["files"] if self.integrity["artifacts"].get(f) != "OK"}
        s["integrity"] = "OK" if not bad else {"AFFECTED": bad}
        if entry["attempt"] > 1:
            s["previous_attempts"] = [summarize(self.path, a) for a in self.attempts(entry["request_id"]) if a["attempt"] < entry["attempt"]]
        return s


def _relevant_headers(summary, names):
    if summary.get("final_headers") is None:
        return None
    return {n: sorted(v for k, v in summary["final_headers"] if k == n) for n in names}


def _sniff(raw):
    if raw is None:
        return None
    head = raw[:512].lstrip(b"\xef\xbb\xbf \t\r\n").lower()
    if raw[:2] == b"\x1f\x8b":
        return "GZIP"
    if head.startswith(b"<?xml") or head.startswith(b"<urlset") or head.startswith(b"<sitemapindex"):
        return "XML"
    if head.startswith(b"<!doctype html") or head.startswith(b"<html"):
        return "HTML"
    return "ALTUL"


def tc04(run, robots_sum, parsed):
    """Statusul TC-04 după tabelul din AVL-203 §7 (v0.5.0)."""
    declared_lines = parsed["sitemaps"] if parsed else []
    decl = run.last_attempts(tc="TC-04", role="sitemap_declared")
    conv = run.last_attempts(tc="TC-04", role="sitemap_conventional")
    skipped = [e for e in run.log if e.get("skipped") and e["tc"] == "TC-04"]
    items = []
    for kind, entries in (("declared", decl), ("conventional", conv)):
        for e in entries:
            s = run.summary(e)
            items.append({"type": kind, "url": e["url"], "transport_ok": s["transport_ok"], "curl_exit": s["curl_exit"],
                          "initial_status": s["initial_status"], "final_status": s["final_status"], "url_final": s["url_final"],
                          "content_type": s["content_type"], "document_type_observed": _sniff(run.body(e)),
                          "size_download": s["size_download"], "body_bytes_saved": s["body_bytes_saved"],
                          "evidence_ids": s["evidence_ids"], "integrity": s["integrity"]})
    for e in skipped:
        items.append({"type": "declared_not_captured", "url": e["url"], "reason": e["reason"]})

    def ok(i):
        return i.get("transport_ok") and is_2xx(i.get("final_status"))

    rs = robots_sum
    status, reason = None, None
    if rs is None or not rs["transport_ok"] or rs["final_status"] is None or not (is_2xx(rs["final_status"]) or 400 <= rs["final_status"] < 500):
        status, reason = "UNKNOWN", "robots.txt nu a putut fi capturat (eroare de transport, 5xx sau status final neidentificat)"
    elif (rs["num_redirects"] or 0) > robots.RFC_REDIRECT_THRESHOLD:
        status, reason = "UNKNOWN", "robots.txt după mai mult de cinci redirecturi: declarațiile nu pot fi stabilite"
    elif is_2xx(rs["final_status"]) and declared_lines:
        d = [i for i in items if i["type"] == "declared"]
        if any(ok(i) for i in d):
            status = "DECLARED"
        elif any(i["type"] == "declared_not_captured" for i in items):
            status, reason = "UNKNOWN", "declarații Sitemap necapturate (în afara limitelor planului) și niciuna capturată cu 2xx"
        else:
            status = "UNAVAILABLE"
    else:
        c = [i for i in items if i["type"] == "conventional"]
        if any(ok(i) and i.get("document_type_observed") in ("XML", "GZIP") for i in c):
            status = "FOUND_AT_CONVENTIONAL_PATH"
        elif c and all(i["transport_ok"] and i["final_status"] in (404, 410) for i in c):
            status = "NOT_FOUND"
        elif c and all((not i["transport_ok"]) or (i["final_status"] is not None and 500 <= i["final_status"] < 600) for i in c):
            status = "UNAVAILABLE"
        else:
            codes = ", ".join((f"{i['final_status']} {i.get('document_type_observed') or ''}".strip() if i["transport_ok"] else f"curl {i['curl_exit']}") for i in c)
            status, reason = "UNKNOWN", f"combinație trecută la UNKNOWN de tabelul AVL-203 §7 (căi convenționale: {codes})"
    notes = []
    if rs is not None and rs["final_status"] is not None and 400 <= rs["final_status"] < 500:
        notes.append(f"robots.txt răspunde {rs['final_status']}: tratat ca fișier capturat fără declarații Sitemap (interpretare declarată)")
    if status == "DECLARED":
        failed = [i["url"] for i in items if i["type"] == "declared" and not ok(i)]
        if failed:
            notes.append(f"sitemap-uri declarate fără 2xx, păstrate separat: {', '.join(failed)}")
    html_like = [i["url"] for i in items if ok(i) and i.get("document_type_observed") == "HTML"]
    if html_like:
        notes.append(f"răspuns 2xx cu document HTML, nu XML: {', '.join(html_like)} (statusul descrie declarația și răspunsul, nu validitatea)")
    return {"status": status, "reason": reason, "declared_in_robots": declared_lines,
            "sitemaps": items, "notes": notes}


def tc06(run, page, names):
    pid = page["page_id"]
    entries = run.last_attempts(tc="TC-06", page_id=pid)
    refs = [run.summary(e) for e in entries if e["role"] == "reference"]
    agents = [(e["ua_key"], run.summary(e)) for e in entries if e["role"] == "agent"]
    var = {"captures": len(refs)}
    ok_refs = [r for r in refs if r["transport_ok"]]
    if len(ok_refs) < 2:
        var.update(status_url_headers="UNKNOWN", content="UNKNOWN", reason="mai puțin de două capturi de referință reușite (AVL203-REQ-019)")
    else:
        a, b = ok_refs[0], ok_refs[1]
        suh = (a["final_status"], a["url_final"], _relevant_headers(a, names)) == (b["final_status"], b["url_final"], _relevant_headers(b, names))
        var["status_url_headers"] = "STABIL" if suh else "VARIABIL"
        var["content"] = "STABIL" if (a["body_bytes_saved"], a["body_sha256"]) == (b["body_bytes_saved"], b["body_sha256"]) else "VARIABIL"
        var["differences"] = {k: [a[k], b[k]] for k in ("final_status", "url_final", "body_bytes_saved", "body_sha256") if a[k] != b[k]}
        ha, hb = _relevant_headers(a, names), _relevant_headers(b, names)
        hd = {n: [ha[n], hb[n]] for n in names if ha[n] != hb[n]}
        if hd:
            var["differences"]["headers"] = hd
    ref = ok_refs[0] if ok_refs else None
    comps = []
    for key, s in agents:
        c = {"ua_key": key, "transport_ok": s["transport_ok"], "curl_exit": s["curl_exit"], "final_status": s["final_status"],
             "url_final": s["url_final"], "evidence_ids": s["evidence_ids"], "integrity": s["integrity"]}
        if ref is None or not s["transport_ok"]:
            c["comparison"] = "UNKNOWN"
            c["reason"] = "lipsește referința reușită" if ref is None else f"captura pentru User-Agent a eșuat (curl exit {s['curl_exit']})"
        else:
            diff = {}
            if s["final_status"] != ref["final_status"]:
                diff["final_status"] = [ref["final_status"], s["final_status"]]
            if s["url_final"] != ref["url_final"]:
                diff["url_final"] = [ref["url_final"], s["url_final"]]
            hr, hs = _relevant_headers(ref, names), _relevant_headers(s, names)
            hd = {n: [hr[n], hs[n]] for n in names if hr[n] != hs[n]}
            if hd:
                diff["headers"] = hd
            c["status_url_headers"] = ("NEATRIBUIBIL (referința variază)" if var["status_url_headers"] == "VARIABIL" else
                                       ("DIFERIT" if diff else "IDENTIC"))
            c["differences"] = diff
            same_content = (s["body_bytes_saved"], s["body_sha256"]) == (ref["body_bytes_saved"], ref["body_sha256"])
            if var["content"] == "UNKNOWN":
                c["content"] = "UNKNOWN"
            elif var["content"] == "VARIABIL":
                c["content"] = "IDENTIC" if same_content else "NEATRIBUIBIL (variabilitate intrinsecă)"
            else:
                c["content"] = "IDENTIC" if same_content else "DIFERIT"
        comps.append(c)
    return {"page_id": pid, "url": page["url"], "reference": "client implicit (curl fără --user-agent)",
            "headers_compared": names, "reference_variability": var,
            "references": [{k: r[k] for k in ("request_id", "final_status", "url_final", "body_bytes_saved", "body_sha256", "evidence_ids", "integrity")} for r in refs],
            "agents": comps,
            "note": "User-Agent declarat, nu crawler autentificat; o diferență arată doar un răspuns diferit al serverului, nu cloaking (AVL203-REQ-021)."}


def analyze(run_path, robots_manual=None, stamp=None):
    res = integrity.verify(run_path)
    out = os.path.join(run_path, "derived", f"analysis-{stamp or utc_stamp()}")
    os.makedirs(out)
    if res["status"] == "INVALID":
        write_json_new(os.path.join(out, "invalidity.json"), {
            "run": os.path.basename(os.path.normpath(run_path)), "analysis_utc": utc_now(), "integrity": res,
            "consequence": "nu se produc observații și nici diagnostic (AVL204-REQ-001; registru, punctul A)"})
        return out, res, None
    run = Run(run_path)
    run.integrity = res
    plan = run.plan
    names = run.operational["analysis"]["OP-04"]
    obs = {"run_id": run.config["run_id"], "script_version": SCRIPT_VERSION, "implementation_status": IMPLEMENTATION_STATUS,
           "analysis_utc": utc_now(), "source_checksums_sha256": sha256_file(os.path.join(run_path, integrity.CHECKSUMS)),
           "operational_config": run.config["operational_config"], "integrity": {"status": res["status"], "counts": res["counts"],
           "not_ok": {k: v for k, v in sorted(res["artifacts"].items()) if v != "OK"}}}
    obs["TC-00"] = {k: run.config[k] for k in ("run_id", "measurement_point", "series_id", "entity", "origin", "protocol",
                                               "grid", "script_version", "client", "start_utc")}
    obs["TC-00"]["end_utc"] = run.final["end_utc"]
    obs["TC-00"]["counts"] = {k: run.final[k] for k in ("requests_logical", "attempts", "retries", "curl_errors", "skipped")}

    tc01 = {}
    for e in run.last_attempts(tc="TC-01"):
        tc01[e["page_id"]] = (e, run.summary(e))
    obs["TC-01"] = [{"obs_id": f"OBS-TC01-{p['page_id']}", "page_id": p["page_id"], "category": p["category"], **tc01[p["page_id"]][1]}
                    for p in plan["pages"]]

    variants = [run.summary(e) for e in run.last_attempts(tc="TC-02")]
    finals = {v["url_final"] for v in variants if v["transport_ok"] and v["final_status"] is not None}
    incomplete = [v["url_requested"] for v in variants if not v["transport_ok"] or v["final_status"] is None]
    conv = "INCOMPLET" if incomplete else ("CONVERGENT" if len(finals) == 1 else "DIVERGENT")
    obs["TC-02"] = {"obs_id": "OBS-TC02", "declared_hosts": plan["variants"]["hosts"], "declared_schemes": plan["variants"]["schemes"],
                    "convergence": conv, "final_urls": sorted(finals), "incomplete": incomplete,
                    "variants": [{**v, "http_direct_2xx": v["url_requested"].startswith("http://") and v["num_redirects"] == 0
                                  and is_2xx(v["final_status"])} for v in variants]}

    re_ = run.last_attempts(tc="TC-03")
    rsum = run.summary(re_[0]) if re_ else None
    body = run.body(re_[0]) if re_ else None
    text = body.decode("utf-8", errors="replace") if body is not None else None
    # matricea Core plus crawlerele declarate în planul de acces (AVL-203 §6; AVL204-REQ-018)
    kinds = {r["crawler"]: r["kind"] for r in plan["access_policy"]}
    tokens = MATRIX + [c for c in kinds if c not in MATRIX]
    pairs = [(p["page_id"], p["url"], t) for p in plan["pages"] for t in tokens]
    state, why, parsed, decisions = robots.evaluate(rsum, text, pairs)
    manual_errors = []
    if robots_manual:
        manual, manual_errors = robots.load_manual(robots_manual, text or "")
        if not manual_errors:
            byk = {(m["page_id"], m["token"]): m for m in manual}
            decisions = [byk.get((d["page_id"], d["token"]), d) for d in decisions]
    for d in decisions:
        d["kind"] = "core" if d["token"] in MATRIX else kinds.get(d["token"])
    obs["TC-03"] = {"obs_id": "OBS-TC03", "capture": rsum, "file_state": state, "file_state_reason": why,
                    "size_signal": (rsum["body_bytes_saved"] or 0) > run.operational["analysis"]["OP-07"]["robots_size_signal_bytes"] if rsum else None,
                    "parsed": parsed, "decisions": decisions, "manual_errors": manual_errors,
                    "mode": "RFC 9309 (comportamentul furnizorilor nu e verificat)"}

    obs["TC-04"] = {"obs_id": "OBS-TC04", **tc04(run, rsum, parsed)}

    aux = run.last_attempts(tc="AUX", role="canonical")
    aux_skipped = [e for e in run.log if e.get("skipped") and e["tc"] == "AUX"]
    obs["TC-05"], obs["TC-08"] = [], []
    for p in plan["pages"]:
        e, s = tc01[p["page_id"]]
        raw = run.body(e)
        sig = signals.extract(s, raw)
        if sig["status"] == "EXTRACTED":
            for c in sig["canonical"] + (sig["canonical_http_header"] if isinstance(sig["canonical_http_header"], list) else []):
                tgt = c.get("resolved")
                a = next((x for x in aux if x["page_id"] == p["page_id"] and x["url"] == tgt), None)
                k = next((x for x in aux_skipped if x["page_id"] == p["page_id"] and x["url"] == tgt), None)
                if tgt == s["url_final"]:
                    c["target"] = {"kind": "SELF", "note": "identic cu URL-ul final; acoperit de TC-01"}
                elif a is not None:
                    t = run.summary(a)
                    c["target"] = {"kind": "CAPTURED_AUX", "initial_status": t["initial_status"], "final_status": t["final_status"],
                                   "url_final": t["url_final"], "transport_ok": t["transport_ok"], "curl_exit": t["curl_exit"],
                                   "evidence_ids": t["evidence_ids"], "integrity": t["integrity"]}
                elif k is not None:
                    c["target"] = {"kind": "NOT_CAPTURED", "reason": k["reason"]}
                else:
                    c["target"] = {"kind": "NOT_CAPTURED", "reason": "cererea auxiliară nu a fost făcută (tipul nu e permis în plan sau canonical din header)"}
        obs["TC-05"].append({"obs_id": f"OBS-TC05-{p['page_id']}", "page_id": p["page_id"], "url": p["url"],
                             "evidence_ids": s["evidence_ids"], "integrity": s["integrity"], **sig})
        obs["TC-08"].append({"obs_id": f"OBS-TC08-{p['page_id']}", "page_id": p["page_id"], "url": p["url"],
                             "evidence_ids": s["evidence_ids"], "integrity": s["integrity"],
                             **content.analyze(s, raw, p["key_texts"])})

    obs["TC-06"] = [{"obs_id": f"OBS-TC06-{p['page_id']}", **tc06(run, p, names)} for p in plan["pages"]]
    obs["TC-07"] = {"obs_id": "OBS-TC07", "tool": res["tool"], "status": res["status"], "counts": res["counts"],
                    "note": "Un hash verifică octeții după captură, nu autenticitatea răspunsului serverului (AVL-203 §10)."}
    write_json_new(os.path.join(out, "observations.json"), obs)
    return out, res, obs
