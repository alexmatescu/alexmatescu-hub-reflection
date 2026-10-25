import copy
import json
import os
import sys

TESTS = os.path.dirname(os.path.abspath(__file__))
SKILL_DIR = os.path.dirname(TESTS)
sys.path.insert(0, os.path.join(SKILL_DIR, "scripts"))

from avl203 import plan as plan_mod  # noqa: E402

OPERATIONAL = os.path.join(SKILL_DIR, "config", "operational.v0.1.0.json")
UA_MANIFEST = os.path.join(SKILL_DIR, "config", "user-agents.v0.1.0.tsv")
CORE = ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]


def template():
    with open(os.path.join(SKILL_DIR, "config", "plan-template.json"), encoding="utf-8") as f:
        return json.load(f)


def local_plan(host, pages, **over):
    """Plan TEST pentru serverul local; `pages` = [(page_id, categorie, cale, key_texts)]."""
    origin = f"http://{host}"
    p = {
        "schema": "avl203-plan/0.2.0",
        "plan_id": "PLAN-fixture-TEST",
        "measurement_point": "TEST",
        "series_id": None,
        "allow_local_fixture": True,
        "entity": {"entity_id": "fixture", "name": "Fixture SRL", "type": "organizatie_servicii"},
        "entity_sheet": {"reference": "fișa fixture", "representative": "test", "date": "2026-10-25", "relationship": "client"},
        "origin": origin,
        "sample_limits": "fixture local de test",
        "pages": [
            {"page_id": pid, "category": cat, "url": origin + path, "reason": "test", "index_intent": "INDEXAT",
             "key_texts": kts or []}
            for pid, cat, path, kts in pages
        ],
        "main_offer_count_declared": sum(1 for _, c, _, _ in pages if c == "oferta_principala"),
        "categories_not_applicable": [],
        "identity_page_absent": None,
        "variants": {"hosts": [host], "schemes": ["http"], "reason": "fixture local: un singur host, fără TLS"},
        "access_policy": [{"crawler": c, "kind": "cautare", "policy": "PERMIS", "scope": "*",
                           "source": "test", "declared_on": "2026-10-25"} for c in CORE],
        "auxiliary_requests": {"types": ["canonical", "sitemap_declared"], "allowed_hosts": [host], "max_requests": 5},
        "extensions": [],
        "capture": {"delay_seconds": 0, "network_retry_pause_seconds": 30, "max_time": 10, "connect_timeout": 5},
    }
    cats = {c for _, c, _, _ in pages}
    for c in ("pagina_principala", "despre", "oferta_principala", "referinta"):
        if c not in cats:
            p["categories_not_applicable"].append({"category": c, "reason": "test"})
    if "contact_identitate" not in cats:
        p["identity_page_absent"] = {"method": "test", "date": "2026-10-25", "by": "test", "limit": "fixture"}
    for k, v in over.items():
        p[k] = v
    return copy.deepcopy(p)


def write_and_freeze(tmp, plan, name="plan.json"):
    path = os.path.join(tmp, name)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(plan, f, ensure_ascii=False, indent=2)
    frozen, digest, _ = plan_mod.freeze(path, OPERATIONAL, UA_MANIFEST)
    return frozen


class FakeSleep:
    def __init__(self):
        self.calls = []

    def __call__(self, s):
        self.calls.append(s)


def read_requests(run):
    with open(os.path.join(run, "manifest", "requests.jsonl"), encoding="utf-8") as f:
        return [json.loads(l) for l in f]
