---
document_id: "AVL-205"
title: "Fișa entității"
subtitle: "Entity Sheet"
level: "C — Methodology"
version: "0.1.1"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-11-03"
date_published: "2026-11-04T07:29:00+02:00"
date_modified: "2026-11-04"
last_reviewed: "2026-11-04"
canonical: "https://delamatescu.ro/lab/metodologie/fisa-entitatii"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification (§6.4, §7, §10.1; v1.6.0)"
informative_dependencies:
  - "AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
  - "AVL-204 — Grila de interpretare a verificării tehnice"
  - "AVL-MKT-001 — Market Scope & Eligibility Protocol"
  - "AVL-102 — Cum aleg sistemele AI sursele și citările"
  - "AVL-103 — SEO și GEO"
  - "AVL-104 — Cum se măsoară AI Visibility"
keywords:
  - "fișa entității"
  - "entitate"
  - "formă canonică"
  - "harta coliziunilor"
  - "politica crawlere"
  - "baseline T0"
  - "AVL-205"
---

# AVL-205 — Fișa entității

## Entity Sheet

> **Principiu:** o entitate nu poate fi măsurată corect dacă nu știm exact cine este. Fișa fixează, înaintea măsurării, ce declară entitatea despre ea și din ce surse oficiale, ca rezultatele să poată fi comparate cu o referință, nu cu o impresie.

---

## Controlul documentului

AVL-205 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Descrie fișa entității: documentul prin care entitatea evaluată, împreună cu Alex Matescu, declară informațiile oficiale despre ea înaintea baseline-ului `T0`. Explică fiecare câmp: ce înseamnă, cum se completează și cine îl completează.

Conținutul minim al fișei este stabilit de [AVL-201 §7](/lab/metodologie/tabula-rasa-f0): forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile, politica crawlere. AVL-205 nu schimbă acest minim. Îl detaliază și adaugă câmpurile care fac fișa folosibilă în lucrul cu clientul. Dacă AVL-205 și AVL-201 diferă, prevalează AVL-201. Pentru politica crawlere (§15), prevalează [AVL-204 §3.1](/lab/metodologie/grila-interpretare-verificare-tehnica).

Din versiunea 1.6.0 (4 noiembrie 2026), AVL-201 trimite la AVL-205 din §7, unde definește fișa entității, și din §10.1, unde cere fișa completă. Tot de la această dată, [AVL-202](/lab/metodologie) (1.8.0) include AVL-205 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor.

Versiunea curentă, **0.1.1**, este un **draft pentru revizuire** și nu este activă. Deciziile rămase deschise înainte de activare sunt enumerate în §25.

Identificatorul AVL-205 a fost alocat la 4 noiembrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-205 |
| Nivel | C — Methodology |
| Versiune | 0.1.1 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 3 noiembrie 2026 |
| Ultima verificare | 4 noiembrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/fisa-entitatii |
| Dependențe normative | AVL-001; AVL-202; AVL-200; AVL-201 (§6.4, §7, §10.1; v1.6.0) |
| Dependențe informative | AVL-203; AVL-204; AVL-MKT-001; AVL-102; AVL-103; AVL-104 |

AVL-205 nu introduce cerințe proprii în această versiune. Termenii **TREBUIE**, **NU TREBUIE** și **AR TREBUI** apar numai în cerințele citate din alte documente (`F0-REQ-*`, `AVL200-REQ-*`, `AVL203-REQ-*`, `AVL204-REQ-*`), cu sensul convențiilor RFC 2119 și RFC 8174 declarat acolo.

---

## 1. Ce este fișa entității?

**Fișa entității adună, într-un singur loc, informațiile oficiale despre entitatea evaluată: cine este, cum se numește, ce face, unde activează, ce surse controlează, cu cine poate fi confundată și ce acces vrea pentru crawlere.**

Entitatea poate fi o persoană, o companie, o organizație, o instituție, o marcă, un produs, un serviciu, un proiect, o publicație sau un site (AVL-201 §3). Fișa se completează de client (sau de reprezentantul lui) împreună cu Alex Matescu, înainte de baseline-ul `T0`.

Fișa are trei roluri:

1. **referința măsurării** — în `T0`, informațiile din fișă se verifică în mediile digitale: site, profiluri, directoare, registre, publicații, Search și răspunsurile AI. Fără fișă nu se poate decide dacă un răspuns descrie entitatea corectă (AVL-201 §10.1);
2. **condiția verificării tehnice** — o rulare AVL-203 privește numai entități pentru care există o fișă completată de reprezentant (AVL203-REQ-043, AVL204-REQ-015);
3. **baza intervențiilor de după `T0`** — relațiile dintre profiluri, articole, știri și alte surse, definite sau actualizate în etapa sursei canonice și în etapa prezenței distribuite ([AVL-200 §7.1](/lab/metodologie/standard-dovezi-masurare-trasabilitate)), și informațiile pentru website-ul entității, numai pentru clienții care aleg acest serviciu (§18).

Nimic din fișă nu se publică înainte ca informațiile să fie revizuite și aprobate împreună cu clientul (§19).

---

## 2. Ce nu este fișa entității?

**Fișa descrie entitatea. Nu este setul de interogări, nu este planul de măsurare și nu este raportul.**

- **Nu este setul de interogări.** Clientul spune pentru ce întrebări vrea să apară (§16), dar setul se construiește de laborator înainte de examinarea rezultatelor și se îngheață la `T0` (AVL-201 §10.2).
- **Nu este planul de măsurare.** Țara, limba, motoarele, fereastra de măsurare și planul de dovezi sunt intrări separate ale `T0` (AVL-201 §7). Fișa le poate propune, planul le fixează.
- **Nu este un rezultat.** Coloana „Stare la `T0`” consemnează ce arată sursele publice despre fiecare informație, nu o evaluare a entității.
- **Nu este fișa furnizorului din Market Measurement.** Entitățile identificate într-o instanță de piață se descriu prin fișa furnizorului ([AVL-MKT-001 §10](/lab/metodologie/protocol-delimitare-piata-eligibilitate)), completată de laborator din surse publice, fără participarea entității.
- **Nu se completează pentru concurenții unei entități evaluate.** Aceștia pot apărea în harta coliziunilor (§13) sau în sursele citate, dar nu primesc fișă proprie (AVL-203 §1).

---

## 3. Cum se completează fișa?

**Fiecare câmp are o definiție, un exemplu și un marcaj care spune cine îl completează. Câmpurile cerute de AVL-201 §7 sunt marcate [min].**

### Cine completează

| Marcaj | Cine completează |
| --- | --- |
| **C** | clientul sau reprezentantul entității |
| **Î** | împreună: clientul declară, Alex Matescu formulează și verifică |
| **L** | Alex Matescu (laboratorul), după verificare |

### Conținutul minim

Câmpurile marcate **[min]** acoperă conținutul minim din AVL-201 §7: forma canonică (§7), variantele (§7.1), rolul (§8), locația (§9), domeniul (§8), URL-urile oficiale (§11.1), atributele verificabile (§10) și politica crawlere (§15). **Domeniul** înseamnă domeniul de activitate al serviciilor entității, nu domeniul web; site-ul intră la URL-urile oficiale. AVL-201 folosește din versiunea 1.6.0 formularea „domeniul de activitate”.

Fișa cuprinde și **harta coliziunilor** (§13) și **lista activelor oficiale** (§11). AVL-201 §7 le tratează ca intrări distincte, dar §8 le livrează împreună cu fișa, iar §6.4 cere subiectului să declare activele controlate. În AVL-205 sunt păstrate în același document.

### Ce se notează la fiecare informație

| Coloană | Ce înseamnă |
| --- | --- |
| Valoare | informația declarată de entitate |
| Sursa oficială | pagina, documentul sau registrul care o susține; dacă nu există, „declarația reprezentantului, [data]” |
| Stare la `T0` | ce arată sursele publice la verificare (§4) |
| Evidence ID | identificatorul capturii care documentează starea, dacă există ([AVL-200 §11](/lab/metodologie/standard-dovezi-masurare-trasabilitate)) |

### Ce nu se trece în fișă

Parolele, token-urile, cheile API, cookie-urile și alte secrete de acces nu se trec niciodată în fișă (AVL-200 §18.3, AVL200-REQ-028). Un acces autorizat, de exemplu la Search Console sau la logurile serverului, se notează doar ca existent, cu canalul prin care a fost acordat (§11.4).

---

## 4. Cum se verifică fișa în `T0`?

**Pentru fiecare informație declarată, verificarea `T0` notează ce afirmă sursele publice despre ea, cu sursa și data verificării.**

Stările preiau categoriile din AVL-201 §10.6 („atribute corecte, lipsă, vechi sau false”) și semantica valorilor necunoscute din AVL-200 §6.

| Stare | Sens |
| --- | --- |
| `CORECT` | sursa publică verificată afirmă aceeași informație ca fișa |
| `VECHI` | sursa afirmă o informație care a fost corectă, dar nu mai este actuală |
| `FALS` | sursa afirmă altceva decât fișa sau atribuie informația altei entități |
| `LIPSĂ` | informația a fost căutată în sursele declarate și nu apare |
| `UNKNOWN` | informația a fost căutată, dar nu se poate stabili ce afirmă sursa (de exemplu, pagina nu se încarcă sau sursa e ambiguă) |
| `NEVERIFICAT` | informația nu a fost încă verificată |

`LIPSĂ` descrie sursa, nu entitatea: faptul că o informație nu apare online nu o face falsă (AVL-200 §6, AVL200-REQ-010). Starea se notează pe sursă: aceeași informație poate fi `CORECT` pe site și `VECHI` pe un profil.

---

## 5. Identificarea fișei

**Cine este entitatea în raport cu laboratorul, cine o reprezintă și ce serviciu a cerut.**

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| ID fișă | identificatorul documentului, cu versiunea | `FE-exemplu-srl-v1` | L |
| Versiunea fișei | crește la fiecare modificare a unei informații (§21) | `1`, `2` | L |
| ID entitate | identificator scurt, stabil, fără diacritice, folosit în plan, dovezi și rapoarte | `exemplu-srl`, `delamatescu-ro` | L |
| Relația cu laboratorul | proiect, client sau laborator (site propriu); o rulare AVL-203 se face numai pentru aceste relații (AVL203-REQ-043) | client | Î |
| Reprezentantul entității | persoana care declară informațiile și politica crawlere în numele entității, cu calitatea ei | Ion Popescu, administrator | C |
| Data completării | ziua în care reprezentantul confirmă versiunea curentă | 4 noiembrie 2026 | Î |
| Responsabilul de metodologie | aprobă fișa și confirmă forma canonică și domeniul de activitate (AVL-201 §6.1) | Alex Matescu | L |
| Operatorul de măsurare | cine execută rulările `T0` (AVL-201 §6.2) | Alex Matescu | L |
| Conflict de interese | relația comercială, de control sau de participare cu entitatea; se declară dacă rezultatele se publică ([AVL-001 §21](/lab/introducere), AVL-202 „Independență și conflict de interese”) | „Site-ul propriu al laboratorului” | L |
| Serviciul contractat | ce s-a cerut: audit, baseline `T0`, etapa sursei canonice, etapa prezenței distribuite, website sau alt serviciu | audit AI Visibility | Î |

---

## 6. Tipul entității

**Ce fel de entitate este măsurată. Tipul decide ce pagini și ce surse sunt relevante.**

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Tipul de entitate | categoria din AVL-201 §3: persoană, companie, organizație, instituție, marcă, produs, serviciu, proiect, publicație, site | persoană | Î |
| Tipul pentru verificarea tehnică | categoria din AVL-203 §1.1 și AVL-204 §11: organizație cu servicii, magazin online, afacere locală, profesionist independent sau alt tip, cu motiv | profesionist independent | L |
| Entități legate care se tratează separat | persoana și firma ei, o marcă și compania care o deține sunt entități distincte; fiecare primește fișa ei sau se trece ca relație în §12 | persoana X și firma X SRL | Î |

---

## 7. Forma canonică și variantele [min]

**Forma canonică este numele și identificarea oficială stabilite pentru entitate și folosite ca referință în analiză (AVL-201 §5).** Trebuie să fie destul de precisă încât un revizor să poată decide dacă un răspuns se referă la entitatea corectă (AVL-201 §10.1). E bine să fie folosită identic pe site, în profiluri și în datele structurate ([„Ce este o entitate pentru AI”](/lab/articole/ce-este-entitate-ai-studiu-de-caz)).

Forma canonică nu este același lucru cu sursa canonică. Forma canonică este numele de referință, iar sursa canonică este ansamblul surselor controlate de entitate (AVL-200 §7.1; aici §11).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Forma canonică a numelui [min] | numele principal, scris exact cum îl folosește entitatea public | „Alex Matescu” | Î |
| Denumirea legală, dacă diferă | numele din registrul comerțului sau din actele oficiale | „Exemplu Consulting SRL” pentru marca „Exemplu” | C |
| Scrierea cu și fără diacritice | forma folosită public; motoarele pot trata formele cu și fără diacritice ca echivalente sau ca diferite ([AVL-102](/lab/cercetare/cum-aleg-motoarele-ai)) | „Mătescu” nu este folosită; forma publică este „Matescu” | Î |

### 7.1. Variante legitime și aliasuri [min]

**Numele reale sub care entitatea apare legitim: numele complet, o prescurtare, o transliterare, un nume anterior, un nume de marcă.** Nu se trec grafii inventate pentru căutare. Variantele legitime pot deveni `alternateName` în datele structurate (§18).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Variantă | numele alternativ, exact cum apare | „Alexandru Matescu” | C |
| Tipul variantei | nume complet, prescurtare, transliterare, nume anterior, nume de marcă | nume complet | Î |
| Unde este folosită | sursa în care apare varianta | acte oficiale, LinkedIn | C |

### 7.2. Forme greșite observate

**Grafiile greșite sau apropiate care pot produce confuzii, de exemplu o literă dublată sau o diacritică omisă.** Nu sunt forme ale entității. Se folosesc în interogările de dezambiguizare și în harta coliziunilor (§13).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Formă greșită | grafia care nu aparține entității, dar o poate atrage în rezultate | „Alex Mateescu” | Î |
| Unde apare | sursa sau suprafața în care a fost observată | o căutare Google pe numele entității | L |
| Cu cine poate fi confundată | entitatea reală care poartă această formă, dacă există | o altă persoană cu acest nume, din alt oraș | L |

---

## 8. Rolul și activitatea [min]

**Ce face entitatea acum și cum vrea să fie descrisă.** O persoană sau o firmă poate avea mai multe roluri legitime. Când sursele le prezintă separat, fără legături între ele, unui sistem îi poate fi mai greu să stabilească faptul că descriu aceeași entitate ([„Ce este o entitate pentru AI”](/lab/articole/ce-este-entitate-ai-studiu-de-caz), fragmentarea).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Descrierea principală | o propoziție: cine este și ce face entitatea acum | „Exemplu SRL oferă audit energetic pentru clădiri rezidențiale în Sibiu.” | Î |
| Rolul principal [min] | activitatea pe care entitatea vrea să o comunice acum | auditor energetic | C |
| Roluri secundare | experiența care explică traiectoria; nu se ascund roluri reale | proiectant instalații | C |
| Domeniul de activitate al serviciilor [min] | domeniul în care entitatea oferă servicii sau produse | eficiență energetică în construcții | C |
| Serviciile sau produsele principale | lista serviciilor, cu numărul lor; paginile lor intră în planul AVL-203 ca pagini de ofertă (AVL-203 §1.1) | audit energetic, certificat energetic | C |
| Pentru cine lucrează entitatea | tipul de clienți sau publicul | proprietari de locuințe, asociații de proprietari | C |
| Diferențiatori declarați | ce o deosebește de alți furnizori; numai afirmații pe care entitatea le poate susține cu dovezi, fără calificative ca „primul” sau „cel mai bun” (AVL-MKT-001 §17) | „auditori atestați, cu raport în 5 zile lucrătoare” | C |
| Roluri sau poziționări anterioare | informații corecte în trecut, care pot apărea în surse ca `VECHI` și pot concura cu descrierea actuală | fost angajat al firmei Y până în 2024 | C |

---

## 9. Locația și piața [min]

**Unde activează entitatea și cum poate fi contactată public.** Aceleași date, scrise la fel peste tot, reduc riscul ca reprezentarea entității să se bifurce (AVL-102, „Consecvența semnalelor”).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Țara [min] | țara în care activează entitatea | România | C |
| Localitatea [min] | orașul sau localitatea de referință | Sibiu | C |
| Adresa publică | numai dacă entitatea o face publică; o persoană fizică poate declara doar localitatea | str. Exemplu nr. 1, Sibiu | C |
| Zona deservită | local, regional, național sau internațional | județul Sibiu și județele vecine | C |
| Limbile de comunicare | limbile în care entitatea oferă informații și servicii | română, engleză | C |
| Telefonul și e-mailul publice | datele de contact pe care entitatea le vrea publice, identice în toate sursele | contact@exemplu.ro | C |
| Programul, dacă se aplică | pentru afacerile locale (AVL-204 §11) | luni–vineri, 9–17 | C |

---

## 10. Atribute verificabile [min]

**Faptele de identitate care pot fi confirmate dintr-o sursă oficială (AVL-201 §10.1).** Ele sunt materialul cu care se compară descrierile produse de motoare: rol, locație, experiență, organizații asociate, cronologie (AVL-201 §10.6). Pentru fiecare atribut se notează și dacă poate fi publicat (da, nu sau de decis).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Data înființării sau anul de început al activității | când a început entitatea să existe sau să activeze | 2018 | C |
| Forma juridică și datele de registru | forma juridică, codul fiscal (CUI), numărul de la registrul comerțului | SRL, CUI și număr ONRC | C |
| Fondatori, asociați, conducere | persoanele care conduc sau dețin entitatea, când sunt publice | administrator: Ion Popescu | C |
| Organizații asociate | angajator, parteneri, asociații profesionale | membru al unei asociații profesionale | C |
| Studii, certificări, autorizații | calificările care susțin rolul declarat | atestat de auditor energetic | C |
| Proiecte, publicații, cărți | lucrările atribuibile entității | o carte, un proiect public | C |
| Premii și apariții în presă | distincții și articole despre entitate | interviu într-o publicație locală | C |
| Cronologia principală | etapele importante, în ordine | 2018 înființare, 2022 extindere | Î |
| Identificatori publici | ORCID, Wikidata, ISNI sau ID-uri din registre profesionale; numai cei care aparțin sigur entității | un ID ORCID verificat | Î |

---

## 11. Activele oficiale [min]

**Sursele controlate direct de entitate și profilurile pe care le administrează.** Ele formează sursa canonică: site-ul oficial, paginile canonice, datele structurate și textele de identificare (AVL-200 §7.1). Clientul le declară (AVL-201 §6.4). La `T0`, laboratorul verifică dacă fiecare există, ce afirmă și dacă trimite înapoi la sursa canonică.

### 11.1. Site și pagini canonice [min]

**Adresele site-ului și paginile lui de referință.** Categoriile urmează planul de măsurare din AVL-203 §1.1.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Originea canonică (domeniul web) | adresa oficială a site-ului, cu varianta aleasă: cu sau fără `www`, cu `https` | `https://delamatescu.ro` | C |
| Pagina principală | prima pagină a site-ului | `https://exemplu.ro/` | C |
| Pagina canonică despre entitate | pagina „Despre” sau de profil, care explică cine este entitatea | `https://exemplu.ro/despre` | C |
| Pagina de contact sau de date de identitate | pagina care arată cine răspunde de site; obligatorie în planul AVL-203, iar dacă lipsește, absența se raportează (AVL203-REQ-042) | `https://exemplu.ro/contact` | C |
| Paginile principale de servicii sau produse | câte o pagină pentru fiecare serviciu principal din §8 | `https://exemplu.ro/audit-energetic` | C |
| Paginile de referință desemnate de entitate | hub-uri sau pagini-pilon pe care entitatea le consideră cele mai bune surse despre ea | un ghid publicat pe site | C |
| Subdomenii | alte adrese sub același domeniu | `blog.exemplu.ro` | C |
| Alte domenii deținute | inclusiv domenii vechi sau redirecționate | `exemplu-vechi.ro` | C |

### 11.2. Profiluri și conturi administrate de entitate

**Conturile pe care entitatea le controlează pe alte platforme.** Pentru fiecare se notează URL-ul, numele afișat, descrierea (bio), dacă trimite la site și cine îl administrează. Numele și descrierea ar trebui să fie coerente cu forma canonică (§7) și cu descrierea principală (§8).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| LinkedIn | profilul personal sau pagina companiei | `https://www.linkedin.com/in/…` | C |
| Facebook | pagina sau profilul public | `https://www.facebook.com/…` | C |
| Instagram | contul public | `https://www.instagram.com/…` | C |
| X | contul public | `https://x.com/…` | C |
| YouTube | canalul | `https://www.youtube.com/@…` | C |
| TikTok | contul public | `https://www.tiktok.com/@…` | C |
| Google Business Profile | profilul afacerii în Google, pentru entitățile cu locație | linkul profilului | C |
| Pagini de autor | paginile de autor din publicații sau platforme pe care entitatea le administrează | pagina de autor dintr-o revistă | C |
| Directoare și registre cu profil creat de entitate | profiluri pe care entitatea și le-a creat sau le întreține | un director profesional | C |
| Alte platforme | orice alt profil administrat de entitate | — | C |

### 11.3. Imagini oficiale

**Fotografia sau logo-ul pe care entitatea le folosește oficial, cu drepturile de utilizare.** Verificarea `T0` notează și imaginile afișate de motoare: o imagine greșită este o eroare de reprezentare chiar dacă textul este corect ([studiul Tabula Rasa](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz), §11).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Fotografia de profil sau logo-ul | imaginea oficială, ca URL sau fișier | `https://exemplu.ro/logo.svg` | C |
| Drepturile de utilizare | cine deține imaginea și unde poate fi folosită | fotografie proprie, utilizare liberă pe site și profiluri | C |

### 11.4. Acces autorizat pentru măsurare

**Instrumentele la care entitatea dă acces, ca observațiile externe să fie completate cu date interne.** Se notează doar dacă accesul a fost acordat și prin ce canal, niciodată parola.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Google Search Console | datele de indexare și căutare ale site-ului în Google | da, invitație pe contul operatorului | C |
| Bing Webmaster Tools | datele site-ului în Bing | nu | C |
| Logurile serverului sau ale CDN-ului | cererile primite de site, inclusiv de la crawlere | da, export lunar | C |
| Analytics | traficul site-ului, inclusiv vizitele venite din sisteme AI | da, acces de citire | C |

---

## 12. Relații și ancore de dezambiguizare

**Legăturile dintre entitate și oameni, organizații, locuri și surse.** Relațiile arată că mai multe surse descriu aceeași entitate. Tot ele pot servi drept ancore de dezambiguizare: contexte precum orașul, compania sau domeniul web, după care un sistem găsește entitatea corectă ([studiul Tabula Rasa](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz), §1).

Fiecare relație se scrie ca o propoziție scurtă: entitate, relație, entitate legată, sursa care o confirmă.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Entitate | entitatea din fișă sau o entitate legată de ea | Ion Popescu | Î |
| Relație | legătura, formulată ca verb | este administrator al | Î |
| Entitate legată | persoana, organizația, locul, domeniul sau publicația | Exemplu SRL | Î |
| Sursa care confirmă relația | pagina sau registrul în care relația apare explicit | pagina „Despre” a firmei | Î |

Exemple de relații: are sediul în, locuiește în, lucrează la, este fondator al, deține domeniul, este autor al, este membru al.

---

## 13. Harta coliziunilor

**Entitățile cu nume identic sau asemănător, cu sursele lor dominante (AVL-201 §7).** Harta servește la interogările de dezambiguizare și la clasificarea `COLIZIUNE` (AVL-201 §13). Auditul de coliziune verifică cine altcineva „răspunde” la numele entității ([AVL-103](/lab/cercetare/seo-vs-geo)).

Despre alte persoane se notează numai informația publică necesară pentru a le distinge de entitate. Ele nu se publică fără anonimizare (AVL-001 §21).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Entitatea concurentă | cine mai poartă numele sau un nume apropiat | o firmă cu nume asemănător | L |
| Numele sau forma | forma exactă sub care apare | „Exemplu Group SA” | L |
| Ce o distinge | rolul, localitatea sau organizația care o separă de entitatea din fișă | alt oraș, alt domeniu de activitate | L |
| Sursele ei dominante | sursele în care apare cel mai des | site propriu, un director de firme | L |
| Tipul coliziunii | omonim, nume apropiat, firmă cu nume similar sau termen generic | nume apropiat | L |
| Unde a fost observată | suprafața în care s-a produs confuzia | Google Search, ChatGPT | L |

---

## 14. Prezența distribuită

**Informațiile despre entitate din afara sursei canonice: publicații, știri, interviuri, directoare, registre și mențiuni, controlate sau independente (AVL-200 §7.1, AVL-201 §10.8).** Clientul declară ce cunoaște. Laboratorul completează în `T0` ce găsește. Aceasta este baza matricei prezenței distribuite.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Sursa | publicația, directorul sau registrul | o publicație locală | Î |
| URL | adresa exactă a paginii | `https://…` | Î |
| Data | data publicării sau a ultimei actualizări | 12 martie 2025 | L |
| Controlată sau independentă | dacă entitatea poate modifica sursa | independentă | L |
| Ce afirmă despre entitate | informația relevantă, pe scurt | rolul și localitatea | L |
| Trimite la sursa canonică? | dacă sursa are link către site-ul entității | nu | L |
| Acțiunea propusă după `T0` | ce merită corectat, aliniat sau completat | cerere de actualizare a rolului | Î |

Acțiunea propusă se notează în `T0`, dar nu se execută până la închiderea baseline-ului (AVL-201 §10.9, F0-REQ-001).

---

## 15. Politica crawlere [min]

**Accesul pe care entitatea îl vrea pentru crawlerele de căutare, de antrenare și de fetch la cererea utilizatorului (AVL-201 §7, AVL-204 §3.1).** Îl completează reprezentantul entității. AI Visibility Lab recomandă accesul total pentru toate crawlerele.

Dacă reprezentantul nu declară o politică diferită, se înregistrează accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se declară pe crawler sau pe categorie, cu sursa și data. Politica se copiază în planul AVL-203 înaintea rulării și nu se deduce din `robots.txt`: ea descrie ce vrea entitatea, iar verificarea tehnică arată ce livrează serverul (AVL204-REQ-017).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Opțiunea reprezentantului | acceptă recomandarea (acces total) sau declară o politică diferită | accept recomandarea | C |
| Categoria | căutare, antrenare sau fetch la cererea utilizatorului | antrenare | C |
| Crawlerul | numele agentului sau al tokenului din `robots.txt` | `GPTBot` | C |
| Politica | `PERMIS` sau `BLOCAT_INTENTIONAT` | `BLOCAT_INTENTIONAT` | C |
| Domeniul de aplicare | tot site-ul sau anumite căi | tot site-ul | C |
| Sursa și data declarației | cine a declarat politica și când | declarația administratorului, 4 noiembrie 2026 | Î |

Crawlerele urmărite la data acestui document sunt cele din planul primei rulări AVL-203 ([CS-002](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro)):

| Categorie | Crawlere |
| --- | --- |
| căutare | `Googlebot`, `bingbot`, `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` |
| antrenare | `GPTBot`, `ClaudeBot`, `Google-Extended` (token în `robots.txt`, nu User-Agent separat), `CCBot` |
| fetch la cererea utilizatorului | `ChatGPT-User`, `Claude-User`, `Perplexity-User` |

Crawlerele de fetch la cererea utilizatorului se raportează numai ca observație, pentru că furnizorii lor declară că regulile din `robots.txt` pot să nu li se aplice ([AVL-203 §6](/lab/metodologie/protocol-verificare-tehnica), AVL204-REQ-018). Lista se reverifică la fiecare versiune a protocolului AVL-203.

### 15.1. Indexare și răspunsuri declarate intenționat

**Paginile pe care entitatea nu vrea să le indexeze și răspunsurile pe care le-a configurat deliberat.** Un răspuns declarat aici nu se raportează drept problemă în verificarea tehnică (AVL-204 §6.2, §6.5).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Pagina sau zona | URL-ul sau grupul de pagini | `/cont/` | C |
| Vrea să fie indexată? | da sau nu | nu | C |
| Redirect, eroare sau canonical intenționat | răspunsul configurat deliberat | redirect permanent de la domeniul vechi | C |
| Motiv | de ce a fost configurat așa | domeniul vechi a fost înlocuit | C |

---

## 16. Ce vrea entitatea să i se recunoască

**Ce întrebări contează pentru entitate și ce ar trebui să spună un răspuns corect despre ea.** Este informație de intrare pentru setul de interogări, nu setul însuși. Setul se construiește de laborator înainte de examinarea rezultatelor, pe intenții (identitate, rol, informație factuală, comparație, recomandare), și se îngheață la `T0` (AVL-201 §10.2, F0-REQ-008; [AVL-104](/lab/cercetare/cum-se-masoara-ai-visibility)).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Întrebările pentru care vrea să apară | formulările pe care le folosesc clienții ei | „cine face audit energetic în Sibiu?” | C |
| Ce ar trebui să spună corect un răspuns | 3–5 fapte esențiale despre entitate | rolul, localitatea, serviciul principal | Î |
| Informații greșite sau vechi deja observate | ce a văzut entitatea până acum, cu exemplu și dată | un răspuns AI care o descrie cu rolul vechi | C |
| Recomandarea pentru care vrea să fie aleasă | rol + domeniu de activitate + zonă geografică | auditor energetic în județul Sibiu | C |
| Piața și limbile de măsurat | propunere pentru planul `T0` (AVL-201 §7, „Țara și limba”) | România, română și engleză | Î |
| Motoarele de interes | propunere; lista finală o stabilește laboratorul în planul `T0` | ChatGPT, Google AI Mode | Î |

---

## 17. Angajamente pentru durata `T0`

**Ce se angajează entitatea să nu schimbe cât timp se măsoară starea inițială.** O intervenție făcută în timpul `T0` amestecă starea inițială cu efectul intervenției.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Declarația de îngheț | entitatea nu modifică site-ul, profilurile, datele structurate sau prezența externă de la începutul `T0` până la închiderea lui (F0-REQ-001; AVL-201 §7) | confirmat, cu data | C |
| Anunțarea schimbărilor neplanificate | orice schimbare care apare totuși se anunță, ca să fie consemnată ca incident (F0-REQ-002) | confirmat | C |
| Schimbări deja programate | modificări care nu pot fi amânate, cu data lor | lansarea unui produs pe 15 noiembrie | C |

---

## 18. Informații pentru website (serviciu opțional)

**Numai pentru clienții care aleg serviciul de website sau etapa sursei canonice.** Informațiile se preiau din fișă după verificarea `T0` și devin propuneri, aprobate de client înainte de publicare (§19). Etapa sursei canonice nu are încă un document normativ propriu (AVL-001), deci secțiunea aceasta este operațională, nu normativă.

Datele structurate descriu doar ce apare vizibil pe pagină. Nu garantează indexarea, menționarea sau citarea ([AVL-202 §7](/lab/metodologie)).

| Informație pe site | Proprietatea schema.org | Se aplică la | Vine din |
| --- | --- | --- | --- |
| Numele canonic | `name` | persoană, organizație | §7 |
| Variantele legitime | `alternateName` | persoană, organizație | §7.1 |
| Descrierea principală | `description` | persoană, organizație | §8 |
| Rolul | `jobTitle` | persoană | §8 |
| Pagina canonică despre entitate | `url`, cu un `@id` stabil | persoană, organizație | §11.1 |
| Localitatea | `homeLocation` | persoană | §9 |
| Adresa | `address` | persoană, organizație | §9 |
| Zona deservită | `areaServed` | organizație | §9 |
| Domeniile de expertiză | `knowsAbout` | persoană, organizație | §8 |
| Profilurile care identifică sigur entitatea | `sameAs`, numai pentru identități fără echivoc | persoană, organizație | §11.2 |
| Organizația la care lucrează persoana | `worksFor` | persoană | §12 |
| Fondatorul organizației | `founder` | organizație | §12 |
| Organizațiile din care face parte | `memberOf` | persoană, organizație | §12 |
| Imaginea oficială | `image` | persoană, organizație | §11.3 |
| Logo-ul | `logo` | organizație | §11.3 |
| Datele de contact | `email`, `telephone`, `contactPoint` | persoană, organizație | §9 |
| Data înființării | `foundingDate` | organizație | §10 |

Proprietățile și tipurile cărora li se aplică au fost verificate pe schema.org la 4 noiembrie 2026 ([Person](https://schema.org/Person), [Organization](https://schema.org/Organization)).

---

## 19. Revizuire și aprobare înainte de publicare

**Nicio informație din fișă nu se publică pe site, în profiluri, în articole sau într-un studiu de caz fără aprobarea clientului.** Un audit privat nu devine automat studiu de caz public (AVL-201 §3; [Auditul AI Visibility](/lab/audit-ai-visibility)). Informațiile confidențiale ale clientului nu se publică fără acord explicit (AVL-001 §21).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Ce se publică | informația sau textul propus | descrierea principală nouă | Î |
| Unde | pagina, profilul sau publicația | pagina „Despre” | Î |
| Versiunea revizuită | textul exact aprobat | versiunea 2 a textului | Î |
| Aprobat de | reprezentantul care aprobă | Ion Popescu | C |
| Data aprobării | ziua aprobării | 20 noiembrie 2026 | C |

---

## 20. Confirmarea reprezentantului

**Reprezentantul confirmă sau contestă factual fișa (AVL-201 §6.4).** O contestare se notează cu valoarea contestată, valoarea propusă și sursa. Fișa se semnează de reprezentant și de responsabilul de metodologie.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Secțiunea sau câmpul | ce se confirmă sau se contestă | §9, localitatea | C |
| Confirmat sau contestat | decizia reprezentantului | contestat | C |
| Valoarea propusă | valoarea corectă, după reprezentant | Mediaș | C |
| Sursa | documentul care susține valoarea propusă | certificatul de înregistrare | C |
| Semnăturile | reprezentantul entității și responsabilul de metodologie, cu data | — | C, L |

---

## 21. Istoricul fișei

**Fișa se versionează.** O corectură păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (AVL-MKT-001 §19). Valorile folosite într-o măsurare deja făcută nu se schimbă retroactiv (AVL200-REQ-013). Versiunea fișei folosită la `T0` se menționează în plan și în raport (AVL-201 §20).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Cine |
| --- | --- | --- | --- |
| Versiunea fișei | numărul versiunii noi | 2 | L |
| Data | ziua modificării | 5 decembrie 2026 | L |
| Ce s-a schimbat | câmpul modificat | rolul principal | L |
| Valoarea anterioară | ce scria înainte | proiectant | L |
| Motiv și sursă | de ce s-a schimbat și pe ce bază | schimbarea activității, anunțată de reprezentant | Î |
| Aprobat de | cine a aprobat modificarea | reprezentantul și responsabilul de metodologie | C, L |

---

## 22. Proveniența câmpurilor

**De unde provine fiecare secțiune a fișei.** Secțiunile fără bază normativă sunt marcate „operațional”.

| Secțiune | Sursa în corpus |
| --- | --- |
| Conținutul minim [min] | AVL-201 §7 |
| §5 Identificarea fișei | AVL-201 §6.1–6.4; AVL-203 §1, AVL203-REQ-043; AVL-204 AVL204-REQ-015; AVL-001 §21; AVL-202 „Independență și conflict de interese” |
| §6 Tipul entității | AVL-201 §3, §5; AVL-203 §1.1; AVL-204 §11 |
| §7 Forma canonică și variantele | AVL-201 §5, §10.1; AVL-102; articolul „Ce este o entitate pentru AI” |
| §8 Rolul și activitatea | AVL-201 §7, §10.6; AVL-MKT-001 §17; articolul „Ce este o entitate pentru AI”; documentul de lucru „Audit F0 — Tabula Rasa” (2 iulie 2026), din pachetul de dovezi `T0` pentru Alex Matescu |
| §9 Locația și piața | AVL-201 §7; AVL-102; AVL-204 §11 |
| §10 Atribute verificabile | AVL-201 §7, §10.1, §10.6; articolul „Ce este o entitate pentru AI” |
| §11 Activele oficiale | AVL-200 §7.1, §18.3; AVL-201 §6.4, §7, §10.8; AVL-203 §1.1, AVL203-REQ-042; pagina Auditul AI Visibility; studiul Tabula Rasa §11 |
| §12 Relații și ancore | studiul Tabula Rasa §1; articolul „Ce este o entitate pentru AI”; AVL-202 §7 |
| §13 Harta coliziunilor | AVL-201 §7, §13; AVL-103; AVL-001 §21 |
| §14 Prezența distribuită | AVL-200 §7.1; AVL-201 §10.8, §10.9; AVL-202 §7 |
| §15 Politica crawlere | AVL-201 §6.4, §7; AVL-203 §1.1, §6; AVL-204 §3.1, §6.2, §6.3, §6.5, AVL204-REQ-017, AVL204-REQ-018; CS-002 |
| §16 Ce vrea entitatea să i se recunoască | AVL-201 §7, §10.2, F0-REQ-008; AVL-104; pagina Auditul AI Visibility |
| §17 Angajamente pentru `T0` | AVL-201 §6.4, §7, F0-REQ-001, F0-REQ-002 |
| §18 Informații pentru website | operațional; AVL-200 §7.1; AVL-202 §7; articolul „Ce este o entitate pentru AI”; schema.org |
| §19 Revizuire și aprobare | AVL-201 §3; AVL-001 §21; pagina Auditul AI Visibility |
| §20 Confirmarea reprezentantului | AVL-201 §6.4 |
| §21 Istoricul fișei | AVL-MKT-001 §19; AVL200-REQ-013; AVL-201 §20 |

---

## 23. Documente asociate

### Normative

- [AVL-001 — AI Visibility Lab Foundation](/lab/introducere)
- [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie)
- [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate)
- [AVL-201 — Tabula Rasa F0: Baseline Measurement Specification](/lab/metodologie/tabula-rasa-f0)

### Informative

- [AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility](/lab/metodologie/protocol-verificare-tehnica)
- [AVL-204 — Grila de interpretare a verificării tehnice](/lab/metodologie/grila-interpretare-verificare-tehnica)
- [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate)
- [AVL-102 — Cum aleg sistemele AI sursele și citările](/lab/cercetare/cum-aleg-motoarele-ai)
- [AVL-103 — SEO și GEO](/lab/cercetare/seo-vs-geo)
- [AVL-104 — Cum se măsoară AI Visibility](/lab/cercetare/cum-se-masoara-ai-visibility)
- [Ce este o entitate pentru AI și motoarele de căutare](/lab/articole/ce-este-entitate-ai-studiu-de-caz)
- [Studiul de caz Tabula Rasa — identitatea Alex Matescu](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz)
- [CS-002 — Verificarea tehnică AVL-203 a delamatescu.ro](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro)
- [Auditul AI Visibility](/lab/audit-ai-visibility)

### Referințe externe

- [Schema.org — Person](https://schema.org/Person)
- [Schema.org — Organization](https://schema.org/Organization)

---

## 24. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
| --- | --- | --- | --- |
| 0.1.0 | 4 noiembrie 2026 | Draft pentru revizuire | Primul draft. Descrie fișa entității cerută de AVL-201 §7: rolul ei, ce nu este, cum se completează, stările verificării `T0` și definițiile tuturor câmpurilor, în 17 secțiuni (§5–§21), cu proveniența fiecărei secțiuni. Precizează că „domeniu” din AVL-201 §7 înseamnă domeniul de activitate al serviciilor (decizie Alex Matescu, 4 noiembrie 2026). Nu introduce cerințe proprii. |
| 0.1.1 | 4 noiembrie 2026 | Draft pentru revizuire | PATCH: trimiteri la AVL-201 1.6.0, care trimite la AVL-205 din §7 și §10.1 și folosește formularea „domeniul de activitate”, și la AVL-202 1.8.0, care include AVL-205 în corpus. Deciziile deschise 2 (închisă), 3 și 6 (parțial închise) sunt actualizate. Fără schimbări ale câmpurilor fișei. |

---

## 25. Decizii deschise înainte de 1.0.0

1. **Primul test pe o entitate reală.** Fișa se completează integral pentru delamatescu.ro și Alex Matescu, entitatea primei rulări AVL-203. Până acum există doar referința și politica crawlere din planul acelei rulări. Câmpurile care nu funcționează în practică se corectează înainte de activare.
2. **Precizarea „domeniu” în AVL-201.** Închisă la 4 noiembrie 2026 (decizie Alex Matescu): AVL-201 1.6.0 folosește „domeniul de activitate” la §6.1 și §7, cu același sens ca AVL-205 §3.
3. **Trimiterea din AVL-201, AVL-203 și AVL-204.** Parțial închisă la 4 noiembrie 2026: AVL-201 1.6.0 trimite la AVL-205 din §7 și §10.1. AVL-203 și AVL-204 trimit în continuare la fișa entității prin AVL-201 §7; rămâne de decis dacă trimit direct și la AVL-205.
4. **Stările verificării `T0` (§4).** Vocabularul `CORECT`, `VECHI`, `FALS`, `LIPSĂ`, `UNKNOWN`, `NEVERIFICAT` se testează la primul `T0` cu fișă completă.
5. **Cerințe proprii.** Rămâne de decis dacă AVL-205 primește cerințe `AVL205-REQ-*`, de exemplu pentru conținutul minim sau pentru versionarea fișei, sau rămâne un document descriptiv.
6. **Locul în corpus.** Parțial închisă la 4 noiembrie 2026: AVL-202 1.8.0 menționează AVL-205 în arhitectura metodologiei, în ordinea de lectură, în ordinea din hub și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001.

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

> **Declarație finală**
>
> O măsurare spune ce văd sistemele despre o entitate. Fișa spune ce este entitatea.
> Fără a doua, prima nu poate fi verificată.
