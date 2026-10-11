# Observation Register — schema și reguli de extragere

Un rând pentru fiecare observație, adică pentru fiecare lucru afișat de o
execuție: un rezultat organic, un nume dintr-un fragment, o entitate numită
de AI sau o sursă citată de AI. Fișier:
`<instance-slug>_observation-register_v<metadata_version>.csv`.

Registrul conține observații **brute**. Nu face deduplicare, Verification sau
eligibilitate. Aceeași entitate apare de câte ori a fost afișată.

## Coloane

| # | Coloană | Sursă | Valori | Note |
|---|---|---|---|---|
| 1 | `observation_id` | DERIVAT | `naming-convention.md` §4 | |
| 2 | `execution_id` | CLASIFICARE → validat | ID existent în capture index | |
| 3 | `instance_id` | DETERMINISTIC | | |
| 4 | `surface` | DERIVAT | cod | Preluat din execuție. |
| 5 | `query_id` | DERIVAT | | Preluat din execuție. |
| 6 | `query_set_id` | DETERMINISTIC | | |
| 7 | `query_layer` | DERIVAT | `CORE-CANDIDATE` / `EXPLORATORY` | Preluat din `query-set.csv`. |
| 8 | `evidence_ids` | CLASIFICARE → validat | listă de Evidence ID separate prin `;` | Capturile în care se vede observația. Cel puțin una. |
| 9 | `provenance` | CLASIFICARE | `SERP_RESULT` / `SERP_SNIPPET` / `AI_RESPONSE` / `AI_CITATION` | |
| 10 | `serp_block` | CLASIFICARE | `ORGANIC` / `ADS` / `LOCAL` / `NOT_APPLICABLE` | `ADS` / `LOCAL` → `result_layer = SUPPLEMENTAL`. |
| 11 | `result_layer` | DERIVAT | `PRIMARY` / `SUPPLEMENTAL` | `SUPPLEMENTAL` pentru `ADS` / `LOCAL`. |
| 12 | `organic_position` | CLASIFICARE | întreg ≥1 / `NOT_APPLICABLE` | Doar pentru `SERP_RESULT` organic. Pentru `SERP_SNIPPET`, poziția părintelui. |
| 13 | `observed_order` | CLASIFICARE | întreg ≥1 | Ordinea în execuție. Pentru AI e ordinea primei apariții. |
| 14 | `depth_band` | DERIVAT | `1-10`, `11-20`, … / `NOT_APPLICABLE` | |
| 15 | `beyond_declared_depth` | DERIVAT | `YES` / `NO` / `NOT_APPLICABLE` | Față de `search.declared_depth`. |
| 16 | `parent_observation_order` | CLASIFICARE | întreg / `NOT_APPLICABLE` | Obligatoriu pentru `SERP_SNIPPET`: `observed_order` al rezultatului-părinte. |
| 17 | `observed_name` | CLASIFICARE | verbatim / `NOT_VISIBLE` | Numele așa cum apare: brand, persoană, site. Fără corectură, fără normalizare. |
| 18 | `title_displayed` | CLASIFICARE | verbatim / `NOT_APPLICABLE` | Titlul rezultatului SERP. |
| 19 | `url_displayed` | CLASIFICARE | verbatim / `NOT_VISIBLE` | URL-ul sau breadcrumb-ul afișat, exact cum se vede (poate fi trunchiat). |
| 20 | `url_truncated` | CLASIFICARE | `YES` / `NO` / `UNKNOWN` / `NOT_APPLICABLE` | |
| 21 | `snippet_or_description_observed` | CLASIFICARE | verbatim (fragment relevant) / `NOT_VISIBLE` / `NOT_TRANSCRIBED` | Pentru AI: propoziția sau descrierea furnizorului din răspuns. `NOT_TRANSCRIBED` = fragmentul e vizibil în captură, dar nu a fost transcris; captura rămâne sursa. |
| 22 | `entity_kind_observed` | CLASIFICARE | vezi enum | Ce pare rezultatul din ce se vede. Nu e verificare. |
| 23 | `named_as_recommendation` | CLASIFICARE | `YES` / `NO` / `UNCERTAIN` / `NOT_APPLICABLE` | Doar pentru `AI_RESPONSE`. `YES` doar dacă răspunsul propune explicit entitatea ca ajutor. Pentru SERP: `NOT_APPLICABLE`. |
| 24 | `query_relevance` | CLASIFICARE | `RELEVANT` / `IRRELEVANT` / `UNCERTAIN` | Legătura rândului cu familia de servicii cerută de query. |
| 25 | `relevance_basis` | CLASIFICARE | text / gol | Obligatoriu pentru `IRRELEVANT` / `UNCERTAIN`. |
| 25a | `execution_contamination_status` | DERIVAT | ca în capture index | Preluat din execuție. Nu schimbă `candidate_union_inclusion` și se raportează separat. |
| 26 | `candidate_union_inclusion` | DERIVAT | vezi regula | |
| 27 | `review_status` | CLASIFICARE | `REVIEWED` / `REVIEW_REQUIRED` | |
| 28 | `notes` | CLASIFICARE | text / gol | |

## Enum `entity_kind_observed`

`PROVIDER_PAGE` (pagina comercială a unui posibil prestator),
`PROVIDER_NAMED` (entitate numită ca prestator, fără pagină proprie în
rezultat), `ARTICLE_GUIDE`, `DIRECTORY_LIST`, `SOFTWARE_TOOL`, `PUBLISHER`,
`PERSON_PROFILE`, `FORUM_SOCIAL`, `OTHER`, `UNCERTAIN`.

## Regula `candidate_union_inclusion`

Scriptul aplică regulile de sus în jos și se oprește la prima care se
potrivește:

1. `query_relevance = IRRELEVANT` → `EXCLUDE_IRRELEVANT`
2. `query_relevance = UNCERTAIN` → `REVIEW` cât timp `review_status = REVIEW_REQUIRED`; după decizia userului (`REVIEWED`) → `EXCLUDE_UNCERTAIN` (rămâne incert, nu intră în reuniune). Claude marchează orice rând `UNCERTAIN` cu `REVIEW_REQUIRED`; doar decizia userului îl trece în `REVIEWED`
3. `entity_kind_observed ∈ {PROVIDER_PAGE, PROVIDER_NAMED, SOFTWARE_TOOL}` → `INCLUDE`
4. `entity_kind_observed = UNCERTAIN` → `REVIEW`
5. altfel → `EXCLUDE_NOT_PROVIDER` (articol, director, publisher etc. rămân în registru ca surse)

`SOFTWARE_TOOL` intră în reuniune. Separarea furnizor / Technology Provider
se face în Verification, nu aici. Valoarea `INCLUDE` înseamnă că rândul
intră în materialul pentru Candidate Set. Nu înseamnă eligibilitate.

## Reguli de extragere

1. **As-returned.** Se extrage doar ce se vede în capturile execuției. Paginile și sursele nu se deschid.
2. **SERP.** Fiecare rezultat organic vizibil devine un rând `SERP_RESULT`, chiar dacă e irelevant sau nu e furnizor. Pozițiile sunt continue pe toate paginile capturate.
3. **SERP_SNIPPET.** Câte un rând pentru fiecare nume de posibil furnizor scris efectiv în titlul sau fragmentul unui rezultat terț, legat de părinte.
4. **AI.** Fiecare entitate numită în text devine un rând `AI_RESPONSE`, chiar și fără URL. Excepție: nu se extrag numele produselor și platformelor AI sau de căutare folosite ca subiect general al răspunsului (ChatGPT, Gemini, Claude, Perplexity, Copilot, Google AI Overviews, Google, Bing, OpenAI), nici standardele tehnice (Schema.org). Ele nu sunt candidați, iar o listă completă ar dilua registrul. Platformele de listare sau recenzii recomandate ca acțiune (Clutch, TripAdvisor, Wikipedia etc.) se extrag, cu `entity_kind_observed = OTHER`. Un nume repetat în același răspuns devine un singur rând, la prima apariție. Fiecare sursă afișată (link, card, notă de subsol) devine un rând `AI_CITATION`.
5. **Clarificare.** Dacă AI-ul cere o clarificare și nu numește nimic, execuția nu are rânduri. Asta se vede în statistici ca „execuții fără observații”, nu ca lipsă.
6. **Irelevanță.** Rândurile unei execuții irelevante se extrag complet și se marchează. Nu se omit.
7. **Verbatim.** Numele, titlurile, URL-urile și fragmentele se transcriu exact, cu diacriticele și greșelile originale. O transcriere nesigură se marchează în `notes` cu `TRANSCRIPTION_UNCERTAIN`.
