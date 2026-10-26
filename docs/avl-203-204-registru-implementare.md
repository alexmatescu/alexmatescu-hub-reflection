# Registrul implementării — AVL-203 v0.4.0 / AVL-204 v0.1.0

Document de lucru intern, sub controlul versiunilor. Este pasul 1.1–1.2 din `docs/PLAN-AVL-203-204-VERIFICARE-TEHNICA.md` (Faza 1). Clasifică ambiguitățile A–J din promptul de implementare (Anexa A a planului) și pe cele găsite la citirea drafturilor, înainte de orice cod.

| Câmp | Valoare |
| --- | --- |
| Creat | 25 octombrie 2026 |
| Ultima actualizare | 25 octombrie 2026 |
| Branch | `avl-203-0.4.0-avl-204` |
| Documente vizate | AVL-203 v0.4.0 (draft), AVL-204 v0.1.0 (draft) |
| Implementare vizată | skill `verificare-tehnica-avl203`, script v0.2.0 (candidat, nevalidat) |
| Stare | P-01…P-11 aprobate de Alex Matescu la 25 octombrie 2026 și preluate în AVL-203 0.5.0, AVL-204 0.2.0 și AVL-201 1.5.0; implementate în v0.4.0 (§6) |

Nimic din acest registru nu modifică AVL-203 sau AVL-204. Propunerile normative (§4) devin reguli numai prin AVL-204 0.2.0 (sau AVL-203 0.5.0), publicate cu `publica-document-metodologic`, după decizia lui Alex Matescu.

---

## 1. Cum se citește registrul

Fiecare punct primește una sau mai multe dintre următoarele încadrări:

| Încadrare | Sens | Ce face codul |
| --- | --- | --- |
| **Regulă exactă** | draftul spune clar ce se întâmplă | se implementează ca atare, cu trimitere la cerință sau regulă |
| **Alegere operațională** | draftul lasă un parametru tehnic deschis, iar alegerea nu schimbă diagnosticul | se fixează în configurația scriptului, versionată și înregistrată în manifest (`OP-*`) |
| **Propunere normativă** | rezolvarea ar schimba un diagnostic sau o prioritate | rămâne neactivă; până la decizie, codul aplică varianta conservatoare și declară abaterea (AVL204-REQ-003, AVL204-REQ-012) (`P-*`) |

**Varianta conservatoare** înseamnă: starea coboară spre „problemă posibilă” sau „nu poate fi stabilit” și niciodată spre „problemă confirmată” (AVL-204 §3). Într-un caz pe care regulile nu îl acoperă, codul nu produce nici „nicio problemă observată”. Abaterea apare în raport cu regula vizată, motivul și starea atribuită.

---

## 2. Verificarea surselor externe (pasul 1.2)

Verificate live la 25 octombrie 2026.

### 2.1. IETF RFC 9309 — Robots Exclusion Protocol

Sursa: https://www.rfc-editor.org/rfc/rfc9309

| Secțiune | Ce spune | Folosit la |
| --- | --- | --- |
| §2.2.1 | potrivirea tokenului e case-insensitive; grupurile care corespund aceluiași User-Agent se combină într-unul; fără grup potrivit se aplică grupul `*` | parser (H) |
| §2.2.2 | se folosește potrivirea cea mai specifică, adică cea cu cei mai mulți octeți; la `allow` și `disallow` echivalente, `allow` AR TREBUI folosit; regulile din afara oricărui grup AR TREBUI ignorate | parser (H) |
| §2.2.4 | parsarea altor înregistrări (de exemplu `Sitemap`) NU TREBUIE să interfereze cu regulile definite | TC-04 (C) |
| §2.3.1.1 | după descărcarea reușită, crawlerul TREBUIE să urmeze regulile parsabile | H |
| §2.3.1.2 | crawlerele AR TREBUI să urmeze cel puțin cinci redirecturi consecutive, **chiar între autorități diferite**; după mai mult de cinci, POT considera fișierul indisponibil | `R-Z2-03` (H) |
| §2.3.1.3 | un status care indică fișierul indisponibil (`4xx`) îi permite crawlerului să acceseze orice resursă | `R-Z2-04` (H) |
| §2.3.1.4 | dacă fișierul nu poate fi obținut din cauza unei erori de server sau de rețea, crawlerul TREBUIE să presupună interdicție completă | `R-Z2-02` (H, J) |
| §2.3.1.5 | crawlerul TREBUIE să încerce să parseze fiecare linie și TREBUIE să folosească regulile parsabile | `R-Z2-03` (H) |
| §2.4 | o versiune din cache NU AR TREBUI folosită mai mult de 24 de ore, cu excepția cazului în care fișierul nu poate fi obținut | context, nu se implementează |
| §2.5 | limita de parsare TREBUIE să fie de cel puțin 500 KiB | OP-07 |

Confirmă justificarea din AVL-204 §6.3 pentru `R-Z2-02` și `R-Z2-04`. Confirmă și observația din prompt că un redirect către alt host este permis de RFC, iar liniile neparsabile nu invalidează celelalte reguli.

### 2.2. Google — robots.txt și codurile HTTP

Surse:

- „How Google interprets the robots.txt specification”, https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec (pagina indică ultima actualizare la 23 octombrie 2026);
- „How HTTP Status Codes Affect Google's Crawlers”, https://developers.google.com/crawling/docs/troubleshooting/http-status-codes (ultima actualizare: 4 februarie 2026).

Ce spune Google:

- **`4xx`:** crawlerele Google tratează toate erorile `4xx`, cu excepția `429`, ca și cum nu ar exista un `robots.txt` valid.
- **`429`:** e semnal că serverul este suprasolicitat. **Niciuna dintre cele două pagini nu descrie explicit ce face Google cu un `robots.txt` care răspunde `429`.** Afirmația din prompt („Google îl exclude din regula generală pentru 4xx”) se confirmă. Tratamentul efectiv nu se confirmă și nu intră în cod sau în reguli.
- **`5xx` și erorile DNS/de rețea:** Google oprește crawlingul în primele 12 ore, apoi folosește ultima versiune bună timp de 30 de zile. Erorile DNS sau de rețea sunt tratate ca erori de server.
- **Redirecturi:** Google urmează cel puțin cinci, apoi tratează fișierul ca `404`.
- **Linii invalide:** sunt ignorate; se folosesc doar liniile valide.
- **Dimensiune:** peste 500 KiB, conținutul este ignorat.
- **Precedența regulilor:** la conflict, Google folosește regula cea mai puțin restrictivă (echivalentul lui „`allow` la egalitate” din RFC).

**Consecința pentru implementare:** grila se aplică în **modul RFC 9309** (AVL-204 §6.3). Raportul precizează că starea Z2 descrie aplicarea RFC 9309, nu comportamentul verificat al vreunui furnizor. Diferențele cunoscute ale furnizorilor (de exemplu `429` la Google) apar ca notă informativă, nu ca regulă.

---

## 3. Registrul

### A. Integritatea (TC-07, AVL204-REQ-001, `R-VAL-01`)

**Ce spune draftul.** Potrivit AVL204-REQ-001, grila se aplică numai unei rulări „a cărei integritate (TC-07) a fost verificată”. `R-VAL-01` dă starea „nu poate fi stabilit” când manifestul lipsește sau verificarea eșuează „pentru artefactele folosite”. AVL-204 §5 aplică regula per artefact.

**Ambiguitatea.** Cerința „integritate verificată” poate fi citită în două feluri: „verificarea a fost executată” sau „verificarea a trecut pentru toate artefactele”. Dacă înseamnă că verificarea a trecut, un singur artefact compromis blochează toată grila, iar `R-VAL-01` per artefact nu mai are la ce să se aplice.

**Încadrare.** Regulă exactă pentru `R-VAL-01`. Propunere normativă **P-01** pentru formularea REQ-001.

**Ce face codul:**

1. `verify` produce un **rezultat de validare** separat de diagnostic. Starea globală e `VALID`, `PARTIAL` sau `INVALID`, iar lista per artefact are una dintre stările `OK`, `MODIFICAT`, `LIPSĂ` sau `NEACOPERIT`.
2. Rularea e `INVALID` dacă lipsesc manifestul, lista de checksum-uri sau planul înghețat, ori dacă vreunul dintre ele nu corespunde hash-ului. În acest caz nu se produce diagnostic, ci un **raport de invaliditate**: ce lipsește, ce s-a modificat și ce nu s-a putut evalua. Tot rezultatul depinde de manifest, deci efectul e același cu aplicarea `R-VAL-01` peste toate constatările.
3. Când rularea e `PARTIAL`, se aplică `R-VAL-01` constatărilor care depind de artefactele afectate. Celelalte se evaluează normal, iar raportul listează artefactele afectate.
4. Un fișier prezent în rulare, dar absent din lista de checksum-uri (`NEACOPERIT`), nu se folosește ca dovadă.
5. Raportul precizează că integritatea criptografică verifică octeții după captură, nu autenticitatea răspunsului serverului (AVL-203 §10).

**P-01.** AVL204-REQ-001 să precizeze: „grila se aplică după executarea verificării TC-07; artefactele care nu trec verificarea se tratează prin `R-VAL-01`; lipsa sau compromiterea manifestului, a listei de checksum-uri ori a planului face rularea invalidă”.

### B. Politica intenționată (AVL204-REQ-004)

**Ce spune draftul.** Potrivit AVL204-REQ-004, o restricție conformă cu politica declarată nu se raportează drept problemă. `R-Z2-01`, `R-Z2-05` și `R-Z4-01` includ explicit politica. `R-Z1-01` (`4xx`/`5xx`) și `R-Z6-01`/`02` (răspuns diferit pentru un User-Agent declarat) nu o includ, deși o restricție intenționată le poate declanșa. Exemple: o zonă de membri care răspunde `403`, sau un WAF care blochează intenționat `PerplexityBot`. Formatul politicii e o decizie deschisă (AVL-204 §15.5).

**Încadrare.** Regulă exactă pentru REQ-004, aplicată ca o constrângere generală peste toate regulile. Propuneri normative **P-02** (starea atribuită) și **P-03** (formatul politicii).

**Ce face codul:**

1. Planul declară, per URL și per crawler, politica de acces: `PERMIS`, `BLOCAT_INTENTIONAT` sau `NECUNOSCUT`, cu sursa și data declarării. **Indexarea intenționată** se declară separat de acces (`INDEXAT`, `NEINDEXAT_INTENTIONAT`, `NECUNOSCUT`), pentru `R-Z4-01`.
2. Când o regulă fără clauză de politică se declanșează pe o restricție declarată intenționată, observația se păstrează. Constatarea nu primește o stare de problemă (REQ-004). Primește starea „nicio problemă observată (restricție declarată)”, cu trimitere la REQ-004 și la declarația din plan, ca **abatere declarată** (REQ-012), pentru că textul regulii nu prevede cazul.
3. Când politica e `NECUNOSCUT` (inclusiv la concurenți, a căror politică nu o putem afla), politica nu se inventează. `R-Z2-01` și `R-Z4-01` cer „contrar politicii declarate” și deci nu se pot aplica sigur. Constatarea primește „problemă posibilă”, cu abatere și cu motivul „politică nedeclarată”. Aceeași regulă se aplică identic clientului și concurenților (AVL204-REQ-011).

**P-02.** Clauza „contrar politicii declarate” să se adauge în textul `R-Z1-01`, `R-Z6-01` și `R-Z6-02`, împreună cu starea pentru restricția declarată.

**P-03.** Formatul politicii (AVL-204 §15.5) să fie cel de la punctul 1, cu trei categorii de crawlere: căutare, antrenare și fetch la cererea utilizatorului. Să se stabilească și starea pentru politica `NECUNOSCUT` (propunerea: „problemă posibilă”, ca la punctul 3).

### C. TC-04 — tabelul statusurilor sitemap

**Ce spune draftul.** Tabelul din AVL-203 §7 (REQ-014) are cinci statusuri. `DECLARED` măsoară declarația și răspunsul `2xx`, nu validitatea XML (§7, REQ-015).

**Lacune.** Tabelul nu acoperă:

- fără declarație, cu căile convenționale care răspund `401`, `403`, `429` sau alt `4xx` decât `404`/`410`;
- fără declarație, cu căi convenționale care dau rezultate amestecate, de exemplu una `404` și cealaltă `403`;
- un lanț de redirecturi neterminat, adică limita depășită (`curl` exit 47);
- un `robots.txt` capturat, dar cu răspuns `5xx` sau `4xx`: „nu a putut fi capturat” (rândul `UNKNOWN`) poate însemna eroare de transport sau orice răspuns non-`2xx`;
- un răspuns `2xx` care e de fapt HTML, de exemplu un site SPA care întoarce pagina principală pentru orice cale.

**Încadrare.** Regulă exactă unde condiția din tabel e satisfăcută. Propunere normativă **P-04** pentru tabela completă.

**Ce face codul:**

1. Atribuie statusul din tabel numai când condiția rândului e satisfăcută literal. Toate celelalte cazuri primesc `UNKNOWN`, cu abatere și motiv. **Scriptul v0.2.0 are o abatere de corectat:** ramura finală `else → UNAVAILABLE` din `analyze_avl203.py` clasifică și cazurile neacoperite (de exemplu `403` fără declarație), deși pentru ele condiția `UNAVAILABLE` nu e satisfăcută.
2. Un `robots.txt` care răspunde `4xx` e considerat capturat, fără declarații; căile convenționale decid statusul. Un `5xx`, o eroare de transport sau un redirect neterminat înseamnă „nu a putut fi capturat”, deci `UNKNOWN`. E alegerea conservatoare și se declară ca interpretare a rândului `UNKNOWN`.
3. Fiecare sitemap capturat (declarat sau convențional) se păstrează ca observație separată. Ea cuprinde URL-ul cerut, URL-ul final, statusul, `Content-Type`, dimensiunea și dacă primii octeți arată XML sau HTML. Un `DECLARED` nu ascunde sitemap-urile declarate care au eșuat.
4. Tipul efectiv al documentului se raportează ca observație (`Content-Type` și primii octeți), fără să schimbe statusul. `DECLARED` rămâne `DECLARED` și când sitemap-ul răspunde cu HTML, pentru că așa spune tabelul. Raportul semnalează însă tipul observat.
5. Indexul de sitemap nu se urmează recursiv în Core (AVL-203 §7). Sitemap-urile declarate pe alt host decât originul se capturează numai dacă planul permite acel host (vezi I).

**P-04.** Tabela de decizie completă. Propunerea: un `4xx` care nu e `404`/`410`, cu sau fără combinații, dă `UNKNOWN` (accesul refuzat nu arată dacă sitemap-ul există). Un `2xx` cu HTML la o cale convențională dă un status nou sau `UNKNOWN`, nu `FOUND_AT_CONVENTIONAL_PATH`. Statusul robots `5xx` să fie explicit în rândul `UNKNOWN`.

### D. TC-08 — zone, normalizare și locații

**Ce spune draftul.** AVL-203 §8.1 definește patru zone: corpul documentului (în afara scripturilor și a stilurilor), atributele, blocurile JSON-LD și meta-tagurile. Are și patru statusuri. `ABSENT_FROM_RAW_HTML` înseamnă „în nicio zonă a HTML-ului brut”.

**Lacune.** Textul aflat în locuri care nu sunt în lista zonelor:

- **scripturile care nu sunt JSON-LD**, de exemplu payload-ul de hidratare `__NEXT_DATA__` sau șiruri JS;
- **`<title>`**, care e element în `<head>`, nu meta-tag;
- **comentariile HTML**;
- **`<template>`** și **`<noscript>`**.

Dacă un text-cheie apare numai acolo, `PRESENT_IN_BODY` e fals și `PRESENT_IN_METADATA_ONLY` nu e satisfăcut (aceste zone nu sunt metadate). `ABSENT_FROM_RAW_HTML` ar fi fals, pentru că octeții conțin textul.

**Încadrare.** Zonele și statusurile sunt regulă exactă. Normalizarea, unirea nodurilor și locația sunt alegeri operaționale (REQ-031 cere doar ca regulile să fie înregistrate în manifest). Încadrarea zonelor neacoperite e propunere normativă **P-05**.

**Ce face codul:**

1. Caută separat în toate zonele: cele patru din draft și zonele auxiliare `title`, `script_non_jsonld`, `comment`, `template`, `noscript`. Zonele auxiliare se raportează ca **observații auxiliare**.
2. Un text găsit numai într-o zonă auxiliară primește `UNKNOWN` cu abatere (motiv: „zonă neacoperită de AVL-203 §8.1”), niciodată `ABSENT_FROM_RAW_HTML`.
3. `<noscript>` intră provizoriu în zona auxiliară, nu în corp, pentru că draftul nu îl menționează. Alegerea e conservatoare și se declară.
4. Normalizarea este **OP-01**, declarată în manifest. Se aplică în ordinea: decodarea entităților HTML, Unicode NFC, înlocuirea tuturor spațiilor Unicode (inclusiv NBSP) cu un spațiu simplu, comprimarea spațiilor, apoi `casefold`. **Diacriticele se păstrează**, iar „ș” cu sedilă și „ș” cu virgulă rămân distincte, dacă planul nu declară altceva. Textul-cheie trece prin aceeași normalizare.
5. Unirea nodurilor este **OP-02**. În corp, textul se concatenează în ordinea documentului. La granițele elementelor de tip bloc și la `<br>` se inserează un separator. Elementele inline (`<b>`, `<span>`, `<a>`) nu primesc separator, ca „Alex <b>Matescu</b>” să se potrivească, iar textele din blocuri diferite să nu se unească fals.
6. Locația este **OP-03**: linia și coloana de început din **fișierul original**, obținute dintr-o hartă de poziții text normalizat → octeți originali. Linia din textul normalizat nu se raportează ca linie originală.
7. `PRESENT_IN_BODY` descrie zona din HTML, nu vizibilitatea în browser. Elementele ascunse prin CSS sau prin atributul `hidden` rămân în corp, iar raportul precizează asta.

**P-05.** Încadrarea zonelor auxiliare. Propunerea: `title` intră la `PRESENT_IN_METADATA_ONLY`. Scripturile care nu sunt JSON-LD, comentariile, `<template>` și `<noscript>` primesc un status nou, de exemplu `PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY`, cu o regulă Z5 corespunzătoare („problemă posibilă”).

### E. Z6 — răspunsuri diferite pentru User-Agent-ii declarați

**Ce spune draftul.** `R-Z6-01` și `R-Z6-02` dau starea „problemă confirmată (răspuns diferit pentru User-Agent-ul declarat)”, iar AVL-204 §6.7 limitează ce confirmă. Variabilitatea intrinsecă (REQ-019, REQ-020) se aplică numai dimensiunii și hash-ului.

**Lacune.**

1. Diferența se poate observa, dar nu e în mod necesar nefavorabilă. Un User-Agent declarat poate primi un răspuns *mai bun* decât clientul de referință, iar o diferență de `charset` în `Content-Type` poate fi banală. Regula nu distinge direcția diferenței.
2. Variabilitatea poate afecta și statusul sau headerele, de exemplu un `429` la al n-lea request, un test A/B sau un nod CDN diferit. Draftul nu o controlează pentru ele.
3. Lista „headerelor relevante” e dată doar prin exemple.

**Încadrare.** Regulă exactă pentru starea și calificarea din tabel. Alegere operațională **OP-04** pentru lista headerelor. Propunere normativă **P-06** pentru direcție și variabilitatea de status/headere.

**Ce face codul:**

1. Aplică `R-Z6-01` și `R-Z6-02` cum sunt scrise și păstrează **calificarea din paranteză** în fiecare constatare și în rezumat. Nu scrie „cloaking” și nu scrie „furnizorul e blocat” (REQ-021, AVL-204 §8).
2. Lista headerelor relevante (**OP-04**) e fixată în configurație și înregistrată în manifest: `X-Robots-Tag`, `Content-Type`, `Content-Language`, `Link` (pentru `rel=canonical` în header), `Location` (pe lanțul de redirecturi) și `Vary`. `Date`, `Age`, identificatorii de request, `Set-Cookie`, `ETag`, `Last-Modified` și headerele de cache nu intră în diagnostic. Diferențele brute rămân conservate.
3. Dacă cele două capturi ale clientului de referință diferă deja ca status, URL final sau header relevant, `R-Z6-01`/`02` nu se pot aplica sigur. Comparația primește „nu poate fi stabilit”, cu abatere (REQ-003). Logica e cea a REQ-020 pentru conținut. Diferența nu se atribuie User-Agent-ului.
4. Recomandarea asociată nu e „eliminați diferența”, ci „verificați configurația WAF/CDN/server pentru User-Agent-ul X; verificare ulterioară: TC-06”.
5. `R-Z6-04` („nu poate fi stabilit” pentru conținut) se raportează separat chiar când zona are altă stare (AVL204-REQ-005). Nu se pierde în rezumat.

**P-06.** `R-Z6-01`/`02` să ceară ca diferența să fie **nefavorabilă** pentru User-Agent-ul declarat (status mai slab, `noindex` adăugat, URL final diferit) pentru starea „confirmată”. Celelalte diferențe să dea „problemă posibilă”. Controlul de variabilitate să se extindă la status și headere.

### F. Prioritățile (AVL-204 §7, AVL204-REQ-009)

**Ce spune draftul.** Potrivit REQ-009, „fiecare recomandare” primește o clasă. Potrivit §7, constatările „nu poate fi stabilit” nu primesc clasă, iar recomandarea pentru ele e o verificare suplimentară. Clasele P1–P3 folosesc starea, zona și impactul. Efortul și dependențele contează doar la ordonarea din interiorul clasei. Verificabilitatea nu intră în formulă.

**Încadrare.** Regulă exactă pentru P1–P3 și ordonare. Propunere normativă **P-07** pentru tensiunea REQ-009 ↔ §7.

**Ce face codul:**

1. Recomandările de tip „verificare suplimentară” primesc `priority = null`, cu motivul „AVL-204 §7: constatările «nu poate fi stabilit» nu primesc clasă”. Se declară ca abatere de la litera REQ-009.
2. **Impactul** se calculează determinist din plan: categoria URL-ului afectat (pagina principală, pagina canonică despre entitate, URL secundar), numărul de URL-uri afectate și dacă problema privește tot originul sau toate crawlerele Core.
3. **Efortul** și **dependențele** sunt câmpuri completate de cel care redactează raportul. Efortul e marcat „estimare”. Necunoscutele rămân `null` și nu se completează automat.
4. **Verificabilitatea** se înregistrează, dar nu intră în calculul clasei, pentru că draftul nu îi dă o pondere.
5. Graful dependențelor (ce recomandare depinde de alta) produce o **ordine de execuție**, raportată separat de clasă. Ordinea nu schimbă severitatea.

**P-07.** REQ-009 să spună „fiecare recomandare pentru o problemă confirmată sau posibilă”. Să se stabilească și dacă verificabilitatea intră în clase (decizia deschisă 3 din AVL-204 §15).

### G. Pagina de contact sau de identitate (AVL203-REQ-042)

**Ce spune draftul.** Categoria e obligatorie, fără `NOT_APPLICABLE`. Absența de pe site se înregistrează în plan și se raportează „ca rezultat al evaluării”. Dacă absența primește o regulă de diagnostic e o decizie deschisă (AVL-204 §15.4).

**Încadrare.** Regulă exactă pentru plan și raportare. Alegere operațională **OP-05** pentru câmpurile planului. Diagnosticul rămâne deschis (**D-06**).

**Ce face codul:**

1. Validarea planului respinge categoria `contact_identitate` fără URL și fără înregistrarea absenței. Respinge și `NOT_APPLICABLE` pentru această categorie.
2. Absența se înregistrează **fără URL inventat** (**OP-05**), cu: `absent: true`, metoda constatării (navigare în meniu și footer, sitemap, căutare `site:`), data, cine a constatat și limita: „constatare a operatorului, nu dovadă exhaustivă că pagina nu există”.
3. Raportul are o secțiune „Rezultate ale evaluării din afara grilei” pentru absență, cu proveniența ei. Nu apare ca regulă, stare sau prioritate, cât timp §15.4 e deschisă.
4. Dacă rularea descoperă ulterior o pagină de identitate (de exemplu într-un sitemap), planul nu se completează retroactiv. Descoperirea se raportează ca observație, iar includerea paginii cere o rulare nouă sau o abatere documentată (REQ-030).

### H. Robots — RFC 9309 față de comportamentul furnizorilor

**Ce spune draftul.** Potrivit REQ-041, politica se determină prin parser conform sau prin aplicare manuală documentată, altfel `NEDETERMINAT`. Pentru Z2:

- `R-Z2-02`: `5xx` sau eroare de rețea → confirmată;
- `R-Z2-03`: redirect către alt host sau linii neinterpretabile → posibilă;
- `R-Z2-04`: `4xx` → nicio problemă observată.

**Ce arată verificarea din §2:**

- redirectul către alt host e permis de RFC (§2.3.1.2), deci nu dovedește singur o defecțiune;
- liniile neparsabile nu invalidează regulile parsabile (§2.3.1.5);
- `429` e un `4xx` în sensul RFC, dar Google îl exclude din regula generală pentru `4xx`, fără să descrie tratamentul ca regulă de robots;
- peste cinci redirecturi, RFC permite tratarea fișierului ca indisponibil (POATE), iar Google îl tratează ca `404`.

**Încadrare.** Regulă exactă: grila se aplică în modul RFC, cum e scrisă. Alegeri operaționale **OP-06** și **OP-07**. Propunere normativă **P-08**.

**Ce face codul:**

1. **Parserul** (Faza 3) urmează RFC 9309:
   - grupuri specifice înaintea lui `*`;
   - combinarea grupurilor cu același token;
   - potrivire case-insensitive a tokenului și case-sensitive a căii;
   - potrivirea cea mai lungă în octeți;
   - `allow` la egalitate;
   - `*` și `$`;
   - percent-encoding normalizat înainte de comparație;
   - regulile din afara grupurilor ignorate.

   Fiecare decizie URL–crawler se salvează cu pașii aplicării (grupuri alese, reguli combinate, regula câștigătoare, linia din `robots.body`), deci în aceeași formă ca aplicarea manuală documentată. Metoda (`PARSER` sau `MANUAL`) se înregistrează (REQ-041). `grep` nu decide nimic.
2. **Importul pentru aplicarea manuală:** un fișier cu aceeași structură, completat de operator. Fiecare decizie trimite la liniile din `robots.body`.
3. `R-Z2-03` se aplică cum e scrisă. Constatarea citează însă RFC 9309 §2.3.1.2 și §2.3.1.5 („permis de RFC; semnalat pentru verificare”), iar liniile neparsabile se listează individual.
4. Un `robots.txt` cu `429` intră la `R-Z2-04` (modul RFC), cu nota obligatorie: „concluzie în modul RFC 9309; Google exclude `429` din regula pentru `4xx`; comportamentul furnizorilor nu a fost verificat”.
5. Un lanț de peste cinci redirecturi nu e acoperit de reguli: se aplică `R-Z2-06` („nu poate fi stabilit”), cu abatere.
6. Captura robots urmează până la **OP-06** = 10 redirecturi și înregistrează numărul real. Clasificarea folosește pragul de 5 din RFC.
7. **OP-07:** parserul citește tot fișierul și înregistrează dimensiunea. Peste 500 KiB, raportul semnalează că unii furnizori ignoră restul, fără să schimbe politica RFC.

**P-08.** `R-Z2-03` să se scindeze. Redirectul cross-host terminat cu `2xx` să dea „nicio problemă observată” (permis de RFC). Liniile neparsabile să dea „problemă posibilă” numai pentru liniile care seamănă cu o directivă cunoscută (de exemplu `Dissallow`). Să existe o regulă separată pentru `429` și una pentru mai mult de cinci redirecturi. Orice revizuire a `R-Z2-03`/`04` se face într-o versiune nouă a grilei, nu prin corecție tăcută.

### I. Canonicalul și cererile auxiliare (`R-Z4-02`, `R-Z4-05`)

**Ce spune draftul.** `R-Z4-02` dă „confirmată” când canonicalul „capturat, nu răspunde `2xx`”. Ținta canonicalului se află abia după TC-01, deci captura ei e o cerere care nu era în listă.

**Lacune.**

1. Cererea auxiliară nu e prevăzută în plan (REQ-001, REQ-030).
2. Ținta poate fi pe alt host.
3. Nu e clar dacă „răspunde `2xx`” înseamnă statusul inițial sau pe cel final după redirect. Un canonical care face `301` spre o pagină `200` e ambiguu.

**Încadrare.** Alegere operațională **OP-08** pentru politica cererilor auxiliare. Propunere normativă **P-09** pentru status.

**Ce face codul:**

1. Planul predeclară politica cererilor auxiliare (**OP-08**): tipurile permise (`canonical`, sitemap declarat), hosturile permise (originul și variantele declarate), numărul maxim de cereri auxiliare și aceiași parametri GET ca la TC-01.
2. Cererile auxiliare sunt marcate `auxiliar` în Evidence Index. Nu extind eșantionul și nu primesc reguli Z1.
3. Un canonical identic cu URL-ul final al paginii nu cere o captură separată, pentru că TC-01 îl acoperă.
4. O țintă din afara limitelor nu se capturează. `R-Z4-02` dă atunci „nu poate fi stabilit”, cu motivul „țintă în afara limitelor planului”. `R-Z4-05` se aplică în continuare, pentru că el compară doar URL-uri.
5. Pentru o țintă capturată se înregistrează **statusul inițial și statusul final**. `R-Z4-02` se aplică pe statusul final (lectura conservatoare, care produce mai puține constatări „confirmate”). Statusul inițial `3xx` se raportează ca observație, cu abatere.
6. Un canonical relativ se rezolvă după baza documentului (`<base href>`, dacă există, altfel URL-ul final). Valoarea originală se păstrează.
7. URL-urile găsite în pagini sunt date neîncrezătoare: se validează schema (`http`/`https`) și hostul, iar fiecare redirect se verifică față de limitele planului.

**P-09.** `R-Z4-02` să precizeze statusul folosit. Propunerea: un `3xx` inițial dă „problemă posibilă”, iar un final non-`2xx` dă „problemă confirmată”.

### J. Repetabilitatea și completitudinea

**Ce spune draftul.** Potrivit AVL-204 §6, „o regulă care nu se potrivește niciunei observații nu produce constatare”. Mai multe reguli de succes au condiții formulate prin absență: `R-Z4-09` („niciuna dintre condițiile de mai sus”), `R-Z2-05` („nicio regulă aplicabilă nu blochează”), `R-Z1-08`, `R-Z5-04` și `R-Z6-05`. `R-Z1-07` acoperă o eroare de rețea sau DNS **o singură dată**, dar nimic nu acoperă eroarea **repetată**. `R-Z2-02` confirmă după o singură eroare de rețea.

**Încadrare.** Alegere operațională **OP-09** pentru repetarea capturii. Regulă exactă, aplicată conservator, pentru condițiile de succes. Propunere normativă **P-10**.

**Ce face codul:**

1. Fiecare regulă de succes are **precondiții de completitudine** declarate în definiția ei, ca date. Exemple:
   - `R-Z1-08` cere TC-01 complet și toate variantele TC-02 declarate relevante;
   - `R-Z2-05` cere politica determinată pentru toate perechile URL–crawler Core;
   - `R-Z4-09` cere toate semnalele TC-05 extrase și, dacă e cazul, ținta canonicalului evaluată;
   - `R-Z5-04` cere cel puțin un text-cheie declarat și toate textele evaluate.

   Dacă o precondiție lipsește, regula de succes nu se aplică. Constatarea primește „nu poate fi stabilit”, cu lista intrărilor lipsă.
2. **O zonă fără constatări nu primește starea „nicio problemă observată”.** În raport apare ca „neevaluată”, cu motivul. De exemplu, Z5 fără texte-cheie declarate e o problemă de plan, nu o zonă curată.
3. **OP-09:** după o eroare de rețea, DNS sau timeout, captura se repetă **o singură dată**, după o pauză declarată (implicit 30 de secunde). Repetarea face parte din plan și nu e un request ad-hoc. Ambele încercări se păstrează.
4. O eroare de rețea sau DNS **repetată** (2 din 2) nu e acoperită de nicio regulă Z1, pentru că `R-Z1-02` acoperă doar TLS. Primește „nu poate fi stabilit”, cu abatere.
5. `R-Z2-02` se aplică pe eroarea de rețea numai după repetare (2 din 2). La 1 din 2 se aplică `R-Z2-06`, cu abatere. Pe `5xx` se aplică direct, cum e scrisă.
6. **Reproductibilitatea:** `analyze`, `diagnose` și `report` rulate pe același pachet produc aceeași ieșire, octet cu octet, cu excepția câmpului cu ora generării. Se verifică printr-un test.

**P-10.** Să se adauge o regulă Z1 pentru eroarea repetată, propunerea fiind „problemă confirmată (în condițiile testate)”. Precondițiile de completitudine să intre în textul regulilor de succes. Repetarea capturii la erori de rețea să devină parte a protocolului (AVL-203 0.5.0).

---

### Puncte găsite la citire (în afara listei A–J)

**K. Granularitatea regulilor.** Potrivit AVL-204 §6, regulile „se aplică pentru fiecare URL din plan”. Z2 se aplică însă natural pe perechi URL × crawler, iar Z3 pe origine (sitemap-ul nu aparține unui URL). Codul aplică Z1, Z4, Z5 și Z6 per URL, Z2 per pereche URL–crawler, iar Z3 per origine. Alegerea se declară (**OP-10**) și nu schimbă starea.

**L. Dubla captură TC-06.** Scriptul v0.2.0 folosește captura TC-01 ca primă captură de referință, iar captura TC-06/client ca a doua. Parametrii sunt identici, deci REQ-019 e respectată, dar între cele două capturi trec toate celelalte requesturi. Propunerea **OP-11**: două capturi de referință dedicate în blocul TC-06, una înaintea capturilor per User-Agent și una după ele. Așa se observă și deriva în timpul blocului. Capturile per User-Agent rămân în ordinea fixă din manifest.

**M. Parametrii capturii.** Valorile actuale (**OP-12**) sunt:

- `--connect-timeout 15`;
- `--max-time 45`;
- pauza de 1 s între requesturi;
- `--compressed` la TC-01 și TC-06, nu la TC-03 și TC-04.

Lipsește o limită explicită de redirecturi: `curl` are implicit 50. Propunerea este `--max-redirs 10` peste tot, înregistrat în manifest. Pentru fiecare corp se înregistrează separat `size_download` (octeții transferați) și dimensiunea corpului salvat, decomprimat (AVL-203 §5; promptul, TC-01/02). Erorile `curl` (stderr) se păstrează pentru fiecare request, cum face deja scriptul.

---

## 4. Rezumat: alegeri operaționale și propuneri normative

### 4.1. Alegeri operaționale (se fixează în configurația scriptului, versionată)

| ID | Ce fixează | Valoare propusă | Punct |
| --- | --- | --- | --- |
| OP-01 | normalizarea TC-08 | entități → NFC → spații Unicode → comprimare → `casefold`; diacriticele păstrate | D |
| OP-02 | unirea nodurilor TC-08 | separator la granița elementelor bloc și la `<br>`, fără separator la inline | D |
| OP-03 | locația TC-08 | linie și coloană în fișierul original, prin hartă de poziții | D |
| OP-04 | headerele relevante TC-06 | `X-Robots-Tag`, `Content-Type`, `Content-Language`, `Link`, `Location`, `Vary` | E |
| OP-05 | absența paginii de identitate în plan | `absent: true`, metoda, data, autorul, limita | G |
| OP-06 | redirecturile urmate la robots | maximum 10, clasificare cu pragul 5 din RFC | H |
| OP-07 | dimensiunea robots | parsare integrală, semnal peste 500 KiB | H |
| OP-08 | cererile auxiliare | tipuri, hosturi, număr maxim, aceiași parametri | I |
| OP-09 | repetarea la erori de rețea | o repetare, după 30 s, predeclarată | J |
| OP-10 | granularitatea regulilor | Z1/Z4/Z5/Z6 per URL, Z2 per URL × crawler, Z3 per origine | K |
| OP-11 | dubla captură TC-06 | două capturi de referință dedicate, înainte și după User-Agent-uri | L |
| OP-12 | parametrii `curl` | 15 s / 45 s / 1 s / `--max-redirs 10`; dimensiunea transferată separat de cea decomprimată | M |

### 4.2. Propuneri normative (neactive; candidate pentru AVL-204 0.2.0 / AVL-203 0.5.0)

| ID | Document | Propunere | Până la decizie, codul aplică |
| --- | --- | --- | --- |
| P-01 | AVL-204 REQ-001 | „integritate verificată” = verificare executată; eșecurile per artefact intră la `R-VAL-01` | raport de invaliditate pentru manifest, listă sau plan; `R-VAL-01` per artefact |
| P-02 | AVL-204 `R-Z1-01`, `R-Z6-01/02` | clauza „contrar politicii declarate” | „nicio problemă observată (restricție declarată)” + abatere |
| P-03 | AVL-204 §15.5 | formatul politicii; starea pentru politica necunoscută | „problemă posibilă” + abatere |
| P-04 | AVL-203 §7 | tabela TC-04 completă | `UNKNOWN` + abatere |
| P-05 | AVL-203 §8.1 | zonele auxiliare TC-08 | `UNKNOWN` + abatere |
| P-06 | AVL-204 `R-Z6-01/02` | diferență nefavorabilă; variabilitate la status și headere | regula ca atare; „nu poate fi stabilit” la variabilitate |
| P-07 | AVL-204 REQ-009 | prioritate doar pentru probleme | `priority = null` + abatere |
| P-08 | AVL-204 `R-Z2-03/04` | scindarea `R-Z2-03`; `429`; mai mult de cinci redirecturi | modul RFC + note; `R-Z2-06` peste cinci redirecturi |
| P-09 | AVL-204 `R-Z4-02` | status inițial față de status final | statusul final + observație |
| P-10 | AVL-204 Z1, AVL-203 | eroarea repetată; precondiții; repetarea capturii | „nu poate fi stabilit” + abatere |
| P-11 | AVL-204 Z4, Z5 | pagină din plan al cărei răspuns final nu e `2xx`: semnalele și textele descriu răspunsul de eroare, nu resursa (găsit la implementare, 25 octombrie 2026) | `R-Z4-08` / `R-Z5-03` („nu poate fi stabilit”) + DEV-N01; `R-Z1-01` rămâne constatarea principală |

Fiecare abatere aplicată de cod are un identificator stabil (de exemplu `DEV-P04`), ca rapoartele succesive să poată fi comparate (AVL204-REQ-014).

---

## 5. Decizii pentru Alex Matescu

**Decizie Alex Matescu, 25 octombrie 2026:** alegerile tehnice (D-01…D-05, D-08: încadrarea, OP-01…OP-12, variantele conservatoare, Python, `unittest`, fazele una câte una) le face Claude, cu variantele recomandate mai jos. Propunerile P-01…P-10 (D-07) și D-06 se discută după rularea TEST, câte 2–3, pe cazuri concrete.

Deciziile marcate „pentru Faza 2” sunt necesare înainte de cod. Celelalte pot aștepta până la AVL-204 0.2.0.

| ID | Decizie | Recomandare | Când |
| --- | --- | --- | --- |
| D-01 | Clasificarea din §3 (regulă exactă / operațională / propunere) e acceptată ca bază de lucru? | da | pentru Faza 2 |
| D-02 | Alegerile operaționale OP-01…OP-12, cu valorile propuse | da; se pot ajusta individual | pentru Faza 2 |
| D-03 | Variantele conservatoare din coloana „Până la decizie” din §4.2 | da | pentru Faza 2 |
| D-04 | Limbajul: Python, extinzând skill-ul (plan §6.3) | Python | pentru Faza 2 |
| D-05 | Testele: `unittest` din biblioteca standard (plan §6.4) | `unittest` | pentru Faza 2 |
| D-06 | Absența paginii de identitate: rămâne în afara grilei până la 0.2.0 (G) | da | poate aștepta |
| D-07 | Propunerile P-01…P-10: se discută după rularea TEST (Faza 5), cu dovezi | da | Faza 5 |
| D-08 | Ritmul fazelor 2–4 (plan §6.5) | una câte una | pentru Faza 2 |

---

## 6. Decizia asupra propunerilor (25 octombrie 2026)

Alex Matescu a aprobat propunerile P-01…P-11 așa cum sunt formulate în §3–§4.2, cu o singură modificare la P-03:

- **P-03 (modificată):** metodologia AI Visibility Lab propune acces total pentru toate crawlerele. Dacă politica unei entități e diferită, ea se documentează. „Politica crawlere” devine un câmp al fișei entității (AVL-201 §7), completat de reprezentantul entității.
- **Domeniul de aplicare (precizare a lui Alex):** verificarea tehnică se aplică numai entităților evaluate ca proiect sau client. Nu se aplică concurenților unui client și nici entităților din Market Discovery. O verificare a unui site din afara acestui domeniu nu se documentează și nu face obiectul protocolului.

Unde au intrat:

| Propunere | Document | Implementare v0.4.0 |
| --- | --- | --- |
| P-01 | AVL204-REQ-001, `R-VAL-01` | `integrity.py`, `analyze.py` |
| P-02 | `R-Z1-01`/`R-Z1-10`, `R-Z6-01`/`02`/`08` | `diagnose.py` (`intentional_status` în plan) |
| P-03 | AVL-204 §3.1, AVL204-REQ-017; AVL-201 §6.4 și §7; AVL-203 §1.1 | `plan.py` (doar `PERMIS` / `BLOCAT_INTENTIONAT`, implicit acces total) |
| P-04 | AVL-203 §7 (tabelul TC-04) | `analyze.tc04` |
| P-05 | AVL-203 §8.1 (`PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY`), `R-Z5-05` | `content.py` |
| P-06 | `R-Z6-01`/`02` (diferențe nefavorabile), `R-Z6-06`, `R-Z6-07`; AVL203-REQ-045 | `diagnose.py` |
| P-07 | AVL204-REQ-009 | `recommend.py` |
| P-08 | `R-Z2-03`, `R-Z2-04`, `R-Z2-07`, `R-Z2-08`, `R-Z2-09` | `robots.py`, `diagnose.py` |
| P-09 | `R-Z4-02`, `R-Z4-10`, `R-Z4-08` | `diagnose.py` |
| P-10 | `R-Z1-09`, `R-Z2-02`, AVL204-REQ-016; AVL203-REQ-044 | `capture.py`, `diagnose.py` |
| P-11 | AVL-204 §6 (Z4/Z5 nu se evaluează pentru 4xx/5xx) | `diagnose.py` |
| Domeniul | AVL203-REQ-043, AVL204-REQ-015 | `plan.py` (`entity_sheet` obligatoriu) |

Abaterile `DEV-P*` și `DEV-N01` din v0.3.0 nu mai există: cazurile lor sunt acum reguli ale grilei. În v0.4.0 rămân `DEV-G01` (caz neacoperit de grila 0.2.0) și `DEV-G02` (intenția de indexare nedeclarată, pentru `R-Z4-01`).

