---
title: "Cadrul metodologic AI Visibility Lab — măsurare, dovezi și comparație"
description: "AVL-202 definește cadrul metodologic AI Visibility Lab pentru măsurare, baseline, dovezi, query set, intervenții, re-măsurare și comparații longitudinale în Search și AI Search."
author: "Alex Matescu"
organization: "AI Visibility Lab"
date_published: "2026-09-14"
date_modified: "2026-10-26"
last_reviewed: "2026-10-02"
language: "ro-RO"
canonical: "https://delamatescu.ro/lab/metodologie"
document_id: "AVL-202"
document_level: "C — Methodology"
document_role: "methodological-framework"
version: "1.7.1"
status: "Activ"
depends_on:
  - "AVL-001"
normative_documents:
  - "AVL-200"
  - "AVL-201"
keywords:
  - "AI Visibility"
  - "metodologie AI Visibility"
  - "GEO"
  - "AEO"
  - "Search"
  - "AI Search"
  - "baseline"
  - "Tabula Rasa F0"
  - "query set"
  - "entity resolution"
  - "măsurare longitudinală"
  - "standard de dovezi"
  - "AVL-202"
  - "cadru metodologic"
  - "Market Measurement"
  - "AVL-MKT"
---

# Cadrul metodologic AI Visibility Lab

**Cum măsurăm, documentăm, intervenim și comparăm vizibilitatea unei entități în Search și AI Search.**

Metodologia AI Visibility Lab transformă întrebări precum „sunt găsit?”, „sunt identificat corect?”, „sunt citat?” sau „ce s-a schimbat după optimizare?” în procese de măsurare documentate, comparabile și verificabile.

Nu încercăm să deducem algoritmii interni ai platformelor dintr-o singură observație.
Stabilim mai întâi starea inițială, păstrăm dovezile, declarăm intervențiile și repetăm măsurarea în condiții cât mai comparabile.

> **Principiul de bază:** înainte de a optimiza, măsurăm. Înainte de a atribui un rezultat unei intervenții, documentăm ce era înainte și ce s-a schimbat după.

## Identitatea documentului

**AVL-202 — Cadrul metodologic AI Visibility Lab**

Documentul-cadru care organizează metodologia AI Visibility Lab și declară relațiile dintre principiile Foundation, standardul de dovezi, specificația de baseline și viitoarele protocoale metodologice.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-202 |
| Nivel | C — Methodology |
| Versiune | 1.7.1 |
| Statut | Activ |
| Autor | [Alex Matescu](/despre) |
| Organizație | [AI Visibility Lab](/lab) |
| Data publicării | 14 septembrie 2026 |
| Ultima actualizare | 26 octombrie 2026 |
| Ultima verificare | 2 octombrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie |
| Dependență | [AVL-001 — AI Visibility Lab Foundation](/lab/introducere) |
| Documente informative | [AVL-101 — Ce este GEO/AEO și AI Visibility](/lab/cercetare/ce-este-geo-aeo), [AVL-102 — Cum aleg sistemele AI sursele și citările](/lab/cercetare/cum-aleg-motoarele-ai), [AVL-103 — SEO vs GEO](/lab/cercetare/seo-vs-geo), [AVL-104 — Cum se măsoară AI Visibility](/lab/cercetare/cum-se-masoara-ai-visibility), [AVL-105 — Glosar GEO/AEO și AI Visibility](/lab/cercetare/glosar-geo-aeo) |
| Documente normative asociate | AVL-200 — Standard dovezi, măsurare și trasabilitate; [AVL-201 — Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0); [AVL-203 — Protocolul minim de verificare tehnică](/lab/metodologie/protocol-verificare-tehnica) (Draft pentru revizuire); [AVL-204 — Grila de interpretare a verificării tehnice](/lab/metodologie/grila-interpretare-verificare-tehnica) (Draft pentru revizuire) |
| Familii metodologice | Market Measurement — `AVL-MKT-*`: [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate) (Draft pentru revizuire, v0.10.0); AVL-MKT-002 — Market Query Panel (planificat) |

**Scopul documentului:** definirea cadrului metodologic comun prin care AI Visibility Lab transformă observații despre Search și AI Search în măsurători documentate, comparabile și verificabile și stabilirea relațiilor normative dintre documentele metodologice.

**Publicul căruia i se adresează:** cercetători, practicieni GEO/AEO/SEO, proprietari de site-uri și entități, dezvoltatori, autori și orice persoană care vrea să înțeleagă cum sunt măsurate și interpretate rezultatele publicate de AI Visibility Lab.

---

## Cum se citesc identificatorii AVL

Identificatorii AVL sunt **permanenți** și reflectă **ordinea de înregistrare a documentelor**, nu o ierarhie de precedență și nici ordinea recomandată de lectură.

Un document cu un identificator numeric mai mare poate defini cadrul conceptual în care sunt interpretate documente înregistrate anterior. Relațiile dintre documente sunt declarate explicit prin rol, dependențe și referințe normative; ele nu sunt deduse din număr.

Prin urmare:

- **AVL-200** rămâne identificatorul permanent pentru **Standard dovezi, măsurare și trasabilitate**;
- **AVL-201** rămâne identificatorul permanent pentru **Tabula Rasa F0** (titlu istoric, vezi [AVL-200 §7.4](/lab/metodologie/standard-dovezi-masurare-trasabilitate));
- **AVL-202** este identificatorul permanent pentru **Cadrul metodologic AI Visibility Lab**;
- **AVL-203** este identificatorul permanent pentru **Protocolul minim de verificare tehnică a unui site pentru AI Visibility**;
- **AVL-204** este identificatorul permanent pentru **Grila de interpretare a verificării tehnice**.

Aceste ID-uri nu se renumerotează retrospectiv doar pentru a produce o succesiune numerică mai elegantă.

### Identificatorii de familie: `AVL-MKT-*`

Pe lângă seria numerică `AVL-NNN`, Nivelul C poate conține familii metodologice cu namespace propriu. Prima familie de acest tip este **Market Measurement**, cu identificatori de forma `AVL-MKT-NNN`. Definiția completă a namespace-ului este stabilită în [AVL-001 — AI Visibility Lab Foundation](/lab/introducere), §17.

Într-un identificator `AVL-MKT-NNN`, `AVL` indică apartenența la corpusul normativ AI Visibility Lab, `MKT` indică familia Market Measurement, iar `NNN` identifică permanent documentul în interiorul familiei. Numerotarea familiei începe cu `001`, este independentă de seria `AVL-NNN` și reflectă ordinea de înregistrare în familie, nu ordinea de lectură. **AVL-MKT-001** și **AVL-001** sunt documente diferite: numărul comun nu exprimă nicio relație între ele.

### Ordinea de înregistrare

**AVL-200 → AVL-201 → AVL-202 → AVL-203 → AVL-204**

Familia `AVL-MKT-*` are propria ordine de înregistrare, care începe cu AVL-MKT-001.

### Ordinea conceptuală recomandată de lectură

**AVL-001 → AVL-202 → AVL-200 / AVL-201 / AVL-203 → documentele familiei AVL-MKT**

AVL-001 stabilește principiile Foundation.
AVL-202 descrie cadrul metodologic general.
AVL-200, AVL-201 și AVL-203 (draft pentru revizuire) formalizează componente specifice ale acelui cadru.
AVL-204 (draft pentru revizuire) se citește după AVL-203, ale cărui observații le interpretează.
Documentele `AVL-MKT-*` formalizează măsurarea reprezentării unei piețe și se citesc după AVL-202.

---

## Arhitectura metodologiei

Relația dintre documentele existente și cele planificate este:

```text
AVL-001
Foundation
   │
   ▼
AVL-202
Cadrul metodologic AI Visibility Lab
   │
   ├── Metodologia de bază (Core Methodology)
   │     ├── AVL-200  Standard dovezi, măsurare și trasabilitate
   │     ├── AVL-201  Tabula Rasa F0 — Baseline
   │     ├── AVL-203  Protocolul minim de verificare tehnică   (Draft pentru revizuire, v0.6.0)
   │     ├── AVL-204  Grila de interpretare a verificării tehnice   (Draft pentru revizuire, v0.3.0)
   │     └── viitoare documente metodologice / protocoale
   │
   └── Market Measurement — familia AVL-MKT-*
         ├── AVL-MKT-001  Market Scope & Eligibility Protocol   (Draft pentru revizuire, v0.10.0)
         ├── AVL-MKT-002  Market Query Panel                    (planificat)
         └── viitoare protocoale ale familiei (AVL-MKT-003 …)
```

Relația este **conceptuală și normativă**, nu cronologică. AVL-200 și AVL-201 au fost înregistrate înainte ca documentul-cadru AVL-202 să fie formalizat; acest istoric este păstrat, nu rescris.

**AVL-MKT este o familie funcțională în interiorul Nivelului C — Methodology și nu reprezintă un nivel normativ separat.** Documentele familiei sunt guvernate de AVL-001 și de AVL-202 la fel ca oricare alt document de Nivel C.

### Precedența normativă

```text
AVL-001
   ↓
AVL-202
   ↓
protocoale normative specifice familiei (ex. AVL-MKT-*)
   ↓
instanțe ale metodologiei (ex. instanțe MKT-* cu Market Reference Set, măsurători concrete)
   ↓
măsurare
```

Un protocol de familie poate detalia, dar nu poate contrazice AVL-202 sau AVL-001. O instanță aplică protocolul; nu îl modifică.

### Rolul paginii `/lab/metodologie`

Pagina publică `/lab/metodologie` este hub-ul metodologic al AI Visibility Lab. Ea are patru funcții:

1. prezintă cadrul metodologic general;
2. explică ciclul metodologic și principiile comune;
3. oferă punctul de intrare către documentele normative;
4. arată relațiile dintre standarde, baseline-uri, familiile metodologice și protocoalele viitoare.

În acest hub, ordinea de afișare trebuie să urmărească **ordinea logică de lectură**, nu ordinea numerică a ID-urilor:

1. **AVL-202 — Cadrul metodologic AI Visibility Lab**
2. **AVL-200 — Standard dovezi, măsurare și trasabilitate**
3. **AVL-201 — Tabula Rasa F0**
4. **AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility** (draft pentru revizuire);
5. **AVL-204 — Grila de interpretare a verificării tehnice** (draft pentru revizuire);
6. documentele familiei Market Measurement (`AVL-MKT-*`), începând cu AVL-MKT-001;
7. documentele metodologice viitoare.

Documentele planificate, dar nepublicate, sunt menționate în text fără link. Hub-ul nu conține pagini placeholder pentru documente care nu există încă.


## Răspunsul scurt

Metodologia AI Visibility Lab urmărește un ciclu simplu:

**întrebare → documentare → ipoteză → baseline → intervenție → așteptare → re-măsurare → comparație → concluzii și limite**

Linia de bază este documentată prin **[Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0)**, prima specificație normativă a laboratorului. Aceasta stabilește condițiile minime pentru măsurarea stării inițiale a unei entități: ce trebuie inventariat, ce interogări sunt folosite, cum sunt păstrate dovezile, cum sunt clasificate răspunsurile și ce poate fi comparat ulterior.

Cadrul include și o ramură dedicată măsurării unei piețe, nu doar a unei entități: familia **Market Measurement (`AVL-MKT-*`)**. În această ramură, piața este definită și verificată independent, conform unui protocol publicat, înainte ca reprezentarea ei în sistemele AI să fie măsurată (vezi secțiunea 14).

Metodologia nu promite răspunsuri identice la rulări repetate și nu pretinde control asupra indexării, retrievalului, modelelor sau celorlalte componente interne ale furnizorilor.
Scopul metodologiei este **auditabilitatea procesului**: să putem arăta ce a fost măsurat, în ce condiții, cu ce dovezi, ce s-a schimbat și cât de puternică poate fi concluzia rezultată.

---

## 1. Ce încercăm să măsurăm

AI Visibility nu este tratată ca simpla apariție a unui nume într-un răspuns.

Pentru fiecare entitate urmărim separat dacă:

- informația poate fi accesată;
- conținutul poate fi recuperat ca relevant;
- entitatea este identificată fără ambiguitate;
- informațiile atribuite sunt corecte și actuale;
- sursele susțin afirmațiile făcute;
- entitatea este menționată;
- sursa proprie este citată;
- apar coliziuni, informații învechite sau confabulări.

Această separare derivă din modelul de cercetare al laboratorului, care tratează accesul, recuperarea, sinteza și selecția citării ca etape distincte și consideră reprezentarea entității un strat transversal.

---

## 2. Ciclul metodologic

### 2.1. Definirea întrebării

Orice cercetare începe cu o întrebare suficient de precisă încât rezultatul să poată fi verificat.

Nu:

> „Schema ajută AI?”

Ci, de exemplu:

> „Se modifică reprezentarea entității X în aceleași interogări după intervenția Y?”

Întrebarea trebuie să permită observarea unui rezultat și să delimiteze ceea ce poate fi măsurat de ceea ce rămâne necunoscut.

### 2.2. Documentarea stării cunoscute

Înainte de experiment sunt verificate:

- documentația oficială a platformelor;
- standardele și specificațiile relevante;
- literatura academică;
- documentele Research ale AI Visibility Lab;
- starea publică actuală a entității.

Documentația oficială are prioritate pentru afirmațiile despre propriile produse ale furnizorilor.
Lipsa unei afirmații oficiale nu este tratată automat drept dovadă că un mecanism nu există.

### 2.3. Formularea ipotezei

Ipoteza este formulată **înaintea intervenției** și trebuie să poată fi infirmată.

Scopul nu este confirmarea unei metode, ci reducerea incertitudinii.

Un rezultat negativ, parțial sau neconcludent rămâne rezultat și trebuie păstrat.

### 2.4. Stabilirea baseline-ului

Starea inițială este documentată înaintea intervențiilor analizate.

Baseline-ul trebuie să permită comparația ulterioară și să reducă riscul de a atribui unei intervenții un rezultat care exista deja.

### 2.5. Înghețarea elementelor de comparație

Setul de interogări, taxonomia, entitățile, platformele și condițiile relevante sunt păstrate pe cât posibil între măsurări.

Orice schimbare care poate afecta comparabilitatea este declarată.

### 2.6. Aplicarea intervenției

Modificările sunt documentate individual, datate și delimitate de schimbările necontrolate atunci când acest lucru este posibil.

### 2.7. Perioada de așteptare

Este acordat timp pentru ca ecosistemele externe să poată reflecta schimbările: recrawl, indexare, actualizarea surselor sau alte procese asupra cărora experimentul nu are control direct.

### 2.8. Remăsurarea

Setul comparabil este rulat din nou în condiții cât mai apropiate de baseline.

### 2.9. Comparația și interpretarea

Diferențele sunt calculate și descrise înainte de formularea interpretării.

O schimbare temporală este o observație. Explicația acelei schimbări poate fi o inferență sau o ipoteză și trebuie prezentată ca atare.

---

## 3. Etapa de baseline — stabilirea liniei de bază

**[Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0)** documentează starea unei entități înainte de intervenții.

Baseline-ul (`T0`) trebuie să permită unui terț competent să înțeleagă:

- ce a fost măsurat;
- în ce condiții;
- prin ce interogări;
- pe ce platforme;
- ce răspunsuri au fost obținute;
- ce surse au fost afișate;
- cum au fost clasificate rezultatele;
- ce dovezi susțin fiecare observație.

AVL-201 tratează baseline-ul ca pe un livrabil independent, nu ca pe o etapă informală înaintea „adevăratului” experiment.

> **Notă de nomenclatură:** etapele metodologice se identifică doar prin nume — etapa de baseline, etapa sursei canonice, etapa prezenței distribuite și etapa de re-măsurare —, iar codurile se folosesc doar pentru punctele de măsurare: `T0` este baseline-ul, `F1` primul punct de măsurare după baseline, `F2` … `Fn` re-măsurările ulterioare. Definițiile și corespondența cu convențiile anterioare (`F0`–`F3` ca faze, `T0`/`T1`/`T2` ca puncte de măsurare) sunt în [AVL-200 §7](/lab/metodologie/standard-dovezi-masurare-trasabilitate). Atunci când un studiu istoric folosește o convenție mai veche, aceasta nu este rescrisă retroactiv.

**→ [Citește AVL-201 — Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0)**

---

## 4. Query set-ul

Măsurarea unei entități nu se bazează pe o singură întrebare.

Se construiește un set de interogări suficient de larg pentru a testa diferite forme de identificare și reprezentare a entității.

În funcție de obiectul studiului, query set-ul poate acoperi:

- identitate;
- rol;
- expertiză;
- locație;
- asociere cu organizații sau proiecte;
- informații factuale;
- dezambiguizare;
- comparație;
- recomandare.

Formulările folosite pentru comparație sunt păstrate exact, iar identificatorii query-urilor trebuie menținuți între punctele de măsurare comparate.
Interogările noi pot fi introduse ulterior, dar nu trebuie amestecate retrospectiv în seria comparativă principală.

Un query set este un eșantion documentat, nu recensământul tuturor întrebărilor posibile despre o entitate.

---

## 5. Standardul de dovezi

Această secțiune rezumă principiile necesare pentru a înțelege cadrul general. Cerințele detaliate privind dovezile, măsurarea și trasabilitatea sunt formalizate separat în **AVL-200 — Standard dovezi, măsurare și trasabilitate**.

Fără dovezi, o măsurare rămâne doar o afirmație.

Pentru rulările relevante păstrăm, în funcție de experiment:

- răspunsul brut;
- captură integrală sau export;
- data și ora;
- platforma și modelul afișat;
- formularea exactă a interogării;
- limba și condițiile sesiunii;
- sursele afișate;
- clasificarea rezultatului;
- incidentele și abaterile de protocol.

Metodologia cere păstrarea unui instantaneu verificabil al baseline-ului și evitarea selecției doar a rezultatelor favorabile.

Atunci când dovezile sunt procesate într-un evidence set, **artefactul brut și metadatele derivate rămân separate**. O asociere dedusă din ordine, timestamp sau continuitatea unei sesiuni trebuie marcată ca inferență, nu prezentată drept informație vizibilă direct în captură.

Unde este folosit un manifest de integritate, checksum-urile trebuie să descrie forma finală a artefactelor publicate. Validarea structurală a setului precede generarea checksum-urilor, iar orice modificare ulterioară a unui fișier acoperit de manifest impune regenerarea checksum-ului corespunzător.

---

## 6. Taxonomia rezultatelor

Răspunsurile nu sunt reduse la „apare / nu apare”.

Taxonomia operațională de bază include:

**HIT-C** — entitatea este identificată corect și sursa canonică este citată.

**HIT** — entitatea este identificată corect și răspunsul satisface criteriul principal.

**HIT parțial** — răspuns relevant, dar incomplet, imprecis sau insuficient atribuit.

**MENȚIUNE** — entitatea apare, fără îndeplinirea completă a criteriului principal.

**NULL** — nu este produs un rezultat relevant pentru entitate sau sistemul declară că nu dispune de suficiente informații.

**REFUZ / LIMITARE** — platforma refuză, nu poate executa căutarea sau afișează o limitare tehnică; se raportează separat de NULL atunci când distincția poate fi observată.

**FAPT ÎNVECHIT** — entitatea este identificată, dar informația este depășită.

**SURSĂ GREȘITĂ** — atribuirea sau citarea nu susține afirmația relevantă ori se referă la altă entitate.

**COLIZIUNE** — identitatea este confundată sau amestecată cu o altă entitate.

**CONFABULARE** — sistemul atribuie entității informații nesusținute sau inventate.

Un studiu poate introduce stări suplimentare atunci când designul experimental le cere — de exemplu instabilitate, rezultat nedeterminat sau query drift — dar fiecare etichetă suplimentară trebuie definită înainte de a fi folosită în interpretare.

Taxonomia există pentru diagnostic. Două entități care obțin același scor agregat pot avea probleme complet diferite.

---

## 7. Nu măsurăm doar răspunsul AI

Tabula Rasa F0 tratează baseline-ul ca pe o fotografie mai largă a entității.

În funcție de proiect pot fi auditate mai multe straturi.

### Accesul tehnic

`robots.txt`, crawlere, răspunsuri HTTP, CDN/WAF și posibilitatea reală de recuperare a conținutului.

### Datele structurate

Noduri JSON-LD, `@id`, tipuri, relații și concordanța dintre markup și textul vizibil.

Datele structurate sunt tratate ca instrument de clarificare semantică, nu ca garanție a indexării, menționării sau citării.

### Search

Rezultatele organice și alte suprafețe de căutare relevante sunt analizate separat de răspunsurile generative atunci când obiectul studiului cere acest lucru.

### Răspunsurile AI

Cum răspund platformele pe query set-ul stabilit, ce informații atribuie entității și ce surse afișează.

### Înțelegerea entității

Rol, locație, experiență, organizații asociate, cronologie, actualitate, coliziuni și eventuale informații false sau lipsă.

### Ecosistemul extern

Profiluri, publicații, directoare, registre, mențiuni și alte surse care confirmă, completează sau contrazic identitatea publică.

---

## 8. Intervenția

După închiderea baseline-ului pot fi introduse modificări.

Intervențiile trebuie:

- declarate;
- datate;
- documentate individual;
- separate, pe cât posibil, de schimbările necontrolate;
- păstrate într-un registru care poate fi folosit ulterior pentru interpretare.

Exemplele pot include modificări de conținut, structură, date structurate, dezambiguizare, internal linking, surse canonice sau prezență distribuită. În metodologia AI Visibility Lab, intervențiile sunt grupate în etapa sursei canonice și etapa prezenței distribuite ([AVL-200 §7](/lab/metodologie/standard-dovezi-masurare-trasabilitate)).

Metodologia nu presupune că o schimbare observată după intervenție demonstrează automat cauzalitatea.

Dacă mai multe intervenții au loc între două puncte de măsurare, rezultatul ulterior nu este atribuit automat uneia singure dintre ele.

---

## 9. Așteptarea și remăsurarea

Sistemele externe nu se actualizează instantaneu și nu sunt controlate de experiment.

Între două puncte de măsurare pot interveni:

- recrawl;
- indexare sau reindexare;
- actualizarea surselor;
- schimbări ale platformelor sau modelelor;
- schimbări ale interfețelor;
- modificări ale ecosistemului extern;
- cache sau disponibilitate web.

Ferestrele ulterioare de măsurare reutilizează, pe cât posibil, aceleași query-uri, criterii și condiții. Punctele de măsurare de după baseline se notează `F1`, `F2` … `Fn`, în ordinea executării.

Orice schimbare de motor, model, interfață, limbă, țară, stare a contului sau metodă de captură trebuie declarată atunci când poate afecta comparabilitatea.

---

## 10. Comparația

Diferența dintre două ferestre nu este redusă la un singur scor.

Sunt urmărite separat, în funcție de obiectul studiului:

- rata HIT;
- rata HIT-C;
- rata NULL;
- mențiunile;
- coliziunile;
- confabulările;
- faptele învechite;
- sursele afișate;
- citarea sursei canonice;
- atributele entității;
- diferențele între platforme;
- variația între rulări;
- abaterile de protocol;
- rezultatele excluse din agregarea curată.

Dacă este publicat un scor agregat, trebuie publicat și contextul lui:
- numărul de rulări,
- perioada,
- platformele,
- condițiile și distribuția categoriilor relevante.

Un scor fără distribuția din spate poate ascunde moduri de eșec fundamental diferite.

---

## 11. Cum clasificăm afirmațiile

Rezultatele metodologiei sunt interpretate prin clasificarea epistemică a AI Visibility Lab.

**Documentat** — susținut direct de documentație oficială, standard, specificație sau cercetare primară identificabilă.

**Observat** — rezultat direct al unei măsurători sau al unui test documentat, valabil în condițiile respective.

**Inferat** — concluzie rezonabilă susținută de dovezi, dar neconfirmată direct.

**Ipoteză** — explicație sau predicție care urmează să fie testată și trebuie să poată fi infirmată.

**Opinie editorială** — recomandare sau poziție argumentată.

O observație individuală nu este transformată într-o regulă universală.

Dacă explicația unui rezultat nu este cunoscută, metodologia păstrează explicit necunoscutul în loc să îl transforme într-o certitudine aparentă.

---

## 12. Metodologie, experiment și studiu de caz nu sunt același lucru

### Metodologia

Definește **cum trebuie măsurat** și care sunt regulile prin care o observație poate deveni rezultat publicabil.

Exemplu:

**[AVL-201 — Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0)**

### Experimentul public

Pornește de la o **ipoteză declarată înainte** și testează o intervenție sau un fenomen în condiții documentate.

Rezultatele sunt publicate indiferent dacă susțin, infirmă sau nu permit adjudecarea ipotezei.

**→ [Vezi experimentele publice](/lab/experimente-publice)**

### Studiul de caz

Aplică metodologia asupra unei **entități reale** și documentează evoluția acesteia de-a lungul mai multor ferestre de măsurare.

Un studiu de caz poate conține mai multe puncte de măsurare și poate include experimente, dar nu este sinonim cu acestea.

**→ [Vezi studiile de caz](/lab/studii-de-caz)**

Aceeași metodologie poate susține mai multe experimente și mai multe studii de caz.

---

## 13. Principiile metodologiei

Metodologia AI Visibility Lab respectă câteva reguli constante:

- dovezile au prioritate față de rezultatul dorit;
- documentația oficială are prioritate pentru afirmațiile despre propriul produs al unui furnizor;
- afirmațiile nu trebuie formulate mai puternic decât permit dovezile;
- observația este separată de inferență și interpretare;
- necunoscutul nu este transformat în negație;
- rezultatele negative, ambigue și neconcludente sunt păstrate;
- contaminarea și abaterile de protocol sunt documentate, nu ascunse;
- metodologia trebuie descrisă suficient pentru verificare;
- limitările și incidentele sunt publicate;
- documentele și seturile de date sunt versionate atunci când schimbările pot afecta interpretarea;
- utilitatea pentru oameni rămâne criteriul editorial principal;
- rezultatele nu sunt ajustate pentru a valida un serviciu, furnizor sau metodologie proprie;
- corelația temporală nu este prezentată automat drept cauzalitate.

---

## 14. Market Measurement — măsurarea reprezentării unei piețe

Market Measurement este ramura Nivelului C care se ocupă de măsurarea modului în care sistemele AI reprezintă o piață — o populație de furnizori — nu o singură entitate. Ramura este formalizată prin familia normativă `AVL-MKT-*` și rămâne subordonată AVL-001 și AVL-202.

Diferența față de măsurarea unei entități este obiectul măsurării. Pentru o entitate, referința este chiar entitatea studiată. Pentru o piață, referința trebuie construită mai întâi: cine face parte din piață, după ce criterii și cu ce dovezi. Fără această referință, nu se poate spune ce a omis, a adăugat sau a reprezentat greșit un sistem AI.

Această secțiune descrie arhitectura ramurii. Nu conține criteriile de eligibilitate, regulile de construire a panelului de interogări sau alte cerințe operaționale. Regulile operaționale de delimitare a pieței și de eligibilitate sunt definite exclusiv în [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate); regulile panelului de interogări vor fi definite de AVL-MKT-002 — Market Query Panel (planificat).

### 14.1. Protocol normativ și instanță a protocolului

Ramura Market Measurement separă strict **regula** de **rezultatul aplicării regulii**:

```text
STRAT NORMATIV
AVL-MKT-001
Market Scope & Eligibility Protocol

        ↓ aplicat asupra unei piețe concrete

STRAT DE INSTANȚĂ / DOVADĂ
Market Reference Set
```

**[AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate)** (Draft pentru revizuire, v0.10.0) definește regulile după care o piață este delimitată și verificată înainte de orice măsurare. Criteriile, dovezile acceptate, statusurile și procedura completă se află numai în AVL-MKT-001.

**Market Reference Set** este rezultatul aplicării protocolului asupra unei piețe concrete, la un moment determinat. Market Reference Set nu este document normativ și nu primește identificator `AVL-MKT-*`. El aparține unei instanțe de măsurare.

Market Reference Set se constituie din intrările `ELIGIBLE` ale registrului Market Verification la Market Cutoff Date. Este constituit independent, de AI Visibility Lab, în scopul cercetării laboratorului; nu este validat de nicio autoritate publică, organism profesional sau autoritate de reglementare și nu are statut oficial. Nu este lista exhaustivă a furnizorilor existenți și nici o statistică oficială de piață. Regulile de constituire, de publicare și rezervele lui sunt definite în AVL-MKT-001, §12 și §21.

### 14.2. Fluxul Market Measurement

```text
AVL-MKT-001
Market Scope & Eligibility Protocol
        ↓
Market Discovery
        ↓
Market Verification
        ↓
Market Reference Set
        ↓
Market Query Universe
        ↓
AVL-MKT-002
Market Query Panel
        ↓
AI Execution
        ↓
Measurement
        ↓
Quarterly Market Report
```

Numerotarea AVL-MKT-001 și AVL-MKT-002 exprimă ordinea de înregistrare în familie. Ea nu înseamnă că AVL-MKT-002 este aplicat imediat după AVL-MKT-001: între cele două se află aplicarea protocolului și constituirea Market Reference Set.

| Etapă | Strat | Rol | Identificator `AVL-MKT-*` |
| --- | --- | --- | --- |
| AVL-MKT-001 — Market Scope & Eligibility Protocol | normativ | Definește, înaintea măsurării, piața, criteriile, regulile, dovezile acceptate și eligibilitatea. | da |
| Market Discovery | instanță | Identifică larg candidații potențiali și produce registrul public Market Discovery, cu toate entitățile `UNVERIFIED`. | nu |
| Market Verification | instanță | Aplică regulile AVL-MKT-001 fiecărui candidat și produce registrul Market Verification, cu statusul fiecărei entități. | nu |
| Market Reference Set | instanță (referință) | Intrările `ELIGIBLE` ale registrului Market Verification la data de cutoff, înghețate; stratul independent de referință pentru măsurarea ulterioară, constituit în scopul cercetării laboratorului și nevalidat de o autoritate relevantă. | nu |
| Market Query Universe | instanță | Spațiul interogărilor plauzibile prin care utilizatorii sau sistemele pot ajunge la piața analizată. | nu |
| AVL-MKT-002 — Market Query Panel | normativ | Definește cum este selectat din Query Universe un subset controlat și reproductibil, folosit pentru măsurare longitudinală. | da |
| AI Execution | instanță | Aplică panelul sistemelor AI analizate. | nu |
| Measurement | instanță | Compară reprezentarea produsă de sistemele AI cu Market Reference Set și cu celelalte variabile definite metodologic. | nu |
| Quarterly Market Report | instanță (publicare) | Publică rezultatul unei instanțe concrete de măsurare. | nu |

Etapele marcate ca instanță nu devin documente AVL. Ele sunt produse ale aplicării metodologiei și sunt identificate prin instanța de măsurare căreia îi aparțin (secțiunea 14.5).

Market Discovery și Market Verification produc registre publice distincte. Registrul Market Discovery cuprinde toți candidații identificați, fiecare cu statutul `UNVERIFIED` și cu proveniența observației; includerea în el nu confirmă existența, activitatea, eligibilitatea sau calitatea unei entități. Registrul Market Verification cuprinde toți candidații evaluați, fiecare cu unul dintre statusurile de eligibilitate; registrul furnizorilor eligibili este partea lui care cuprinde exclusiv intrările `ELIGIBLE`. Publicarea eligibilității nu constituie certificare, recomandare comercială sau clasament. Regulile de publicare sunt definite în AVL-MKT-001, §21.

### 14.3. Ordinea temporală și protecția împotriva selection bias

Criteriile de eligibilitate trebuie fixate înainte ca populația pieței să fie cunoscută. Altfel, criteriile pot fi ajustate, conștient sau nu, pentru a include sau exclude furnizori deja observați. Ordinea planificată este:

```text
AVL-MKT-001 Draft public (v0.9.0)
        ↓
pilot intern
        ↓
corectarea protocolului
        ↓
AVL-MKT-001 v1.0.0 / Activ
        ↓
Market Discovery oficial
        ↓
Market Verification oficială
        ↓
înghețarea Market Reference Set
        ↓
Market Query Panel
        ↓
măsurarea AI
```

Până la activarea AVL-MKT-001 v1.0.0, orice rulare Market Discovery se declară pilot și nu este Discovery oficial. La 16 octombrie 2026 au fost rulați trei piloți Market Discovery (`MKT-RO-AIV-2026Q4-PILOT`, `-PILOT-2` și `-PILOT-3`), care au acoperit o dată toate cele 12 întrebări ale setului DISCOVERY; pilotul intern de Verification nu a fost executat. Piloții testează descoperirea și nu modifică ordinea de mai sus.

Procedura pilotului intern, regulile de versionare a criteriilor și controalele operaționale împotriva selection bias sunt definite în [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate).

Scopul acestei ordini este ca fiecare raport de piață să poată afirma verificabil că **criteriile de eligibilitate au fost definite și publicate înainte de constituirea Market Reference Set și înainte de măsurarea reprezentării furnizorilor în sistemele AI**.

### 14.4. Stratul de referință și stratul de reprezentare AI

Market Measurement compară două straturi care nu trebuie confundate:

```text
STRAT DE REFERINȚĂ
Market Reference Set
= furnizori identificați și verificați independent,
  conform AVL-MKT-001

        versus

STRAT DE REPREZENTARE AI
Răspunsurile sistemelor AI
= furnizori identificați / menționați / citați / recomandați
  de sistemele măsurate
```

Statusurile de eligibilitate și combinațiile lor cu apariția în răspunsurile AI sunt definite în [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate).

Apariția într-un răspuns AI nu demonstrează eligibilitatea. Absența din răspunsurile AI nu invalidează eligibilitatea. Eligibilitatea este stabilită exclusiv prin aplicarea AVL-MKT-001; răspunsurile AI sunt obiectul măsurării, nu sursa referinței.

Această separare face măsurabilă diferența dintre **piața documentată** și **piața reprezentată de AI**.

### 14.5. Instanțele Market Measurement (`MKT-*`)

Documentele normative și instanțele concrete folosesc identificatori diferiți:

- `AVL-MKT-NNN` — protocol normativ al familiei Market Measurement;
- `MKT-{țară}-{domeniu}-{an}Q{trimestru}` — instanță concretă de măsurare a unei piețe (de exemplu, `MKT-RO-AIV-2026Q4`).

Formatul instanțelor și regulile lui sunt definite în AVL-001, §17. Aceeași piață poate fi măsurată longitudinal (`MKT-RO-AIV-2026Q4`, `MKT-RO-AIV-2027Q1`, `MKT-RO-AIV-2027Q2` …) fără modificarea protocoalelor normative. Exemplul este ilustrativ; nicio instanță `MKT-*` nu a fost creată la data acestei versiuni. În interiorul unei instanțe, rulările Market Discovery se identifică prin sufixele `FULL` (rularea trimestrială completă) și `M{lună}` (rulările lunare), iar rulările pilot prin `PILOT` și `PILOT-{n}`; un pilot nu este o rulare a instanței (AVL-MKT-001, §3.2). Convenția T0 / F1 … Fn nu se folosește în Market Discovery și rămâne convenția punctelor de măsurare din AVL-200 §7. Schema rulărilor de măsurare AI aparține AVL-MKT-002.

### Principiul ramurii

```text
REGULA
AVL-MKT-001
        ↓
REFERINȚA DESPRE PIAȚĂ
Market Reference Set
        ↓
REPREZENTAREA AI
Market Query Panel + răspunsurile AI
```

Mai întâi este definită regula. Apoi este construită independent referința despre piață. Abia după aceea este măsurat modul în care sistemele AI reprezintă acea piață.

---

# Documentele metodologiei

Documentele de nivel C nu sunt ordonate semantic prin numărul lor. Pentru orientare, această pagină le afișează în ordinea recomandată de lectură.

## AVL-202 — Cadrul metodologic AI Visibility Lab

**Methodological Framework**

Documentul-cadru. Definește ciclul metodologic, clasificarea epistemică, relația dintre baseline, intervenție, remăsurare și interpretare și stabilește cum se leagă între ele standardele și protocoalele metodologice.

**Rol:** framework conceptual și normativ.

**Depinde de:** AVL-001 — AI Visibility Lab Foundation.

**Leagă și contextualizează:** AVL-200, AVL-201, AVL-203, AVL-204, familia Market Measurement (`AVL-MKT-*`) și viitoarele documente metodologice.

## AVL-200 — Standard dovezi, măsurare și trasabilitate

**Evidence, Measurement & Traceability Standard**

Standardul dedicat modului în care dovezile sunt păstrate, indexate, validate, versionate și legate de observațiile și măsurătorile pe care le susțin.

În raport cu AVL-202, rolul lui este să detalieze stratul de **evidence integrity și traceability**, fără ca AVL-202 să dubleze toate cerințele sale operaționale.

## AVL-201 — Tabula Rasa F0

**Baseline Measurement Specification**

Specificația normativă pentru documentarea stării inițiale a unei entități înainte de intervenții.

Acoperă:

- condițiile de conformitate;
- intrările obligatorii;
- query set-ul;
- accesul crawlerelor;
- structured data;
- răspunsurile AI;
- entity understanding;
- sursele;
- prezența distribuită;
- taxonomia;
- standardul de dovezi;
- scorarea;
- controlul calității;
- comparabilitatea în timp.

**→ [Citește Tabula Rasa F0](/lab/metodologie/tabula-rasa-f0)**

## AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility

**Core Technical Web Measurement Protocol**

**Versiune 0.6.0 · Draft pentru revizuire**

Setul minim și repetabil de verificări tehnice care documentează ce livrează un server în condiții declarate: accesibilitatea HTTP și redirecturile, variantele de host și protocol, robots.txt, descoperirea sitemap-ului, semnalele raw HTML, conținutul important prezent în HTML-ul brut, paritatea răspunsurilor pentru User-Agent-uri declarate și integritatea dovezilor. Definește și compoziția planului de măsurare și trecerea de la observații la diagnostic și recomandări, după grila AVL-204. Nu confundă accesibilitatea tehnică cu indexarea, citarea sau recomandarea.

**Rol:** protocol al ramurii Core Methodology; componentă reutilizabilă la baseline și remăsurări, fără a înlocui AVL-201.

**Depinde de:** AVL-001, AVL-202, AVL-200 și AVL-201 (fișa entității).

**→ [Citește AVL-203](/lab/metodologie/protocol-verificare-tehnica)**

## AVL-204 — Grila de interpretare a verificării tehnice

**Technical Diagnostic Interpretation Grid**

**Versiune 0.3.0 · Draft pentru revizuire**

Regulile publice prin care observațiile AVL-203 devin diagnostic și recomandări: stările diagnosticului, zonele verificate, regulile de diagnostic, prioritizarea recomandărilor, afirmațiile excluse și aplicarea identică pentru orice entitate evaluată. Regulile se fixează înaintea rulării, ca diagnosticul să poată fi verificat și să nu poată fi ajustat după rezultat.

**Rol:** grilă de interpretare a ramurii Core Methodology (Measurement Rule Version în sensul AVL-200).

**Depinde de:** AVL-001, AVL-202, AVL-200, AVL-203 și AVL-201 (fișa entității).

**→ [Citește AVL-204](/lab/metodologie/grila-interpretare-verificare-tehnica)**

## Familia Market Measurement (`AVL-MKT-*`)

**Market Measurement**

Familia normativă pentru definirea piețelor, construirea instrumentelor de măsurare și compararea longitudinală a reprezentării piețelor în sistemele AI (secțiunea 14).

### AVL-MKT-001 — Market Scope & Eligibility Protocol

**Versiune 0.10.0 · Draft pentru revizuire**

Definește obiectul pieței, criteriile de eligibilitate, dovezile necesare, Market Discovery, Market Verification, publicarea registrelor și regulile de constituire a Market Reference Set.

**→ [Citește AVL-MKT-001](/lab/metodologie/protocol-delimitare-piata-eligibilitate)**

### AVL-MKT-002 — Market Query Panel

**Planificat**

Va defini selecția reproductibilă a panelului de interogări folosit pentru măsurarea longitudinală. Documentul nu este încă publicat.

**Rol:** protocoale normative de familie, în interiorul Nivelului C.

**Depind de:** AVL-001 și AVL-202. Dependențele normative suplimentare vor fi declarate de fiecare document la publicare.

## Metodologia evoluează odată cu cercetarea

AI Visibility Lab tratează metodologia ca pe un sistem versionat, nu ca pe un set definitiv de reguli.

Documente noi pot fi adăugate atunci când cercetarea produce nevoia unor specificații distincte pentru alte faze, tipuri de măsurare, scoruri, evidence processing sau protocoale.

Orice document metodologic nou trebuie să rămână compatibil cu principiile Foundation și să declare explicit dependențele, versiunea, statutul și limitările sale. Numărul alocat rămâne un identificator permanent; ordinea de lectură și precedența normativă sunt declarate separat.

Documentele metodologice existente nu sunt versionate în cascadă doar pentru că apare o familie metodologică nouă. Documentele noi își declară propriile dependențe față de documentele existente.

O metodologie nouă nu rescrie retrospectiv măsurătorile istorice. Atunci când protocolul se maturizează, diferența dintre versiuni este documentată.

---

## Vezi metodologia aplicată

**[Studii de caz →](/lab/studii-de-caz)**  
Aplicarea metodologiei asupra unor entități reale, cu baseline, intervenții, dovezi și evoluție în timp.

**[Experimente publice →](/lab/experimente-publice)**  
Teste cu ipoteze formulate înainte și rezultate publicate indiferent de rezultat.

**[Cum se măsoară AI Visibility →](/lab/cercetare/cum-se-masoara-ai-visibility)**  
Introducerea conceptuală în query set-uri, taxonomie, rulări și măsurarea vizibilității AI.

**[Glosar GEO/AEO și AI Visibility →](/lab/cercetare/glosar-geo-aeo)**  
Vocabularul operațional folosit în documentele și experimentele laboratorului.

**[AI Visibility Lab Foundation →](/lab/introducere)**  
Regulile epistemice și editoriale prin care trebuie citite toate documentele laboratorului.

---

## Ce nu demonstrează această metodologie

AI Visibility Lab măsoară ceea ce poate fi observat din exterior.

Metodologia nu oferă acces la algoritmii interni ai furnizorilor și nu demonstrează, prin simpla succesiune temporală a două evenimente, că:

- o intervenție individuală a determinat un răspuns ulterior;
- un sistem a „învățat” o informație dintr-o anumită sursă;
- un anumit element de markup a determinat citarea;
- un rezultat observat pentru o entitate se generalizează tuturor entităților;
- un rezultat observat într-o fereastră va fi identic ulterior.

Aceste limite nu anulează măsurarea. Ele delimitează ce poate fi susținut onest pe baza ei.

---

## Independență și conflict de interese

Atunci când autorul măsoară propria persoană, propriul site, o entitate asupra căreia are control editorial sau o metodologie pe care a construit-o, situația trebuie declarată în studiul sau experimentul respectiv.

Controlul asupra entității poate oferi acces la sursele primare, istoricul modificărilor și identitatea reală care trebuie rezolvată. Acest avantaj metodologic nu elimină potențialul conflict de interese.

Transparența nu elimină conflictul. Îl face vizibil și auditabil.

---

## Citare recomandată

Matescu, Alex. „Cadrul metodologic AI Visibility Lab”. *AI Visibility Lab Documentation*, AVL-202, versiunea 1.7.1, 2026. https://delamatescu.ro/lab/metodologie

---

## Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
| --- | --- | --- | --- |
| 1.0.0 | 14 septembrie 2026 | Activ | Prima versiune publică a AVL-202. Formalizează cadrul metodologic general, stabilește relația conceptuală dintre AVL-001, AVL-200 și AVL-201, explică permanența identificatorilor AVL și definește ciclul metodologic, separarea observației de interpretare, intervenția, remăsurarea și comparația longitudinală. |
| 1.1.0 | 30 septembrie 2026 | Activ | MINOR: introduce Market Measurement ca ramură explicită a Nivelului C — Methodology, formalizată prin familia normativă `AVL-MKT-*` (familie funcțională, nu nivel normativ separat). Adaugă secțiunea 14: separarea dintre protocolul normativ AVL-MKT-001 și Market Reference Set, fluxul Market Measurement, ordinea temporală pilot → protocol activ → Market Reference Set → măsurare, separarea dintre stratul de referință și stratul de reprezentare AI și identificarea instanțelor `MKT-*`. Actualizează arhitectura, precedența normativă, ordinea de lectură și lista documentelor. AVL-MKT-001 și AVL-MKT-002 sunt menționate ca documente planificate, nepublicate. AVL-200 și AVL-201 nu sunt modificate. |
| 1.2.0 | 2 octombrie 2026 | Activ | MINOR: AVL-MKT-001 — Market Scope & Eligibility Protocol este publicat ca draft pentru revizuire (v0.9.0) și devine singura sursă a regulilor operaționale de delimitare a pieței și de eligibilitate. Din secțiunea 14 sunt eliminate detaliile operaționale preluate de AVL-MKT-001 (procedura pilotului intern, regula de versionare a criteriilor, tabelul statusurilor), înlocuite cu trimiteri. Se păstrează definiția ramurii, poziția în Nivelul C, precedența normativă, separarea protocol / instanță, fluxul și separarea dintre stratul de referință și stratul de reprezentare AI. Arhitectura, ordinea de lectură și lista documentelor sunt actualizate; AVL-MKT-002 rămâne planificat. |
| 1.3.0 | 2 octombrie 2026 | Activ | MINOR: AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility este publicat ca draft pentru revizuire (v0.3.0) și inclus în corpus: identificatori, ordinea de înregistrare, ordinea conceptuală de lectură, arborele arhitecturii (ramura Core Methodology), ordinea din hub și lista documentelor metodologiei. AVL-203 nu este activ; statutul lui se actualizează aici la activare. Nicio altă schimbare de principiu. |
| 1.4.0 | 13 octombrie 2026 | Activ | MINOR: aliniere la convenția din AVL-200 §7 (v1.1.0). Secțiunea 3 se numește „Etapa de baseline”; nota de nomenclatură descrie etapele denumite (baseline, sursa canonică, prezența distribuită, re-măsurare) și punctele de măsurare T0 / F1 … Fn și trimite la AVL-200 §7.4 pentru corespondența istorică; secțiunile 8 și 9 numesc etapele de intervenție și punctele de re-măsurare. AVL-201 este citat cu titlul său real, „Tabula Rasa F0” (titlu istoric), în locul formei „Tabula Rasa T0” folosite anterior în acest document. Fișierul sursă .md, care avea la aceeași versiune 1.3.0 o notă de nomenclatură diferită de pagina publicată, a fost aliniat. Trimiterile la versiunile curente ale drafturilor sunt actualizate (BL-001): AVL-MKT-001 la v0.9.2 și AVL-203 la v0.3.1, în tabelul de identitate, diagrama arhitecturii, §14 și cardurile documentelor; secvența planificată din §14 (v0.9.0 → pilot → v1.0.0) rămâne neschimbată, pentru că descrie planul de la publicarea draftului. |
| 1.5.0 | 16 octombrie 2026 | Activ | MINOR: aliniere la AVL-MKT-001 v0.10.0. §14.1 precizează că Market Reference Set se constituie din intrările `ELIGIBLE` ale registrului Market Verification la Market Cutoff Date, că este constituit independent, în scopul cercetării laboratorului, și că nu este validat de o autoritate relevantă. §14.2 descrie registrele publice produse de Market Discovery și Market Verification și trimite la AVL-MKT-001 §21 pentru regulile de publicare. §14.3 consemnează că, până la AVL-MKT-001 v1.0.0, rulările Market Discovery sunt piloți și că la 16 octombrie 2026 au fost rulați trei. §14.5 înlocuiește trimiterea depășită la relația dintre trimestru și T0 / F1 … Fn cu identificarea rulărilor Market Discovery prin `FULL`, `M{lună}` și `PILOT[-n]`, introdusă în AVL-MKT-001 v0.9.1 (12 octombrie 2026). Trimiterile la versiunea curentă a AVL-MKT-001 sunt actualizate la v0.10.0. Secvența planificată din §14.3 rămâne neschimbată. |
| 1.6.0 | 23 octombrie 2026 | Activ | MINOR: AVL-204 — Grila de interpretare a verificării tehnice este inclusă în corpus ca draft pentru revizuire (v0.1.0): identificatori, ordinea de înregistrare, ordinea conceptuală de lectură (după AVL-203), arborele arhitecturii (ramura Core Methodology), ordinea din hub, documentele normative asociate și lista documentelor metodologiei. Trimiterile la AVL-203 sunt actualizate la v0.4.0, iar descrierea lui include conținutul din HTML-ul brut, compoziția planului de măsurare și trecerea la diagnostic. AVL-203 și AVL-204 nu sunt active; statutul lor se actualizează aici la activare. Nicio altă schimbare de principiu. |
| 1.7.0 | 25 octombrie 2026 | Activ | MINOR: versiunile documentelor din ramura Core Methodology actualizate: AVL-203 trece la v0.5.0 și AVL-204 la v0.2.0, ambele draft pentru revizuire; dependența lor de AVL-201 (fișa entității, care conține de la AVL-201 1.5.0 câmpul „Politica crawlere”) este declarată în descrierea documentelor. |
| 1.7.1 | 26 octombrie 2026 | Activ | PATCH: versiunile documentelor din ramura Core Methodology actualizate după deciziile din 26 octombrie 2026: AVL-203 trece la v0.6.0 și AVL-204 la v0.3.0, ambele draft pentru revizuire. Fără alte modificări. |

---

### Nota metodologică

AI Visibility Lab măsoară ceea ce poate fi observat din exterior. Metodologia nu oferă acces la mecanisme interne nepublice și nu transformă corelațiile sau schimbările temporale în dovezi automate de cauzalitate.

**Iată ce era înainte. Iată ce este acum. Iată diferența.**
