"""Aplicarea RFC 9309 (Robots Exclusion Protocol) pentru perechi URL–crawler (AVL203-REQ-041).

Implementat după textul RFC 9309, verificat la 25 octombrie 2026:
  §2.2.1  potrivirea tokenului e case-insensitive; grupurile cu același token se combină;
          fără grup potrivit se aplică grupul „*”;
  §2.2.2  potrivirea cea mai specifică = cea cu cei mai mulți octeți; la egalitate între allow și
          disallow se folosește allow; regulile din afara oricărui grup se ignoră; /robots.txt e
          permis implicit; octeții non-ASCII și cei rezervați se compară percent-encoded;
  §2.2.3  „*” = orice secvență, „$” = sfârșitul căii;
  §2.2.4  alte înregistrări (Sitemap, Crawl-delay…) nu interferează cu regulile;
  §2.3.1  statusul fișierului: 2xx → reguli; 4xx → orice resursă permisă; 5xx / eroare de rețea
          → interdicție completă; peste 5 redirecturi → POATE fi considerat indisponibil;
  §2.3.1.5 fiecare linie se încearcă; se folosesc regulile parsabile.

Fiecare decizie păstrează pașii aplicării (grupuri, reguli combinate, regula câștigătoare, linia
din robots.body), în aceeași formă ca aplicarea manuală documentată. `grep` nu decide nimic.
Comportamentul furnizorilor (de exemplu `429` la Google) nu e modelat: modul este RFC 9309.
"""
import difflib
import json
import re
from urllib.parse import urlsplit

KNOWN_EXTENSIONS = {"sitemap", "crawl-delay", "host", "clean-param", "request-rate", "visit-time", "noindex"}
KNOWN_KEYS = ["user-agent", "allow", "disallow", "sitemap"]
UNRESERVED = set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~")
RFC_REDIRECT_THRESHOLD = 5


def parse(text):
    """Grupuri, reguli, înregistrări și liniile care nu pot fi interpretate (cu numărul liniei)."""
    groups, cur, in_ua = [], None, False
    out = {"groups": groups, "sitemaps": [], "other_records": [], "unparseable": [], "rules_outside_group": []}
    for n, raw in enumerate(text.splitlines(), 1):
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        if ":" not in line:
            out["unparseable"].append({"line": n, "text": raw.strip(), "reason": "fără „:”", "looks_like": None})
            continue
        k, v = line.split(":", 1)
        key, val = k.strip().lower(), v.strip()
        if key == "user-agent":
            if not in_ua:
                cur = {"start_line": n, "user_agents": [], "rules": []}
                groups.append(cur)
            cur["user_agents"].append({"line": n, "value": val})
            in_ua = True
            continue
        in_ua = False
        if key in ("allow", "disallow"):
            rule = {"line": n, "directive": key, "path": val}
            if cur is None:
                out["rules_outside_group"].append(rule)
            elif val:
                cur["rules"].append(rule)
            else:
                cur["rules"].append({**rule, "empty": True})
        elif key == "sitemap":
            out["sitemaps"].append({"line": n, "url": val})
        elif key in KNOWN_EXTENSIONS:
            out["other_records"].append({"line": n, "key": key, "value": val})
        else:
            # AVL-204 R-Z2-03 (0.2.0): se semnalează doar cheile care seamănă cu o directivă cunoscută
            near = difflib.get_close_matches(key, KNOWN_KEYS, n=1, cutoff=0.75)
            out["unparseable"].append({"line": n, "text": raw.strip(), "reason": f"cheie necunoscută „{k.strip()}”",
                                       "looks_like": near[0] if near else None})
    return out


def _pct(s):
    """Normalizare RFC 9309 §2.2.2: non-ASCII → percent-encoded; %XX al unui caracter nerezervat → decodat."""
    out, i, b = [], 0, s.encode("utf-8")
    while i < len(b):
        c = b[i]
        if c == 0x25 and i + 2 < len(b) and re.match(rb"[0-9A-Fa-f]{2}", b[i + 1:i + 3]):
            v = int(b[i + 1:i + 3], 16)
            ch = chr(v)
            out.append(ch if ch in UNRESERVED else "%" + b[i + 1:i + 3].decode().upper())
            i += 3
            continue
        if c >= 0x80 or c < 0x21:
            out.append("%%%02X" % c)
        else:
            out.append(chr(c))
        i += 1
    return "".join(out)


def _match(pattern, path):
    """Potrivire de la începutul căii, cu „*” și „$” (RFC 9309 §2.2.3)."""
    anchored = pattern.endswith("$")
    pat = pattern[:-1] if anchored else pattern
    rx = "".join(".*" if ch == "*" else re.escape(ch) for ch in pat)
    return re.match(rx + ("$" if anchored else ""), path, re.S) is not None


def url_path(url):
    p = urlsplit(url)
    return (p.path or "/") + (("?" + p.query) if p.query else "")


def decide(parsed, token, url):
    """Decizia RFC 9309 pentru o pereche crawler–URL, cu pașii aplicării."""
    tok = token.lower()
    steps = {"token": token, "url": url}
    if tok == "*":
        matched = [g for g in parsed["groups"] if any(u["value"] == "*" for u in g["user_agents"])]
        steps["group_selection"] = "grupul „*” (rândul de matrice „*” = crawler fără grup propriu)"
    else:
        matched = [g for g in parsed["groups"] if any(u["value"].lower() == tok for u in g["user_agents"])]
        if matched:
            steps["group_selection"] = f"grupuri specifice pentru „{token}” (potrivire case-insensitive)"
        else:
            matched = [g for g in parsed["groups"] if any(u["value"] == "*" for u in g["user_agents"])]
            steps["group_selection"] = f"niciun grup pentru „{token}”; se aplică grupul „*”" if matched else \
                f"niciun grup pentru „{token}” și niciun grup „*”"
        near = sorted({u["value"] for g in parsed["groups"] for u in g["user_agents"]
                       if u["value"].lower() != tok and u["value"].lower().startswith(tok)})
        if near:
            steps["near_matches_not_used"] = near
    steps["groups_used_lines"] = [g["start_line"] for g in matched]
    rules = [r for g in matched for r in g["rules"] if not r.get("empty")]
    steps["combined_rules"] = [{"line": r["line"], "directive": r["directive"], "path": r["path"]} for r in rules]
    path = url_path(url)
    npath = _pct(path)
    steps["path_compared"] = npath
    if path == "/robots.txt":
        steps["winner"] = None
        steps["reason"] = "/robots.txt e permis implicit (RFC 9309 §2.2.2)"
        return "ALLOW", steps
    hits = []
    for r in rules:
        pat = _pct(r["path"])
        if _match(pat, npath):
            hits.append({"line": r["line"], "directive": r["directive"], "path": r["path"], "octets": len(pat.encode())})
    steps["matching_rules"] = hits
    if not hits:
        steps["winner"] = None
        steps["reason"] = "nicio regulă nu se potrivește → permis (RFC 9309 §2.2.2)"
        return "ALLOW", steps
    best = max(h["octets"] for h in hits)
    top = [h for h in hits if h["octets"] == best]
    win = next((h for h in top if h["directive"] == "allow"), top[0])
    steps["winner"] = win
    steps["reason"] = ("potrivirea cea mai specifică" + (" (egalitate allow/disallow → allow)" if len({h["directive"] for h in top}) > 1 else ""))
    return ("ALLOW" if win["directive"] == "allow" else "DISALLOW"), steps


def file_state(summary, redirect_threshold=RFC_REDIRECT_THRESHOLD):
    """Starea fișierului robots.txt după RFC 9309 §2.3.1; întoarce (stare, motiv)."""
    if summary is None or not summary["transport_ok"]:
        exit_ = summary["curl_exit"] if summary else None
        if exit_ == 47:
            return "UNDETERMINED", "lanț de redirecturi peste limita capturii"
        return "UNREACHABLE", f"eroare de transport (curl exit {exit_}) → RFC 9309 §2.3.1.4: interdicție completă"
    if summary["num_redirects"] is not None and summary["num_redirects"] > redirect_threshold:
        return "REDIRECT_LIMIT", f"{summary['num_redirects']} redirecturi (> {redirect_threshold}); RFC 9309 §2.3.1.2 permite tratarea fișierului ca indisponibil"
    s = summary["final_status"]
    if s is None:
        return "UNDETERMINED", "statusul final nu a putut fi identificat"
    if 200 <= s < 300:
        return "AVAILABLE", "2xx → se aplică regulile parsabile (RFC 9309 §2.3.1.1)"
    if s == 429:
        return "TOO_MANY_REQUESTS", "429: un 4xx în sensul RFC 9309, dar Google îl exclude din regula pentru 4xx (AVL-204 R-Z2-08)"
    if 400 <= s < 500:
        return "UNAVAILABLE_4XX", f"{s} → RFC 9309 §2.3.1.3: crawlerul poate accesa orice resursă"
    if 500 <= s < 600:
        return "UNREACHABLE", f"{s} → RFC 9309 §2.3.1.4: interdicție completă"
    return "UNDETERMINED", f"status final {s} neacoperit de RFC 9309 §2.3.1"


def evaluate(summary, body_text, pairs):
    """Politica pentru fiecare (page_id, url, token). Metoda: PARSER. Întoarce (stare_fișier, motiv, parsed, decizii)."""
    state, why = file_state(summary)
    parsed = parse(body_text) if state == "AVAILABLE" and body_text is not None else None
    decisions = []
    for pid, url, token in pairs:
        d = {"page_id": pid, "url": url, "token": token, "method": "PARSER", "file_state": state}
        if state == "AVAILABLE":
            d["policy"], d["steps"] = decide(parsed, token, url)
        elif state == "UNAVAILABLE_4XX":
            d["policy"], d["steps"] = "ALLOW", {"reason": why}
        elif state == "UNREACHABLE":
            d["policy"], d["steps"] = "DISALLOW", {"reason": why}
        else:
            d["policy"], d["steps"], d["method"] = "NEDETERMINAT", {"reason": why}, None
        decisions.append(d)
    return state, why, parsed, decisions


def load_manual(path, body_text):
    """Aplicarea manuală documentată (AVL203-REQ-041): fiecare decizie trebuie să citeze liniile din robots.body."""
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    lines = body_text.splitlines()
    errors, out = [], []
    for i, d in enumerate(data.get("decisions", []), 1):
        tag = f"decizia {i}"
        for f_ in ("page_id", "url", "token", "policy", "steps", "operator", "date"):
            if f_ not in d:
                errors.append(f"{tag}: lipsește {f_}")
        if d.get("policy") not in ("ALLOW", "DISALLOW"):
            errors.append(f"{tag}: policy trebuie să fie ALLOW sau DISALLOW")
        for c in (d.get("steps") or {}).get("cited_lines", []):
            n, txt = c.get("line"), c.get("text")
            if not isinstance(n, int) or n < 1 or n > len(lines) or lines[n - 1].strip() != (txt or "").strip():
                errors.append(f"{tag}: linia citată {n} nu corespunde cu robots.body")
        if not (d.get("steps") or {}).get("cited_lines") and (d.get("steps") or {}).get("winner") is not None:
            errors.append(f"{tag}: regula câștigătoare trebuie citată din robots.body")
        out.append({**d, "method": "MANUAL"})
    return out, errors
