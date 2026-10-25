"""Funcții comune: hash, timp UTC, JSON canonic, scriere fără suprascriere."""
import datetime
import hashlib
import json
import os


def utc_now():
    return datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def utc_stamp():
    return datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for b in iter(lambda: f.read(65536), b""):
            h.update(b)
    return h.hexdigest()


def sha256_bytes(data):
    return hashlib.sha256(data).hexdigest()


def canonical_json(obj):
    """Octeții canonici ai unui obiect JSON: chei sortate, UTF-8, fără spații variabile."""
    return json.dumps(obj, ensure_ascii=False, sort_keys=True, separators=(",", ":")).encode("utf-8")


def read_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def write_json_new(path, obj):
    """Scrie JSON lizibil; refuză suprascrierea (artefactele nu se rescriu, AVL203-REQ-023)."""
    with open(path, "x", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")


def write_text_new(path, text):
    with open(path, "x", encoding="utf-8") as f:
        f.write(text)


def slug(s):
    out = "".join(c if c.isalnum() else "-" for c in s.lower())
    while "--" in out:
        out = out.replace("--", "-")
    return out.strip("-")


def ensure_dir(path):
    os.makedirs(path, exist_ok=True)
    return path
