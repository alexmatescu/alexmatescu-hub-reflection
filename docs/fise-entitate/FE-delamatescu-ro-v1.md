# Fișa entității — Alex Matescu (delamatescu.ro)

`FE-delamatescu-ro-v1` · după [AVL-205](https://delamatescu.ro/lab/metodologie/fisa-entitatii) v0.1.1, revizuită după v0.2.0 (Draft pentru revizuire) · publicată în repository-ul public al site-ului pe 4 noiembrie 2026, la decizia reprezentantului

> **Stare: CONFIRMATĂ DE REPREZENTANT, 4 noiembrie 2026.** Precompletată de Claude pe 4 noiembrie 2026 din surse publice: site-ul delamatescu.ro (`/despre`, `/calatoria`, `/contact`, `/presa`, `/proiecte`, schema `Person` din `src/components/Seo.tsx`), CS-001 Tabula Rasa și planul AVL-203 T0 din 26 octombrie 2026. Revizuită și completată de Alex Matescu în aceeași zi, punct cu punct. Coloana „Stare la `T0`” rămâne `NEVERIFICAT` până la verificarea pe surse (AVL-205 §4, §25.4). Reprezentantul a decis publicarea fișei: datele din ea sunt publice și nu sunt sensibile (4 noiembrie 2026).

> **Completare retroactivă (AVL-205 §17.1).** Fișa a fost completată după T0 Tabula Rasa (2 iulie 2026) și după T0 AVL-203 (26 octombrie 2026). Nu schimbă rezultatele acelor măsurători și nici referința folosită atunci: rularea AVL-203 T0 a folosit doar declarațiile titularului din 25 octombrie 2026 (referința entității și politica crawlere). Fișa e referința pentru punctele următoare.

Coloanele: **Valoare** · **Sursa oficială** · **Stare la `T0`** · **Evidence ID**.

---

## 5. Identificarea fișei

| Câmp | Valoare | Sursa |
| --- | --- | --- |
| ID fișă | `FE-delamatescu-ro-v1` | laborator |
| Versiunea fișei | 1 | laborator |
| ID entitate | `delamatescu-ro`, forma fără punct a domeniului delamatescu.ro, folosită și în seria `AVL203-delamatescu-ro` | planul AVL-203 T0 |
| Relația cu laboratorul | laborator (site propriu) | planul AVL-203 T0 |
| Reprezentantul entității | Alex Matescu, titularul site-ului și persoana descrisă | declarația reprezentantului, 4 nov. 2026 |
| Data completării | 4 noiembrie 2026 | — |
| Responsabilul de metodologie | Alex Matescu | — |
| Operatorul de măsurare | Alex Matescu | AVL-201 §6.2 |
| Conflict de interese | Entitatea măsurată este fondatorul și coordonatorul laboratorului, iar site-ul măsurat este site-ul laboratorului. Se declară în orice rezultat publicat. | AVL-001 §21; CS-001, CS-002 |
| Serviciul contractat | niciunul (măsurare proprie): seria Tabula Rasa (CS-001) și verificarea tehnică AVL-203 (CS-002) | — |

## 6. Tipul entității

| Câmp | Valoare |
| --- | --- |
| Tipul de entitate | persoană |
| Tipul pentru verificarea tehnică | profesionist independent (planul AVL-203 T0) |
| Entități legate care se tratează separat | delamatescu.ro (site) se tratează ca activ oficial al persoanei (§11), nu ca entitate separată. AI Visibility Lab, CRANDIT, afacerea de familie, Taste the Corn și celelalte proiecte sunt relații (§12), fără fișă proprie. |

O singură fișă, pentru persoană, cu site-ul ca sursă canonică. La fel e definită și entitatea din planul T0: „Alex Matescu (delamatescu.ro)”.

## 7. Forma canonică și variantele [min]

| Câmp | Valoare | Sursa oficială | Stare T0 | Evidence ID |
| --- | --- | --- | --- | --- |
| Forma canonică a numelui | Alex Matescu | `/despre`; schema `Person.name` | NEVERIFICAT | — |
| Denumirea legală | Alexandru-Costi Matescu | `/despre` („Mă numesc (Alexandru-Costi) Alex Matescu”) | NEVERIFICAT | — |
| Scrierea cu și fără diacritice | „Matescu”, fără diacritice, inclusiv în acte. „Mătescu” nu este folosită. | `/despre`; declarația reprezentantului, 4 nov. 2026 | NEVERIFICAT | — |

### 7.1. Variante legitime

| Variantă | Tipul | Unde este folosită |
| --- | --- | --- |
| Alex Matescu | numele afișat al contului (identic cu forma canonică) | Facebook (`https://www.facebook.com/alexmatescu`) |
| Alex Matescu | numele afișat al contului (identic cu forma canonică) | LinkedIn (`https://www.linkedin.com/in/alex-matescu-8b2b8813b/`) |
| Alexandru Matescu | nume complet | schema `Person.alternateName` |
| Alexandru-Costi Matescu | nume complet | `/despre`; schema `Person.alternateName` |
| MatescuAlex | nume de cont | X (`@MatescuAlex`) |
| alexmatescu.c | nume de cont | Instagram |

### 7.2. Forme greșite observate

| Formă greșită | Unde apare | Cu cine poate fi confundată |
| --- | --- | --- |
| Alex Mateescu | Google Search rescrie automat „Matescu” în „Mateescu” (CS-001 §16); ChatGPT F1 | alte persoane reale cu numele Mateescu (CS-001 Fig. 2) |
| Alexandru Mateescu | interogarea de dezambiguizare #9 (CS-001) | un avocat, un violonist și un matematician cu acest nume; Gemini l-a contopit cu avocatul (CS-001 §10) |
| Ale Mateescu | variantă apărută în ChatGPT, Claude și Perplexity (query drift, CS-001 §12) | o persoană asociată cu PRO TV |

## 8. Rolul și activitatea [min]

| Câmp | Valoare | Sursa oficială |
| --- | --- | --- |
| Descrierea principală | Alex Matescu este inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor din Sibiu, România. | schema `Person.description`; `/despre` |
| Rolul principal [min] | Fondator și coordonator AI Visibility Lab | schema `Person.jobTitle`; declarația reprezentantului, 4 nov. 2026 |
| Roluri secundare | System Lead Engineer la AUMOVIO, în industria automotive și a sistemelor autonome; antreprenor (co-fondator și administrator al afacerii de familie); autor (CRANDIT, blogul delamatescu.ro) | `/despre`; LinkedIn (AUMOVIO) |
| Domeniul de activitate al serviciilor [min] | AI Visibility: măsurarea și optimizarea vizibilității entităților în sistemele AI și în căutare (GEO, AEO) | `/despre` „Domenii aplicate”; `/lab` |
| Serviciile principale | un singur serviciu: auditul AI Visibility | `/lab/audit-ai-visibility`; planul T0 (`main_offer_count_declared: 1`) |
| Pentru cine lucrează | firme și profesioniști din România care vor să fie descriși corect de motoarele AI | declarația reprezentantului, 4 nov. 2026 |
| Diferențiatori declarați | metodologie publică (AVL-200…205), dovezi publicate cu SHA-256, măsurare longitudinală T0/F1…Fn | `/lab/metodologie` |
| Roluri anterioare | consultant financiar la OVB Allfinanz România (dec. 2021 – dec. 2024); fondator Taste the Corn (ian.–dec. 2025, închis); fondator Atracțiile României (2021–2023); magazin de haine, Craiova (2017) | `/despre`; `/proiecte/*` |

## 9. Locația și piața [min]

| Câmp | Valoare | Sursa oficială |
| --- | --- | --- |
| Țara [min] | România | `/despre` |
| Localitatea [min] | Sibiu | `/despre`; `Person.homeLocation` |
| Adresa publică | nu se publică (persoană fizică) | — |
| Zona deservită | național (România), cu accent pe Sibiu | declarația reprezentantului, 4 nov. 2026 |
| Limbile de comunicare | română | declarația reprezentantului; site-ul are `inLanguage: ro-RO` |
| E-mail public | alexmatescu.c@gmail.com | `/contact` |
| Telefon public | 0736 842 337 | declarația reprezentantului, 4 nov. 2026; `/contact` și `Person.telephone` (modificare pregătită pe 4 nov. 2026, live după deploy; §17) |
| Program | nu se aplică | — |

## 10. Atribute verificabile [min]

| Atribut | Valoare | Sursa oficială | Publicabil |
| --- | --- | --- | --- |
| Începutul activității AI Visibility Lab | iunie 2026 (studii); iulie 2026 (prima rulare, Tabula Rasa T0) | declarația reprezentantului; CS-001 | da |
| Forma juridică | persoană fizică | declarația reprezentantului, 4 nov. 2026 | da |
| Angajator actual | AUMOVIO | LinkedIn; declarația reprezentantului; `/despre` și `Person.worksFor` (modificare pregătită pe 4 nov. 2026, live după deploy; §17) | da |
| Organizații asociate | AI Visibility Lab (fondator, coordonator); afacerea de familie (co-fondator, administrator); Taste the Corn (fondator, închis); restul proiectelor de pe site (§12) | `/despre`; `/proiecte` | da |
| Studii | Automatică și Informatică Aplicată, Facultatea de Automatică, Calculatoare și Electronică din Craiova: licență 2013–2017, master 2017–2020 | `/calatoria` | da |
| Proiecte, publicații | AI Visibility Lab (documente AVL, articole LAB-01…23, CS-001, CS-002); CRANDIT – Mitul succesului peste noapte (în lucru, 2026); blogul delamatescu.ro (din decembrie 2014, relansat în 2025); afacerea de familie; Taste the Corn; Atracțiile României; OVB Allfinanz România; afacerea cu haine | `/proiecte`, `/carte`, `/blog`, `/lab` | da |
| Apariții în presă | 4 articole despre Taste the Corn, 4–5 iulie 2025 (§14) | `/presa` | da |
| Cronologia principală | 2013–2017 licență, Craiova · 2014 blog · 2017 magazin de haine, Craiova · 2017–2020 master · 2021 afacerea de familie (aprilie), Atracțiile României, OVB (decembrie) · 2024 OVB încheiat (decembrie) · 2025 Taste the Corn (ian.–dec.), blog relansat · 2026 AI Visibility Lab (iunie), CRANDIT | `/despre`, `/calatoria` | da |
| Identificatori publici | lipsesc (nu există ORCID, Wikidata sau ISNI) | declarația reprezentantului, 4 nov. 2026 | — |

## 11. Activele oficiale [min]

### 11.1. Site și pagini canonice [min]

| Câmp | Valoare |
| --- | --- |
| Originea canonică | `https://delamatescu.ro`. Varianta `www.delamatescu.ro` e tot oficială și redirecționează aici (§15.1). |
| Pagina principală | `https://delamatescu.ro/` |
| Pagina canonică despre entitate | `https://delamatescu.ro/despre` (`Person.url`, `@id` `https://delamatescu.ro/#alex-matescu`) |
| Pagina de contact | `https://delamatescu.ro/contact` |
| Paginile de servicii | `https://delamatescu.ro/lab/audit-ai-visibility` |
| Paginile de referință | `https://delamatescu.ro/lab`, `https://delamatescu.ro/proiecte`, `https://delamatescu.ro/lab/metodologie` |
| Subdomenii | `www.delamatescu.ro` (variantă, planul T0); niciun alt subdomeniu |
| Alte domenii deținute | `ichnometria.ro` |

### 11.2. Profiluri administrate

| Platformă | URL | Nume afișat | Trimite la site? | În `sameAs`? |
| --- | --- | --- | --- | --- |
| LinkedIn | `https://www.linkedin.com/in/alex-matescu-8b2b8813b/` | Alex Matescu | NEVERIFICAT | da |
| X | `https://x.com/MatescuAlex` | NEVERIFICAT (contul: `@MatescuAlex`) | NEVERIFICAT | da |
| Facebook | `https://www.facebook.com/alexmatescu` | Alex Matescu | NEVERIFICAT | da |
| Instagram | `https://www.instagram.com/alexmatescu.c` | NEVERIFICAT (contul: `alexmatescu.c`) | NEVERIFICAT | da |
| GitHub | `https://github.com/alexmatescu` (repo-ul site-ului și release-urile de dovezi) | NEVERIFICAT (contul: `alexmatescu`) | NEVERIFICAT | nu |
| YouTube, TikTok, Google Business Profile | nu există | — | — | — |
| Pagini de autor | blogul (`/blog`) și secțiunea CRANDIT (`/carte`) de pe delamatescu.ro | Alex Matescu | — | — |

Numele afișat de LinkedIn și Facebook vine din declarația reprezentantului (4 nov. 2026). Pentru X, Instagram și GitHub e trecut doar numele contului, până când e citit numele afișat.

### 11.3. Imagini oficiale

| Câmp | Valoare |
| --- | --- |
| Fotografia de profil | `https://delamatescu.ro/images/AlexMatescu-profile-picture.jpg` |
| Drepturile de utilizare | fotografie proprie, utilizare liberă pe site și pe profiluri |

### 11.4. Acces autorizat pentru măsurare

Reprezentantul este și operatorul de măsurare, deci accesul se face din conturile proprii.

| Instrument | Acces |
| --- | --- |
| Google Search Console | da |
| Bing Webmaster Tools | da |
| Loguri server / CDN (Lovable) | da |
| Analytics | da |

## 12. Relații și ancore de dezambiguizare

| Entitate | Relație | Entitate legată | Sursa care confirmă |
| --- | --- | --- | --- |
| Alex Matescu | locuiește în | Sibiu, România | `/despre` |
| Alex Matescu | deține domeniul | delamatescu.ro | `WebSite.publisher` |
| Alex Matescu | deține domeniul | ichnometria.ro | declarația reprezentantului, 4 nov. 2026 |
| Alex Matescu | este fondator și coordonator al | AI Visibility Lab | `/despre`, `/lab` |
| Alex Matescu | lucrează la | AUMOVIO | LinkedIn; `/despre` (după deploy) |
| Alex Matescu | a studiat la | Facultatea de Automatică, Calculatoare și Electronică din Craiova | `/calatoria` |
| Alex Matescu | este autor al | CRANDIT – Mitul succesului peste noapte | `/carte` |
| Alex Matescu | este co-fondator și administrator al | afacerea de familie (magazin mixt rural) | `/proiecte/afacerea-de-familie` |
| Alex Matescu | a fost fondator al | Taste the Corn (Sibiu, 2025) | `/proiecte/taste-the-corn`; presa |
| Alex Matescu | a fost fondator al | Atracțiile României (2021–2023) | `/proiecte/atractiile-romaniei` |
| Alex Matescu | a lucrat la | OVB Allfinanz România (2021–2024) | `/proiecte/ovb` |

Ancore care au funcționat în CS-001: `AUMOVIO`, `inginer`, `Sibiu`, `delamatescu.ro`.

## 13. Harta coliziunilor

Din CS-001 (T0–F3) și din declarația reprezentantului (4 nov. 2026). Persoanele terțe sunt descrise doar cât să fie distinse și nu se publică fără anonimizare.

| Entitatea | Forma | Ce o distinge | Tipul | Unde a fost observată |
| --- | --- | --- | --- | --- |
| Persoane cu numele Mateescu | Alex Mateescu | alt nume de familie | nume apropiat | Google Search (autocorectare), ChatGPT, Bing |
| Un avocat | Alexandru Mateescu | profesie juridică, firmă de avocatură | nume apropiat | Gemini (contopire), Bing |
| Un violonist | Alexandru Mateescu | muzică | nume apropiat | declarația reprezentantului |
| Un matematician | Alexandru Mateescu | matematică, mediul academic | nume apropiat | declarația reprezentantului |
| O persoană asociată cu PRO TV | Ale Mateescu | media | nume apropiat | ChatGPT, Claude, Perplexity |
| Un fotbalist | Alexandru Matescu | sport | omonim | Bing |
| Profesioniști LinkedIn fără legătură | Alexandru Matescu / Alex Mateescu | alte orașe și domenii | omonim / nume apropiat | Bing |

## 14. Prezența distribuită

Toate sursele de mai jos sunt confirmate de reprezentant și documentate pe site, la `/presa` (declarația reprezentantului, 4 nov. 2026).

| Sursa | URL | Data | Controlată? | Ce afirmă | Link la site? | Acțiune propusă |
| --- | --- | --- | --- | --- | --- | --- |
| Economedia | economedia.ro/un-tanar-inginer-din-sibiu-… | 2025-07-04 | independentă | inginer din Sibiu, lansează Taste the Corn | NEVERIFICAT | — |
| Turnul Sfatului | turnulsfatului.ro/2025/07/04/… | 2025-07-04 | independentă | idem, Shopping City Sibiu | NEVERIFICAT | — |
| A.M. Press | ampress.ro/de-la-inginer-in-oras-… | 2025-07-04 | independentă | preluare | NEVERIFICAT | — |
| Sabotorii | sabotorii.ro/articol/a-dat-lovitura-… | 2025-07-05 | independentă | preluare | NEVERIFICAT | — |
| GitHub Releases (dovezile AVL) | `https://github.com/alexmatescu/alexmatescu-hub-reflection/releases` | 2026 | controlată | pachetele de dovezi | — | — |

## 15. Politica crawlere [min]

| Câmp | Valoare |
| --- | --- |
| Opțiunea reprezentantului | acceptă recomandarea: acces total pentru toate crawlerele (căutare, antrenare, fetch la cererea utilizatorului) |
| Domeniul de aplicare | tot site-ul |
| Sursa și data declarației | declarația titularului, 25 octombrie 2026 (planul AVL-203 T0, `entity_sheet`), reconfirmată pe 4 noiembrie 2026 |

### 15.1. Indexare și răspunsuri intenționate

| Pagina sau zona | Indexată? | Răspuns intenționat | Motiv |
| --- | --- | --- | --- |
| toate paginile din planul T0 | da | — | declarația din 25 oct. 2026 |
| `/admin/*` (abonați, mesaje, CRANDIT) | nu | — | zonă administrativă |
| `www.delamatescu.ro` | — | redirect către `https://delamatescu.ro` | origine canonică |

## 16. Ce vrea entitatea să i se recunoască

| Câmp | Valoare |
| --- | --- |
| Întrebările pentru care vrea să apară | „Cine este Alex Matescu?”, „cine face audit AI Visibility în România?”, „ce este AI Visibility Lab?” |
| Ce ar trebui să spună un răspuns corect | (1) inginer din Sibiu; (2) fondator și coordonator AI Visibility Lab; (3) face audit AI Visibility; (4) autor al CRANDIT; (5) site-ul delamatescu.ro |
| Informații greșite deja observate | contopirea cu un avocat (Gemini, F1); confabulare la interogarea generică (Gemini, F1); autocorectarea în „Mateescu” (Google). Toate din CS-001. |
| Recomandarea pentru care vrea să fie aleasă | specialist în AI Visibility / GEO în România |
| Piața și limbile | România, în special Sibiu; limba română |
| Motoarele de interes | ChatGPT, Claude, Gemini, Perplexity, Copilot, Google Search, Google AI Mode, Bing |

## 17. Angajamente pentru durata `T0`

T0 Tabula Rasa (2 iulie 2026) și T0 AVL-203 (26 octombrie 2026) au fost închise înainte de această fișă. Fișa e completată după ele, ca referință pentru F4 și pentru rulările următoare.

| Câmp | Valoare |
| --- | --- |
| Forma înghețului | îngheț al identității, conținut nou permis (AVL-205 §17): numele, rolul, profilurile și datele structurate rămân stabile; articolele și documentația se pot adăuga |
| Declarația de îngheț | din iunie 2026 până în prezent |
| Schimbări deja programate | (1) se adaugă în continuare articole, metodologie și documentație AI Visibility Lab; (2) din fișă, pregătite pe 4 nov. 2026, live la deploy (data deploy-ului se notează aici): angajatorul AUMOVIO pe `/despre` („Profesie”), în `llms.txt` și în `Person.worksFor`; telefonul 0736 842 337 pe `/contact`, în `llms.txt` și în `Person.telephone`; e-mailul în `Person.email` (pe `/contact` era deja). Toate privesc identitatea, deci se raportează ca schimbări ale sursei canonice între F3 și F4. |

## 18. Informații pentru website

Nu se aplică acum ca serviciu. Concluzia din fișă: schema `Person` de pe site acoperă deja `name`, `alternateName`, `description`, `jobTitle`, `url`, `homeLocation`, `knowsAbout` și `sameAs`. Răspunsurile de mai sus aduc patru propuneri de completare.

| Informație | Proprietate | Valoare | Stare |
| --- | --- | --- | --- |
| Angajatorul | `worksFor` | AUMOVIO, vizibil pe `/despre` | aprobat de reprezentant 4 nov. 2026; pregătit, live după deploy |
| E-mailul | `email` | alexmatescu.c@gmail.com, vizibil pe `/contact` | aprobat de reprezentant 4 nov. 2026; pregătit, live după deploy |
| Telefonul | `telephone` | `+40736842337`, vizibil pe `/contact` ca 0736 842 337 | aprobat de reprezentant 4 nov. 2026; pregătit, live după deploy |
| Fotografia | `image` | `https://delamatescu.ro/images/AlexMatescu-profile-picture.jpg` | neaplicată (necerută) |

Datele structurate descriu doar ce apare vizibil pe pagină, deci `worksFor` și `telephone` cer și textul vizibil.

## 19–21. Aprobare, confirmare, istoric

| Câmp | Valoare |
| --- | --- |
| Confirmarea reprezentantului | confirmat integral, 4 noiembrie 2026 |
| Semnături | Alex Matescu (reprezentant și responsabil de metodologie), 4 noiembrie 2026 |
| Istoric | v1 — 4 noiembrie 2026: precompletată de Claude din surse publice, revizuită și completată de reprezentant în aceeași zi; în aceeași zi s-au adăugat coloana „Nume afișat” (§11.2), modificările planificate pe site (§17, §18), forma înghețului și nota de completare retroactivă, iar fișa a fost publicată |

---

## Observații din completare (pentru AVL-205 §25.1)

1. **Rolul principal diferă între surse.** `jobTitle` din schema `Person` spune „Fondator și coordonator AI Visibility Lab”, iar `/despre` spune la „Profesie” „System Lead Engineer”. Câmpul „Rolul principal” cere unul singur. Decizia reprezentantului: „Fondator și coordonator AI Visibility Lab”.
2. **Angajatorul (AUMOVIO)** e o ancoră care funcționează în motoare, dar nu apare pe site. Fișa nu are un loc pentru o „ancoră folosită de motoare, dar absentă din sursa canonică”. Acum apare doar indirect, în §12. Decizia reprezentantului: se trece în fișă și pe site.
3. **Persoană + site.** §6 cere ca entitățile legate să fie tratate separat, dar planul AVL-203 măsoară site-ul. Soluția din această fișă (persoana, cu site-ul ca activ) merge pentru un profesionist independent. La o firmă cu mai multe site-uri s-ar putea să nu mai meargă.
4. **Fișa vine după T0.** §17 presupune că fișa precede T0. Pentru seriile deja începute ar ajuta o notă despre completarea retroactivă.
5. **Înghețul nu e total.** Declarația de îngheț (din iunie 2026 până în prezent) coexistă cu adăugarea continuă de articole și documentație. §17 nu are încă o formă pentru „îngheț al identității (nume, rol, profiluri, date structurate), cu conținut nou permis”. E de clarificat dacă așa trebuie citit înghețul pentru F4.
6. **Numele afișat al profilurilor.** AVL-205 §11.2 cere deja, în text, numele afișat pentru fiecare profil („se notează URL-ul, numele afișat, descrierea (bio)…”), dar tabelul §11.2 nu are coloane pentru aceste informații. În fișa de față am adăugat coloana „Nume afișat”. În AVL-205, tabelul ar putea primi coloanele pe care textul le cere deja. Rândurile Facebook și LinkedIn rămân și în 7.1, la cererea reprezentantului.

**Ce a preluat AVL-205 0.2.0 (4 noiembrie 2026):** observația 3 (§6, o singură fișă pentru profesionistul independent), observațiile 4 și 5 (§17, forma înghețului între punctele de măsurare, și §17.1, completarea retroactivă), observația 6 (§11.2, ce se notează pentru fiecare profil). Observațiile 1 și 2 rămân deschise (AVL-205 §25, decizia 1).
