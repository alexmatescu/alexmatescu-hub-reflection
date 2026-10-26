---
name: verificare-tehnica-avl203
description: Execută protocolul AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility (Core Technical Web Measurement Protocol) — asupra unor URL-uri declarate într-un plan de măsurare înghețat, și aplică grila AVL-204 pentru diagnostic. Rulează verificările TC-00…TC-08 (contextul rulării, HTTP GET / URL final, variante http/https și www, robots.txt după RFC 9309, sitemap, semnale raw HTML, User-Agent Response Parity, integritate, textele-cheie în HTML-ul brut), conservă artefactele brute, construiește evidence index-ul și checksum-urile, produce observațiile, diagnosticul pe zone, recomandările prioritizate și raportul în română. Invocă atunci când userul cere „verificarea tehnică AVL-203”, „rulează protocolul tehnic”, „baseline tehnic T0 / remăsurare F1 pentru un site”, stratul tehnic al unui audit AI Visibility sau un audit tehnic minim de accesibilitate pentru crawlere AI. NU publică nimic, NU face audit SEO complet, NU interpretează vizibilitatea AI și NU modifică documentele AVL-203/AVL-204.
---

# Verificare tehnică AVL-203 / AVL-204

Agent de execuție pentru `src/content/lab/AVL/AVL-203_Protocol_minim_verificare_tehnica_site.md` (protocolul) și `src/content/lab/AVL/AVL-204_Grila_interpretare_verificare_tehnica.md` (grila de diagnostic). Documentele normative au precedență asupra acestui fișier. Dacă versiunea lor se schimbă, recitește-le și semnalează divergențele față de implementare înainte de rulare.

> **Principiu (AVL-203):** documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI.

## Statutul implementării

- Implementarea curentă este **v0.4.0**, „implementare candidată pentru draftul AVL-203 v0.5.0 / AVL-204 v0.2.0”, **nevalidată** ca implementare de referință (AVL-203 §19.4). Nu declara rezultatele „conforme AVL-203 1.0.0”.
- Ce acoperă codul, prin ce test și ce nu acoperă: `CONFORMANCE.md`.
- Alegerile operaționale `OP-*` și istoricul propunerilor `P-01`…`P-11` (aprobate și preluate în AVL-203 0.5.0 / AVL-204 0.2.0): `docs/avl-203-204-registru-implementare.md`. Planul de lucru: `docs/PLAN-AVL-203-204-VERIFICARE-TEHNICA.md`.
- **Domeniul (AVL203-REQ-043, AVL204-REQ-015):** verificarea se face numai pentru site-ul unei entități evaluate ca proiect sau client al laboratorului (inclusiv site-urile proprii), cu fișa entității completată de reprezentant. Nu pentru concurenți și nici pentru entitățile din Market Discovery; o verificare din afara domeniului nu se documentează ca rulare.
- `scripts/run_avl203.sh` și `scripts/analyze_avl203.py` (v0.2.x) rămân doar pentru reproducerea rulărilor vechi. Nu le folosi pentru rulări noi.

## Fișiere

| Fișier | Rol |
|---|---|
| `scripts/avl203_cli.py` | interfața: `plan`, `capture`, `verify`, `analyze`, `diagnose`, `report` |
| `scripts/avl203/` | modulele (plan, captură, integritate, robots RFC 9309, TC-05, TC-08, analiză, diagnostic, recomandări, raport); doar biblioteca standard Python 3.9+ și `curl` |
| `config/plan-template.json` | șablonul planului de măsurare |
| `config/operational.v0.1.0.json` | alegerile operaționale OP-01…OP-12, versionate |
| `config/user-agents.v0.1.0.tsv` | manifestul User-Agent înghețat la 2026-10-02 |
| `tests/` | testele `unittest`, pe server local: `python3 -m unittest discover -s .claude/skills/verificare-tehnica-avl203/tests` |

## Pasul 1 — Planul de măsurare (înainte de orice request)

AVL203-REQ-001, REQ-029, REQ-030, REQ-031 și REQ-042 cer ca planul să fie fixat înaintea primului request.

1. `python3 .claude/skills/verificare-tehnica-avl203/scripts/avl203_cli.py plan init --out evidence/work/avl203/plan-{entitate}-{eticheta}.json`
2. Completează planul cu userul. Planul cuprinde:
   - entitatea și tipul ei;
   - **fișa entității** (`entity_sheet`): referința, reprezentantul, data, relația (proiect, client, laborator);
   - originul exact;
   - **paginile pe categorii** (`pagina_principala`, `despre`, `contact_identitate` (obligatorie), `oferta_principala`, `referinta`), fiecare cu motivul alegerii, intenția de indexare și textele-cheie TC-08;
   - categoriile care nu se aplică, cu motiv;
   - variantele de host relevante;
   - **politica de acces** pentru fiecare crawler Core, preluată din câmpul „Politica crawlere” al fișei entității (AVL-201 §7, AVL-204 §3.1): `PERMIS` sau `BLOCAT_INTENTIONAT`, cu sursa. Laboratorul recomandă accesul total; dacă reprezentantul nu declară altceva, se trece `PERMIS` cu sursa „recomandarea AI Visibility Lab (acces total), nemodificată de reprezentant”;
   - limitele cererilor auxiliare;
   - extensiile (lista goală dacă nu există).

   Politica și intenția de indexare le declară entitatea. Nu le deduce din robots.txt (AVL204-REQ-017). Un răspuns de eroare intenționat al unei pagini se declară cu `intentional_status`.
3. `plan validate`, apoi `plan freeze`. Planul înghețat nu se mai modifică. O completare ulterioară înseamnă o rulare nouă (REQ-030).

**Eticheta** (AVL-203 §11): `T0` pentru baseline și `F1`, `F2` … `Fn` pentru rulările ulterioare, toate cu `series_id`. `TEST` marchează rulările de probă, care nu se compară cu seriile și nu susțin concluzii publicate.

## Pasul 2 — Captura

```bash
python3 .claude/skills/verificare-tehnica-avl203/scripts/avl203_cli.py capture \
  --plan evidence/work/avl203/plan-delamatescu-T0.frozen.json --out evidence/work/avl203
```

Planul înghețat se verifică după hash înainte de primul request. Captura scrie `manifest/config.json` (configurația inițială), apoi face requesturile, secvențial și cu pauză:

1. TC-01;
2. TC-02, doar pentru variantele declarate;
3. TC-03;
4. TC-04: sitemap-urile declarate, apoi căile convenționale;
5. TC-06: referință, User-Agent-ii din manifest, referință;
6. ținta canonicalului, în limitele planului.

La o eroare de rețea, request-ul se repetă o singură dată (OP-09). La final se scriu `manifest/run-final.json`, evidence index-ul și `integrity/sha256sums.txt`, iar integritatea se verifică. Fără `--insecure`. Un run ID existent nu se suprascrie.

**Politețe:** rulează doar pe URL-urile din plan. Nu rula în buclă și nu crește concurența. Dacă un site răspunde repetat cu `429`/`503`, oprește-te și raportează.

## Pasul 3 — Analiză, diagnostic, raport (offline, fără recaptură)

```bash
CLI=.claude/skills/verificare-tehnica-avl203/scripts/avl203_cli.py
python3 $CLI analyze  --run evidence/work/avl203/run_<ID>     # observații TC-00…TC-08
python3 $CLI diagnose --run evidence/work/avl203/run_<ID> --rules 0.2.0
python3 $CLI report   --run evidence/work/avl203/run_<ID>
```

- `analyze` verifică întâi integritatea. Pentru o rulare `INVALID` produce doar `invalidity.json`. Pentru `PARTIAL`, constatările sprijinite pe artefacte afectate primesc `R-VAL-01`. Fiecare analiză scrie într-un director nou, `derived/analysis-<timp>/`. Dovezile brute nu se ating.
- Aplicarea manuală documentată a RFC 9309 (REQ-041): `analyze --robots-manual decizii.json`, cu liniile citate din `robots.body`.
- `report` scrie `report.md` (în română) și `report.json`. Raportul are secțiunile: rezumat, plan, observații, diagnostic, recomandări, necunoscute, abateri, limite, trasabilitate.

## Pasul 4 — Raportul către user

Pornește de la `report.md`. Înainte de a-l prezenta, verifică pe dovezile brute (nu din memorie) constatările care contează, de exemplu un status, o regulă robots sau o locație TC-08.

| Poți afirma | NU poți afirma |
|---|---|
| status, URL final, redirecturi, tip, dimensiune | că pagina e indexată (`200` ≠ indexare) |
| convergența variantelor; erorile TLS/DNS | că domeniul „controlează” ambele hostname-uri |
| politica RFC 9309 pentru o pereche URL–crawler, cu metoda | comportamentul efectiv al unui furnizor |
| statusul TC-04 | că tot site-ul e descoperibil |
| title, canonical declarat, meta robots, X-Robots-Tag, lang, JSON valid sintactic | canonicalul ales de Google; validitatea Schema.org |
| diferențe pentru User-Agent-ii declarați, ținând cont de variabilitatea referinței | cloaking; accesul real al crawlerului furnizorului |
| prezența textelor-cheie în HTML-ul brut, pe zone | ce vede pagina randată sau un anumit crawler |
| starea diagnosticului după AVL-204, cu regula și observațiile | o certificare a site-ului sau un efect asupra răspunsurilor AI |

Starea „nicio problemă observată” descrie condițiile testate. Constatările „nu poate fi stabilit” se raportează separat. Abaterile `DEV-*` din raport se menționează.

## Ce NU face acest agent

- Nu publică rezultatele și nu le comite. `evidence/work/` e ignorat de git, iar repo-ul e public. Corpurile HTML capturate pot conține tokenuri per request, deci dovezile brute nu se publică (AVL203-REQ-007).
- Nu modifică AVL-203, AVL-204, manifestul UA, configurația operațională sau scripturile în timpul unei rulări.
- Nu face audit SEO, Core Web Vitals, randare JavaScript, validare Schema.org, crawling complet sau autentificarea roboților prin loguri (AVL-203 §13).
- Nu interoghează sisteme AI și nu deduce vizibilitate, citare sau recomandare (AVL-203 §14).

## Când se schimbă implementarea

O modificare care poate schimba o observație sau un diagnostic cere o versiune nouă:

- `SCRIPT_VERSION` din `scripts/avl203/__init__.py`;
- un fișier `operational.vX.json` nou;
- un manifest UA nou;
- pentru reguli, o versiune nouă a grilei AVL-204.

Actualizează și `CONFORMANCE.md`. Rulările vechi rămân atribuite versiunii cu care au fost făcute.
