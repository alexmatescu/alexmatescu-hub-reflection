---
document_id: "AVL-203"
title: "Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
subtitle: "Core Technical Web Measurement Protocol"
level: "C — Methodology"
version: "0.4.0"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-10-01"
date_published: "2026-10-02T16:29:00+03:00"
date_modified: "2026-10-23"
last_reviewed: "2026-10-01"
canonical: "https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
informative_dependencies:
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification"
  - "AVL-204 — Grila de interpretare a verificării tehnice"
keywords:
  - "AI Visibility"
  - "verificare tehnică"
  - "robots.txt"
  - "sitemap"
  - "User-Agent"
  - "HTTP"
  - "evidence capture"
  - "diagnostic tehnic"
  - "AVL-203"
---

# AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility

## Core Technical Web Measurement Protocol

> **Principiu:** documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI. Diagnosticul și recomandările se formulează separat, după o grilă publică, și rămân trasabile până la observațiile pe care se sprijină.

---

## Controlul documentului

AVL-203 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation, propus ca protocol în ramura Core Methodology descrisă de AVL-202.

Versiunea curentă, **0.4.0**, este un **draft public pentru revizuire** și nu este activă. Documentul este publicat pentru transparență, ca regula să fie vizibilă și datată înainte de activare. Cerințele de conformitate sunt formulate ca cerințe identificate `AVL203-REQ-*`; implementarea de referință nu este încă validată. Deciziile rămase deschise înainte de activare sunt enumerate în §19.

Din versiunea 0.4.0, protocolul acoperă și trecerea de la observații la diagnostic și recomandări (§12), pentru că verificarea tehnică este folosită și în evaluări care livrează un diagnostic, de exemplu auditul AI Visibility. Regulile după care observațiile devin diagnostic sunt publicate separat, în grila AVL-204.

Identificatorul AVL-203 a fost alocat la 1 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut și a corpusului, și confirmat de Alex Matescu. Eticheta de lucru folosită anterior pentru acest draft, „AVL-TECH-001”, nu este un identificator normativ și nu introduce o familie `AVL-TECH-*`.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-203 |
| Nivel | C — Methodology |
| Versiune | 0.4.0 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 1 octombrie 2026 |
| Data publicării | 2 octombrie 2026 |
| Ultima verificare | 1 octombrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica |
| Dependențe normative | AVL-001; AVL-202; AVL-200 |
| Relație cu AVL-201 | componentă reutilizabilă la baseline și remăsurări; nu înlocuiește AVL-201 |
| Grilă de interpretare | AVL-204 — Grila de interpretare a verificării tehnice (draft) |

În acest document, termenii **TREBUIE**, **NU TREBUIE**, **ESTE OBLIGATORIU**, **AR TREBUI**, **NU AR TREBUI** și **POATE** sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:

- **TREBUIE / NU TREBUIE** — condiție obligatorie pentru conformitate;
- **AR TREBUI / NU AR TREBUI** — recomandare puternică; abaterea este permisă numai cu justificare documentată;
- **POATE** — opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate `AVL203-REQ-*`, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, cerințele descriu regula propusă pentru versiunea 1.0.0; o rulare făcută acum le poate respecta, dar nu poate fi declarată „conformă AVL-203 1.0.0”.

---

# 1. Care este scopul protocolului?

**Protocolul definește un set tehnic minim, transversal și repetabil pentru documentarea condițiilor observabile de acces, descoperire și prezentare machine-readable a unui site web.** El sprijină interpretarea ulterioară a măsurătorilor Search/AI Search, dar nu reprezintă un audit complet de performanță, securitate, SEO sau vizibilitate AI.

Acest protocol se aplică site-urilor și paginilor selectate într-un plan de măsurare declarat. O singură pagină nu reprezintă automat întregul domeniu. Lista URL-urilor testate, motivele alegerii și limitele eșantionului se declară înaintea rulării, în fișa experimentului sau în documentul proiectului.

> **AVL203-REQ-001 — Lista URL-urilor testate, motivul alegerii fiecăruia și limitele eșantionului TREBUIE declarate înaintea primului request al unei rulări din seria de măsurare.**

Protocolul conservă și rezultate negative, erori, redirecturi neașteptate, date indisponibile și abateri. Absența unei dovezi nu se transformă într-un `NO` nejustificat (AVL-200 §6).

> **AVL203-REQ-002 — Rezultatele negative, erorile, redirecturile neașteptate, datele indisponibile și abaterile TREBUIE conservate și raportate.**

> **AVL203-REQ-003 — Absența unei dovezi NU TREBUIE raportată ca `NO`; o valoare care nu poate fi stabilită TREBUIE raportată ca `UNKNOWN`, `NOT_APPLICABLE` sau eroare, distinct de `NO`.**

## 1.1. Compoziția planului de măsurare

Numărul URL-urilor testate depinde de scopul evaluării, de entitate și de activitatea ei; nu este fix. Compoziția eșantionului urmează însă reguli declarate, pentru ca selecția paginilor să nu poată fi ajustată după rezultate.

Planul declară tipul entității (de exemplu organizație cu servicii, magazin online, afacere locală, profesionist independent) și include, pentru fiecare categorie de pagină de mai jos, URL-ul ales sau motivul pentru care categoria nu se aplică:

- pagina principală a originului;
- pagina canonică despre entitate (de exemplu „Despre”, „Despre noi” sau pagina de profil);
- pagina de contact sau o altă pagină care conține datele de identitate ale entității (categorie obligatorie, vezi mai jos);
- paginile principale de servicii, produse sau activitate, în număr declarat;
- paginile pe care entitatea le desemnează drept referință despre ea (de exemplu hub-uri sau pagini-pilon).

Categoriile suplimentare pentru fiecare tip de entitate sunt definite în AVL-204. O categorie care nu există pe site se notează `NOT_APPLICABLE`, cu motiv; nu se omite.

Pagina de contact sau de date de identitate face excepție: este obligatorie în orice plan și nu se notează `NOT_APPLICABLE`. Ea arată cine răspunde de site și cum poate fi identificată entitatea, deci este necesară pentru transparența evaluării. Dacă site-ul nu are nicio pagină cu datele de identitate ale entității, planul înregistrează absența ei, iar absența se raportează ca rezultat al evaluării, nu ca limită a eșantionului.

Planul mai declară, înainte de rulare, textele-cheie căutate de TC-08 pentru fiecare URL (§8.1) și politica de acces pe care entitatea o intenționează pentru crawlere (de exemplu permiterea crawlerelor de căutare și blocarea celor de antrenare), necesară diagnosticului din §12.

> **AVL203-REQ-029 — Planul de măsurare TREBUIE să declare tipul entității și să includă, pentru fiecare categorie obligatorie de pagină, fie URL-ul ales, fie motivul pentru care categoria nu se aplică.**

> **AVL203-REQ-030 — Numărul URL-urilor POATE varia între evaluări, dar compoziția eșantionului, textele-cheie pentru TC-08 și politica de acces intenționată TREBUIE fixate înaintea primului request și NU TREBUIE modificate după observarea rezultatelor; o completare ulterioară a planului TREBUIE tratată ca rulare nouă sau ca abatere documentată.**

> **AVL203-REQ-042 — Planul de măsurare TREBUIE să includă pagina de contact sau o altă pagină care conține datele de identitate ale entității; această categorie NU TREBUIE notată `NOT_APPLICABLE`, iar absența ei de pe site TREBUIE înregistrată în plan și raportată.**

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

> **AVL203-REQ-004 — Captura, indexarea, observația, măsurarea și interpretarea NU TREBUIE contopite într-o singură judecată automată.**

---

# 3. Ce intră în setul minim de verificări?

**Nucleul măsoară identitatea rulării, accesibilitatea HTTP, redirecturile, regulile robots, descoperirea sitemap-ului, semnalele documentului, paritatea răspunsurilor declarate pentru User-Agent-uri, integritatea artefactelor și prezența conținutului important în HTML-ul brut.**

| Check ID intern | Aspect | Artefact minim | Observație permisă |
|---|---|---|---|
| `TC-00` | Contextul rulării | run manifest | condițiile în care a fost efectuată captura |
| `TC-01` | HTTP GET / URL final | response headers, body, metrics | cod HTTP, URL final, număr redirecturi, tip, dimensiune |
| `TC-02` | Variante de host și protocol | responses pentru variante | convergența/divergența variantelor |
| `TC-03` | `robots.txt` | headere + corp original | reguli declarate; politică aplicabilă numai după interpretare corectă |
| `TC-04` | Sitemap | declarații + sitemap-uri capturate | declarație, accesibilitate, tip de document |
| `TC-05` | Semnale raw HTML | HTML + headers | title, canonical, meta robots, X-Robots-Tag, lang, prezența JSON-LD |
| `TC-06` | User-Agent Response Parity | dublă captură a clientului de referință + capturi per agent | variabilitatea intrinsecă a răspunsului; diferențe de status, URL, headers, conținut și hash |
| `TC-07` | Integritate | evidence index + checksum manifest | identificarea și verificarea artefactelor |
| `TC-08` | Conținut important în raw HTML | HTML-ul răspunsului final + textele-cheie declarate în plan | prezența fiecărui text-cheie în HTML-ul brut, pe zone, cu locația |

Aceste ID-uri (`TC-*`) sunt identificatori **interni ai verificărilor**, nu identificatori `AVL-NNN` ai documentelor și nu identificatori de instanță. Orice modificare a definițiilor lor care afectează comparabilitatea impune versionarea protocolului (AVL-200 §19).

> **AVL203-REQ-005 — O modificare a definiției unei verificări `TC-*` care afectează comparabilitatea rezultatelor TREBUIE să producă o versiune nouă a protocolului.**

---

# 4. Cum identificăm o rulare reproductibilă?

**Înaintea oricărui request se înregistrează exact ținta, mediul, instrumentul și configurația, astfel încât alte rulări să poată reproduce procedeul, chiar dacă serverul răspunde diferit.**

Câmpuri minime: run ID unic, entitate/domeniu, URL exact, origin, lista URL-urilor testate, data/ora UTC de început și de final, versiunea protocolului, versiunea scriptului, `curl --version`, mediul de executare, user-agent-urile efective și versiunea manifestului User-Agent (§9), timeouts, redirect policy, compresie, codul de ieșire `curl` al fiecărui request, eventuale erori și abateri. Dacă este relevant și disponibil, se înregistrează mediul de rețea/regiunea, fără a publica date personale.

> **AVL203-REQ-006 — Înaintea primului request, rularea TREBUIE să înregistreze în manifest câmpurile minime de mai sus; câmpurile care nu pot fi stabilite TREBUIE marcate explicit.**

```bash
# Exemplu de captură a mediului; scriptul final trebuie să salveze automat outputul.
date -u +'%Y-%m-%dT%H:%M:%SZ'
curl --version
```

Tokenurile, cookie-urile, credențialele și datele sensibile nu trebuie publicate în evidența brută accesibilă publicului. Redactarea se face prin copii derivate; originalele se protejează în regimul prevăzut de AVL-200 §18.

> **AVL203-REQ-007 — Tokenurile, cookie-urile, credențialele și alte date sensibile NU TREBUIE publicate în evidența brută accesibilă publicului; redactarea TREBUIE făcută prin copii derivate, cu originalele protejate conform AVL-200 §18.**

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
echo "curl_exit=$?" >> page.metrics
```

Codul de ieșire `curl` se înregistrează pentru fiecare request. Cu `--silent`, o eroare de rețea, DNS sau TLS nu produce un status HTTP (`http_code=000`), iar fără codul de ieșire eroarea nu rămâne identificabilă în dovezi.

> **AVL203-REQ-008 — Pentru fiecare request, rularea TREBUIE să păstreze separat headerele și corpul răspunsului și să înregistreze statusul, URL-ul final, numărul de redirecturi, tipul, dimensiunea și codul de ieșire al clientului HTTP.**

Cu `--location`, fișierul `page.headers` conține headerele tuturor răspunsurilor din lanțul de redirecturi, în ordine, nu doar pe ale răspunsului final. Interpretarea trebuie să identifice explicit blocul răspunsului final.

> **AVL203-REQ-009 — Când lanțul de redirecturi este urmărit, observațiile despre răspunsul final TREBUIE să se refere la blocul de headere al răspunsului final, identificat explicit.**

O matrice de patru variante (`http`/`https`, `www`/non-`www`) se aplică originului unde variantele sunt relevante, fără a presupune că fiecare domeniu folosește sau controlează ambele hostname-uri. Se păstrează destinația și eventualele erori (inclusiv TLS/DNS), fără a le ascunde prin `--insecure`.

> **AVL203-REQ-010 — Erorile TLS sau DNS NU TREBUIE ascunse prin dezactivarea verificării certificatelor; ele TREBUIE păstrate ca observații.**

`HEAD` poate fi folosit auxiliar, dar nu înlocuiește GET: RFC 9110 §9.3.2 permite serverului să omită în răspunsul la HEAD headerele a căror valoare se determină numai la generarea conținutului.

> **AVL203-REQ-011 — Verificările TC-01, TC-02 și TC-06 TREBUIE făcute cu GET; HEAD POATE fi folosit doar auxiliar.**

`HTTP 200` reprezintă un răspuns reușit al requestului, nu un diagnostic de indexare. `403` indică faptul că serverul a înțeles requestul, dar refuză să-l onoreze (RFC 9110 §15.5.4); nu dovedește singur că un furnizor AI nu poate accesa resursa.

> **AVL203-REQ-012 — Un răspuns `200` NU TREBUIE prezentat drept indexare, iar un `403` pentru un User-Agent declarat NU TREBUIE prezentat drept dovadă că infrastructura furnizorului este blocată.**

---

# 6. Ce verificăm în robots.txt și de ce?

**Capturăm fișierul robots de la originul exact și evaluăm separat regulile declarate pentru fiecare crawler relevant, fără a transforma un simplu `grep` într-o evaluare completă a accesului.**

```bash
ORIGIN='https://example.com'
curl --silent --show-error --location \
  --dump-header robots.headers --output robots.body \
  "$ORIGIN/robots.txt"
```

Se documentează statusul, URL-ul efectiv, redirecturile, corpul și grupurile `User-agent`, `Allow`, `Disallow`, precum și declarațiile `Sitemap`. Interpretarea unei reguli pentru un URL cere aplicarea corectă a RFC 9309 și a extensiilor furnizorului: selecția grupului specific produsului înaintea grupului `*`, combinarea grupurilor care corespund aceluiași token și regula celei mai specifice potriviri între `Allow` și `Disallow` (RFC 9309 §2.2). `grep` este doar inspecție preliminară, nu aplicare a RFC 9309.

Regulile RFC 9309 se pot aplica în două moduri: cu un parser conform sau manual. Aplicarea manuală se documentează pas cu pas, pentru fiecare pereche URL–crawler: grupurile `User-agent` care corespund tokenului crawlerului (sau grupul `*`, dacă niciunul nu corespunde), regulile combinate din aceste grupuri, regula `Allow` sau `Disallow` cu potrivirea cea mai specifică și rezultatul. Documentarea face aplicarea verificabilă de altcineva pe baza aceluiași `robots.body`. Dacă politica nu este determinată în niciunul dintre cele două moduri, rezultatul rămâne `NEDETERMINAT`, nu `ALLOW` implicit.

> **AVL203-REQ-013 — Retrasă în versiunea 0.4.0.** Text anterior: „Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire); în lipsa unui parser conform, rezultatul TREBUIE raportat `NEDETERMINAT`.” Înlocuită de AVL203-REQ-041.

> **AVL203-REQ-041 — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire), fie printr-un parser conform, fie prin aplicare manuală documentată pas cu pas pentru fiecare pereche URL–crawler; metoda folosită TREBUIE înregistrată în observații, iar o politică nedeterminată prin niciuna dintre cele două metode TREBUIE raportată `NEDETERMINAT`.**

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

Căile convenționale verificate sunt `/sitemap.xml` și `/sitemap_index.xml`, la originul exact. Ele se capturează și atunci când robots.txt declară sitemap-uri, ca probe suplimentare; nu înlocuiesc declarația.

Statusul se atribuie după următoarea regulă:

| Status | Condiție |
|---|---|
| `DECLARED` | robots.txt declară cel puțin un `Sitemap:` și cel puțin unul dintre sitemap-urile declarate răspunde `2xx` |
| `UNAVAILABLE` | există sitemap declarat, dar niciunul nu răspunde `2xx`; sau, fără declarație, căile convenționale răspund cu erori de captură ori `5xx` |
| `FOUND_AT_CONVENTIONAL_PATH` | nicio declarație, dar `/sitemap.xml` sau `/sitemap_index.xml` răspunde `2xx` |
| `NOT_FOUND` | nicio declarație și toate căile convenționale răspund `404` sau `410` |
| `UNKNOWN` | robots.txt nu a putut fi capturat, deci prezența sau absența declarației nu poate fi stabilită |

Statusul descrie declarația și accesibilitatea sitemap-ului, nu validitatea lui. Nu deducem că întregul site este descoperibil din prezența unui singur sitemap. Validarea XML completă, crawlingul integral al URL-urilor și identificarea paginilor orfane sunt excluse din Core, dacă planul de studiu nu le justifică.

> **AVL203-REQ-014 — Statusul TC-04 TREBUIE atribuit după regula din tabelul de mai sus.**

> **AVL203-REQ-015 — Prezența sau accesibilitatea unui sitemap NU TREBUIE prezentată drept dovadă că întregul site este descoperibil.**

---

# 8. Ce semnale ale documentului extragem din răspunsul brut?

**Din HTML-ul și headerele capturate identificăm semnale declarative elementare, fără a le confunda cu interpretarea sau selecția pe care o face un motor extern.**

Se urmăresc: `<title>`, `rel=canonical`, meta robots (inclusiv variantele adresate unui crawler, `name="googlebot"` și `name="bingbot"`), `X-Robots-Tag`, `<html lang>`, prezența JSON-LD și dacă fiecare bloc JSON-LD este JSON valid sintactic. Se păstrează valoarea și locația originală (linia din documentul capturat).

Validitatea sintactică JSON a unui bloc este o observație despre octeții capturați; nu este o validare Schema.org și nu spune nimic despre utilizarea blocului de către un motor sau model.

Un document poate conține `X-Robots-Tag` deși în HTML nu există meta robots; verificăm ambele. Google documentează că orice regulă care poate fi folosită într-un meta robots poate fi exprimată și ca `X-Robots-Tag`, și că aceste reguli sunt descoperite doar dacă URL-ul este accesat, nu și atunci când robots.txt blochează crawlingul.

Canonicalul declarat nu este automat cel selectat de Google: Google descrie metodele de declarare a canonicalului drept preferințe, nu obligații. Prezența JSON-LD nu demonstrează validitatea vocabularului sau utilizarea lui de către un model. Raw HTML nu echivalează cu DOM-ul randat.

> **AVL203-REQ-016 — Semnalele TC-05 TREBUIE extrase din raw HTML-ul și headerele răspunsului final, cu locația originală, și NU TREBUIE prezentate drept DOM randat, canonical selectat de un motor sau validare Schema.org.**

În implementare, parsingul robust trebuie să suporte schimbări de ordine ale atributelor, ghilimele diferite și taguri pe mai multe linii. Exemplele `grep` nu sunt validatori HTML. Dacă extracția nu este sigură, păstrăm valoarea `UNKNOWN` cu motiv, nu inventăm `ABSENT`.

> **AVL203-REQ-017 — Un semnal TC-05 a cărui extracție nu este sigură TREBUIE raportat `UNKNOWN`, cu motiv, și NU TREBUIE raportat `ABSENT`.**

## 8.1. Conținutul important în HTML-ul brut (TC-08)

**Verificăm dacă textele-cheie declarate în plan pentru fiecare URL se găsesc în HTML-ul brut al răspunsului final, adică fără executarea JavaScript.**

Unele site-uri livrează conținutul principal numai după randarea paginii în browser. Un client care citește doar răspunsul HTTP nu vede acel conținut. TC-08 observă doar ce conțin octeții capturați la TC-01; nu face un request separat, nu randează pagina și nu afirmă ce vede un anumit crawler.

Textele-cheie se aleg înainte de rulare (§1.1): de regulă numele entității, descrierea activității, serviciile sau produsele principale, localitatea și datele de identificare relevante pentru pagina respectivă. Căutarea folosește reguli de normalizare declarate în manifest (de exemplu decodarea entităților HTML, comprimarea spațiilor, comparația fără diferențe de majuscule) și se face separat pe zone: textul din corpul documentului, în afara scripturilor și a stilurilor; atributele (de exemplu `alt`, `title`); blocurile JSON-LD; meta-tagurile. Se păstrează locația fiecărei potriviri (linia din documentul capturat și zona).

Rezultatul pentru fiecare text-cheie este unul dintre:

| Status | Condiție |
|---|---|
| `PRESENT_IN_BODY` | textul apare în corpul documentului, în afara scripturilor și a stilurilor |
| `PRESENT_IN_METADATA_ONLY` | textul apare numai în JSON-LD, în meta-taguri sau în atribute |
| `ABSENT_FROM_RAW_HTML` | textul nu apare în nicio zonă a HTML-ului brut |
| `UNKNOWN` | răspunsul nu este HTML, corpul lipsește, captura a eșuat sau extracția nu este sigură |

`ABSENT_FROM_RAW_HTML` descrie octeții capturați. Nu dovedește că textul lipsește din pagina randată și nici că un motor de căutare sau un sistem AI nu îl poate obține.

> **AVL203-REQ-031 — Textele-cheie pentru TC-08 TREBUIE declarate în planul de măsurare înaintea rulării, iar căutarea lor TREBUIE să aplice regulile de normalizare înregistrate în manifestul rulării.**

> **AVL203-REQ-032 — Rezultatul TC-08 TREBUIE raportat pentru fiecare text-cheie și fiecare zonă, cu locația potrivirii; un rezultat `ABSENT_FROM_RAW_HTML` NU TREBUIE prezentat drept absența textului din pagina randată sau drept imposibilitatea unui motor ori a unui sistem AI de a-l obține.**

---

# 9. Ce înseamnă User-Agent Response Parity?

**Repetăm requestul GET cu același URL și aceiași parametri documentați, schimbând doar identitatea User-Agent declarată, apoi comparăm răspunsurile fără a pretinde că am autentificat crawlerul real.**

Profilul de lucru cuprinde clientul implicit și reprezentanți pentru Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot. Șirurile User-Agent publicate de furnizori sunt șiruri complete care conțin tokenul produsului (de exemplu `… compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`), nu doar tokenul. Un test `curl --user-agent` nu poate simula infrastructura IP/WAF a furnizorului; exemplul de mai jos folosește doar tokenul și este orientativ.

### Manifestul User-Agent

Șirurile folosite se îngheață într-un manifest versionat, separat de rulare, iar fiecare rulare înregistrează versiunea manifestului aplicat. Fiecare șir are un status:

| Status | Sens |
|---|---|
| `OFICIAL` | șir complet copiat din documentația furnizorului la data înghețării |
| `OFICIAL_CU_VERSIUNE_ALEASA` | șir oficial care conține un placeholder de versiune (ex. versiunea Chrome din șirul Googlebot), înlocuit de operator și înregistrat în manifestul rulării |
| `DOAR_TOKEN` | furnizorul nu publică un șir complet; se trimite doar tokenul |
| `NECONFIRMAT` | șir complet care nu a putut fi citit dintr-o sursă oficială la data înghețării |

La înghețarea manifestului v0.1.0 (2 octombrie 2026): OpenAI și Perplexity publică șiruri complete pentru `OAI-SearchBot` și `PerplexityBot`; Google publică șirul Googlebot cu placeholder de versiune Chrome; Anthropic descrie `Claude-SearchBot`, dar nu publică un șir complet; șirul complet `bingbot` nu a putut fi confirmat din pagina Bing (§19.6). O schimbare a manifestului înseamnă o versiune nouă a lui.

> **AVL203-REQ-018 — Șirurile User-Agent folosite la TC-06 TREBUIE luate dintr-un manifest versionat, iar rularea TREBUIE să înregistreze versiunea manifestului aplicat.**

### Dubla captură a clientului de referință

Înaintea comparației între User-Agent-uri, același URL se capturează **de cel puțin două ori cu clientul de referință**, cu aceiași parametri. Comparația dintre aceste capturi stabilește **variabilitatea intrinsecă** a răspunsului:

- dacă capturile clientului de referință sunt identice (status, URL final, headere relevante, dimensiune și hash), diferențele observate pentru un User-Agent declarat pot fi raportate ca diferențe asociate acelei cereri;
- dacă diferă, răspunsul variază de la un request la altul (de exemplu prin conținut dinamic, timestampuri sau identificatori generați per request), iar diferențele de dimensiune sau hash dintre User-Agent-uri **nu se atribuie User-Agent-ului**. Se raportează doar diferențele de status, URL final și headere relevante.

Dubla captură este obligatorie pentru TC-06. O rulare fără ea raportează comparația de conținut ca `UNKNOWN`.

> **AVL203-REQ-019 — Pentru TC-06, fiecare URL TREBUIE capturat de cel puțin două ori cu clientul de referință, cu aceiași parametri; fără dubla captură, comparația de conținut TREBUIE raportată `UNKNOWN`.**

> **AVL203-REQ-020 — Când capturile clientului de referință diferă, diferențele de dimensiune sau hash dintre User-Agent-uri NU TREBUIE atribuite User-Agent-ului.**

```bash
curl --silent --show-error --location --compressed \
  --user-agent 'OAI-SearchBot' \
  --dump-header oai.headers --output oai.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nsize_download=%{size_download}\n' \
  "$TARGET" > oai.metrics
```

Se compară codurile, destinațiile, headerele relevante, dimensiunile și hash-urile, ținând cont de variabilitatea intrinsecă stabilită mai sus. O diferență de hash semnalează doar că octeții sunt diferiți. Ea poate proveni din timestampuri, din conținut dinamic sau din protecții anti-bot. Nu devine automat dovadă de cloaking și nici de inaccesibilitate efectivă pentru furnizor.

> **AVL203-REQ-021 — O diferență între răspunsurile pentru User-Agent-uri declarate NU TREBUIE prezentată drept cloaking sau drept accesul efectiv al crawlerului furnizorului.**

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
  diagnostic.*          # numai când rularea stă la baza unui diagnostic (§12)
  exceptions.md
```

```bash
# Exemplu macOS; lista include manifestul rulării, dar nu și fișierul de checksum însuși.
find manifest http robots sitemap agents -type f -print0 | sort -z | xargs -0 shasum -a 256 > integrity/sha256sums.txt
# Verificare ulterioară:
shasum -a 256 -c integrity/sha256sums.txt
```

Manifestul rulării (`manifest/`) intră în lista de checksum-uri, pentru că descrie condițiile capturii și trebuie protejat la fel ca artefactele. Fișierul `integrity/sha256sums.txt` nu se include în propria listă.

> **AVL203-REQ-022 — Rularea TREBUIE să genereze un manifest de checksum SHA-256 care acoperă `manifest/` și artefactele brute, fără fișierul de checksum însuși, să îl verifice și să documenteze utilitarul folosit.**

Pe sisteme Linux, echivalentul uzual este `sha256sum`; scriptul trebuie să documenteze utilitarul efectiv folosit.

Nu se rescrie un artefact brut pentru a obține un raport mai lizibil (AVL-200 §8.1). Câmpurile deterministe (dimensiune, hash, path) se calculează programatic; clasificările incerte sunt marcate ca atare și revizuite (AVL-200 §5, §16). Un hash verifică integritatea octeților **după** captură, nu autenticitatea sursei înaintea capturii (AVL-200 §10).

> **AVL203-REQ-023 — Un artefact brut NU TREBUIE modificat după captură, iar fiecare artefact TREBUIE legat de run ID-ul rulării care l-a produs.**

---

# 11. Cum se folosesc rezultatele între baseline și remăsurări?

**Aceeași versiune a protocolului și același set de URL-uri comparabile se folosesc la puncte de măsurare succesive, iar orice abatere se documentează explicit.**

Manifestul identifică fiecare rulare prin poziția ei în seria de măsurare: **`T0`** este baseline-ul, iar rulările ulterioare sunt **`F1`, `F2` … `Fn`**, în ordinea executării. Eticheta unei rulări se atribuie la înregistrarea ei și nu se schimbă ulterior.

> **AVL203-REQ-024 — Rulările aceleiași serii TREBUIE să folosească aceeași versiune a protocolului, același manifest User-Agent și același set de URL-uri; orice abatere TREBUIE documentată.**

> **AVL203-REQ-025 — Eticheta unei rulări (`T0`, `F1` … `Fn` sau `TEST`) TREBUIE atribuită la înregistrare și NU TREBUIE schimbată ulterior.**

Rulările de probă (de exemplu, verificarea unei implementări sau a unui mediu nou) primesc eticheta **`TEST`**. Ele nu fac parte din nicio serie de măsurare, nu ocupă o poziție `T0`/`Fn` și nu se compară cu rulările unei serii. Dovezile lor se păstrează separat și nu susțin concluzii publicate. Când studii istorice folosesc altă nomenclatură, se păstrează numele istorice și se explică mapping-ul, fără redenumirea retroactivă a dovezilor (AVL-200 §7.3).

> **AVL203-REQ-026 — O rulare `TEST` NU TREBUIE comparată cu rulările unei serii de măsurare și NU TREBUIE folosită pentru a susține o concluzie publicată.**

O schimbare a robots.txt, a canonicalului sau a răspunsului declarat pentru un agent reprezintă o observație tehnică. O schimbare concomitentă a mențiunilor ori a citărilor se măsoară separat. Succesiunea temporală singură nu demonstrează cauzalitatea.

> **AVL203-REQ-027 — O schimbare tehnică observată NU TREBUIE prezentată drept cauză a unei schimbări de vizibilitate pe baza succesiunii temporale.**

---

# 12. Cum trecem de la observații la diagnostic și recomandări?

**Diagnosticul și recomandările formează un strat separat de interpretare, construit peste observațiile `TC-*` după o grilă publică și versionată. Ele nu modifică observațiile și nu le înlocuiesc.**

Protocolul este folosit și în evaluări care livrează un diagnostic și recomandări, de exemplu auditul AI Visibility. În acest caz, după captură și observație urmează interpretarea: ce problemă indică observațiile, cât de sigură este concluzia și ce poate face entitatea evaluată. Lanțul AVL-200 rămâne intact: interpretarea se sprijină pe observații, iar observațiile pe dovezi conservate (AVL-200 §3, §15).

Grila care transformă observațiile în diagnostic este [AVL-204](/lab/metodologie/grila-interpretare-verificare-tehnica). Ea fixează dinainte, pentru fiecare zonă verificată, regulile de diagnostic, starea care rezultă și criteriile de prioritizare, și se aplică identic oricărei entități evaluate.

## 12.1. Stările diagnosticului

Fiecare constatare are una dintre următoarele stări:

| Stare | Sens |
|---|---|
| **Problemă confirmată** | observațiile arată direct problema, în condițiile testate |
| **Problemă posibilă** | observațiile sunt compatibile cu o problemă, dar nu o pot confirma singure |
| **Nu poate fi stabilit** | datele disponibile nu permit o concluzie |
| **Nicio problemă observată** | în condițiile testate, observațiile nu indică o problemă după regulile grilei |

„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI.

## 12.2. Recomandările

Fiecare recomandare cuprinde patru elemente:

1. **observația sau observațiile care o susțin**, prin identificatorii lor din rulare;
2. **gradul de certitudine** al diagnosticului (starea din §12.1);
3. **elementul asupra căruia poate interveni** entitatea evaluată (de exemplu o regulă din `robots.txt`, un canonical, un redirect, conținutul livrat în HTML);
4. **modul de verificare ulterioară**, adică ce verificare `TC-*` ar arăta, la o remăsurare (`F1` … `Fn`), că intervenția a produs schimbarea tehnică urmărită.

Recomandările se prioritizează după criteriile din AVL-204: impact potențial, efort, dependențe și posibilitatea verificării ulterioare. Prioritatea este o judecată de interpretare și se declară ca atare.

O recomandare tehnică promite cel mult o schimbare tehnică verificabilă la remăsurare, nu un efect asupra vizibilității, citării sau recomandării într-un răspuns AI (§11).

> **AVL203-REQ-033 — Diagnosticul și recomandările TREBUIE formulate într-un strat separat de observații, după o grilă de interpretare publicată și versionată, iar versiunea grilei TREBUIE înregistrată în manifestul rulării și în raport.**

> **AVL203-REQ-034 — Fiecare constatare de diagnostic TREBUIE să aibă una dintre stările din §12.1 și TREBUIE să trimită la observațiile care o susțin.**

> **AVL203-REQ-035 — Fiecare recomandare TREBUIE să cuprindă observația-suport, gradul de certitudine, elementul asupra căruia se poate interveni și modul de verificare ulterioară.**

> **AVL203-REQ-036 — Grila de interpretare TREBUIE fixată înaintea rulării și aplicată identic tuturor entităților evaluate; o regulă modificată după observarea rezultatelor TREBUIE să producă o versiune nouă a grilei, iar rezultatele deja raportate NU TREBUIE reinterpretate fără declararea versiunii folosite.**

> **AVL203-REQ-037 — Diagnosticul și recomandările NU TREBUIE să conțină afirmațiile excluse de AVL203-REQ-012, AVL203-REQ-015, AVL203-REQ-016, AVL203-REQ-021, AVL203-REQ-027 și AVL203-REQ-032 și NU TREBUIE să promită un efect asupra vizibilității, citării sau recomandării într-un răspuns AI.**

---

# 13. Ce rămâne în afara protocolului minim?

**Core exclude implicit investigațiile de infrastructură și semantică profundă care nu sunt necesare fiecărei rulări AVL, dar permite extensii declarate când întrebarea de cercetare le cere.**

Exemple de investigații separate: diagnostic DNS/TLS extins, Core Web Vitals și performanță, validare completă a sitemap-ului, crawlingul complet al site-ului și identificarea URL-urilor orfane, rendering JavaScript, validare integrală Schema.org și grafuri de entități, autentificarea efectivă a roboților prin loguri/IP, comportamentul avansat al WAF-urilor și accesibilitatea ARIA. `llms.txt` poate fi capturat experimental, dar nu este o condiție normativă de vizibilitate AI demonstrată.

## 13.1. Extensii declarate

Când entitatea evaluată oferă acces autorizat, evaluarea POATE fi completată cu date din afara protocolului minim: rapoarte din instrumente pentru webmasteri (de exemplu Google Search Console sau Bing Webmaster Tools), loguri de server sau configurații ale serviciilor CDN și WAF. Aceste date nu fac parte din Core și nu se compară cu rulări care nu le au.

> **AVL203-REQ-038 — O extensie din afara protocolului minim TREBUIE declarată în planul de măsurare înaintea folosirii ei (sursa, perioada acoperită, modul de acces și cine a furnizat datele), iar dovezile ei TREBUIE marcate separat de artefactele `TC-*` și protejate conform AVL-200 §18 când nu sunt publice.**

> **AVL203-REQ-039 — O constatare care se sprijină pe o extensie TREBUIE să indice extensia; absența unei extensii dintr-o rulare NU TREBUIE raportată drept absența problemei pe care extensia ar fi putut-o arăta.**

---

# 14. Ce nu poate demonstra protocolul?

**Protocolul nu poate demonstra singur indexarea efectivă, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.**

Răspunsul `200` nu se prezintă drept indexare, iar un `403` pentru un User-Agent declarat nu se prezintă drept dovadă că întreaga infrastructură a furnizorului este blocată. Îmbunătățirile de vizibilitate nu se atribuie unei intervenții exclusiv pe baza co-ocurenței temporale. AVL-202 și AVL-200 (§15) determină limitele concluziilor, politica dovezilor și transparența incertitudinilor.

---

# 15. Ce trebuie să livreze o execuție conformă?

**O execuție trebuie să livreze dovezi brute, un index de artefacte, un set de observații tehnice verificabile și un manifest care permite repetarea procesului.**

Livrabilele minime sunt: manifestul rulării (inclusiv versiunea manifestului User-Agent), răspunsurile și headerele colectate, codurile de ieșire `curl`, rezultatul verificărilor per element `TC-*` (inclusiv variabilitatea intrinsecă de la TC-06), clasificările `UNKNOWN`/`NOT_APPLICABLE`/erori păstrate distinct de `NO`, evidence index, hash-uri, excepții și versiunea protocolului/scriptului. Un rezumat interpretativ poate fi publicat separat doar dacă rămâne trasabil până la evidență. Schema exactă și identificatorii se validează față de AVL-200 și față de implementarea de referință.

> **AVL203-REQ-028 — O execuție conformă TREBUIE să livreze toate livrabilele minime de mai sus.**

## 15.1. Raportul unei evaluări cu diagnostic

Când rularea stă la baza unui diagnostic (§12), livrabilele de mai sus se completează cu un raport pentru entitatea evaluată. Raportul cuprinde: rezumatul constatărilor; planul de măsurare (URL-urile, motivul alegerii lor, textele-cheie și politica de acces intenționată); observațiile pe zone; diagnosticul pe zone, cu stările din §12.1; recomandările prioritizate; limitele evaluării (§14); trasabilitatea (run ID, eticheta rulării, versiunea protocolului, a grilei și a scriptului, hash-ul manifestului de checksum). Formatul raportului (document, PDF) nu este normat. Dovezile unei evaluări private nu devin publice prin acest protocol.

> **AVL203-REQ-040 — Raportul unei evaluări cu diagnostic TREBUIE să separe vizibil observațiile, diagnosticul și recomandările, să includă limitele din §14 și să permită identificarea rulării, a versiunii protocolului, a versiunii grilei și a manifestului de checksum.**

---

# 16. Checklist de conformitate

Fiecare rulare declarată conformă verifică explicit cerințele:

- [ ] **AVL203-REQ-001** — Lista URL-urilor testate, motivul alegerii fiecăruia și limitele eșantionului TREBUIE declarate înaintea primului request al unei rulări din seria de măsurare.
- [ ] **AVL203-REQ-002** — Rezultatele negative, erorile, redirecturile neașteptate, datele indisponibile și abaterile TREBUIE conservate și raportate.
- [ ] **AVL203-REQ-003** — Absența unei dovezi NU TREBUIE raportată ca `NO`.
- [ ] **AVL203-REQ-004** — Captura, indexarea, observația, măsurarea și interpretarea NU TREBUIE contopite într-o singură judecată automată.
- [ ] **AVL203-REQ-005** — O modificare a definiției unei verificări `TC-*` care afectează comparabilitatea rezultatelor TREBUIE să producă o versiune nouă a protocolului.
- [ ] **AVL203-REQ-006** — Înaintea primului request, rularea TREBUIE să înregistreze în manifest câmpurile minime de mai sus.
- [ ] **AVL203-REQ-007** — Tokenurile, cookie-urile, credențialele și alte date sensibile NU TREBUIE publicate în evidența brută accesibilă publicului.
- [ ] **AVL203-REQ-008** — Pentru fiecare request, rularea TREBUIE să păstreze separat headerele și corpul răspunsului și să înregistreze statusul, URL-ul final, numărul de redirecturi, tipul, dimensiunea și codul de ieșire al clientului HTTP.
- [ ] **AVL203-REQ-009** — Când lanțul de redirecturi este urmărit, observațiile despre răspunsul final TREBUIE să se refere la blocul de headere al răspunsului final, identificat explicit.
- [ ] **AVL203-REQ-010** — Erorile TLS sau DNS NU TREBUIE ascunse prin dezactivarea verificării certificatelor.
- [ ] **AVL203-REQ-011** — Verificările TC-01, TC-02 și TC-06 TREBUIE făcute cu GET.
- [ ] **AVL203-REQ-012** — Un răspuns `200` NU TREBUIE prezentat drept indexare, iar un `403` pentru un User-Agent declarat NU TREBUIE prezentat drept dovadă că infrastructura furnizorului este blocată.
- ~~**AVL203-REQ-013**~~ — Retrasă în versiunea 0.4.0; înlocuită de AVL203-REQ-041.
- [ ] **AVL203-REQ-014** — Statusul TC-04 TREBUIE atribuit după regula din tabelul de mai sus.
- [ ] **AVL203-REQ-015** — Prezența sau accesibilitatea unui sitemap NU TREBUIE prezentată drept dovadă că întregul site este descoperibil.
- [ ] **AVL203-REQ-016** — Semnalele TC-05 TREBUIE extrase din raw HTML-ul și headerele răspunsului final, cu locația originală, și NU TREBUIE prezentate drept DOM randat, canonical selectat de un motor sau validare Schema.org.
- [ ] **AVL203-REQ-017** — Un semnal TC-05 a cărui extracție nu este sigură TREBUIE raportat `UNKNOWN`, cu motiv, și NU TREBUIE raportat `ABSENT`.
- [ ] **AVL203-REQ-018** — Șirurile User-Agent folosite la TC-06 TREBUIE luate dintr-un manifest versionat, iar rularea TREBUIE să înregistreze versiunea manifestului aplicat.
- [ ] **AVL203-REQ-019** — Pentru TC-06, fiecare URL TREBUIE capturat de cel puțin două ori cu clientul de referință, cu aceiași parametri.
- [ ] **AVL203-REQ-020** — Când capturile clientului de referință diferă, diferențele de dimensiune sau hash dintre User-Agent-uri NU TREBUIE atribuite User-Agent-ului.
- [ ] **AVL203-REQ-021** — O diferență între răspunsurile pentru User-Agent-uri declarate NU TREBUIE prezentată drept cloaking sau drept accesul efectiv al crawlerului furnizorului.
- [ ] **AVL203-REQ-022** — Rularea TREBUIE să genereze un manifest de checksum SHA-256 care acoperă `manifest/` și artefactele brute, fără fișierul de checksum însuși, să îl verifice și să documenteze utilitarul folosit.
- [ ] **AVL203-REQ-023** — Un artefact brut NU TREBUIE modificat după captură, iar fiecare artefact TREBUIE legat de run ID-ul rulării care l-a produs.
- [ ] **AVL203-REQ-024** — Rulările aceleiași serii TREBUIE să folosească aceeași versiune a protocolului, același manifest User-Agent și același set de URL-uri.
- [ ] **AVL203-REQ-025** — Eticheta unei rulări (`T0`, `F1` … `Fn` sau `TEST`) TREBUIE atribuită la înregistrare și NU TREBUIE schimbată ulterior.
- [ ] **AVL203-REQ-026** — O rulare `TEST` NU TREBUIE comparată cu rulările unei serii de măsurare și NU TREBUIE folosită pentru a susține o concluzie publicată.
- [ ] **AVL203-REQ-027** — O schimbare tehnică observată NU TREBUIE prezentată drept cauză a unei schimbări de vizibilitate pe baza succesiunii temporale.
- [ ] **AVL203-REQ-028** — O execuție conformă TREBUIE să livreze toate livrabilele minime de mai sus.
- [ ] **AVL203-REQ-029** — Planul de măsurare TREBUIE să declare tipul entității și să includă, pentru fiecare categorie obligatorie de pagină, fie URL-ul ales, fie motivul pentru care categoria nu se aplică.
- [ ] **AVL203-REQ-030** — Compoziția eșantionului, textele-cheie pentru TC-08 și politica de acces intenționată TREBUIE fixate înaintea primului request și NU TREBUIE modificate după observarea rezultatelor.
- [ ] **AVL203-REQ-031** — Textele-cheie pentru TC-08 TREBUIE declarate în plan înaintea rulării, iar căutarea TREBUIE să aplice regulile de normalizare înregistrate în manifest.
- [ ] **AVL203-REQ-032** — Rezultatul TC-08 TREBUIE raportat pe text-cheie și pe zonă, cu locația; `ABSENT_FROM_RAW_HTML` NU TREBUIE prezentat drept absența din pagina randată sau imposibilitatea de a obține textul.
- [ ] **AVL203-REQ-033** — Diagnosticul și recomandările TREBUIE formulate într-un strat separat, după o grilă publicată și versionată, cu versiunea grilei înregistrată.
- [ ] **AVL203-REQ-034** — Fiecare constatare de diagnostic TREBUIE să aibă una dintre stările din §12.1 și să trimită la observațiile-suport.
- [ ] **AVL203-REQ-035** — Fiecare recomandare TREBUIE să cuprindă observația-suport, gradul de certitudine, elementul de intervenție și modul de verificare ulterioară.
- [ ] **AVL203-REQ-036** — Grila TREBUIE fixată înaintea rulării și aplicată identic tuturor entităților; o regulă modificată după rezultate TREBUIE să producă o versiune nouă.
- [ ] **AVL203-REQ-037** — Diagnosticul și recomandările NU TREBUIE să conțină afirmațiile excluse de protocol și NU TREBUIE să promită un efect asupra vizibilității AI.
- [ ] **AVL203-REQ-038** — O extensie din afara Core TREBUIE declarată în plan înaintea folosirii, cu dovezile marcate separat și protejate conform AVL-200 §18.
- [ ] **AVL203-REQ-039** — O constatare bazată pe o extensie TREBUIE să o indice; absența extensiei NU TREBUIE raportată drept absența problemei.
- [ ] **AVL203-REQ-040** — Raportul unei evaluări cu diagnostic TREBUIE să separe observațiile, diagnosticul și recomandările, să includă limitele și să permită identificarea rulării și a versiunilor.
- [ ] **AVL203-REQ-041** — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309, prin parser conform sau aplicare manuală documentată, cu metoda înregistrată; altfel `NEDETERMINAT`.
- [ ] **AVL203-REQ-042** — Planul TREBUIE să includă pagina de contact sau de date de identitate, fără `NOT_APPLICABLE`; absența ei de pe site TREBUIE înregistrată și raportată.

---

# 17. Documente asociate

## Normative

- AVL-001 — AI Visibility Lab Foundation.
- AVL-202 — Cadrul metodologic AI Visibility Lab.
- AVL-200 — Standardul de dovezi, măsurare și trasabilitate.

## Informative

- AVL-201 — Tabula Rasa F0: Baseline Measurement Specification.
- AVL-204 — Grila de interpretare a verificării tehnice (draft pentru revizuire).

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

# 18. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|---|---|---|---|
| 0.1.0 | 1 octombrie 2026 | Draft pentru revizuire | Primul draft înregistrat. Definește setul minim de verificări `TC-00`–`TC-07`, poziționarea Evidence Capture Process înaintea lanțului AVL-200, convenția de etichetare a rulărilor (`T0` baseline, `F1` … `Fn` rulări ulterioare) și limitele protocolului. Identificator AVL-203 alocat din registru și confirmat de Alex Matescu; eticheta de lucru „AVL-TECH-001” retrasă. Slugul `/lab/metodologie/protocol-verificare-tehnica` confirmat. Afirmațiile despre RFC 9309, RFC 9110, Sitemaps, Google, OpenAI, Anthropic și Perplexity verificate la sursă la 1 octombrie 2026. |
| 0.2.0 | 2 octombrie 2026 | Draft pentru revizuire | Revizie după prima implementare candidată și o rulare de test. TC-06: dubla captură a clientului de referință devine obligatorie, iar diferențele de dimensiune/hash nu se atribuie User-Agent-ului când răspunsul variază intrinsec (constatare din rularea de test: corpul paginii a diferit între două requesturi identice). Manifest User-Agent versionat, cu statusuri `OFICIAL` / `OFICIAL_CU_VERSIUNE_ALEASA` / `DOAR_TOKEN` / `NECONFIRMAT`, înghețat la v0.1.0 cu șiruri verificate la sursă la 2 octombrie 2026. TC-04: căile convenționale (`/sitemap.xml`, `/sitemap_index.xml`) și regula de atribuire a statusurilor. TC-05: variantele meta robots pentru `googlebot`/`bingbot` și validitatea sintactică JSON a blocurilor JSON-LD ca observații permise. Codul de ieșire `curl` înregistrat pentru fiecare request. Manifestul rulării inclus în checksum-uri. Eticheta `TEST` pentru rulări de probă din afara seriilor de măsurare. §18.4 și §18.6 actualizate. Publicat ca draft public la `/lab/metodologie/protocol-verificare-tehnica`; canonicalul devine definitiv; §17.2 actualizat. |
| 0.3.0 | 2 octombrie 2026 | Draft pentru revizuire | Cerințele de conformitate formalizate: 28 de cerințe `AVL203-REQ-001` … `AVL203-REQ-028`, derivate din intenția normativă a versiunii 0.2.0, fără reguli noi. Declarația RFC 2119 / RFC 8174 din „Controlul documentului” înlocuiește nota despre intenția protocolului. Secțiune nouă „Checklist de conformitate” (§15); secțiunile următoare renumerotate (§16–§18). Decizia deschisă 3 actualizată. |
| 0.3.1 | 13 octombrie 2026 | Draft pentru revizuire | PATCH: decizia deschisă 1 („Aliniarea corpusului la convenția T0/F1…Fn”) este închisă: AVL-200 §7 (v1.1.0) definește convenția și etapele denumite, iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate la 13 octombrie 2026. Fără modificări ale cerințelor. |
| 0.4.0 | 23 octombrie 2026 | Draft pentru revizuire | MINOR: protocolul acoperă și diagnosticul și recomandările, pentru că verificarea tehnică este folosită în evaluări care livrează recomandări. Secțiuni noi: §1.1 „Compoziția planului de măsurare” (număr variabil de URL-uri, categorii obligatorii de pagini, tipul entității, textele-cheie și politica de acces intenționată declarate dinainte); §8.1 verificarea nouă `TC-08` „Conținut important în HTML-ul brut”; §12 „Cum trecem de la observații la diagnostic și recomandări?” (stările diagnosticului, cele patru elemente ale unei recomandări, trimiterea la grila AVL-204); §13.1 „Extensii declarate” (instrumente pentru webmasteri, loguri, CDN/WAF cu acces autorizat); §15.1 „Raportul unei evaluări cu diagnostic”. Cerințe noi `AVL203-REQ-029` … `AVL203-REQ-040`. Decizii Alex Matescu, 23 octombrie 2026: (1) `AVL203-REQ-013` este retrasă — textul rămâne în §6 ca evidență a evoluției metodologiei, iar identificatorul nu se reutilizează; cerința nouă `AVL203-REQ-041` acceptă, pe lângă parserul conform, aplicarea manuală a RFC 9309 documentată pas cu pas, cu metoda înregistrată în observații (decizia deschisă 8 închisă); (2) pagina de contact sau o altă pagină cu datele de identitate ale entității devine obligatorie în planul de măsurare, fără `NOT_APPLICABLE` (`AVL203-REQ-042`). Celelalte cerințe 001–028 rămân neschimbate. Secțiunile 12–18 devin 13–19. |

---

# 19. Decizii deschise înainte de 1.0.0

1. **Aliniarea corpusului la convenția T0/F1…Fn.** Închisă la 13 octombrie 2026: convenția din §11 este acum definită normativ în [AVL-200 §7](/lab/metodologie/standard-dovezi-masurare-trasabilitate) (v1.1.0), iar AVL-001 §17, AVL-202, AVL-101–105 și AVL-201 au fost aliniate.
2. **Locul în corpus.** De la publicarea ca draft public (2 octombrie 2026), AVL-202 menționează AVL-203 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor, cu statutul „Draft pentru revizuire”. Rămân de făcut la activare: actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.
3. **Cerințe identificate.** Formulate în v0.3.0 (2 octombrie 2026): 28 de cerințe `AVL203-REQ-001` … `AVL203-REQ-028`, derivate din intenția normativă deja existentă în text, fără reguli noi. Toate sunt la nivel TREBUIE / NU TREBUIE, cu o singură opțiune POATE (REQ-011). Rămâne de confirmat, la activare, setul final și nivelul fiecărei cerințe.
4. **Implementarea de referință.** Comenzile din document sunt exemple. Există o implementare candidată, versionată (skill-ul `verificare-tehnica-avl203` din repository, script v0.2.0), rulată la 2 octombrie 2026 într-o rulare `TEST` pe un singur origin (macOS, curl 8.7.1). Validarea ca implementare de referință cere rulări pe mai multe origini și configurații (redirecturi, erori TLS/DNS, robots.txt indisponibil, răspunsuri non-HTML, protecții anti-bot) și teste ale analizorului. Statut: candidată, nevalidată.
5. **Parserul robots.txt.** De la versiunea 0.4.0, parserul nu mai este condiție pentru determinarea politicii: AVL203-REQ-041 acceptă și aplicarea manuală documentată. Rămâne deschisă alegerea sau scrierea unui parser conform RFC 9309 pentru implementarea de referință, ca aplicarea să fie automată și repetabilă la volum mare.
6. **Șirurile User-Agent.** Manifestul v0.1.0 a fost înghețat la 2 octombrie 2026 (§9). Rămân deschise: confirmarea șirului complet `bingbot` dintr-o sursă oficială, tratamentul `Claude-SearchBot` (doar token, cât timp Anthropic nu publică un șir complet) și regula de alegere a versiunii Chrome din șirul Googlebot.
7. **Implementarea TC-08 și a diagnosticului.** Introduse în v0.4.0. Implementarea candidată (script v0.2.0) nu acoperă încă `TC-08`, compoziția planului din §1.1 sau stratul de diagnostic din §12. Regulile de normalizare pentru `TC-08` se fixează la implementare și se înregistrează în manifest.
8. **Aplicarea RFC 9309 fără parser.** Închisă la 23 octombrie 2026 (decizie Alex Matescu): AVL203-REQ-013 este retrasă, iar AVL203-REQ-041 acceptă aplicarea manuală a RFC 9309, documentată pas cu pas, alături de parserul conform.

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

---

> **Declarație finală**
>
> Un server răspunde unui request, nu unei întrebări despre vizibilitate.
> AVL-203 documentează ce a răspuns serverul, în ce condiții și cu ce dovezi; restul rămâne de măsurat separat.
