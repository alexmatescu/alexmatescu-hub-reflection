# PACHET PENTRU CLAUDE CODE — DOCUMENT METODOLOGIC AI VISIBILITY LAB

> Acesta este un fișier de intrare pentru agent, nu un articol obișnuit și nu un ordin de publicare fără validare. Conține protocolul integral propus și instrucțiunile de integrare în corpus. Nu publica un identificator neverificat.

## 0. Instrucțiuni executorului — citește înainte de redactare sau modificări

**Obiectiv:** integrează documentul „Protocolul minim de verificare tehnică a unui site pentru AI Visibility” ca document metodologic AI Visibility Lab de nivel C, compatibil cu arhitectura existentă, și pregătește-l pentru publicare folosind agentul `.claude/skills/publica-document-metodologic/SKILL.md`. NU folosi agentul `.claude/skills/publica-articol-lab` pentru documentul normativ. Dacă este necesar un articol explicativ asociat, acesta se publică separat, sub `/lab/articole`, fără ID normativ reutilizat.

### Garanția de nomenclatură — obligatorie

„AVL-TECH-001” din numele acestui pachet este **un identificator de lucru**, NU un ID normativ confirmat. Verificarea live a site-ului din 30 septembrie 2026 confirmă că identificatorii metodologici publicați sunt `AVL-200`, `AVL-201` și `AVL-202`, că ID-urile sunt permanente și reflectă ordinea de înregistrare, nu o ierarhie conceptuală, și că `AVL-202` interzice presupunerea numerelor viitoare. Site-ul public, singur, nu confirmă dacă următorul număr este încă liber în registrul local.

1. Citește integral `AVL-001`, `AVL-200`, `AVL-201`, `AVL-202`, registrul de documente și convențiile de metadate, rute, nomenclatură și publicare din repository. Identifică inclusiv eventualele namespace-uri ulterioare (de exemplu `AVL-MKT-001`/`AVL-MKT-002`) și distinge documentele publicate, în lucru și rezervate.
2. Caută global în repository orice `AVL-TECH-001`, `AVL-203` și alte identificatoare apropiate sau rezervate. NU presupune că `AVL-203` este liber doar fiindcă nu apare pe site.
3. Dacă există deja o familie TECH recunoscută formal în registru, urmează convenția ei; dacă nu există, integrează noul document în **Nivelul C — Methodology** folosind următorul număr liber conform registrului existent, fără introducerea unilaterală a familiei `AVL-TECH` ca namespace normativ. Păstrează `AVL-TECH-001` doar ca nume intern al acestui pachet, dacă este util. Nu renumerota documentele existente.
4. Dacă există rezervare ambiguă, reguli contradictorii ori o decizie arhitecturală neasumată care ar crea un namespace nou, creează documentul ca **DRAFT fără ID normativ definitiv** și raportează exact blocajul. Nu atribui un număr prin presupunere și nu publica silențios.
5. Verifică în mod distinct nomenclatura fazelor și punctelor de măsurare. `AVL-200` și `AVL-202` publicate diferențiază `F0/F1/F2/F3` (faze metodologice) de `T0/T1/T2` (puncte în timp). Nu redefinești `F1...Fn` drept puncte temporale prin simpla preluare a unor drafturi anterioare. Menționează orice discrepanță între convenția curentă din repo și aceasta în raportul final.
6. Preia **exact câmpurile, ordinea, formatul, schema de versiuni, data și stilul citărilor** din cel mai recent document metodologic aprobat în repository. Nu inventa date istorice, statut `Activ`, URL canonic activ sau versiune `1.0.0` înaintea activării. Versiune inițială sugerată pentru draft: `0.1.0`, numai dacă se potrivește regulilor locale.
7. Verifică toate afirmațiile dependente de furnizori în documentația lor oficială disponibilă la publicare. Nu reutiliza automat formulările și URL-urile din draft ca și cum ar fi verificate recent. Pentru o sursă inaccesibilă, marchează `NEVERIFICAT`, nu fabrica o confirmare.
8. Include documentul în hub-ul metodologic, în registru și în relațiile de dependență doar după verificarea arhitecturală. Nu modifica documente normative deja active decât în modul permis de politica locală de versionare; pregătește diff-ul și changelog-ul exact. Nu face deploy, push sau activare automată dacă procesul local cere aprobare umană.
9. Păstrează separarea dintre textul normativ de mai jos și implementarea executabilă. Nu crea un scanner extins Ichnometria în acest pas. Comenzile exemplifică metoda și trebuie adaptate într-un script versiune-controlat cu teste înainte de adoptare.
10. Folosește checklist-urile pre/post fact-check și publicare din SKILL-ul local, plus propriul raport de verificare (ID ales, motive, dependențe, rute, teste, surse, excepții și fișiere modificate).

### Sursele interne/publice care trebuie reconciliate

- `https://delamatescu.ro/lab/introducere` — `AVL-001`.
- `https://delamatescu.ro/lab/metodologie` — `AVL-202`, hub metodologic, reguli privind ID-uri și relațiile dintre documente.
- `https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate` — `AVL-200`.
- `https://delamatescu.ro/lab/metodologie/tabula-rasa-f0` — `AVL-201`.
- `.claude/skills/publica-document-metodologic/SKILL.md` — contract operațional local de publicare.

---

# Protocolul minim de verificare tehnică a unui site pentru AI Visibility

**Document de lucru:** AVL-TECH-001 (etichetă provizorie; ID normativ de atribuit după verificarea registrului)  
**Denumire engleză:** AI Visibility Lab — Core Technical Web Measurement Protocol  
**Nivel propus:** C — Methodology  
**Statut:** Draft — neactivat  
**Autor:** Alex Matescu  
**Organizație:** AI Visibility Lab  
**Limbă:** română  
**Dependențe normative propuse:** AVL-001; AVL-202; AVL-200.  
**Relație de aplicare:** componentă reutilizabilă la baseline și remăsurări; nu înlocuiește AVL-201.  
**Dată, versiune, URL canonic, eventuale cerințe normative numerotate:** completate după validarea în repo.

> **Principiu:** documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI.

## 1. Care este scopul protocolului?

**Protocolul definește un set tehnic minim, transversal și repetabil pentru documentarea condițiilor observabile de acces, descoperire și prezentare machine-readable a unui site web.** El sprijină interpretarea ulterioară a măsurătorilor Search/AI Search, dar nu reprezintă un audit complet de performanță, securitate, SEO sau vizibilitate AI.

Acest protocol se aplică site-urilor și paginilor selectate într-un plan de măsurare declarat. O singură pagină nu reprezintă automat întregul domeniu. Lista URL-urilor testate, motivele alegerii și limitele eșantionului se declară înaintea rulării, în fișa experimentului sau în documentul proiectului.

Protocolul conservă și rezultate negative, erori, redirecturi neașteptate, date indisponibile și abateri. Absența unei dovezi nu se transformă într-un `NO` nejustificat.

## 2. Unde se situează verificarea tehnică în metodologia AVL?

**Verificarea tehnică este un proces de captură și observație care furnizează evidență contextuală măsurătorilor, fără a pretinde că descrie mecanismele interne ale unui motor sau model.**

`Evidence Capture Process` este procesul controlat care produce artefacte. NU reprezintă o a șasea categorie epistemică din AVL-200. Lanțul normativ rămas intact este:

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

Pentru fiecare măsurare publicată trebuie să existe trasabilitate de la concluzie la artefactul conservat, în conformitate cu AVL-200. Captura, indexarea, observația, măsurarea și interpretarea nu se contopesc într-o singură judecată automată.

## 3. Ce intră în setul minim de verificări?

**Nucleul măsoară identitatea rulării, accesibilitatea HTTP, redirecturile, regulile robots, descoperirea sitemap-ului, semnalele documentului, paritatea răspunsurilor declarate pentru User-Agent-uri și integritatea artefactelor.**

| Check ID intern | Aspect | Artefact minim | Observație permisă |
|---|---|---|---|
| `TC-00` | Contextul rulării | run manifest | condițiile în care a fost efectuată captura |
| `TC-01` | HTTP GET / URL final | response headers, body, metrics | cod HTTP, URL final, număr redirecturi, tip, dimensiune |
| `TC-02` | Variante de host și protocol | responses pentru variante | convergența/divergența variantelor |
| `TC-03` | `robots.txt` | headere + corp original | reguli declarate; politică aplicabilă numai după interpretare corectă |
| `TC-04` | Sitemap | declarații + sitemap-uri capturate | declarație, accesibilitate, tip de document |
| `TC-05` | Semnale raw HTML | HTML + headers | title, canonical, meta robots, X-Robots-Tag, lang, JSON-LD presence |
| `TC-06` | User-Agent Response Parity | capturi per agent | diferențe de status, URL, headers, conținut și hash |
| `TC-07` | Integritate | evidence index + checksum manifest | identificarea și verificarea artefactelor |

Aceste ID-uri (`TC-*`) sunt identificatori **interni ai verificărilor**, nu identificatori `AVL-xxx` ai documentelor. Orice modificare în definițiile lor care afectează comparabilitatea impune versionarea protocolului.

## 4. Cum identificăm o rulare reproductibilă?

**Înaintea oricărui request se înregistrează exact ținta, mediul, instrumentul și configurația astfel încât alte rulări să poată reproduce procedeul, chiar dacă serverul răspunde diferit.**

Câmpuri minime: run ID unic, entitate/domeniu, URL exact, origin, lista URL-urilor testate, data/ora UTC de început și final, versiunea protocolului, versiunea scriptului, `curl --version`, mediul de executare, user-agent-urile efective, timeouts, redirect policy, compresie, eventuale erori și abateri. Înregistrăm, dacă este relevant și disponibil, mediul de rețea/regiunea fără a publica date personale.

```bash
# Exemplu de captură a mediului; scriptul final trebuie să salveze automat outputul.
date -u +'%Y-%m-%dT%H:%M:%SZ'
curl --version
```

Tokenurile, cookie-urile, credențialele și datele sensibile nu trebuie publicate în evidența brută accesibilă publicului. Redactarea/mascarea se face prin copii derivate; originalele se protejează în regimul prevăzut de AVL-200.

## 5. Cum verificăm accesibilitatea HTTP, redirecturile și identitatea URL-ului?

**Folosim requesturi GET reproductibile, păstrăm separat headerele și conținutul și înregistrăm URL-ul final, statusul, redirecturile, tipul și dimensiunea răspunsului.**

```bash
TARGET='https://example.com/'
curl --silent --show-error --location --compressed \
  --connect-timeout 15 --max-time 45 \
  --dump-header page.headers --output page.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nnum_redirects=%{num_redirects}\ncontent_type=%{content_type}\nsize_download=%{size_download}\n' \
  "$TARGET" > page.metrics
```

O matrice de patru variante (`http/https`, `www/non-www`) se aplică originului unde variantele sunt relevante, fără a presupune că fiecare domeniu folosește sau controlează ambele hostname-uri. Se păstrează destinația și eventualele erori (inclusiv TLS/DNS, fără a le ascunde prin `--insecure`). `HEAD` poate fi folosit auxiliar, dar nu înlocuiește GET deoarece serverele pot avea comportamente diferite pentru cele două metode.

`HTTP 200` reprezintă un răspuns reușit al requestului, nu un diagnostic de indexare. `403` indică refuzul respectivului request, nu dovedește singur că un furnizor AI nu poate accesa resursa.

## 6. Ce verificăm în robots.txt și de ce?

**Capturăm fișierul robots de la originul exact și evaluăm separat regulile declarate pentru fiecare crawler relevant, fără a transforma un simplu `grep` într-o evaluare completă a accesului.**

```bash
ORIGIN='https://example.com'
curl --silent --show-error --location \
  --dump-header robots.headers --output robots.body \
  "$ORIGIN/robots.txt"
```

Se documentează statusul, URL-ul efectiv, redirecturile, corpul și grupurile `User-agent`, `Allow`, `Disallow`, precum și declarațiile `Sitemap`. Interpretarea unei reguli pentru un URL cere aplicarea corectă a RFC 9309 și a extensiilor furnizorului, inclusiv grupuri specifice și precedence. `grep` este doar inspecție preliminară; dacă parserul complet lipsește, rezultatul politicii rămâne `NEDETERMINAT`, nu `ALLOW` implicit.

Matricea Core urmărește politica relevantă pentru `*`, `Googlebot`, `bingbot`, `OAI-SearchBot`, `Claude-SearchBot` și `PerplexityBot`, dacă documentația furnizorilor confirmă rolul lor în momentul publicării. Agenții pentru model training și fetch la cererea utilizatorului sunt analize distincte, declanșate de întrebarea cercetării. `Google-Extended` este token de control robots, nu User-Agent HTTP separat.

Robots Exclusion Protocol este o convenție de crawling, nu mecanism de autorizare și nu dovedește indexarea.

## 7. Cum verificăm descoperirea sitemap-ului?

**Mai întâi colectăm directivele `Sitemap:` declarate în robots.txt și apoi încercăm obținerea fiecărui sitemap declarat; locațiile convenționale sunt doar probe de descoperire suplimentare.**

```bash
# Inspecție inițială; pentru extragere robustă se folosește un parser.
grep -i '^[[:space:]]*sitemap[[:space:]]*:' robots.body
# Exemplu pentru un sitemap declarat:
SITEMAP='https://example.com/sitemap.xml'
curl --silent --show-error --location \
  --dump-header sitemap.headers --output sitemap.body "$SITEMAP"
```

Raportăm `DECLARED`, `FOUND_AT_CONVENTIONAL_PATH`, `NOT_FOUND`, `UNAVAILABLE` ori `UNKNOWN` numai după regula documentată. Nu deducem că întregul site este descoperibil din prezența unui singur sitemap. Validarea XML completă, crawlingul integral al URL-urilor și identificarea orfanilor sunt excluse din Core, dacă planul de studiu nu le justifică.

## 8. Ce semnale ale documentului extragem din răspunsul brut?

**Din HTML-ul și headerele capturate identificăm semnale declarative elementare, fără a le confunda cu interpretarea sau selecția pe care o face un motor extern.**

Se urmăresc: `<title>`, `rel=canonical`, meta robots, `X-Robots-Tag`, `<html lang>` și prezența JSON-LD. Se păstrează valoarea și locația originală. Un document poate conține `X-Robots-Tag` deși în HTML nu există meta robots; verificăm ambele. Canonical-ul declarat nu este automat cel selectat de Google. Prezența JSON-LD nu demonstrează validitatea vocabularului sau utilizarea de către un model. Raw HTML nu echivalează cu rendered DOM.

În implementare, parsingul robust trebuie să suporte schimbări de ordine ale atributelor, ghilimele diferite și taguri pe mai multe linii. Exemplele `grep` din prototip nu reprezintă validatori HTML. Dacă extracția nu este sigură, păstrăm valoarea `UNKNOWN` cu motiv, nu inventăm `ABSENT`.

## 9. Ce înseamnă User-Agent Response Parity?

**Repetăm requestul GET cu același URL și parametri documentați, schimbând doar identitatea User-Agent declarată, apoi comparăm răspunsurile fără a pretinde că am autentificat crawlerul real.**

Profilul de lucru propus cuprinde clientul implicit și, după verificarea documentației oficiale actuale, reprezentanți pentru Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot. Versiunile exacte ale șirurilor User-Agent trebuie înghețate într-un manifest al rulării; un test `curl -A` nu poate simula infrastructura IP/WAF a furnizorului. Șirurile din exemple sunt orientative până la confirmarea versiunii scriptului.

```bash
curl --silent --show-error --location --compressed \
  --user-agent 'OAI-SearchBot' \
  --dump-header oai.headers --output oai.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nsize_download=%{size_download}\n' \
  "$TARGET" > oai.metrics
```

Se compară codurile, destinațiile, headerele relevante, dimensiunile și hash-urile. O diferență de hash semnalează doar că octeții sunt diferiți. Poate proveni din timestampuri, din conținut dinamic sau din protecții anti-bot. Nu devine automat dovadă de cloaking și nici de inaccesibilitate efectivă pentru furnizor.

## 10. Cum conservăm și indexăm dovezile?

**Fiecare artefact brut se păstrează nealterat, este legat de un run ID și primește metadatele și controlul de integritate cerute de AVL-200.**

Structură orientativă (repo-ul și schema AVL-200 au precedență):

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
# Exemplu macOS; lista trebuie generată fără auto-includerea manifestului de checksum.
find http robots sitemap agents -type f -print0 | sort -z | xargs -0 shasum -a 256 > integrity/sha256sums.txt
```

Nu se rescrie un artefact brut pentru a obține un raport mai lizibil. Câmpurile deterministe (dimensiune, hash, path) se calculează programatic; clasificările incerte sunt marcate ca atare și revizuite. Un hash verifică integritatea octeților **după** captură, nu autenticitatea sursei înaintea capturii. Dacă utilitarele locale diferă, scriptul trebuie să documenteze alternativa portabilă.

## 11. Cum se folosesc rezultatele între baseline și remăsurări?

**Aceeași versiune a protocolului și același set de URL-uri comparabile se folosesc la puncte de măsurare succesive, iar orice abatere se documentează explicit.**

Identificăm în manifest separat **faza** metodologică (`F0`, `F1` etc. conform documentelor active) și **punctul temporal** (`T0`, `T1`, `T2` etc.). Un `T1` nu se numește automat `F1`. Când există studii istorice care folosesc altă nomenclatură, se păstrează numele istorice și se explică mapping-ul, fără redenumirea retroactivă a dovezilor.

O schimbare a robots, canonicalului sau a răspunsului declarat pentru un agent reprezintă observație tehnică. O schimbare concomitentă a mențiunilor ori citărilor este măsurată separat. Succesiunea temporală singură nu demonstrează cauzalitatea.

## 12. Ce rămâne în afara protocolului minim?

**Core exclude implicit investigațiile de infrastructură și semantică profundă care nu sunt necesare fiecărei rulări AVL, dar permite extensii declarate când întrebarea de cercetare le cere.**

Exemple pentru investigații separate/posibil Ichnometria: diagnostic DNS/TLS extins, Core Web Vitals și performanță, validare completă a sitemap-ului, crawlingul complet al site-ului și identificarea URL-urilor orfane, rendering JavaScript, validare integrală Schema.org și grafuri de entități, autentificarea efectivă a roboților prin loguri/IP, comportamentul avansat WAF și accesibilitate ARIA. `llms.txt` poate fi capturat experimental, dar nu este o condiție normativă de vizibilitate AI demonstrată.

## 13. Ce nu poate demonstra protocolul?

**Protocolul nu poate demonstra singur indexarea efectivă, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.**

Nu prezenta răspunsul `200` drept indexare sau `403` pentru un User-Agent declarat drept dovadă că întreaga infrastructură a furnizorului este blocată. Nu atribui îmbunătățiri de vizibilitate unei intervenții exclusiv pe baza co-ocurenței temporale. Documentele AVL-202 și AVL-200 determină limitele concluziilor, politica dovezilor și transparența incertitudinilor.

## 14. Ce trebuie să livreze o execuție conformă?

**O execuție trebuie să livreze dovezi brute, un index de artefacte, un set de observații tehnice verificabile și un manifest care permite repetarea procesului.**

Livrabilele minime sunt: manifestul rulării, răspunsurile și headerele colectate, rezultatul verificărilor per element `TC-*`, clasificări `UNKNOWN`/`NOT_APPLICABLE`/erori păstrate distinct de `NO`, evidence index, hash-uri, excepții și versiunea protocolului/scriptului. Un rezumat interpretativ poate fi publicat separat doar dacă rămâne trasabil până la evidență. Schema exactă și identificatorii trebuie validați față de AVL-200 și de implementarea de referință locală.

---

## Referințe externe obligatorii pentru verificarea finală

Sursele de mai jos sunt puncte de control, nu dovadă că fiecare afirmație a fost verificată la data executării agentului. Pentru orice citare publică, verifică versiunea accesibilă și consemnează data verificării.

- IETF RFC 9309 — Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309
- IETF RFC 9110 — HTTP Semantics: https://www.rfc-editor.org/rfc/rfc9110
- Sitemaps Protocol: https://www.sitemaps.org/protocol.html
- Schema.org: https://schema.org/docs/datamodel.html
- Google Search Essentials: https://developers.google.com/search/docs/essentials/technical
- Google crawlers, incl. Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- Google canonicalization: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google robots meta and X-Robots-Tag: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Bing crawler documentation: https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Anthropic crawlers: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

## Checklist final obligatoriu pentru agent (nu publica acest checklist în pagină)

- [ ] Am consultat actualele `AVL-001`, `AVL-200`, `AVL-201`, `AVL-202`, registrul local și skill-ul de publicare metodologică.
- [ ] Am raportat diferența dintre eticheta provizorie `AVL-TECH-001` și identificatorul normativ ales/rezervat; nicio coliziune.
- [ ] Am reconciliat namespace-ul `AVL-MKT` și orice convenții noi găsite în repo; nu am inventat namespace-uri.
- [ ] Am păstrat `Evidence Capture Process` ca proces extern lanțului epistemic cu `Indexed Evidence` inclus.
- [ ] Am păstrat distinct `F` (fază) și `T` (punct temporal); niciun artefact istoric redenumit tacit.
- [ ] Am extras metadatele efective din implementarea reală, nu dintr-un șablon presupus.
- [ ] Am verificat la sursele oficiale afirmațiile privind roboți, directive, HTTP și sitemap.
- [ ] Am delimitat observațiile de interpretări și am formulat explicit ce nu poate demonstra protocolul.
- [ ] Am verificat comenzile și portabilitatea lor într-un test controlat; dacă nu le-am executat, am marcat statusul `NEVALIDAT EXPERIMENTAL`.
- [ ] Am documentat fiecare excepție și fiecare decizie deschisă; nu am publicat status `Activ` prematur.
- [ ] Am pregătit rezumatul modificărilor din registru/hub/legăturile normative și raportul final de verificare.

**Output așteptat de la agent:** draftul compatibil cu repo-ul, decizia justificată privind ID/slug/versiune, raportul de surse/fact-check, testele rulate, fișierele schimbate și orice blocaj ce cere decizie umană.
