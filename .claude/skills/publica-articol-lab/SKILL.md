---
name: publica-articol-lab
description: Editor autonom pentru AI Visibility Lab (/lab/articole) — pipeline complet de publicare/actualizare articole, de la .md la integrare în site, cu verificare factuală live pe ierarhie de surse, gate de originalitate/E-E-A-T, arhitectură GEO/AEO/SEO a conținutului, clasificare editorială (category/articleType), entity consistency (Person/WebSite/Organization), JSON-LD @graph, și audit anti-halucinare final. Indexul din /lab/articole (Featured + listă, sortare și filtre pe categorie) e complet automat din metadata — skill-ul nu reordonează sau marchează manual Featured. Invocă atunci când userul cere publicarea/actualizarea unui articol din AI Visibility Lab, sau cere "un agent care postează articole".
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

Citește obligatoriu, înainte de orice modificare: fișierul `.md` sursă; `src/data/lab-seo.ts` (tipuri, `sortedLabArticles`/`latestLabArticle`/`labArticlePathname`/`formatLabArticleDate` și `buildArticleJsonLd` — sursa canonică a indexului `/lab/articole`, vezi Faza 8); `src/pages/Lab.tsx` (`LabArticleIndex`, componenta indexului); `src/data/lab.ts` (`labNav` — navigare/routing, NU sursa ordinii indexului); un articol `.ts` existent ca referință de stil; `src/components/Seo.tsx` (`alexMatescuPerson`, `alexMatescuWebSite`); `public/sitemap.xml`; `public/robots.txt` (context, de regulă nu necesită modificare — vezi §9.1); `public/llms.txt` (doar context, vezi §8.3).

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

date_published: "YYYY-MM-DDTHH:mm:ss±HH:mm"
date_modified: "YYYY-MM-DD"
last_reviewed: "YYYY-MM-DD"

category: ""
article_type: ""

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
- `date_modified` se schimbă doar dacă articolul a fost efectiv modificat; `date_published` nu se resetează la update. Regulile complete ale celor trei date (când se schimbă fiecare, cum apar în byline și în JSON-LD) — §6.2.
- **`date_published`** — pentru orice articol **nou**, momentul real al primei publicări publice, ISO complet cu oră și offset: `"YYYY-MM-DDTHH:mm:ss±HH:mm"` (ex. `"2026-08-27T20:00:00+03:00"`). Regula completă — §0.4 și §6.2. Articolele legacy, publicate înainte de acest contract, rămân cu `"YYYY-MM-DD"` — nu le migra retroactiv la timestamp complet fără o dovadă reală a orei (§0.4). `date_modified`/`last_reviewed` rămân `"YYYY-MM-DD"` — nu au nevoie de oră, nu schimba asta fără un motiv tehnic real.
- **`category`** — clasificarea editorială principală, EXACT una dintre cele patru din taxonomia controlată: `Search & Retrieval`, `Technical Visibility`, `Entities & Citations`, `AI Ecosystem`. Sursă unică pentru indexul și filtrele din `/lab/articole` (§8/§5.5) — nu inventa o categorie nouă automat; dacă articolul nu se potrivește rezonabil în niciuna, semnalează în raport (§14) și cere decizie editorială înainte de a extinde taxonomia.
- **`article_type`** — tipul editorial al materialului. Valorile editoriale existente în corpus: `Analiză`, `Studiu de caz`, `Ghid`, `Ghid / Analiză metodologică`. Distinct de `category` (clasificare tematică) și de `keywords` (metadata SEO, fără rol în filtrare).
- `keywords` reflectă conținutul real, nu keyword stuffing — rol pur SEO/tematic, fără rol în filtrare. Nu adăuga `tags` separat: filtrarea din `/lab/articole` există, dar se bazează exclusiv pe `category` (§5.5); un `tags` separat ar duplica `keywords` fără un consumator real.
- Nu adăuga `slug` sau `article_section` în frontmatter (vezi Faza 0 și §5.1 — derivate/hardcodate, nu per-articol).
- Articolele publicate **înainte** de acest contract (frontmatter vechi, fără `last_reviewed`/`category`/`article_type`) rămân valide — nu le migra retroactiv decât dacă li se face oricum un update de conținut. Excepție unică documentată: cele 13 articole publicate până la 27 august 2026 au primit `category`/`article_type` retroactiv, într-o migrare punctuală a arhitecturii indexului (28 august 2026) — nu un precedent pentru migrări retroactive de rutină.

### 0.4 — Regula publication time

`date_published` înseamnă strict **momentul primei publicări publice**. NU: momentul creării draftului, momentul în care a început research-ul, ultima modificare, ultima verificare factuală, ora rulării agentului sau a unui commit Git, ora la care a fost creat fișierul. Un commit Git nu devine automat publication timestamp doar pentru că a introdus articolul — poate fi folosit ca timestamp de publicare **numai** dacă poți demonstra că acel commit/deploy reprezintă efectiv prima publicare publică (nu doar presupune asta).

Pentru orice articol nou:

1. Dacă userul furnizează data și ora publicării, folosește exact acea informație.
2. Dacă agentul publică efectiv articolul în task-ul curent, determină momentul real de publicare în timezone `Europe/Bucharest` și folosește-l, cu offset explicit (`+02:00`/`+03:00` după sezon).
3. Nu inventa niciodată o valoare — nu `00:00`, nu `09:00`, nu ora commitului, nu ora rulării agentului "ca să fie completă".

Pentru articolele **legacy** (publicate înainte de acest contract, cu `date_published` doar `YYYY-MM-DD`): dacă ora reală a publicării nu poate fi verificată dintr-o sursă first-party clară (nu doar un commit timestamp — vezi mai sus), păstrează data existentă, fără oră. Sortarea/indexul (§8) sunt backward-compatible cu acest format.

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

Referință canonică de stil: `src/data/lab-content/cat-dureaza-indexare-citare-ai.ts`. Tipul `LabArticleMeta` (`src/data/lab-seo.ts`) e:

```ts
{
  title, description, canonical, datePublished, dateModified, faq,  // câmpuri existente dinainte
  category: LabArticleCategory,               // OBLIGATORIU — vezi §5.5, sursă unică pentru index/filtre
  articleType: LabArticleType,                // OBLIGATORIU — vezi §5.5
  about?,                                    // deja exista
  lastReviewed?,                             // semnalul de opt-in către JSON-LD @graph, vezi §5.2
  keywords?: string[],
  citations?: { name: string; url: string }[],
  image?: { url: string; alt: string },
}
```

`category`/`articleType` sunt **obligatorii** — tipul `LabArticleMeta` e folosit exclusiv de articolele `/lab/articole` (nu de obiecte legacy din alt domeniu al site-ului), deci nu are sens un fallback opțional; orice `{slug}Meta` nou trebuie adnotat explicit `: LabArticleMeta` (`import type { LabArticleMeta } from "@/data/lab-seo";`) ca TypeScript să oblige prezența lor la compilare, nu doar la runtime.

Nu adăuga `language`/`tags` la nivel de Meta — `inLanguage` e deja hardcodat `"ro-RO"`, `tags` a fost eliminat ca redundant cu `keywords`. `articleSection` din JSON-LD (format graph) e acum derivat din `category` — vezi §5.2.

Nu inventa un URL pentru `image` dacă nu există unul real.

### 5.1 — Entity consistency (politica actuală a proiectului — nu inventa alta)

- **Person**: `alexMatescuPerson` din `@/components/Seo`, `@id: https://delamatescu.ro/#alex-matescu`. Randat global (orice pagină) prin `personJsonLd` în `src/routes/__root.tsx`. Referențiază-l mereu prin acest `@id` — nu crea un nod Person nou sau un `@id` diferit. `name` rămâne strict `"Alex Matescu"` — nu introduce titulaturi („consultant AI Visibility”, „Fondator și coordonator AI Visibility Lab”, „expert GEO” etc.) în acest câmp; rolul apare doar în byline-ul HTML (§6.1), nu în `Person.name`.
- **Author (per articol)** — `Article`/`BlogPosting` din JSON-LD referă autorul prin același `@id`, nu printr-un nod nou:
  ```json
  "author": { "@id": "https://delamatescu.ro/#alex-matescu" }
  ```
  Dacă `buildArticleJsonLd` produce deja acest pattern (verifică output-ul real, nu presupune), nu-l duplica altfel.
- **WebSite**: `alexMatescuWebSite` din `@/components/Seo`, `@id: https://delamatescu.ro/#website`. Randat doar pe `/` (client-side, prin `Seo jsonLd`) — **nu** e global. Un articol care îl referențiază trebuie să-l embed-uiască complet (nu doar `{"@id": ...}`), altfel pagina lui nu e self-contained pentru unelte care citesc o singură pagină.
- **Publisher**: `Organization`, `name: "AI Visibility Lab"`, `url: "https://delamatescu.ro/lab"` (constanta `labPublisher` din `lab-seo.ts`) — identic pe toate articolele, legacy și noi. AI Visibility Lab nu e modelat ca persoană juridică independentă — e reprezentat ca brand editorial (publisher Organization), nu altfel. `articleSection` (format graph) descrie acum clasificarea tematică a articolului (`meta.category`), nu brandul — vezi §5.2.

Nu inventa link-uri `sameAs` noi — reutilizează cele deja din `alexMatescuPerson.sameAs`.

`alexMatescuPerson.url` (constanta din `Seo.tsx`) indică `https://delamatescu.ro/despre` (actualizat 26 august 2026, decizie explicită a userului — anterior indica homepage-ul) — consistent cu linkul vizibil din byline (§6.1). Acest skill **nu** modifică `alexMatescuPerson` din fluxul de publicare a unui articol (e definit o singură dată, global, în `Seo.tsx`, folosit pe orice pagină) — orice schimbare ulterioară a acelei constante e o decizie separată, semnalată userului, nu o modificare per-articol.

### 5.2 — JSON-LD (`buildArticleJsonLd` din `lab-seo.ts`)

Funcția are **două căi**, alese automat după prezența `lastReviewed` în meta — nu alege manual, nu duplica logica în altă parte:

- **Legacy** (fără `lastReviewed`) — `[Article, FAQPage]` ca array simplu, fără `@graph`, fără `@id` proprii. Folosită de articolele publicate înainte de acest upgrade. **Nu modifica acest cod** — orice articol vechi trebuie să producă exact același JSON-LD ca înainte.
- **Graph** (cu `lastReviewed`) — un singur obiect `{"@context", "@graph": [...]}` cu `Person` (embed complet) + `WebSite` (embed complet) + `WebPage` (`@id: {canonical}#webpage`) + `Article` (`@id: {canonical}#article`, `mainEntityOfPage` → webpage, `articleSection: meta.category`) + `FAQPage` (`@id: {canonical}#faq`, doar dacă există FAQ). `citation` conține **numai** sursele efectiv folosite în articol — nu linkuri decorative. `articleSection` fiind derivat direct din `category` (obligatoriu în `LabArticleMeta`, §5.5), nu are nevoie de fallback runtime — nu inventa unul.

Un articol nou capătă automat formatul `graph` din momentul în care are `last_reviewed` completat (frontmatter) → `lastReviewed` (Meta `.ts`). Nu seta `lastReviewed` "ca să obții @graph" fără să fi făcut de fapt verificarea — câmpul înseamnă exact ce spune numele lui.

**Sincronizare cu byline-ul (§6.1/§6.2):** `datePublished`/`dateModified` din JSON-LD trebuie să coincidă semantic cu datele afișate în byline — nu e permisă o divergență de tipul „byline arată 10 august, JSON-LD arată 11 august”. `dateModified` nu se schimbă automat doar pentru că `lastReviewed`/`last_reviewed` s-a schimbat — regulile complete ale celor trei date sunt la §6.2, valabile identic pentru HTML și JSON-LD. Nu inventa o proprietate Schema.org separată pentru `last_reviewed` dacă `buildArticleJsonLd` nu are deja una validă și justificată — verificarea factuală rămâne informație editorială (byline HTML + footer), nu structured data suplimentară.

### 5.3 — Imagine

Dacă articolul are imagine principală: păstrează URL + alt text în `image`/`imageAlt`, alt text descriptiv și accesibil, nu keyword stuffing. Dacă nu există imagine: nu inventa URL, semnalează opțional lipsa în raport.

### 5.4 — FAQ

Opțional. Nu crea FAQ doar pentru schema markup — doar dacă există întrebări reale care completează articolul sau clarifică ambiguități. FAQ vizibil == FAQ în structured data (nu inventa răspunsuri suplimentare doar pentru JSON-LD). Fără FAQ util, `faq` poate fi un array gol. Nu pretinde că FAQPage garantează rich results.

### 5.5 — Clasificare editorială (`category` / `articleType`)

Sursa unică pentru indexul și filtrele din `/lab/articole` (§8) — nu duplica aceste valori în alt registry (`labNav.children`, un array separat de cards etc.).

- **`category`** (`LabArticleCategory`, `src/data/lab-seo.ts`) — clasificarea editorială principală, taxonomie controlată, EXACT patru valori: `Search & Retrieval`, `Technical Visibility`, `Entities & Citations`, `AI Ecosystem`. Nu inventa o categorie nouă automat: dacă articolul nu se potrivește rezonabil în niciuna dintre ele, semnalează explicit în raport (§14) și cere decizie editorială explicită înainte de a extinde union type-ul. Determină `articleSection` în JSON-LD graph (§5.2).
- **`articleType`** (`LabArticleType`) — tipul editorial al materialului. Valorile existente în corpus: `Analiză`, `Studiu de caz`, `Ghid`, `Ghid / Analiză metodologică`. Extinde doar cu decizie editorială explicită, nu automat.
- Distincție de rol: `category` = clasificare tematică (index + filtre); `articleType` = tipul materialului (afișat lângă `category` în index, format `CATEGORIE · TIP`); `keywords` = metadata SEO/tematică, fără rol în filtrare. Nu introduce `tags` — a fost evaluat și respins explicit (§0.3).
- Capitalizarea editorială (`"Search & Retrieval"`, `"Analiză"` etc.) e valoarea canonică din date — UI-ul poate aplica `text-transform: uppercase` prin CSS pentru afișare, dar nu schimba valoarea din `.ts`/`.md` doar pentru styling.
- `category`/`articleType` din `.md` (frontmatter) și `.ts` (Meta) trebuie să fie identice — verifică asta explicit (checklist final).

---

## Faza 6 — HTML / conținut `.ts`

Conversie manuală (nu convertor markdown generic), respectând stilul existent: `<p>`, `<h2>`/`<h3>`, `<table>` cu headers explicite, `<blockquote>` dacă sursa are citate, referințe inline `<sup><a href="#fn-N">N</a></sup>`, secțiune finală „Surse și metodologie” cu `<ol class="avl-footnotes">`. Linkuri externe: `target="_blank" rel="noopener noreferrer"` (patternul actual al proiectului). Verifică semantică HTML, accesibilitate, headers de tabel, liste, ancore.

### 6.1 — Byline

Primul element din corpul `.ts` (imediat sub titlu/lead-ul deja randat de pagină) este blocul de byline, cu structura canonică (standard final, 26 august 2026):

```html
<p>
  <a href="/despre" rel="author">Alex Matescu</a>
  · Fondator și coordonator
  <a href="/lab">AI Visibility Lab</a>
</p>
<p>
  Publicat: <time datetime="{date_published ISO — legacy YYYY-MM-DD, sau ISO complet cu oră/offset pentru articole noi}">{doar data, ex. „27 august 2026” — NICIODATĂ ora}</time>
  <!-- clauza "Actualizat" apare NUMAI dacă date_modified diferă efectiv de date_published (zi calendaristică diferită) — vezi regula de mai jos -->
  · Actualizat: <time datetime="{date_modified ISO}">{date_modified}</time>
  · Ultima verificare factuală: <time datetime="{last_reviewed ISO}">{last_reviewed}</time>
</p>
```

Text vizibil rezultat: **Alex Matescu · Fondator și coordonator AI Visibility Lab**.

Reguli fixe, fără excepție:

- `Alex Matescu` → mereu link către `/despre` (pagina `Person` a autorului — nu `/lab/despre-laborator`, care descrie laboratorul, nu persoana), cu `rel="author"`.
- `AI Visibility Lab` → mereu link către `/lab`.
- Rolul afișat e mereu „Fondator și coordonator” — nu „consultant AI Visibility”, „expert GEO” sau altă titulatură; nu inventa un rol diferit per articol.
- Fiecare dată apare dublu: text vizibil în română, **doar data, fără oră** (ex. „27 august 2026”), **și** atributul `datetime` al elementului `<time>`. Pentru `date_published` al unui articol nou, `datetime` poate și trebuie să păstreze timestampul ISO complet cu oră/offset (`"2026-08-27T20:00:00+03:00"`) chiar dacă textul vizibil arată doar data — formatează textul vizibil în timezone `Europe/Bucharest` (nu ora browserului/serverului, ca să nu afișezi accidental ziua alăturată). `date_modified`/`last_reviewed` rămân `YYYY-MM-DD` în `datetime`, ca înainte. Ce înseamnă fiecare dată și când se schimbă — vezi §6.2.
- **Clauza „Actualizat:” e condiționată, nu fixă**: include-o doar dacă `date_modified` reprezintă efectiv o zi calendaristică diferită de `date_published` — adică articolul chiar a fost modificat după publicare. Dacă articolul n-a fost efectiv modificat după publicare (cazul obișnuit pentru un articol nou, în ziua publicării), omite complet clauza „Actualizat: ...” din byline — nu afișa un „Actualizat:” care sugerează fals o actualizare recentă, nici măcar cu aceeași dată ca „Publicat”. Vezi §6.2.

Pe lângă byline-ul de mai sus, fiecare articol se încheie — Faza 7, imediat după „Notă de volatilitate” — cu paragraful standardizat de footer, identic cuvânt cu cuvânt pe toate articolele publicate (uniformizat 26 august 2026):

```html
<p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală [și a surselor]: {data verificării reale}.</em></p>
```

Nu parafraza formula „Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu.” — variantele vechi („proiectul de cercetare în vizibilitate AI al lui Alex Matescu”, „inginer de sisteme, antreprenor și consultant în vizibilitate AI”, byline-ul fără rol explicit `Alex Matescu · AI Visibility Lab` etc.) sunt înlocuite; copiaz-o exact, la fiecare articol nou. Doar clauza de dată variază: „Ultima verificare factuală: {dată}.” sau „Ultima verificare factuală și a surselor: {dată}.”, după ce a fost verificat efectiv — vezi Faza 7.

Byline-ul și footerul au roluri diferite și **amândouă** trebuie păstrate — nu elimina footerul pe motiv că relația autor–Lab apare acum și în byline. Byline-ul identifică cine a scris articolul și relația lui cu Lab-ul, imediat la începutul textului. Footerul stabilește, la coadă, cine publică articolul, ce este AI Visibility Lab și care e statutul editorial al materialului.

### 6.2 — Cele trei date ale articolului

`date_published`, `date_modified` și `last_reviewed` (frontmatter, §0.3) **nu sunt sinonime** — fiecare are o regulă proprie de actualizare, valabilă atât pentru byline-ul HTML (§6.1), cât și pentru `datePublished`/`dateModified` din JSON-LD (§5.2):

- **`date_published`** — momentul primei publicări (regula completă — §0.4). Nu se rescrie niciodată ulterior, indiferent de câte actualizări sau reverificări urmează. Pentru articole noi, ISO complet cu oră/offset; textul vizibil din byline și din indexul `/lab/articole` arată totuși doar data, niciodată ora (§6.1/§8).
- **`date_modified`** — data ultimei modificări editoriale/substanțiale reale a textului. Nu se atinge doar pentru: recitirea articolului, reverificarea surselor, confirmarea că informația e încă validă, sau o simplă schimbare a `last_reviewed`. Dacă articolul a fost verificat factual dar textul n-a fost modificat substanțial, `date_modified` rămâne neschimbat — se schimbă doar `last_reviewed`.
- **`last_reviewed`** — data ultimei verificări factuale/a surselor, efectiv realizată în task-ul curent. Nu completa automat cu data publicării sau cu data curentă „ca să fie safe” — valoarea înseamnă exact ce spune numele ei.

Nu inventa o actualizare pentru freshness: dacă articolul n-a fost modificat după publicare, nu afișa în byline un „Actualizat:” fictiv doar ca semnal de prospețime. Dacă implementarea tehnică cere o valoare pentru `dateModified` în JSON-LD (câmp neopțional în tipul curent), poate fi tehnic egală cu `datePublished`, dar interfața vizibilă (byline) nu trebuie să sugereze cititorului o actualizare care nu a avut loc.

---

## Faza 7 — Surse și metodologie

Păstrează secțiunea finală de surse. Pentru articole cu research important, un tabel `Sursă | Tip | Ce validează | Limită` ajută cititorul — nu e obligatoriu pentru orice articol. Pentru informație volatilă, adaugă o „Notă de volatilitate” care spune explicit că produsul/crawlerul/politica/documentația se pot schimba, cu data reală a verificării.

Ultimul element din `.ts`, după „Notă de volatilitate” (sau, dacă articolul nu are una, ca ultim paragraf al articolului): paragraful standardizat de footer — vezi formula exactă la §6.1. Nu-l omite și nu-l parafraza.

---

## Faza 8 — Wiring

Actualizează exact:

1. **`src/data/lab-content/{n}. {slug}.ts`** — fișier nou: `export const {slug}Meta: LabArticleMeta = {...}` (cu `category`/`articleType` obligatorii, §5.5) + `export const {slug}Html = \`...\``. Adnotează explicit `: LabArticleMeta` (import type din `@/data/lab-seo`) — TypeScript refuză compilarea dacă lipsește `category`/`articleType`, ceea ce e intenționat.
2. **`src/data/lab-seo.ts`** — import `{slug}Meta`, adaugă-l în array-ul `labArticleMeta`. **Poziția în array nu contează** — nu insera la început, la sfârșit sau într-o poziție anume ca să influențezi ordinea afișată; `sortedLabArticles` (derivat automat din `labArticleMeta`, tot în `lab-seo.ts`) reordonează totul după `datePublished` la runtime. Adaugă-l oriunde e convenabil (convențional, la coadă).
3. **`src/pages/Lab.tsx`** — import `{slug}Html`, adaugă în `labPageContent` cu cheia `/lab/articole/{slug}`.
4. **`src/data/lab.ts`** — copil nou în `children` al nodului `/lab/articole` din `labNav`: `{ to, label: title, lead: description }`. Necesar pentru routing (`findLabPage`/`findLabParent`) și pentru H1/lead al paginii individuale a articolului — **NU** controlează indexul de pe `/lab/articole` (vezi mai jos) și nici poziția în el.
5. **`public/sitemap.xml`** — vezi §8.2.

**Nu** edita manual `src/data/lab-content/avl-401.ts` (introducerea/textul din josul indexului) — rămâne conținut static, separat de lista de articole.

### 8.1 — Cum se construiește indexul `/lab/articole` (arhitectură automată — NU manuală)

Pagina index `/lab/articole` (componenta `LabArticleIndex`, `src/pages/Lab.tsx`) **nu** își ia lista sau ordinea din `labNav.children`. Fluxul real:

1. **Sursa canonică** — `labArticleMeta` (`src/data/lab-seo.ts`), array-ul de `{slug}Meta` din `src/data/lab-content/*.ts`. Fiecare intrare are deja `title`, `description`, `canonical`, `datePublished`, `category`, `articleType` — tot ce are nevoie indexul, fără alt registry.
2. **Sortarea** — `sortedLabArticles` (tot în `lab-seo.ts`): copie a `labArticleMeta`, sortată descrescător **exclusiv** după `datePublished` (parsat cu `Date`, nu lexicografic), cu un tie-breaker determinist pe `canonical` pentru articole legacy publicate în aceeași zi fără oră verificabilă. Nu depinde de `dateModified`, `lastReviewed`, ordinea din `labArticleMeta`, ordinea importurilor sau `labNav.children`.
3. **Featured automat** — `latestLabArticle` = `sortedLabArticles[0]`. `LabArticleIndex` marchează „CEL MAI NOU” comparând `meta.canonical === latestLabArticle.canonical` pentru fiecare rând — nu există niciun flag `featured`/`isFeatured`, nicio listă separată, niciun slug hardcodat. Când un articol nou primește un `datePublished` mai recent, devine automat primul și automat „CEL MAI NOU”, iar articolul anterior devine automat rând normal — fără nicio modificare de cod.
4. **URL-ul fiecărui rând** — `labArticlePathname(meta)` (`new URL(meta.canonical).pathname`) — nu există câmp `slug` separat în `LabArticleMeta` (§0.3).
5. **Filtrele de categorie** — client-side, pe `meta.category`; „CEL MAI NOU” rămâne mereu legat de `latestLabArticle` (cel mai nou din întreg corpusul), nu de cel mai nou din categoria filtrată — dacă articolul global cel mai nou nu e în categoria selectată, eticheta dispare din rezultatele filtrate, nu se mută pe alt articol.

**Ce înseamnă asta pentru tine, la publicarea unui articol nou**: după Faza 8 pas 1–2, articolul apare automat la locul corect în index, cu sau fără eticheta „CEL MAI NOU”, determinat exclusiv de `datePublished`. **Nu** reordona manual `labArticleMeta`, **nu** seta un flag Featured, **nu** modifica `LabArticleIndex`/`sortedLabArticles` pentru un singur articol — dacă simți nevoia să faci oricare din astea, ceva e greșit în `datePublished` sau `category` al articolului, nu în index.

### 8.2 — Sitemap

```xml
<url>
  <loc>https://delamatescu.ro/lab/articole/{slug}</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

Proiectul folosește deja consistent `changefreq`/`priority` pe toate intrările — păstrează-le, nu e nevoie de refactor global pentru un singur articol; nu le prezenta însă ca optimizări SEO importante, sunt semnale slabe pe care motoarele le ignoră frecvent. `lastmod` reflectă o modificare **reală** a paginii — nu-l atinge doar pentru că a rulat agentul.

### 8.3 — llms.txt

Nu adăuga automat o linie per articol — nu tratat ca cerință universală GEO. Modifică-l doar dacă arhitectura o cere sau userul cere explicit.

### 8.4 — IndexNow

Verificat: proiectul **nu are** integrare IndexNow (niciun fișier de cheie, niciun cod de notificare). Nu construi una automat în timpul publicării unui articol. Menționează opțional în raport dacă ar fi utilă.

---

## Faza 9 — Technical SEO audit

**On-page**: un singur H1, title, description, canonical, headings, internal/external links, image alt, `language`, date, structured data, FAQ dacă există.
**Indexability**: fără `noindex` accidental, canonical corect, rută existentă, fără conflict canonical/sitemap.
**URL consistency**: identice — canonical, slug, rută, sitemap, `lab.ts`, `Lab.tsx`, `lab-seo.ts`, numele fișierului `.ts`.
**Index `/lab/articole`**: `category`/`articleType` identice între `.md` și `.ts` (§5.5); articolul apare exact o dată în index, la poziția corectă (sortare descrescătoare după `datePublished`, §8.1); dacă are cel mai recent `datePublished` din corpus, e singurul cu eticheta „CEL MAI NOU”; `articleSection` din JSON-LD graph reflectă `category` (§5.2).

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

Dacă mediul permite, pornește serverul de dev și confirmă pe ruta reală: title, meta description, canonical, H1, conținut, footnotes, linkuri interne/externe, JSON-LD (formă corectă — legacy sau graph, după caz), FAQ, imagine dacă există. Verifică și pe `/lab/articole`: articolul nou apare (o singură dată), la poziția corectă în listă, cu „CEL MAI NOU” dacă și numai dacă e efectiv cel mai nou global, cu `category`/`articleType` afișate corect, cu data vizibilă fără oră, și că filtrul categoriei lui îl include. Dacă nu poți rula verificarea runtime, spune explicit în raport (nu presupune că a trecut).

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
6. Metadata: title, description, canonical, date (`datePublished` — precizează dacă e timestamp complet sau legacy date-only, și publication time identificat), `category`, `articleType`, `lastReviewed`, slug, keywords, imagine dacă există.
7. Entity/schema: Person, WebSite (dacă `graph`), Article (inclusiv `articleSection` = `category`), WebPage (dacă `graph`), FAQ dacă există, publisher, citation.
8. Internal linking adăugat.
9. Index `/lab/articole`: confirmare că articolul apare automat (poziție + Featured determinate de `datePublished`, fără nicio modificare manuală a indexului) — vezi §8.1.
10. Rezultate tehnice: `typecheck` / `lint` / `build` / `runtime check` — fiecare PASS/FAIL/NOT RUN.
11. Limitări — ce nu a putut fi verificat (inclusiv, dacă e cazul, ora reală de publicare nedemonstrabilă pentru un articol legacy — §0.4).

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
- [ ] `last_reviewed` reflectă data reală a verificării; `date_modified` nu s-a schimbat fără modificare reală (§6.2).
- [ ] Metadata din `.md`, `.ts` și runtime nu se contrazic.
- [ ] `@id`-ul Person e `https://delamatescu.ro/#alex-matescu` peste tot; publisher e `labPublisher` consistent (§5.1).
- [ ] `citation` (dacă există) conține doar surse efectiv relevante.
- [ ] FAQ folosit doar dacă e util; FAQ vizibil == FAQ în JSON-LD.
- [ ] Canonical == rută == sitemap == wiring (`lab.ts`/`Lab.tsx`/`lab-seo.ts`).
- [ ] `lastmod` din sitemap nu e falsificat.
- [ ] Nu se pretinde că `llms.txt`/schema/FAQ/metadata garantează citarea AI (§11.1).
- [ ] Typecheck, lint, build trec; runtime verificat dacă mediul permite.
- [ ] Claim ledger inclus în raport.
- [ ] Byline: `Alex Matescu` → `/despre` cu `rel="author"`; rol vizibil „Fondator și coordonator”; `AI Visibility Lab` → `/lab` (§6.1).
- [ ] Toate cele trei date din byline au text vizibil în română, doar data, fără oră; `datetime` e `YYYY-MM-DD` pentru `date_modified`/`last_reviewed`, și ISO complet cu oră/offset pentru `date_published` al unui articol nou (§6.1).
- [ ] Byline-ul apare imediat sub titlu/lead, înaintea corpului articolului; footerul standardizat apare integral, nemodificat, la coadă — ambele prezente, niciunul nu-l înlocuiește pe celălalt (§6.1).
- [ ] JSON-LD `author` referă `{"@id": "https://delamatescu.ro/#alex-matescu"}`; `datePublished`/`dateModified` coerente cu byline-ul (§5.1/§5.2).
- [ ] Nicio variantă veche de byline/footer (`Alex Matescu · AI Visibility Lab` fără rol, „consultant AI Visibility”, „proiectul de cercetare... al lui Alex Matescu” etc.) nu a fost regenerată.

**Index `/lab/articole` (§5.5/§8.1) — verificări obligatorii:**

- [ ] `category` e una dintre cele patru valori permise (§5.5).
- [ ] `articleType` e una dintre valorile permise (§5.5).
- [ ] `datePublished` reprezintă prima publicare publică reală (§0.4), nu creare draft/research/ultima modificare/ora agentului/commit Git.
- [ ] Un articol nou are `date_published` cu timestamp complet și timezone (`Europe/Bucharest`), nu doar dată.
- [ ] Ora publicării nu a fost inventată — dacă nu poate fi demonstrată (articol legacy), a rămas `YYYY-MM-DD` fără oră (§0.4).
- [ ] Ora publicării nu e afișată nicăieri vizibil (nici în byline, nici în index) — doar data, în `Europe/Bucharest`.
- [ ] Indexul `/lab/articole` e sortat descrescător exclusiv după `datePublished`; cel mai nou articol global e primul.
- [ ] Numai cel mai nou articol global are eticheta „CEL MAI NOU” — nu cel mai nou din categoria filtrată.
- [ ] Nu există niciun flag `featured`/`isFeatured` manual nicăieri în cod.
- [ ] Indexul nu depinde de ordinea din `labNav.children` — poziția nouă a articolului nu a fost obținută prin reordonare manuală a vreunui array.
- [ ] Filtrarea pe categorie funcționează și nu creează pagini/URL-uri/canonicaluri noi, indexabile.
- [ ] `articleSection` (JSON-LD graph) reflectă `category`.
- [ ] Articolul apare exact o singură dată în index (nicio duplicare Featured + listă).
- [ ] Articolul nou apare automat în index după Faza 8, fără nicio modificare a `LabArticleIndex`/`sortedLabArticles`.
- [ ] Niciun count de articole nu e hardcodat în cod sau în formulările din acest SKILL.md.
- [ ] `category`/`articleType` din `.md` și `.ts` sunt identice.
- [ ] Timestamp-ul complet din metadata și data vizibilă (byline + index) nu se contrazic.

---

## Utilizare

```
/publica-articol-lab src/content/lab/articles/14.titlu-nou-articol.md
```

Nu face commit/push fără cerere explicită.
