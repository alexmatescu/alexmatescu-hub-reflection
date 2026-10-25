"""Citirea unei capturi: metrici, lanțul de headere, blocul răspunsului final (AVL203-REQ-008, REQ-009).

Cu `--location`, fișierul de headere conține toate răspunsurile din lanț. Blocurile `1xx`
(de exemplu `100 Continue`, `103 Early Hints`) și răspunsul unui proxy la `CONNECT` nu sunt
răspunsuri ale resursei: se păstrează în listă, dar nu sunt „răspunsul final” și nici redirecturi.
"""
import os
import re

from .util import sha256_file

STATUS_RE = re.compile(r"^HTTP/(\S+)\s+(\d{3})(?:\s+(.*))?$")


def read_metrics(path):
    out = {}
    if not os.path.exists(path):
        return out
    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            if "=" in line:
                k, v = line.rstrip("\n").split("=", 1)
                out[k] = v
    return out


def header_blocks(path):
    if not os.path.exists(path):
        return None
    with open(path, "rb") as f:
        raw = f.read().decode("iso-8859-1")
    blocks, cur = [], None
    for line in raw.replace("\r", "").split("\n"):
        m = STATUS_RE.match(line)
        if m:
            cur = {"status_line": line.strip(), "http_version": m.group(1), "status": int(m.group(2)), "headers": []}
            blocks.append(cur)
        elif cur is not None and ":" in line and not line.startswith((" ", "\t")):
            k, v = line.split(":", 1)
            cur["headers"].append([k.strip().lower(), v.strip()])
        elif cur is not None and line.startswith((" ", "\t")) and cur["headers"]:
            cur["headers"][-1][1] += " " + line.strip()  # continuare (obs-fold)
    return blocks


def response_blocks(blocks):
    """Blocurile care sunt răspunsuri ale resursei (fără 1xx și fără răspunsul proxy-ului la CONNECT)."""
    out = []
    for i, b in enumerate(blocks or []):
        if 100 <= b["status"] < 200:
            continue
        nxt = blocks[i + 1] if i + 1 < len(blocks) else None
        if nxt is not None and b["status_line"].lower().endswith("connection established"):
            continue
        out.append(b)
    return out


def hvals(block, name):
    return [v for k, v in (block or {}).get("headers", []) if k == name]


def summarize(run, entry):
    """Rezumatul unei încercări din jurnal: observațiile TC-01 permise, cu trimitere la fișiere."""
    files = {os.path.splitext(f)[1][1:]: f for f in entry["files"]}
    m = read_metrics(os.path.join(run, files["metrics"])) if "metrics" in files else {}
    blocks = header_blocks(os.path.join(run, files["headers"])) if "headers" in files else None
    resp = response_blocks(blocks)
    final = resp[-1] if resp else None
    body = os.path.join(run, files["body"]) if "body" in files else None
    stderr = ""
    if "stderr" in files:
        with open(os.path.join(run, files["stderr"]), encoding="utf-8", errors="replace") as f:
            stderr = f.read().strip()
    curl_exit = entry["curl_exit"]
    http_code = int(m["http_code"]) if m.get("http_code", "").isdigit() else None
    return {
        "request_id": entry["request_id"],
        "attempt": entry["attempt"],
        "url_requested": entry["url"],
        "ua_key": entry["ua_key"],
        "curl_exit": curl_exit,
        "error": stderr or None,
        "transport_ok": curl_exit == 0,
        "http_code": http_code if http_code else None,
        "initial_status": resp[0]["status"] if resp else None,
        "final_status": final["status"] if final else None,
        "final_status_line": final["status_line"] if final else None,
        "url_final": m.get("url_effective") or None,
        "num_redirects": int(m["num_redirects"]) if m.get("num_redirects", "").isdigit() else None,
        "redirect_chain": [{"status": b["status"], "location": (hvals(b, "location") or [None])[0]} for b in resp],
        "content_type": m.get("content_type") or None,
        "size_download": int(m["size_download"]) if m.get("size_download", "").isdigit() else None,
        "body_bytes_saved": os.path.getsize(body) if body and os.path.exists(body) else None,
        "body_sha256": sha256_file(body) if body and os.path.exists(body) else None,
        "final_headers": final["headers"] if final else None,
        "files": entry["files"],
    }


def is_2xx(s):
    return s is not None and 200 <= s < 300
