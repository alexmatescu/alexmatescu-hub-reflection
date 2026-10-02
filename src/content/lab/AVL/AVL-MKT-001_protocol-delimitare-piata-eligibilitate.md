---
document_id: "AVL-MKT-001"
title: "AVL-MKT-001 — Market Scope & Eligibility Protocol"
subtitle: "Protocolul de delimitare a pieței și de eligibilitate a furnizorilor"
level: "C — Methodology"
version: "0.9.0"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-09-30"
date_published: "2026-10-02T07:41:45+03:00"
date_modified: "2026-10-02"
last_reviewed: "2026-10-02"
canonical: "https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
informative_dependencies:
  - "AVL-104 — Cum se măsoară AI Visibility"
keywords:
  - "AVL-MKT-001"
  - "Market Scope & Eligibility Protocol"
  - "Market Measurement"
  - "Market Reference Set"
  - "Market Discovery"
  - "Market Verification"
  - "eligibilitate furnizori"
  - "AI Visibility"
  - "GEO"
  - "AEO"
---

# AVL-MKT-001 — Market Scope & Eligibility Protocol

## Protocolul de delimitare a pieței și de eligibilitate a furnizorilor

> **Principiu:** piața este definită înainte de a măsura cine apare în ea. Criteriile de includere și excludere sunt publicate înainte de colectarea rezultatelor AI și nu sunt modificate retrospectiv pentru a acomoda rezultatul observat.

**AVL-MKT-001 — Market Scope & Eligibility Protocol** este protocolul normativ AI Visibility Lab care definește ce înseamnă o piață într-o măsurare Market Measurement, ce entități pot aparține acelei piețe, ce dovezi sunt suficiente pentru includere și cum este constituit un **Market Reference Set** înainte ca reprezentarea pieței în sistemele AI să fie măsurată.

---

## Controlul documentului

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-MKT-001 |
| Titlu | Market Scope & Eligibility Protocol |
| Nivel | C — Methodology |
| Familie | Market Measurement — `AVL-MKT-*` |
| Rol | protocol normativ de familie |
| Versiune | 0.9.0 |
| Statut | Draft pentru revizuire |
| Autor | [Alex Matescu](/despre) |
| Organizație | [AI Visibility Lab](/lab) |
| Data publicării | 2 octombrie 2026 |
| Ultima verificare | 2 octombrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate |
| Documente normative superioare | [AVL-001 — AI Visibility Lab Foundation](/lab/introducere), [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie) |
| Dependențe normative | [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate) |
| Dependențe informative | [AVL-104 — Cum se măsoară AI Visibility](/lab/cercetare/cum-se-masoara-ai-visibility) |

AVL-MKT-001 este primul document al familiei **Market Measurement** (`AVL-MKT-*`), o familie funcțională în interiorul Nivelului C — Methodology. Arhitectura familiei este descrisă în [AVL-202, secțiunea 14](/lab/metodologie); namespace-ul și identificatorii sunt definiți în [AVL-001](/lab/introducere).

Versiunea curentă, **0.9.0**, este un **draft public pentru revizuire**. Documentul nu este activ. Publicarea draftului are rolul unei pre-înregistrări publice: criteriile devin vizibile și datate înainte ca populația pieței să fie cunoscută. La data acestei versiuni:

- pilotul intern pe cazuri-limită nu a fost executat;
- nu a fost creată nicio instanță `MKT-*`;
- nu a fost constituit niciun Market Reference Set;
- AVL-MKT-002 — Market Query Panel este planificat și nepublicat.

Punctele care trebuie închise înainte de versiunea 1.0.0 sunt listate în secțiunea „Decizii deschise înainte de 1.0.0”.

În acest document, termenii **TREBUIE**, **NU TREBUIE**, **ESTE OBLIGATORIU**, **AR TREBUI**, **NU AR TREBUI** și **POATE** sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:

- **TREBUIE / NU TREBUIE** — condiție obligatorie pentru conformitate;
- **AR TREBUI / NU AR TREBUI** — recomandare puternică; abaterea este permisă numai cu justificare documentată;
- **POATE** — opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate `AVLMKT001-REQ-*`, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, cerințele descriu regula propusă pentru versiunea 1.0.0 și se aplică pilotului intern.

---

## Răspunsul scurt

**AVL-MKT-001 stabilește regula după care este construită referința despre o piață: cine poate aparține pieței, ce dovezi sunt necesare și cum sunt tratate cazurile incerte — înainte ca vreun sistem AI să fie interogat.**

Protocolul separă trei întrebări:

1. **Există furnizorul în piața definită, conform dovezilor disponibile?** — rezolvată prin Market Discovery și Market Verification, conform acestui protocol.
2. **Este furnizorul identificat, menționat, citat sau recomandat de un sistem AI?** — măsurată ulterior prin Market Query Panel (AVL-MKT-002, planificat).
3. **Ce putem afirma despre motivele pentru care furnizorul apare sau nu apare?** — necesită separarea observației de interpretare și nu poate fi dedusă automat din primele două.

**Absența unui furnizor din răspunsurile AI nu demonstrează că furnizorul nu există pe piață. Apariția unui furnizor într-un răspuns AI nu demonstrează că entitatea oferă serviciul pentru care a fost menționată.**

---

# 1. Scop

AVL-MKT-001 definește, pentru orice instanță Market Measurement:

1. modul de declarare a domeniului pieței (geografie, familie de servicii, perioadă);
2. unitatea de analiză și clasele de furnizori;
3. criteriile de eligibilitate și dovezile acceptate;
4. separarea dintre Market Discovery și Market Verification;
5. statusurile de eligibilitate și tratamentul cazurilor incerte;
6. Market Cutoff Date și înghețarea Market Reference Set;
7. controalele împotriva selection bias;
8. tratamentul conflictului de interese;
9. cerințele de dovezi specifice eligibilității, ca aplicare a AVL-200.

Un raport despre o piață nu este reproductibil dacă populația măsurată este construită din aceleași răspunsuri AI pe care raportul încearcă ulterior să le evalueze. De aceea, Market Reference Set este o referință construită independent de rezultatele AI care urmează să fie măsurate.

# 2. Domeniu de aplicare

AVL-MKT-001 se aplică oricărei instanțe `MKT-*` care măsoară reprezentarea unei piețe — o populație de furnizori — în sisteme AI.

Protocolul **măsoară eligibilitatea unei entități pentru includerea într-o piață definită**, nu calitatea furnizorului.

AVL-MKT-001 **nu** stabilește:

- care furnizor este „cel mai bun” sau ce furnizor ar trebui ales;
- competența profesională sau eficiența serviciilor;
- probabilitatea unui rezultat;
- autoritatea unei entități într-un sistem AI;
- motivele interne ale unei recomandări;
- o cotă comercială de piață sau un clasament.

> **Eligibilitatea înseamnă apartenență documentabilă la obiectul cercetat, nu validare profesională.**

AVL-MKT-001 nu definește selecția interogărilor, execuția în sistemele AI sau măsurarea reprezentării. Acestea aparțin AVL-MKT-002 — Market Query Panel (planificat) și instanțelor de măsurare.

# 3. Regula și instanța

AVL-MKT-001 este **regula**. O piață concretă, într-o perioadă concretă, este o **instanță**.

```text
REGULĂ        AVL-MKT-001 — Market Scope & Eligibility Protocol
                 ↓ aplicată asupra unei piețe declarate
INSTANȚĂ      MKT-{țară}-{domeniu}-{an}Q{trimestru}
                 ↓
REFERINȚĂ     Market Reference Set al instanței
```

Protocolul nu fixează o anumită țară, o anumită familie de servicii sau o anumită perioadă. Acestea sunt declarate de fiecare instanță.

> **AVLMKT001-REQ-001 — Domeniul pieței TREBUIE definit și publicat înaintea constituirii Market Reference Set și înaintea oricărei măsurări AI a instanței.**

> **AVLMKT001-REQ-002 — Fiecare instanță TREBUIE să declare, înainte de Market Discovery: geografia, familia de servicii, perioada (trimestrul), Market Cutoff Date și versiunea AVL-MKT-001 aplicată.**

## 3.1. Identificatorul instanței

Formatul identificatorului de instanță este definit în [AVL-001](/lab/introducere): `MKT-{țară}-{domeniu}-{an}Q{trimestru}`, unde `{țară}` este codul ISO 3166-1 alpha-2 al pieței geografice, iar `{domeniu}` este tokenul pieței, fixat la prima instanță a seriei.

## 3.2. Două axe temporale distincte

Market Measurement folosește două axe temporale care nu trebuie confundate:

| Axă | Ce identifică | Exemplu |
| --- | --- | --- |
| **Perioada instanței (Q)** | instanța temporală a pieței: piața documentată până la Market Cutoff Date și măsurată în acel trimestru | `MKT-RO-AIV-2026Q4`, `MKT-RO-AIV-2027Q1` |
| **Axa rulărilor (T0 / F1 … Fn)** | atunci când designul o cere, rulările sau măsurătorile din interiorul unei instanțe sau al unui design longitudinal: T0 pentru baseline, F1 … Fn pentru rulările ulterioare | `T0`, `F1`, `F2` |

Trimestrul identifică piața. T0 / F1 … Fn identifică rulări. **T0 / F1 … Fn nu fac parte din identificatorul pieței** și nu înlocuiesc perioada instanței. Schema completă a rulărilor aparține AVL-MKT-002 și, pentru convenția generală a punctelor de măsurare, AVL-200 §7.

## 3.3. Prima aplicare planificată (exemplu, nu regulă)

Prima instanță planificată este `MKT-RO-AIV-2026Q4`: furnizorii de servicii GEO, AEO, AI Visibility și servicii funcțional echivalente, relevanți pentru clienți din România. Tokenul `AIV` este cel propus în AVL-001. Instanța nu a fost creată la data acestei versiuni; declarația ei completă va fi publicată conform AVLMKT001-REQ-002.

# 4. Unitatea de analiză

Unitatea principală este **Provider Entity**: persoană, practician independent, companie, agenție, organizație sau furnizor hibrid software + servicii, dacă există dovezi publice suficiente că oferă un serviciu inclus în domeniul pieței declarat de instanță.

| Clasă | Definiție operațională |
| --- | --- |
| Independent Provider | Persoană care oferă direct serviciile analizate |
| Service Provider | Companie sau agenție care oferă servicii eligibile |
| Technology Provider | Furnizor predominant de software sau infrastructură |
| Hybrid Provider | Furnizor care combină produse software și servicii |
| Adjacent Provider | Entitate activă într-un domeniu apropiat, fără dovezi suficiente pentru setul principal |

Clasele sunt descriptive, nu scoruri de calitate.

# 5. Familia de servicii

Fiecare instanță declară familia de servicii măsurată. Criteriul principal este **funcția declarată public a serviciului**, nu denumirea lui.

Pentru familia de servicii a primei aplicări planificate, pot fi eligibile servicii de **GEO — Generative Engine Optimization**, **AEO — Answer Engine Optimization**, **AI Visibility**, **AI Search Optimization**, **LLM Visibility / LLM Optimization** și alte servicii de vizibilitate în căutarea generativă funcțional echivalente.

Terminologia acestui domeniu este neuniformă. Google menționează explicit termenii „AEO” și „GEO”, dar precizează că, din perspectiva Google Search, optimizarea pentru căutarea generativă rămâne SEO. Microsoft folosește termenii „GEO” și „AI Visibility” în anunțurile Bing Webmaster Tools despre raportarea AI (secțiunea 16). Prin urmare, prezența acronimului `GEO` nu este nici condiție necesară, nici dovadă suficientă pentru eligibilitate.

## 5.1. Echivalența funcțională

O entitate nu este exclusă doar pentru că nu folosește denumirea uzuală a serviciului. Poate fi evaluată prin **echivalență funcțională**, cu păstrarea sursei și a justificării clasificării.

Utilizarea AI ca instrument pentru prestarea unui serviciu nu este echivalentă cu furnizarea unui serviciu orientat spre vizibilitatea în sisteme AI.

## 5.2. Ce nu este suficient pentru includere

Nu sunt suficiente singure: publicarea unui articol despre subiect; o postare pe social media; autodescrierea generică drept „expert AI”; apariția într-un răspuns AI; includerea într-o listă terță fără confirmare; furnizarea unui serviciu apropiat (de exemplu, SEO tradițional) fără dovada serviciului inclus.

# 6. Clase geografice

Clasele geografice sunt definite generic, în raport cu țara declarată de instanță (`{CC}` = codul ISO 3166-1 alpha-2):

| Clasă | Definiție |
| --- | --- |
| `{CC}-DOMESTIC` | furnizor stabilit în țara instanței și activ pe piața ei |
| `{CC}-INDEPENDENT` | practician independent activ profesional în țara instanței |
| `INTL-{CC}` | furnizor internațional cu dovadă explicită că deservește țara instanței |
| `GLOBAL` | furnizor accesibil internațional, fără dovadă suficientă de orientare explicită către țara instanței |

Exemplu pentru prima aplicare planificată: `RO-DOMESTIC`, `RO-INDEPENDENT`, `INTL-RO`, `GLOBAL`.

„Piața din țara X” nu este sinonimă automat cu „entități înregistrate în țara X”. Clasa `GLOBAL` poate fi folosită pentru context, fără a fi amestecată automat cu populația principală.

# 7. Dovezile de eligibilitate

## 7.1. Niveluri de dovezi

**E1 — Sursă oficială directă.** Pagină oficială de servicii, site oficial al furnizorului, ofertă comercială publică sau documentație oficială. E1 este sursa preferată.

**E2 — Declarație oficială atribuibilă.** Anunț oficial, profil profesional controlat de furnizor, interviu, comunicat sau prezentare publică oficială.

**E3 — Sursă terță independentă.** Publicație, studiu de caz publicat de client, director profesional, analiză independentă sau organizație terță. E3 este utilă pentru discovery și coroborare; fără confirmare directă, cazul poate rămâne `UNVERIFIED`.

Nivelurile E1–E3 descriu **originea** dovezii de eligibilitate. Ele nu înlocuiesc lanțul de dovezi din AVL-200.

## 7.2. Relația cu AVL-200

Pentru lifecycle, integrity, indexing și traceability se aplică [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate). AVL-MKT-001 definește doar **ce dovezi sunt necesare pentru eligibilitate**:

- **devine Raw Evidence** captura sursei pe care se sprijină o decizie de eligibilitate (de exemplu, captura integrală sau exportul paginii oficiale de servicii), la momentul verificării;
- **este indexată** fiecare captură folosită într-o decizie `ELIGIBLE`, `INELIGIBLE`, `OUT OF SCOPE` sau `HISTORICAL`, cu legătura către furnizor (`provider_id`), instanță, URL, data accesării și nivelul E1–E3;
- **metadata minimă** este cea din fișa furnizorului (secțiunea 10), completată cu metadata de provenance cerută de AVL-200 §9; valorile care nu pot fi stabilite urmează semantica stărilor necunoscute din AVL-200 §6;
- **freeze** se aplică la înghețarea Market Reference Set (secțiunea 12), cu manifest de integritate verificat conform AVL-200 §21–§23.

> **AVLMKT001-REQ-003 — Entity resolution: o entitate TREBUIE să poată fi identificată fără ambiguitate materială înainte de a primi statutul `ELIGIBLE`.**

> **AVLMKT001-REQ-004 — Service evidence: TREBUIE să existe dovadă publică verificabilă că entitatea oferă un serviciu inclus în familia de servicii a instanței.**

> **AVLMKT001-REQ-005 — Market relevance: TREBUIE să existe dovadă că serviciul este disponibil sau relevant pentru piața geografică a instanței.**

> **AVLMKT001-REQ-006 — Temporal validity: dovada TREBUIE să fie relevantă pentru perioada instanței și disponibilă până la Market Cutoff Date.**

> **AVLMKT001-REQ-007 — Source traceability: dovada TREBUIE să poată fi urmărită prin URL, dată de acces și artefact conservat conform secțiunii 7.2.**

> **AVLMKT001-REQ-008 — Statutul `ELIGIBLE` TREBUIE atribuit numai atunci când AVLMKT001-REQ-003 – AVLMKT001-REQ-007 sunt îndeplinite.**

> **AVLMKT001-REQ-009 — Menționarea unei entități de către un sistem AI NU TREBUIE folosită singură drept dovadă de eligibilitate.**

> **AVLMKT001-REQ-010 — Dovezile pe care se sprijină deciziile de eligibilitate TREBUIE conservate ca Raw Evidence și indexate conform AVL-200 înainte de înghețarea Market Reference Set.**

# 8. Market Discovery și Market Verification

## 8.1. Market Discovery

Candidații pot fi găsiți prin motoare de căutare, sisteme AI, site-uri oficiale, directoare, platforme profesionale, publicații, conferințe, asociații și alte surse terțe. Metodele folosite sunt documentate. **Discovery identifică, nu validează.** Un sistem AI poate fi folosit pentru discovery, dar menționarea în răspunsul lui nu constituie dovadă de eligibilitate.

## 8.2. Market Verification

Fiecare candidat identificat în discovery este verificat individual, conform secțiunii 7, și primește un statut din secțiunea 9.

> **AVLMKT001-REQ-011 — Market Discovery și Market Verification TREBUIE tratate și documentate distinct.**

# 9. Statusuri de eligibilitate

| Status | Semnificație |
| --- | --- |
| `ELIGIBLE` | Criteriile sunt îndeplinite |
| `INELIGIBLE` | Dovezile permit concluzia că entitatea nu îndeplinește domeniul instanței |
| `UNVERIFIED` | Entitatea a fost identificată, dar dovezile nu permit confirmarea |
| `AMBIGUOUS` | Există dovezi contradictorii sau probleme de entity resolution |
| `OUT OF SCOPE` | Entitatea este reală, dar nu aparține pieței definite |
| `HISTORICAL` | Serviciul a existat anterior, fără dovadă suficientă de activitate la Market Cutoff Date |

Corespondența cu termenii folosiți în AVL-202 §14: `ELIGIBLE` = eligibil, `UNVERIFIED` = neverificat, `AMBIGUOUS` = ambiguu.

> **AVLMKT001-REQ-012 — Statutul `UNVERIFIED` NU TREBUIE interpretat drept `INELIGIBLE`.**

> **AVLMKT001-REQ-013 — Statusurile și clasele NU TREBUIE prezentate drept scoruri de calitate.**

# 10. Fișa furnizorului

Pentru fiecare candidat verificat se păstrează:

```yaml
provider_id:
canonical_name:
entity_type:
official_url:
country:
market_class:
provider_class:
public_service_name:
service_family:
eligibility_status:
evidence_level:
evidence_url:
evidence_id:
source_publication_date:
verification_date:
market_cutoff_date:
entity_resolution_notes:
eligibility_rationale:
uncertainties:
```

`evidence_id` leagă fișa de Evidence Index-ul instanței (AVL-200 §11). O afirmație materială care nu poate fi urmărită până la sursa ei nu este tratată drept fapt verificat.

# 11. Market Cutoff Date

Fiecare instanță declară o **Market Cutoff Date**. Market Reference Set reprezintă piața documentabilă conform protocolului până la acel moment.

Un furnizor identificat după cutoff nu este introdus retrospectiv într-o instanță închisă pentru a face datasetul mai complet. El poate apărea în următoarea instanță a seriei.

# 12. Market Reference Set și înghețarea lui

**Market Reference Set** este setul furnizorilor identificați și verificați conform protocolului până la Market Cutoff Date. Nu este lista exhaustivă a tuturor furnizorilor existenți și nu trebuie descris astfel.

Market Reference Set este un artefact de instanță, nu un document normativ, și nu primește identificator `AVL-MKT-*`.

> **AVLMKT001-REQ-014 — Market Reference Set TREBUIE constituit independent de rezultatele AI evaluate ulterior.**

> **AVLMKT001-REQ-015 — Market Reference Set TREBUIE înghețat, cu manifest de integritate verificat conform AVL-200, înainte de prima execuție AI a instanței.**

## 12.1. Checklist pentru freeze

- [ ] domeniul pieței, geografia și familia de servicii sunt declarate;
- [ ] Market Cutoff Date este fixată;
- [ ] instanța are identificator stabil;
- [ ] metodele de discovery sunt documentate;
- [ ] fiecare candidat a trecut prin verification;
- [ ] fiecare `ELIGIBLE` are dovezi conservate și indexate;
- [ ] cazurile incerte au status explicit;
- [ ] entity resolution este verificat;
- [ ] relațiile materiale relevante sunt declarate (secțiunea 14);
- [ ] schimbările față de instanța anterioară sunt documentate;
- [ ] manifestul de integritate a fost generat și verificat.

# 13. Controlul selection bias

Un furnizor nu este inclus doar pentru că apare frecvent în AI sau în Google, este cunoscut autorului, are audiență mare ori este client, partener sau competitor. Un furnizor eligibil nu este eliminat pentru că nu apare în răspunsurile AI.

> **Zero AI visibility este un rezultat posibil al măsurării, nu un criteriu de excludere.**

> **AVLMKT001-REQ-016 — Absența din răspunsurile AI NU TREBUIE folosită pentru eliminarea unui furnizor eligibil.**

> **AVLMKT001-REQ-017 — Modificarea criteriilor după observarea rezultatelor TREBUIE versionată și documentată; măsurătorile realizate sub o versiune anterioară rămân atribuite acelei versiuni.**

> **AVLMKT001-REQ-018 — Rezultatele negative, absențele, ambiguitățile și contradicțiile TREBUIE păstrate.**

## 13.1. Ce rămâne fix și ce evoluează

- **Metodologia înghețată:** definițiile și regulile folosite într-o serie comparabilă sunt păstrate sau versionate explicit.
- **Starea pieței:** furnizorii pot apărea, dispărea sau schimba serviciile.
- **Vocabularul:** terminologia poate evolua.
- **Discovery:** metodele de identificare pot evolua, fără confundarea discovery cu verification.

> **AVLMKT001-REQ-019 — Schimbările care afectează comparabilitatea între instanțe TREBUIE versionate.**

## 13.2. Pilotul intern

Înainte de versiunea 1.0.0, protocolul este testat printr-un **pilot intern** pe cazuri-limită (de exemplu: echivalență funcțională, furnizori `GLOBAL`, furnizori `HISTORICAL`, entitatea afiliată autorului). Pilotul:

- verifică dacă protocolul poate clasifica coerent cazurile-limită;
- nu constituie Market Reference Set oficial;
- nu stabilește populația finală a pieței;
- nu este prezentat ca măsurare trimestrială;
- poate conduce la modificarea acestui draft înainte de 1.0.0, cu modificările documentate în istoricul versiunilor.

# 14. Conflict de interese

**Declarație.** Autorul acestui protocol este Alex Matescu, fondatorul și coordonatorul AI Visibility Lab. În prima aplicare planificată — piața serviciilor GEO, AEO și AI Visibility relevante pentru clienți din România — autorul sau o entitate afiliată lui pot îndeplini criteriile de eligibilitate, iar ceilalți furnizori evaluați pot fi concurenți comerciali ai autorului. Situația este declarată aici, nu tratată ca ipoteză.

Atunci când autorul, AI Visibility Lab sau o entitate afiliată este evaluată:

- se aplică exact aceleași criterii ca oricărui alt candidat;
- se folosesc numai dovezi publice verificabile, conservate conform secțiunii 7.2;
- relația este declarată în instanță și în orice raport derivat;
- statutul rezultat este păstrat și publicat indiferent dacă este favorabil sau nefavorabil;
- entitatea afiliată nu primește tratament preferențial în discovery, verification sau raportare;
- includerea sau excluderea ei nu modifică retrospectiv criteriile.

> **AVLMKT001-REQ-020 — Relațiile materiale cunoscute dintre autor, AI Visibility Lab și entitățile evaluate TREBUIE declarate în instanță și în orice raport derivat.**

> **AVLMKT001-REQ-021 — O entitate afiliată autorului sau AI Visibility Lab TREBUIE evaluată cu aceleași criterii și dovezi ca orice alt candidat, iar statutul ei TREBUIE păstrat indiferent de rezultat.**

Verificarea de către o terță parte a deciziilor privind entitatea afiliată este un control suplimentar posibil pentru instanțele viitoare. În această versiune nu este o cerință.

Principiul general al independenței este stabilit în [AVL-202, secțiunea „Independență și conflict de interese”](/lab/metodologie).

# 15. Stratul de referință și stratul de reprezentare AI

Distincția arhitecturală dintre cele două straturi este definită în [AVL-202, §14](/lab/metodologie). Pentru aplicarea acestui protocol, combinațiile posibile sunt:

`ELIGIBLE + SURFACED`, `ELIGIBLE + NOT SURFACED`, `UNVERIFIED + SURFACED`, `AMBIGUOUS + SURFACED`, `OUT OF SCOPE + SURFACED`.

Aceste diferențe sunt rezultate ale măsurării, nu motive pentru rescrierea retrospectivă a referinței.

# 16. Ce documentează furnizorii AI

AVL-MKT-001 nu presupune existența unei formule universale pentru menționare, citare sau recomandare. Afirmațiile de mai jos au fost verificate în documentația oficială la 2 octombrie 2026.

- **Google Search.** Google spune că bunele practici SEO rămân relevante pentru funcțiile AI din Search, pentru că acestea se bazează pe sistemele de bază de ranking și calitate, și descrie grounding (RAG) și query fan-out. O pagină trebuie să fie indexată și eligibilă pentru afișare cu snippet, iar site-ul trebuie inclus în funcțiile AI generative din Search Console. Google precizează că nu sunt necesare fișiere machine-readable noi, fișiere text pentru AI sau markup special și că îndeplinirea cerințelor nu garantează crawling, indexare sau afișare.
- **OpenAI.** OpenAI spune că orice site public poate apărea în ChatGPT search și recomandă ca `OAI-SearchBot` să nu fie blocat, pentru ca conținutul să poată fi descoperit, afișat și citat. Site-urile care blochează `OAI-SearchBot` nu sunt afișate în răspunsurile de căutare, deși pot apărea ca linkuri de navigare.
- **Anthropic.** Anthropic separă `ClaudeBot` (colectare de conținut pentru modele), `Claude-User` (acces la cererea utilizatorului) și `Claude-SearchBot` (calitatea rezultatelor de căutare). Blocarea `Claude-User` poate reduce vizibilitatea în căutarea inițiată de utilizator; blocarea `Claude-SearchBot` poate reduce vizibilitatea și acuratețea în rezultatele de căutare.
- **Microsoft Bing.** Raportul AI Performance din Bing Webmaster Tools (februarie 2026) afișează citări, pagini citate, grounding queries și evoluția în timp; anunțul îl descrie ca un pas timpuriu spre instrumente GEO. Extensia din iunie 2026 adaugă Intents, Topics, Citation Share și Compare; Microsoft precizează că Citation Share este o metrică observațională, nu un sistem de ranking și nici un scor de calitate.
- **Perplexity.** Perplexity descrie `PerplexityBot` ca crawler destinat afișării și legării site-urilor în rezultatele de căutare Perplexity, nefolosit pentru antrenarea modelelor de bază, și recomandă permiterea lui în `robots.txt`.

**Concluzia permisă:** accesibilitatea, posibilitatea de retrieval și calitatea informației sunt documentate ca relevante în aceste ecosisteme. Ele nu formează o regulă universală care garantează citarea sau recomandarea. Observația că un furnizor apare sau nu apare nu dovedește un mecanism intern.

> **AVLMKT001-REQ-022 — Afirmațiile despre comportamentul sistemelor AI TREBUIE susținute prioritar prin documentația oficială, atunci când aceasta există.**

> **AVLMKT001-REQ-023 — O observație despre reprezentarea unui furnizor NU TREBUIE transformată automat într-o afirmație despre un mecanism intern al sistemului AI.**

# 17. Prezentarea entităților

Regulile editoriale generale — clasificarea afirmațiilor, ierarhia surselor, separarea faptelor de interpretare — sunt stabilite în [AVL-001](/lab/introducere) și nu sunt repetate aici. Specific Market Measurement:

- se folosește denumirea canonică utilizată de entitate;
- fără dovezi nu se atribuie furnizorilor titulaturi, dimensiunea companiei, clienți, rezultate, cote de piață, statut de lider sau calificative precum „primul”, „cel mai mare”, „principalul” ori „cel mai bun”;
- fiecare afirmație despre un furnizor urmează structura `entitate → afirmație → sursă → dată → statut`.

# 18. Limitări

Discovery nu poate demonstra exhaustiv identificarea fiecărui furnizor. O ofertă poate exista fără pagină publică; un practician poate lucra exclusiv prin recomandări; paginile pot apărea sau dispărea; terminologia poate evolua; sursele pot fi incomplete; entity resolution poate rămâne incertă.

De aceea, Market Reference Set este **setul furnizorilor identificați și verificați conform protocolului până la Market Cutoff Date**, nu „lista completă a tuturor furnizorilor existenți”.

# 19. Corectarea erorilor

O eroare factuală trebuie corectată. Când este relevant, se păstrează valoarea anterioară, valoarea corectată, data, motivul, sursa și impactul asupra rezultatelor. Dacă populația se schimbă material, se evaluează necesitatea recalculării raportului instanței.

# 20. Ordinea de aplicare

```text
AVL-MKT-001 v0.9.0 — draft public (pre-înregistrare)
        ↓
pilot intern pe cazuri-limită
        ↓
corecții documentate
        ↓
AVL-MKT-001 v1.0.0 / Activ
        ↓
declararea instanței (ex. MKT-RO-AIV-2026Q4)
        ↓
Market Discovery
        ↓
Market Verification
        ↓
Market Reference Set — freeze
        ↓
AVL-MKT-002 — Market Query Panel → execuție AI → măsurare
```

---

## Documente asociate

- [AVL-001 — AI Visibility Lab Foundation](/lab/introducere) — principiile corpusului, namespace-ul `AVL-MKT-*` și formatul instanțelor `MKT-*`.
- [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie) — arhitectura ramurii Market Measurement și precedența normativă.
- [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate) — lifecycle, integrity, indexing și traceability pentru dovezi.
- AVL-MKT-002 — Market Query Panel — planificat, nepublicat.

## Surse oficiale

- Google Search Central — *Optimizing your website for generative AI features on Google Search* (actualizat 10 iulie 2026): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- OpenAI Help Center — *Publishers and Developers FAQ*: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Claude Help Center — *Does Anthropic crawl data from the web, and how can site owners block the crawler?*: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Bing Webmaster Blog — *Introducing AI Performance in Bing Webmaster Tools Public Preview* (10 februarie 2026): https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/
- Bing Search Blog — *New AI Visibility Insights in Bing Webmaster Tools: Intents, Topics, Citation Share, Compare* (16 iunie 2026): https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/
- Perplexity Docs — *Perplexity Crawlers*: https://docs.perplexity.ai/guides/bots

Documentația oficială descrie comportamentele și controalele pe care furnizorii aleg să le facă publice. Lipsa documentării unui mecanism nu demonstrează inexistența lui. Afirmațiile despre produse externe sunt reverificate la fiecare revizie materială a protocolului.

## Checklist de conformitate

- [ ] Domeniul pieței a fost publicat înaintea constituirii Market Reference Set (REQ-001).
- [ ] Instanța și-a declarat geografia, familia de servicii, perioada, cutoff-ul și versiunea protocolului (REQ-002).
- [ ] Fiecare `ELIGIBLE` îndeplinește REQ-003 – REQ-007 (REQ-008).
- [ ] Nicio eligibilitate nu se sprijină doar pe o mențiune AI (REQ-009).
- [ ] Dovezile sunt conservate și indexate conform AVL-200 (REQ-010).
- [ ] Discovery și Verification sunt documentate distinct (REQ-011).
- [ ] `UNVERIFIED` nu a fost tratat ca `INELIGIBLE`; statusurile nu sunt prezentate ca scoruri (REQ-012, REQ-013).
- [ ] Market Reference Set este independent de rezultatele AI și înghețat înaintea execuției AI (REQ-014, REQ-015).
- [ ] Absențele din AI nu au eliminat furnizori; schimbările de criterii și de comparabilitate sunt versionate; rezultatele negative sunt păstrate (REQ-016 – REQ-019).
- [ ] Relațiile materiale sunt declarate, iar entitatea afiliată a fost tratată identic (REQ-020, REQ-021).
- [ ] Afirmațiile despre sistemele AI sunt susținute de documentație oficială și nu sunt transformate în mecanisme interne (REQ-022, REQ-023).

## Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
| --- | --- | --- | --- |
| 0.9.0 | 2 octombrie 2026 | Draft pentru revizuire | Prima versiune publică, ca pre-înregistrare a criteriilor înainte de pilotul intern. Față de draftul intern din 30 septembrie 2026: cerințele unificate într-o singură serie `AVLMKT001-REQ-001 … 023` (înlocuiesc seriile interne `MKT-REQ` și `E-REQ`); clasele geografice generalizate (`{CC}-DOMESTIC` etc.), cu România păstrată ca exemplu de primă aplicare; separate perioada instanței (Q) și axa rulărilor (T0 / F1 … Fn); dovezile de eligibilitate legate de AVL-200; declarație explicită de conflict de interese și cerințele REQ-020 – REQ-021; adăugate REQ-002, REQ-010 și REQ-015; procedura pilotului preluată din AVL-202; regulile editoriale generale înlocuite cu trimitere la AVL-001; afirmațiile despre furnizorii AI reverificate și restrânse la documentația oficială. |

## Decizii deschise înainte de 1.0.0

1. **Pilotul intern.** Neexecutat. Rezultatele lui pot modifica criteriile, statusurile sau clasele.
2. **Identificatorii artefactelor din instanță.** Formatul identificatorilor pentru registrul de discovery, registrul de verification și Market Reference Set nu este încă stabilit (AVL-001 îl lasă documentelor `AVL-MKT-*` și AVL-200).
3. **Dovezile pentru statusurile incerte.** Dacă și în ce formă trebuie conservate dovezi pentru `UNVERIFIED` și `AMBIGUOUS`.
4. **Verificarea de către o terță parte** a deciziilor privind entitatea afiliată: control opțional sau cerință pentru instanțele viitoare.
5. **Convenția T0 / F1 … Fn în corpus.** Alinierea definiției punctelor de măsurare între AVL-200, AVL-001 și AVL-202 este în curs; secțiunea 3.2 trebuie reverificată după aliniere.

---

*AVL-MKT-001 este un document normativ al AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Versiunea 0.9.0 este un draft public pentru revizuire, nu un protocol activ. Ultima verificare factuală și a surselor: 2 octombrie 2026.*
