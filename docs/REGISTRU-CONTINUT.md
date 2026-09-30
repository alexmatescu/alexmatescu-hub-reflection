# Registru de conținut — delamatescu.ro

> **Fișier generat. Nu-l edita de mână.** Se regenerează cu
> `node scripts/build-content-registry.mjs`, din sursele de adevăr reale
> (`blogger-posts.json`, `posts.ts`, `labArticleMeta`, `labCaseStudyMeta`,
> tabelele `avl-meta-table` din `avl-*.ts`) plus istoricul git și
> `public/sitemap.xml`. O modificare făcută aici se pierde la următoarea rulare;
> corectează sursa, nu registrul.

Generat: 2026-09-30 · 162 intrări · **21 anomalii** în 10 intrări

## Sinteză

| Suprafață | Publicat | Draft / nepublicat | Total | Anomalii |
|---|--:|--:|--:|--:|
| `lab/articole` | 14 | 1 | 15 | 20 |
| `lab/studii-de-caz` | 1 | 0 | 1 | 0 |
| `lab/metodologie` | 3 | 0 | 3 | 0 |
| `lab/foundation` | 1 | 0 | 1 | 0 |
| `lab/cercetare` | 5 | 0 | 5 | 0 |
| `lab/secțiuni` | 4 | 0 | 4 | 0 |
| `blog` | 1 | 0 | 1 | 0 |
| `blog (arhivă)` | 131 | 0 | 131 | 1 |
| `nealocat` | 0 | 1 | 1 | 0 |
| **Total** | **160** | **2** | **162** | **21** |

## Legendă

- **Wiring** — patru poziții, în ordine: `registru` · `pagină` · `navigație` · `sitemap`.
  `✓` prezent, `✗` lipsă, `·` neaplicabil pentru suprafața respectivă.
  Registru = array-ul sursă (`labArticleMeta`, `labCaseStudyMeta`, `posts.ts`);
  pagină = `labPageContent` din `Lab.tsx`; navigație = `labNav` din `lab.ts`.
- **Creat** — primul commit care a adăugat fișierul sursă (git). `—` pentru articolele
  migrate din Blogger, care nu au fișier sursă propriu și a căror dată de creare nu e recuperabilă.
- **Verificat** — `last_reviewed`, cu numărul de zile scurse. Peste
  180 de zile, materialele din Lab intră în lista de reverificare.

## `lab/articole` — 15 intrări

| ID | Titlu | Categorie | Tip | Status | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `de-la-web-visibility-la-machine-accessibility` | [De la web visibility la machine accessibility: ce se schimbă când AI-ul nu mai doar citește internetul, ci acționează în el?](/lab/articole/de-la-web-visibility-la-machine-accessibility) | AI Visibility | Analiză | draft | 2026-09-30 | — | 2026-09-30 | 2026-09-30 (0z) | `✗✗✗✗` | `src/content/lab/articles/14.de-la-web-visibility-la-machine-accessibility.md` | — |
| `LAB-14` | [AI ca oglindă și amplificator: ce arată raportul Anthropic despre intenție, context și folosirea Claude](/lab/articole/ai-oglinda-amplificator-intentie-context-anthropic) | AI Ecosystem | Analiză | publicat | 2026-09-14 | 2026-09-14 | 2026-09-30 | 2026-09-30 (0z) | `✓✓✓✓` | `src/content/lab/articles/14.ai-oglinda-amplificator-intentie-context-anthropic.md` | `src/data/lab-content/14. ai-oglinda-amplificator-intentie-context-anthropic.ts` |
| `LAB-13` | [Eticheta „Abonat”: cum folosește Google relația cu publicul pentru a evidenția surse în AI Search](/lab/articole/eticheta-abonat-relatia-prezentare-ai-search) | Entities & Citations | Analiză | publicat | 2026-08-27 | 2026-08-27 | 2026-08-27 | 2026-08-27 (34z) | `✓✓✓✓` | `src/content/lab/articles/13.eticheta-abonat-relatia-prezentare-ai-search-revizuit.md` | `src/data/lab-content/13. eticheta-abonat-relatia-prezentare-ai-search.ts` |
| `LAB-11` | [Harta de citare: cum afli empiric ce surse contează pentru vizibilitatea AI în România](/lab/articole/harta-de-citare-mentiuni-externe-romania) | Entities & Citations | Ghid / Analiză metodologică | publicat | 2026-08-13 | 2026-08-19 | 2026-08-19 | 2026-08-19 (42z) | `✓✓✓✓` | `src/content/lab/articles/11.harta-de-citare-mentiuni-externe-romania.md` | `src/data/lab-content/11. harta-de-citare-mentiuni-externe-romania.ts` |
| `LAB-12` | [407 lansări AI urmărite în șapte luni, 17,8% utilizare: decalajul dintre viteza AI și viteza societății în 2026](/lab/articole/decalaj-viteza-ai-adoptie-2026) | AI Ecosystem | Analiză | publicat | 2026-08-14 | 2026-08-19 | 2026-08-19 | 2026-08-19 (42z) | `✓✓✓✓` | `src/content/lab/articles/12.decalaj-viteza-ai-adoptie-2026.md` | `src/data/lab-content/12. decalaj-viteza-ai-adoptie-2026.ts` |
| `LAB-08` | [Cuvânt-cheie vs frază în AI Search: query rewriting, tokenizare și ce putem spune corect despre limba română](/lab/articole/cuvant-cheie-vs-fraza-tokenizare) | Search & Retrieval | Analiză | publicat | 2026-08-13 | 2026-08-19 | 2026-08-19 | 2026-08-19 (42z) | `✓✓✓✓` | `src/content/lab/articles/8.cuvant-cheie-vs-fraza-tokenizare.md` | `src/data/lab-content/8. cuvant-cheie-vs-fraza-tokenizare.ts` |
| `LAB-09` | [Paradoxul specificității: când contextul schimbă răspunsul și când doar fragmentează conținutul](/lab/articole/paradoxul-specificitatii-continut-generic) | Search & Retrieval | Analiză | publicat | 2026-08-13 | 2026-08-19 | 2026-08-19 | 2026-08-19 (42z) | `✓✓✓✓` | `src/content/lab/articles/9.paradoxul-specificitatii-continut-generic.md` | `src/data/lab-content/9. paradoxul-specificitatii-continut-generic.ts` |
| `LAB-07` | [Ce poți citi și ce poți schimba la un site fără acces la cod: ghid de audit din exterior](/lab/articole/audit-site-fara-acces-cod) | Technical Visibility | Ghid | publicat | 2026-08-13 | 2026-08-18 | 2026-08-18 | 2026-08-18 (43z) | `✓✓✓✓` | `src/content/lab/articles/7.audit-site-fara-acces-cod.md` | `src/data/lab-content/7. audit-site-fara-acces-cod.ts` |
| `LAB-01` | [Istoria căutării pe internet: cum fiecare eră a creat un punct orb pe care optimizarea a încercat să-l exploateze](/lab/articole/istoria-cautarii-internet-evolutia-seo) | Search & Retrieval | Analiză | publicat | 2026-08-13 | 2026-08-14 | 2026-08-14 | — | `✓✓✓✓` | `src/content/lab/articles/1.istoria-cautarii-internet-evolutia-seo.md` | `src/data/lab-content/1. istoria-cautarii-internet-evolutia-seo.ts` |
| `LAB-02` | [Motoarele de căutare comparate în 2026: cifrele care se contrazic, deciziile care au schimbat clasamentul și oamenii din spatele lor](/lab/articole/motoare-cautare-comparatie-2026) | Search & Retrieval | Analiză | publicat | 2026-08-13 | 2026-08-14 | 2026-08-14 | — | `✓✓✓✓` | `src/content/lab/articles/2.motoare-cautare-comparatie-2026.md` | `src/data/lab-content/2. motoare-cautare-comparatie-2026.ts` |
| `LAB-03` | [De ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI](/lab/articole/social-media-vizibilitate-ai) | Entities & Citations | Analiză | publicat | 2026-08-13 | 2026-08-14 | 2026-09-04 | — | `✓✓✓✓` | `src/content/lab/articles/3.social-media-vizibilitate-ai.md` | `src/data/lab-content/3. social-media-vizibilitate-ai.ts` |
| `LAB-10` | [Ce este o entitate pentru AI și motoarele de căutare. Studiu de caz: de ce internetul mă asociază cu porumbul](/lab/articole/ce-este-entitate-ai-studiu-de-caz) | Entities & Citations | Analiză de caz | publicat | 2026-08-13 | 2026-08-05 | 2026-08-11 | 2026-08-19 (42z) | `✓✓✓✓` | `src/content/lab/articles/10.ce-este-entitate-ai-studiu-de-caz.md` | `src/data/lab-content/10. ce-este-entitate-ai-studiu-de-caz.ts` |
| `LAB-04` | [Cât durează până apari în Google și cât până te citează AI-ul? Ce știm, ce nu știm și ce poți măsura](/lab/articole/cat-dureaza-indexare-citare-ai) | Search & Retrieval | Analiză | publicat | 2026-08-13 | 2026-08-05 | 2026-08-10 | — | `✓✓✓✓` | `src/content/lab/articles/4.cat-dureaza-indexare-citare-ai.md` | `src/data/lab-content/4. cat-dureaza-indexare-citare-ai.ts` |
| `LAB-05` | [Paradoxul site-ului terminat: același URL poate arăta diferit pentru om, crawler și instrumentul de audit](/lab/articole/paradoxul-site-ului-terminat) | Technical Visibility | Analiză de caz | publicat | 2026-08-13 | 2026-08-05 | 2026-08-10 | — | `✓✓✓✓` | `src/content/lab/articles/5.paradoxul-site-ului-terminat.md` | `src/data/lab-content/5. paradoxul-site-ului-terminat.ts` |
| `LAB-06` | [Metadata și citarea AI: ce poate demonstra o citare identică și unde începe inferența](/lab/articole/metadata-citare-ai-studiu-de-caz) | Technical Visibility | Analiză de caz | publicat | 2026-08-13 | 2026-08-05 | 2026-08-10 | 2026-08-17 (44z) | `✓✓✓✓` | `src/content/lab/articles/6.metadata-citare-ai-studiu-de-caz.md` | `src/data/lab-content/6. metadata-citare-ai-studiu-de-caz.ts` |

## `lab/studii-de-caz` — 1 intrare

| ID | Titlu | Categorie | Tip | Status | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `CS-001` | [Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz) | Entities & Citations | Analiză de caz | publicat | 2026-09-04 | 2026-09-04 | 2026-09-18 | 2026-09-18 (12z) | `✓✓✓✓` | `src/content/studii de caz/01. Alex Matescu/tabula-rasa-entity-resolution-studiu-de-caz.md` | `src/data/lab-content/tabula-rasa-entity-resolution-studiu-de-caz.ts` |

## `lab/metodologie` — 3 intrări

| ID | Titlu | Nivel | Ver. | Statut | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `AVL-200` | AVL-200 — Standardul de dovezi, măsurare și trasabilitate | C — Methodology | 1.0.0 | Activ | 2026-09-13 | 2026-09-14 | 2026-09-14 | 2026-09-14 | `·✓✓✓` | `src/content/lab/AVL/AVL-200_Standard_dovezi_masurare_trasabilitate.md` | `src/data/lab-content/avl-200.ts` |
| `AVL-202` | AVL-202 — Cadrul metodologic AI Visibility Lab | C — Methodology | 1.1.0 | Activ | 2026-09-14 | 2026-09-14 | 2026-09-30 | 2026-09-30 | `·✓✓✓` | `src/content/lab/AVL/AVL-202_Cadrul-metodologic-AI-Visibility-Lab.md` | `src/data/lab-content/avl-202.ts` |
| `AVL-201` | AVL-201 — Tabula Rasa F0: Baseline Measurement Specification | C — Methodology | 1.1.1 | Activ | 2026-07-22 | 2026-07 | 2026-09-14 | — | `·✓✓✓` | `src/content/lab/AVL/AVL-201_Tabula_Rasa_F0_Baseline_Measurement_Specification_v1.0.1.md` | `src/data/lab-content/avl-201.ts` |

## `lab/foundation` — 1 intrare

| ID | Titlu | Nivel | Ver. | Statut | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `AVL-001` | AVL-001 — AI Visibility Lab Foundation | A — Foundation | 1.2.0 | Activ | 2026-07-22 | 2026-07 | 2026-09-30 | — | `·✓✓✓` | `src/content/lab/AVL/AVL-001_AI_Visibility_Lab_Foundation_v1.0.1.md` | `src/data/lab-content/avl-001.ts` |

## `lab/cercetare` — 5 intrări

| ID | Titlu | Nivel | Ver. | Statut | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `AVL-101` | AVL-101 — Ce este GEO/AEO și AI Visibility | B — Research | 1.0.2 | Activ | 2026-07-22 | 2026-07 | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AI_Visibility_Lab_Nivel_B_Research_AVL-101-105_v1.0.2.md` | `src/data/lab-content/avl-101.ts` |
| `AVL-102` | AVL-102 — Cum aleg sistemele AI sursele și citările | B — Research | 1.0.2 | Activ | 2026-07-22 | 2026-07 | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AI_Visibility_Lab_Nivel_B_Research_AVL-101-105_v1.0.2.md` | `src/data/lab-content/avl-102.ts` |
| `AVL-103` | AVL-103 — SEO și GEO: relații, diferențe și suprapuneri | B — Research | 1.0.2 | Activ | 2026-07-22 | 2026-07 | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AI_Visibility_Lab_Nivel_B_Research_AVL-101-105_v1.0.2.md` | `src/data/lab-content/avl-103.ts` |
| `AVL-104` | AVL-104 — Cum se măsoară AI Visibility | B — Research | 1.0.2 | Activ | 2026-07-22 | 2026-07 | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AI_Visibility_Lab_Nivel_B_Research_AVL-101-105_v1.0.2.md` | `src/data/lab-content/avl-104.ts` |
| `AVL-105` | AVL-105 — Glosar GEO/AEO și AI Visibility | B — Research | 1.1.0 | Activ | 2026-07-22 | 2026-07 | 2026-09-04 | — | `·✓✓✓` | `src/content/lab/AVL/AI_Visibility_Lab_Nivel_B_Research_AVL-101-105_v1.0.2.md` | `src/data/lab-content/avl-105.ts` |

## `lab/secțiuni` — 4 intrări

| ID | Titlu | Nivel | Ver. | Statut | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `AVL-350` | AVL-350 — Studii de caz | D2 — Case Studies | 1.3.0 | Activ | 2026-09-04 | — | 2026-09-04 | — | `·✓✓✓` | — | `src/data/lab-content/avl-350.ts` |
| `AVL-301` | AVL-301 — Experimente publice | D — Experimente publice | 1.1.0 | În pregătire | 2026-07-22 | — | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AVL-301_Nivel_D_AI_Visibility_Lab_Experimente_publice_v1.0.0.docx.md` | `src/data/lab-content/avl-301.ts` |
| `AVL-401` | AVL-401 — Articole | E — Articole | 2.0.1 | În derulare | 2026-07-22 | — | 2026-08-26 | — | `·✓✓✓` | `src/content/lab/AVL/AVL-401_Nivel_E_Articole_v2.0.0.md` | `src/data/lab-content/avl-401.ts` |
| `AVL-501` | AVL-501 — Despre AI Visibility Lab | F — Despre laborator | 1.2.0 | Activ | 2026-07-22 | — | 2026-09-04 | — | `·✓✓✓` | `src/content/lab/AVL/AVL-501_Nivel_F_Despre_AI_Visibility_Lab_AEO.md` | `src/data/lab-content/avl-501.ts` |

## `blog` — 1 intrare

| ID | Titlu | Categorie | Tip | Status | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `o-lume-prea-mare-pentru-un-singur-om` | [O lume prea mare pentru un singur om](/blog/o-lume-prea-mare-pentru-un-singur-om) | Reflecții | Reflecție | publicat | 2026-08-31 | 2026-08-30 | 2026-08-30 | — | `✓✓·✓` | `src/content/blog/o-lume-prea-mare-pentru-un-singur-om.md` | `src/data/blog-content/o-lume-prea-mare-pentru-un-singur-om.ts` |

## `blog (arhivă)` — 131 intrări

| Slug | Titlu | Categorie | Status | Publicat | Modificat | Wiring | Anomalii |
|---|---|---|---|---|---|---|--:|
| `vasla-si-curentul` | Vâsla și curentul | Reflecții | publicat | 2026-08-11 | 2026-08-11 | `✓✓·✓` | — |
| `cifrul-succesului-definitie-personala` | Cifrul succesului: de ce succesul este diferit pentru fiecare om | Reflecții | publicat | 2026-07-18 | 2026-07-18 | `✓✓·✗` | 1 |
| `informatia-care-exista-dar-nu-poate-fi-gasita` | Informația care există, dar nu poate fi găsită | Reflecții | publicat | 2026-07-17 | — | `✓✓·✓` | — |
| `costul-invizibil-al-istoriei` | Costul invizibil al istoriei | Reflecții | publicat | 2026-07-16 | — | `✓✓·✓` | — |
| `ritm-vechi-viata-noua-alegeri-vara` | Când mi-am dat seama că nu pierdusem ritmul, ci încercam să trăiesc cu un ritm vechi într-o viață nouă | Reflecții | publicat | 2026-06-29 | — | `✓✓·✓` | — |
| `sua-europa-si-diferentele-care` | SUA, Europa și diferențele care construiesc lumea | Reflecții | publicat | 2026-05-17 | — | `✓✓·✓` | — |
| `identitatea-si-integritatea-de-ce-nu-te` | Identitatea și integritatea: de ce nu te salvează imaginea pe care o construiești, ci omul care rămâne întreg în ea | Experienţe | publicat | 2026-05-09 | — | `✓✓·✓` | — |
| `aceeasi-linie-generatii-diferite` | Aceeași linie, generații diferite: românii care duc lucrurile până la capăt | Reflecții | publicat | 2026-05-04 | — | `✓✓·✓` | — |
| `directia-si-disciplina-de-ce-nu-e` | Direcția și disciplina: de ce nu e suficient să muncești mult și cum se transformă alegerea într-un drum real | Experienţe | publicat | 2026-04-30 | — | `✓✓·✓` | — |
| `norocul-si-navigarea-de-ce-munca-nu` | Norocul și navigarea: de ce munca nu garantează rezultatul, dar te face capabil să folosești ce apare | Experienţe | publicat | 2026-04-26 | — | `✓✓·✓` | — |
| `asimetria-si-actiunea-de-ce-la-inceput` | Asimetria și acțiunea: de ce, la început, dai mult și primești puțin și de ce exact asta te poate forma | Experienţe | publicat | 2026-04-19 | — | `✓✓·✓` | — |
| `rabdarea-si-repetitia-de-ce-majoritatea` | Răbdarea și repetiția: de ce majoritatea oamenilor nu pierd pentru că nu pot, ci pentru că nu rezistă suficient | Experienţe | publicat | 2026-04-11 | — | `✓✓·✓` | — |
| `traditiile-nu-sunt-despre-trecut-sunt` | Tradițiile nu sunt despre trecut. Sunt despre cum să nu te pierzi pe tine | Habits | publicat | 2026-04-11 | — | `✓✓·✓` | — |
| `costurile-reale-ale-lucrurilor` | Costurile reale ale lucrurilor importante: de ce claritatea valorează mai mult decât ambiția | Experienţe | publicat | 2026-04-05 | — | `✓✓·✓` | — |
| `influenta-anturajului-cum-te-schimba` | Influența anturajului: cum te schimbă oamenii din jur și cum îți afectează potențialul | Experienţe | publicat | 2026-03-29 | — | `✓✓·✓` | — |
| `instrumentele-invizibile-ale-succesului` | Instrumentele invizibile ale succesului și adevărata formă de siguranță | Habits | publicat | 2026-03-13 | — | `✓✓·✓` | — |
| `razboaiele-nu-incep-din-ura-incep-din` | Războaiele nu încep din ură. Încep din frică. Despre continuitatea conflictului uman în ultimele două milenii | Leadership | publicat | 2026-03-02 | — | `✓✓·✓` | — |
| `atentia-devenit-noua-moneda-iar-noi-o` | Atenția a devenit noua monedă. Iar noi o cheltuim reacționând | Experienţe | publicat | 2026-02-28 | — | `✓✓·✓` | — |
| `jobul-tau-nu-e-problema-povestea-pe` | Jobul tău nu e problema. Povestea pe care ți-o spui despre el este. | Leadership | publicat | 2026-02-12 | — | `✓✓·✓` | — |
| `somn-miscare-hrana-baza-ignorata` | Somn, mișcare, hrană: baza ignorată a echilibrului mental | Sfaturi utile | publicat | 2026-01-24 | — | `✓✓·✓` | — |
| `stiinta-inteligenta-si-paradoxul` | Știința, inteligența și paradoxul prezentului: unde suntem ca omenire? | Reflecții | publicat | 2026-01-11 | — | `✓✓·✓` | — |
| `despre-reintregire-acasa-si-sensul` | Despre reîntregire, acasă și sensul Crăciunului | Habits | publicat | 2025-12-24 | — | `✓✓·✓` | — |
| `de-ce-pentru-romani-traditiile-au-fost` | De ce pentru români tradițiile au fost mai mult decât decor | Habits | publicat | 2025-12-18 | — | `✓✓·✓` | — |
| `ritualuri-traditii-si-identitate-ce` | Ritualuri, tradiții și identitate - Ce sunt, de fapt, tradițiile | Habits | publicat | 2025-12-15 | — | `✓✓·✓` | — |
| `adevar-spectacol-si-responsabilitate-ce` | Adevăr, spectacol și responsabilitate: ce facem după investigații? | Articol | publicat | 2025-12-12 | — | `✓✓·✓` | — |
| `cand-rasul-nu-cauta-aprobarea-ci` | 🎭 Când râsul nu caută aprobarea, ci încearcă să șteargă riscul | Leadership | publicat | 2025-12-12 | — | `✓✓·✓` | — |
| `rasul-de-evitare-conflictului-de-ce` | 🎭 Râsul de evitare a conflictului: De ce zâmbim când nu vrem să rănim | Sfaturi utile | publicat | 2025-12-11 | — | `✓✓·✓` | — |
| `rasul-ca-neutralizare-vinovatiei-sau-ca` | 🎭 Râsul ca neutralizare a vinovăției sau ca menținere a scenei sociale | Leadership | publicat | 2025-12-10 | — | `✓✓·✓` | — |
| `rasul-ca-bilet-de-intrare-in-grup-sau` | 🎭 Râsul ca bilet de intrare în grup sau ca element de acceptare | Leadership | publicat | 2025-12-09 | — | `✓✓·✓` | — |
| `rasul-nu-e-umor-e-supravietuire-sociala` | 🎭 Râsul nu e umor. E supraviețuire socială. | Leadership | publicat | 2025-12-08 | — | `✓✓·✓` | — |
| `dincolo-de-umbre-cum-ne-am-pierdut` | 🧠 Dincolo de umbre: cum ne-am pierdut realitatea în zgomot și am uitat să simțim | Reflecții | publicat | 2025-12-05 | — | `✓✓·✓` | — |
| `cand-motivatia-nu-mai-e-necesara-de-ce` | 🚀 Când motivația nu mai e necesară De ce adevărata schimbare începe abia după ce nu mai ai nevoie să te „motivezi” | Reflecții | publicat | 2025-12-04 | — | `✓✓·✓` | — |
| `cand-faci-lucrurile-pentru-binele-tau` | Când faci lucrurile pentru binele tău, motivația devine irelevantă | Reflecții | publicat | 2025-12-03 | — | `✓✓·✓` | — |
| `oameni-care-traiesc-pe-pilot-automat` | 🚶 Oameni care trăiesc pe pilot automat (Până când corpul nu mai poate prelua comanda) | Reflecții | publicat | 2025-12-02 | — | `✓✓·✓` | — |
| `toata-lumea-urmareste-motivatie-dar` | 🎬 Toată lumea urmărește motivație. Dar aproape nimeni nu face nimic. | Reflecții | publicat | 2025-12-01 | — | `✓✓·✓` | — |
| `de-ce-ordinea-si-disciplina-sunt-teren` | ⚡️ De ce ordinea și disciplina sunt teren fertil pentru liniște (și de ce încep din seara de dinainte) | Reflecții | publicat | 2025-11-28 | — | `✓✓·✓` | — |
| `dimineata-lenesa-ce-se-intampla-de-fapt` | 🌫️ Dimineața leneșă — ce se întâmplă, de fapt, în tine | Reflecții | publicat | 2025-11-27 | — | `✓✓·✓` | — |
| `cum-iti-setezi-energia-pentru-ziua-care` | ☀️ Cum îți setezi energia pentru ziua care abia începe | Reflecții | publicat | 2025-11-26 | — | `✓✓·✓` | — |
| `stii-ce-ti-face-bine-dar-nu-o-faci` | ⚡️ Știi ce-ți face bine. Dar nu o faci. | Reflecții | publicat | 2025-11-25 | — | `✓✓·✓` | — |
| `roluri-masti-si-fragmente-de-identitate` | 🎭 Roluri, măști și fragmente de identitate | Reflecții | publicat | 2025-11-24 | — | `✓✓·✓` | — |
| `teoriile-conspiratiei-cand-frica-devine` | 🌀 Teoriile conspirației — când frica devine poveste | Jurnal de bord | publicat | 2025-11-21 | — | `✓✓·✓` | — |
| `de-ce-purtam-razboaie-sociale` | ⚔️ De ce purtăm războaie sociale | Jurnal de bord | publicat | 2025-11-20 | — | `✓✓·✓` | — |
| `razboaiele-neoficiale-ego-creier-si` | ⚔️ Războaiele neoficiale — ego, creier și reflexul conflictului | Jurnal de bord | publicat | 2025-11-19 | — | `✓✓·✓` | — |
| `uneori-pacea-interioara-nu-vine-dupa-ce` | ⚖️ Uneori, pacea interioară nu vine după ce învingi. Vine când încetezi să mai lupți | Jurnal de bord | publicat | 2025-11-18 | — | `✓✓·✓` | — |
| `ne-credem-moderni-functionam-tribal` | Ne credem moderni. Funcționăm tribal | Jurnal de bord | publicat | 2025-11-17 | — | `✓✓·✓` | — |
| `spirala-invatarii-arta-de-te-reinventa` | 🧭 Spirala învățării – Arta de a te reinventa | Experienţe | publicat | 2025-11-15 | — | `✓✓·✓` | — |
| `nu-stii-ca-stii-despre-maiestrie` | 🧭 „Nu știi că știi” - Despre măiestrie, identitate și arta de a repeta până devii | Experienţe | publicat | 2025-11-14 | — | `✓✓·✓` | — |
| `stii-ca-stii-despre-incredere-curba` | 🧭 „Știi că știi” - Despre încredere, curba performanței și echilibrul fragil dintre stres și flow | Experienţe | publicat | 2025-11-13 | — | `✓✓·✓` | — |
| `stii-ca-nu-stii-prima-victorie` | 🧭 Știi că nu știi — prima victorie împotriva ego-ului | Experienţe | publicat | 2025-11-12 | — | `✓✓·✓` | — |
| `nu-stii-ca-nu-stii-despre-inceputul` | 🧭 Nu știi că nu știi — despre începutul oricărei învățări reale | Experienţe | publicat | 2025-11-11 | — | `✓✓·✓` | — |
| `cum-invatam-cu-adevarat-si-de-ce-nu-e` | 🧭 Cum învățăm cu adevărat — și de ce nu e despre a ști mai mult | Sfaturi utile | publicat | 2025-11-10 | — | `✓✓·✓` | — |
| `e-mandru-alex-de-la-18-ani-de-alex-de` | E mândru Alex de la 18 ani de Alex de la 31? | Reflecții | publicat | 2025-11-07 | — | `✓✓·✓` | — |
| `convingerea-un-organism-viu-care` | Convingerea – un organism viu care trăiește în simbioză | Reflecții | publicat | 2025-11-06 | — | `✓✓·✓` | — |
| `cand-iti-dovedesti-ca-poti-puterea` | Când îți dovedești că poți: puterea precedentului bun | Reflecții | publicat | 2025-11-05 | — | `✓✓·✓` | — |
| `principiul-precedentului-creat-cand-o` | Principiul precedentului creat. Când „o singură dată” devine cine ești | Habits | publicat | 2025-11-04 | — | `✓✓·✓` | — |
| `dincolo-de-bun-si-rau-cum-sa-traiesti` | Dincolo de „bun” și „rău”: cum să trăiești, să gândești și să decizi cu mai multă claritate | Leadership | publicat | 2025-11-03 | — | `✓✓·✓` | — |
| `eroismul-post-fapt-si-povestea-frumoasa` | Eroismul post-fapt — și povestea frumoasă care acoperă haosul real | Leadership | publicat | 2025-10-31 | — | `✓✓·✓` | — |
| `managerii-care-sting-focuri-dar-nu` | 🔥 Managerii care sting focuri, dar nu aprind flăcări – despre frică, protecție și leadershipul real | Leadership | publicat | 2025-10-30 | — | `✓✓·✓` | — |
| `mentalitatea-mediocrului-vs` | 🧠 Mentalitatea mediocrului vs. mentalitatea performerului – ce ne arată detaliile invizibile | Leadership | publicat | 2025-10-29 | — | `✓✓·✓` | — |
| `cand-succesul-nu-aduce-sens` | Când succesul nu aduce sens | Reflecții | publicat | 2025-10-28 | — | `✓✓·✓` | — |
| `problema-vs-provocarea-cum-le-deosebim` | Problema vs Provocarea – Cum le deosebim și de ce contează | Experienţe | publicat | 2025-10-27 | — | `✓✓·✓` | — |
| `regizor-de-circ-intr-o-arena-goala` | Regizor de circ într-o arenă goală | Experienţe | publicat | 2025-10-24 | — | `✓✓·✓` | — |
| `de-ce-ai-nevoie-de-un-hobby-si-cum-iti` | De ce ai nevoie de un hobby – și cum îți poate transforma viața profesională | Jurnal de bord | publicat | 2025-10-23 | — | `✓✓·✓` | — |
| `epilogul-seriei-anatomia-declinului` | 📘 Epilogul seriei „Anatomia declinului” - Ciclurile istoriei și viitorul nostru | Leadership | publicat | 2025-10-22 | — | `✓✓·✓` | — |
| `anatomia-declinului-interludiu-de-la` | 🧠 Anatomia declinului – Interludiu. De la Uniunea Sovietică la inteligența artificială: același control, alt limbaj. | Leadership | publicat | 2025-10-21 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-10-epoca` | 🇺🇸 Anatomia declinului (Ep. 10) – Epoca americană: imperiul libertății și riscul prăbușirii prin confort | Leadership | publicat | 2025-10-20 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-9-gloria` | 🇬🇧 Anatomia declinului (Ep. 9) – Gloria Victoriei și începutul apusului britanic | Leadership | publicat | 2025-10-17 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-8-uniunea` | 🇷🇺 Anatomia declinului (Ep. 8) – Uniunea Sovietică: visul egalității și prăbușirea ordinii absolute | Leadership | publicat | 2025-10-16 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-7-dinastia-qing` | 🐉 Anatomia declinului (Ep. 7) – Dinastia Qing: De la înțelepciunea lui Kangxi la vanitatea lui Qianlong | Leadership | publicat | 2025-10-15 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-6-imperiul-mogul` | 🌺 Anatomia declinului (Ep. 6) – Imperiul Mogul: De la toleranța lui Akbar la fanatismul lui Aurangzeb | Leadership | publicat | 2025-10-14 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-5-carol-quintul` | 🪙 Anatomia declinului (Ep. 5) – Carol Quintul și povara gloriei imperiale | Leadership | publicat | 2025-10-13 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-4-imperiul` | Anatomia declinului (Ep. 4) – Imperiul Otoman și gloria pierdută după Soliman | Leadership | publicat | 2025-10-10 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-3-mongolii-si` | 🏹 Anatomia declinului (Ep. 3) – Mongolii și imperiul sfâșiat după Kublai Han | Leadership | publicat | 2025-10-08 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-2-alexandru-cel` | Anatomia declinului (Ep. 2) – Alexandru cel Mare și imperiul destrămat de lipsa succesiunii | Leadership | publicat | 2025-10-07 | — | `✓✓·✓` | — |
| `anatomia-declinului-ep-1-roma-marcus` | Anatomia declinului (Ep. 1) – Roma. Marcus Aurelius și Commodus: de la filosof la gladiator | Leadership | publicat | 2025-10-06 | — | `✓✓·✓` | — |
| `anatomia-declinului-cum-imperiile-cad` | Anatomia declinului – Cum imperiile cad și ce spune asta despre noi | Leadership | publicat | 2025-10-03 | — | `✓✓·✓` | — |
| `de-la-eternitatea-piramidelor-la` | 🌍 „De la eternitatea piramidelor la fragilitatea zgârie-norilor – o lecție despre civilizații.” | Leadership | publicat | 2025-10-02 | — | `✓✓·✓` | — |
| `mereu-ocupat-mereu-obosit-dar-niciodata` | Mereu ocupat, mereu obosit. Dar niciodată cu adevărat odihnit | Habits | publicat | 2025-10-01 | — | `✓✓·✓` | — |
| `normal-ca-n-ai-timp-de-ce-pierdem-ore` | Normal că n-ai timp: de ce pierdem ore zilnic și cum ne fură claritatea task-urile neterminate | Habits | publicat | 2025-09-30 | — | `✓✓·✓` | — |
| `obiceiurile-lanturi-invizibile-sau` | Obiceiurile – lanțuri invizibile sau scurtături spre libertate? | Habits | publicat | 2025-09-29 | — | `✓✓·✓` | — |
| `eliberarea-spatiului-mental-de-ce` | Eliberarea spațiului mental: de ce completarea și finalizarea lucrurilor contează | Habits | publicat | 2025-09-26 | — | `✓✓·✓` | — |
| `perfectionismul-iluzia-care-consuma-si` | Perfecționismul – iluzia care consumă și blochează | Habits | publicat | 2025-09-25 | — | `✓✓·✓` | — |
| `momentum-ul-interior-cum-experientele` | Momentum-ul interior: cum experiențele îți rescriu biologia și realitatea | Habits | publicat | 2025-09-24 | — | `✓✓·✓` | — |
| `placebo-credintele-care-vindeca` | 🌟 Placebo – credințele care vindecă | Habits | publicat | 2025-09-23 | — | `✓✓·✓` | — |
| `restore-la-human-being-dar-cum-ajungem` | Restore la human being – dar cum ajungem acolo? | Reflecții | publicat | 2025-09-22 | — | `✓✓·✓` | — |
| `cum-mi-am-dat-seama-ca-am-deja-toate` | Cum mi-am dat seama că am deja toate resursele | Reflecții | publicat | 2025-09-14 | — | `✓✓·✓` | — |
| `cine-mai-poate-avea-rabdare` | Cine mai poate avea răbdare | Jurnal de bord | publicat | 2024-03-22 | — | `✓✓·✓` | — |
| `acceptarea-problema-secolului-21` | Acceptarea - problema secolului 21 | Jurnal de bord | publicat | 2024-03-01 | — | `✓✓·✓` | — |
| `observatii-inainte-de-30` | Observații înainte de 30 | Jurnal de bord | publicat | 2024-02-24 | — | `✓✓·✓` | — |
| `inainte-in-trecut-partea-cincea-si` | Înainte în-trecut - partea a cincea (și ultima dar și cea mai lungă)    „ ” | Jurnal de bord | publicat | 2022-09-22 | — | `✓✓·✓` | — |
| `inainte-in-trecut-partea-patra` | Înainte în-trecut - partea a patra | Jurnal de bord | publicat | 2022-08-24 | — | `✓✓·✓` | — |
| `inainte-in-trecut-partea-treia` | Înainte în-trecut - partea a treia | Jurnal de bord | publicat | 2022-08-10 | — | `✓✓·✓` | — |
| `inainte-in-trecut-partea-doi-ca-n-ardeal` | Înainte în-trecut - partea doi (ca-n Ardeal) | Jurnal de bord | publicat | 2022-07-29 | — | `✓✓·✓` | — |
| `inainte-in-trecut-partea-intai` | Înainte în-trecut - partea întâi | Jurnal de bord | publicat | 2022-07-28 | — | `✓✓·✓` | — |
| `emotii-asta-simt-acum` | "Tu cât de des vorbești cu tine?" | Reflecții | publicat | 2020-12-14 | — | `✓✓·✓` | — |
| `be-aware` | "Be aware" | Reflecții | publicat | 2018-04-28 | — | `✓✓·✓` | — |
| `ganduri-despre-ganduri` | Gânduri despre gânduri | Reflecții | publicat | 2018-04-27 | — | `✓✓·✓` | — |
| `viata-nu-cere-nimic-ea-doar-ofera-ceea` | ”Viața nu cere nimic. Ea doar oferă ceea ce tu singur oferi.” | Reflecții | publicat | 2017-01-06 | — | `✓✓·✓` | — |
| `cum-sa-fii-barbat-part-2` | ”Cum să fii bărbat”- Part 2 | Dragoste | publicat | 2016-07-18 | — | `✓✓·✓` | — |
| `cine-sunt-ce-vreau-de-ce-fac-asta-nu` | ”Cine sunt? Ce vreau? De ce fac asta? Nu știu. Dar știu că nu știu ce vreau.” | Reflecții | publicat | 2016-06-14 | — | `✓✓·✓` | — |
| `dreaming-moments-part-vii` | "Dreaming moments, part VII" | Dreaming moments | publicat | 2016-04-09 | — | `✓✓·✓` | — |
| `si-zile` | &quot;Zile și zile&quot; | Reflecții | publicat | 2016-02-28 | — | `✓✓·✓` | — |
| `another-day` | „Another day” | Reflecții | publicat | 2016-02-19 | — | `✓✓·✓` | — |
| `take-care-of-your-mind` | ”Take care of your mind” | Reflecții | publicat | 2016-02-17 | — | `✓✓·✓` | — |
| `dreaming-moments-part-vi` | "Dreaming moments, part VI" | Dreaming moments | publicat | 2016-01-04 | — | `✓✓·✓` | — |
| `self-respect-brings-respect` | Self-respect brings respect | Reflecții | publicat | 2015-12-10 | — | `✓✓·✓` | — |
| `dreaming-moments-part-v` | "Dreaming moments, part V" | Dreaming moments | publicat | 2015-11-16 | — | `✓✓·✓` | — |
| `nu-timpul-ne-schimba-ci-oamenii-cu-care` | "Nu timpul ne schimbă, ci oamenii cu care îl petrecem" | Reflecții | publicat | 2015-08-06 | — | `✓✓·✓` | — |
| `plutim-intr-o-mare-de-intrebari-in-loc` | "Plutim într-o mare de întrebări, în loc să zburăm deasupra unui cer de răspunsuri" | Reflecții | publicat | 2015-06-10 | — | `✓✓·✓` | — |
| `cum-sa-fii-barbat-part-i` | "Cum să fii bărbat"-Part I | Dragoste | publicat | 2015-05-18 | — | `✓✓·✓` | — |
| `oricare-ar-fi-durata-timpului-stiinta` | "Oricare ar fi durata timpului, ştiinţa întrebuinţării lui îl va face lung" | Reflecții | publicat | 2015-05-04 | — | `✓✓·✓` | — |
| `dreaming-moments-part-iv` | "Dreaming moments, part IV" | Dreaming moments | publicat | 2015-04-07 | — | `✓✓·✓` | — |
| `de-ce-inselam` | De ce înşelăm? | Dragoste | publicat | 2015-04-05 | — | `✓✓·✓` | — |
| `de-ce-sa-ne-despartim` | "De ce să ne despărţim" | Dragoste | publicat | 2015-03-27 | — | `✓✓·✓` | — |
| `dreaming-moments-part-iii` | "Dreaming moments, part III" | Dreaming moments | publicat | 2015-03-23 | — | `✓✓·✓` | — |
| `cum-sa-nu-ti-superi-iubita` | "Cum să nu-ţi superi iubita." | Dragoste | publicat | 2015-03-10 | — | `✓✓·✓` | — |
| `dreaming-moments-part-ii` | "Dreaming moments, part II" | Dreaming moments | publicat | 2015-03-07 | — | `✓✓·✓` | — |
| `de-ce-iubim-femeile` | "De ce iubim femeile" | Dragoste | publicat | 2015-02-27 | — | `✓✓·✓` | — |
| `cat-sa-mai-astept` | "Cât să mai aştept?" | Dragoste | publicat | 2015-02-19 | — | `✓✓·✓` | — |
| `be-her-valentine_14` | ”Be her Valentine!” | Dragoste | publicat | 2015-02-14 | — | `✓✓·✓` | — |
| `sa-nu-ma-mai-suni-niciodata` | "Să nu mă mai suni niciodată!" | Dragoste | publicat | 2015-02-06 | — | `✓✓·✓` | — |
| `cum-sa-nu-iti-perzi-iubita` | "Cum să nu îţi pierzi iubita" | Dragoste | publicat | 2015-01-30 | — | `✓✓·✓` | — |
| `cuvinte-de-prisos` | "Dreaming moments, part I" | Dreaming moments | publicat | 2015-01-22 | — | `✓✓·✓` | — |
| `iubi-sunt-suparata-pe-tine-ca` | "Iubi, sunt supărată pe tine că..." | Dragoste | publicat | 2015-01-17 | — | `✓✓·✓` | — |
| `amintirea-este-trandafir-din-aceeasi` | "Amintirea este trandafir din aceeaşi tulpină cu realitatea, dar fără spini." | Reflecții | publicat | 2015-01-13 | — | `✓✓·✓` | — |
| `ce-sa-fac` | "De ce am ajuns aici?" | Dragoste | publicat | 2015-01-09 | — | `✓✓·✓` | — |
| `cum-sa-nu-iti-pierzi-iubitul` | Cum să nu îţi pierzi iubitul | Dragoste | publicat | 2015-01-06 | — | `✓✓·✓` | — |
| `sa-alegem-sau-sa-asteptam-sa-fim-alesi` | "Să alegem? Sau să aşteptăm să fim aleşi?" | Reflecții | publicat | 2015-01-04 | — | `✓✓·✓` | — |
| `be-warrior-not-worrier` | "Be a warrior, not a worrier" | Reflecții | publicat | 2015-01-02 | — | `✓✓·✓` | — |
| `tomorrow-is-first-blak-page-of-365-page` | "Tomorrow, is the first blak page of a 365 page book." | Reflecții | publicat | 2014-12-31 | — | `✓✓·✓` | — |
| `mult-mai-usor-sa-zambesti-decat-sa` | Mastile nu te reprezinta. Fii tu! | Reflecții | publicat | 2014-12-30 | — | `✓✓·✓` | — |

## `nealocat` — 1 intrare

| ID | Titlu | Categorie | Tip | Status | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `evidence-release-pipeline-audit` | [evidence-release-pipeline-audit](#) | — | — | nepublicat | 2026-09-13 | — | — | — | `✗✗✗✗` | `src/content/arhitectura/evidence-release-pipeline-audit.md` | — |

## Anomalii

### `de-la-web-visibility-la-machine-accessibility` — De la web visibility la machine accessibility: ce se schimbă când AI-ul nu mai doar citește internetul, ci acționează în el?

`lab/articole` · /lab/articole/de-la-web-visibility-la-machine-accessibility

- `category` în afara taxonomiei: «AI Visibility»
- prefix numeric duplicat (14) cu: src/content/lab/articles/14.ai-oglinda-amplificator-intentie-context-anthropic.md

### `LAB-14` — AI ca oglindă și amplificator: ce arată raportul Anthropic despre intenție, context și folosirea Claude

`lab/articole` · /lab/articole/ai-oglinda-amplificator-intentie-context-anthropic

- imagine în afara `/images/lab/`: `/images/blog/ai-oglinda-amplificator.webp`
- prefix numeric duplicat (14) cu: src/content/lab/articles/14.de-la-web-visibility-la-machine-accessibility.md

### `LAB-13` — Eticheta „Abonat”: cum folosește Google relația cu publicul pentru a evidenția surse în AI Search

`lab/articole` · /lab/articole/eticheta-abonat-relatia-prezentare-ai-search

- numele fișierului `.md` (eticheta-abonat-relatia-prezentare-ai-search-revizuit) ≠ slug (eticheta-abonat-relatia-prezentare-ai-search)
- imagine în afara `/images/lab/`: `/images/blog/Subscription_highlights_Ir7y0f1.width-2000.format-webp.webp`

### `LAB-08` — Cuvânt-cheie vs frază în AI Search: query rewriting, tokenizare și ce putem spune corect despre limba română

`lab/articole` · /lab/articole/cuvant-cheie-vs-fraza-tokenizare

- `date_published` diferă între `.md` și `.ts`
- `date_modified` diferă între `.md` și `.ts`
- `lastmod` din sitemap (2026-08-18) ≠ ultima modificare (2026-08-19)

### `LAB-01` — Istoria căutării pe internet: cum fiecare eră a creat un punct orb pe care optimizarea a încercat să-l exploateze

`lab/articole` · /lab/articole/istoria-cautarii-internet-evolutia-seo

- `date_published` diferă între `.md` și `.ts`
- `date_modified` diferă între `.md` și `.ts`

### `LAB-03` — De ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI

`lab/articole` · /lab/articole/social-media-vizibilitate-ai

- `date_modified` diferă între `.md` și `.ts`
- `lastmod` din sitemap (2026-08-14) ≠ ultima modificare (2026-09-04)

### `LAB-10` — Ce este o entitate pentru AI și motoarele de căutare. Studiu de caz: de ce internetul mă asociază cu porumbul

`lab/articole` · /lab/articole/ce-este-entitate-ai-studiu-de-caz

- `article_type` diferă: .md «Studiu de caz» ≠ .ts «Analiză de caz»
- `date_published` diferă între `.md` și `.ts`
- `date_modified` diferă între `.md` și `.ts`

### `LAB-05` — Paradoxul site-ului terminat: același URL poate arăta diferit pentru om, crawler și instrumentul de audit

`lab/articole` · /lab/articole/paradoxul-site-ului-terminat

- `article_type` diferă: .md «Studiu de caz» ≠ .ts «Analiză de caz»

### `LAB-06` — Metadata și citarea AI: ce poate demonstra o citare identică și unde începe inferența

`lab/articole` · /lab/articole/metadata-citare-ai-studiu-de-caz

- `article_type` diferă: .md «Studiu de caz» ≠ .ts «Analiză de caz»
- `date_published` diferă între `.md` și `.ts`
- `date_modified` diferă între `.md` și `.ts`

### `cifrul-succesului-definitie-personala` — Cifrul succesului: de ce succesul este diferit pentru fiecare om

`blog (arhivă)` · /blog/cifrul-succesului-definitie-personala

- wiring incomplet: sitemap

