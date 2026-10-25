"""Planul de măsurare: validare, înghețare și încărcarea planului înghețat.

AVL203-REQ-001, REQ-029, REQ-030, REQ-031, REQ-042: lista URL-urilor, motivele, limitele
eșantionului, tipul entității, categoriile obligatorii, textele-cheie și politica de acces se
fixează înaintea primului request. Captura acceptă numai un plan înghețat, cu hash verificat.
"""
import copy
import ipaddress
import os
import re
from urllib.parse import urlsplit

from . import PLAN_SCHEMA, SCRIPT_VERSION, PROTOCOL_VERSION, GRID_VERSION
from .util import canonical_json, read_json, sha256_bytes, sha256_file, utc_now

LABEL_RE = re.compile(r"^(T0|F[1-9][0-9]*|TEST)$")
ENTITY_TYPES = {"organizatie_servicii", "magazin_online", "afacere_locala", "profesionist_independent"}
# AVL-203 §1.1: categoriile obligatorii; contact_identitate nu acceptă NOT_APPLICABLE (REQ-042)
REQUIRED_CATEGORIES = ["pagina_principala", "despre", "contact_identitate", "oferta_principala", "referinta"]
# AVL-204 §11 (provizoriu, decizia deschisă 4): categorii suplimentare propuse — doar avertisment
EXTRA_BY_TYPE = {
    "organizatie_servicii": ["servicii", "portofoliu"],
    "magazin_online": ["categorie_principala", "produs_reprezentativ", "livrare_retur"],
    "afacere_locala": ["locatie", "program"],
    "profesionist_independent": ["profil_cv", "publicatii_proiecte"],
}
CORE_CRAWLERS = ["Googlebot", "bingbot", "OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]
POLICIES = {"PERMIS", "BLOCAT_INTENTIONAT", "NECUNOSCUT"}
INDEX_INTENTS = {"INDEXAT", "NEINDEXAT_INTENTIONAT", "NECUNOSCUT"}
CRAWLER_KINDS = {"cautare", "antrenare", "fetch_utilizator"}
AUX_TYPES = {"canonical", "sitemap_declared"}


class PlanError(Exception):
    def __init__(self, errors):
        super().__init__("; ".join(errors))
        self.errors = errors


def _is_local_host(host):
    h = (host or "").split(":")[0].strip("[]").lower()
    if h in ("localhost",) or h.endswith(".localhost"):
        return True
    try:
        ip = ipaddress.ip_address(h)
    except ValueError:
        return False
    return ip.is_loopback or ip.is_private or ip.is_link_local


def _url_ok(u):
    try:
        p = urlsplit(u)
    except ValueError:
        return False
    return p.scheme in ("http", "https") and bool(p.netloc) and not p.username and not p.password


def origin_of(url):
    p = urlsplit(url)
    return f"{p.scheme}://{p.netloc}"


def validate(plan):
    """Întoarce (erori, avertismente). Un plan cu erori nu poate fi înghețat și nu poate fi capturat."""
    E, W = [], []

    def need(cond, msg):
        if not cond:
            E.append(msg)
        return cond

    if not isinstance(plan, dict):
        return ["planul nu este un obiect JSON"], []
    need(plan.get("schema") == PLAN_SCHEMA, f"schema trebuie să fie {PLAN_SCHEMA}")
    need(isinstance(plan.get("plan_id"), str) and plan["plan_id"].strip(), "plan_id lipsește")

    label = plan.get("measurement_point")
    if need(isinstance(label, str) and LABEL_RE.match(label), "measurement_point trebuie să fie T0, F1…Fn sau TEST (AVL203-REQ-025)"):
        if label != "TEST":
            need(isinstance(plan.get("series_id"), str) and plan["series_id"].strip(),
                 "series_id e obligatoriu pentru T0/F1…Fn")

    ent = plan.get("entity") or {}
    need(isinstance(ent.get("entity_id"), str) and ent["entity_id"].strip(), "entity.entity_id lipsește")
    need(isinstance(ent.get("name"), str) and ent["name"].strip(), "entity.name lipsește")
    etype = ent.get("type")
    if need(isinstance(etype, str) and etype.strip(), "entity.type lipsește (AVL203-REQ-029)"):
        if etype not in ENTITY_TYPES:
            need(isinstance(ent.get("type_reason"), str) and ent["type_reason"].strip(),
                 f"entity.type „{etype}” nu e în AVL-204 §11: declară type_reason și categoriile alese")

    origin = plan.get("origin")
    allow_local = plan.get("allow_local_fixture") is True
    if allow_local and label != "TEST":
        E.append("allow_local_fixture e permis numai pentru rulări TEST")
    if need(isinstance(origin, str) and _url_ok(origin) and origin_of(origin) == origin.rstrip("/"),
            "origin trebuie să fie exact scheme://host[:port]"):
        origin = origin.rstrip("/")
        if _is_local_host(urlsplit(origin).netloc) and not allow_local:
            E.append("origin local/privat: permis doar cu allow_local_fixture=true într-o rulare TEST")

    need(isinstance(plan.get("sample_limits"), str) and plan["sample_limits"].strip(),
         "sample_limits (limitele eșantionului) lipsește (AVL203-REQ-001)")

    # ---- pagini
    pages = plan.get("pages")
    if not need(isinstance(pages, list) and pages, "pages trebuie să fie o listă nevidă"):
        pages = []
    seen_ids, seen_urls, kt_ids, cats = set(), set(), set(), {}
    for i, p in enumerate(pages, 1):
        tag = f"pages[{i}]"
        if not isinstance(p, dict):
            E.append(f"{tag} nu e obiect")
            continue
        pid = p.get("page_id")
        if need(isinstance(pid, str) and re.match(r"^P[0-9]{2,3}$", pid or ""), f"{tag}.page_id trebuie să fie P01, P02…"):
            need(pid not in seen_ids, f"{tag}.page_id duplicat: {pid}")
            seen_ids.add(pid)
        cat = p.get("category")
        need(isinstance(cat, str) and cat.strip(), f"{tag}.category lipsește")
        cats.setdefault(cat, []).append(p)
        url = p.get("url")
        if need(isinstance(url, str) and _url_ok(url), f"{tag}.url invalid"):
            need(url not in seen_urls, f"{tag}.url duplicat: {url}")
            seen_urls.add(url)
            if isinstance(origin, str):
                need(origin_of(url) == origin, f"{tag}.url nu e pe originul declarat {origin}")
        need(isinstance(p.get("reason"), str) and p["reason"].strip(), f"{tag}.reason (motivul alegerii) lipsește (AVL203-REQ-001)")
        need(p.get("index_intent") in INDEX_INTENTS, f"{tag}.index_intent trebuie să fie unul din {sorted(INDEX_INTENTS)}")
        if p.get("intentional_redirect_to") is not None:
            need(_url_ok(p["intentional_redirect_to"]), f"{tag}.intentional_redirect_to invalid")
        if p.get("intentional_canonical") is not None:
            need(_url_ok(p["intentional_canonical"]), f"{tag}.intentional_canonical invalid")
        kts = p.get("key_texts")
        if need(isinstance(kts, list), f"{tag}.key_texts trebuie să fie o listă (AVL203-REQ-031)"):
            if not kts:
                W.append(f"{tag} ({pid}) nu are texte-cheie: zona Z5 rămâne neevaluată pentru această pagină")
            for j, kt in enumerate(kts, 1):
                ktag = f"{tag}.key_texts[{j}]"
                kid = (kt or {}).get("kt_id")
                if need(isinstance(kid, str) and re.match(r"^KT[0-9]{2,3}$", kid or ""), f"{ktag}.kt_id trebuie să fie KT01, KT02…"):
                    need(kid not in kt_ids, f"{ktag}.kt_id duplicat: {kid}")
                    kt_ids.add(kid)
                need(isinstance((kt or {}).get("text"), str) and kt["text"].strip(), f"{ktag}.text lipsește")
                need(isinstance((kt or {}).get("purpose"), str) and kt["purpose"].strip(), f"{ktag}.purpose lipsește")

    # ---- categorii obligatorii (AVL203-REQ-029, REQ-042)
    na = plan.get("categories_not_applicable")
    if not need(isinstance(na, list), "categories_not_applicable trebuie să fie o listă (poate fi goală)"):
        na = []
    na_cats = {}
    for x in na:
        c = (x or {}).get("category")
        need(isinstance((x or {}).get("reason"), str) and x["reason"].strip(), f"categories_not_applicable „{c}”: motivul lipsește")
        na_cats[c] = x
    absent = plan.get("identity_page_absent")
    need("contact_identitate" not in na_cats,
         "contact_identitate NU TREBUIE notată NOT_APPLICABLE (AVL203-REQ-042); folosește identity_page_absent")
    for c in REQUIRED_CATEGORIES:
        if c == "contact_identitate":
            has = bool(cats.get(c))
            if has and absent:
                E.append("contact_identitate are URL în pages, dar identity_page_absent e completat")
            elif not has:
                if need(isinstance(absent, dict), "contact_identitate lipsește: adaugă pagina sau identity_page_absent (AVL203-REQ-042)"):
                    for k in ("method", "date", "by", "limit"):
                        need(isinstance(absent.get(k), str) and absent[k].strip(), f"identity_page_absent.{k} lipsește (OP-05)")
            continue
        if cats.get(c) and c in na_cats:
            E.append(f"categoria {c} e și în pages, și în categories_not_applicable")
        elif not cats.get(c) and c not in na_cats:
            E.append(f"categoria obligatorie {c}: lipsește din pages și din categories_not_applicable (AVL203-REQ-029)")
    if cats.get("pagina_principala"):
        need(len(cats["pagina_principala"]) == 1, "pagina_principala trebuie să aibă exact un URL")
    if cats.get("despre"):
        need(len(cats["despre"]) == 1, "despre (pagina canonică despre entitate) trebuie să aibă exact un URL")
    if cats.get("oferta_principala"):
        n = plan.get("main_offer_count_declared")
        need(n == len(cats["oferta_principala"]),
             f"main_offer_count_declared ({n}) trebuie să fie egal cu numărul paginilor oferta_principala ({len(cats['oferta_principala'])})")
    for c in EXTRA_BY_TYPE.get(etype, []):
        if not cats.get(c) and c not in na_cats:
            W.append(f"categoria suplimentară propusă de AVL-204 §11 pentru {etype}: {c} — nedeclarată (provizoriu, fără efect)")

    # ---- variante TC-02
    var = plan.get("variants") or {}
    hosts = var.get("hosts")
    if need(isinstance(hosts, list) and hosts, "variants.hosts trebuie să fie o listă nevidă (variantele relevante, AVL-203 §5)"):
        if isinstance(origin, str) and _url_ok(origin):
            need(urlsplit(origin).netloc in hosts, "variants.hosts trebuie să includă hostul originului")
        for h in hosts:
            if _is_local_host(h) and not allow_local:
                E.append(f"variants.hosts: host local {h} fără allow_local_fixture")
    schemes = var.get("schemes")
    need(isinstance(schemes, list) and schemes and set(schemes) <= {"http", "https"}, "variants.schemes ⊆ {http, https}")
    need(isinstance(var.get("reason"), str) and var["reason"].strip(), "variants.reason lipsește")

    # ---- politica de acces (AVL203-REQ-030; formatul P-03 provizoriu)
    pol = plan.get("access_policy")
    if need(isinstance(pol, list), "access_policy trebuie să fie o listă"):
        declared = {}
        for k, x in enumerate(pol, 1):
            tag = f"access_policy[{k}]"
            x = x or {}
            need(isinstance(x.get("crawler"), str) and x["crawler"].strip(), f"{tag}.crawler lipsește")
            need(x.get("kind") in CRAWLER_KINDS, f"{tag}.kind trebuie să fie unul din {sorted(CRAWLER_KINDS)}")
            need(x.get("policy") in POLICIES, f"{tag}.policy trebuie să fie unul din {sorted(POLICIES)}")
            sc = x.get("scope")
            need(sc == "*" or (isinstance(sc, list) and sc and all(s in seen_ids for s in sc)),
                 f"{tag}.scope trebuie să fie „*” sau o listă de page_id din plan")
            need(isinstance(x.get("source"), str) and x["source"].strip(), f"{tag}.source lipsește")
            need(isinstance(x.get("declared_on"), str) and re.match(r"^\d{4}-\d{2}-\d{2}$", x.get("declared_on") or ""),
                 f"{tag}.declared_on trebuie să fie AAAA-LL-ZZ")
            declared.setdefault((x.get("crawler") or "").lower(), []).append(x)
        for c in CORE_CRAWLERS:
            need(c.lower() in declared, f"access_policy: lipsește crawlerul Core {c} (folosește NECUNOSCUT dacă politica nu e cunoscută)")

    # ---- cereri auxiliare (OP-08)
    aux = plan.get("auxiliary_requests")
    if need(isinstance(aux, dict), "auxiliary_requests lipsește (politica cererilor auxiliare, OP-08)"):
        need(isinstance(aux.get("types"), list) and set(aux["types"]) <= AUX_TYPES, f"auxiliary_requests.types ⊆ {sorted(AUX_TYPES)}")
        need(isinstance(aux.get("allowed_hosts"), list), "auxiliary_requests.allowed_hosts trebuie să fie o listă")
        for h in aux.get("allowed_hosts") or []:
            if _is_local_host(h) and not allow_local:
                E.append(f"auxiliary_requests.allowed_hosts: host local {h} fără allow_local_fixture")
        need(isinstance(aux.get("max_requests"), int) and aux["max_requests"] >= 0, "auxiliary_requests.max_requests trebuie să fie întreg ≥ 0")

    need(isinstance(plan.get("extensions"), list), "extensions trebuie să fie o listă explicită (goală dacă nu există, AVL203-REQ-038)")
    for k, x in enumerate(plan.get("extensions") or [], 1):
        for f in ("name", "source", "period", "access", "provided_by"):
            need(isinstance((x or {}).get(f), str) and x[f].strip(), f"extensions[{k}].{f} lipsește (AVL203-REQ-038)")

    cap = plan.get("capture")
    if cap is not None and not isinstance(cap, dict):
        E.append("capture trebuie să fie obiect (parametri care înlocuiesc valorile OP)")
    if plan.get("protocol_version", PROTOCOL_VERSION) != PROTOCOL_VERSION:
        E.append(f"protocol_version {plan.get('protocol_version')} ≠ versiunea implementată {PROTOCOL_VERSION}")
    if plan.get("grid_version", GRID_VERSION) != GRID_VERSION:
        E.append(f"grid_version {plan.get('grid_version')} ≠ versiunea implementată {GRID_VERSION}")
    return E, W


def effective_capture(plan, operational):
    """Parametrii de captură efectivi: valorile OP, suprascrise explicit de plan."""
    c = operational["capture"]
    eff = {
        "connect_timeout": c["OP-12"]["connect_timeout"],
        "max_time": c["OP-12"]["max_time"],
        "delay_seconds": c["OP-12"]["delay_seconds"],
        "max_redirects": c["OP-12"]["max_redirects"],
        "allowed_protocols": c["OP-12"]["allowed_protocols"],
        "compressed": dict(c["OP-12"]["compressed"]),
        "robots_max_redirects": c["OP-06"]["robots_max_redirects"],
        "network_retry_count": c["OP-09"]["network_retry_count"],
        "network_retry_pause_seconds": c["OP-09"]["network_retry_pause_seconds"],
        "network_error_curl_exits": list(c["OP-09"]["network_error_curl_exits"]),
        "reference_captures": c["OP-11"]["reference_captures"],
        "conventional_sitemap_paths": list(c["sitemap"]["conventional_paths"]),
        "max_declared_sitemaps": c["sitemap"]["max_declared_per_origin"],
        "chrome_version": "131.0.0.0",
    }
    for k, v in (plan.get("capture") or {}).items():
        if k not in eff:
            raise PlanError([f"capture.{k}: parametru necunoscut"])
        eff[k] = v
    return eff


def freeze(plan_path, operational_path, ua_manifest_path, out_path=None):
    """Validează și îngheață planul: copie completă cu parametrii efectivi + fișier .sha256."""
    plan = read_json(plan_path)
    errors, warnings = validate(plan)
    if errors:
        raise PlanError(errors)
    operational = read_json(operational_path)
    frozen = copy.deepcopy(plan)
    frozen["protocol_version"] = PROTOCOL_VERSION
    frozen["grid_version"] = GRID_VERSION
    frozen["capture_effective"] = effective_capture(plan, operational)
    frozen["frozen"] = {
        "utc": utc_now(),
        "script_version": SCRIPT_VERSION,
        "source_plan_sha256": sha256_file(plan_path),
        "operational_config": {"file": os.path.basename(operational_path), "sha256": sha256_file(operational_path)},
        "ua_manifest": {"file": os.path.basename(ua_manifest_path), "sha256": sha256_file(ua_manifest_path)},
        "warnings": warnings,
    }
    if out_path is None:
        base = plan_path[:-5] if plan_path.endswith(".json") else plan_path
        out_path = base + ".frozen.json"
    data = canonical_json(frozen)
    with open(out_path, "xb") as f:
        f.write(data)
    digest = sha256_bytes(data)
    with open(out_path + ".sha256", "x", encoding="utf-8") as f:
        f.write(f"{digest}  {os.path.basename(out_path)}\n")
    return out_path, digest, warnings


def load_frozen(frozen_path):
    """Încarcă un plan înghețat și verifică hash-ul; altfel PlanError (captura nu pornește)."""
    side = frozen_path + ".sha256"
    if not os.path.exists(side):
        raise PlanError([f"planul nu e înghețat: lipsește {os.path.basename(side)} (rulează „plan freeze”)"])
    with open(side, encoding="utf-8") as f:
        expected = f.read().split()[0]
    actual = sha256_file(frozen_path)
    if actual != expected:
        raise PlanError([f"planul înghețat a fost modificat după înghețare (sha256 {actual} ≠ {expected})"])
    plan = read_json(frozen_path)
    if "frozen" not in plan or "capture_effective" not in plan:
        raise PlanError(["fișierul nu este un plan înghețat"])
    errors, _ = validate({k: v for k, v in plan.items() if k not in ("frozen", "capture_effective")})
    if errors:
        raise PlanError(errors)
    return plan, actual
