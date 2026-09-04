---
name: publica-studiu-de-caz
description: Editor autonom pentru studiile de caz din AI Visibility Lab (/lab/studii-de-caz) — pipeline complet de publicare/actualizare a unui studiu de caz, de la .md la integrare în site, cu verificare factuală live pe ierarhie de surse, standard de dovezi și taxonomie de rezultate (AVL-201), gate de originalitate/E-E-A-T cu divulgare obligatorie a conflictului de interese, arhitectură GEO/AEO/SEO a conținutului, entity consistency (Person/WebSite/Organization), JSON-LD @graph, tratarea corectă a naturii longitudinale (faze noi peste un caz existent, fără rescrierea retroactivă a fazelor vechi) și audit anti-halucinare final. Distinct de `publica-articol-lab` (/lab/articole) și de `publica-articol-blog` (/blog) — nu se substituie și nu se suprapune cu ele. Invocă atunci când userul cere publicarea/actualizarea unui studiu de caz din AI Visibility Lab, adăugarea unei faze noi de măsurare la un caz existent, sau cere „un agent care postează studii de caz”.
---

# Publică studiu de caz — AI Visibility Lab

Se aplică exclusiv secțiunii `/lab/studii-de-caz`. Nu se aplică articolelor din `/lab/articole` (skill separat: `publica-articol-lab`) și nu se aplică articolelor din `/blog` (skill separat: `publica-articol-blog`). Nu modifica skill-urile, articolele, taxonomiile sau metadata acelor două domenii în timpul publicării unui studiu de caz.

Scopul acestui skill nu e doar publicarea și fact-checking-ul, ci un standard de excelență GEO/AEO/SEO și E-E-A-T pentru cercetare aplicată originală: dovezi verificabile, taxonomie declarată explicit, separare strictă între observație/inferență/ipoteză, divulgare a conflictului de interese, și publicarea onestă a rezultatelor negative/ambigue alături de cele pozitive. **Nu promite și nu presupune niciodată** că aceste practici garantează citarea, menționarea, rankingul, indexarea sau includerea într-un răspuns AI — ele cresc probabilitatea și calitatea semnalului, atât.

---

## 0. Principii nenegociabile

**Research-first.** Pentru orice informație actuală, volatilă, statistică, tehnică, juridică, despre comportamentul unui search engine/AI provider/crawler: memoria modelului nu e sursă suficientă. Verifică live, în sesiunea curentă.

**Dovada precede afirmația.** Un verdict (HIT, COLIZIUNE, CONFABULARE etc. — §2) nu se publică fără dovada corespunzătoare din standardul de dovezi (§2.2). O relatare verbală, o captură decupată fără interogare, sau „mi-a apărut” nu sunt dovezi suficiente — sunt explicit clasificate ca insuficiente de metodologia laboratorului.

**Nu rescrie retrospectiv fazele vechi.** Un studiu de caz e longitudinal (§0.2/§2.6). Dacă protocolul, taxonomia sau rigoarea s-au maturizat între o fază veche și una nouă, faza veche rămâne așa cum a fost măsurată — nu se „curăță” retroactiv ca să pară mai riguroasă. Diferența dintre date imperfecte și date inexistente e importantă și trebuie păstrată vizibil.

**Publică și erorile.** Query Drift, instabilitate între rulări, rezultate ambigue, greșeli ale propriului protocol — nu se omit, nu se înlocuiesc silențios cu varianta „mai curată”. Un studiu de caz care ascunde erorile pentru a arăta mai bine e un experiment mai slab, nu unul mai reușit (AVL-350).

**Accuracy over rhetoric.** Dacă o formulare puternică nu poate fi demonstrată, folosește formularea mai îngustă și defensabilă. O cifră fără denominator, perioadă și definiție exactă e incompletă.

**Nu fabrica E-E-A-T.** Nu inventa experiențe, teste neefectuate, rezultate proprii inexistente, rulări nedocumentate. `Experience`/`Observație directă` provine strict din: (1) informație oferită explicit de autor/operator, (2) observații deja existente în documentele proiectului, (3) măsurători efectiv executate și documentate în evidence set, (4) verificări efectuate efectiv în task-ul curent.

**Nu inventa mecanisme algoritmice.** Separă permanent ceea ce providerul documentează / ceea ce observăm / ceea ce inferăm / ceea ce ipotetizăm (AVL-001 §9, §2 mai jos). Nu transforma corelația în cauzalitate, apariția-după-intervenție în dovadă de cauzalitate, sau un model provizoriu de maturitate a entității într-o concluzie validată.

**Divulgă conflictul de interese.** Dacă subiectul studiului e o entitate controlată de AI Visibility Lab sau de autorul lui (cazul curent, singurul activ: Alex Matescu / CS-001), acest fapt e un conflict de interese real și trebuie declarat explicit în secțiunea de transparență metodologică (§6.6) — nu ca notă de subsol opțională.

---

## 1. Domeniu de aplicare și non-suprapunere

**Ce e un studiu de caz** (AVL-350, AVL-001 §17 — Nivelul D2): documentarea aplicării continue a metodologiei AI Visibility Lab (entity resolution, coerența semnalelor, dovezi verificabile, separarea observației de inferență) asupra unei entități sau unui brand concret, urmărită de-a lungul mai multor ferestre de măsurare, cu dovezi, limite și rezultate publicate integral.

**Ce NU e** (verifică înainte de a trata un conținut ca studiu de caz):
- **Experiment public** (`/lab/experimente-publice`, Nivelul D) — ipoteză declarată dinainte, teren neutru, nu urmărește o entitate reală în timp în același fel. Colaborările comerciale cu terți vor fi documentate acolo, nu în `/lab/studii-de-caz` (poziție explicită AVL-350, valabilă la data acestui skill — nu presupune că politica nu s-a schimbat fără verificare).
- **Documentație metodologică normativă** (`/lab/metodologie`, ex. AVL-201) — stabilește protocolul; studiul de caz îl *aplică* și raportează rezultate.
- **Articol** (`/lab/articole`) — analiză/ghid conceptual, nu documentare longitudinală a unei entități reale. Un articol poate fi ancorat într-un caz concret fără caracter longitudinal/multi-fază — rămâne `Analiză de caz` ca `articleType`, nu devine studiu de caz doar pentru că discută un exemplu real (distincție explicită, `lab-seo.ts` + `publica-articol-lab` §0.3).
- **„Studii de caz” ca sursă citată** (Tier 5, AVL-001 §10) — studii de caz *externe*, folosite ca dovadă terță în research. Sens complet distinct de secțiunea proprie a laboratorului; nu le confunda în claim ledger sau în citations.

**Identificator**: un studiu de caz individual NU primește niciodată un ID `AVL-xxx` (rezervat documentelor normative/de poziționare, ca AVL-350 însuși). Primește un identificator propriu, format `CS-NNN` (ex. `CS-001`), afișat vizibil în corpul studiului (§6.2), nu ca metadată tehnică separată. Nu există încă, în repository, un fișier „registru de ID-uri” formal (AVL-350 îl menționează conceptual, dar nu e implementat) — determină următorul ID liber inspectând `labCaseStudyMeta` (`src/data/lab-seo.ts`) și studiile de caz deja publicate; dacă niciunul nu e publicat, primul e `CS-001`. Nu inventa un fișier de registru nesolicitat — semnalează în raport (§13) dacă lipsa lui devine o problemă reală.

---

## 2. Standardul metodologic al laboratorului (nu-l reinventa per studiu)

### 2.1 — Cadrul epistemic (AVL-001 §9)

Marchează explicit natura fiecărei afirmații importante, fără etichetare mecanică a fiecărui paragraf — doar unde diferența contează:

- **Documentat** — un rezultat direct al unui experiment documentat de laborator, valabil în limitele testului și condițiilor respective.
- **Observație directă** — măsurat/capturat/executat efectiv, cu dovadă (§2.2).
- **Inferat** — concluzie rezonabilă din mai multe observații/surse, dar neconfirmată explicit de furnizor („sugerează”, „indică”, „e compatibil cu”).
- **Ipoteză** — explicație/predicție care urmează să fie testată și care trebuie să poată fi infirmată. Un „model provizoriu de maturitate” sau un pattern observat pe două faze e ipoteză, nu concluzie.
- **Opinie editorială** — recomandare argumentată sau poziție a autorului/laboratorului.

### 2.2 — Standardul de dovezi (AVL-201 §12, aplicabil dincolo de Tabula Rasa oricărui caz cu măsurători pe sisteme AI/search)

**Dovezi acceptate**: captură integrală (interogare + răspuns), export HTML/PDF/text al conversației, URL de partajare accesibil fără date sensibile, înregistrare video a sesiunii, log de server/CDN/WAF, `robots.txt`/antete HTTP capturate la dată, JSON-LD/export validator, registru de rulare cu timestamp și configurație.

**Dovezi insuficiente singure**: relatare verbală („mi-a apărut”), captură decupată fără interogare, captură fără dată/identificator de rulare, text copiat manual fără dovada contextului, rezumat al operatorului fără răspunsul brut, un singur rezultat selectat dintr-o serie nedeclarată.

**Convenția de denumire a evidence set-ului brut** (arhiva internă, nu neapărat numele fișierului publicat — vezi §7.2): `{Fază}_{entitate}_{motor}_{queryID}_{run}_{YYYYMMDD-HHMM}_{limbă}.ext` (ex. `F0_AlexMatescu_ChatGPT_QID03_R02_20260721-0935_RO.png`).

**Protocolul sesiunii curate** (AVL-201 §11) — pentru orice măsurătoare nouă inclusă în studiu: fereastră privată/profil dedicat, conversație nouă per interogare, memorie dezactivată unde e posibil, limbă și locație explicite fără VPN, fără introducerea prealabilă a numelui entității în aceeași sesiune, fără reformulări iterative înainte de capturarea rezultatului principal. Unde platforma nu permite controlul unei variabile, limitarea se declară explicit, nu se ascunde.

### 2.3 — Taxonomia rezultatelor (AVL-201 §13 — baseline canonic)

| Cod | Definiție |
|---|---|
| HIT | Entitatea corectă e identificată, răspunsul satisface criteriul principal. |
| HIT-C | HIT cu citarea explicită a sursei canonice. |
| HIT parțial | Entitate corectă, răspuns incomplet/vag/parțial depășit/slab atribuit. |
| MENȚIUNE | Entitatea apare, dar nu e răspunsul principal — nu se echivalează cu HIT. |
| COLIZIUNE | Răspunsul atribuie datele altei entități sau amestecă identități. |
| CONFABULARE | Răspunsul inventează/afirmă fără suport un fapt despre entitate. |
| SURSĂ GREȘITĂ | Răspuns plauzibil, dar citarea nu susține afirmația sau se referă la altă entitate. |
| FAPT ÎNVECHIT | Informație corectă cândva, nu mai actuală. |
| NULL | Entitatea lipsește sau sistemul declară informație insuficientă — nu e automat o eroare a platformei. |
| REFUZ / LIMITARE | Platforma refuză, nu poate căuta, sau afișează eroare — raportat separat de NULL. |

Un studiu de caz **poate extinde** această taxonomie cu etichete proprii (precedent: CS-001 a adăugat `INSTABIL`, `NEDETERMINAT`, `QUERY_DRIFT`, `NEADJUDICAT`) — dar fiecare etichetă adăugată trebuie **definită explicit** în studiu, la prima ei folosire. Nu redefini silențios sensul unei etichete din baseline. Dacă studiul nu e de tip entity-resolution (subiect diferit de Tabula Rasa), poate declara un protocol/taxonomie propriu — cu aceeași rigoare (etichete definite, criterii de utilizare explicite) — nu presupune că taxonomia AVL-201 se aplică mecanic la orice tip de subiect.

### 2.4 — Scorarea (opțională, AVL-201 §14)

Dacă studiul publică un scor agregat, nu-l publica fără numărul de rulări, perioada, motoarele acoperite și distribuția categoriilor (F0-REQ-007) — două entități pot avea același scor prin combinații foarte diferite. Nu prezenta scorul ca probabilitate internă a platformei.

### 2.5 — Ierarhia surselor (AVL-001 §10, identică cu `publica-articol-lab` §1.1)

Documentație oficială a furnizorului → standarde/specificații publice → lucrări academice evaluate → publicații ale laboratoarelor de cercetare → experimente proprii reproductibile → declarații publice ale reprezentanților furnizorilor → analize tehnice independente → studii de caz *externe* (nu confunda cu secțiunea proprie — §1) → articole editoriale/surse secundare. Absența documentației unui semnal nu înseamnă confirmarea absenței lui — doar că folosirea lui nu e confirmată public.

### 2.6 — Fazele longitudinale (AVL-001, F0–F3)

- **F0/T0** — baseline-ul inițial, adesea imperfect (protocol încă în formare) — se păstrează ca atare (§0 mai sus).
- **F1** — casa entității: consolidarea sursei canonice.
- **F2** — prezența distribuită: corroborarea din surse independente.
- **F3** — re-măsurarea: același set înghețat, același protocol, aceeași taxonomie, atribuire onestă a schimbării.

F3 trebuie să reutilizeze exact aceleași identificatoare de interogări ca fazele anterioare; interogări noi pot fi adăugate ca serie separată, dar nu amestecate în scorul comparativ principal (F0-REQ-008). Orice schimbare de motor/model/interfață/țară/limbă/metodă de captură se semnalează explicit (F0-REQ-009). Definiția F1–F3 e descrisă la nivel de cercetare (AVL-104), nu are încă document normativ propriu de Nivel C — nu presupune o rigoare pe care sursa n-o afirmă încă.

---

## Faza 0 — Inspecție și ingest

Citește obligatoriu, înainte de orice modificare: fișierul `.md` sursă și folderul lui `images/`; `src/data/lab-seo.ts` (`LabArticleMeta`, `labCaseStudyMeta`, `sortedLabCaseStudies`, `latestLabCaseStudy`, `buildArticleJsonLd`, `buildLabCaseStudyHead`); `src/data/lab.ts` (`labNav`, nodul `/lab/studii-de-caz` — copiii lui servesc doar routing-ul, nu afișarea, §9 pas 4); `src/pages/Lab.tsx` (`labPageContent`, `labPageJsonLdOverrides`, `LabCaseStudyIndex`); `src/routes/_site/lab/$parent.$slug.tsx` (confirmă că `buildLabCaseStudyHead` e încă în lanțul de head-uri — dacă lipsește, oprește-te și raportează, nu-l re-implementa fără verificare); un studiu de caz `.ts` existent ca referință de stil (`src/data/lab-content/tabula-rasa-identitate-search-ai-search.ts`, dacă există la momentul execuției); `src/components/Seo.tsx` (`alexMatescuPerson`, `alexMatescuWebSite`); `public/sitemap.xml`; `public/images/lab/`; documentele AVL relevante (AVL-001, AVL-350, și protocolul de măsurare aplicabil — AVL-201 pentru Tabula Rasa, sau documentul propriu al altui protocol dacă subiectul diferă).

**Nu presupune din acest document structura reală a codului** dacă implementarea proiectului s-a schimbat — verifică mereu fișierele de mai sus, nu memoria acestui SKILL.md.

### 0.1 — Structura de folder (sursă)

```
src/content/studii de caz/{NN}. {Nume subiect}/{slug}.md
src/content/studii de caz/{NN}. {Nume subiect}/images/*
```

`{NN}` e prefixul numeric al subiectului (zero-padded, 2 cifre), aliniat cu partea numerică din `CS-NNN` (ex. `01. Alex Matescu` ↔ `CS-001`). Un subiect nou (entitate/brand nouă documentată) primește un folder nou cu `{NN}` următor. O fază nouă de măsurare pe un subiect deja existent **nu** creează un folder sau un `.md` nou — extinde documentul existent (§0.2).

**Slug**: derivă din ultima componentă a `canonical`-ului; trebuie să coincidă cu numele fișierului `.md` (fără prefixul de folder) și cu segmentul final al rutei `/lab/studii-de-caz/{slug}`. Nu adăuga un câmp `slug` separat în frontmatter.

**Detectare update vs. caz nou vs. fază nouă**: `grep` slug-ul în `lab-seo.ts`/`lab.ts`/`Lab.tsx`. Dacă apare deja (fie în `labCaseStudyMeta`, fie doar ca fișier `.ts` neconectat, ca la CS-001 la data acestui skill), tratează ca update/fază nouă pe caz existent — nu duplica intrări, nu recrea fișierul `.ts` de la zero fără să păstrezi ce e deja corect în el.

### 0.2 — Scop: caz nou / fază nouă / update minor

- **Studiu de caz nou** (prima publicare pentru un subiect fără `CS-NNN` alocat) → tot pipeline-ul (Faza 1–10 + audituri).
- **Fază nouă / re-măsurare** pe un caz deja publicat (ex. adaugă F2 la un caz aflat la F0→F1) → Faza 1 pe conținutul nou, gate de originalitate doar dacă schimbă unghiul studiului, Faza 4 (arhitectură GEO/AEO) pe secțiunile noi, Faza 5–9 obligatorii pe tot documentul (metadata/HTML se regenerează integral din documentul actualizat), audit anti-halucinare pe tot documentul. Secțiunile fazelor anterioare **nu se rescriu** — se pot adăuga clarificări/corecții explicit datate, nu o „curățare” retroactivă (§0 principii).
- **Update minor** (typo, link mort, o cifră depășită, corecție de figură) → verifică live doar afirmațiile modificate, sări gate-ul de originalitate și arhitectura GEO, rulează build/lint/typecheck, raport scurt (§9).

### 0.3 — Contract de frontmatter

```yaml
---
title: ""
description: ""
author: "Alex Matescu"
organization: "AI Visibility Lab"

date_published: "YYYY-MM-DDTHH:mm:ss±HH:mm"
date_modified: "YYYY-MM-DD"
last_reviewed: "YYYY-MM-DD"

category: ""
article_type: "Studiu de caz"

language: "ro-RO"

canonical: "https://delamatescu.ro/lab/studii-de-caz/{slug}"

keywords:
  - ""
---
```

Regulile de date, publication-time și capitalizare sunt **identice** cu `publica-articol-lab` §0.3/§0.4/§6.2 — nu le reinventa: `date_published` e momentul primei publicări publice reale (niciodată ora creării draftului, a research-ului sau a rulării agentului), ISO complet cu oră/offset pentru orice caz nou; `date_modified` se schimbă doar la modificare editorială reală (adăugarea unei faze noi **este** o modificare reală); `last_reviewed` e data ultimei verificări factuale reale, nu completată automat.

`category` — obligatoriu, EXACT una dintre cele patru valori din `LabArticleCategory` (`Search & Retrieval`, `Technical Visibility`, `Entities & Citations`, `AI Ecosystem`, `src/data/lab-seo.ts`). Alege pe conținut, nu presupune că un studiu de entity resolution e automat „Entities & Citations” dacă subiectul diferă. Determină `articleSection` în JSON-LD (§7.2). Dacă nu se potrivește rezonabil, semnalează în raport, nu extinde taxonomia unilateral.

`article_type` — în frontmatter (`.md`), valoarea corectă și onestă e literal `"Studiu de caz"` — documentul chiar este asta. **Nu confunda cu `articleType` din Meta `.ts`** — vezi excepția deliberată de la §7.1: acolo valoarea trebuie să fie `"Analiză de caz"`, nu `"Studiu de caz"`, dintr-un motiv tehnic explicit, nu editorial.

---

## Faza 1 — Claim ledger și verificare factuală

Identic cu `publica-articol-lab` Faza 1 (§1.1–§1.6 acolo) — ierarhie de surse, verificare URL-uri (un fetch eșuat nu e automat sursă invalidă), routing pe produs+afirmație (nu doar companie), regula denominatorului pentru orice cifră, citare vizibilă pentru afirmații materiale, niveluri de certitudine separate explicit (§2.1 mai sus, vocabularul propriu al corpusului AVL). Pentru afirmațiile despre **rezultatele măsurate ale studiului însuși** (nu despre lumea externă), claim ledger-ul citează dovada din evidence set (§2.2), nu o sursă externă — un verdict HIT/COLIZIUNE e o afirmație factuală care are nevoie de dovadă documentată, exact ca o statistică.

---

## Faza 2 — Verificarea rigorii metodologice a măsurătorilor

Înainte de a accepta orice verdict (HIT, COLIZIUNE, CONFABULARE etc.) inclus în studiu:

1. Verifică fizic că dovada corespunzătoare există și se încadrează în „dovezi acceptate” (§2.2), nu doar în „insuficiente singure”.
2. Verifică că verdictul folosește o etichetă din taxonomia declarată a studiului (§2.3) — dacă folosește una nouă, confirmă că e definită explicit înainte de prima utilizare.
3. Dacă query-ul folosit pentru o rulare diferă de formularea canonică înghețată a Query Set-ului, marchează explicit fenomenul (precedent: `QUERY_DRIFT`), nu prezenta rezultatul ca fiind comparabil cu celelalte rulări din același Query Set fără această mențiune.
4. Dacă aceeași interogare produce rezultate diferite în interiorul aceleiași ferestre de măsurare, nu alege silențios „varianta mai bună” — documentează instabilitatea (precedent: `INSTABIL`) sau, dacă dovada individuală nu poate fi izolată cu certitudine, marchează-o ca atare, nu o omite.
5. Motoare/surse insuficient adjudecate (ex. volum mare de capturi, mapping incert) nu intră în agregările cantitative — se marchează explicit (precedent: `NEADJUDICAT`), datele rămân în evidence set.
6. Nu transforma corelația temporală (intervenție → schimbare de răspuns) în cauzalitate fără dovadă suficientă pentru a izola contribuția fiecărei intervenții.

---

## Faza 3 — Gate de originalitate / E-E-A-T (obligatoriu înainte de redactarea finală)

Un studiu de caz e prin natura lui research original — dar tot trebuie verificat:

- **Who** — autor/operator clar, `@id` consistent (`https://delamatescu.ro/#alex-matescu`), `sameAs` reutilizate din `alexMatescuPerson`, nu inventate.
- **How** — metodologie explicită: entitatea/obiectul de studiu și motivul alegerii, Query Universe/Query Set-urile înghețate folosite cu criteriul din spatele lor (AVL-350 — „Query Universe” e spațiul mai larg de interogări posibile, „Query Set” e subsetul înghețat folosit efectiv într-o fază; corpusul nu elaborează încă o procedură rigidă de construcție a Query Universe-ului dincolo de asta — nu inventa una), taxonomia folosită, configurația sesiunii (§2.2), limitele.
- **Why** — ce problemă reală documentează, pentru cine (specialiști SEO/GEO/AEO, branduri, persoane — AVL-350), ce oferă diferit față de un articol conceptual pe același subiect.
- **Originalitate** — automată prin natura studiului (măsurători proprii), dar nu fabrica mai multă rigoare decât dovezile susțin; nu ascunde rezultate ambigue/negative pentru un studiu „mai frumos” (§0).

**Conflict de interese — verificare obligatorie, nu opțională**: dacă entitatea studiată e controlată de AI Visibility Lab sau de autorul lui, secțiunea de transparență metodologică (§6.6) trebuie să declare acest fapt explicit, ca potențial conflict de interese real, nu ca disclaimer formal golit de conținut.

---

## Faza 4 — Arhitectura GEO/AEO/SEO a conținutului

Identic cu `publica-articol-lab` Faza 3: search intent clar, answer-first pentru întrebările centrale fără a transforma textul în liste artificiale, extractability per H2/H3 (entități numite explicit, pronume neambigue, cifre cu unitate/perioadă/denominator, tabele cu headers), un singur H1, tabele doar când ajută comparații/metodologie/date reale, internal linking 2–5 linkuri relevante (articol-pilon, metodologie, alte studii de caz conexe dacă există) cu anchor descriptiv.

Specific studiilor de caz: tabelele de rezultate agregate (matrice sistem × categorie de verdict) sunt aproape întotdeauna justificate — sunt chiar tipul de conținut structurat pe care extractability îl recompensează, nu „tabel pentru GEO” artificial.

---

## Faza 5 — Redactare / actualizare

Dacă primești un draft (ca la CS-001): păstrează teza, structura și vocea autorului, corectează afirmațiile neconfirmate, nu dilua concluziile provizorii transformându-le în certitudini și nu le transforma nici invers în ipoteze mai slabe decât dovada permite. Dacă primești doar un brief: research → claim ledger (Faza 1) → verificare rigoare (Faza 2) → gate E-E-A-T (Faza 3) → arhitectură (Faza 4) → abia apoi redactare.

`title` — descrie corect studiul, nu promite mai mult decât demonstrează („un studiu longitudinal despre X”, nu „X e acum complet vizibil în AI”).
`description` — rezumă fidel obiectul de studiu, fazele acoperite și tipul de dovadă; fără limite rigide de caractere.

Pentru o **fază nouă** pe un caz existent: integrează noile secțiuni păstrând integral structura fazelor anterioare; actualizează secțiunea de rezultate agregate/matrice doar dacă noua fază o extinde real; actualizează „Ce urmărim în fazele următoare” dacă ipotezele au fost testate.

---

## Faza 6 — Structura obligatorie a corpului (derivată din AVL-350 + CS-001)

Fiecare studiu de caz publicat trebuie să conțină, în această ordine, tot ce e aplicabil subiectului:

### 6.1 — Byline

Identic cu `publica-articol-lab` §6.1 — reutilizează exact același bloc, aceleași reguli fixe (link către `/despre` cu `rel="author"`, rol vizibil „Fondator și coordonator”, link către `/lab`, cele trei date cu text vizibil doar-dată/`datetime` complet pentru `date_published` nou, clauza „Actualizat:” condiționată de o zi calendaristică efectiv diferită). Nu recrea o variantă proprie.

### 6.2 — Tabelul de identificare a studiului

Imediat sub byline, un tabel scurt cu rândurile: **Studiu de caz** (`CS-NNN` — subiect), **Experiment** (numele protocolului aplicat, ex. „Tabula Rasa”), **Status** (`în desfășurare` / `încheiat`), **Faze analizate** (ex. `T0/F0 → F1`), **Obiect de studiu** (o propoziție despre ce anume se măsoară). Acesta e locul unde `CS-NNN` devine vizibil — nu există alt câmp tehnic pentru el (§1).

### 6.3 — Disclosure de evidence-backing

O mențiune vizibilă (blockquote sau echivalent) că rezultatele sunt susținute, acolo unde evidence set-ul permite, de dovezi originale, și ce editare minimă (dacă există) s-a permis pe capturi (ex. decupare doar pentru lizibilitate, cu interogarea și răspunsul relevant păstrate). Adaptează formularea la studiul concret — la data acestui skill există un singur precedent (CS-001), nu tratat încă drept boilerplate imuabil.

### 6.4 — Corp

Rezumat → obiect de studiu și motivul alegerii lui → ipoteza testată (explicit falsifiabilă) → Query Universe/Query Set înghețat cu criteriul din spate → taxonomia folosită (§2.3) → rezultate pe fază, cu figuri de evidence (§8) → pattern-uri/modele propuse, etichetate explicit ca ipoteză (§2.1), nu ca concluzie.

### 6.5 — „Ce NU demonstrează acest studiu” (obligatoriu, AVL-350)

Secțiune dedicată, explicită, care delimitează ce NU pot susține datele — mecanisme algoritmice neconfirmate, cauzalitate neizolabilă, generalizare dincolo de fereastra/configurația măsurată. Nu o contopi difuz în altă secțiune — AVL-350 o cere ca element propriu.

### 6.6 — „Transparență metodologică” (obligatoriu, AVL-350)

Secțiune finală dedicată (înainte de footer, §6.7), care acoperă explicit: conflictul de interese dacă subiectul e o entitate controlată de Lab/autor (§3 — nu opțional în acel caz); ce se păstrează în evidence set; limitările metodologice reale ale fazelor incluse (inclusiv ale fazelor imperfecte, fără eufemizare); ce elemente ale protocolului au fost păstrate deliberat imperfecte/nereconstruite; ce motoare/surse au fost excluse din agregări și de ce; disclaimer explicit corelație-vs-cauzalitate; linia de status finală a studiului.

### 6.7 — Footer standardizat

Identic, cuvânt cu cuvânt, cu formula din `publica-articol-lab` §6.1: „Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală [și a surselor]: {dată}.” Nu parafraza, nu omite.

---

## Faza 7 — Meta data (`.ts`) și entity consistency

### 7.1 — `LabArticleMeta` reutilizat, cu o excepție deliberată

Nu există încă un tip `LabCaseStudyMeta` propriu — un studiu de caz reutilizează tipul `LabArticleMeta` din `src/data/lab-seo.ts` (aceleași câmpuri obligatorii: `title`, `description`, `canonical`, `datePublished`, `dateModified`, `category`, `articleType`, `faq`; opționale: `about`, `lastReviewed`, `keywords`, `citations`, `image`). Adnotează explicit `: LabArticleMeta` (`import type { LabArticleMeta } from "@/data/lab-seo"`).

**Excepția deliberată la regula „`.md` și `.ts` trebuie identice”** (valabilă altfel, `publica-articol-lab` §5.5): `articleType` din Meta `.ts` **trebuie** să fie literal `"Analiză de caz"`, nu `"Studiu de caz"` — `LabArticleType` (union type) nu conține valoarea `"Studiu de caz"`, iar acest câmp e inert pentru un studiu de caz (nu se afișează nicăieri vizibil; singurul consumator vizual al lui `articleType`, `LabArticleIndex`, ia datele exclusiv din `labArticleMeta`, niciodată din `labCaseStudyMeta`). E folosit doar pentru ca `buildArticleJsonLd` să aibă o valoare validă de compilat. Frontmatter-ul `.md` păstrează corect `"Studiu de caz"` (§0.3) — divergența dintre `.md` și `.ts` aici e **intenționată și documentată**, nu o inconsistență de reparat.

`category` **trebuie** să fie identică între `.md` și `.ts` — aici regula standard se aplică normal (nu e afectată de excepția de mai sus).

`lastReviewed` — completează-l mereu pentru un studiu de caz nou (nu există precedent legacy fără el în această secțiune) — opt-in-ul spre formatul `@graph` (§7.2) trebuie să fie automat, nu o decizie per caz.

Nu inventa un URL pentru `image` dacă nu există unul real la nivel de articol (distinct de figurile de evidence, §8).

### 7.2 — JSON-LD

`buildArticleJsonLd` (din `lab-seo.ts`) e reutilizat identic — nu duplica logica. Cu `lastReviewed` prezent, produce automat formatul `@graph` (`Person` + `WebSite` embed complet, `WebPage`, `Article` cu `articleSection: meta.category`, `FAQPage` doar dacă există FAQ). Head-ul SSR e deja produs de `buildLabCaseStudyHead` (`lab-seo.ts`), apelat din `_site/lab/$parent.$slug.tsx` — verifică-l, nu-l reimplementa.

### 7.3 — Entity consistency

Identic cu `publica-articol-lab` §5.1: `Person` = `alexMatescuPerson`, `@id: https://delamatescu.ro/#alex-matescu`, referențiat mereu prin `@id`, niciodată un nod nou; `name` rămâne strict `"Alex Matescu"`, fără titulaturi. `WebSite` = `alexMatescuWebSite`, embed complet (nu doar `@id`) — pagina rămâne self-contained. `Publisher` = `Organization` „AI Visibility Lab” (`labPublisher`, `lab-seo.ts`), identic pe toate studiile. Nu inventa `sameAs` noi.

### 7.4 — FAQ

Opțional, ca la articole — doar dacă există întrebări reale utile, nu pentru schema markup. FAQ vizibil == FAQ în JSON-LD.

---

## Faza 8 — HTML / conținut `.ts` și evidence figures

Conversie manuală (nu convertor markdown generic), stil identic cu `publica-articol-lab` Faza 6: `<p>`, `<h2>`/`<h3>`, `<table>` cu headers explicite, `<blockquote>`, referințe inline dacă există footnotes, linkuri externe cu `target="_blank" rel="noopener noreferrer"`.

**Evidence figures** — identic cu `publica-articol-lab` §6.3, aplicat aici la capturile experimentale, nu la ilustrații: verifică fizic existența fiecărei imagini referențiate în `.md`; nu regenera/altera/înlocui — sunt dovadă, nu ilustrație; copiază neschimbat, cu numele original, în `public/images/lab/{slug}/` (**namespace comun cu articolele**, nu `public/images/lab/studii-de-caz/{slug}/` — confirmă calea reală înainte de a presupune); convertește în `<figure><img loading="lazy" alt="..."/><figcaption>...</figcaption></figure>`, `alt` exact din Markdown, `figcaption` exact din caption-ul existent (fără inventare); imagine lipsă referențiată în `.md` → **oprește publicarea**, raportează exact fișierul; imagini neutilizate în folderul `images/` → doar raportate, nu copiate.

Numele fișierelor publicate (`fig_*.jpg` etc.) pot fi descriptive, nu trebuie să respecte convenția strictă de denumire a evidence set-ului brut (§2.2) — aceea guvernează arhiva internă, nu neapărat numele fișierului final din `public/images/lab/{slug}/`.

---

## Faza 9 — Wiring

Actualizează exact:

1. **`src/data/lab-content/{slug}.ts`** (fără prefix numeric — spre deosebire de `lab-content` al articolelor, fișierele de studii de caz observate în repository nu folosesc `{n}. ` — verifică convenția reală la momentul execuției, nu presupune): `export const {slug}Meta: LabArticleMeta = {...}` + `export const {slug}Html = \`...\``.
2. **`src/data/lab-seo.ts`** — import `{slug}Meta`, adaugă-l în `labCaseStudyMeta` (array separat de `labArticleMeta` — **nu le amesteca**; studiile de caz nu intră în `sortedLabArticles`/indexul „Featured” al `/lab/articole`).
3. **`src/pages/Lab.tsx`** — import `{slug}Html`, adaugă în `labPageContent` cu cheia `/lab/studii-de-caz/{slug}`. (`labPageJsonLdOverrides` deja include `labCaseStudyMeta` prin spread — nu necesită pas separat, doar verificare.)
4. **`src/data/lab.ts`** — adaugă un copil nou în `children` al nodului `/lab/studii-de-caz` din `labNav`: `{ to: "/lab/studii-de-caz/{slug}", label: title, lead: description }`. **Obligatoriu tehnic** (nu opțional ca la articole): fără acest nod, `findLabPage` nu găsește ruta și `LabDetail` redirecționează spre `/lab` (`Navigate to="/lab"`). De la 2026-09-04, acest nod servește **exclusiv routing-ul** (`findLabPage`/`findLabParent`) — **nu** mai alimentează și lista vizibilă de pe `/lab/studii-de-caz`: pagina index randează o componentă dedicată, `LabCaseStudyIndex` (`src/pages/Lab.tsx`), sortată automat din `sortedLabCaseStudies`/`latestLabCaseStudy` (`src/data/lab-seo.ts`) — exact simetric cu `LabArticleIndex`/`sortedLabArticles` de la `/lab/articole`. Nu adăuga nimic manual pentru afișare — un studiu de caz nou apare automat, la poziția corectă (cel mai recent `datePublished` primul), doar din pasul 2 de mai sus (`labCaseStudyMeta`).
5. **`public/images/lab/{slug}/`** — confirmă că toate evidence figures au fost copiate (§8).
6. **`public/sitemap.xml`** — adaugă `<url><loc>https://delamatescu.ro/lab/studii-de-caz/{slug}</loc><lastmod>YYYY-MM-DD</lastmod>...</url>`, urmând formatul `changefreq`/`priority` deja folosit de restul intrărilor `/lab`.

**Nu edita** `src/data/lab-content/avl-350.ts` (textul de poziționare al secțiunii `/lab/studii-de-caz`) pentru publicarea de rutină a unui studiu de caz nou sau a unei faze noi — e document normativ, atins doar la o schimbare reală de politică editorială a secțiunii, decizie separată și explicită, nu un efect automat al publicării de conținut.

---

## Faza 10 — Technical SEO audit, build și validare

Identic cu `publica-articol-lab` Faza 9/10: on-page (H1 unic, title, description, canonical, headings, alt text, `language`, date, structured data), indexability (fără `noindex` accidental), URL consistency (canonical == slug == rută == sitemap == `lab.ts`/`Lab.tsx`/`lab-seo.ts`).

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run test   # dacă există teste relevante (proiectul are vitest — verifică ce acoperă)
```

(verifică `package.json` înainte să presupui comenzile). **`llms.txt`**: nu-l modifica automat — nu e tratat ca requirement universal GEO, la fel ca la articole. **IndexNow**: proiectul nu are integrare — nu construi una pentru un singur studiu. **`robots.txt`**: nu-l modifica pentru publicarea de rutină — doar confirmă că nu blochează accidental noua rută. Dacă mediul permite, pornește dev server și confirmă pe ruta reală: title, description, canonical, H1, byline, tabelul de identificare, figurile (fără 404), JSON-LD (`@graph`), și că `/lab/studii-de-caz` listează noul caz o singură dată.

**AI crawler accessibility**: verificat deja global (`robots.txt` permite Googlebot, Bingbot, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot etc.) — confirmă doar că nu s-a schimbat, nu re-auditați infrastructura la fiecare studiu.

---

## Faza 11 — Audit final anti-halucinare

Identic cu `publica-articol-lab` Faza 11/11.1: caută afirmații absolute, superlative, „garantează”, „determină”, „factor de ranking”, „AI citează/preferă”, procente, comparații, cauzalitate — pentru fiecare, sursele/dovada demonstrează *exact* formularea? Verifică explicit că studiul NU prezintă fără dovezi mituri GEO (`llms.txt` ca requirement universal, JSON-LD/FAQ schema ca factor garantat de citare, „chunk size ideal”, branded mentions ca cauzalitate demonstrată, „SEO is dead”).

Specific studiilor de caz: verifică suplimentar că niciun verdict din taxonomie (§2.3) nu apare fără dovada corespunzătoare (§2.2), că `QUERY_DRIFT`/instabilitatea/motoarele neadjudecate nu au fost șterse silențios din raportare, și că un pattern observat pe puține faze nu e prezentat ca „model validat”.

---

## Faza 12 — Audit final E-E-A-T și AEO

**E-E-A-T**: Who (autor clar, entity consistent) · How (Query Universe/Set, protocol, taxonomie, configurație sesiune, limite — toate explicite) · Why (reader intent clar pentru specialiști SEO/GEO/AEO și branduri) · Conflict de interese (declarat explicit dacă aplicabil, §3/§6.6) · Originalitate (automată prin natura studiului, dar rezultatele negative/ambigue publicate onest, §0).

**AEO/extractability**: pentru întrebările centrale ale studiului — există răspuns clar extractibil fără să-și piardă sensul; entitatea și fereastra temporală sunt explicite; tabelele de rezultate sunt interpretabile independent; nu există ambiguitate între verdictele diferitelor faze fără explicație.

---

## Faza 13 — Raport final

Scalează cu scopul din §0.2. Pentru **studiu nou** sau **fază nouă**, raportul include:

1. Rezumat (ce ai creat/modificat, ce fază acoperă).
2. Fișiere atinse (listă exactă).
3. Claim ledger (poate fi sintetizat pentru afirmații repetitive).
4. Verdicte incluse (§2.3) cu dovada corespunzătoare — listă sau tabel.
5. Afirmații eliminate/reformulate — ce și de ce.
6. Metadata: `title`, `description`, `canonical`, date, `category`, `articleType` (.md vs .ts — confirmă divergența intenționată, §7.1), `lastReviewed`, `CS-NNN` alocat, keywords.
7. Entity/schema: Person, WebSite, Article (`articleSection`), FAQ dacă există, publisher.
8. Wiring: confirmare pas cu pas a Faza 9 (fișier `.ts`, `labCaseStudyMeta`, `labPageContent`, nod `labNav`, imagini, sitemap).
9. Evidence figures: listă exactă copiate, orice fișier lipsă care a oprit publicarea, orice fișier neutilizat raportat.
10. Secțiunile obligatorii AVL-350 confirmate prezente: „Ce NU demonstrează acest studiu” (§6.5), „Transparență metodologică” cu conflict de interese dacă aplicabil (§6.6).
11. Rezultate tehnice: typecheck / lint / build / runtime — fiecare PASS/FAIL/NOT RUN.
12. Limitări — ce nu a putut fi verificat.

Pentru **update minor**: rezumat de 2–3 rânduri, fișierele atinse, doar afirmațiile modificate, rezultatele tehnice.

Încheie cu formula de stop: „Procesul intern este complet. Nu am executat git add, git commit, git push sau deploy. Studiul de caz este pregătit local. Operațiile Git și publicarea efectivă rămân de executat manual de utilizator.” Nu declara „studiul e publicat” sau „e live”.

---

## Checklist final obligatoriu

**Metodologie (§0–§2)**
- [ ] Toate verdictele (HIT/COLIZIUNE/CONFABULARE/etc.) au dovada corespunzătoare din standardul de dovezi (§2.2), nu doar o afirmație.
- [ ] Taxonomia folosită e declarată explicit în studiu; orice etichetă nouă e definită la prima folosire.
- [ ] Query Drift/instabilitate/motoare neadjudecate sunt marcate explicit, nu ascunse.
- [ ] Fazele vechi nu au fost rescrise retroactiv ca să pară mai riguroase.
- [ ] Fapte, observații, inferențe și ipoteze sunt separate explicit (§2.1).
- [ ] Niciun mecanism algoritmic inventat; corelația nu a fost transformată în cauzalitate.
- [ ] Conflictul de interese e declarat explicit dacă subiectul e o entitate controlată de Lab/autor.
- [ ] Rezultatele ambigue/negative sunt publicate, nu omise pentru un studiu „mai curat”.

**Structură de conținut (§6)**
- [ ] Byline identic cu regula `publica-articol-lab` §6.1.
- [ ] Tabelul de identificare (`CS-NNN`, experiment, status, faze, obiect de studiu) prezent.
- [ ] Secțiunea „Ce NU demonstrează acest studiu” prezentă.
- [ ] Secțiunea „Transparență metodologică” prezentă și completă.
- [ ] Footer standardizat prezent, cuvânt cu cuvânt.

**Metadata și entity consistency (§7)**
- [ ] `category` identică `.md`/`.ts`; una dintre cele patru valori permise.
- [ ] `articleType` = `"Studiu de caz"` în `.md`, `"Analiză de caz"` în `.ts` — divergență intenționată confirmată, nu „corectată”.
- [ ] `lastReviewed` completat (opt-in `@graph`).
- [ ] `@id` Person identic peste tot; publisher `labPublisher` consistent.
- [ ] `CS-NNN` determinat corect (verificat față de `labCaseStudyMeta` existent, nu presupus).

**Evidence figures (§8)**
- [ ] Fiecare imagine referențiată verificată fizic; nicio imagine regenerată/alterată.
- [ ] Copiate neschimbate în `public/images/lab/{slug}/`, nume original.
- [ ] `<figure>`/`alt`/`figcaption` exacte din sursă, fără inventare.
- [ ] Imagine lipsă → publicare oprită și raportată, nu placeholder.

**Wiring (§9)**
- [ ] `labCaseStudyMeta` actualizat (nu amestecat cu `labArticleMeta`).
- [ ] `labPageContent` actualizat cu cheia `/lab/studii-de-caz/{slug}`.
- [ ] Nod copil adăugat în `labNav` sub `/lab/studii-de-caz` (obligatoriu tehnic pentru routing).
- [ ] `sitemap.xml` actualizat.
- [ ] AVL-350 (`avl-350.ts`) neatins, cu excepția unei decizii editoriale explicite separate.

**Tehnic**
- [ ] Typecheck, lint, build trec; runtime verificat dacă mediul permite.
- [ ] Studiul apare o singură dată pe `/lab/studii-de-caz`.
- [ ] Niciun `git add`/`commit`/`push`/deploy executat.

---

## Ce NU se face (recapitulare rapidă)

- Nu publica un verdict (HIT/COLIZIUNE/CONFABULARE/etc.) fără dovada corespunzătoare din §2.2.
- Nu rescrie retroactiv o fază veche ca să pară mai riguroasă.
- Nu ascunde Query Drift, instabilitate sau motoare neadjudecate.
- Nu omite secțiunile obligatorii AVL-350: „Ce NU demonstrează acest studiu” (§6.5) și „Transparență metodologică” cu conflict de interese (§6.6).
- Nu folosi `"Studiu de caz"` ca `articleType` în `.ts` — union type-ul nu-l acceptă; folosește `"Analiză de caz"` (§7.1), păstrând totuși `"Studiu de caz"` corect în frontmatter `.md`.
- Nu amesteca `labCaseStudyMeta` cu `labArticleMeta` — array-uri separate, intenționat.
- Nu sări peste nodul copil din `labNav` — fără el, ruta nu se rezolvă (Faza 9, pasul 4).
- Nu inventa un fișier de registru CS-NNN care nu există — determină ID-ul din `labCaseStudyMeta` existent, semnalează dacă lipsa unui registru formal devine o problemă reală.
- Nu atribui un ID `AVL-xxx` unei instanțe de studiu de caz — rezervat documentelor normative.
- Nu edita `avl-350.ts`, `publica-articol-lab` sau `publica-articol-blog` în timpul publicării unui studiu de caz.
- Nu redenumi/regenera/altera evidence figures — sunt dovadă, nu ilustrație.
- Nu modifica `llms.txt`/`robots.txt` și nu construi IndexNow pentru publicarea de rutină.
- Nu face `git add`, `git commit`, `git push` sau deploy.
- Nu declara studiul „publicat” sau „live” — skill-ul se oprește la pregătirea locală completă.

---

## Utilizare

```
/publica-studiu-de-caz "src/content/studii de caz/01. Alex Matescu/tabula-rasa-identitate-search-ai-search.md"
```

sau, pentru o fază nouă pe un caz existent:

```
/publica-studiu-de-caz fază nouă (F2) pentru CS-001, folosind [dovezi/draft nou]
```

Nu face `git add`, `git commit`, `git push` sau deploy fără cerere explicită.
