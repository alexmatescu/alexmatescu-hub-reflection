"""Manifestul User-Agent versionat (AVL-203 §9, AVL203-REQ-018). Fișierul nu se modifică la rulare."""


def load(path, chrome_version):
    rows = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.rstrip("\n")
            if not line or line.startswith("#"):
                continue
            parts = line.split("\t")
            while len(parts) < 5:
                parts.append("")
            key, token, status, source, ua = parts[:5]
            rows.append({
                "key": key,
                "token": token,
                "status": status,
                "source": source,
                "ua_template": ua,
                "ua_effective": ua.replace("{CHROME_VERSION}", chrome_version),
            })
    if not rows or rows[0]["key"] != "client":
        raise ValueError("manifestul UA trebuie să înceapă cu rândul „client” (clientul de referință)")
    return rows
