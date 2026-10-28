---
title: "Poate fi citit tehnic site-ul meu de crawlerele AI? Verificarea AVL-203 a delamatescu.ro, punctul T0"
description: "Studiu de caz despre prima măsurare T0 a protocolului AVL-203 pe delamatescu.ro: 6 pagini, 56 de cereri, 12 crawlere declarate, verificările TC-00…TC-08 cu exemple din dovezile brute și ieșirile reale din terminal, diagnosticul pe zone după grila AVL-204, raportul pentru client și pachetul de dovezi cu checksum-uri."
author: "Alex Matescu"
organization: "AI Visibility Lab"

date_published: "2026-10-28T14:23:00+02:00"
date_modified: "2026-10-28"
last_reviewed: "2026-10-28"

category: "Technical Visibility"
article_type: "Studiu de caz"

language: "ro-RO"

canonical: "https://delamatescu.ro/lab/studii-de-caz/verificare-tehnica-delamatescu-ro"

keywords:
  - "verificare tehnică"
  - "AVL-203"
  - "AVL-204"
  - "AI Visibility"
  - "robots.txt"
  - "sitemap"
  - "User-Agent"
  - "crawlere AI"
  - "OAI-SearchBot"
  - "Claude-SearchBot"
  - "PerplexityBot"
  - "raw HTML"
  - "audit AI Visibility"
  - "T0"
  - "delamatescu.ro"
---

# Poate fi citit tehnic site-ul meu de crawlerele AI? Verificarea AVL-203 a delamatescu.ro, punctul T0

**Studiu de caz #002 — delamatescu.ro (Alex Matescu)**
**Experiment:** Verificarea tehnică AVL-203
**Status:** în desfășurare
**Puncte de măsurare analizate:** T0
**Obiect de studiu:** condițiile tehnice în care paginile unui site pot fi obținute și citite de motoarele de căutare și de crawlerele asistenților AI

> **Evidence-backed case study.** Fiecare exemplu din această pagină provine din dovezile brute ale rulării `AVL203-delamatescu-ro-T0-20261026T085234Z`, publicate integral, cu checksum-uri SHA-256, în pachetul `evidence-avl203-delamatescu-ro-t0-v1.0`. Extrasele sunt scurtate pentru lizibilitate; fișierele complete sunt în pachet. Un singur fișier al pachetului a fost modificat față de captură (numele mașinii, secțiunea 15).

## Punctele de măsurare pe scurt

| | T0 (baseline) |
|---|---|
| Captura | 26 octombrie 2026, 08:52:34–08:54:03 UTC |
| Pagini din plan | 6 |
| Cereri | 56, fără repetări și fără erori de rețea |
| Crawlere declarate | 12: 5 de căutare (matricea Core), 4 de antrenare, 3 de fetch la cererea utilizatorului |
| Protocol și grilă la captură | AVL-203 0.5.0, AVL-204 0.2.0, implementarea candidată v0.4.0 |
| Analiza publicată | grila AVL-204 0.3.0, implementarea v0.5.0 (26 octombrie 2026, 12:11 UTC) |
| Constatări | 109 |
| Pachet de dovezi | `evidence-avl203-delamatescu-ro-t0-v1.0`: 234 de artefacte cu checksum, 224 de dovezi indexate |

## Rezumat

**Pe cele 6 pagini testate pe 26 octombrie 2026, delamatescu.ro nu prezintă probleme tehnice de acces în zonele Z1–Z5 ale grilei AVL-204. Zona Z6 rămâne „nu poate fi stabilit” la comparația de conținut.**

Ce a arătat rularea T0, pe zone:

- **Răspunsul site-ului (Z1):** toate paginile răspund direct cu `200`, iar variantele adresei converg spre `https://delamatescu.ro/`.
- **Regulile pentru crawlere (Z2):** robots.txt permite accesul tuturor celor 9 crawlere evaluate, pe toate paginile.
- **Sitemap-ul (Z3):** e declarat în robots.txt și răspunde.
- **Semnalele paginilor (Z4):** fiecare pagină are title, canonical spre propria adresă și limba declarată, fără `noindex`.
- **Conținutul livrat (Z5):** textele-cheie se află în HTML-ul trimis de server.
- **Răspunsurile pentru crawlere (Z6):** statusul, adresa finală și headerele sunt identice pentru toți cei 5 crawleri de căutare; conținutul nu a putut fi comparat, pentru că pagina se schimbă la fiecare încărcare, chiar pentru același vizitator.

Ce conține studiul:

- prima rulare `T0` a protocolului [AVL-203](/lab/metodologie/protocol-verificare-tehnica) pe un site real, interpretată după grila [AVL-204](/lab/metodologie/grila-interpretare-verificare-tehnica);
- pentru fiecare verificare: ce se cere serverului, ce a răspuns el și cum devine răspunsul o constatare;
- comenzile instrumentului, cu ieșirea lor reală din terminal;
- raportul pe care îl primește un client.

Ce nu spune:

- nimic despre indexare, citare sau recomandare în răspunsurile AI. Spune doar că, în condițiile testate, accesul tehnic nu explică eventualele probleme de vizibilitate ale site-ului (secțiunea 18).

## 1. Ce verifică protocolul AVL-203?

**AVL-203 verifică dacă paginile declarate ale unui site pot fi obținute și citite de sistemele automate: răspunsul HTTP, adresa oficială, regulile din robots.txt, sitemap-ul, semnalele din HTML, răspunsurile pentru diferite User-Agent-uri și prezența textelor importante în codul livrat.**

Protocolul are nouă verificări, `TC-00` … `TC-08`. Observațiile lor nu sunt concluzii: devin diagnostic abia când li se aplică regulile publice din AVL-204, grupate în șase zone.

| Verificare | Ce observă | Zona din AVL-204 |
|---|---|---|
| TC-00 | contextul rulării: mediul, versiunile, planul | — |
| TC-01 | statusul, URL-ul final, redirecturile, tipul și dimensiunea fiecărei pagini | Z1 |
| TC-02 | variantele `http`/`https` și `www`/fără `www` | Z1 |
| TC-03 | robots.txt, aplicat după RFC 9309 pentru fiecare pereche pagină–crawler | Z2 |
| TC-04 | sitemap-ul declarat și căile convenționale | Z3 |
| TC-05 | title, canonical, meta robots, X-Robots-Tag, limba, JSON-LD | Z4 |
| TC-06 | răspunsurile pentru User-Agent-urile crawlerelor, comparate cu un client de referință | Z6 |
| TC-07 | integritatea dovezilor: checksum-urile SHA-256 | validitatea rulării |
| TC-08 | textele-cheie declarate, căutate în HTML-ul brut | Z5 |

În [auditul AI Visibility](/lab/audit-ai-visibility), această verificare răspunde la prima dintre cele patru întrebări: *poate fi accesată informația?* Celelalte straturi (identitatea entității, conținutul, răspunsurile observate pe platforme) se măsoară separat.

De ce protocolul e construit așa, cu separarea dovezii de interpretare, e explicat în articolul [Cum verific tehnic un site pentru AI Visibility?](/lab/articole/cum-verific-tehnic-un-site-pentru-ai-visibility).

## 2. De ce delamatescu.ro?

**Pentru că e singurul site pe care îl pot verifica public fără să expun un client: e site-ul meu și al laboratorului, iar eu sunt reprezentantul care declară politica de acces.**

AVL-203 se aplică numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant (AVL203-REQ-043, AVL204-REQ-015). Pentru delamatescu.ro, fișa și politica le-am declarat eu, la 25 octombrie 2026: acces permis tuturor crawlerelor (căutare, antrenare, fetch la cererea utilizatorului), iar paginile vreau să fie indexate.

Alegerea are un cost: e un conflict de interese real, discutat în secțiunea 22.

## 3. Ce ipoteză testează T0?

**Ipoteza: pe cele 6 pagini declarate, la data capturii, delamatescu.ro nu prezintă nicio condiție tehnică care contrazice politica declarată (acces total, pagini indexabile).**

Ipoteza ar fi infirmată de oricare dintre: un status `4xx`/`5xx` pe o pagină din plan, variante ale adresei care duc la destinații diferite, o regulă robots.txt care blochează un crawler declarat permis, lipsa unui sitemap accesibil, un `noindex`, un canonical spre altă pagină, texte-cheie absente din HTML-ul brut sau un răspuns diferit nefavorabil pentru un crawler.

## 4. Ce a cuprins planul de măsurare?

**Planul, înghețat înaintea capturii, a declarat 6 pagini (câte una pentru fiecare categorie obligatorie din AVL-203 §1.1, plus pagina de proiecte), 8 texte-cheie și politica de acces pentru 12 crawlere.**

| Pagină | Categorie | URL | Texte-cheie |
|---|---|---|---|
| P01 | pagina principală | https://delamatescu.ro/ | „Alex Matescu” |
| P02 | despre | https://delamatescu.ro/despre | „Alex Matescu”, „inginer” |
| P03 | contact și identitate | https://delamatescu.ro/contact | „Alex Matescu” |
| P04 | oferta principală | https://delamatescu.ro/lab/audit-ai-visibility | „audit AI Visibility”, „Alex Matescu” |
| P05 | referință | https://delamatescu.ro/lab | „AI Visibility Lab” |
| P06 | publicații și proiecte | https://delamatescu.ro/proiecte | „AI Visibility Lab” |

Categoria „profil / CV” a fost declarată `NOT_APPLICABLE`: profilul profesional e pe pagina `/despre`, deja în plan. Articolele din `/blog` și `/lab`, prezente în sitemap, nu au fost testate individual.

Crawlerele declarate, toate cu politica `PERMIS`:

- **căutare (matricea Core):** Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot;
- **antrenare:** GPTBot, ClaudeBot, Google-Extended, CCBot;
- **fetch la cererea utilizatorului:** ChatGPT-User, Claude-User, Perplexity-User.

Planul înghețat are sha256 `f79fb571540e1f5d55004583af68175df10bfa445a1ad18882c287d33c348826`.

## 5. Cum se rulează verificarea? Comenzile și ieșirea din terminal

**Verificarea are șase pași, fiecare o comandă a instrumentului `avl203_cli.py`: planul se validează și se îngheață, se capturează, se verifică integritatea, se extrag observațiile, se aplică grila și se scriu rapoartele.**

Ieșirea comenzii de captură din 26 octombrie nu a fost păstrată: instrumentul scrie în terminal doar starea integrității și calea rulării, iar dovada capturii este jurnalul `manifest/requests.jsonl`, cu toate cele 56 de cereri. Ieșirile de mai jos sunt reale, din 28 octombrie 2026, și provin din două surse:

- pașii offline (verificare, analiză, diagnostic, rapoarte) au fost rulați din nou pe o **copie** a rulării T0; diagnosticul obținut este identic cu cel publicat (secțiunea 16);
- planul și captura provin dintr-o rulare `TEST` nouă pe aceleași 6 pagini. O rulare `TEST` nu face parte din serie și nu se compară cu T0 (AVL203-REQ-026); e aici doar ca să arate ce afișează comenzile.

```text
$ CLI=.claude/skills/verificare-tehnica-avl203/scripts/avl203_cli.py

$ python3 $CLI plan validate evidence/work/avl203/plan-delamatescu-TEST-20261028.json
plan valid

$ python3 $CLI plan freeze evidence/work/avl203/plan-delamatescu-TEST-20261028.json
plan înghețat: evidence/work/avl203/plan-delamatescu-TEST-20261028.frozen.json
sha256: 45ba76cbc69e99eaa7c7efcac1dc618b4c64acd250ecf726a9a490e621401f2f

$ python3 $CLI capture --plan evidence/work/avl203/plan-delamatescu-TEST-20261028.frozen.json --out evidence/work/avl203
integritate: VALID
evidence/work/avl203/run_AVL203-delamatescu-ro-TEST-20261028T113141Z
```

Captura TEST a durat 1 minut și 35 de secunde. Pașii offline, pe copia rulării T0:

```text
$ python3 $CLI verify --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
integritate: VALID {'OK': 234}

$ python3 $CLI analyze --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
integritate: VALID
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z

$ python3 $CLI diagnose --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z --rules 0.3.0
Z1: nicio problemă observată
Z2: nicio problemă observată
Z3: nicio problemă observată
Z4: nicio problemă observată
Z5: nicio problemă observată
Z6: nu poate fi stabilit
109 constatări · 1 recomandări · 0 abateri

$ python3 $CLI report --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z/report.md

$ python3 $CLI client-report --run evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z --no-pdf
evidence/work/avl203/run_AVL203-delamatescu-ro-T0-20261026T085234Z/derived/analysis-20261028T113119Z/client-report.html
```

Comenzile întorc coduri de ieșire diferite după rezultat: `0` succes, `1` integritate `PARTIAL`, `2` plan invalid sau utilizare greșită, `3` captura nu a putut porni, `4` integritate `INVALID`. Toate comenzile de mai sus au întors `0`.

## 6. TC-00 — Ce se înregistrează despre rulare?

**Fiecare rulare are un identificator unic și un manifest cu mediul de execuție, versiunile protocolului, ale grilei și ale instrumentului, planul înghețat și jurnalul cererilor.**

Extras din `manifest/env.txt` (numele mașinii a fost înlocuit în pachetul public, secțiunea 15):

```text
start_utc=2026-10-26T08:52:34Z
--- curl --version
curl 8.7.1 (x86_64-apple-darwin25.0) libcurl/8.7.1 (SecureTransport) LibreSSL/3.3.6 zlib/1.2.12 nghttp2/1.68.1
--- sw_vers
ProductName:		macOS
ProductVersion:		26.5.1
--- python
3.9.6 (default, May 22 2026, 11:13:45)  [Clang 21.0.0 (clang-2100.1.1.101)]
```

Extras din `manifest/run-final.json`: 56 de cereri logice, 56 de încercări, 0 repetări, 0 erori `curl`, 0 cereri omise; sfârșitul capturii la `2026-10-26T08:54:03Z`.

## 7. TC-01 — Răspund paginile direct?

**Da. Toate cele 6 pagini au răspuns `200`, fără redirecturi, cu `text/html; charset=utf-8`, iar `curl` a ieșit cu codul `0` la fiecare cerere.**

Comanda, în forma din AVL-203 §5 (instrumentul o rulează pentru fiecare pagină):

```bash
curl --silent --show-error --location --compressed \
  --connect-timeout 15 --max-time 45 \
  --dump-header page.headers --output page.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nnum_redirects=%{num_redirects}\n...' \
  "https://delamatescu.ro/" > page.metrics
```

Extras din `http/P01.try1.metrics`:

```text
http_code=200
url_effective=https://delamatescu.ro/
num_redirects=0
content_type=text/html; charset=utf-8
size_download=10061
http_version=2
ssl_verify_result=0
curl_exit=0
```

Extras din `http/P01.try1.headers`:

```text
HTTP/2 200
content-type: text/html; charset=utf-8
cache-control: no-cache, must-revalidate, max-age=0
strict-transport-security: max-age=31536000; includeSubDomains
content-encoding: gzip
server: cloudflare
```

`size_download` (10.061 octeți) e dimensiunea comprimată transferată; corpul salvat, decomprimat, are 42.518 octeți. Constatarea după grilă: `R-Z1-08`, „nicio problemă observată”, pe fiecare pagină. Un `200` nu înseamnă că pagina e indexată (AVL203-REQ-012).

## 8. TC-02 — Duc toate variantele adresei la același loc?

**Da. Cele patru variante converg spre `https://delamatescu.ro/`; statusul TC-02 este `CONVERGENT`.**

| Cerere | Primul răspuns | Destinația finală | Redirecturi |
|---|---|---|---|
| `http://delamatescu.ro/` | `301 Moved Permanently` | `200` https://delamatescu.ro/ | 1 |
| `http://www.delamatescu.ro/` | `302 Found` | `200` https://delamatescu.ro/ | 1 |
| `https://delamatescu.ro/` | `200` | https://delamatescu.ro/ | 0 |
| `https://www.delamatescu.ro/` | `302` | `200` https://delamatescu.ro/ | 1 |

**O observație din afara grilei.** Variantele cu `www` redirecționează cu `302` (redirecționare temporară, RFC 9110 §15.4.3), iar `http://delamatescu.ro/` cu `301` (permanentă, RFC 9110 §15.4.2). Grila AVL-204 nu evaluează tipul redirectului, deci observația nu devine constatare. O consemnez pentru că un `301` declară explicit adresa oficială ca permanentă; o eventuală schimbare se verifică la F1.

## 9. TC-03 — Ce permite robots.txt fiecărui crawler?

**robots.txt permite accesul tuturor celor 12 crawlere declarate, pe toate cele 6 pagini. Regulile au fost aplicate cu un parser conform RFC 9309, nu cu `grep`.**

Fișierul are 24 de grupuri `User-agent`, nicio linie neinterpretabilă și o declarație `Sitemap`. Extras din `robots/delamatescu.ro.try1.body`, cu numerele de linie:

```text
 1  User-agent: Googlebot
 2  Allow: /
 ...
19  # AI / LLM crawlers (training + retrieval)
20  User-agent: GPTBot
21  Allow: /
 ...
26  User-agent: OAI-SearchBot
27  Allow: /
 ...
35  User-agent: Claude-SearchBot
36  Allow: /
 ...
50  User-agent: PerplexityBot
51  Allow: /
 ...
    User-agent: *
    Allow: /

    Sitemap: https://delamatescu.ro/sitemap.xml
```

Pentru fiecare pereche pagină–crawler, observația păstrează metoda și regula câștigătoare. Un exemplu din diagnostic: pentru P01 și OAI-SearchBot, „permis; metoda PARSER; regula câștigătoare: linia 27 allow: /”.

Grila AVL-204 0.3.0 evaluează zona Z2 pentru cei 5 crawleri de căutare și pentru cei 4 de antrenare (AVL204-REQ-018): 9 crawlere × 6 pagini = 54 de constatări `R-Z2-05`, toate „nicio problemă observată”. Cei 3 agenți de fetch la cererea utilizatorului rămân observații: furnizorii declară că pentru ei regulile robots.txt pot să nu se aplice (AVL-203 §6). Robots.txt nu e o formă de autorizare a accesului și nu dovedește indexarea (RFC 9309 §1.3).

## 10. TC-04 — Este declarat sitemap-ul?

**Da. robots.txt declară `https://delamatescu.ro/sitemap.xml`, care răspunde `200` cu un document XML de 200 de adrese; statusul TC-04 este `DECLARED`.**

| Sitemap | Tip | Răspuns |
|---|---|---|
| https://delamatescu.ro/sitemap.xml | declarat | `200`, XML |
| https://delamatescu.ro/sitemap.xml | cale convențională | `200`, XML |
| https://delamatescu.ro/sitemap_index.xml | cale convențională | `404`, HTML |

Începutul fișierului `sitemap/declared01.try1.body`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://delamatescu.ro/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
```

`404` la `/sitemap_index.xml` nu e o problemă: calea convențională e doar o probă suplimentară când există un sitemap declarat. Statusul descrie declarația și accesibilitatea, nu validitatea completă a sitemap-ului și nici faptul că tot site-ul poate fi descoperit.

## 11. TC-05 — Ce semnale declară paginile?

**Toate cele 6 pagini au `<title>`, un canonical spre propria adresă și `lang="ro"`; niciuna nu are `noindex` sau `X-Robots-Tag`; toate blocurile JSON-LD (10, pe 6 pagini) au sintaxă JSON validă.**

Extras din `http/P02.try1.body`:

```html
<html lang="ro"
<title>Despre Alex Matescu — Inginer, antreprenor și autor</title>
<link rel="canonical" href="https://delamatescu.ro/despre"/>
```

Doar pagina principală are meta robots explicit: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`. Celelalte nu au meta robots, ceea ce nu le exclude din căutare.

Constatarea după grilă: `R-Z4-09`, „nicio problemă observată”, pe fiecare pagină. Limitele: canonicalul declarat nu e neapărat cel ales de Google, iar un JSON valid sintactic nu e un Schema.org valid semantic. Lipsa JSON-LD ar fi fost doar o observație, nu o problemă (AVL-204 0.3.0, regula `R-Z4-06` retrasă).

## 12. TC-08 — Sunt textele importante în HTML-ul livrat de server?

**Da. Toate cele 8 texte-cheie declarate au statusul `PRESENT_IN_BODY`: apar în corpul HTML-ului brut, nu doar în scripturi sau după rularea JavaScript.**

Pentru fiecare text, observația păstrează pozițiile potrivirilor (zonă, linie, coloană). Exemple:

```text
P01 KT01 „Alex Matescu”: PRESENT_IN_BODY · body L1:7866; body L1:10636; body L1:13135
P02 KT03 „inginer”: PRESENT_IN_BODY · body L1:9073; body L1:9231; body L1:10119
P04 KT05 „audit AI Visibility”: PRESENT_IN_BODY · body L1:11511; body L4:15; body L9:62
```

Constatarea după grilă: `R-Z5-04`, „nicio problemă observată”, pe fiecare pagină. Rezultatul descrie octeții capturați, nu pagina randată în browser.

## 13. TC-06 — Primesc crawlerele aceeași pagină ca un vizitator?

**Statusul, URL-ul final și headerele sunt identice pentru toți cei 5 crawleri de căutare și pentru clientul de referință, pe toate paginile. Conținutul nu a putut fi comparat după regulile grilei, pentru că diferă chiar între două capturi identice ale clientului de referință.**

Protocolul cere două capturi ale clientului de referință, cu aceiași parametri (AVL203-REQ-019). Pentru P01:

| Captură | Octeți transferați | sha256 (început) |
|---|---|---|
| referință 1 | 10.109 | `fa04f81aa515368e` |
| referință 2 | 10.119 | `7343888b289daaea` |
| Googlebot | 10.083 | `236db156236c7398` |
| OAI-SearchBot | 10.107 | `093cb18e9fa2083a` |

Cele două capturi de referință diferă, deci diferențele față de crawlere nu pot fi atribuite User-Agent-ului (AVL203-REQ-020). Pentru fiecare crawler, comparația dă „status/URL/headere IDENTIC; conținut NEATRIBUIBIL (variabilitate intrinsecă)”. După grilă: 30 de constatări `R-Z6-04` „nu poate fi stabilit” (5 crawleri × 6 pagini) și 6 constatări `R-Z6-05` „nicio problemă observată” pentru status, URL și headere.

**De unde vine variabilitatea.** Am căutat diferențele în corpurile capturate. Sunt două surse:

1. un token semnat, atașat unui script de evenimente injectat de platforma pe care e construit site-ul (Lovable), cu propria dată de expirare, care diferă la fiecare cerere:

```text
... data-context-token="v1.eyJwcm9qZWN0X2lkIjoibG92cF8z...MDAyOWQ2NTI3NTU1ZmZkODQiLCJleHAiOjE3OTU1OTY3Nzh9.YguA2Oc-9IwG..."
... data-context-token="v1.eyJwcm9qZWN0X2lkIjoibG92cF8z...MDAyOWQ2NTI3NTU1ZmZkODQiLCJleHAiOjE3OTU1OTY3ODh9.P5Bn3ouKcqUe..."
```

2. marcajele de timp ale randării pe server, în starea de hidratare a paginii (`u:1793004778987` în prima captură, `u:1793004788213` în a doua).

**O verificare din afara grilei.** Când aceste două părți sunt înlocuite cu un marcaj fix, toate cele 42 de corpuri capturate pentru TC-06 (6 pagini × 2 capturi de referință și 5 crawleri) devin identice, pagină cu pagină. Grila AVL-204 nu permite această mascare, iar decizia de la 25 octombrie 2026 a fost să rămână așa. Diagnosticul rămâne „nu poate fi stabilit”. Rezultatul mascării e o observație suplimentară: indică faptul că diferențele observate nu țin de User-Agent, dar nu înlocuiește regula.

Un User-Agent declarat de `curl` nu e crawlerul autentificat al furnizorului: cererile au plecat de pe IP-ul meu, nu din infrastructura OpenAI, Anthropic sau Perplexity. O diferență, dacă ar fi existat, n-ar fi fost dovadă de cloaking (AVL203-REQ-021).

## 14. TC-07 — Cum se verifică integritatea dovezilor?

**Fiecare artefact al rulării are un checksum SHA-256 în `integrity/sha256sums.txt`; verificarea recalculează toate cele 234 de sume și le compară.**

```text
$ shasum -a 256 -c integrity/sha256sums.txt
agents/P01_bingbot.try1.body: OK
agents/P01_bingbot.try1.headers: OK
...
```

Pe rularea originală, verificarea dă `VALID {'OK': 234}` (secțiunea 5). Indexul `evidence-index.tsv` leagă fiecare dintre cele 224 de dovezi de cererea, verificarea, pagina și User-Agent-ul care au produs-o:

```text
evidence_id	path	kind	size_bytes	sha256	request_id	attempt	tc	role	page_id	url	ua_key
AVL203-delamatescu-ro-T0-20261026T085234Z-E0001	http/P01.try1.body	body	42518	08edf776…	R0001	1	TC-01	primary	P01	https://delamatescu.ro/	client
```

## 15. Pachetul de dovezi publicat

**Rularea e publicată integral ca GitHub Release, `evidence-avl203-delamatescu-ro-t0-v1.0`: arhiva rulării, analiza din 26 octombrie (grila 0.3.0), raportul tehnic, exemplul de raport pentru client, un README și sumele SHA-256 ale fișierelor.**

Un singur fișier diferă de captură: în `manifest/env.txt` am înlocuit numele mașinii pe care a rulat captura cu `[hostname-redactat]`. Fișierul descrie mediul rulării și nu susține nicio constatare. Consecința e vizibilă și asumată: pe pachetul public, verificarea dă `PARTIAL`, nu `VALID`:

```text
$ python3 $CLI verify --run run_AVL203-delamatescu-ro-T0-20261026T085234Z
Artefacte cu probleme:
  - manifest/env.txt: MODIFICAT
integritate: PARTIAL {'OK': 233, 'MODIFICAT': 1}
```

Checksum-ul original al fișierului și cel din pachet sunt trecute în README-ul release-ului. Celelalte 233 de artefacte corespund sumelor de la captură.

## 16. Este diagnosticul reproductibil?

**Da, pe aceleași dovezi. Reanaliza din 28 octombrie, pe o copie a rulării, cu aceeași grilă (0.3.0) și aceeași implementare (v0.5.0), a produs exact aceleași constatări, zone și recomandări ca analiza din 26 octombrie.**

Rularea are două analize. Prima, din 26 octombrie la 08:54 UTC, a folosit grila 0.2.0 și a dat 85 de constatări: Z2 cuprindea atunci doar cei 5 crawleri de căutare (30 de constatări). A doua, după deciziile din 26 octombrie (grila 0.3.0), a adăugat crawlerii de antrenare în Z2 (54 de constatări) și a dat 109 constatări în total. Starea fiecărei zone e aceeași în ambele. Doar a doua e publicată în pachet.

**Planul T0 nu mai trece validarea instrumentului actual.** Planul a fost înghețat sub AVL-203 0.5.0 și AVL-204 0.2.0:

```text
$ python3 $CLI plan validate evidence/work/avl203/plan-delamatescu-T0.frozen.json
Erori:
  - protocol_version 0.5.0 ≠ versiunea implementată 0.6.0
  - grid_version 0.2.0 ≠ versiunea implementată 0.3.0
plan INVALID
```

Nu e o eroare a rulării T0, ci o regulă a instrumentului: un plan se îngheață pentru o versiune a protocolului. Pentru F1 se îngheață un plan nou, cu aceleași pagini și texte-cheie, iar schimbarea de versiune se declară la comparație.

## 17. Diagnosticul pe zone

**Z1–Z5: „nicio problemă observată”. Z6: „nu poate fi stabilit” pentru conținut, „nicio problemă observată” pentru status, URL și headere. 109 constatări, 0 abateri de la grilă, integritate `VALID`.**

| Zonă | Ce întreabă | Constatări | Stare |
|---|---|---|---|
| Z1 | Răspunsul site-ului și adresa oficială | 6 × `R-Z1-08` | nicio problemă observată |
| Z2 | Regulile pentru crawlere | 54 × `R-Z2-05` | nicio problemă observată |
| Z3 | Descoperirea prin sitemap | 1 × `R-Z3-05` | nicio problemă observată |
| Z4 | Semnalele paginilor | 6 × `R-Z4-09` | nicio problemă observată |
| Z5 | Conținutul livrat în HTML | 6 × `R-Z5-04` | nicio problemă observată |
| Z6 | Răspunsurile pentru crawlere declarate | 30 × `R-Z6-04`, 6 × `R-Z6-05` | nu poate fi stabilit |

Diagnosticul produce o singură recomandare, `REC-01`, de tip „verificare suplimentară”, fără clasă de prioritate (AVL204-REQ-009): comparația de conținut de la Z6 se repetă la o rulare nouă sau se completează cu o extensie declarată (AVL203-REQ-038). Nu există nicio recomandare cu prioritate, deci pragurile de prioritizare P1–P3, încă o decizie deschisă în AVL-204 §15, nu au putut fi testate pe acest caz.

„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI (AVL204-REQ-006).

## 18. Ce primește un client? Raportul pe zone

**Clientul primește un PDF de trei pagini: câte o întrebare pe înțelesul lui pentru fiecare zonă, starea și explicația ei, recomandările cu prioritate, paginile testate, cum se citesc stările și limitele verificării. Nu primește anexa tehnică.**

Raportul tehnic (`report.md`, 338 de linii, 109 constatări cu identificatorii regulilor) rămâne intern: clientul nu îl poate folosi, iar formularea pentru client trebuie să rămână aceeași de la un client la altul. PDF-ul se generează din același diagnostic, cu comanda `client-report`, și trece prin aceeași verificare automată a formulărilor excluse de AVL-204 §8.

Exemplul pentru delamatescu.ro e publicat: [raportul pentru client, T0 (PDF)](/files/lab/verificare-tehnica-delamatescu-ro/raport-client-exemplu-delamatescu-ro-T0.pdf). Varianta publică diferă de cea pentru client doar prin ultima linie din subsol, care spune că e un exemplu pe site-ul propriu al laboratorului. Rapoartele clienților nu se publică.

Concluzia din raport, pentru cazul „acces curat”: *în condițiile testate, nu am găsit blocaje tehnice de acces; dacă site-ul are probleme de vizibilitate în căutare sau în răspunsurile AI, cauza nu apare în această verificare și trebuie căutată în celelalte etape ale auditului: identitatea entității, conținutul și sursele.*

## 19. Ce NU demonstrează acest studiu

- **Nu demonstrează indexarea.** Un `200` și o regulă `Allow` arată că pagina poate fi cerută, nu că e în indexul vreunui motor.
- **Nu demonstrează accesul real al furnizorilor.** Cererile au fost trimise de pe infrastructura mea, cu User-Agent-uri declarate. Un firewall sau un CDN poate trata altfel IP-urile furnizorilor.
- **Nu demonstrează citarea, menționarea sau recomandarea** delamatescu.ro în vreun răspuns AI. Acelea se măsoară separat, de exemplu în [studiul Tabula Rasa](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz).
- **Nu acoperă tot site-ul.** Eșantionul are 6 pagini; articolele din sitemap nu au fost testate individual.
- **Nu descrie pagina randată.** S-a analizat HTML-ul brut trimis de server, nu DOM-ul după rularea JavaScript.
- **Nu stabilește că pagina e identică pentru crawlere.** Comparația de conținut a rămas „nu poate fi stabilit”; verificarea cu mascare din secțiunea 13 e o observație, nu o constatare.
- **Nu e valabil în afara datei capturii.** Site-ul s-a schimbat după 26 octombrie 2026; starea de acum se măsoară la F1.
- **Nu validează protocolul.** AVL-203 și AVL-204 sunt drafturi, iar implementarea e candidată. O rulare fără probleme nu testează regulile pentru probleme.

## 20. Ce urmărim la F1?

- Același eșantion de 6 pagini și aceleași texte-cheie, cu un plan nou înghețat sub versiunea curentă a protocolului (secțiunea 16).
- Dacă variantele `www` trec de la `302` la `301` (secțiunea 8).
- Dacă variabilitatea de la Z6 persistă și dacă o extensie declarată (AVL203-REQ-038) o poate rezolva în limitele grilei (`REC-01`).
- Dacă apare o primă constatare cu prioritate, care să permită testarea pragurilor P1–P3.

## 21. Întrebări frecvente

### Înseamnă „nicio problemă observată” că site-ul apare în ChatGPT sau Google?

Nu. Verificarea arată că paginile pot fi obținute și citite în condițiile testate. Apariția în rezultate și în răspunsurile AI depinde de indexare, de selecția surselor și de interogare, care nu se măsoară aici.

### De ce Z6 e „nu poate fi stabilit” dacă paginile sunt identice după mascare?

Pentru că grila compară conținutul fără mascare: dacă două capturi identice ale clientului de referință diferă, nicio diferență nu poate fi atribuită User-Agent-ului. Mascarea arată de unde vine variabilitatea, dar nu e o regulă a grilei.

### Pot cere această verificare pentru site-ul meu?

Da, ca parte a unui [audit AI Visibility](/lab/audit-ai-visibility). Ai nevoie de politica ta de acces pentru crawlere, de lista paginilor importante și de textele care trebuie să apară în ele. Primești raportul pe zone, ca în exemplul din secțiunea 18.

## 22. Transparență metodologică

**Conflict de interese.** Entitatea evaluată e site-ul meu, iar politica de acces am declarat-o eu. Am scris protocolul și grila, am condus rularea și am interpretat rezultatul. Un rezultat favorabil propriului site e exact rezultatul pe care un autor ar fi tentat să-l raporteze. De aceea am publicat dovezile brute, cu checksum-uri, și regulile după care se interpretează. Oricine poate reface diagnosticul din pachet.

**Asistență AI.** Implementarea candidată (instrumentul `verificare-tehnica-avl203`), rularea și redactarea acestui studiu au fost făcute cu asistența unui model AI (Claude, Anthropic). Claude-SearchBot și ClaudeBot sunt printre crawlerele evaluate; regulile s-au aplicat la fel tuturor crawlerelor.

**Versiuni.** Captura s-a făcut cu AVL-203 0.5.0, grila 0.2.0 și implementarea v0.4.0. Analiza publicată folosește grila 0.3.0 și implementarea v0.5.0, adoptate în aceeași zi, după captură. Nu e o reinterpretare favorabilă: starea zonelor e aceeași în ambele analize (secțiunea 16).

**Ce se păstrează.** Toate cele 234 de artefacte ale rulării, ambele analize (local) și analiza 0.3.0 în pachetul public. Rularea TEST din 28 octombrie, folosită doar pentru ieșirea din terminal, nu e publicată și nu intră în serie.

**O modificare a dovezilor.** Numele mașinii, înlocuit în `manifest/env.txt` în pachetul public (secțiunea 15).

**Observații din afara grilei.** Tipul redirectului `www` (secțiunea 8) și comparația cu mascare (secțiunea 13) sunt observații. Nu au schimbat nicio constatare.

Corelația temporală dintre o schimbare tehnică și o schimbare de vizibilitate nu va fi prezentată drept cauzalitate (AVL-203 §14).

**Maturitatea protocolului.** AVL-203 și grila AVL-204 sunt la început: drafturi 0.x, construite din situațiile întâlnite până acum, adică trei rulări de test și prima rulare T0, toate pe propriul site. Vor fi revizuite pe măsură ce apar situații pe care nu le-au prevăzut. Un caz pe care regulile nu îl acoperă nu se interpretează din mers: nu poate primi „problemă confirmată”, e declarat ca abatere de la grilă și devine propunere pentru versiunea următoare, cu modificarea trecută în istoricul versiunilor. Cadrul metodologic ([AVL-202](/lab/metodologie)) și standardul de dovezi ([AVL-200](/lab/metodologie/standard-dovezi-masurare-trasabilitate)) sunt active; declarația se referă la protocolul tehnic și la grila lui. Secvența de până acum și pașii următori:

```text
1. Draft
   AVL-203 0.1.0 (1 oct.), AVL-204 0.1.0 (22 oct.)
        ↓
2. Rulări TEST pe delamatescu.ro (2 și 25 oct.)
   revizii: AVL-203 0.2.0 și 0.5.0, AVL-204 0.2.0
        ↓
3. Rularea T0 pe delamatescu.ro (26 oct.)
   decizii: AVL-203 0.6.0, AVL-204 0.3.0
        ↓
4. Publicare (28 oct.)
   CS-002, pachetul de dovezi, raportul-exemplu
        ↓
──── de aici, pașii prevăzuți de protocol ────
5. Rulări pe proiecte și clienți
   (fișa entității completată de reprezentant)
        ↓
6. Situație neacoperită de reguli
   nu devine „problemă confirmată”;
   se declară ca abatere în raport
        ↓
7. Propunere de modificare
   versiune nouă, cu rând în istoric
        ↓
8. Remăsurare F1 … Fn, cu plan nou înghețat
   versiunile diferite se declară la comparație
        ↓
   pașii 5–8 se repetă
        ↓
9. Activare 1.0.0, după închiderea
   deciziilor deschise (AVL-203 §19, AVL-204 §15)
```

Pașii 1–4 s-au întâmplat. Pașii 5–9 sunt cei prevăzuți de reguli, nu un calendar: protocolul se îmbunătățește când apare un caz pe care nu l-a prevăzut, nu la o dată fixă. Rapoartele clienților nu se publică; ce se publică e modificarea regulilor, cu motivul ei, în istoricul versiunilor. Regulile citate sunt [AVL204-REQ-003 și AVL204-REQ-012](/lab/metodologie/grila-interpretare-verificare-tehnica) (cazul neacoperit și abaterea declarată), [AVL204-REQ-013 și AVL204-REQ-014](/lab/metodologie/grila-interpretare-verificare-tehnica) (versiunea nouă și comparația între versiuni).

**Status: studiu longitudinal în desfășurare. Următorul punct de măsurare: F1.**

## Istoricul versiunilor

| Versiune | Dată | Modificări |
|---|---|---|
| 1.0 | 28 octombrie 2026 | Publicare inițială: punctul T0 (captura din 26 octombrie 2026), verificările TC-00…TC-08 cu exemple din dovezi, ieșirea din terminal a comenzilor, diagnosticul după AVL-204 0.3.0, exemplul de raport pentru client și pachetul de dovezi `evidence-avl203-delamatescu-ro-t0-v1.0`. |
| 1.1 | 28 octombrie 2026 | Rezumatul restructurat în liste: rezultatul pe zone, ce conține studiul și ce nu spune. Conținutul nu s-a schimbat. |
| 1.2 | 28 octombrie 2026 | Transparența metodologică: paragraf nou „Maturitatea protocolului”, cu secvența pașilor de la draft la publicare și pașii următori prevăzuți de protocol. Celelalte secțiuni nu au fost modificate. |

*Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală: 28 octombrie 2026.*
