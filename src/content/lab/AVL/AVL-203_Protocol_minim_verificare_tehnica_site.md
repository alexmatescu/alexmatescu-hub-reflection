---
document_id: "AVL-203"
title: "Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
subtitle: "Core Technical Web Measurement Protocol"
level: "C — Methodology"
version: "0.1.0"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-10-01"
date_published: null
date_modified: "2026-10-01"
last_reviewed: "2026-10-01"
canonical_proposed: "https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
informative_dependencies:
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification"
keywords:
  - "AI Visibility"
  - "verificare tehnică"
  - "robots.txt"
  - "sitemap"
  - "User-Agent"
  - "HTTP"
  - "evidence capture"
  - "AVL-203"
---

# AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility

## Core Technical Web Measurement Protocol

> **Principiu:** documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI.

---

## Controlul documentului

AVL-203 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation, propus ca protocol în ramura Core Methodology descrisă de AVL-202.

Versiunea curentă, **0.1.0**, este un **draft pentru revizuire** și nu este activă. Documentul nu are încă URL canonic definitiv, dată de publicare sau cerințe identificate `AVL203-REQ-*`. Deciziile rămase deschise înainte de activare sunt enumerate în §17.

Identificatorul AVL-203 a fost alocat la 1 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut și a corpusului, și confirmat de Alex Matescu. Eticheta de lucru folosită anterior pentru acest draft, „AVL-TECH-001”, nu este un identificator normativ și nu introduce o familie `AVL-TECH-*`.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-203 |
| Nivel | C — Methodology |
| Versiune | 0.1.0 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 1 octombrie 2026 |
| Data publicării | — (nepublicat) |
| Ultima verificare | 1 octombrie 2026 |
| Limbă | română |
| URL canonic propus | https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica |
| Dependențe normative | AVL-001; AVL-202; AVL-200 |
| Relație cu AVL-201 | componentă reutilizabilă la baseline și remăsurări; nu înlocuiește AVL-201 |

În această versiune de draft, cuvintele „trebuie” și „nu trebuie” din text exprimă intenția protocolului. Ele vor deveni cerințe de conformitate abia după formalizarea lor ca cerințe identificate `AVL203-REQ-*`, cu sensul RFC 2119 / RFC 8174 adoptat de AVL-200 (§17, decizia 3).

---

# 1. Care este scopul protocolului?

**Protocolul definește un set tehnic minim, transversal și repetabil pentru documentarea condițiilor observabile de acces, descoperire și prezentare machine-readable a unui site web.** El sprijină interpretarea ulterioară a măsurătorilor Search/AI Search, dar nu reprezintă un audit complet de performanță, securitate, SEO sau vizibilitate AI.

Acest protocol se aplică site-urilor și paginilor selectate într-un plan de măsurare declarat. O singură pagină nu reprezintă automat întregul domeniu. Lista URL-urilor testate, motivele alegerii și limitele eșantionului se declară înaintea rulării, în fișa experimentului sau în documentul proiectului.

Protocolul conservă și rezultate negative, erori, redirecturi neașteptate, date indisponibile și abateri. Absența unei dovezi nu se transformă într-un `NO` nejustificat (AVL-200 §6).

---

# 2. Unde se situează verificarea tehnică în metodologia AVL?

**Verificarea tehnică este un proces de captură și observație care furnizează evidență contextuală măsurătorilor, fără a pretinde că descrie mecanismele interne ale unui motor sau model.**

`Evidence Capture Process` este procesul controlat care produce artefacte. Nu este o a șasea categorie epistemică din AVL-200. Lanțul normativ rămâne intact:

```text
Evidence Capture Process
          |
          v
Raw Evidence
     |
     v
Indexed Evidence
     |
     v
Observation
     |
     v
Measurement
     |
     v
Interpretation
     |
     v
Published Claim (unde este cazul)
```

Pentru fiecare măsurare publicată trebuie să existe trasabilitate de la concluzie la artefactul conservat, conform AVL-200 §4. Captura, indexarea, observația, măsurarea și interpretarea nu se contopesc într-o singură judecată automată.

---

# 3. Ce intră în setul minim de verificări?

**Nucleul măsoară identitatea rulării, accesibilitatea HTTP, redirecturile, regulile robots, descoperirea sitemap-ului, semnalele documentului, paritatea răspunsurilor declarate pentru User-Agent-uri și integritatea artefactelor.**

| Check ID intern | Aspect | Artefact minim | Observație permisă |
|---|---|---|---|
| `TC-00` | Contextul rulării | run manifest | condițiile în care a fost efectuată captura |
| `TC-01` | HTTP GET / URL final | response headers, body, metrics | cod HTTP, URL final, număr redirecturi, tip, dimensiune |
| `TC-02` | Variante de host și protocol | responses pentru variante | convergența/divergența variantelor |
| `TC-03` | `robots.txt` | headere + corp original | reguli declarate; politică aplicabilă numai după interpretare corectă |
| `TC-04` | Sitemap | declarații + sitemap-uri capturate | declarație, accesibilitate, tip de document |
| `TC-05` | Semnale raw HTML | HTML + headers | title, canonical, meta robots, X-Robots-Tag, lang, prezența JSON-LD |
| `TC-06` | User-Agent Response Parity | capturi per agent | diferențe de status, URL, headers, conținut și hash |
| `TC-07` | Integritate | evidence index + checksum manifest | identificarea și verificarea artefactelor |

Aceste ID-uri (`TC-*`) sunt identificatori **interni ai verificărilor**, nu identificatori `AVL-NNN` ai documentelor și nu identificatori de instanță. Orice modificare a definițiilor lor care afectează comparabilitatea impune versionarea protocolului (AVL-200 §19).

---

# 4. Cum identificăm o rulare reproductibilă?

**Înaintea oricărui request se înregistrează exact ținta, mediul, instrumentul și configurația, astfel încât alte rulări să poată reproduce procedeul, chiar dacă serverul răspunde diferit.**

Câmpuri minime: run ID unic, entitate/domeniu, URL exact, origin, lista URL-urilor testate, data/ora UTC de început și de final, versiunea protocolului, versiunea scriptului, `curl --version`, mediul de executare, user-agent-urile efective, timeouts, redirect policy, compresie, eventuale erori și abateri. Dacă este relevant și disponibil, se înregistrează mediul de rețea/regiunea, fără a publica date personale.

```bash
# Exemplu de captură a mediului; scriptul final trebuie să salveze automat outputul.
date -u +'%Y-%m-%dT%H:%M:%SZ'
curl --version
```

Tokenurile, cookie-urile, credențialele și datele sensibile nu trebuie publicate în evidența brută accesibilă publicului. Redactarea se face prin copii derivate; originalele se protejează în regimul prevăzut de AVL-200 §18.

---

# 5. Cum verificăm accesibilitatea HTTP, redirecturile și identitatea URL-ului?

**Folosim requesturi GET reproductibile, păstrăm separat headerele și conținutul și înregistrăm URL-ul final, statusul, redirecturile, tipul și dimensiunea răspunsului.**

```bash
TARGET='https://example.com/'
curl --silent --show-error --location --compressed \
  --connect-timeout 15 --max-time 45 \
  --dump-header page.headers --output page.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nnum_redirects=%{num_redirects}\ncontent_type=%{content_type}\nsize_download=%{size_download}\n' \
  "$TARGET" > page.metrics
```

Cu `--location`, fișierul `page.headers` conține headerele tuturor răspunsurilor din lanțul de redirecturi, în ordine, nu doar pe ale răspunsului final. Interpretarea trebuie să identifice explicit blocul răspunsului final.

O matrice de patru variante (`http`/`https`, `www`/non-`www`) se aplică originului unde variantele sunt relevante, fără a presupune că fiecare domeniu folosește sau controlează ambele hostname-uri. Se păstrează destinația și eventualele erori (inclusiv TLS/DNS), fără a le ascunde prin `--insecure`.

`HEAD` poate fi folosit auxiliar, dar nu înlocuiește GET: RFC 9110 §9.3.2 permite serverului să omită în răspunsul la HEAD headerele a căror valoare se determină numai la generarea conținutului.

`HTTP 200` reprezintă un răspuns reușit al requestului, nu un diagnostic de indexare. `403` indică faptul că serverul a înțeles requestul, dar refuză să-l onoreze (RFC 9110 §15.5.4); nu dovedește singur că un furnizor AI nu poate accesa resursa.

---

# 6. Ce verificăm în robots.txt și de ce?

**Capturăm fișierul robots de la originul exact și evaluăm separat regulile declarate pentru fiecare crawler relevant, fără a transforma un simplu `grep` într-o evaluare completă a accesului.**

```bash
ORIGIN='https://example.com'
curl --silent --show-error --location \
  --dump-header robots.headers --output robots.body \
  "$ORIGIN/robots.txt"
```

Se documentează statusul, URL-ul efectiv, redirecturile, corpul și grupurile `User-agent`, `Allow`, `Disallow`, precum și declarațiile `Sitemap`. Interpretarea unei reguli pentru un URL cere aplicarea corectă a RFC 9309 și a extensiilor furnizorului: selecția grupului specific produsului înaintea grupului `*`, combinarea grupurilor care corespund aceluiași token și regula celei mai specifice potriviri între `Allow` și `Disallow` (RFC 9309 §2.2). `grep` este doar inspecție preliminară; dacă parserul complet lipsește, rezultatul politicii rămâne `NEDETERMINAT`, nu `ALLOW` implicit.

Matricea Core urmărește politica relevantă pentru `*`, `Googlebot`, `bingbot`, `OAI-SearchBot`, `Claude-SearchBot` și `PerplexityBot`. La data verificării acestui draft (1 octombrie 2026), documentația furnizorilor descrie `OAI-SearchBot`, `Claude-SearchBot` și `PerplexityBot` drept crawlere asociate căutării sau afișării surselor, nu antrenării modelelor; rolul lor se reverifică la fiecare versiune a protocolului.

Agenții pentru antrenarea modelelor (de exemplu `GPTBot`, `ClaudeBot`) și cei pentru fetch la cererea utilizatorului (de exemplu `ChatGPT-User`, `Claude-User`, `Perplexity-User`) sunt analize distincte, declanșate de întrebarea cercetării. Pentru agenții de tip user fetch, OpenAI și Perplexity declară că regulile robots.txt pot să nu se aplice sau sunt în general ignorate, iar Anthropic declară că și Claude-User respectă robots.txt; diferențele se documentează per furnizor, nu se generalizează. `Google-Extended` este token de control în robots.txt, nu User-Agent HTTP separat.

Robots Exclusion Protocol nu este o formă de autorizare a accesului (RFC 9309 §1.3) și nu dovedește indexarea.

---

# 7. Cum verificăm descoperirea sitemap-ului?

**Mai întâi colectăm directivele `Sitemap:` declarate în robots.txt și apoi încercăm obținerea fiecărui sitemap declarat; locațiile convenționale sunt doar probe suplimentare de descoperire.**

```bash
# Inspecție inițială; pentru extragere robustă se folosește un parser.
grep -i '^[[:space:]]*sitemap[[:space:]]*:' robots.body
# Exemplu pentru un sitemap declarat:
SITEMAP='https://example.com/sitemap.xml'
curl --silent --show-error --location \
  --dump-header sitemap.headers --output sitemap.body "$SITEMAP"
```

Protocolul Sitemaps cere ca directiva `Sitemap:` din robots.txt să conțină URL-ul complet al sitemap-ului. RFC 9309 §2.2.4 permite interpretarea unor înregistrări suplimentare precum `Sitemap`, fără a interfera cu regulile definite explicit.

Raportăm `DECLARED`, `FOUND_AT_CONVENTIONAL_PATH`, `NOT_FOUND`, `UNAVAILABLE` ori `UNKNOWN` numai după regula documentată. Nu deducem că întregul site este descoperibil din prezența unui singur sitemap. Validarea XML completă, crawlingul integral al URL-urilor și identificarea paginilor orfane sunt excluse din Core, dacă planul de studiu nu le justifică.

---

# 8. Ce semnale ale documentului extragem din răspunsul brut?

**Din HTML-ul și headerele capturate identificăm semnale declarative elementare, fără a le confunda cu interpretarea sau selecția pe care o face un motor extern.**

Se urmăresc: `<title>`, `rel=canonical`, meta robots, `X-Robots-Tag`, `<html lang>` și prezența JSON-LD. Se păstrează valoarea și locația originală.

Un document poate conține `X-Robots-Tag` deși în HTML nu există meta robots; verificăm ambele. Google documentează că orice regulă care poate fi folosită într-un meta robots poate fi exprimată și ca `X-Robots-Tag`, și că aceste reguli sunt descoperite doar dacă URL-ul este accesat, nu și atunci când robots.txt blochează crawlingul.

Canonicalul declarat nu este automat cel selectat de Google: Google descrie metodele de declarare a canonicalului drept preferințe, nu obligații. Prezența JSON-LD nu demonstrează validitatea vocabularului sau utilizarea lui de către un model. Raw HTML nu echivalează cu DOM-ul randat.

În implementare, parsingul robust trebuie să suporte schimbări de ordine ale atributelor, ghilimele diferite și taguri pe mai multe linii. Exemplele `grep` nu sunt validatori HTML. Dacă extracția nu este sigură, păstrăm valoarea `UNKNOWN` cu motiv, nu inventăm `ABSENT`.

---

# 9. Ce înseamnă User-Agent Response Parity?

**Repetăm requestul GET cu același URL și aceiași parametri documentați, schimbând doar identitatea User-Agent declarată, apoi comparăm răspunsurile fără a pretinde că am autentificat crawlerul real.**

Profilul de lucru cuprinde clientul implicit și reprezentanți pentru Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot. Șirurile User-Agent publicate de furnizori sunt șiruri complete care conțin tokenul produsului (de exemplu `… compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`), nu doar tokenul. Versiunile exacte folosite trebuie înghețate în manifestul rulării. Un test `curl --user-agent` nu poate simula infrastructura IP/WAF a furnizorului; exemplul de mai jos folosește doar tokenul și este orientativ.

```bash
curl --silent --show-error --location --compressed \
  --user-agent 'OAI-SearchBot' \
  --dump-header oai.headers --output oai.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nsize_download=%{size_download}\n' \
  "$TARGET" > oai.metrics
```

Se compară codurile, destinațiile, headerele relevante, dimensiunile și hash-urile. O diferență de hash semnalează doar că octeții sunt diferiți. Ea poate proveni din timestampuri, din conținut dinamic sau din protecții anti-bot. Nu devine automat dovadă de cloaking și nici de inaccesibilitate efectivă pentru furnizor.

---

# 10. Cum conservăm și indexăm dovezile?

**Fiecare artefact brut se păstrează nealterat, este legat de un run ID și primește metadatele și controlul de integritate cerute de AVL-200.**

Structură orientativă (schema AVL-200 are precedență):

```text
run_<ID>/
  manifest/
  http/
  robots/
  sitemap/
  agents/
  evidence-index.*
  integrity/sha256sums.txt
  observations.*
  exceptions.md
```

```bash
# Exemplu macOS; lista se generează fără auto-includerea manifestului de checksum.
find http robots sitemap agents -type f -print0 | sort -z | xargs -0 shasum -a 256 > integrity/sha256sums.txt
# Verificare ulterioară:
shasum -a 256 -c integrity/sha256sums.txt
```

Pe sisteme Linux, echivalentul uzual este `sha256sum`; scriptul trebuie să documenteze utilitarul efectiv folosit.

Nu se rescrie un artefact brut pentru a obține un raport mai lizibil (AVL-200 §8.1). Câmpurile deterministe (dimensiune, hash, path) se calculează programatic; clasificările incerte sunt marcate ca atare și revizuite (AVL-200 §5, §16). Un hash verifică integritatea octeților **după** captură, nu autenticitatea sursei înaintea capturii (AVL-200 §10).

---

# 11. Cum se folosesc rezultatele între baseline și remăsurări?

**Aceeași versiune a protocolului și același set de URL-uri comparabile se folosesc la puncte de măsurare succesive, iar orice abatere se documentează explicit.**

Manifestul identifică fiecare rulare prin poziția ei în seria de măsurare: **`T0`** este baseline-ul, iar rulările ulterioare sunt **`F1`, `F2` … `Fn`**, în ordinea executării. Eticheta unei rulări se atribuie la înregistrarea ei și nu se schimbă ulterior. Când studii istorice folosesc altă nomenclatură, se păstrează numele istorice și se explică mapping-ul, fără redenumirea retroactivă a dovezilor (AVL-200 §7.3).

O schimbare a robots.txt, a canonicalului sau a răspunsului declarat pentru un agent reprezintă o observație tehnică. O schimbare concomitentă a mențiunilor ori a citărilor se măsoară separat. Succesiunea temporală singură nu demonstrează cauzalitatea.

---

# 12. Ce rămâne în afara protocolului minim?

**Core exclude implicit investigațiile de infrastructură și semantică profundă care nu sunt necesare fiecărei rulări AVL, dar permite extensii declarate când întrebarea de cercetare le cere.**

Exemple de investigații separate: diagnostic DNS/TLS extins, Core Web Vitals și performanță, validare completă a sitemap-ului, crawlingul complet al site-ului și identificarea URL-urilor orfane, rendering JavaScript, validare integrală Schema.org și grafuri de entități, autentificarea efectivă a roboților prin loguri/IP, comportamentul avansat al WAF-urilor și accesibilitatea ARIA. `llms.txt` poate fi capturat experimental, dar nu este o condiție normativă de vizibilitate AI demonstrată.

---

# 13. Ce nu poate demonstra protocolul?

**Protocolul nu poate demonstra singur indexarea efectivă, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.**

Răspunsul `200` nu se prezintă drept indexare, iar un `403` pentru un User-Agent declarat nu se prezintă drept dovadă că întreaga infrastructură a furnizorului este blocată. Îmbunătățirile de vizibilitate nu se atribuie unei intervenții exclusiv pe baza co-ocurenței temporale. AVL-202 și AVL-200 (§15) determină limitele concluziilor, politica dovezilor și transparența incertitudinilor.

---

# 14. Ce trebuie să livreze o execuție conformă?

**O execuție trebuie să livreze dovezi brute, un index de artefacte, un set de observații tehnice verificabile și un manifest care permite repetarea procesului.**

Livrabilele minime sunt: manifestul rulării, răspunsurile și headerele colectate, rezultatul verificărilor per element `TC-*`, clasificările `UNKNOWN`/`NOT_APPLICABLE`/erori păstrate distinct de `NO`, evidence index, hash-uri, excepții și versiunea protocolului/scriptului. Un rezumat interpretativ poate fi publicat separat doar dacă rămâne trasabil până la evidență. Schema exactă și identificatorii se validează față de AVL-200 și față de implementarea de referință.

---

# 15. Documente asociate

## Normative

- AVL-001 — AI Visibility Lab Foundation.
- AVL-202 — Cadrul metodologic AI Visibility Lab.
- AVL-200 — Standardul de dovezi, măsurare și trasabilitate.

## Informative

- AVL-201 — Tabula Rasa F0: Baseline Measurement Specification.

## Standarde și referințe externe

Verificate la 1 octombrie 2026.

- IETF RFC 9309 — Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309
- IETF RFC 9110 — HTTP Semantics: https://www.rfc-editor.org/rfc/rfc9110
- Sitemaps XML Protocol: https://www.sitemaps.org/protocol.html
- Google — Consolidate duplicate URLs (canonicalizare): https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google — Robots meta tag și X-Robots-Tag: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Google — Common crawlers, inclusiv Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- OpenAI — Overview of OpenAI crawlers: https://developers.openai.com/api/docs/bots
- Anthropic — Does Anthropic crawl data from the web: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity — Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Bing — Which crawlers does Bing use: https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0

Referințele externe susțin terminologia tehnică și descrierea crawlerelor. Regulile protocolului rămân reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.

---

# 16. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|---|---|---|---|
| 0.1.0 | 1 octombrie 2026 | Draft pentru revizuire | Primul draft înregistrat. Definește setul minim de verificări `TC-00`–`TC-07`, poziționarea Evidence Capture Process înaintea lanțului AVL-200, convenția de etichetare a rulărilor (`T0` baseline, `F1` … `Fn` rulări ulterioare) și limitele protocolului. Identificator AVL-203 alocat din registru și confirmat de Alex Matescu; eticheta de lucru „AVL-TECH-001” retrasă. Slugul `/lab/metodologie/protocol-verificare-tehnica` confirmat. Afirmațiile despre RFC 9309, RFC 9110, Sitemaps, Google, OpenAI, Anthropic și Perplexity verificate la sursă la 1 octombrie 2026. |

---

# 17. Decizii deschise înainte de 1.0.0

1. **Aliniarea corpusului la convenția T0/F1…Fn.** Convenția din §11 (decizie Alex Matescu, 1 octombrie 2026) contrazice versiunea publicată a AVL-200 §7 și AVL-001 §17, unde `F0–F3` sunt faze metodologice și `T0, T1…` puncte de măsurare. AVL-200 și AVL-001 trebuie actualizate, ca pas separat, înainte de activarea acestui document.
2. **Locul în AVL-202.** Includerea AVL-203 în arhitectura metodologiei, în lista documentelor și în ordinea de lectură din AVL-202 (și în lista Nivelului C din AVL-001 §17) este o modificare a unor documente active și se face ca pas separat, la activare.
3. **Cerințe identificate.** Formularea „trebuie / nu trebuie” din acest draft nu este încă formalizată în cerințe `AVL203-REQ-*`. Trebuie decis care propoziții devin cerințe de conformitate și cu ce nivel RFC 2119.
4. **Implementarea de referință.** Comenzile sunt exemple. Ele au fost executate o singură dată, preliminar, pe un singur origin (macOS, curl 8.7.1, 1 octombrie 2026) și funcționează sintactic; nu există încă un script versionat cu teste. Statut: nevalidat ca implementare de referință.
5. **Parserul robots.txt.** Trebuie ales sau scris un parser conform RFC 9309 (selecția grupurilor, combinarea lor, cea mai specifică potrivire), altfel `TC-03` rămâne limitat la `NEDETERMINAT`.
6. **Șirurile User-Agent.** Setul exact de șiruri complete pentru `TC-06` trebuie înghețat într-un manifest versionat. Șirul complet `bingbot` nu a putut fi confirmat din pagina Bing (randată client-side) la 1 octombrie 2026.

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

---

> **Declarație finală**
>
> Un server răspunde unui request, nu unei întrebări despre vizibilitate.
> AVL-203 documentează ce a răspuns serverul, în ce condiții și cu ce dovezi; restul rămâne de măsurat separat.
