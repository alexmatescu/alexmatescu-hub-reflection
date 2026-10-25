"""Extragerea minimă a canonicalului și a <base href>, pentru cererile auxiliare din captură.

Extracția completă a semnalelor TC-05 e în analiză (Faza 3); aici e nevoie doar de ținta
canonicalului, care e o dată neîncrezătoare: se validează schema și hostul înainte de request.
"""
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit


class _Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.base = None
        self.canonicals = []

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        if tag == "base" and self.base is None and a.get("href"):
            self.base = a["href"].strip()
        elif tag == "link" and "canonical" in a.get("rel", "").lower().split() and "href" in a:
            self.canonicals.append(a["href"].strip())


def canonical_targets(body_bytes, document_url):
    """Întoarce [(valoare_originală, URL_rezolvat)] în ordinea din document."""
    p = _Links()
    try:
        p.feed(body_bytes.decode("utf-8", errors="replace"))
        p.close()
    except Exception:
        return []
    base = urljoin(document_url, p.base) if p.base else document_url
    out = []
    for c in p.canonicals:
        resolved = urljoin(base, c)
        out.append((c, resolved))
    return out


def scheme_host(url):
    s = urlsplit(url)
    return s.scheme, s.netloc
