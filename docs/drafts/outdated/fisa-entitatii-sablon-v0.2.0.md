# Fișa entității — șablon

| | |
|---|---|
| Document | Șablonul fișei entității |
| Versiune șablon | 0.2.0 — draft pentru revizuire |
| Data | 3 noiembrie 2026 |
| Autor | Alex Matescu, AI Visibility Lab |
| Bază normativă | AVL-201 v1.5.0 §6.4, §7, §8, §10.1, §20 (fișa entității) |
| Folosită de | AVL-201 (baseline `T0`), AVL-203 v0.6.1 §1.1 și AVL-204 v0.3.1 §3.1 (politica crawlere), etapa sursei canonice și etapa prezenței distribuite |
| Statut | Document de lucru. Nu este document normativ AVL și nu are identificator AVL propriu. |

---

## Cum se folosește fișa

**Fișa entității adună, într-un singur loc, informațiile oficiale despre entitatea evaluată: cine este, cum se numește, ce face, unde activează, ce surse controlează, cu cine poate fi confundată și ce acces vrea pentru crawlere.**

Fișa se completează înainte de baseline-ul `T0`, de client (sau reprezentantul lui) împreună cu Alex Matescu. În `T0`, informațiile din fișă se verifică în mediile digitale: site, profiluri, directoare, registre, publicații, Search și răspunsurile AI. Rezultatul verificării se trece în coloana „Stare la `T0`”.

După `T0`, fișa este referința pentru:

- relațiile dintre profiluri, articole, știri și alte surse, definite sau actualizate în etapa sursei canonice și în etapa prezenței distribuite;
- informațiile pentru website-ul entității, numai pentru clienții care aleg acest serviciu (secțiunea 14).

Nimic nu se publică înainte ca informațiile să fie revizuite și aprobate împreună cu clientul (secțiunea 15).

### Ce se completează obligatoriu

Conținutul minim cerut de AVL-201 §7 este marcat cu **[min]**: forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile, politica crawlere. „Domeniu” înseamnă aici domeniul de activitate al serviciilor entității, nu domeniul web; site-ul intră la URL-urile oficiale. Fișa este condiție pentru orice rulare AVL-203 (AVL203-REQ-043, AVL204-REQ-015).

Fișa cuprinde și **harta coliziunilor** (secțiunea 9) și **lista activelor oficiale** (secțiunea 7). AVL-201 §7 le tratează ca intrări separate de fișă, dar §8 le livrează împreună („Fișa entității și harta coliziunilor”), iar §6.4 cere subiectului să declare activele controlate. Aici sunt păstrate în același document.

### Cine completează

| Marcaj | Cine completează |
|---|---|
| **C** | clientul sau reprezentantul entității |
| **Î** | împreună: clientul declară, Alex Matescu formulează și verifică |
| **L** | Alex Matescu (laboratorul), după verificare |

### Stările din verificarea `T0`

Pentru fiecare informație declarată, verificarea `T0` notează ce arată sursele publice. Stările preiau categoriile din AVL-201 §10.6 („atribute corecte, lipsă, vechi sau false”) și semantica valorilor necunoscute din AVL-200 §6.

| Stare | Sens |
|---|---|
| `CORECT` | sursa publică verificată afirmă aceeași informație ca fișa |
| `VECHI` | sursa afirmă o informație care a fost corectă, dar nu mai este actuală |
| `FALS` | sursa afirmă altceva decât fișa sau atribuie informația altei entități |
| `LIPSĂ` | informația a fost căutată în sursele declarate și nu apare |
| `UNKNOWN` | informația a fost căutată, dar nu se poate stabili ce afirmă sursa (de exemplu, pagina nu se încarcă sau sursa e ambiguă) |
| `NEVERIFICAT` | informația nu a fost încă verificată |

`LIPSĂ` descrie sursa, nu entitatea: faptul că o informație nu apare online nu o face falsă (AVL-200 §6, AVL200-REQ-010). Fiecare stare se notează cu sursa și data verificării. Dacă există o captură, se notează și Evidence ID-ul ei (AVL-200 §11).

### Ce nu se trece în fișă

Parolele, token-urile, cheile API, cookie-urile și alte secrete de acces nu se trec niciodată în fișă (AVL-200 §18.3, AVL200-REQ-028). Un acces autorizat, de exemplu la Search Console sau la logurile serverului, se notează doar ca existent, cu canalul prin care a fost acordat.

---

## 1. Identificarea fișei

| Câmp | Valoare | Cine |
|---|---|---|
| ID fișă | `FE-[entitate]-v[versiune]` | L |
| Versiunea fișei | | L |
| ID entitate | identificator scurt, stabil, fără diacritice (de exemplu `delamatescu-ro`) | L |
| Relația cu laboratorul | proiect / client / laborator (câmpul `entity_sheet.relationship` din planul AVL-203) | Î |
| Reprezentantul entității | nume, calitate (titular, administrator, împuternicit) | C |
| Data completării | | Î |
| Responsabilul de metodologie | aprobă fișa, confirmă forma canonică și domeniul de activitate (AVL-201 §6.1) | L |
| Operatorul de măsurare | | L |
| Conflict de interese | există o relație comercială sau de control cu entitatea? Se declară dacă rezultatele se publică (AVL-001 §21, AVL-202 „Independență și conflict de interese”) | L |
| Serviciul contractat | audit / baseline `T0` / etapa sursei canonice / etapa prezenței distribuite / website / alt serviciu | Î |

---

## 2. Tipul entității

| Câmp | Valoare | Cine |
|---|---|---|
| Tipul de entitate | persoană, companie, organizație, instituție, marcă, produs, serviciu, proiect, publicație, site (AVL-201 §3) | Î |
| Tipul pentru verificarea tehnică | organizație cu servicii / magazin online / afacere locală / profesionist independent / alt tip, cu motiv (AVL-203 §1.1, AVL-204 §11) | L |
| Entități legate care se tratează separat | de exemplu persoana și firma ei sunt entități distincte; fiecare primește fișa ei sau se declară ca relație în secțiunea 8 | Î |

---

## 3. Forma canonică și variantele **[min]**

Forma canonică este numele și identificarea oficială folosite ca referință în analiză (AVL-201 §5). Trebuie să fie destul de precisă încât un revizor să poată decide dacă un răspuns se referă la entitatea corectă (AVL-201 §10.1).

| Câmp | Valoare | Sursa oficială | Stare la `T0` | Cine |
|---|---|---|---|---|
| Forma canonică a numelui **[min]** | | | | Î |
| Denumirea legală, dacă diferă | de exemplu numele din registrul comerțului | | | C |
| Scrierea cu și fără diacritice | se declară forma folosită public | | | Î |

### 3.1. Variante legitime și aliasuri **[min]**

Numai variante reale ale identității, nu grafii inventate pentru căutare. Acestea pot deveni `alternateName` în datele structurate.

| Variantă | Tip (nume complet, prescurtare, transliterare, nume anterior, nume de marcă) | Unde este folosită | Stare la `T0` |
|---|---|---|---|
| | | | |

### 3.2. Forme greșite observate

Grafiile greșite sau apropiate care pot produce coliziuni (de exemplu o literă dublată sau o diacritică omisă). Nu sunt forme acceptate ale entității. Se folosesc în setul de interogări de dezambiguizare și în harta coliziunilor.

| Formă greșită | Unde apare | Cu cine poate fi confundată |
|---|---|---|
| | | |

---

## 4. Rolul și activitatea **[min]**

| Câmp | Valoare | Sursa oficială | Stare la `T0` | Cine |
|---|---|---|---|---|
| Descrierea principală (o propoziție) | cine este și ce face entitatea acum | | | Î |
| Rolul principal **[min]** | activitatea pe care entitatea vrea să o comunice acum | | | C |
| Roluri secundare | experiența care explică traiectoria; nu se ascund roluri reale | | | C |
| Domeniul de activitate al serviciilor **[min]** | | | | C |
| Serviciile sau produsele principale | numărul lor se declară; intră în planul AVL-203 ca pagini de ofertă | | | C |
| Pentru cine lucrează entitatea | tipul de clienți sau public | | | C |
| Diferențiatori declarați | numai afirmații pe care entitatea le poate susține cu dovezi (AVL-MKT-001 §17) | | | C |
| Roluri sau poziționări anterioare | informații corecte în trecut, care pot apărea ca `VECHI` | | | C |

---

## 5. Locația și piața **[min]**

| Câmp | Valoare | Sursa oficială | Stare la `T0` | Cine |
|---|---|---|---|---|
| Țara **[min]** | | | | C |
| Localitatea **[min]** | | | | C |
| Adresa publică | numai dacă entitatea o face publică; o persoană fizică poate declara doar localitatea | | | C |
| Zona deservită | local, național, internațional | | | C |
| Limbile de comunicare | | | | C |
| Telefonul și e-mailul publice | aceleași peste tot: numele, adresa și telefonul trebuie să coincidă între surse | | | C |
| Programul, dacă se aplică | pentru afaceri locale (AVL-204 §11) | | | C |

---

## 6. Atribute verificabile **[min]**

Faptele de identitate care pot fi confirmate dintr-o sursă oficială. Pentru fiecare se notează sursa oficială (AVL-201 §10.1). Un fapt fără sursă se trece cu sursa „declarația reprezentantului, [data]”.

| Atribut | Valoare | Sursa oficială | Publicabil? (da / nu / de decis) | Stare la `T0` | Evidence ID |
|---|---|---|---|---|---|
| Data înființării / anul de început al activității | | | | | |
| Forma juridică și codul fiscal (CUI), numărul de la registrul comerțului | | | | | |
| Fondatori, asociați, conducere | | | | | |
| Organizații asociate (angajator, parteneri, asociații profesionale) | | | | | |
| Studii, certificări, autorizații | | | | | |
| Proiecte, publicații, cărți | | | | | |
| Premii, apariții în presă | | | | | |
| Cronologia principală | | | | | |
| Identificatori publici (ORCID, Wikidata, ISNI, ID-uri în registre profesionale) | se declară numai identificatorii care aparțin sigur entității | | | | |
| | | | | | |

---

## 7. Lista activelor oficiale **[min]**

Sursele controlate direct de entitate (AVL-201 §7; „sursa canonică”, AVL-200 §7.1) și profilurile pe care le administrează. Clientul le declară (AVL-201 §6.4). Laboratorul verifică la `T0` dacă fiecare există, ce afirmă și dacă trimite înapoi la sursa canonică.

### 7.1. Site și pagini canonice **[min]**

| Categorie | URL | Observații | Stare la `T0` |
|---|---|---|---|
| Originea canonică (domeniul web) | `https://` | varianta oficială: cu sau fără `www`, `https` | |
| Pagina principală | | | |
| Pagina canonică despre entitate (Despre, profil) | | | |
| Pagina de contact sau de date de identitate | | obligatorie în planul AVL-203; dacă lipsește, absența se raportează (AVL203-REQ-042) | |
| Paginile principale de servicii sau produse | | | |
| Paginile pe care entitatea le desemnează drept referință despre ea | | hub-uri, pagini-pilon | |
| Subdomenii | | | |
| Alte domenii deținute | | inclusiv domenii vechi sau redirecționate | |

### 7.2. Profiluri și conturi administrate de entitate

| Platformă | URL | Numele afișat | Descrierea / bio | Leagă la sursa canonică? | Cine administrează | Stare la `T0` |
|---|---|---|---|---|---|---|
| LinkedIn | | | | | | |
| Facebook | | | | | | |
| Instagram | | | | | | |
| X | | | | | | |
| YouTube / TikTok | | | | | | |
| Google Business Profile | | | | | | |
| Pagini de autor (publicații, platforme) | | | | | | |
| Directoare și registre în care entitatea și-a creat profilul | | | | | | |
| | | | | | | |

### 7.3. Imagini oficiale

Fotografia sau logo-ul pe care entitatea le folosește oficial. Verificarea `T0` notează și imaginile afișate de motoare: o imagine greșită este o eroare de reprezentare chiar dacă textul este corect.

| Imagine | URL sau fișier | Drepturi de utilizare | Stare la `T0` |
|---|---|---|---|
| Fotografie de profil / logo | | | |

### 7.4. Acces autorizat pentru măsurare

| Instrument | Acces acordat? | Prin ce canal | Observații |
|---|---|---|---|
| Google Search Console | da / nu | invitație pe contul operatorului | fără parole în fișă |
| Bing Webmaster Tools | | | |
| Logurile serverului / CDN | | | |
| Analytics | | | |

---

## 8. Relații și ancore de dezambiguizare

Relațiile care leagă entitatea de oameni, organizații, locuri și surse. Ele arată că mai multe surse descriu aceeași entitate. Tot ele pot servi drept ancore de dezambiguizare, adică acele contexte, ca orașul, compania sau domeniul web, după care un sistem găsește entitatea corectă.

| Entitate | Relație | Entitate legată | Sursa care confirmă relația | Stare la `T0` |
|---|---|---|---|---|
| [entitatea] | locuiește în / are sediul în | [localitate] | | |
| [entitatea] | lucrează la / este fondator al | [organizație] | | |
| [entitatea] | deține | [domeniu web] | | |
| [entitatea] | este autor al | [publicație / proiect] | | |
| | | | | |

---

## 9. Harta coliziunilor

Entitățile omonime sau asemănătoare și sursele lor dominante (AVL-201 §7). Harta servește la setul de interogări de dezambiguizare și la clasificarea `COLIZIUNE` (AVL-201 §13).

Despre alte persoane se notează numai informația publică necesară pentru a le distinge de entitate. Ele nu se publică fără anonimizare (AVL-001 §21).

| Entitate concurentă | Nume / formă | Ce o distinge (rol, localitate, organizație) | Sursele ei dominante | Tip: omonim / nume apropiat / firmă cu nume similar / termen generic | Unde a fost observată |
|---|---|---|---|---|---|
| | | | | | |

---

## 10. Prezența distribuită

Informațiile despre entitate din afara sursei canonice: publicații, știri, interviuri, directoare, registre și mențiuni (AVL-200 §7.1, AVL-201 §10.8). Clientul declară ce cunoaște. Laboratorul completează în `T0` ce găsește. Aceasta este baza matricei prezenței distribuite.

| Sursă | URL | Data | Controlată de entitate / independentă | Ce afirmă despre entitate | Leagă la sursa canonică? | Stare la `T0` | Acțiune propusă după `T0` |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

Acțiunea propusă se notează în `T0`, dar nu se execută până la închiderea baseline-ului (AVL-201 §10.9, F0-REQ-001).

---

## 11. Politica crawlere **[min]**

Accesul pe care entitatea îl vrea pentru crawlere (AVL-201 §7, AVL-204 §3.1). Îl completează reprezentantul entității. AI Visibility Lab recomandă accesul total pentru toate crawlerele: de căutare, de antrenare și de fetch la cererea utilizatorului.

Dacă reprezentantul nu declară o politică diferită, se înregistrează accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se declară pe crawler sau pe categorie, cu sursa și data. Politica se copiază în planul AVL-203 înaintea rulării și nu se deduce din `robots.txt` (AVL204-REQ-017).

**Opțiunea reprezentantului:**

- [ ] Accept recomandarea: acces total pentru toate crawlerele.
- [ ] Declar o politică diferită, în tabelul de mai jos.

| Categorie | Crawler | Politica (`PERMIS` / `BLOCAT_INTENTIONAT`) | Domeniu (tot site-ul sau căi) | Sursa declarației | Data |
|---|---|---|---|---|---|
| căutare | `Googlebot` | | | | |
| căutare | `bingbot` | | | | |
| căutare | `OAI-SearchBot` | | | | |
| căutare | `Claude-SearchBot` | | | | |
| căutare | `PerplexityBot` | | | | |
| antrenare | `GPTBot` | | | | |
| antrenare | `ClaudeBot` | | | | |
| antrenare | `Google-Extended` (token în `robots.txt`) | | | | |
| antrenare | `CCBot` | | | | |
| fetch la cererea utilizatorului | `ChatGPT-User` | | | | |
| fetch la cererea utilizatorului | `Claude-User` | | | | |
| fetch la cererea utilizatorului | `Perplexity-User` | | | | |

Agenții de fetch la cererea utilizatorului se raportează numai ca observație, pentru că furnizorii lor declară că regulile din `robots.txt` pot să nu li se aplice (AVL-203 §6, AVL204-REQ-018).

### 11.1. Indexare și răspunsuri declarate intenționat

| Pagină sau zonă | Vrea să fie indexată? | Redirect, eroare sau canonical intenționat | Motiv |
|---|---|---|---|
| | da / nu | | |

Un răspuns declarat intenționat aici nu se raportează drept problemă în verificarea tehnică (AVL-204 §6.2, §6.5).

---

## 12. Ce vrea entitatea să i se recunoască

Informație de intrare pentru setul de interogări. **Nu este setul de interogări.** Setul se construiește de laborator înainte de examinarea rezultatelor, pe intenții, și se îngheață la `T0` (AVL-201 §10.2, F0-REQ-008).

| Câmp | Valoare | Cine |
|---|---|---|
| Pentru ce întrebări vrea entitatea să apară | formulările clienților ei, așa cum le-ar pune | C |
| Ce ar trebui să spună corect un răspuns despre entitate | 3–5 fapte esențiale | Î |
| Ce informații greșite sau vechi a observat deja | cu exemplu și dată, dacă există | C |
| Pentru ce recomandare vrea să fie aleasă | rol + domeniu de activitate + zonă geografică | C |
| Piața și limbile de măsurat | se preiau în planul `T0` (AVL-201 §7, „Țara și limba”) | Î |
| Motoarele de interes | se preiau în planul `T0`; lista finală o stabilește laboratorul | Î |

---

## 13. Angajamente pentru durata `T0`

| Angajament | Confirmare | Data |
|---|---|---|
| Nu modific site-ul, profilurile, datele structurate sau prezența externă de la începutul `T0` până la închiderea lui (F0-REQ-001; declarația de îngheț, AVL-201 §7) | [ ] | |
| Anunț orice schimbare neplanificată, ca să fie consemnată ca incident (F0-REQ-002) | [ ] | |
| Schimbări deja programate care nu pot fi amânate: | | |

---

## 14. Informații pentru website (serviciu opțional)

Numai pentru clienții care aleg serviciul de website sau etapa sursei canonice. Informațiile se preiau din fișă după verificarea `T0` și devin propuneri, aprobate de client înainte de publicare (secțiunea 15). Etapa sursei canonice nu are încă un document normativ propriu (AVL-001 v1.4.0), deci secțiunea aceasta este operațională, nu normativă.

Datele structurate descriu doar ce apare vizibil pe pagină. Nu garantează indexarea, menționarea sau citarea (AVL-202 §7).

| Informație pe site | Proprietatea schema.org corespunzătoare | Valoarea propusă | Sursa din fișă | Aprobat |
|---|---|---|---|---|
| Numele canonic | `name` | | secțiunea 3 | |
| Variantele legitime | `alternateName` | | secțiunea 3.1 | |
| Descrierea principală | `description` | | secțiunea 4 | |
| Rolul | `jobTitle` (persoană) | | secțiunea 4 | |
| Pagina canonică despre entitate | `url` și un `@id` stabil | | secțiunea 7.1 | |
| Localitatea / adresa | `homeLocation` (persoană), `address` (organizație) | | secțiunea 5 | |
| Domeniile de expertiză | `knowsAbout` | | secțiunea 4 | |
| Profilurile care identifică sigur entitatea | `sameAs`, numai pentru identități fără echivoc | | secțiunea 7.2 | |
| Organizațiile legate | `worksFor`, `founder`, `memberOf` | | secțiunea 8 | |
| Imaginea oficială / logo-ul | `image`, `logo` | | secțiunea 7.3 | |
| Datele de contact | `email`, `telephone`, `contactPoint` | | secțiunea 5 | |
| Data înființării | `foundingDate` (organizație) | | secțiunea 6 | |

---

## 15. Revizuire și aprobare înainte de publicare

Nicio informație din fișă nu se publică pe site, în profiluri, în articole sau într-un studiu de caz fără aprobarea clientului. Un audit privat nu devine automat studiu de caz public (AVL-201 §3). Informațiile confidențiale ale clientului nu se publică fără acord explicit (AVL-001 §21).

| Ce se publică | Unde | Versiunea revizuită | Aprobat de | Data aprobării |
|---|---|---|---|---|
| | | | | |

---

## 16. Confirmarea reprezentantului

Reprezentantul confirmă sau contestă factual fișa (AVL-201 §6.4). O contestare se notează cu valoarea contestată, valoarea propusă și sursa.

| Secțiune / câmp | Confirmat / contestat | Valoarea propusă | Sursa | Data |
|---|---|---|---|---|
| | | | | |

| | Nume | Data | Semnătura |
|---|---|---|---|
| Reprezentantul entității | | | |
| Responsabilul de metodologie (Alex Matescu) | | | |

---

## 17. Istoricul fișei

Fișa se versionează. O corectură păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (AVL-MKT-001 §19). Valorile folosite într-o măsurare deja făcută nu se schimbă retroactiv (AVL200-REQ-013). Versiunea fișei folosită la `T0` se menționează în plan și în raport (AVL-201 §20, punctul 3).

| Versiunea fișei | Data | Ce s-a schimbat | Valoarea anterioară | Motiv și sursă | Aprobat de |
|---|---|---|---|---|---|
| | | | | | |

---

## Anexă — Trasabilitatea șablonului

De unde provine fiecare secțiune. Secțiunile fără bază normativă sunt marcate „operațional”.

| Secțiune | Sursa în proiect |
|---|---|
| Conținutul minim **[min]** | AVL-201 §7 (tabelul „Intrări obligatorii”) |
| 1. Identificarea fișei | AVL-203 §1, AVL203-REQ-043; câmpul `entity_sheet` (referință, reprezentant, dată, relație) din planul AVL-203; AVL-201 §6.1–6.4; AVL-001 §21; AVL-202 „Independență și conflict de interese” |
| 2. Tipul entității | AVL-201 §3, §5 („Entitate”); AVL-203 §1.1, AVL203-REQ-029; AVL-204 §11 |
| 3. Forma canonică și variantele | AVL-201 §5, §10.1; articolul „Ce este o entitate pentru AI” (forma canonică, `alternateName`); AVL-102 (diacritice, transliterare, omonimie) |
| 4. Rolul și activitatea | AVL-201 §7, §10.6; articolul „Ce este o entitate pentru AI” (descrierea principală, fragmentarea rolurilor); AVL-MKT-001 §17; documentul istoric „Audit F0 — Tabula Rasa” din 2 iulie 2026 (poziționarea anterioară ca sursă de coliziune), din pachetul `T0` pentru Alex Matescu |
| 5. Locația și piața | AVL-201 §7; AVL-102 (consecvența datelor de contact); AVL-204 §11 (afaceri locale) |
| 6. Atribute verificabile | AVL-201 §7, §10.1 („surse oficiale pentru atributele de identitate”), §10.6; articolul „Ce este o entitate pentru AI” (Wikidata) |
| 7. Lista activelor oficiale | AVL-201 §6.4, §7, §10.8; AVL-200 §7.1 (sursa canonică); AVL-203 §1.1, AVL203-REQ-042; pagina auditului AI Visibility (acces autorizat); AVL-200 §18.3; studiul Tabula Rasa §11 și „Transparență metodologică” (imaginile afișate de Perplexity și ChatGPT) |
| 8. Relații și ancore | studiul Tabula Rasa §1 (ancore de dezambiguizare); articolul „Ce este o entitate pentru AI” (relații explicite între profiluri); AVL-202 §7 („Înțelegerea entității”) |
| 9. Harta coliziunilor | AVL-201 §7, §10.1, §13 (`COLIZIUNE`); AVL-103 (auditul de coliziune a entității); AVL-001 §21 |
| 10. Prezența distribuită | AVL-200 §7.1; AVL-201 §10.8, §10.9; AVL-202 §7 („Ecosistemul extern”) |
| 11. Politica crawlere | AVL-201 §6.4, §7 (v1.5.0); AVL-203 §1.1, §6, AVL203-REQ-030; AVL-204 §3.1, §6.2, §6.3, §6.5, AVL204-REQ-017, AVL204-REQ-018; lista crawlerelor din planul AVL-203 pentru delamatescu.ro (`T0`, 26 octombrie 2026) |
| 12. Ce vrea entitatea să i se recunoască | AVL-201 §7, §10.2, F0-REQ-008; AVL-104 (interogări de identitate, rol, recomandare); pagina auditului AI Visibility (întrebările clientului) |
| 13. Angajamente pentru `T0` | AVL-201 §6.4, §7 (declarația de îngheț), F0-REQ-001, F0-REQ-002 |
| 14. Informații pentru website | operațional; AVL-200 §7.1 (etapa sursei canonice); AVL-202 §7; articolul „Ce este o entitate pentru AI” (`Person`, `sameAs`); structura JSON-LD a site-ului (`src/components/Seo.tsx`) |
| 15. Revizuire și aprobare | AVL-201 §3; AVL-001 §21; pagina auditului AI Visibility („un audit privat nu este transformat automat într-un studiu de caz public”) |
| 16. Confirmarea reprezentantului | AVL-201 §6.4 |
| 17. Istoricul fișei | AVL-MKT-001 §19; AVL200-REQ-013; AVL-201 §20 |
