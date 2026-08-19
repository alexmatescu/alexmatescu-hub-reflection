---
name: publica-articol-lab
description: Editor autonom pentru AI Visibility Lab (/lab/articole) — pipeline complet de publicare/actualizare articole, de la .md la integrare în site, cu verificare factuală live pe ierarhie de surse, gate de originalitate/E-E-A-T, arhitectură GEO/AEO/SEO a conținutului, entity consistency (Person/WebSite/Organization), JSON-LD @graph, și audit anti-halucinare final. Invocă atunci când userul cere publicarea/actualizarea unui articol din AI Visibility Lab, sau cere "un agent care postează articole".
---

# Publică articol — AI Visibility Lab

Nu se aplică articolelor din `/blog` (arhivă personală, `src/data/posts.ts`) — sistem separat, fără cerința de verificare factuală. Se aplică exclusiv articolelor din `/lab/articole`.

Scopul acestui skill nu e doar publicarea și fact-checking-ul, ci un standard ridicat de: factual accuracy, GEO, AEO, SEO, E-E-A-T, entity consistency, extractability, source attribution, originalitate, citability. **Nu promite și nu presupune niciodată** că aceste practici garantează citarea, menționarea, rankingul, indexarea sau includerea într-un răspuns AI — ele cresc probabilitatea și calitatea semnalului, atât.

---

## 0. Principii nenegociabile

**Research-first.** Pentru orice informație actuală, volatilă, statistică, tehnică, juridică, despre comportamentul unui search engine/AI provider/crawler, sau despre ranking/indexing/citation: memoria modelului nu e sursă suficientă. Verifică live, în sesiunea curentă.

**Accuracy over rhetoric.** Dacă o formulare puternică nu poate fi demonstrată, folosește formularea mai îngustă și defensabilă.
Nu: „JSON-LD crește citarea în ChatGPT.” Da: „JSON-LD oferă informație machine-readable despre pagină; nu există documentație publică suficientă pentru a afirma că garantează sau determină citarea.”
O cifră fără definiția exactă a ce măsoară (ex. „17,8% folosesc AI”) e incompletă — vezi §1.4.

**Nu fabrica E-E-A-T.** Nu inventa experiențe personale ale lui Alex, teste neefectuate, rezultate proprii inexistente, opinii prezentate ca experiență directă, expertiză/certificări, relații profesionale, experimente sau date. `Experience` provine strict din: (1) informație oferită explicit de autor, (2) observații deja existente în documentele proiectului, (3) experimente executate și documentate, (4) măsurători efectuate efectiv în task-ul curent.

**Nu inventa mecanisme algoritmice.** Separă permanent ceea ce providerul documentează / ceea ce observăm / ceea ce inferăm / ceea ce ipotetizăm. Nu transforma corelația în cauzalitate, observația în mecanism, recomandarea editorială în ranking factor, structured data într-un „factor GEO”, sau un studiu comercial în lege generală.

---

## Faza 0 — Inspecție și ingest

Citește obligatoriu, înainte de orice modificare: fișierul `.md` sursă; `src/data/lab-seo.ts` (tipuri + `buildArticleJsonLd`); `src/pages/Lab.tsx`; `src/data/lab.ts`; un articol `.ts` existent ca referință de stil; `src/components/Seo.tsx` (`alexMatescuPerson`, `alexMatescuWebSite`); `public/sitemap.xml`; `public/robots.txt` (context, de regulă nu necesită modificare — vezi §9.1); `public/llms.txt` (doar context, vezi §8.2).

**Nu presupune din acest document structura reală a codului** dacă implementarea proiectului s-a schimbat între timp — verifică mereu fișierele de mai sus, nu memoria acestui SKILL.md.

**Slug**: derivă din ultima componentă a `canonical`-ului; trebuie să coincidă cu numele fișierului `.md` (fără prefixul numeric) și cu ruta. Nu adăuga un câmp `slug` separat în frontmatter — ar duplica aceeași informație în două locuri cu risc de divergență; canonicalul rămâne sursa unică.

**Detectare update vs. articol nou**: `grep` slug-ul în `lab-seo.ts`/`Lab.tsx`/`lab.ts`. Dacă există deja, e update — tratează fișierele deja create ca atare, nu duplica intrări.

### 0.1 — Suprapunere semantică

Verificarea după slug nu e suficientă. Înainte de a crea un articol nou, caută în corpusul existent (title, description, headings, `about`, lead-urile din `labNav`) articole semantic apropiate — ex. „Cum aleg motoarele AI ce citează” vs. „Cum aleg sistemele generative sursele pe care le citează” sunt aceeași întrebare. Dacă există overlap important, decide explicit: update articol existent, extindere, articol nou cu unghi clar diferit, internal linking, sau consolidare. Nu crea pagini aproape duplicate pentru variații de query.

### 0.2 — Scop: articol nou / extindere / update minor

Stabilește scopul înainte de a continua — determină cât din pipeline se aplică integral:

- **Articol nou sau rescriere majoră** → tot pipeline-ul (Faza 1–14).
- **Extindere semnificativă** (secțiune nouă, argument nou) → Faza 1 pe conținutul nou, Faza 2–3 doar dacă schimbă unghiul articolului, Faza 5–10 obligatorii, Faza 11–14 obligatorii.
- **Update minor** (corecție de fapt, link mort, typo, o cifră depășită) → verifică live doar afirmațiile modificate (Faza 1), sări Faza 2/3/4, rulează Faza 8/10/11 pe ce s-a schimbat, raport scurt (vezi §14). Nu declanșa un audit de 14 faze pentru o corecție de o propoziție.

### 0.3 — Contract de frontmatter

```yaml
---
title: ""
description: ""
author: "Alex Matescu"
organization: "AI Visibility Lab"

date_published: "YYYY-MM-DD"
date_modified: "YYYY-MM-DD"
last_reviewed: "YYYY-MM-DD"

language: "ro-RO"

canonical: "https://delamatescu.ro/lab/articole/{slug}"

keywords:
  - ""

image: ""
image_alt: ""
---
```

- `image`/`image_alt` opționale — dacă nu există imagine, nu inventa URL; semnalează lipsa în raport (§14), nu o completa.
- `last_reviewed` = ultima verificare factuală reală (poate diferi de `date_modified`).
- `date_modified` se schimbă doar dacă articolul a fost efectiv modificat; `date_published` nu se resetează la update.
- `keywords` reflectă conținutul real, nu keyword stuffing. Nu adăuga `tags` separat — ar duplica `keywords` fără un consumator real în site (nu există filtrare pe tag-uri în `/lab`).
- Nu adăuga `slug` sau `article_section` în frontmatter (vezi Faza 0 și §5.1 — derivate/hardcodate, nu per-articol).
- Articolele publicate **înainte** de acest contract (frontmatter vechi, fără `last_reviewed`) rămân valide — nu le migra retroactiv decât dacă li se face oricum un update de conținut.

---

## Faza 1 — Claim ledger și verificare factuală

Pentru fiecare afirmație factuală **materială** (nu banalități), înregistrează intern:

```text
ID | afirmație | tip | sursă | URL | tier | data verificării | status
```

Status: confirmat / confirmat cu nuanță / reformulat / eliminat / neconfirmat / necesită decizia userului.
Tip: statistică / istorică / tehnică / provider behavior / juridică / research / observație proprie / inferență / ipoteză.

Acest tabel intră în raportul final (§14), eventual sintetizat pentru afirmații repetitive.

### 1.1 — Ierarhia surselor

Preferă mereu tier-ul superior când există.

- **Tier 1** — documentație oficială: Eurostat, OECD, Comisia Europeană, instituții publice, documentația Google/OpenAI/Anthropic/Perplexity/Microsoft, standarde, legislație.
- **Tier 2** — cercetare originală: paper, autorii studiului, conference proceedings, dataset original.
- **Tier 3** — first-party commercial research (McKinsey, PwC, Semrush, Ahrefs, Salesforce, SparkToro etc.) — descrie explicit ca studiu comercial când e relevant.
- **Tier 4** — publicație secundară reputabilă (Search Engine Land, Search Engine Journal, Search Engine Roundtable, presă de calitate) — folosește când sursa originală nu mai e disponibilă sau publicația oferă context istoric agregat.
- **Tier 5** — agregatoare/trackere editoriale — identifică natura editorială, datează snapshot-ul, nu prezenta drept registru exhaustiv.

### 1.2 — Verificarea URL-urilor

Un eșec de fetch **nu înseamnă automat** sursă falsă/invalidă. Dacă fetch-ul eșuează: verifică prin search, caută canonicalul actual, verifică redirect legitim, verifică dacă domeniul oficial s-a schimbat, verifică WAF/bot-blocking/paywall — abia apoi marchează linkul invalid. Un redirect între două domenii oficiale ale aceluiași provider nu e automat o problemă.

### 1.3 — Routing pe provideri

Selectează documentația după **produs + afirmație**, nu doar după companie:

- **Google Search / AI Overviews / AI Mode / crawling / indexing / SEO** → `developers.google.com/search` (nu `ai.google.dev`, care e pentru Gemini API).
- **OpenAI/ChatGPT Search** → OpenAI Help Center, Publishers/Developers docs; distinge OAI-SearchBot / GPTBot / ChatGPT-User — nu presupune aceeași funcție.
- **Anthropic/Claude** → distinge Claude search / crawling / API / ClaudeBot / Claude-SearchBot / Claude-User; urmează domeniul oficial curent.
- **Perplexity** → `docs.perplexity.ai`.
- **Microsoft/Bing/Copilot** → sursa Microsoft/Bing cea mai apropiată de comportamentul discutat (Bing Webmaster, docs oficiale) — nu presupune că `learn.microsoft.com` e singura sursă relevantă.

### 1.4 — Regula denominatorului

Orice cifră statistică se verifică împreună cu populația, denominatorul, perioada, geografia, metodologia și definiția indicatorului. „17,8%” nu e suficient — trebuie: 17,8% din ce, în ce perioadă, ce comportament numără drept „utilizare”, e telemetrie/survey/recensământ/estimare modelată. Nu compara aritmetic indicatori cu denominatori diferiți fără explicație metodologică.

### 1.5 — Citare vizibilă vs. verificare internă

Toate afirmațiile materiale se verifică intern (claim ledger). Footnote/link vizibil e obligatoriu pentru: cifre, statistici, date precise, rezultate de studiu, afirmații istorice contestabile, cauzalitate, politici, legi, comportamente de produs, crawling/indexing/ranking/AI citation, afirmații volatile sau ușor contestabile. Evită citation clutter pe banalități.

### 1.6 — Niveluri de certitudine

Nu amesteca nivelurile — marchează explicit care e care:
- **Observație directă** — măsurat/capturat/observat/executat efectiv.
- **Fapt documentat extern** — susținut direct de documentația oficială/sursa originală/un dataset.
- **Inferență** — concluzie rezonabilă din dovezi, dar nedescrisă explicit de sursă (foloseşte „sugerează”, „indică”, „e compatibil cu”, „o interpretare posibilă”).
- **Ipoteză experimentală** — trebuie testată înainte de generalizare.

---

## Faza 2 — Gate de originalitate / E-E-A-T (obligatoriu înainte de redactarea finală)

Un articol nu e gata doar pentru că e corect — trebuie să răspundă: **de ce merită să existe în AI Visibility Lab?**

- **Who** — autor clar, `@id` consistent (`https://delamatescu.ro/#alex-matescu`), `sameAs` reutilizate din `alexMatescuPerson`, nu inventate.
- **How** — dacă e relevant: cum s-a făcut research-ul, cum au fost alese sursele, ce instrumente, ce limite, când a fost verificată informația. Pentru articole experimentale: query set, metodă, timestamp, motor, repetări, control, limite.
- **Why** — ce problemă reală rezolvă, pentru ce reader intent, ce oferă diferit față de ce există deja în corpus.

**Non-commodity gate**: articolul nu trebuie să fie doar un rezumat bun al primelor rezultate de search. Trebuie, unde subiectul permite, cel puțin o contribuție distinctă: experiment/observație/analiză proprie, comparație originală, tabel construit din mai multe surse, cronologie, framework, studiu de caz, metodologie transparentă, sau reconcilierea unei contradicții între surse. Pentru articole pur factuale/istorice unde o contribuție originală nu e posibilă, valoarea distinctă poate veni din structurare, reconcilierea surselor contradictorii sau separarea faptelor de mituri. Nu fabrica originalitate artificială.

---

## Faza 3 — Arhitectura GEO/AEO/SEO a conținutului

Înainte de conversia în `.ts`:

- **Search intent** — întrebarea centrală, intent primar/secundar, entități principale, subîntrebări naturale. Fără keyword stuffing.
- **Answer-first** — pentru întrebările importante: heading clar → răspuns direct → context/nuanță. Nu transforma articolul într-o listă de propoziții scurte artificiale; păstrează vocea editorială.
- **Extractability** — pentru fiecare H2/H3 important: heading-ul descrie clar subiectul, pasajul poate fi înțeles separat, entitățile sunt numite explicit, pronumele ambigue sunt reduse, cifrele au unitate, statisticile au perioadă/denominator, tabelele au headers explicite. Scopul e claritate și reutilizare corectă — nu există o „dimensiune ideală de chunk” care garantează citarea; nu pretinde asta.
- **Headings** — un singur H1, ierarhie H2→H3 coerentă, fără variații artificiale ale aceleiași întrebări.
- **Tabele** — doar când ajută la comparații/metodologii/date; nu transforma text narativ în tabel doar „pentru GEO”.
- **Internal linking** — 2–5 linkuri interne relevante dacă există (articol-pilon, metodologie, studii de caz conexe), orientativ nu obligatoriu; anchor descriptiv, fără „click aici”, fără link stuffing. Notează în raport (§14) ce linkuri ai adăugat.

---

## Faza 4 — Redactare / actualizare

Dacă primești un draft: păstrează teza și vocea autorului, corectează afirmațiile neconfirmate, nu dilua ideile doar pentru o nuanțare necesară, marchează clar interpretările. Dacă primești doar un brief: research → claim ledger → gate de originalitate (Faza 2) → arhitectură (Faza 3) → abia apoi redactare. Nu scrie întâi textul și nu căuta apoi surse care să-l confirme.

`title` — descrie corect articolul, nu promite mai mult decât demonstrează, distinct în corpus, fără clickbait factual.
`description` — rezumă fidel, conține ideea principală, nu inventează rezultate. Nu aplica limite rigide de caractere (60/155) — optimizează pentru claritate, nu pentru praguri inexistente.

---

## Faza 5 — Meta data (`.ts`)

Referință canonică de stil: `src/data/lab-content/cat-dureaza-indexare-citare-ai.ts`. Tipul `LabArticleMeta` (`src/data/lab-seo.ts`) e deja extins cu câmpurile de mai jos — **toate opționale**, backward-compatibile cu articolele vechi:

```ts
{
  title, description, canonical, datePublished, dateModified, faq,  // câmpuri existente dinainte
  about?,                                    // deja exista
  lastReviewed?,                             // NOU — semnalul de opt-in către JSON-LD @graph, vezi §5.2
  keywords?: string[],
  citations?: { name: string; url: string }[],
  image?: { url: string; alt: string },
}
```

Nu adăuga `articleSection`/`language`/`tags` la nivel de Meta — `articleSection` e hardcodat în `buildArticleJsonLd` (identic pentru orice articol din secțiune), `inLanguage` e deja hardcodat `"ro-RO"`, `tags` a fost eliminat ca redundant cu `keywords`.

Nu inventa un URL pentru `image` dacă nu există unul real.

### 5.1 — Entity consistency (politica actuală a proiectului — nu inventa alta)

- **Person**: `alexMatescuPerson` din `@/components/Seo`, `@id: https://delamatescu.ro/#alex-matescu`. Randat global (orice pagină) prin `personJsonLd` în `src/routes/__root.tsx`. Referențiază-l mereu prin acest `@id` — nu crea un nod Person nou sau un `@id` diferit.
- **WebSite**: `alexMatescuWebSite` din `@/components/Seo`, `@id: https://delamatescu.ro/#website`. Randat doar pe `/` (client-side, prin `Seo jsonLd`) — **nu** e global. Un articol care îl referențiază trebuie să-l embed-uiască complet (nu doar `{"@id": ...}`), altfel pagina lui nu e self-contained pentru unelte care citesc o singură pagină.
- **Publisher**: `Organization`, `name: "AI Visibility Lab"`, `url: "https://delamatescu.ro/lab"` (constanta `labPublisher` din `lab-seo.ts`) — identic pe toate articolele, legacy și noi. AI Visibility Lab nu e modelat ca persoană juridică independentă — e reprezentat ca brand editorial (`articleSection`) + publisher Organization, nu altfel.

Nu inventa link-uri `sameAs` noi — reutilizează cele deja din `alexMatescuPerson.sameAs`.

### 5.2 — JSON-LD (`buildArticleJsonLd` din `lab-seo.ts`)

Funcția are **două căi**, alese automat după prezența `lastReviewed` în meta — nu alege manual, nu duplica logica în altă parte:

- **Legacy** (fără `lastReviewed`) — `[Article, FAQPage]` ca array simplu, fără `@graph`, fără `@id` proprii. Folosită de articolele publicate înainte de acest upgrade. **Nu modifica acest cod** — orice articol vechi trebuie să producă exact același JSON-LD ca înainte.
- **Graph** (cu `lastReviewed`) — un singur obiect `{"@context", "@graph": [...]}` cu `Person` (embed complet) + `WebSite` (embed complet) + `WebPage` (`@id: {canonical}#webpage`) + `Article` (`@id: {canonical}#article`, `mainEntityOfPage` → webpage) + `FAQPage` (`@id: {canonical}#faq`, doar dacă există FAQ). `citation` conține **numai** sursele efectiv folosite în articol — nu linkuri decorative.

Un articol nou capătă automat formatul `graph` din momentul în care are `last_reviewed` completat (frontmatter) → `lastReviewed` (Meta `.ts`). Nu seta `lastReviewed` "ca să obții @graph" fără să fi făcut de fapt verificarea — câmpul înseamnă exact ce spune numele lui.

### 5.3 — Imagine

Dacă articolul are imagine principală: păstrează URL + alt text în `image`/`imageAlt`, alt text descriptiv și accesibil, nu keyword stuffing. Dacă nu există imagine: nu inventa URL, semnalează opțional lipsa în raport.

### 5.4 — FAQ

Opțional. Nu crea FAQ doar pentru schema markup — doar dacă există întrebări reale care completează articolul sau clarifică ambiguități. FAQ vizibil == FAQ în structured data (nu inventa răspunsuri suplimentare doar pentru JSON-LD). Fără FAQ util, `faq` poate fi un array gol. Nu pretinde că FAQPage garantează rich results.

---

## Faza 6 — HTML / conținut `.ts`

Conversie manuală (nu convertor markdown generic), respectând stilul existent: `<p>`, `<h2>`/`<h3>`, `<table>` cu headers explicite, `<blockquote>` dacă sursa are citate, referințe inline `<sup><a href="#fn-N">N</a></sup>`, secțiune finală „Surse și metodologie” cu `<ol class="avl-footnotes">`. Linkuri externe: `target="_blank" rel="noopener noreferrer"` (patternul actual al proiectului). Verifică semantică HTML, accesibilitate, headers de tabel, liste, ancore.

### 6.1 — Byline

Primul element din corpul `.ts` (imediat sub titlu/lead-ul deja randat de pagină) este blocul de byline, cu structura:

```html
<p><a href="/despre">Alex Matescu</a> · AI Visibility Lab</p>
<p>Publicat: {date_published, ex. „10 august 2026”} · Actualizat: {date_modified} · Ultima verificare factuală: {last_reviewed sau data verificării reale}</p>
```

`Alex Matescu` este mereu link către `/despre` (pagina personală a autorului — nu `/lab/despre-laborator`, care e despre laborator, nu despre persoană). Nu mai adăuga separat, la finalul articolului, paragraful `<em>Articol publicat de AI Visibility Lab…</em>` — informația de byline stă doar aici, la început; secțiunea finală de surse (Faza 7) se încheie cu „Notă de volatilitate”, fără paragraful de byline duplicat la coadă.

---

## Faza 7 — Surse și metodologie

Păstrează secțiunea finală de surse. Pentru articole cu research important, un tabel `Sursă | Tip | Ce validează | Limită` ajută cititorul — nu e obligatoriu pentru orice articol. Pentru informație volatilă, adaugă o „Notă de volatilitate” care spune explicit că produsul/crawlerul/politica/documentația se pot schimba, cu data reală a verificării.

---

## Faza 8 — Wiring

Actualizează exact:

1. **`src/data/lab-seo.ts`** — import `{slug}Meta`, adaugă în `labArticleMeta`.
2. **`src/pages/Lab.tsx`** — import `{slug}Html`, adaugă în `labPageContent` cu cheia `/lab/articole/{slug}`.
3. **`src/data/lab.ts`** — copil nou în `children` al nodului `/lab/articole` din `labNav`: `{ to, label: title, lead: description }`.
4. **`public/sitemap.xml`** — vezi §8.1.

**Nu** edita manual `src/data/lab-content/avl-401.ts` — pagina index `/lab/articole` își ia lista din `labNav.children` automat (`LabDetail`, `Lab.tsx`).

### 8.1 — Sitemap

```xml
<url>
  <loc>https://delamatescu.ro/lab/articole/{slug}</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

Proiectul folosește deja consistent `changefreq`/`priority` pe toate intrările — păstrează-le, nu e nevoie de refactor global pentru un singur articol; nu le prezenta însă ca optimizări SEO importante, sunt semnale slabe pe care motoarele le ignoră frecvent. `lastmod` reflectă o modificare **reală** a paginii — nu-l atinge doar pentru că a rulat agentul.

### 8.2 — llms.txt

Nu adăuga automat o linie per articol — nu tratat ca cerință universală GEO. Modifică-l doar dacă arhitectura o cere sau userul cere explicit.

### 8.3 — IndexNow

Verificat: proiectul **nu are** integrare IndexNow (niciun fișier de cheie, niciun cod de notificare). Nu construi una automat în timpul publicării unui articol. Menționează opțional în raport dacă ar fi utilă.

---

## Faza 9 — Technical SEO audit

**On-page**: un singur H1, title, description, canonical, headings, internal/external links, image alt, `language`, date, structured data, FAQ dacă există.
**Indexability**: fără `noindex` accidental, canonical corect, rută existentă, fără conflict canonical/sitemap.
**URL consistency**: identice — canonical, slug, rută, sitemap, `lab.ts`, `Lab.tsx`, `lab-seo.ts`, numele fișierului `.ts`.

### 9.1 — AI crawler accessibility

Verificat: `robots.txt` permite deja explicit Googlebot, Bingbot, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-User, Claude-SearchBot, Claude-Web, anthropic-ai, Google-Extended, Applebot-Extended, PerplexityBot, Perplexity-User și altele. Nu e nevoie de un audit infrastructural complet la fiecare articol — confirmă doar că `robots.txt` nu s-a schimbat față de starea de mai sus. Dacă infrastructura, WAF/CDN sau framework-ul s-au schimbat de la ultima verificare, semnalează sau reaudiază. Nu pretinde că modificarea unui articol rezolvă probleme de crawling la nivel de site.

---

## Faza 10 — Build și validare tehnică

```bash
npx tsc --noEmit
npm run lint
npm run build
```

(verifică `package.json` înainte să presupui comenzile — pot diferi). Rulează teste relevante dacă există.

### 10.1 — Runtime audit

Dacă mediul permite, pornește serverul de dev și confirmă pe ruta reală: title, meta description, canonical, H1, conținut, footnotes, linkuri interne/externe, JSON-LD (formă corectă — legacy sau graph, după caz), FAQ, imagine dacă există. Dacă nu poți rula verificarea runtime, spune explicit în raport (nu presupune că a trecut).

---

## Faza 11 — Audit final anti-halucinare

A doua verificare, separată de research-ul inițial. Caută în text: afirmații absolute, superlative („primul”, „cel mai”, „toate”, „niciodată”, „întotdeauna”), „garantează”, „determină”, „factor de ranking”, „AI citează”, „AI preferă”, „crawlerul face”, procente, date, comparații, cauzalitate. Pentru fiecare: sursele demonstrează *exact* această formulare? Dacă nu — reformulează, restrânge, marchează inferența, sau elimină.

### 11.1 — GEO folklore audit

Verifică explicit că articolul NU prezintă fără dovezi: `llms.txt` ca requirement universal, JSON-LD ca factor garantat de citare, FAQ schema ca factor GEO, „chunk size ideal”, exact-match keywords ca mecanism AI, branded mentions ca cauzalitate demonstrată, backlinks ca inutili, „SEO is dead”/„GEO replaces SEO”, metadata ca mecanism garantat de citare, un număr de cuvinte ca optim, sau o structură ca „algoritm secret”. Dacă apar, cere dovadă oficială sau reformulează.

---

## Faza 12 — Audit final E-E-A-T

Who (autor clar, entity consistent, fără contradicții) · How (metodologie/surse/data verificării/limite, dacă relevant) · Why (reader intent clar, valoare reală, nu conținut creat doar pentru ranking) · Originality (contribuție distinctă, nu doar commodity summary, interpretarea proprie e etichetată ca atare).

## Faza 13 — Audit final AEO/extractability

Pentru întrebările principale: există răspuns clar, extractibil fără să-și piardă sensul; sursa e apropiată de afirmație; entitatea și perioada sunt explicite; denominatorul e explicit unde e cazul; tabelele sunt interpretabile; nu există ambiguitate între surse diferite. Nu scurta artificial frazele doar pentru AEO — claritate ≠ text robotic.

---

## Faza 14 — Raport final

Scalează cu scopul din §0.2. Pentru **articol nou/rescriere majoră**, raportul include:

1. Rezumat (ce ai creat/modificat).
2. Fișiere atinse (listă exactă).
3. Claim ledger (tabel — poate fi sintetizat pentru afirmații repetitive).
4. Afirmații eliminate/reformulate — ce și de ce.
5. Surse volatile — ce trebuie reverificat în viitor.
6. Metadata: title, description, canonical, date, `lastReviewed`, slug, keywords, imagine dacă există.
7. Entity/schema: Person, WebSite (dacă `graph`), Article, WebPage (dacă `graph`), FAQ dacă există, publisher, citation.
8. Internal linking adăugat.
9. Rezultate tehnice: `typecheck` / `lint` / `build` / `runtime check` — fiecare PASS/FAIL/NOT RUN.
10. Limitări — ce nu a putut fi verificat.

Pentru **update minor** (§0.2): rezumat de 2-3 rânduri, fișierele atinse, doar afirmațiile modificate din claim ledger, rezultatele tehnice.

---

## Checklist final obligatoriu

- [ ] Toate afirmațiile materiale au fost verificate live, în sesiunea curentă.
- [ ] Cifrele au denominator, perioadă și definiție corecte (§1.4).
- [ ] Afirmațiile volatile au fost reverificate live, nu copiate dintr-un articol anterior.
- [ ] Sursele comerciale sunt identificate ca atare când e relevant.
- [ ] Un WebFetch eșuat n-a fost confundat automat cu sursă invalidă (§1.2).
- [ ] Fapte, observații, inferențe și ipoteze sunt separate explicit (§1.6).
- [ ] Nicio experiență personală fabricată, niciun mecanism algoritmic inventat.
- [ ] Articolul oferă valoare distinctă / non-commodity (§2), fără canibalizare semantică cu alt articol (§0.1).
- [ ] Internal linking relevant evaluat.
- [ ] `last_reviewed` reflectă data reală a verificării; `date_modified` nu s-a schimbat fără modificare reală.
- [ ] Metadata din `.md`, `.ts` și runtime nu se contrazic.
- [ ] `@id`-ul Person e `https://delamatescu.ro/#alex-matescu` peste tot; publisher e `labPublisher` consistent (§5.1).
- [ ] `citation` (dacă există) conține doar surse efectiv relevante.
- [ ] FAQ folosit doar dacă e util; FAQ vizibil == FAQ în JSON-LD.
- [ ] Canonical == rută == sitemap == wiring (`lab.ts`/`Lab.tsx`/`lab-seo.ts`).
- [ ] `lastmod` din sitemap nu e falsificat.
- [ ] Nu se pretinde că `llms.txt`/schema/FAQ/metadata garantează citarea AI (§11.1).
- [ ] Typecheck, lint, build trec; runtime verificat dacă mediul permite.
- [ ] Claim ledger inclus în raport.

---

## Utilizare

```
/publica-articol-lab src/content/lab/articles/13.titlu-nou-articol.md
```

Nu face commit/push fără cerere explicită.
