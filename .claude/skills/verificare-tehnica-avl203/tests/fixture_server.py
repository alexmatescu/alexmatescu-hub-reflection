"""Server HTTP local, determinist, pentru teste (numai 127.0.0.1; permisiune separată de țintele publice).

Rutele sunt un dict: cale → funcție(handler) care întoarce (status, headere, corp_bytes).
Fiecare request se înregistrează (cale, User-Agent, Accept-Encoding) pentru aserțiuni.
"""
import gzip
import socket
import ssl
import subprocess
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


def html(body, status=200, headers=None):
    h = {"Content-Type": "text/html; charset=utf-8"}
    h.update(headers or {})
    return lambda req: (status, h, body.encode("utf-8"))


def text(body, status=200, ctype="text/plain; charset=utf-8", headers=None):
    h = {"Content-Type": ctype}
    h.update(headers or {})
    return lambda req: (status, h, body.encode("utf-8"))


def redirect(location, status=301):
    return lambda req: (status, {"Location": location, "Content-Length": "0"}, b"")


def by_ua(default, **token_routes):
    """Răspuns diferit după un token din User-Agent (ex. PerplexityBot=…)."""
    def f(req):
        ua = req.headers.get("User-Agent", "")
        for tok, route in token_routes.items():
            if tok.lower() in ua.lower():
                return route(req)
        return default(req)
    return f


def gzipped(body):
    def f(req):
        raw = body.encode("utf-8")
        if "gzip" in req.headers.get("Accept-Encoding", ""):
            return 200, {"Content-Type": "text/html; charset=utf-8", "Content-Encoding": "gzip"}, gzip.compress(raw, mtime=0)
        return 200, {"Content-Type": "text/html; charset=utf-8"}, raw
    return f


def slow(seconds, route):
    def f(req):
        time.sleep(seconds)
        return route(req)
    return f


class FixtureServer:
    def __init__(self, routes, tls_dir=None):
        self.routes = routes
        self.log = []
        outer = self

        class H(BaseHTTPRequestHandler):
            def do_GET(self):
                outer.log.append({"path": self.path, "ua": self.headers.get("User-Agent", ""),
                                  "accept_encoding": self.headers.get("Accept-Encoding", "")})
                route = outer.routes.get(self.path)
                if route is None:
                    status, headers, body = 404, {"Content-Type": "text/plain"}, b"not found"
                else:
                    status, headers, body = route(self)
                self.send_response(status)
                for k, v in headers.items():
                    self.send_header(k, v)
                if "Content-Length" not in headers:
                    self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

            def log_message(self, *a):
                pass

        self.httpd = ThreadingHTTPServer(("127.0.0.1", 0), H)
        scheme = "http"
        if tls_dir:
            # certificat autosemnat: clientul cu verificare TLS activă trebuie să eșueze (AVL203-REQ-010)
            key, crt = f"{tls_dir}/k.pem", f"{tls_dir}/c.pem"
            subprocess.run(["openssl", "req", "-x509", "-newkey", "rsa:2048", "-nodes", "-keyout", key, "-out", crt,
                            "-days", "1", "-subj", "/CN=127.0.0.1"], check=True, capture_output=True)
            ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
            ctx.load_cert_chain(crt, key)
            self.httpd.socket = ctx.wrap_socket(self.httpd.socket, server_side=True)
            scheme = "https"
        self.port = self.httpd.server_address[1]
        self.host = f"127.0.0.1:{self.port}"
        self.origin = f"{scheme}://{self.host}"
        self.thread = threading.Thread(target=self.httpd.serve_forever, daemon=True)

    def __enter__(self):
        self.thread.start()
        return self

    def __exit__(self, *a):
        self.httpd.shutdown()
        self.httpd.server_close()


def dead_port():
    """Un port local pe care nu ascultă nimeni (connection refused → curl exit 7)."""
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port
