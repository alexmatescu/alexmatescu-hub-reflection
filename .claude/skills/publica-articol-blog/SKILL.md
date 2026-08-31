---
name: publica-articol-blog
description: Pipeline complet pentru analiza, pregătirea metadatelor, integrarea, actualizarea suprafețelor interne ale site-ului, verificarea editorială și tehnică și pregătirea pentru publicare a unui articol nou pe blogul personal delamatescu.ro/blog. Agentul primește articolul de la utilizator, îl tratează independent, completează toate metadatele reale suportate de structura Post, păstrează compatibilitatea tehnică a site-ului, rulează toate verificările locale și se oprește înainte de git add, git commit, git push și deploy. Nu se aplică articolelor AI Visibility Lab.
---

# PUBLICĂ ARTICOL — BLOG PERSONAL DELAMATESCU.RO

## 0. MISIUNE

Acest skill gestionează întregul proces INTERN de pregătire a unui articol nou pentru blogul personal:

`/blog`

Fluxul complet este:

ARTICOL PRIMIT
→ ANALIZĂ EDITORIALĂ
→ ANALIZĂ SEMANTICĂ
→ COMPLETAREA METADATELOR
→ INTEGRAREA ÎN STRUCTURA POST
→ INTEGRAREA CONȚINUTULUI
→ ACTUALIZAREA TUTUROR SUPRAFEȚELOR INTERNE AFECTATE
→ VERIFICARE EDITORIALĂ
→ VERIFICARE METADATA HTML
→ VERIFICARE STRUCTURED DATA / JSON-LD
→ VERIFICARE SEO / GEO / AEO
→ VERIFICARE ROUTING ȘI ASSETURI
→ VERIFICARE SITEMAP / INDEXURI / FEED DACĂ EXISTĂ
→ TYPESCRIPT
→ LINT
→ TESTE DACĂ EXISTĂ
→ BUILD DE PRODUCȚIE
→ VERIFICARE LOCALĂ
→ VERIFICARE FINALĂ A MODIFICĂRILOR
→ RAPORT FINAL DE SUCCES
→ STOP

Skill-ul NU execută:

`git add`

`git commit`

`git push`

deploy

publicarea efectivă în producție

Aceste operații sunt realizate manual de utilizator după finalizarea skill-ului.

Definiția de DONE este:

articol integrat complet în repository
+
toate suprafețele interne relevante actualizate
+
metadata verificată
+
JSON-LD verificat
+
testele tehnice trecute
+
build trecut
+
pagina verificată local
+
raport final furnizat

După acest punct agentul SE OPREȘTE.

---

# 1. DOMENIU DE APLICARE

Acest skill se aplică EXCLUSIV articolelor din:

`/blog`

NU se aplică:

`/lab/articole`

Pentru AI Visibility Lab există un skill separat:

`publica-articol-lab`

Nu modifica:

- skill-ul Lab;
- structura editorială Lab;
- articolele Lab;
- metadata Lab;
- taxonomiile Lab;

în timpul publicării unui articol personal.

---

# 2. PRINCIPIUL FUNDAMENTAL

Articolul furnizat de utilizator este sursa editorială principală și trebuie tratat ca document independent.

NU compara articolul cu articolele existente.

NU:

- analiza stilul articolelor existente;
- căuta articole similare pentru a decide cum trebuie scris acesta;
- copia structuri editoriale din alte articole;
- modifica textul pentru a semăna cu alte articole;
- determina metadata prin comparație cu alte articole;
- efectua benchmark editorial intern între articolul nou și arhiva Blogului.

Poți inspecta repository-ul pentru a înțelege:

- tipurile TypeScript;
- structura `Post`;
- template-ul tehnic;
- routing-ul;
- componentele;
- generatoarele SEO;
- structured data;
- sitemap;
- homepage;
- listingurile;
- feedurile;
- build-ul;
- infrastructura.

Această inspectare tehnică NU constituie comparație editorială.

Fiecare articol nou este construit după ACEST CONTRACT.

---

# 3. PRIORITĂȚILE EDITORIALE

Ordinea priorităților este:

1. integritatea ideii autorului;
2. sensul textului;
3. vocea autorului;
4. claritatea;
5. coerența;
6. corectitudinea informației;
7. reprezentarea semantică;
8. accesibilitatea pentru oameni;
9. accesibilitatea pentru motoare și sisteme AI;
10. SEO/GEO/AEO.

SEO/GEO/AEO nu au voie să distrugă vocea articolului.

Scopul nu este „să scriem pentru crawler”.

Scopul este să publicăm un document clar, identificabil, coerent, bine structurat și bine reprezentat tehnic.

---

# 4. ÎNAINTE DE ORICE MODIFICARE

Nu edita imediat repository-ul.

Mai întâi inspectează starea proiectului.

Rulează:

`git status`

Verifică:

- branch-ul curent;
- fișiere modificate;
- fișiere untracked;
- eventualele modificări preexistente ale utilizatorului.

REGULĂ CRITICĂ:

Nu pierde și nu suprascrie modificările existente ale utilizatorului.

Nu folosi:

`git reset --hard`

`git clean -fd`

și nu face checkout destructiv peste modificări locale.

Dacă există modificări nelegate de articol:

- lasă-le intacte;
- lucrează în jurul lor;
- nu le modifica decât dacă sunt direct necesare operației.

Acest skill NU face staging și NU face commit.

---

# 5. INSPECTAREA ARHITECTURII REALE

Înainte de integrarea articolului inspectează implementarea actuală.

Fișiere cunoscute relevante pot include:

`src/data/posts.ts`

`src/data/blog-post-template.ts`

`src/data/blog-content/` (fișierele individuale ale articolelor noi, dacă există deja unele)

`src/lib/blog-seo.ts`

`src/lib/seo-head.ts`

`src/components/Seo.tsx`

`src/routes/__root.tsx`

`public/sitemap.xml`

`public/robots.txt`

`public/llms.txt`

Acestea sunt puncte de pornire, nu o listă exhaustivă.

Caută și identifică:

- tipul `Post`;
- template-ul articolelor noi;
- mecanismul prin care este stocat conținutul;
- `buildBlogPostHead`;
- ruta Blog;
- pagina articolului;
- pagina `/blog`;
- homepage;
- eventuale pagini/filtere de categorie;
- eventual search intern;
- eventual RSS/Atom/feed;
- sitemap;
- structured data;
- Open Graph;
- Twitter metadata;
- eventuale indexuri sau manifesturi;
- asset pipeline;
- scripturile reale din `package.json`.

Nu presupune.

Verifică implementarea înainte să modifici.

---

# 6. SURSA DE ADEVĂR

Structura reală `Post` din repository este contractul runtime.

Template-ul existent:

`src/data/blog-post-template.ts`

trebuie folosit ca model pentru articole noi.

Înainte de completarea articolului:

1. citește tipul `Post`;
2. citește template-ul;
3. citește helperii SEO;
4. verifică unde este consumat fiecare câmp;
5. păstrează tipurile reale;
6. nu inventa câmpuri care nu există.

Dacă repository-ul s-a schimbat față de această documentație, codul actual are prioritate pentru sintaxă și integrare, dar regulile editoriale și semantice ale acestui skill rămân valabile.

**REGULĂ CRITICĂ DE ARHITECTURĂ — STOCAREA ARTICOLULUI NOU.**
Verificat în repository (2026-08-30): articolele noi NU se adaugă ca intrare nouă în array-ul `posts` din `src/data/blogger-posts.json`. Acel fișier este arhiva înghețată a articolelor deja publicate (nu se exportă, nu se migrează, nu se editează pentru a insera un articol nou). Mecanismul real pentru articole noi este:

1. un fișier independent `src/data/blog-content/<slug>.ts`, care exportă obiectul articolului (`satisfies Post`), după modelul din `blog-post-template.ts`;
2. importat explicit și adăugat în array-ul `newPosts` din `src/data/posts.ts`;
3. `posts` (exportul consumat de restul site-ului) este calculat automat din `newPosts` + articolele din `blogger-posts.json`, sortate descrescător după `date` — poziția din `newPosts` nu contează pentru ordinea afișată.

Dacă la momentul execuției acest mecanism nu mai există sau arată diferit, verifică efectiv `src/data/posts.ts` și `blog-post-template.ts` (regula generală de mai sus — codul actual are prioritate pentru sintaxă/integrare), dar interdicția de a scrie un articol nou direct în `blogger-posts.json` rămâne valabilă necondiționat, indiferent de ce găsești. Dacă mecanismul `blog-content`/`newPosts` lipsește complet la execuție, oprește-te și raportează blocajul (§43) în loc să revii la scrierea în `blogger-posts.json`.

---

# 7. REGULA PERMANENTĂ PENTRU `tags`

REGULĂ CRITICĂ:

NU genera `tags` pentru articole noi.

`tags` a fost eliminat deliberat ca atribut separat deoarece ar dubla semantic rolul `schemaKeywords` / `keywords` fără un consumator distinct suficient.

Pentru articole noi:

`schemaKeywords`

este câmpul semantic preferat.

Dacă există în cod compatibilitate legacy:

`schemaKeywords → fallback tags`

aceasta trebuie păstrată pentru articolele istorice.

Dar pentru articolul nou:

NU completa `tags`.

NU recrea `tags`.

NU adăuga `tags` în template.

NU genera simultan `schemaKeywords` și `tags`.

NU reintroduce o taxonomie paralelă de tags.

Această regulă este deliberată și trebuie respectată permanent.

---

# 8. ANALIZA ARTICOLULUI

Înainte de metadata, analizează exclusiv articolul primit.

Identifică:

1. teza centrală;
2. ideea principală;
3. întrebarea sau problema centrală;
4. ideile secundare;
5. conceptele principale;
6. entitățile despre care este articolul;
7. persoanele menționate;
8. experiențele personale;
9. opiniile;
10. interpretările;
11. ipotezele;
12. afirmațiile factuale;
13. statisticile;
14. studiile sau cercetările citate;
15. sursele;
16. concluzia;
17. intenția principală a articolului;
18. intenția probabilă a cititorului.

Pe baza acestei analize completează coerent metadata.

Nu deduce metadata din alte articole.

---

# 9. VOCEA AUTORULUI

Păstrează stilul textului furnizat.

În mod special:

- păstrează frazele lungi atunci când sunt intenționate;
- păstrează paragrafe ample și coerente;
- păstrează construcția narativă;
- păstrează metaforele;
- păstrează întrebările retorice;
- păstrează ironia;
- păstrează observațiile personale;
- păstrează tranzițiile ample;
- păstrează tensiunea intelectuală;
- păstrează caracterul eseistic atunci când articolul este eseu.

Evită:

- fraze foarte scurte puse una sub alta;
- stil generic de LinkedIn;
- stil listicle fără motiv;
- introduceri SEO prefabricate;
- formule precum „În era digitală...”;
- concluzii artificiale;
- keyword stuffing;
- repetarea mecanică a temei;
- heading-uri inventate exclusiv pentru SEO;
- CTA comercial artificial.

Nu rescrie masiv articolul dacă acest lucru nu este necesar.

Corectează:

- greșeli;
- incoerențe;
- ambiguități;
- formulări evident defecte;
- erori factuale confirmate;

fără să distrugi vocea autorului.

---

# 10. FACT-CHECK

Blogul personal NU are același pipeline obligatoriu de research live ca AI Visibility Lab.

Totuși agentul nu trebuie să publice informații evident false sau surse inventate.

Identifică afirmațiile verificabile precum:

- statistici;
- procente;
- cifre;
- studii;
- cercetări;
- rezultate experimentale;
- citate;
- afirmații atribuite unor persoane;
- evenimente;
- date istorice;
- legislație;
- funcționalități software;
- informații actuale despre companii/platforme;
- afirmații științifice;
- afirmații psihologice.

Dacă există o afirmație materială care trebuie verificată pentru publicare responsabilă, verific-o folosind surse potrivite.

Dacă utilizatorul solicită explicit fact-check complet, efectuează verificare completă.

Nu transforma însă:

- opinia;
- metafora;
- experiența personală;
- interpretarea;

în afirmație „științifică” fără motiv.

Nu inventa:

- studii;
- autori;
- statistici;
- URL-uri;
- DOI-uri;
- citate;
- rezultate;
- surse.

Dacă ceva nu poate fi validat:

- reformulează prudent;
- elimină afirmația dacă este necesar;
- sau semnalează utilizatorului problema.

---

# 11. DISTINCȚIE EPISTEMICĂ

În analiza internă separă:

EXPERIENȚĂ PERSONALĂ

FAPT DOCUMENTABIL

OBSERVAȚIE

INTERPRETARE

INFERENȚĂ

IPOTEZĂ

OPINIE

METAFORĂ

Nu transforma:

„am observat”

în:

„studiile demonstrează”

fără bază reală.

Nu transforma o experiență individuală într-o regulă universală.

---

# 12. CONTRACTUL COMPLET DE METADATA

Analizează și completează TOATE câmpurile aplicabile din structura reală `Post`.

Nu completa mecanic câmpurile opționale.

Un câmp opțional trebuie completat numai dacă are valoare reală.

---

# 12.1 `title`

Titlul editorial principal.

Trebuie să fie:

- fidel textului;
- clar;
- distinct;
- memorabil;
- suficient de descriptiv;
- natural;
- fără clickbait artificial.

Dacă utilizatorul oferă un titlu, păstrează-l implicit.

Nu îl schimba doar pentru SEO.

Dacă trebuie corectat, păstrează sensul și intenția.

---

# 12.2 `subtitle`

Completează numai dacă există în structura reală și dacă aduce valoare.

Subtitle-ul trebuie:

- să extindă titlul;
- să adauge context;
- să clarifice miza.

Nu repeta titlul cu alte cuvinte.

Dacă nu este necesar, lasă-l necompletat conform tipului.

---

# 12.3 `excerpt`

Scrie un rezumat editorial fidel.

Trebuie:

- să reflecte ideea centrală;
- să funcționeze independent;
- să ofere context suficient;
- să invite la lectură fără clickbait;
- să nu fie o listă de keywords.

Nu copia automat primul paragraf.

---

# 12.4 `metaDescription`

Completează dacă structura actuală o permite și o descriere distinctă de excerpt este justificată.

Meta description trebuie:

- să descrie exact articolul;
- să fie naturală;
- să nu promită conținut absent;
- să folosească tema principală firesc.

Dacă nu există motiv pentru override, folosește fallback-ul implementat.

---

# 12.5 `canonicalPath`

Folosește formatul Blogului actual.

Nu introduce un câmp `slug` redundant dacă arhitectura nu îl cere.

Construiește un path:

- stabil;
- descriptiv;
- lizibil;
- fără caractere inutile.

Canonical-ul final trebuie să corespundă exact rutei articolului.

Verifică să nu existe conflict tehnic de rută/path.

Această verificare de existență este permisă și nu reprezintă comparație editorială cu alte articole.

---

# 12.6 `date`

Pentru articol nou folosește data reală a pregătirii/publicării conform convenției repository-ului.

Nu backdata fără instrucțiune explicită.

---

# 12.7 `dateModified`

Pentru articol nou urmează convenția reală a proiectului.

Nu inventa modificări.

În viitor, acest câmp se schimbă numai când conținutul public s-a modificat material.

---

# 12.8 `lastReviewed`

În Blog este metadata informativă.

NU copia comportamentul special al Lab.

Completează numai dacă a existat efectiv o revizuire editorială/factuală care justifică data.

Nu declara o verificare care nu a avut loc.

---

# 12.9 `category`

Alege categoria semantic potrivită EXCLUSIV din analiza articolului și din contractul tehnic curent.

NU compara cu articole existente.

NU studia distribuția categoriilor din arhivă.

Dacă `category` este un string liber, generează o categorie clară și coerentă.

Dacă codul actual impune un union/type sau o listă permisă, respectă acel contract tehnic.

Nu extinde o taxonomie tehnică fără nevoie.

---

# 12.10 `articleType`

Alege tipul editorial pe baza formei articolului.

Exemple:

- Eseu
- Opinie
- Analiză
- Reflecție
- Ghid
- Experiment
- Studiu personal

Nu importa taxonomia AI Visibility Lab.

Nu compara cu tipurile altor articole.

---

# 12.11 `focusKeyword`

Câmp editorial de targetare.

Rol:

- identifică tema principală;
- servește drept reper editorial;
- poate ghida SEO.

NU trebuie emis ca:

- meta keywords;
- JSON-LD artificial;
- exact-match repetat.

Nu modifica textul mecanic pentru a repeta `focusKeyword`.

Dacă articolul nu are o intenție SEO suficient de clară și câmpul este opțional, nu forța completarea.

---

# 12.12 `schemaKeywords`

Pentru articole noi acesta este câmpul semantic principal de termeni tematici.

Selectează termeni:

- relevanți;
- distincți;
- centrali;
- naturali;
- semantic utili.

Exemplu bun:

leadership
organizational culture
shared purpose
team alignment
decision making

Exemplu prost:

leadership
leadership meaning
leadership definition
leadership explained

Nu urmări keyword density.

Nu genera `tags`.

---

# 12.13 `about`

`about` reprezintă conceptele sau entitățile CENTRALE despre care este articolul.

Nu îl confunda cu `schemaKeywords`.

Diferență conceptuală:

`schemaKeywords` = vocabular tematic

`about` = subiectele/entitățile centrale ale documentului

Selectează doar elemente cu adevărat centrale.

Nu umple câmpul excesiv.

---

# 12.14 `mentions`

Folosește conform tipului real al `Post`.

`mentions` este destinat persoanelor menționate semnificativ în articol.

Distincție:

`about` = despre ce/cine este în principal articolul

`mentions` = persoane care apar semnificativ în articol

Nu introduce persoane menționate incidental.

Nu inventa URL-uri sau profiluri pentru ele.

Nu crea entități fictive.

---

# 12.15 `faq`

FAQ este OPȚIONAL.

Creează numai dacă:

- articolul răspunde natural unor întrebări;
- întrebările sunt utile cititorului;
- răspunsurile sunt susținute de conținut;
- FAQ-ul vizibil poate fi integrat natural.

NU crea FAQ doar pentru schema markup.

NU crea FAQ ascuns numai în JSON-LD.

Dacă există FAQ, trebuie să existe consistență:

conținut vizibil
↔ `faq`
↔ FAQPage JSON-LD

Dacă articolul nu justifică FAQ:

nu completa.

---

# 12.16 `citations`

Respectă structura reală actuală, de exemplu:

{
  name: string;
  url: string;
}[]

Nu extinde schema publică doar pentru că informații suplimentare ar putea fi utile.

Include doar:

- surse reale;
- relevante;
- verificabile;
- asociate cu afirmații reale ale articolului.

Preferă surse primare când sunt disponibile.

Nu introduce surse decorative.

Nu inventa URL-uri.

---

# 12.17 `heroImage`

Respectă structura reală, de exemplu:

{
  src,
  alt,
  width,
  height
}

Verifică existența fișierului.

Nu inventa path-uri.

Folosește dimensiunile reale.

Alt text-ul trebuie:

- să descrie imaginea;
- să fie contextual;
- să fie util pentru accesibilitate;
- să nu facă keyword stuffing.

---

# 12.18 `imageAlt`

Folosește numai conform mecanismului real de override.

Nu crea două descrieri contradictorii pentru aceeași imagine.

---

# 12.19 `seoTitle`

Override opțional.

Nu îl completa automat.

Dacă `title` funcționează bine ca titlu SEO, lasă fallback-ul să funcționeze.

Folosește `seoTitle` numai când există un motiv editorial/SEO real.

---

# 12.20 `ogTitle`

Override opțional.

Folosește numai dacă preview-ul social beneficiază real de o formulare diferită.

Altfel folosește fallback-ul.

---

# 12.21 `ogDescription`

Override opțional.

Nu completa doar pentru că există.

Altfel folosește descrierea normală.

---

# 12.22 `twitterTitle`

Override opțional.

Folosește numai când este justificat.

Altfel păstrează fallback-ul existent.

---

# 12.23 `twitterDescription`

Override opțional.

Nu duplica mecanic `ogDescription`.

---

# 12.24 `readingTime`

Dacă este obligatoriu în `Post`, calculează-l automat.

Folosește convenția deja existentă în cod dacă există.

Nu estima arbitrar.

Nu modifica valorile articolelor istorice.

---

# 12.25 `author`

Respectă structura actuală.

Autorul standard al blogului este Alex Matescu.

Site-ul are o entitate globală `Person`.

Nu crea un al doilea Person contradictoriu.

Respectă identitatea canonică existentă și `@id` stabil.

Nu modifica metadata globală a autorului doar pentru articol.

---

# 12.26 `featured`

Acesta este un câmp editorial/listing, nu un factor AI.

Nu presupune automat că un articol nou trebuie să fie featured.

Dacă utilizatorul nu specifică explicit și câmpul este obligatoriu, folosește valoarea neutră/sigură conform contractului actual, de regulă `false`, dacă acest lucru este compatibil cu implementarea.

Nu compara cu alte articole featured.

Nu modifica alte articole pentru a schimba featured state.

---

# 12.27 `html` / `content`

Integrează articolul folosind mecanismul real al repository-ului.

Nu migra articolele existente.

Nu schimba formatul general al Blogului.

Nu modifica structura istorică fără necesitate.

---

# 13. PERSON — ENTITATE GLOBALĂ

Site-ul are o entitate `Person` globală care poate include:

`@id`

`name`

`alternateName`

`url`

`jobTitle`

`description`

`homeLocation`

`knowsAbout`

`sameAs`

`subjectOf`

Articolul nou trebuie să se asocieze cu entitatea existentă.

NU:

- crea un nou Person per articol;
- modifica `name`;
- modifica `alternateName`;
- modifica `sameAs`;
- modifica `jobTitle`;
- modifica `homeLocation`;
- modifica `knowsAbout`;
- inventa `subjectOf`.

Metadata globală a persoanei nu trebuie schimbată pentru simpla publicare a unui articol.

---

# 14. WEBSITE ȘI ORGANIZATION

Respectă nodurile existente:

Person

WebSite

Organization

Nu crea duplicate.

Nu modifica `labPublisher` pentru articolul personal.

Blog și AI Visibility Lab sunt contexte editoriale distincte.

---

# 15. JSON-LD PENTRU BLOG

După integrarea articolului verifică EFECTIV output-ul produs de sistem.

Nu presupune că tipurile TypeScript garantează output corect.

Generatorul Blog trebuie să producă structura actuală implementată.

Verifică BlogPosting și toate proprietățile aplicabile:

`@id`

`headline`

`name`

`description`

`datePublished`

`dateModified`

`url`

`inLanguage`

`mainEntityOfPage`

`articleSection`

`keywords`

`about`

`mentions`

`citation`

`image`

`author`

`publisher`

Nu forța proprietăți pentru care articolul nu are date.

---

# 16. BREADCRUMBLIST

Verifică existența și corectitudinea BreadcrumbList dacă sistemul îl generează.

Traseul trebuie să fie logic:

Acasă
→ Blog
→ articol

Verifică:

`position`

`name`

`item`

URL-urile trebuie să fie reale și corecte.

---

# 17. FAQPAGE

FAQPage trebuie să apară NUMAI dacă articolul are FAQ real.

Dacă `faq` lipsește sau este gol:

FAQPage trebuie să lipsească.

Nu crea structured data fără echivalent vizibil în pagină.

---

# 18. HTML HEAD

Verifică output-ul real generat de mecanismele existente.

Dacă site-ul are server-side `buildSeoHead` și client-side `useSeo` / `<Seo>`, păstrează-le sincronizate.

Pentru articol verifică, unde sunt implementate:

`<title>`

`meta[name=description]`

`link[rel=canonical]`

`og:title`

`og:description`

`og:url`

`og:type`

`og:site_name`

`og:locale`

`og:image`

`og:image:alt`

`twitter:card`

`twitter:title`

`twitter:description`

`twitter:image`

`meta[name=robots]`

`meta[name=author]`

Nu considera task-ul valid doar pentru că obiectul TypeScript pare corect.

Verifică markup-ul rezultat.

---

# 19. META KEYWORDS

NU introduce:

`<meta name="keywords">`

`schemaKeywords` nu reprezintă vechiul HTML meta keywords.

Nu implementa meta keywords.

---

# 20. CONSISTENȚĂ SEMANTICĂ

Înainte de finalizare verifică faptul că:

`title`

`subtitle`

`excerpt`

`metaDescription`

`category`

`articleType`

`focusKeyword`

`schemaKeywords`

`about`

`mentions`

`faq`

`citations`

descriu aceeași realitate editorială.

Dacă metadata și articolul intră în conflict:

corectează metadata.

Nu forța textul doar pentru a se potrivi unei metadata prost alese.

---

# 21. INTERNAL LINKING

Pentru acest skill NU analiza articolele existente pentru a identifica oportunități de internal linking și NU compara articolul nou cu arhiva Blogului.

Păstrează linkurile interne deja furnizate de autor dacă sunt valide.

Poți adăuga un link intern NUMAI dacă:

- utilizatorul îl cere explicit;
- sau articolul furnizat conține deja o referință clară către o pagină specifică a site-ului și linkul poate fi determinat fără analizarea altor articole.

Nu scana arhiva Blogului pentru sugestii.

Nu modifica alte articole pentru backlink-uri.

---

# 22. EXTERNAL LINKING

Păstrează linkurile externe relevante.

Verifică URL-urile importante introduse sau păstrate.

Dacă trebuie adăugată o sursă pentru o afirmație materială, preferă sursa primară.

Nu introduce linkuri decorative.

---

# 23. IMAGINEA

Dacă utilizatorul furnizează imagine:

- verifică assetul;
- respectă pipeline-ul existent;
- verifică dimensiunile;
- completează metadata.

Dacă articolul nu are imagine:

NU inventa o imagine.

NU inventa un path.

Dacă structura tehnică permite articol fără hero image, continuă fără imagine.

Dacă hero image este obligatorie tehnic și nu există:

oprește pipeline-ul și raportează blocajul.

---

# 24. ACTUALIZAREA TUTUROR SUPRAFEȚELOR INTERNE AFECTATE

„Actualizarea site-ului” înseamnă actualizarea tuturor suprafețelor care depind tehnic de apariția articolului nou.

NU înseamnă modificarea manuală a tuturor paginilor.

Identifică prin cod ce suprafețe trebuie actualizate și modifică numai ceea ce este necesar.

Verifică obligatoriu:

## Pagina articolului

`/blog/{canonical-path}`

## Indexul Blogului

`/blog`

Articolul trebuie să fie disponibil conform mecanismului real de listing.

NU compara textul cu alte articole.

## Homepage

Dacă homepage afișează automat articole recente sau date din Blog:

verifică faptul că noul articol este reflectat corect.

Dacă este automat:

nu modifica inutil Home.

## Categorii

Dacă există mecanism tehnic de categorie:

verifică integrarea articolului.

Nu analiza alte articole.

## Search

Dacă există un index intern de căutare:

actualizează-l sau verifică generarea automată.

## RSS / Atom / Feed

Dacă există:

actualizează sau verifică feed-ul.

Dacă nu există:

nu crea unul.

## Sitemap

Actualizează sau verifică generatorul.

## Alte indexuri

Caută în cod:

- latest posts;
- article collections;
- manifests;
- static indexes;
- navigation dependentă de Blog;
- generated files;
- route maps.

Dacă sunt generate automat:

nu modifica manual.

Dacă necesită actualizare manuală:

actualizează numai intrarea articolului nou.

---

# 25. SITEMAP

Verifică:

`public/sitemap.xml`

sau generatorul real.

URL-ul articolului trebuie să apară conform arhitecturii actuale.

`<loc>` trebuie să coincidă cu canonical-ul absolut.

`<lastmod>` trebuie să reflecte data reală aplicabilă.

NU actualiza toate `lastmod`.

NU modifica mecanic:

`changefreq`

`priority`

Nu le trata drept factori GEO.

---

# 26. ROBOTS.TXT

NU modifica `robots.txt` pentru publicarea unui articol normal.

Doar verifică să nu existe accidental un blocaj care afectează ruta.

Nu schimba politica crawlerelor în cadrul acestui skill.

---

# 27. LLMS.TXT

`llms.txt` NU este tratat ca mecanism garantat de citare AI.

Nu îl modifica automat la fiecare articol.

Modifică-l numai dacă politica tehnică actuală a repository-ului cere explicit includerea fiecărui articol nou.

Dacă este doar un index de pagini principale:

nu adăuga articolul.

Nu inventa o nouă regulă.

---

# 28. INDEXNOW ȘI ALTE MECANISME

Nu implementa:

- IndexNow;
- ping-uri;
- API-uri de indexare;
- mecanisme noi de submission;

doar pentru această publicare.

Nu adăuga infrastructură nouă „ca să fie complet”.

---

# 29. ROUTING

Verifică:

- ruta articolului;
- canonicalPath;
- canonical absolut rezultat;
- breadcrumbs;
- orice link generat;
- asset paths.

Verifică tehnic să nu existe conflict de path.

Nu face comparații editoriale cu alte articole.

---

# 30. HEADING STRUCTURE

Verifică structura articolului:

- un H1 principal conform implementării;
- H2/H3 în ordine logică;
- fără heading-uri create doar pentru keywords;
- fără fragmentare artificială;
- fără salturi nejustificate.

Dacă titlul articolului este randat automat ca H1, nu duplica H1 în conținut.

---

# 31. GEO / AEO

Aplică principii de:

- claritate;
- dezambiguizare;
- structură semantică;
- consistență;
- identificarea entităților;
- atribuibilitate;
- context suficient;
- surse;
- accesibilitate.

Nu trata nicio tactică drept garanție de citare.

NU susține:

- JSON-LD garantează citarea;
- FAQ schema garantează citarea;
- llms.txt garantează citarea;
- exact-match keywords garantează citarea;
- mai multe metadata fields garantează citarea;
- există un chunk size universal optim pentru AI.

Metadata ajută la structurare și interpretare.

Nu este un mecanism magic de ranking.

---

# 32. E-E-A-T

Pentru Blog, Experience trebuie să vină din experiența reală exprimată de autor.

Păstrează expresii precum:

- am observat;
- am încercat;
- am trăit;
- în experiența mea;

dacă ele există în text.

Nu fabrica experiență.

Expertise/Authoritativeness/Trust nu trebuie imitate prin ton artificial.

Construiește încredere prin:

- precizie;
- identitate coerentă;
- surse;
- delimitarea opiniei de fapt;
- lipsa exagerărilor;
- informație verificabilă.

---

# 33. ACCESSIBILITY

Verifică minimum:

- alt text;
- heading hierarchy;
- linkuri descriptive;
- imagini valide;
- elemente interactive afectate de articol.

Nu face redesign.

---

# 34. PERFORMANCE

Nu introduce:

- dependințe noi;
- biblioteci;
- scripturi;
- asseturi disproporționat de mari;

doar pentru publicarea articolului.

Dacă există pipeline de optimizare imagini, folosește-l conform proiectului.

Nu face optimizări globale necerute.

---

# 35. BACKWARD COMPATIBILITY

Articolul nou trebuie să folosească structura actuală.

Dacă trebuie modificat un helper comun pentru ca articolul să funcționeze, modificarea trebuie să rămână backward compatible.

NU modifica articole istorice.

NU compara articolul nou cu articole istorice.

NU migra articole istorice.

NU completa retroactiv câmpuri.

NU elimina fallback-uri legacy necesare.

În special păstrează compatibilitatea pentru `tags` legacy dacă generatorul o folosește, chiar dacă articolele noi nu folosesc `tags`.

---

# 36. VERIFICAREA REGRESIILOR

Nu este necesară compararea articolului nou cu articole existente.

Verificarea de regresie trebuie să fie TEHNICĂ.

Dacă ai modificat:

- tipuri comune;
- helperi SEO;
- componente;
- routing;
- JSON-LD builder;
- sitemap generator;

verifică faptul că proiectul:

- compilează;
- trece lint;
- trece testele;
- se construiește;
- rutele generale relevante continuă să funcționeze.

Nu inspecta și nu compara conținutul editorial al altor articole.

Dacă nu ai modificat infrastructură comună, nu este nevoie să deschizi articole existente pentru comparație.

---

# 37. TESTE OBLIGATORII

Inspectează `package.json`.

Folosește scripturile reale.

Rulează minimum:

TypeScript type check

echivalentul real pentru:

`npx tsc --noEmit`

Lint

Build de producție

Dacă există tests relevante:

rulează-le.

Dacă există un script unic de verificare care le include:

poți folosi acel script.

Nu inventa comenzi care nu există.

---

# 38. BUILD DE PRODUCȚIE

Build-ul trebuie să treacă înainte ca skill-ul să declare succes.

Dacă build-ul eșuează din cauza modificărilor făcute:

rezolvă problema.

Dacă există o problemă preexistentă nelegată:

nu modifica arbitrar alte zone ale proiectului.

Raportează blocajul.

---

# 39. VERIFICARE LOCALĂ

După integrare și build:

pornește aplicația local folosind workflow-ul real al repository-ului dacă este necesar.

Verifică pagina nouă.

Controlează:

## Conținut

- titlul;
- subtitle;
- articolul complet;
- heading hierarchy;
- imagine;
- linkuri;
- citări;
- FAQ dacă există;
- formatare;
- eventuale caractere sau HTML defect.

## Metadata

- `<title>`;
- description;
- canonical;
- robots;
- OG;
- Twitter.

## JSON-LD

- BlogPosting;
- BreadcrumbList;
- FAQPage condițional.

## Integrare

- pagina articolului;
- `/blog`;
- homepage dacă este afectat;
- category mechanism dacă există;
- sitemap;
- feed/index dacă există.

Nu verifica site-ul public de producție în această etapă, deoarece deploy-ul este manual și nu face parte din skill.

---

# 40. SERVER-SIDE OUTPUT

Dacă arhitectura permite inspectarea output-ului server-side, verifică metadata în HTML-ul rezultat, nu doar prin navigare SPA.

Asigură-te că:

- title;
- description;
- canonical;
- JSON-LD;

sunt generate conform implementării actuale.

---

# 41. NU PUBLICA ȘI NU FOLOSI GIT WRITE OPERATIONS

Acest skill NU execută niciodată automat, în cadrul fluxului normal:

`git add`

`git commit`

`git push`

deploy

publish

force push

tag/release

Utilizatorul va efectua manual aceste operații după raportul final.

Poți folosi comenzi READ-ONLY precum:

`git status`

`git diff`

`git diff --stat`

pentru verificare.

Nu stage-ui fișiere.

Nu crea commit.

Nu împinge modificările în remote.

---

# 42. VERIFICAREA FINALĂ A DIFF-ULUI

Înainte de raportul final rulează:

`git status`

și:

`git diff`

Inspectează modificările.

Verifică:

- numai fișiere necesare au fost modificate;
- nu există modificări accidentale;
- nu există articole existente modificate fără motiv;
- nu există schimbări Lab;
- nu există `tags` nou;
- nu există refactor global necerut;
- nu există asseturi lipsă;
- nu există metadata inventată.

Dacă există modificări accidentale introduse de agent:

repară-le înainte de raportul final.

Nu elimina modificări preexistente ale utilizatorului.

---

# 43. SITUAȚII ÎN CARE PIPELINE-UL SE OPREȘTE CU BLOCAJ

Nu declara succes dacă există:

- TypeScript errors;
- lint errors relevante;
- build failure;
- asset obligatoriu absent;
- route conflict;
- canonical invalid;
- conținut incomplet;
- metadata critică invalidă;
- JSON-LD defect;
- surse inventate;
- path inexistent;
- eroare provocată de modificările agentului;
- risc real de suprascriere a unor modificări ale utilizatorului;
- mecanismul de stocare a articolelor noi (`newPosts` / `src/data/blog-content/`, §6) lipsește sau a fost înlocuit, iar singura alternativă vizibilă ar fi scrierea directă în `blogger-posts.json`.

În aceste cazuri:

oprește-te înainte de DONE.

Raportează clar:

- problema;
- fișierul;
- cauza;
- ce este necesar pentru continuare.

---

# 44. CE NU SE FACE

NU:

- compara articolul cu articole existente;
- studia stilul articolelor existente;
- folosi articole existente ca template editorial;
- scana arhiva pentru internal linking;
- modifica articole existente pentru backlink;
- genera `tags`;
- introduce meta keywords;
- inventa FAQ;
- inventa citations;
- inventa persoane;
- inventa sameAs;
- inventa imagini;
- inventa canonical;
- inventa surse;
- inventa date;
- inventa research;
- adăuga metadata doar fiindcă există un câmp;
- schimba Person global;
- modifica AI Visibility Lab;
- migra articole legacy;
- modifica toate `lastmod`;
- schimba robots.txt fără motiv;
- modifica llms.txt mecanic;
- introduce IndexNow;
- adăuga dependințe inutile;
- face refactor global;
- adăuga articolul nou ca intrare nouă în `src/data/blogger-posts.json` (§6 — arhiva rămâne neatinsă; articolele noi sunt fișiere independente în `src/data/blog-content/`, înregistrate în `newPosts`);
- face git add;
- face git commit;
- face git push;
- face deploy;
- declara că articolul este public pe delamatescu.ro.

---

# 45. CHECKLIST EDITORIAL

Înainte de DONE:

[ ] Teza articolului este clară.
[ ] Titlul reflectă articolul.
[ ] Subtitle-ul a fost evaluat.
[ ] Excerpt-ul este fidel.
[ ] Meta description a fost evaluată.
[ ] Nu există repetiții artificiale introduse de agent.
[ ] Frazele nu au fost fragmentate inutil.
[ ] Vocea autorului este păstrată.
[ ] Concluzia este coerentă.
[ ] Nu există paragrafe fabricate pentru SEO.
[ ] Linkurile sunt valide.
[ ] Citările sunt relevante.
[ ] Nu există surse inventate.
[ ] Afirmațiile materiale problematice au fost verificate sau reformulate.
[ ] Articolul NU a fost comparat editorial cu alte articole.

---

# 46. CHECKLIST METADATA

[ ] `title`
[ ] `subtitle` evaluat
[ ] `excerpt`
[ ] `metaDescription` evaluată
[ ] `canonicalPath`
[ ] `date`
[ ] `dateModified` evaluat
[ ] `lastReviewed` evaluat
[ ] `category`
[ ] `articleType` evaluat
[ ] `focusKeyword` evaluat
[ ] `schemaKeywords`
[ ] `about`
[ ] `mentions` evaluat
[ ] `faq` evaluat
[ ] `citations` evaluate
[ ] `heroImage` verificată dacă există
[ ] `imageAlt` evaluat
[ ] `seoTitle` evaluat
[ ] `ogTitle` evaluat
[ ] `ogDescription` evaluată
[ ] `twitterTitle` evaluat
[ ] `twitterDescription` evaluată
[ ] `readingTime`
[ ] `author` corect
[ ] `featured` evaluat
[ ] NU există `tags` nou.

---

# 47. CHECKLIST JSON-LD

[ ] BlogPosting există.
[ ] `@id` este corect.
[ ] `headline` este corect.
[ ] `name` este corect.
[ ] `description` este corectă.
[ ] `url` corespunde canonical.
[ ] `datePublished` este corect.
[ ] `dateModified` este corect dacă există.
[ ] `inLanguage` este corect.
[ ] `mainEntityOfPage` este corect.
[ ] `articleSection` corespunde category.
[ ] `keywords` provin din schemaKeywords sau mecanism legacy doar unde este cazul.
[ ] `about` corespunde articolului.
[ ] `mentions` corespund articolului.
[ ] `citation` conține doar surse reale.
[ ] imaginea este corectă dacă există.
[ ] autorul este asociat corect.
[ ] publisher este corect.
[ ] BreadcrumbList este corect.
[ ] FAQPage apare numai dacă există FAQ.

---

# 48. CHECKLIST HTML HEAD

[ ] `<title>`
[ ] meta description
[ ] canonical
[ ] og:title
[ ] og:description
[ ] og:url
[ ] og:type
[ ] og:site_name
[ ] og:locale
[ ] og:image dacă există
[ ] og:image:alt dacă există imagine
[ ] twitter:card
[ ] twitter:title
[ ] twitter:description
[ ] twitter:image dacă există
[ ] robots
[ ] author

---

# 49. CHECKLIST DISCOVERY

[ ] Ruta articolului este validă.
[ ] Articolul nu este noindex accidental.
[ ] robots nu introduce blocaj accidental.
[ ] sitemap este actualizat/corect.
[ ] `<loc>` corespunde canonical.
[ ] lastmod este corect.
[ ] llms.txt nu a fost modificat inutil.
[ ] nu a fost introdus IndexNow.
[ ] nu a fost introdus un mecanism nou de indexing.

---

# 50. CHECKLIST INTEGRARE

[ ] pagina articolului
[ ] `/blog`
[ ] homepage dacă este afectat
[ ] categorii dacă există mecanism tehnic
[ ] search/index dacă există
[ ] RSS/feed dacă există
[ ] sitemap
[ ] latest/collections dacă există
[ ] route mapping
[ ] asset mapping
[ ] niciun articol existent nu a fost modificat editorial pentru comparație sau backlinking
[ ] articolul nou NU a fost adăugat în `blogger-posts.json` — a fost adăugat ca fișier independent în `src/data/blog-content/`, înregistrat în `newPosts` (§6)

---

# 51. CHECKLIST TEHNIC

[ ] `git status` verificat inițial
[ ] modificările utilizatorului protejate
[ ] structura Post verificată
[ ] template-ul verificat
[ ] TypeScript trece
[ ] lint trece
[ ] testele relevante trec dacă există
[ ] production build trece
[ ] pagina nouă se randează local
[ ] nu există broken imports
[ ] nu există broken assets
[ ] nu există route conflict
[ ] nu există console/runtime errors introduse de articol
[ ] output-ul metadata este verificat
[ ] JSON-LD este verificat

---

# 52. CHECKLIST FINAL REPOSITORY

[ ] `git diff` inspectat
[ ] `git status` inspectat
[ ] numai fișiere necesare au fost modificate de agent
[ ] modificările preexistente ale utilizatorului sunt intacte
[ ] Lab nu a fost modificat
[ ] articole existente nu au fost rescrise
[ ] `tags` nu a fost reintrodus
[ ] `blogger-posts.json` nu a fost modificat pentru a insera articolul nou
[ ] nu există refactor global inutil
[ ] nu există fișiere temporare
[ ] nu există asseturi nefolosite introduse accidental
[ ] NU s-a executat git add
[ ] NU s-a executat git commit
[ ] NU s-a executat git push
[ ] NU s-a executat deploy

---

# 53. RAPORT FINAL

Dacă toate verificările trec, răspunde cu un raport clar.

Structură obligatorie:

## ARTICOL PREGĂTIT CU SUCCES

Titlu:
Canonical path:
Categorie:
Tip editorial:
Data:

## METADATA

Subtitle:
Excerpt:
Meta description:
Focus keyword:
Schema keywords:
About:
Mentions:
FAQ: da/nu
Citations: număr
SEO title override: da/nu
OG overrides: da/nu
Twitter overrides: da/nu
Hero image: da/nu
Reading time:
Featured:

Confirmă explicit:

`tags`: NU a fost generat.

## STRUCTURED DATA

BlogPosting: OK
BreadcrumbList: OK
FAQPage: OK / absent conform articolului
Person association: OK
Publisher: OK
About: OK
Mentions: OK
Citations: OK

## HTML HEAD

Title: OK
Description: OK
Canonical: OK
Open Graph: OK
Twitter: OK
Robots: OK
Author: OK

## INTEGRARE SITE

Pagina articolului: OK
/blog: OK
Homepage: OK / neafectată
Categorii: OK / inexistente / neafectate
Search/index: OK / inexistent
Feed: OK / inexistent
Sitemap: OK
Alte suprafețe: enumeră dacă există

Confirmă explicit:

Articolul a fost adăugat ca fișier independent în `src/data/blog-content/`, înregistrat în `newPosts` — NU în `blogger-posts.json`.

## VERIFICĂRI

TypeScript: PASS
Lint: PASS
Tests: PASS / nu există
Production build: PASS
Verificare locală: PASS
Metadata verificată: PASS
JSON-LD verificat: PASS
Git diff verificat: PASS

## FIȘIERE MODIFICATE

Listează exact fișierele modificate de agent.

## MODIFICĂRI PREEXISTENTE

Menționează separat dacă existau modificări ale utilizatorului care au fost lăsate intacte.

## URMĂTORUL PAS MANUAL

Încheie explicit cu:

„Procesul intern este complet. Nu am executat git add, git commit, git push sau deploy. Articolul este pregătit local pentru publicare. Operațiile Git și publicarea efectivă pe delamatescu.ro rămân de executat manual de utilizator.”

Nu declara:

„articolul este publicat”

sau:

„articolul este live”

deoarece acest skill nu face deploy.

---

# 54. MOD DE UTILIZARE

Atunci când utilizatorul spune:

„Folosește `publica-articol-blog` și pregătește pentru publicare următorul articol:

[ARTICOL]”

execută întregul workflow fără să ceri confirmare pentru fiecare metadata.

Deduce singur toate informațiile care pot fi stabilite sigur din:

- articol;
- instrucțiunile skill-ului;
- structura tehnică actuală a repository-ului.

Nu consulta articole existente pentru comparație editorială.

Întreabă utilizatorul numai dacă apare un blocaj real care nu poate fi rezolvat din aceste surse.

Exemple:

- imagine obligatorie absentă;
- informație factuală critică imposibil de verificat;
- route/path conflict;
- cerință tehnică ambiguă care poate produce efecte diferite;
- modificări locale aflate în conflict direct cu fișierele necesare.

---

# 55. REGULA FINALĂ

Un articol este considerat PREGĂTIT PENTRU PUBLICARE numai dacă:

conținutul este integrat
+
metadata este completată
+
structured data este corectă
+
head metadata este corectă
+
suprafețele interne relevante sunt actualizate
+
sitemap/indexurile relevante sunt corecte
+
TypeScript trece
+
lint trece
+
testele relevante trec
+
production build trece
+
pagina este verificată local
+
diff-ul final este verificat
+
nu există erori cunoscute introduse de agent

După raportul final:

STOP.

Nu executa:

git add
git commit
git push
deploy.

Utilizatorul preia procesul manual din acest punct.
