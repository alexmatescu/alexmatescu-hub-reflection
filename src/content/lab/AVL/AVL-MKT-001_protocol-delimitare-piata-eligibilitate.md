---
document_id: "AVL-MKT-001"
title: "AVL-MKT-001 — Market Scope & Eligibility Protocol"
subtitle: "Protocolul de delimitare a pieței și de eligibilitate a furnizorilor"
level: "C — Methodology"
version: "1.0.0"
status: "Activ"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-09-30"
date_published: "2026-10-02T07:41:45+03:00"
date_modified: "2026-11-09"
last_reviewed: "2026-11-09"
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
| Versiune | 1.0.0 |
| Statut | Activ |
| Autor | [Alex Matescu](/despre) |
| Organizație | [AI Visibility Lab](/lab) |
| Data publicării | 2 octombrie 2026 |
| Ultima verificare | 9 noiembrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate |
| Documente normative superioare | [AVL-001 — AI Visibility Lab Foundation](/lab/introducere), [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie) |
| Dependențe normative | [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate) |
| Dependențe informative | [AVL-104 — Cum se măsoară AI Visibility](/lab/cercetare/cum-se-masoara-ai-visibility) |

AVL-MKT-001 este primul document al familiei **Market Measurement** (`AVL-MKT-*`), o familie funcțională în interiorul Nivelului C — Methodology. Arhitectura familiei este descrisă în [AVL-202, secțiunea 14](/lab/metodologie); namespace-ul și identificatorii sunt definiți în [AVL-001](/lab/introducere).

Versiunea curentă, **1.0.0**, este **activă** din 9 noiembrie 2026. Draftul a fost publicat la 2 octombrie 2026 ca pre-înregistrare: criteriile au devenit vizibile și datate înainte ca populația pieței să fie cunoscută. Versiunea 1.0.0 preia rezultatele pilotului intern și închide deciziile deschise (secțiunea „Decizii închise la activarea 1.0.0”). La data acestei versiuni:

- au fost rulate cinci piloturi de Market Discovery (`MKT-RO-AIV-2026Q4-PILOT`, `-PILOT-2`, `-PILOT-3`, `-PILOT-4` și `-PILOT-5`); `-PILOT-4` a fost declarat invalid;
- pilotul de Market Verification (27 octombrie – 8 noiembrie 2026), acceptat ca pilot intern, a evaluat cei 278 de candidați din reuniunea piloturilor Market Discovery; registrul lui, `MKT-RO-AIV-2026Q4-PILOT-MVR`, are 260 de entități și a fost înghețat la 8 noiembrie 2026; intrările lui `ELIGIBLE` nu constituie Market Reference Set (secțiunea 13.2);
- prima instanță oficială, `MKT-RO-AIV-2026Q4`, va fi rulată în decembrie 2026 (secțiunea 3.3); niciun Market Reference Set nu a fost încă constituit;
- AVL-MKT-002 — Market Query Panel este planificat și nepublicat.

În acest document, termenii **TREBUIE**, **NU TREBUIE**, **ESTE OBLIGATORIU**, **AR TREBUI**, **NU AR TREBUI** și **POATE** sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:

- **TREBUIE / NU TREBUIE** — condiție obligatorie pentru conformitate;
- **AR TREBUI / NU AR TREBUI** — recomandare puternică; abaterea este permisă numai cu justificare documentată;
- **POATE** — opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate `AVLMKT001-REQ-*`, acești termeni nu trebuie interpretați automat ca cerințe de conformitate.

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
9. cerințele de dovezi specifice eligibilității, ca aplicare a AVL-200;
10. publicarea rezultatelor Market Discovery și Market Verification și relația registrelor cu Market Reference Set.

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

> **AVLMKT001-REQ-002 — Fiecare instanță TREBUIE să declare, înainte de Market Discovery: geografia, familia de servicii, limba pieței, dacă instanța o folosește drept criteriu (secțiunea 6.1), perioada (trimestrul), Market Cutoff Date și versiunea AVL-MKT-001 aplicată.**

## 3.1. Identificatorul instanței

Formatul identificatorului de instanță este definit în [AVL-001](/lab/introducere): `MKT-{țară}-{domeniu}-{an}Q{trimestru}`, unde `{țară}` este codul ISO 3166-1 alpha-2 al pieței geografice, iar `{domeniu}` este tokenul pieței, fixat la prima instanță a seriei.

## 3.2. Perioada instanței și rulările

Market Measurement distinge perioada instanței de rulările din interiorul ei:

| Axă | Ce identifică | Exemplu |
| --- | --- | --- |
| **Perioada instanței (Q)** | instanța temporală a pieței: piața documentată până la Market Cutoff Date și măsurată în acel trimestru | `MKT-RO-AIV-2026Q4`, `MKT-RO-AIV-2027Q1` |
| **Rulările Market Discovery** | rulările de descoperire din interiorul unei instanțe: rularea trimestrială completă (`FULL`) și rulările lunare (`M{lună}`, luna din calendar, cu două cifre) | `MKT-RO-AIV-2026Q4-FULL`, `MKT-RO-AIV-2026Q4-M11` |
| **Rulările de măsurare AI** | execuțiile Market Query Panel, după înghețarea Market Reference Set | schema aparține AVL-MKT-002 |

Trimestrul identifică piața. Sufixul unei rulări identifică rularea și nu înlocuiește perioada instanței. Luna unei rulări lunare trebuie să cadă în trimestrul instanței. Un pilot se identifică separat (`{instanță}-PILOT`, `{instanță}-PILOT-{n}`) și nu este o rulare a instanței.

Ce interogări conține fiecare rulare și cu ce cadență se execută se declară în documentul instanței, nu în acest protocol.

**Convenția T0 / F1 … Fn nu se folosește pentru rulările Market Discovery.** Ea rămâne convenția punctelor de măsurare din AVL-200 §7, aplicată în designul Tabula Rasa (AVL-201). Pentru rulările de măsurare AI, schema se stabilește în AVL-MKT-002.

## 3.3. Prima aplicare planificată (exemplu, nu regulă)

Prima instanță planificată este `MKT-RO-AIV-2026Q4`: furnizorii de servicii GEO, AEO, AI Visibility și servicii funcțional echivalente, relevanți pentru clienți din România. Tokenul `AIV` este cel propus în AVL-001. Prima rulare oficială a instanței (Market Discovery `FULL`, urmată de Market Verification) va avea loc în decembrie 2026. Declarația completă a instanței, cu limba română ca limbă a pieței (secțiunea 6.1), se publică înaintea Market Discovery, conform AVLMKT001-REQ-002.

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

## 4.1. O entitate, un operator

O entitate din registrul Market Verification corespunde unui singur operator: persoana sau organizația care oferă serviciul. Rândurile Market Discovery care desemnează același operator — de exemplu, o persoană și brandul ei, un alias sau un produs propriu al aceluiași furnizor — se unesc într-o singură intrare canonică, chiar dacă au fost găsite în răspunsuri sau rulări separate. Sursele Discovery ale fiecărui rând unit se păstrează, iar rândurile unite își păstrează identificatorul (secțiunea 21.6).

> **AVLMKT001-REQ-040 — Rândurile Market Discovery care desemnează același operator TREBUIE unite într-o singură intrare canonică a registrului Market Verification, păstrând sursele Discovery ale fiecărui rând.**

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

## 6.1. Limba pieței

O instanță POATE declara o limbă a pieței (AVLMKT001-REQ-002). Când o declară, orientarea unei entități către piața instanței se dovedește și printr-o pagină de serviciu în acea limbă: un site în limba pieței sau versiunea în limba pieței a unui site internațional. Clasa `INTL-{CC}` rămâne posibilă pentru furnizorii internaționali care au o astfel de pagină.

O entitate fără pagină de serviciu în limba declarată a pieței primește statutul `OUT OF SCOPE`. Pentru `MKT-RO-AIV-2026Q4`, limba pieței este româna.

> **AVLMKT001-REQ-037 — Când instanța declară o limbă a pieței, dovada de serviciu a unei entități `ELIGIBLE` TREBUIE să includă o pagină de serviciu în acea limbă; fără ea, entitatea primește statutul `OUT OF SCOPE`.**

# 7. Dovezile de eligibilitate

## 7.1. Niveluri de dovezi

**E1 — Sursă oficială directă.** Pagină oficială de servicii, site oficial al furnizorului, ofertă comercială publică sau documentație oficială. E1 este sursa preferată.

**E2 — Declarație oficială atribuibilă.** O declarație a furnizorului, publicată într-un canal pe care furnizorul îl controlează, dar care nu este site-ul lui oficial: profilul lui pe o platformă profesională sau socială, un anunț sau comunicat oficial, un interviu în care răspunde chiar furnizorul, o prezentare publică oficială. Un text scris de altcineva despre furnizor, de exemplu pagina de autor creată de un angajator sau de o publicație, nu este E2, ci E3.

**E3 — Sursă terță independentă.** Publicație, studiu de caz publicat de client, director profesional, analiză independentă sau organizație terță. E3 este utilă pentru discovery și coroborare; fără confirmare directă, cazul poate rămâne `UNVERIFIED`.

Nivelurile E1–E3 descriu **originea** dovezii de eligibilitate. Ele nu înlocuiesc lanțul de dovezi din AVL-200.

## 7.2. Relația cu AVL-200

Pentru lifecycle, integrity, indexing și traceability se aplică [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate). AVL-MKT-001 definește doar **ce dovezi sunt necesare pentru eligibilitate**:

- **devine Raw Evidence** sursa pe care se sprijină o decizie de eligibilitate, la momentul verificării, în forma definită în secțiunea 7.3;
- **este indexată** dovada fiecărei decizii, indiferent de status, cu legătura către furnizor (`provider_id`), instanță, URL, data accesării și nivelul E1–E3;
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

## 7.3. Forma dovezii în Market Verification

Dovada de eligibilitate a unei entități este sursa consultată la verificare, de regulă pagina oficială de servicii. Ea se conservă ca **răspunsul HTTP brut** al paginii: corpul răspunsului, exact cum a fost primit, fără randare JavaScript, împreună cu antetele tuturor răspunsurilor din lanțul de redirecționări și cu metadata salvării: URL-ul cerut, URL-ul final, codul HTTP, momentul salvării (UTC) și User-Agent-ul folosit. Fiecare fișier primește un hash SHA-256 în Evidence Index-ul instanței.

Pentru fiecare entitate se conservă o singură pagină. Nu se folosesc capturi de ecran: o pagină de servicii se întinde pe mai multe ecrane, iar mai multe capturi pe entitate ar fi greu de legat sigur de entitate și de decizie. Pentru că nu există capturi PNG, conversia WebP din AVL-200 (AVL200-REQ-041) nu se aplică.

Limitele formei:

- **Pagini randate în JavaScript.** HTML-ul brut poate să nu conțină textul pe care îl vede un vizitator. Serviciul pe care se sprijină statutul `ELIGIBLE` trebuie să se vadă în HTML-ul brut conservat; altfel, entitatea primește `UNVERIFIED`, cu motivul notat, și rămâne în registru (AVLMKT001-REQ-038). Regula privește verificabilitatea dovezii, nu calitatea furnizorului: dovada trebuie să poată fi reprodusă din fișierul salvat, fără o randare care nu se conservă. Google recomandă randarea pe server sau pre-randarea, pentru că „nu toți roboții pot rula JavaScript”, iar randarea paginilor JavaScript poate fi amânată ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)). Verificarea operatorului în browser nu înlocuiește dovada.
- **Protecție anti-bot.** O pagină de verificare anti-bot se conservă ca atare, iar justificarea arată pe ce se sprijină statusul.
- **Paginile se schimbă.** Dovada arată pagina la momentul salvării. Toate paginile se salvează din nou la Market Cutoff Date, ca dovezile registrului înghețat să fie din aceeași zi.

Regula se aplică tuturor statusurilor din secțiunea 9, inclusiv `UNVERIFIED` și `AMBIGUOUS`. Pentru aceste statusuri, dovada arată tocmai de ce entitatea nu a putut fi confirmată:

- se conservă sursa consultată, inclusiv atunci când răspunsul este o eroare (pagină inexistentă, site indisponibil, pagină anti-bot);
- justificarea unei intrări `UNVERIFIED` spune ce dovadă lipsește;
- justificarea unei intrări `AMBIGUOUS` spune care este contradicția sau incertitudinea de identitate; când ambiguitatea privește identitatea, se conservă sursele fiecărei entități implicate.

> **AVLMKT001-REQ-034 — Dovada de eligibilitate din Market Verification TREBUIE conservată ca răspunsul HTTP brut al sursei consultate (corpul nerandat, antetele, URL-ul final, codul HTTP, momentul salvării și User-Agent-ul) și indexată cu SHA-256.**

> **AVLMKT001-REQ-035 — Pentru fiecare intrare din registrul Market Verification, indiferent de status, sursa consultată TREBUIE conservată conform AVLMKT001-REQ-034, inclusiv atunci când răspunsul este o eroare; justificarea unei intrări `UNVERIFIED` TREBUIE să spună ce dovadă lipsește, iar a unei intrări `AMBIGUOUS`, care este contradicția sau incertitudinea de identitate.**

> **AVLMKT001-REQ-038 — Statutul `ELIGIBLE` TREBUIE să se sprijine pe un serviciu vizibil în corpul HTTP brut conservat (AVLMKT001-REQ-034); când serviciul nu apare acolo, entitatea primește statutul `UNVERIFIED`, iar verificarea operatorului în browser NU TREBUIE folosită în locul dovezii.**

Observațiile despre transparența unei entități — echipa, prețurile, profilurile sociale, aspectul site-ului — pot fi notate separat de justificarea statusului, dar nu îl schimbă. Ele nu se publică drept calificative despre furnizori (secțiunea 17).

> **AVLMKT001-REQ-039 — Observațiile despre transparența unei entități NU TREBUIE să schimbe statutul ei de eligibilitate.**

# 8. Market Discovery și Market Verification

## 8.1. Market Discovery

Candidații pot fi găsiți prin motoare de căutare, sisteme AI, site-uri oficiale, directoare, platforme profesionale, publicații, conferințe, asociații și alte surse terțe. Metodele folosite sunt documentate. **Discovery identifică, nu validează.** Un sistem AI poate fi folosit pentru discovery, dar menționarea în răspunsul lui nu constituie dovadă de eligibilitate.

## 8.2. Market Verification

Fiecare candidat identificat în discovery este verificat individual, conform secțiunii 7, și primește un statut din secțiunea 9.

> **AVLMKT001-REQ-011 — Market Discovery și Market Verification TREBUIE tratate și documentate distinct.**

# 9. Statusuri de eligibilitate

| Status | Semnificație |
| --- | --- |
| `ELIGIBLE` | Entitatea poate fi identificată fără ambiguitate, oferă un serviciu din familia instanței și este orientată către piața instanței (REQ-003 – REQ-007) |
| `INELIGIBLE` | Entitatea este orientată către piața instanței, dar dovezile arată că nu oferă un serviciu din familia instanței |
| `UNVERIFIED` | Dovezile sunt prea slabe ca să confirme sau să excludă eligibilitatea; de exemplu, pagina de serviciu lipsește sau serviciul nu apare în HTML-ul brut |
| `AMBIGUOUS` | Există dovezi contradictorii sau identitatea entității nu poate fi stabilită |
| `OUT OF SCOPE` | Entitatea este reală, dar nu este orientată către piața instanței: geografia sau, când instanța o declară, limba pieței (de exemplu, furnizori `GLOBAL`) |
| `HISTORICAL` | Serviciul a existat anterior, fără dovadă suficientă de activitate la Market Cutoff Date. Status păstrat în listă; nefolosit în pilotul de Market Verification |

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

`provider_id` se atribuie conform secțiunii 21.6. `evidence_id` leagă fișa de Evidence Index-ul instanței (AVL-200 §11). O afirmație materială care nu poate fi urmărită până la sursa ei nu este tratată drept fapt verificat.

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

Înainte de versiunea 1.0.0, protocolul a fost testat printr-un **pilot intern** pe cazuri reale. Rolul lui l-a avut [pilotul de Market Verification](/lab/market-discovery/verificare-pilot-2026q4) (27 octombrie – 8 noiembrie 2026), acceptat ca pilot intern la 9 noiembrie 2026 (decizie Alex Matescu). A acoperit echivalența funcțională, furnizorii `GLOBAL` și `INTL-RO`, publicitatea plătită în ChatGPT fără serviciu organic și identitățile ambigue. Statutul `HISTORICAL` nu a fost folosit, iar entitatea afiliată autorului nu a apărut printre candidați; ambele cazuri sunt declarate netestate. Un pilot:

- verifică dacă protocolul poate clasifica coerent cazurile-limită;
- nu constituie Market Reference Set oficial;
- nu stabilește populația finală a pieței;
- nu este prezentat ca măsurare trimestrială;
- poate conduce la modificarea protocolului, cu modificările documentate în istoricul versiunilor; regulile apărute în pilotul de Market Verification au intrat în versiunea 1.0.0 (secțiunile 4.1, 6.1, 7.3 și 9).

# 14. Conflict de interese

**Declarație.** Autorul acestui protocol este Alex Matescu, fondatorul și coordonatorul AI Visibility Lab. În prima aplicare planificată — piața serviciilor GEO, AEO și AI Visibility relevante pentru clienți din România — autorul sau o entitate afiliată lui pot îndeplini criteriile de eligibilitate, iar ceilalți furnizori evaluați pot fi concurenți comerciali ai autorului. Situația este declarată aici, nu tratată ca ipoteză.

**Entitatea afiliată.** Autorul este fondatorul și coordonatorul [Ichnometria](https://ichnometria.ro/) (ichnometria.ro), furnizor de servicii GEO, AEO și AI Visibility din Sibiu, care aplică comercial metodologia dezvoltată în AI Visibility Lab. Ichnometria aparține familiei de servicii a primei aplicări și este entitate afiliată autorului și AI Visibility Lab. Dacă apare în Market Discovery, trece prin aceleași filtre ca orice alt candidat, fără tratament preferențial; dacă nu apare, nu este adăugată pentru că este afiliată (secțiunea 13).

Atunci când autorul, AI Visibility Lab sau o entitate afiliată este evaluată:

- se aplică exact aceleași criterii ca oricărui alt candidat;
- se folosesc numai dovezi publice verificabile, conservate conform secțiunii 7.2;
- relația este declarată în instanță și în orice raport derivat;
- statutul rezultat este păstrat și publicat indiferent dacă este favorabil sau nefavorabil;
- entitatea afiliată nu primește tratament preferențial în discovery, verification sau raportare;
- includerea sau excluderea ei nu modifică retrospectiv criteriile.

> **AVLMKT001-REQ-020 — Relațiile materiale cunoscute dintre autor, AI Visibility Lab și entitățile evaluate TREBUIE declarate în instanță și în orice raport derivat.**

> **AVLMKT001-REQ-021 — O entitate afiliată autorului sau AI Visibility Lab TREBUIE evaluată cu aceleași criterii și dovezi ca orice alt candidat, iar statutul ei TREBUIE păstrat indiferent de rezultat.**

Verificarea de către o terță parte a deciziilor privind entitatea afiliată nu se poate face deocamdată, pentru că nu există o terță parte care să o poată face. Până atunci, fiecare instanță și fiecare pilot declară absența ei ca deviație (decizia 4).

Principiul general al independenței este stabilit în [AVL-202, secțiunea „Independență și conflict de interese”](/lab/metodologie).

# 15. Stratul de referință și stratul de reprezentare AI

Distincția arhitecturală dintre cele două straturi este definită în [AVL-202, §14](/lab/metodologie). Pentru aplicarea acestui protocol, combinațiile posibile sunt:

`ELIGIBLE + SURFACED`, `ELIGIBLE + NOT SURFACED`, `UNVERIFIED + SURFACED`, `AMBIGUOUS + SURFACED`, `OUT OF SCOPE + SURFACED`.

Aceste diferențe sunt rezultate ale măsurării, nu motive pentru rescrierea retrospectivă a referinței.

# 16. Ce documentează furnizorii AI

AVL-MKT-001 nu presupune existența unei formule universale pentru menționare, citare sau recomandare. Afirmațiile de mai jos au fost verificate în documentația oficială la 2 octombrie 2026 și reverificate la 8 noiembrie 2026.

- **Google Search.** Google spune că bunele practici SEO rămân relevante pentru funcțiile AI din Search, pentru că acestea se bazează pe sistemele de bază de ranking și calitate, și descrie grounding (RAG) și query fan-out. O pagină trebuie să fie indexată și eligibilă pentru afișare cu snippet, iar site-ul trebuie inclus în funcțiile AI generative din Search Console. Google precizează că nu sunt necesare fișiere machine-readable noi, fișiere text pentru AI sau markup special și că îndeplinirea cerințelor nu garantează crawling, indexare sau afișare.
- **OpenAI.** OpenAI recomandă permiterea `OAI-SearchBot` în `robots.txt`. Site-urile care blochează `OAI-SearchBot` nu sunt afișate în răspunsurile ChatGPT search, deși pot apărea ca linkuri de navigare.
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
Market Discovery — registrul public al candidaților
        ↓
Market Verification — registrul public al entităților verificate
        ↓
Market Reference Set — freeze
        ↓
AVL-MKT-002 — Market Query Panel → execuție AI → măsurare
```

# 21. Publicarea rezultatelor Market Discovery și Market Verification

Market Discovery și Market Verification produc două registre publice distincte. Publicarea lor face verificabilă trecerea de la observație la eligibilitate și nu schimbă natura etapelor: Discovery identifică, Verification evaluează (secțiunea 8). Identificatorii registrelor și ai intrărilor sunt definiți în secțiunea 21.6.

## 21.1. Registrul Market Discovery

Market Discovery produce un registru public al entităților candidate identificate prin execuțiile documentate ale setului de interogări declarat de instanță. Fiecare entitate este publicată inițial cu statutul `UNVERIFIED`, împreună cu proveniența observației (rularea, interogarea, suprafața și captura în care a apărut) și cu dovezile disponibile. În acest registru, `UNVERIFIED` înseamnă că entitatea a fost identificată, dar nu a trecut încă prin Market Verification.

Includerea în registrul Market Discovery nu confirmă existența, activitatea comercială, eligibilitatea sau calitatea serviciilor unei entități. Identitățile ambigue și mențiunile fără corespondent confirmat sunt semnalate distinct. Semnalarea lor nu este un status de eligibilitate: statusul `AMBIGUOUS` se atribuie numai în Market Verification.

> **AVLMKT001-REQ-024 — Fiecare entitate din registrul Market Discovery TREBUIE publicată cu statutul `UNVERIFIED`, cu proveniența observației și cu dovezile disponibile.**

> **AVLMKT001-REQ-025 — Includerea în registrul Market Discovery NU TREBUIE prezentată drept confirmare a existenței, a activității comerciale, a eligibilității sau a calității serviciilor unei entități.**

> **AVLMKT001-REQ-026 — Identitățile ambigue și mențiunile fără corespondent confirmat TREBUIE semnalate distinct în registrul Market Discovery.**

## 21.2. Registrul Market Verification

Market Verification este o etapă metodologică separată, în care entitățile candidate sunt evaluate conform criteriilor publice de eligibilitate (secțiunile 7 și 9). Rezultatul ei este **registrul Market Verification**, registrul entităților verificate. Fiecare intrare primește unul dintre statusurile din secțiunea 9:

| Status | Ce înseamnă în registru |
| --- | --- |
| `ELIGIBLE` | Entitatea îndeplinește criteriile aplicabile (AVLMKT001-REQ-003 – AVLMKT001-REQ-007): identitate clară, serviciu din familia instanței, orientare către piața instanței. |
| `INELIGIBLE` | Entitatea este orientată către piața instanței, dar nu oferă un serviciu din familia instanței. |
| `UNVERIFIED` | Entitatea a fost evaluată, dar dovezile sunt prea slabe ca să confirme sau să excludă eligibilitatea. Nu este echivalent cu `INELIGIBLE` (AVLMKT001-REQ-012). |
| `AMBIGUOUS` | Există dovezi contradictorii sau identitatea entității nu poate fi stabilită. |
| `OUT OF SCOPE` | Entitatea este reală, dar nu este orientată către piața instanței (geografie sau limba declarată a pieței). |
| `HISTORICAL` | Serviciul a existat anterior, fără dovadă suficientă de activitate la Market Cutoff Date. |

**Registrul furnizorilor eligibili** este partea registrului Market Verification care cuprinde exclusiv intrările `ELIGIBLE`. Intrările cu celelalte statusuri se publică și ele, pentru că rezultatele negative, ambiguitățile și contradicțiile se păstrează (AVLMKT001-REQ-018).

Pentru fiecare intrare se indică sursa Market Discovery (rularea și observația din care provine candidatul), data verificării, versiunea AVL-MKT-001 aplicată și dovezile relevante, conform fișei furnizorului (secțiunea 10). Dovezile se conservă pentru toate statusurile, în forma din secțiunea 7.3.

Publicarea eligibilității nu constituie certificare, recomandare comercială sau clasament al calității serviciilor.

> **AVLMKT001-REQ-027 — Fiecare intrare din registrul Market Verification TREBUIE să indice statusul din secțiunea 9, sursa Market Discovery, data verificării, versiunea AVL-MKT-001 aplicată și dovezile relevante.**

> **AVLMKT001-REQ-028 — Registrul furnizorilor eligibili TREBUIE să cuprindă exclusiv intrări cu statusul `ELIGIBLE`.**

> **AVLMKT001-REQ-029 — Publicarea eligibilității NU TREBUIE prezentată drept certificare, recomandare comercială sau clasament al calității serviciilor.**

## 21.3. Relația cu Market Reference Set

Cele două registre și Market Reference Set sunt artefacte de instanță distincte:

```text
Registrul Market Discovery
  = toți candidații identificați, cu statutul UNVERIFIED
        ↓ Market Verification
Registrul Market Verification
  = toți candidații evaluați, fiecare cu un status din secțiunea 9
        ↓ Market Cutoff Date + freeze (secțiunea 12)
Market Reference Set
  = intrările ELIGIBLE la Market Cutoff Date, înghețate
```

Market Reference Set se constituie din intrările `ELIGIBLE` ale registrului Market Verification la Market Cutoff Date și se îngheață conform secțiunii 12. Registrul Market Verification se îngheață odată cu el, astfel încât intrările cu celelalte statusuri rămân păstrate în aceeași stare. Un furnizor identificat după cutoff nu este introdus retrospectiv (secțiunea 11); o rectificare care afectează Market Reference Set se tratează conform secțiunii 19.

Market Reference Set este constituit independent, de AI Visibility Lab, în scopul cercetării laboratorului. Nu este validat de nicio autoritate publică, organism profesional sau autoritate de reglementare și nu are statut oficial. De aceea are rezerve explicite:

- nu este lista exhaustivă a furnizorilor existenți (secțiunea 18);
- nu este o statistică oficială de piață și nici un registru profesional;
- reflectă criteriile și dovezile acestui protocol, în versiunea aplicată, la Market Cutoff Date;
- poate conține erori, corectate conform secțiunilor 19 și 21.5.

> **AVLMKT001-REQ-030 — Market Reference Set TREBUIE publicat împreună cu mențiunea că este constituit independent, în scopul cercetării AI Visibility Lab, și că nu este validat de o autoritate relevantă.**

## 21.4. Informarea entităților și neutralitatea statutului

Entitățile eligibile POT fi informate individual prin canalele oficiale adecvate, exclusiv în scopul transparenței cercetării și al facilitării rectificării eventualelor erori, cu respectarea cerințelor legale aplicabile.

Răspunsul, lipsa răspunsului sau relația comercială cu operatorul cercetării — autorul și AI Visibility Lab (secțiunea 14) — nu influențează statutul de eligibilitate.

> **AVLMKT001-REQ-031 — Informarea individuală a unei entități, atunci când are loc, TREBUIE limitată la transparența cercetării și la facilitarea rectificării erorilor.**

> **AVLMKT001-REQ-032 — Răspunsul, lipsa răspunsului sau relația comercială a unei entități cu operatorul cercetării NU TREBUIE să influențeze statutul ei de eligibilitate.**

## 21.5. Rectificări

Rectificările ulterioare se documentează și se publică prin versiuni noi ale registrului afectat, păstrând trasabilitatea observațiilor istorice. O versiune nouă nu șterge intrarea anterioară: păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (secțiunea 19).

> **AVLMKT001-REQ-033 — Rectificările TREBUIE documentate și publicate prin versiuni noi ale registrului afectat; observațiile istorice NU TREBUIE șterse.**

## 21.6. Identificatorii registrelor și ai intrărilor

Identificatorii artefactelor din interiorul unei instanțe se formează din identificatorul instanței (secțiunea 3.1):

| Artefact | Identificator | Exemplu |
| --- | --- | --- |
| Registrul Market Verification | `{instanță}-MVR` | `MKT-RO-AIV-2026Q4-MVR` |
| Market Reference Set | `{instanță}-MRS` | `MKT-RO-AIV-2026Q4-MRS` |
| Intrare în registrul Market Verification | `{instanță}-MV-{NNN}` | `MKT-RO-AIV-2026Q4-MV-242` |

Versiunea unui artefact se indică separat (de exemplu, `MKT-RO-AIV-2026Q4-MVR` v1.0), nu în identificator.

`{NNN}` este poziția candidatului, cu trei cifre, în lista candidaților Market Discovery supuși verificării. Când mai multe rânduri Discovery desemnează același operator, ele se unesc în rândul canonic, iar rândurile unite își păstrează identificatorul, ca trimitere către intrarea canonică. Registrul Market Discovery al fiecărei rulări păstrează identificatorii din pachetul ei de dovezi; legătura dintre aceștia și intrarea Market Verification se păstrează în registrul Market Verification.

`provider_id` (secțiunea 10) identifică furnizorul în toată seria. El este identificatorul intrării din primul registru Market Verification oficial în care apare furnizorul. Instanțele următoare îl păstrează pentru același furnizor, iar un furnizor nou primește identificatorul intrării din instanța în care apare prima dată.

Artefactele unui pilot poartă sufixul `-PILOT` după identificatorul instanței (de exemplu, `MKT-RO-AIV-2026Q4-PILOT-MVR` și `MKT-RO-AIV-2026Q4-PILOT-MV-242`). Codurile `MVR` și `MV` le deosebesc de rularea Market Discovery `{instanță}-PILOT`. Un pilot nu constituie Market Reference Set (secțiunea 13.2) și nu atribuie `provider_id`.

> **AVLMKT001-REQ-036 — Identificatorii intrărilor din registrul Market Verification și `provider_id` TREBUIE să rămână stabili după publicare și NU TREBUIE reutilizați pentru o altă entitate.**

---

## Documente asociate

- [AVL-001 — AI Visibility Lab Foundation](/lab/introducere) — principiile corpusului, namespace-ul `AVL-MKT-*` și formatul instanțelor `MKT-*`.
- [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie) — arhitectura ramurii Market Measurement și precedența normativă.
- [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate) — lifecycle, integrity, indexing și traceability pentru dovezi.
- AVL-MKT-002 — Market Query Panel — planificat, nepublicat.

## Surse oficiale

- Google Search Central — *Optimizing your website for generative AI features on Google Search*: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- OpenAI Help Center — *Publishers and Developers FAQ*: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- OpenAI — *Overview of OpenAI Crawlers*: https://developers.openai.com/api/docs/bots
- Claude Help Center — *Does Anthropic crawl data from the web, and how can site owners block the crawler?*: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Bing Webmaster Blog — *Introducing AI Performance in Bing Webmaster Tools Public Preview* (10 februarie 2026): https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/
- Bing Search Blog — *New AI Visibility Insights in Bing Webmaster Tools: Intents, Topics, Citation Share, Compare* (16 iunie 2026): https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/
- Perplexity Docs — *Perplexity Crawlers*: https://docs.perplexity.ai/guides/bots
- Google Search Central — *Understand the JavaScript SEO basics*: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

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
- [ ] Registrul Market Discovery publică fiecare candidat cu statutul `UNVERIFIED` și cu proveniența observației, fără a prezenta includerea drept confirmare; identitățile ambigue sunt semnalate distinct (REQ-024 – REQ-026).
- [ ] Registrul Market Verification indică statusul, sursa Market Discovery, data verificării, versiunea protocolului și dovezile; registrul furnizorilor eligibili cuprinde doar `ELIGIBLE`; eligibilitatea nu este prezentată drept certificare, recomandare sau clasament (REQ-027 – REQ-029).
- [ ] Market Reference Set este publicat cu mențiunea constituirii independente și a lipsei validării de către o autoritate relevantă (REQ-030).
- [ ] Informarea entităților este limitată la scopul declarat; răspunsul sau relația comercială nu influențează statutul; rectificările sunt versionate fără ștergerea istoricului (REQ-031 – REQ-033).
- [ ] Dovada fiecărei intrări, indiferent de status, este conservată ca răspuns HTTP brut și indexată cu SHA-256; justificările intrărilor `UNVERIFIED` și `AMBIGUOUS` spun ce lipsește sau ce e contradictoriu (REQ-034, REQ-035).
- [ ] Identificatorii intrărilor și `provider_id` sunt stabili și nereutilizați (REQ-036).
- [ ] Când instanța declară o limbă a pieței, fiecare `ELIGIBLE` are o pagină de serviciu în acea limbă (REQ-037).
- [ ] Fiecare `ELIGIBLE` se sprijină pe un serviciu vizibil în HTML-ul brut conservat; altfel, entitatea e `UNVERIFIED` (REQ-038).
- [ ] Observațiile de transparență nu au schimbat niciun status (REQ-039).
- [ ] Rândurile Discovery care desemnează același operator sunt unite în intrarea canonică (REQ-040).

## Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
| --- | --- | --- | --- |
| 1.0.0 | 9 noiembrie 2026 | Activ | MAJOR: activarea protocolului (decizii Alex Matescu, 9 noiembrie 2026). Pilotul de Market Verification (27 octombrie – 8 noiembrie 2026) este acceptat ca pilot intern; `HISTORICAL` rămâne în listă, nefolosit în pilot, iar entitatea afiliată autorului e declarată netestată (secțiunea 13.2, decizia 1). Regulile apărute în pilot devin normative: secțiunea 4.1 nouă, o entitate corespunde unui operator, cu unirea rândurilor (AVLMKT001-REQ-040); secțiunea 6.1 nouă, limba pieței, română pentru `MKT-RO-AIV-2026Q4` (AVLMKT001-REQ-037, REQ-002 extinsă); în secțiunea 7.3, serviciul trebuie să se vadă în HTML-ul brut, altfel `UNVERIFIED`, iar verificarea în browser nu înlocuiește dovada (AVLMKT001-REQ-038), justificat prin verificabilitatea dovezii și documentația Google Search Central despre JavaScript, verificată la 9 noiembrie 2026; observațiile de transparență nu schimbă statusul (AVLMKT001-REQ-039). Definițiile statusurilor din secțiunile 9 și 21.2 sunt precizate. Definiția E2 este clarificată: textele scrise de terți despre furnizor sunt E3 (în pilot, MV-057 a fost încadrat E2 după formularea anterioară; statusul lui nu se schimbă). Secțiunea 14 numește Ichnometria (ichnometria.ro) ca entitate afiliată. Secțiunea 3.3: prima instanță oficială, `MKT-RO-AIV-2026Q4`, rulată în decembrie 2026. Pentru pilot, entitățile `ELIGIBLE` cu pagini randate în JavaScript (MV-131, MV-196) își păstrează statusul: specificațiile pilotului nu acopereau cazul. Cerințele AVLMKT001-REQ-001 – REQ-036 rămân în vigoare. |
| 0.11.0 | 8 noiembrie 2026 | Draft pentru revizuire | MINOR, după pilotul de Market Verification (27 octombrie – 8 noiembrie 2026), decizii Alex Matescu din 7 și 8 noiembrie 2026. Secțiunea 7.3 nouă: dovada de eligibilitate este răspunsul HTTP brut al sursei consultate, o pagină pe entitate, fără capturi de ecran (AVLMKT001-REQ-034); aceeași regulă pentru toate statusurile, inclusiv `UNVERIFIED` și `AMBIGUOUS`, cu justificarea a ce lipsește sau a contradicției (AVLMKT001-REQ-035). Secțiunea 21.6 nouă: identificatorii `{instanță}-MVR`, `{instanță}-MRS`, `{instanță}-MV-{NNN}`, `provider_id` pentru serie și sufixul `-PILOT` pentru artefactele unui pilot (AVLMKT001-REQ-036). Deciziile deschise 2 și 3 sunt închise; decizia 4 este declarată deviație, pentru că nu există o terță parte care să poată face verificarea (secțiunea 14). Secțiunile 7.2, 10, 21 și 21.2, starea documentului, checklist-ul de conformitate și decizia 1 sunt actualizate. Secțiunea 16 a fost reverificată la 8 noiembrie 2026: afirmația că orice site public poate apărea în ChatGPT search a fost scoasă, pentru că nu mai apare în documentația OpenAI accesibilă (OpenAI Help Center răspunde HTTP 403); data de actualizare a ghidului Google nu mai este afișată pe pagină și a fost scoasă din lista surselor. Criteriile de eligibilitate, statusurile din secțiunea 9 și cerințele AVLMKT001-REQ-001 – AVLMKT001-REQ-033 nu se schimbă. |
| 0.10.0 | 16 octombrie 2026 | Draft pentru revizuire | MINOR, cu schimbare de politică de publicare: secțiunea 21 nouă, „Publicarea rezultatelor Market Discovery și Market Verification”, cu cerințele AVLMKT001-REQ-024 – AVLMKT001-REQ-033. Market Discovery produce un registru public al candidaților, toți cu statutul `UNVERIFIED`; Market Verification produce registrul entităților verificate, cu statusurile din secțiunea 9; registrul furnizorilor eligibili cuprinde exclusiv intrările `ELIGIBLE`. Se definesc relația celor două registre cu Market Reference Set și rezervele acestuia (constituit independent, în scopul cercetării laboratorului, nevalidat de o autoritate relevantă), informarea entităților, neutralitatea statutului față de răspunsul sau relația comercială cu operatorul cercetării și rectificările prin versiuni noi. Regula se aplică la nivel de protocol; documentele de instanță care prevedeau nepublicarea numelor furnizorilor se aliniază prin versiuni noi, fără editarea versiunilor citate în pachetele de dovezi. Actualizate: secțiunea 1 (punctul 10), secțiunea 20, starea pilotărilor (trei piloturi Market Discovery), checklist-ul de conformitate și deciziile deschise 2 și 3. Afirmațiile din secțiunea 16 au fost reverificate la 16 octombrie 2026; pagina OpenAI Help Center nu a putut fi accesată (HTTP 403), iar afirmațiile despre `OAI-SearchBot` au fost confirmate în documentația OpenAI despre crawlere, adăugată la surse. Criteriile de eligibilitate, statusurile din secțiunea 9 și cerințele AVLMKT001-REQ-001 – AVLMKT001-REQ-023 nu se schimbă. |
| 0.9.2 | 13 octombrie 2026 | Draft pentru revizuire | PATCH: decizia deschisă 5 („Convenția T0 / F1 … Fn în corpus”) este închisă și pentru restul corpusului: convenția și etapele denumite sunt definite în AVL-200 §7 (v1.1.0), iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate la 13 octombrie 2026. Fără modificări ale cerințelor sau ale regulilor Market Discovery. |
| 0.9.1 | 12 octombrie 2026 | Draft pentru revizuire | Secțiunea 3.2 rescrisă: rulările Market Discovery se identifică prin `FULL` (rularea trimestrială completă) și `M{lună}` (rulările lunare); convenția T0 / F1 … Fn nu se folosește în Market Discovery și rămâne cea din AVL-200 §7 și Tabula Rasa (AVL-201); schema rulărilor de măsurare AI rămâne în AVL-MKT-002. Modificarea rezultă din două piloturi de Market Discovery (9 și 11 octombrie 2026): repetarea acelorași interogări la câteva zile distanță nu este o strategie longitudinală adecvată. Decizia deschisă 5 actualizată. Criteriile de eligibilitate, statusurile și cerințele `AVLMKT001-REQ-*` nu se schimbă. |
| 0.9.0 | 2 octombrie 2026 | Draft pentru revizuire | Prima versiune publică, ca pre-înregistrare a criteriilor înainte de pilotul intern. Față de draftul intern din 30 septembrie 2026: cerințele unificate într-o singură serie `AVLMKT001-REQ-001 … 023` (înlocuiesc seriile interne `MKT-REQ` și `E-REQ`); clasele geografice generalizate (`{CC}-DOMESTIC` etc.), cu România păstrată ca exemplu de primă aplicare; separate perioada instanței (Q) și axa rulărilor (T0 / F1 … Fn); dovezile de eligibilitate legate de AVL-200; declarație explicită de conflict de interese și cerințele REQ-020 – REQ-021; adăugate REQ-002, REQ-010 și REQ-015; procedura pilotului preluată din AVL-202; regulile editoriale generale înlocuite cu trimitere la AVL-001; afirmațiile despre furnizorii AI reverificate și restrânse la documentația oficială. |

## Decizii închise la activarea 1.0.0

1. **Pilotul intern.** Închisă la 9 noiembrie 2026 (decizie Alex Matescu): pilotul de Market Verification este acceptat ca pilot intern, fără un mini-pilot separat; `HISTORICAL` și entitatea afiliată autorului sunt declarate netestate (secțiunea 13.2). Regulile pilotului au intrat în versiunea 1.0.0.
2. **Identificatorii artefactelor din instanță.** Închisă la 8 noiembrie 2026 (decizie Alex Matescu): secțiunea 21.6 și AVLMKT001-REQ-036.
3. **Dovezile pentru statusurile incerte.** Închisă la 8 noiembrie 2026 (decizie Alex Matescu): secțiunea 7.3 și AVLMKT001-REQ-035.
4. **Verificarea de către o terță parte** a deciziilor privind entitatea afiliată. Declarată deviație la 8 noiembrie 2026 și acceptată ca excepție la activare (decizie Alex Matescu): nu există deocamdată o terță parte care să poată face verificarea. Fiecare instanță declară absența ei (secțiunea 14). Decizia se reia când o terță parte devine disponibilă.
5. **Convenția T0 / F1 … Fn în corpus.** Închisă. Pentru Market Discovery, în versiunea 0.9.1: rulările se identifică prin `FULL` și `M{lună}` (secțiunea 3.2). Pentru restul corpusului, la 13 octombrie 2026: convenția și etapele denumite sunt definite în [AVL-200 §7](/lab/metodologie/standard-dovezi-masurare-trasabilitate) (v1.1.0), iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate. Schema rulărilor de măsurare AI rămâne în AVL-MKT-002.

---

*AVL-MKT-001 este un document normativ al AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Versiunea 1.0.0 este activă din 9 noiembrie 2026. Ultima verificare factuală și a surselor: 9 noiembrie 2026 (secțiunea 16: 8 noiembrie 2026).*
