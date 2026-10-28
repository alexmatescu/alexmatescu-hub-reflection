"""Raportul pentru client: rezumatul pe zone, fără anexa tehnică.

`client_report` traduce diagnosticul unei analize pentru entitatea evaluată: câte o întrebare pe
zonă, starea în cuvinte simple, recomandările cu prioritate și limitele verificării. Constatările,
ID-urile regulilor și dovezile rămân în `report.md`, care nu se trimite clientului. Textul folosește
aceleași stări ca grila și trece prin verificarea formulărilor excluse (AVL-204 §8). PDF-ul se
obține din HTML cu Chrome headless.
"""
import html
import os
import shutil
import subprocess
from urllib.parse import urlsplit

from . import diagnose as dg
from .report import check_excluded
from .util import read_json, write_text_new

MONTHS = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august",
          "septembrie", "octombrie", "noiembrie", "decembrie"]
CATEGORIES = {"pagina_principala": "Pagina principală", "despre": "Despre", "contact_identitate": "Contact și identitate",
              "oferta_principala": "Serviciul principal", "referinta": "Pagină de referință",
              "publicatii_proiecte": "Proiecte și publicații", "profil_cv": "Profil profesional / CV"}
QUESTIONS = {"Z1": "Se deschide site-ul corect, la o singură adresă oficială?",
             "Z2": "Au voie motoarele de căutare și asistenții AI să citească site-ul?",
             "Z3": "Pot fi găsite paginile prin harta site-ului (sitemap)?",
             "Z4": "Se prezintă paginile corect motoarelor de căutare?",
             "Z5": "Sunt textele importante în pagina livrată de server?",
             "Z6": "Primesc crawlerele aceeași pagină ca un vizitator obișnuit?"}
LABELS = {dg.NONE: "Nicio problemă observată", dg.POSSIBLE: "Problemă posibilă", dg.CONFIRMED: "Problemă confirmată",
          dg.UNDETERMINED: "Nu a putut fi stabilit", "neevaluată": "Neevaluat"}
CSS_STATE = {dg.NONE: "ok", dg.POSSIBLE: "possible", dg.CONFIRMED: "confirmed", dg.UNDETERMINED: "undetermined", "neevaluată": "undetermined"}
MEASUREMENT = {"T0": "măsurătoare de referință (T0)"}
CHROME_PATHS = ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                "/Applications/Chromium.app/Contents/MacOS/Chromium"]


class ClientReportError(Exception):
    pass


def _date(utc):
    y, m, d = utc[:10].split("-")
    return f"{int(d)} {MONTHS[int(m) - 1]} {y}"


def _path(url):
    return urlsplit(url).path or "/"


def _pages(findings):
    return sorted({f["scope"]["url"] for f in findings if f["scope"].get("url")}, key=_path)


def _problem_text(zone_findings):
    bad = [f for f in zone_findings if f["state"] in (dg.CONFIRMED, dg.POSSIBLE)]
    und = [f for f in zone_findings if f["state"] == dg.UNDETERMINED]
    parts = []
    if bad:
        where = ", ".join(_path(u) for u in _pages(bad)) or "la nivelul întregului site"
        parts.append(f"Am găsit {len(bad)} situații care cer atenție ({where}). Ce se poate face e descris la recomandări.")
    if und:
        parts.append(f"{len(und)} verificări din această zonă nu au putut fi încheiate cu datele capturate.")
    return " ".join(parts)


def _answers(diag, obs, plan):
    """Câte un răspuns pe zonă; zonele fără probleme sunt descrise din observații."""
    by_zone = {}
    for f in diag["findings"]:
        by_zone.setdefault(f["zone"], []).append(f)
    n = len(plan["pages"])
    out = {}
    for z in QUESTIONS:
        st = diag["zones"][z]["state"]
        fs = by_zone.get(z, [])
        if st == "neevaluată":
            out[z] = f"Zona nu a fost evaluată: {diag['zones'][z].get('reason', 'lipsesc datele necesare')}."
        elif st != dg.NONE and not (z == "Z6" and all(f["rule_id"] in ("R-Z6-04", "R-Z6-05") for f in fs)):
            out[z] = _problem_text(fs)
        elif z == "Z1":
            redirects = sum(o["num_redirects"] for o in obs["TC-01"])
            out[z] = (f"Toate cele {n} pagini testate răspund normal" + (", direct, fără redirecționări" if redirects == 0 else "") + ". "
                      f"Variantele adresei (cu și fără www, http și https) duc la aceeași adresă oficială: {plan['origin']}.")
        elif z == "Z2":
            crawlers = list(dict.fromkeys(f["scope"]["crawler"] for f in fs if f["scope"].get("crawler")))
            policy = {r["crawler"]: r["policy"] for r in plan["access_policy"]}
            allowed = [c for c in crawlers if policy.get(c) == "PERMIS"]
            if len(allowed) == len(crawlers):
                out[z] = (f"Fișierul robots.txt permite accesul celor {len(crawlers)} crawlere de căutare și AI pentru care ai declarat "
                          f"acces permis ({', '.join(crawlers)}), pe toate paginile testate. Regulile corespund politicii declarate.")
            else:
                out[z] = (f"Pentru cele {len(crawlers)} crawlere de căutare și AI verificate ({', '.join(crawlers)}), regulile din robots.txt "
                          "corespund politicii de acces pe care ai declarat-o, pe toate paginile testate.")
        elif z == "Z3":
            sm = [s for s in obs["TC-04"]["sitemaps"] if s.get("final_status") == 200]
            where = f" și răspunde la {sm[0]['url']}" if sm else ""
            out[z] = f"Site-ul are o hartă a paginilor (sitemap) declarată în robots.txt{where}. Prin ea, motoarele de căutare pot afla ce pagini există."
        elif z == "Z4":
            ex = [o for o in obs["TC-05"] if o["status"] == "EXTRACTED"]
            have = [n for n, k in (("titlu", "title"), ("adresă canonică", "canonical"), ("limba declarată", "html_lang")) if all(o[k] for o in ex)]
            if have:
                listed = ", ".join(have[:-1]) + " și " + have[-1] if len(have) > 1 else have[0]
                text = f"Fiecare pagină testată are {listed}, fără directive care să o excludă din rezultatele căutării."
            else:
                text = "Paginile testate nu au directive care să le excludă din rezultatele căutării."
            blocks = [b for o in ex for b in o["json_ld"]]
            if blocks and all(b["json_syntax"] == "VALID" for b in blocks):
                text += " Datele structurate (JSON-LD) de pe pagini au sintaxă validă; ele descriu informația, dar nu garantează citarea."
            out[z] = text
        elif z == "Z5":
            texts = list(dict.fromkeys(k["text"] for p in plan["pages"] for k in p["key_texts"]))
            out[z] = (f"Textele-cheie declarate ({', '.join('„' + t + '”' for t in texts)}) apar direct în codul paginilor trimis de server. "
                      "Un crawler care nu rulează JavaScript le poate citi.")
        else:  # Z6
            uas = {a["ua_key"] for o in obs["TC-06"] for a in o["agents"]}
            text = (f"Am cerut fiecare pagină în numele a {len(uas)} crawlere de căutare, folosind identificatorul lor, și ca browser obișnuit. "
                    "Codul de răspuns, adresa finală și antetele sunt identice în toate cazurile.")
            if st == dg.UNDETERMINED:
                text += (" Conținutul nu l-am putut compara exact: o parte din codul paginii se schimbă la fiecare încărcare, chiar pentru "
                         "același vizitator. Rezultatul nu indică o problemă, dar nici nu o exclude.")
            out[z] = text
    return out


def _conclusion(diag):
    states = [diag["zones"][z]["state"] for z in QUESTIONS]
    bad = sum(1 for s in states if s in (dg.CONFIRMED, dg.POSSIBLE))
    und = [z for z in QUESTIONS if diag["zones"][z]["state"] in (dg.UNDETERMINED, "neevaluată")]
    if bad:
        text = f"Am găsit probleme în {bad} din cele 6 zone verificate. Recomandările de mai jos sunt ordonate după prioritate."
    else:
        text = ("În condițiile testate, nu am găsit blocaje tehnice de acces. Dacă site-ul are probleme de vizibilitate în căutare "
                "sau în răspunsurile AI, cauza nu apare în această verificare; ea trebuie căutată în celelalte etape ale auditului: "
                "identitatea entității, conținutul și sursele.")
    if und:
        text += f" {'O zonă nu a putut fi încheiată' if len(und) == 1 else f'{len(und)} zone nu au putut fi încheiate'} ({', '.join('zona ' + z[1] for z in und)})."
    return text


def _follow_ups(diag):
    """Verificările suplimentare (fără clasă de prioritate) sunt sarcina laboratorului, nu a clientului."""
    out = []
    for r in diag["recommendations"]:
        if r["priority"]:
            continue
        if r["rule_id"] == "R-Z6-04":
            out.append("La următoarea măsurătoare comparăm conținutul paginilor cu o metodă care ignoră partea de cod ce se schimbă "
                       "la fiecare încărcare. Nu ai nimic de făcut pentru asta.")
        else:
            out.append(f"{r['action']} Verificarea o facem noi, la o măsurătoare ulterioară.")
    return out


def build_html(run, analysis_dir, public_example=False):
    obs = read_json(os.path.join(analysis_dir, "observations.json"))
    diag = read_json(os.path.join(analysis_dir, "diagnostic.json"))
    plan = read_json(os.path.join(run, "manifest", "plan.frozen.json"))
    cfg = read_json(os.path.join(run, "manifest", "config.json"))
    if obs["integrity"]["status"] == "INVALID":
        raise ClientReportError("integritatea rulării e INVALID; raportul pentru client nu se generează")
    label = cfg["measurement_point"]
    e = html.escape
    answers = _answers(diag, obs, plan)
    recs = [r for r in diag["recommendations"] if r["priority"]]
    follow = _follow_ups(diag)
    site = urlsplit(plan["origin"]).netloc

    H = ["<!doctype html><html lang=\"ro\"><head><meta charset=\"utf-8\">",
         f"<title>Verificarea tehnică — {e(site)}</title><style>{CSS}</style></head><body>"]
    if label == "TEST":
        H.append("<p class=\"test\">RULARE TEST — document intern, nu se trimite clientului (AVL203-REQ-026).</p>")
    if obs["integrity"]["status"] != "VALID":
        H.append("<p class=\"test\">Integritatea rulării e parțială: unele artefacte nu au putut fi verificate.</p>")
    H += ["<header><p class=\"overline\">AI Visibility Lab · Audit AI Visibility</p>",
          "<h1>Verificarea tehnică a site-ului</h1>",
          f"<p class=\"entity\">{e(plan['entity']['name'])}</p>",
          "<dl class=\"meta\">",
          f"<div><dt>Data măsurătorii</dt><dd>{_date(cfg['start_utc'])}</dd></div>",
          f"<div><dt>Tipul</dt><dd>{e(MEASUREMENT.get(label, label))}</dd></div>",
          f"<div><dt>Pagini testate</dt><dd>{len(plan['pages'])}</dd></div>",
          "</dl></header>",
          "<section class=\"intro\"><h2>Ce am verificat</h2>",
          "<p>Această verificare răspunde la prima întrebare a auditului: <strong>poate fi accesată informația de pe site?</strong> "
          "Am cerut paginile site-ului așa cum le cer motoarele de căutare și crawlerele asistenților AI și am verificat ce primesc: "
          "răspunsul serverului, regulile de acces, harta site-ului, descrierea paginilor și textul livrat.</p>",
          f"<p class=\"conclusion\">{e(_conclusion(diag))}</p></section>",
          "<section><h2>Rezultatul pe zone</h2><ol class=\"zones\">"]
    for i, z in enumerate(QUESTIONS, 1):
        st = diag["zones"][z]["state"]
        H.append(f"<li class=\"zone\"><div class=\"zhead\"><span class=\"num\">{i}</span><h3>{e(QUESTIONS[z])}</h3>"
                 f"<span class=\"pill {CSS_STATE[st]}\">{LABELS[st]}</span></div><p>{e(answers[z])}</p></li>")
    H.append("</ol></section>")

    H.append("<section><h2>Ce recomandăm</h2>")
    if recs:
        H.append("<ol class=\"recs\">")
        for r in recs:
            H.append(f"<li><p><strong>{e(r['priority'])} · {e(r['element'])}</strong> ({e(LABELS[r['state']].lower())})</p>"
                     f"<p>{e(r['action'])}</p><p class=\"small\">Cum verificăm după intervenție: {e(r['follow_up'])}.</p></li>")
        H.append("</ol>")
    else:
        H.append("<p>Din această verificare nu rezultă nicio intervenție tehnică necesară pe site.</p>")
    if follow:
        H.append("<h3 class=\"sub\">Ce rămâne de verificat</h3><ul>" + "".join(f"<li>{e(t)}</li>" for t in follow) + "</ul>")
    H.append("</section>")

    H += ["<section class=\"keep\"><h2>Paginile testate</h2><table><thead><tr><th>Pagina</th><th>Adresa</th></tr></thead><tbody>"]
    H += [f"<tr><td>{e(CATEGORIES.get(p['category'], p['category']))}</td><td>{e(p['url'])}</td></tr>" for p in plan["pages"]]
    H += ["</tbody></table><p class=\"small\">Celelalte pagini ale site-ului, de exemplu articolele, nu au fost testate individual.</p></section>",
          "<section class=\"keep\"><h2>Cum citești stările</h2><dl class=\"legend\">",
          f"<div><dt><span class=\"pill ok\">{LABELS[dg.NONE]}</span></dt><dd>Condițiile testate nu au arătat nicio problemă. Nu e o certificare a site-ului.</dd></div>",
          f"<div><dt><span class=\"pill possible\">{LABELS[dg.POSSIBLE]}</span></dt><dd>Un semnal care poate afecta accesul sau înțelegerea paginii și care merită verificat.</dd></div>",
          f"<div><dt><span class=\"pill confirmed\">{LABELS[dg.CONFIRMED]}</span></dt><dd>O problemă vizibilă direct în datele capturate.</dd></div>",
          f"<div><dt><span class=\"pill undetermined\">{LABELS[dg.UNDETERMINED]}</span></dt><dd>Datele capturate nu permit o concluzie, în niciun sens.</dd></div>",
          "</dl></section>",
          "<section class=\"keep\"><h2>Limitele verificării</h2><ul>",
          "<li>Verificarea arată dacă paginile pot fi accesate și citite. Nu arată dacă sunt indexate și nici dacă site-ul e menționat, "
          "citat sau recomandat în răspunsurile AI. Acestea se măsoară separat, în celelalte etape ale auditului.</li>",
          "<li>Cererile au fost trimise cu identificatorul fiecărui crawler, dar de pe infrastructura noastră, nu a furnizorilor. "
          "Un furnizor poate primi un răspuns diferit, de exemplu din cauza unui firewall.</li>",
          "<li>Am analizat codul trimis de server, nu pagina așa cum o afișează browserul după rularea JavaScript.</li>",
          "<li>Rezultatul descrie site-ul la data măsurătorii. O schimbare ulterioară se evaluează la o nouă măsurătoare.</li>",
          "<li>Metoda e publică: protocolul AVL-203 și grila AVL-204, ambele în stadiu de draft. Instrumentul care le aplică e în curs de validare.</li>",
          "</ul></section>",
          "<footer><p>Realizat de Alex Matescu, AI Visibility Lab · delamatescu.ro/lab/audit-ai-visibility</p>",
          f"<p>Metodologie: delamatescu.ro/lab/metodologie · Identificatorul măsurătorii: {e(cfg['run_id'])}</p>",
          ("<p>Exemplu public de livrabil: entitatea evaluată e site-ul propriu al laboratorului. Rapoartele pentru clienți nu se publică.</p>"
           if public_example else "<p>Document destinat clientului; nu este publicat.</p>"),
          "</footer></body></html>"]
    text = "\n".join(H)
    check_excluded(text)
    return text


def find_chrome():
    for c in [os.environ.get("AVL203_CHROME")] + CHROME_PATHS + [shutil.which(x) for x in ("google-chrome", "chromium", "chromium-browser")]:
        if c and os.path.exists(c):
            return c
    return None


def client_report(run, analysis_dir, pdf=True, public_example=False):
    name = "client-report-exemplu-public" if public_example else "client-report"
    html_path = os.path.join(analysis_dir, name + ".html")
    pdf_path = os.path.join(analysis_dir, name + ".pdf")
    if pdf and os.path.exists(pdf_path):
        raise FileExistsError(pdf_path)
    write_text_new(html_path, build_html(run, analysis_dir, public_example))
    if not pdf:
        return html_path
    chrome = find_chrome()
    if not chrome:
        raise ClientReportError(f"Chrome nu a fost găsit (setează AVL203_CHROME); HTML-ul e în {html_path}")
    subprocess.run([chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", f"--print-to-pdf={pdf_path}",
                    "file://" + os.path.abspath(html_path)], check=True, capture_output=True, timeout=120)
    return pdf_path


CSS = """
@page { size: A4; margin: 18mm 17mm 18mm 17mm; }
:root { --ink:#1d2433; --muted:#5b6475; --line:#dfe3ea; --soft:#f5f7fa; --accent:#2f4b7c;
  --ok:#1f6f43; --ok-bg:#e5f3ea; --pos:#8a5a00; --pos-bg:#fbf0d9; --conf:#a12a2a; --conf-bg:#f8e3e3; --und:#4a5568; --und-bg:#eceff3; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin:0; background:#fff; color:var(--ink); font: 10.5pt/1.5 -apple-system, "Helvetica Neue", Arial, sans-serif; }
header { border-bottom: 2px solid var(--accent); padding-bottom: 10pt; margin-bottom: 14pt; }
.overline { margin:0; color:var(--accent); font-size:8.5pt; letter-spacing:.08em; text-transform:uppercase; font-weight:600; }
h1 { margin:4pt 0 2pt; font-size:21pt; line-height:1.2; }
.entity { margin:0 0 10pt; font-size:12pt; color:var(--muted); }
.meta { display:flex; gap:22pt; margin:0; }
.meta dt { font-size:8pt; color:var(--muted); text-transform:uppercase; letter-spacing:.05em; }
.meta dd { margin:0; font-weight:600; }
h2 { font-size:13pt; margin:16pt 0 6pt; color:var(--accent); }
h3 { font-size:10.5pt; margin:0; }
h3.sub { margin:10pt 0 4pt; }
p { margin:0 0 6pt; }
.conclusion { background:var(--soft); border-left:3px solid var(--accent); padding:8pt 10pt; }
.zones, .recs { list-style:none; padding:0; margin:0; }
.zone { border:1px solid var(--line); border-radius:6pt; padding:8pt 10pt; margin-bottom:6pt; break-inside:avoid; }
.zhead { display:flex; align-items:center; gap:8pt; margin-bottom:4pt; }
.zhead h3 { flex:1; }
.num { width:16pt; height:16pt; border-radius:50%; background:var(--accent); color:#fff; font-size:8pt; font-weight:700;
  display:inline-flex; align-items:center; justify-content:center; flex:none; }
.zone p { margin:0; }
.pill { font-size:8pt; font-weight:600; padding:2pt 7pt; border-radius:10pt; white-space:nowrap; }
.pill.ok { color:var(--ok); background:var(--ok-bg); }
.pill.possible { color:var(--pos); background:var(--pos-bg); }
.pill.confirmed { color:var(--conf); background:var(--conf-bg); }
.pill.undetermined { color:var(--und); background:var(--und-bg); }
.recs li { border-left:3px solid var(--accent); padding-left:8pt; margin-bottom:8pt; }
ul { margin:0 0 6pt; padding-left:14pt; }
li { margin-bottom:3pt; }
table { width:100%; border-collapse:collapse; font-size:9.5pt; }
th, td { text-align:left; padding:4pt 6pt; border-bottom:1px solid var(--line); }
th { color:var(--muted); font-weight:600; font-size:8.5pt; text-transform:uppercase; letter-spacing:.04em; }
.small { font-size:9pt; color:var(--muted); }
.legend { margin:0; }
.legend div { display:flex; gap:8pt; align-items:baseline; margin-bottom:4pt; }
.legend dt { width:120pt; flex:none; }
.legend dd { margin:0; }
.keep { break-inside:avoid; }
.test { background:var(--conf-bg); color:var(--conf); padding:6pt 10pt; font-weight:600; }
footer { margin-top:18pt; padding-top:8pt; border-top:1px solid var(--line); font-size:8.5pt; color:var(--muted); }
footer p { margin:0 0 2pt; }
"""
