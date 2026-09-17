---
title: "Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search"
description: "Studiu longitudinal Tabula Rasa despre modul în care ChatGPT, Claude, Gemini și Perplexity rezolvă identitatea Alex Matescu între T0/F0 și F1, cu dovezi vizuale, coliziuni de entitate, Anchor Dependence și limite metodologice."
author: "Alex Matescu"
organization: "AI Visibility Lab"
date_published: "2026-09-04T09:06:00+03:00"
date_modified: "2026-09-17"
last_reviewed: "2026-09-17"
category: "Entities & Citations"
article_type: "Studiu de caz"
language: "ro-RO"
canonical: "https://delamatescu.ro/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz"
keywords:
  - "AI Visibility"
  - "Tabula Rasa"
  - "entity resolution"
  - "AI Search"
  - "identitate digitală"
  - "dezambiguizare entități"
  - "Anchor Dependence"
  - "ChatGPT"
  - "Claude"
  - "Gemini"
  - "Perplexity"
  - "Google"
  - "Bing"
  - "Google AI Overviews"
  - "Google AI Mode"
  - "Alex Matescu"
---

# Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search

**Studiu de caz #001 — Alex Matescu**  
**Experiment:** Tabula Rasa  
**Status:** în desfășurare  
**Faze analizate:** T0/F0 → F1  
**Obiect de studiu:** rezoluția unei entități personale în motoare de căutare și sisteme AI  
**Ultima actualizare:** 17 septembrie 2026

> **Evidence-backed case study**  
> Rezultatele experimentale prezentate în această pagină sunt susținute, acolo unde evidence set-ul permite, prin capturi originale din ferestrele Tabula Rasa. Capturile au fost decupate doar pentru lizibilitate; query-ul și răspunsul relevant au fost păstrate.

## Rezumat

Ce se întâmplă atunci când cauți numele unei persoane pe internet, dar motoarele de căutare și sistemele AI nu au suficiente semnale pentru a stabili cu certitudine despre cine este vorba?

În cazul experimentului Tabula Rasa, răspunsul inițial a fost că internetul nu avea o reprezentare suficient de stabilă a entității **Alex Matescu**.

În iulie 2026 am început să documentez longitudinal felul în care aceeași persoană este identificată, diferențiată de persoane cu nume asemănătoare, recuperată din surse și descrisă de sisteme precum ChatGPT, Claude, Gemini și Perplexity, împreună cu motoare de căutare clasice și experiențe AI Search.

Subiectul experimentului sunt chiar eu.

Alegerea îmi permite să cunosc identitatea reală care trebuie rezolvată, să controlez o parte dintre sursele primare și să urmăresc în timp cum se modifică ecosistemul informațional din jurul unei singure entități.

Baseline-ul a arătat o problemă care nu putea fi redusă la simpla „lipsă de vizibilitate”.

Problema era **entity resolution**.

Numele putea conduce către alte persoane, variantele `Matescu` și `Mateescu` concurau între ele, iar diferite sisteme puteau construi reprezentări complet diferite pornind de la aceeași întrebare.

Prima remăsurare arată deja că întrebarea relevantă nu este doar:

**„Apare Alex Matescu în AI?”**

ci și:

**„De cât context are nevoie sistemul pentru a înțelege despre cine vorbim?”**

---

## 1. De la vizibilitate la identitate

Un motor poate găsi un nume fără să înțeleagă corect persoana din spatele lui, poate găsi mai multe persoane, poate favoriza una dintre ele, poate combina informații aparținând unor persoane diferite, poate evita complet răspunsul, sau poate identifica persoana corectă numai atunci când primește un indiciu suplimentar precum orașul, compania, profesia sau domeniul personal.

Aceste situații nu sunt echivalente, iar din acest motiv, în Tabula Rasa nu mă interesează doar dacă șirul de caractere **„Alex Matescu”** apare într-un rezultat, ci mă interesează dacă sistemul rezolvă entitatea corectă. În cazul experimentului, entitatea urmărită poate fi aproximată printr-un set de relații:

**Alex Matescu → Sibiu → engineering → AUMOVIO → delamatescu.ro**

Aceste relații pot funcționa și ca **ancore de dezambiguizare**.

Un sistem care recunoaște persoana doar după `Alex Matescu AUMOVIO` se află într-o situație diferită de unul care ajunge la aceeași persoană după simplul `Alex Matescu`.

---

## 2. Ipoteza Tabula Rasa

Întrebarea experimentală este:

**Poate o identitate digitală slab definită să devină progresiv mai ușor de identificat de Search și AI Search atunci când ecosistemul informațional din jurul ei devine mai coerent?**

Nu măsor doar prezența, ci urmăresc dacă se modifică:

- rezoluția entității,
- dependența de ancore,
- coliziunile de nume,
- sursele recuperate,
- consistența dintre sisteme,
- stabilitatea dintre rulări.

O entitate maturizată ar trebui, în ipoteza pe care o testez, să poată fi identificată cu tot mai puțin context, dar aceasta este însă o ipoteză experimentală, nu o concluzie stabilită înainte de măsurare.

---

## 3. Query Set-ul

Setul inițial conține 14 interogări care testează patru niveluri diferite ale identității.

### Identitate

1. Cine este Alex Matescu?  
2. Ce știi despre Alex Matescu?  
3. Cu ce se ocupă Alex Matescu?

### Locație

4. Alex Matescu Sibiu  
5. Cine este Alex Matescu din Sibiu?

### Dezambiguizare

6. Alex Matescu  
7. Alexandru Matescu  
8. Alex Mateescu  
9. Alex Matescu vs Alexandru Mateescu avocat

### Ancore

10. Alex Matescu AUMOVIO  
11. Alex Matescu inginer / engineer  
12. delamatescu.ro  
13. Cine este în spatele delamatescu.ro?  
14. Alex Matescu LinkedIn

Diferența dintre aceste query-uri este esențială. Dacă un sistem identifică persoana numai după domeniul personal, aceasta demonstrează că există o cale de retrieval, însă dacă o identifică fără alt context, avem un semnal mai puternic de entity resolution.

---

## 4. Taxonomia rezultatelor

Pentru fiecare combinație dintre query și sistem am folosit o taxonomie care evită reducerea rezultatelor la un simplu da/nu.

**HIT** înseamnă că sistemul identifică entitatea urmărită.

**HIT PARȚIAL** înseamnă că identificarea există, dar este incompletă, fragilă sau insuficient susținută.

**COLIZIUNE** apare atunci când altă entitate devine dominantă sau când mai multe persoane cu nume apropiate intră în același spațiu de răspuns.

**CONFABULARE** este folosit atunci când informația este atribuită greșit entității urmărite sau când sistemul construiește o identitate incorectă.

**NULL** înseamnă că sistemul nu poate identifica suficient entitatea.

**INSTABIL** este rezervat situațiilor în care aceeași interogare produce rezultate suficient de diferite în interiorul aceleiași ferestre.

**NEDETERMINAT** înseamnă că dovezile disponibile nu permit o clasificare suficient de sigură.

---

# 5. T0/F0 — punctul de pornire

T0 este baseline-ul real al experimentului, dar nu este și nu trebuie prezentat ca o măsurătoare perfectă. La momentul respectiv, protocolul însuși era încă în formare. Măsurătorile s-au desfășurat pe mai multe zile, iar disciplina de rulare și taxonomia pe care o folosesc acum nu erau încă maturizate.

Nu voi rescrie retrospectiv această fază pentru a o face să pară mai riguroasă decât a fost.

Tocmai asta face T0 valoros: arată situația de la care a pornit experimentul.

Unul dintre fenomenele observate încă din această etapă este **instabilitatea în interiorul aceleiași ferestre de măsurare**.

Pentru query-ul `delamatescu.ro`, prima rulare ChatGPT a fost clasificată `NULL`, în timp ce o rulare ulterioară din aceeași fază a produs un `HIT`.

Captura de mai jos este dovada celei de-a doua stări.

![F0 ChatGPT delamatescu.ro](./images/fig_f0_chatgpt_delamatescu_r2.jpg)

*Fig. 1 — ChatGPT, F0, rulare ulterioară pentru `delamatescu.ro`. Sistemul identifică domeniul drept site-ul personal al lui Alex Matescu. Verdictul acestei rulări: HIT. Prima rulare, clasificată NULL în matricea experimentală, nu este reprezentată aici deoarece screenshot-ul ei individual nu a putut fi izolat cu suficientă siguranță din setul disponibil pentru această versiune.*

Diferența este metodologic importantă: un screenshot individual poate demonstra că un rezultat **a existat**, dar nu poate demonstra singur că acel rezultat este **stabil**. De aceea, „AI-ul mă știe, uite captura” este o concluzie mult mai puternică decât permite de fapt o singură observație.

### Pachetul de dovezi T0, publicat ulterior

Acest studiu a fost publicat inițial pe 4 septembrie 2026, pe baza observațiilor descrise mai sus. La acel moment, arhiva brută de capturi pentru T0 exista, dar nu era încă structurată într-un pachet de dovezi versionat, verificabil independent de mine.

Pe 13 septembrie 2026 am formalizat și publicat acest pachet: 152 de capturi/dovezi din T0, acoperind ChatGPT, Claude, Gemini, Perplexity, Google Search, Google AI Mode, Bing și Microsoft Copilot, însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca [GitHub Release — Alex Matescu T0 Evidence Archive v1.0](https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0) (arhivă v1.0 / metadate v1.0).

Între cele două momente nu s-a schimbat doar starea entității observate, ci și rigoarea procesului prin care documentez dovezile. La publicarea inițială a acestui studiu nu exista încă un proces determinist de inventariere, clasificare, checksum și verificare a arhivelor brute — acest pachet T0 este primul aplicat retroactiv peste dovezile deja folosite pentru secțiunea de mai sus. Formalizarea nu schimbă verdictele deja descrise pentru T0 mai sus; schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Contaminarea de sesiune și anomaliile de arhivare identificate în acest set sunt documentate explicit în pachet, nu ascunse — consecvent cu motivul pentru care public și erorile (secțiunea 21).

Aceeași regulă se va aplica oricărei formalizări similare pentru fazele următoare: momentul în care un pachet de dovezi este publicat nu coincide neapărat cu momentul în care fereastra de măsurare a avut loc efectiv, iar acest decalaj va fi mereu documentat explicit, nu tăcut.

---

# 6. F1 — prima fereastră în care diferențele dintre sisteme devin foarte clare

Pentru F1 am putut adjudeca integral setul de 14 query-uri în patru sisteme AI:

**ChatGPT, Claude, Gemini și Perplexity.**

Rezultatele lor nu descriu aceeași realitate.

### Pachetul de dovezi F1, publicat ulterior

Rezultatele F1 descrise în această secțiune și în secțiunile 7–15 au fost capturate în perioada 4–6 august 2026. Ca și în cazul T0, arhiva brută a existat înainte de a fi structurată într-un pachet de dovezi versionat, verificabil independent de mine.

Pe 17 septembrie 2026 am publicat acest pachet: 492 de capturi/dovezi, acoperind cele patru sisteme adjudecate integral în matricea din secțiunea 14 (ChatGPT, Claude, Gemini, Perplexity), precum și Google Search, Google AI Mode, Bing și Microsoft Copilot — sistemele NEADJUDICAT din secțiunea 15 — însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca [GitHub Release — Alex Matescu T0 Evidence Archive v2.0](https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0) (arhivă v2.0 / metadate v2.0).

La fel ca la T0, formalizarea nu schimbă niciun verdict deja descris pentru F1 — schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Query Drift-ul descris în secțiunea 12 este documentat direct în acest pachet: reformularea „PRO TV” în locul „avocat” apare consecvent în ChatGPT, Claude și Perplexity. Pachetul mai documentează explicit o anomalie de arhivare — un set de capturi din Google Search plasat inițial în folderul de interogare greșit, corectată doar în documentația indexului, nu prin modificarea fișierelor brute — și o sesiune Perplexity în care contul autentificat purta chiar numele entității urmărite, un risc rezidual de personalizare marcat explicit ca atare în index, nu ascuns.

---

# 7. ChatGPT — rezoluție puternică inclusiv fără ancoră

ChatGPT prezintă cel mai stabil profil dintre sistemele analizate în F1.

Pentru query-ul generic **„Cine este Alex Matescu?”**, sistemul ajunge direct la entitatea urmărită și o leagă de Sibiu, engineering, activitatea profesională și delamatescu.ro. Rezultatul se schimbă atunci când numele este modificat în:

**„Alex Mateescu”**, cu dublu „e”.

În acest caz, sistemul recunoaște că există persoane diferite și începe să trateze explicit coliziunea.

![ChatGPT HIT versus coliziune](./images/fig_chatgpt_hit_vs_collision.jpg)

*Fig. 2 — ChatGPT, F1. În stânga, query-ul generic `Cine este Alex Matescu?` rezolvă direct entitatea urmărită. În dreapta, forma `Alex Mateescu` activează o coliziune de nume și sistemul separă explicit persoanele. Cele două capturi ilustrează diferența dintre entity resolution și name collision.*

Profilul agregat ChatGPT în F1 este:

**13 HIT / 1 COLIZIUNE.**

Acest lucru nu înseamnă că ChatGPT „cunoaște” entitatea într-un sens uman și nici că informația provine direct dintr-o anumită pagină. Înseamnă că, în această fereastră și pe acest Query Set, mecanismul său de retrieval și sinteză a ajuns foarte frecvent la persoana urmărită.

---

# 8. Claude — informația există, dar query-ul trebuie să o activeze

Claude arată un comportament aproape opus. La query-ul generic:

**„Cine este Alex Matescu?”**

sistemul spune că nu găsește o persoană publică suficient de clar identificabilă cu acest nume.

Când primește însă ancora:

**„Alex Matescu AUMOVIO”**

rezultatul se schimbă.

![Claude generic versus anchor](./images/fig_claude_generic_vs_anchor.jpg)

*Fig. 3 — Claude, F1. În stânga, query fără ancoră: NULL. În dreapta, adăugarea entității AUMOVIO permite recuperarea lui Alex Matescu și a rolului profesional asociat. Aceasta este una dintre cele mai clare dovezi din experiment pentru Anchor Dependence.*

Acesta este un rezultat important pentru că arată diferența dintre două întrebări:

**Este informația accesibilă sistemului?**

și

**Poate sistemul identifica entitatea fără context suplimentar?**

În cazul Claude, F1 sugerează că răspunsul la prima întrebare este deseori „da”, în timp ce răspunsul la a doua rămâne „nu”.

Pentru primele șase query-uri generale, verdictul este `NULL`.

Când apar ancore precum `AUMOVIO`, `engineer` sau `delamatescu.ro`, entitatea devine recuperabilă.

Acest comportament îl descriu prin conceptul de:

## Anchor Dependence

Cu cât un sistem are nevoie de mai multe informații auxiliare pentru a ajunge la persoana corectă, cu atât rezoluția entității este mai dependentă de context.

---

# 9. Gemini — de la identitate greșită la identificare corectă printr-un singur cuvânt

Gemini oferă cel mai spectaculos exemplu de Anchor Dependence din setul F1.

Query-ul **„Cine este Alex Matescu?”** produce o identitate greșită. Răspunsul îl descrie drept actor, voice actor și creator de conținut, ceea ce nu este o informație incompletă despre subiect, ci este o altă persoană sau o identitate construită greșit.

Verdict:

**CONFABULARE.**

Atunci când query-ul devine **„Alex Matescu AUMOVIO”**, Gemini identifică persoana urmărită și rolul profesional.

![Gemini confabulation versus anchor](./images/fig_gemini_generic_vs_anchor.jpg)

*Fig. 4 — Gemini, F1. În stânga, query-ul generic construiește o identitate greșită și este clasificat CONFABULARE. În dreapta, ancora `AUMOVIO` conduce la entitatea corectă. Diferența este produsă de contextul query-ului, nu de absența totală a informației din sistem.*

Acest rezultat este foarte important. Dacă aș fi testat numai:

`Alex Matescu AUMOVIO`

aș fi putut concluziona:

**„Gemini mă identifică foarte bine.”**

Dacă aș fi testat numai:

`Cine este Alex Matescu?`

aș fi putut concluziona:

**„Gemini nu știe cine sunt.”**

Ambele afirmații ar fi fost adevărate în raport cu captura aleasă, dar niciuna nu ar fi descris suficient fenomenul. Răspunsul mai corect este:

**Gemini poate recupera entitatea, dar rezoluția ei este încă puternic dependentă de query.**

---

# 10. Coliziunea poate deveni mai gravă decât simpla absență

Există o diferență importantă între un sistem care spune **„Nu găsesc suficiente informații.”** și unul care spune cu încredere **„Aceasta este persoana”** despre persoana greșită. În primul caz avem un `NULL`. În al doilea putem avea `COLIZIUNE` sau `CONFABULARE`. Din perspectiva identității digitale, al doilea scenariu este potențial mai problematic.

O absență nu produce neapărat o informație falsă despre subiect, dar o fuziune de entități poate produce una. Gemini oferă și un exemplu foarte clar pentru această problemă în query-ul de dezambiguizare referitor la avocat. Sistemul afirmă că Alex Matescu și Alexandru Mateescu sunt aceeași persoană. Aceasta nu este doar o lipsă de informație ci este o eroare de entity resolution.

---

# 11. Perplexity — textul poate fi corect, iar imaginea greșită

Perplexity prezintă un alt tip de problemă. Textual, sistemul identifică foarte frecvent entitatea urmărită, dar în aceeași interogare poate afișa imagini ale altor persoane.

![Perplexity image entity mismatch](./images/fig_perplexity_image_mismatch.jpg)

*Fig. 5 — Perplexity, F1, `Cine este Alex Matescu?`. Query-ul și rezultatul textual se referă la entitatea urmărită, dar modulul vizual prezintă persoane care nu reprezintă subiectul. Fenomen clasificat aici drept image–entity mismatch.*

Acest lucru ridică o problemă care nu apare dacă evaluăm numai textul. Pentru un utilizator, răspunsul AI este experiența completă, iar dacă textul descrie o persoană, iar imaginile sugerează alta, reprezentarea rezultată este contradictorie. Din acest motiv, vizibilitatea AI nu ar trebui măsurată exclusiv prin:

**mențiune**,  
**citare**,  
sau **corectitudinea textului**.

Trebuie observată și coerența multimodală.

Profilul textual Perplexity în F1 este **12 HIT / 2 COLIZIUNI.**, dar acest scor nu surprinde complet problema imaginilor.

---

# 12. Query Drift — o eroare a experimentului, nu a motorului

În timpul auditului nu am identificat doar erori ale sistemelor AI, ci am identificat și o eroare a propriului protocol.

Query-ul canonic #9 era **`Alex Matescu vs Alexandru Mateescu avocat`**, dar nu toate motoarele au fost testate cu aceeași formulare.

În Gemini apare comparația cu avocatul.

În ChatGPT, Claude și Perplexity apar variante care introduc persoana asociată cu PRO TV.

![Query drift](./images/fig_query_drift_chatgpt.jpg)

*Fig. 6 — Evidence pentru Query Drift. În stânga, Gemini este testat cu varianta `Alex Matescu vs Alexandru Mateescu avocat`. În dreapta, ChatGPT primește `Alex Matescu vs Ale Mateescu PRO TV`. Cele două rezultate nu trebuie tratate drept măsurători perfect comparabile ale aceluiași query.*

Această diferență trebuie păstrată în studiu. Dacă aș modifica retrospectiv query-ul din raport și aș prezenta rezultatele ca și când ar proveni din aceeași întrebare, aș crea o precizie falsă.

Prin urmare, query-ul #9 este marcat:

**QUERY_DRIFT.**

În fazele următoare, formularea va trebui înghețată și reprodusă identic. Aceasta este una dintre lecțiile metodologice importante obținute chiar prin auditarea experimentului.

---

# 13. Primul pattern major: Anchor Dependence

Privite împreună, rezultatele Claude și Gemini arată un fenomen care merită urmărit separat de simpla „vizibilitate”.

Putem avea:

**Alex Matescu → NULL / CONFABULARE**

dar:

**Alex Matescu + AUMOVIO → HIT**

sau:

**Alex Matescu + engineer → HIT**

sau:

**Alex Matescu + delamatescu.ro → HIT**

Informația nu este complet absentă ci devine accesibilă atunci când query-ul oferă sistemului o cale suficient de clară către entitate, ceea ce face această distanță dintre query-ul generic și query-ul ancorat să poată deveni o măsură în sine.

O numesc aici:

## Anchor Dependence

O entitate cu dependență ridicată de ancore poate fi recuperabilă dar încă slab stabilizată semantic, in timp ce o entitate cu dependență redusă ar trebui să poată fi identificată corect chiar și atunci când query-ul conține foarte puține informații.

Tabula Rasa va urmări dacă această dependență scade în fazele următoare.

---

# 14. Rezultatele F1 nu reprezintă un clasament al modelelor

Pentru cele patru sisteme adjudecate integral, matricea F1 arată astfel:

| Sistem | HIT | HIT parțial | COLIZIUNE | CONFABULARE | NULL |
|---|---:|---:|---:|---:|---:|
| ChatGPT | 13 | 0 | 1 | 0 | 0 |
| Perplexity | 12 | 0 | 2 | 0 | 0 |
| Claude | 5 | 1 | 2 | 0 | 6 |
| Gemini | 5 | 0 | 6 | 2 | 1 |

Acest tabel **nu este un benchmark general ChatGPT vs Claude vs Gemini vs Perplexity**.

Acest tabel nu spune că un model este „mai bun” decât altul, ci descrie numai felul în care aceste sisteme au răspuns la:

- **o singură entitate**,
- **un singur Query Set**,
- **într-o singură fereastră experimentală.**

În plus, aceeași prudență trebuie aplicată și în interiorul fiecărui rezultat: un `NULL` Claude poate reflecta tocmai o politică mai prudentă de evitare a atribuirii informației unei persoane atunci când dovezile sunt insuficiente. Un răspuns mai „bogat” nu este automat un răspuns mai bun.

---

# 15. Google, Bing, Google AI Search și Copilot

Evidence set-ul conține și rulări pentru Google Search, Bing, Google AI Search și Copilot, dar aceste sisteme nu sunt incluse încă în agregarea cantitativă prezentată mai sus dintr-un motiv metodologic:

Numărul mare de capturi, paginile succesive și mapping-ul query → screenshot nu permit încă aceeași adjudecare sigură pe care am realizat-o pentru cele patru sisteme incluse.

Prin urmare, în această versiune prefer **NEADJUDICAT** în locul unui rezultat aproximativ. Datele există, dar verdictul nu este încă suficient de sigur.

---

# 16. Ce s-a schimbat între T0 și F1?

Între cele două ferestre, ecosistemul digital al entității s-a schimbat. Website-ul delamatescu.ro a fost dezvoltat, informațiile despre identitate au devenit mai coerente, iar structura publică asociată persoanei a evoluat. Totuși, istoricul complet al intervențiilor dintre T0 și F1 nu este încă reconstruit cu suficiente dovezi cronologice din cod, motiv pentru care studiul nu formulează afirmații de forma:

**„implementarea X a determinat răspunsul Y”.**

Aceasta ar depăși ceea ce datele disponibile demonstrează.

Formularea corectă este:

**între T0 și F1 observăm o schimbare a stării rezultatelor; cauza exactă și contribuția fiecărei intervenții nu pot fi izolate din datele disponibile în această versiune.**

Intervention Log-ul poate fi adăugat ulterior, fără rescrierea rezultatelor deja publicate.

---

# 17. De ce T0 imperfect nu trebuie eliminat

Ar fi tentant să declar că metodologia începe cu versiunea actuală și să ignor prima rundă de măsurători. Ar produce un experiment mai curat, dar ar elimina tocmai punctul de pornire real:

**T0 este slab prin comparație cu protocolul actual** din următoarele motive:

- unele query-uri nu au fost perfect standardizate,
- unele dintre rulări au fost făcute în zile diferite,
- documentarea nu era identică pentru fiecare motor,
- taxonomia a evoluat ulterior.

Totuși, aceste probleme nu fac baseline-ul inutil ci îi schimbă nivelul de încredere.

Într-un studiu longitudinal public, diferența dintre **date imperfecte** și **date inexistente** este importantă.

Tabula Rasa pornește de la primele, de la **date imperfecte**.

---

# 18. Ce NU demonstrează acest studiu

Acest studiu nu demonstrează că modificarea unui JSON-LD, publicarea unui articol, introducerea unui `sameAs` sau orice altă intervenție individuală a determinat un model să producă un anumit răspuns.

Nu demonstrează că modelele „au învățat” direct informația publicată pe delamatescu.ro.

Și nu demonstrează că răspunsurile observate vor fi identice mâine.

Sistemele analizate sunt externe experimentului și pot depinde de:

- indexare,
- retrieval,
- ranking,
- surse terțe,
- actualizări ale produsului,
- mecanisme de sinteză,
- politici de citare,
- cache,
- disponibilitatea web,
- variații între rulări.

Experimentul poate observa rezultatul însă nu controlează întreaga infrastructură care îl produce.

---

# 19. AI Visibility nu este o variabilă binară

Unul dintre cele mai importante lucruri pe care experimentul le arată deja este că **„apare / nu apare”** este o definiție prea slabă a vizibilității AI.

O entitate poate fi:

- identificată fără ancoră;
- identificată numai cu ancoră;
- confundată cu alta;
- identificată corect în text, dar greșit în imagini;
- găsită într-o rulare și absentă în alta;
- recuperată din propria sursă;
- recuperată dintr-o sursă terță;
- prezentă în ecosistem, dar nerecunoscută drept aceeași persoană.

Toate acestea sunt forme diferite de relație dintre sistem și entitate, iar reducerea lor la un procent unic pierde informație.

---

# 20. Un model provizoriu al maturității entității

Datele de până acum sugerează o posibilă succesiune:

**Absent** → sistemul nu recuperează entitatea;

**Recoverable** → entitatea poate fi găsită dacă primește suficiente indicii;

**Anchor-dependent** → identificarea corectă depinde încă de companie, oraș, profesie, domeniu sau alt descriptor;

**Disambiguated** → sistemul începe să separe corect entitatea de persoane cu nume similare;

**Stable** → query-uri generale și rulări repetate produc aceeași entitate cu puține coliziuni.

Aceasta este una dintre ipotezele rezultate din observarea F0 și F1 și trebuie testată în fazele următoare, nefiind încă un model validat.

---

# 21. De ce public și erorile

- Query Drift-ul putea fi eliminat din articol.
- T0 putea fi „curățat”.
- Capturile în care sistemele greșesc puteau fi omise.
- Gemini putea fi prezentat numai prin query-ul AUMOVIO.
- Perplexity putea fi evaluat doar textual, fără imaginile incorecte.

Toate acestea ar fi produs un studiu de caz mai frumos, dar ar fi produs un experiment mai slab.

Tabula Rasa urmărește să documenteze ce se întâmplă, nu urmărește să demonstreze retrospectiv că o strategie a funcționat. Astfel, dacă metodologia se schimbă, atunci schimbarea trebuie documentată, dacă motorul greșește, atunci eroarea rămâne, iar dacă experimentatorul greșește, eroarea trebuie să rămână și ea.

---

# 22. Ce urmărim în următoarele faze

Următoarele ferestre vor testa în primul rând dacă query-urile generale ajung să rezolve mai constant entitatea și dacă dependența de `AUMOVIO`, `Sibiu`, `engineer` sau `delamatescu.ro` scade.

De asemenea, voi urmări dacă:

- coliziunile Matescu/Mateescu se reduc;
- sursele primare apar mai frecvent;
- diferențele dintre sisteme se reduc;
- rezultatele devin mai stabile între rulări;
- reprezentarea vizuală și textuală converg;
- query-urile de dezambiguizare separă corect entitățile concurente.

Query Set-ul va fi înghețat pentru fazele comparabile, iar orice abatere va fi marcată explicit.

---

# 23. Concluzie provizorie

Prima concluzie Tabula Rasa nu este **„Alex Matescu a devenit vizibil în AI.”** Datele descriu ceva mai interesant: 

În F1, aceeași entitate poate fi:

- **aproape complet rezolvată de ChatGPT,**
- **bine recuperată textual de Perplexity,**
- **dependentă de ancore în Claude,**
- **puternic instabilă între query generic și query ancorat în Gemini.**

Prin urmare, identitatea digitală nu pare să treacă simplu de la **necunoscut** la **cunoscut.**. Datele sunt mai compatibile cu un proces de tipul:

**absent → recuperabil → dependent de ancoră → dezambiguizat → stabil.**

Dacă fazele următoare vor confirma aceeași direcție, una dintre contribuțiile utile ale Tabula Rasa poate fi tocmai definirea unui mod mai riguros de a măsura **maturitatea unei entități în AI Search**.

Pentru moment, aceasta rămâne o ipoteză.

**Experimentul continuă.**

---

## Transparență metodologică

Acest studiu folosește identitatea autorului AI Visibility Lab drept subiect experimental. Autorul controlează delamatescu.ro și o parte dintre sursele primare asociate entității, ceea ce trebuie considerat explicit un potențial conflict de interes.

În același timp, această situație permite documentarea directă a surselor, intervențiilor și identității reale care trebuie evaluată.

Capturile originale sunt păstrate în evidence set. Pentru T0, acestea sunt publicate integral, verificabil prin checksum SHA-256, ca pachet de dovezi separat (secțiunea 5) — proces care nu exista în această formă la publicarea inițială a studiului și care a fost aplicat retroactiv, fără a modifica verdictele deja descrise.

T0/F0 conține limitări metodologice și nu a fost reconstruit retrospectiv pentru a respecta standardele dezvoltate ulterior. Maturizarea procesului de documentare a dovezilor, descrisă în secțiunea 5, este distinctă de maturizarea entității observate — prima privește rigoarea mea ca experimentator, a doua privește obiectul studiului.

Query Drift-ul identificat în F1 este păstrat în studiu.

Motoarele insuficient adjudecate nu sunt incluse în agregările cantitative.

Corelația temporală dintre intervențiile digitale și schimbarea răspunsurilor nu este prezentată drept cauzalitate.

**Status: studiu longitudinal în desfășurare.**
