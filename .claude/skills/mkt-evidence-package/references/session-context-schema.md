# Session Context: schemă, reguli de observare și agregare

Contextul de sesiune se stabilește la **pasul preliminar STEP 5**, înainte de
clasificarea pe query și înainte de extragerea rezultatelor. Claude deschide
fiecare captură și notează **numai ce se vede** despre starea sesiunii. În
acest pas nu interpretează query-ul și nu citește rezultatele.

Fișier de staging: `session-context.csv`, un rând per Evidence ID.
Artefact final: `<instance-slug>_session-context_v<metadata_version>.csv`.

## 1. Reguli de observare

1. **Indicator vizibil, nu presupunere.** Fiecare valoare diferită de `NOT_VISIBLE` are o bază (`*_basis`) care descrie elementul de pe ecran: eticheta „Incognito”, butonul „Conectați-vă”, avatarul din colț, eticheta „Temporary chat”, mesaje anterioare în fir etc.
2. **Absența nu e dovadă.** Dacă indicatorul nu apare, valoarea e `NOT_VISIBLE`, nu `NO`. Valoarea opusă se poate nota doar când interfața arată explicit starea alternativă. Exemplu: un buton „Conectați-vă” vizibil susține `LOGGED_OUT`.
3. **Captura întreagă contează.** Capturile făcute după scroll arată adesea doar conținut. Pentru ele, câmpurile de interfață sunt `NOT_VISIBLE`, iar starea execuției se stabilește la agregare, din capturile care arată interfața.
4. **Date de cont.** Emailul și numele contului nu se transcriu niciodată. Se notează `account_identity_visible = YES`, iar captura primește `PRIVACY_REVIEW_REQUIRED`.
5. **Fără efect asupra rezultatelor.** Contaminarea și starea sesiunii se marchează, dar nu șterg și nu exclud execuții. Efectul lor se vede în raportare.

## 2. Coloane

`S` = SEARCH (GSEARCH, BSEARCH), `A` = AI (GAIMODE, CHATGPT, CLAUDE, COPILOT,
GEMINI, PERPLEXITY). Pentru o coloană care nu se aplică suprafeței, valoarea
este `NOT_APPLICABLE`.

| # | Coloană | Aplicare | Valori | Note |
|---|---|---|---|---|
| 1 | `evidence_id` | toate | precompletat | |
| 2 | `mapped_surface` | toate | precompletat | Din detecție. |
| 3 | `observed_surface` | toate | cod / `UNKNOWN` | Ce produs se vede efectiv. Dacă diferă de `mapped_surface` → `MISFILED_SURFACE`. |
| 4 | `ui_frame_visible` | toate | `FULL` / `PARTIAL` / `CONTENT_ONLY` | Cât din interfață se vede: bara browserului, antetul produsului. Explică valorile `NOT_VISIBLE`. |
| 5 | `browser_observed` | toate | verbatim (ex. `Chrome`) / `NATIVE_APP` / `NOT_VISIBLE` | |
| 6 | `private_window_observed` | S, A* | `YES` / `NO` / `NOT_VISIBLE` | `YES` doar cu indicator de incognito sau InPrivate. `NO` doar dacă bara browserului se vede integral, fără indicator. *Se completează și pentru A când produsul rulează în browser. |
| 7 | `private_window_basis` | dacă col. 6 ≠ `NOT_VISIBLE` | text | |
| 8 | `account_state_observed` | toate | `LOGGED_IN` / `LOGGED_OUT` / `NOT_VISIBLE` | |
| 9 | `account_state_basis` | dacă col. 8 ≠ `NOT_VISIBLE` | text | Ex. „buton Conectați-vă în antet”, „avatar în colțul dreapta-sus”. |
| 10 | `account_identity_visible` | toate | `YES` / `NO` / `NOT_APPLICABLE` | `YES` → col. 27 = `PRIVACY_REVIEW_REQUIRED`. |
| 11 | `account_tier_observed` | A | verbatim (ex. `Plus`, `Pro`) / `NOT_VISIBLE` | |
| 12 | `location_displayed` | S | verbatim / `NOT_VISIBLE` | Locația afișată de motor, ex. în subsolul Google. Se transcrie exact. |
| 13 | `location_source` | S | `FOOTER` / `LOCAL_MODULE` / `SETTINGS` / `OTHER` / `NOT_APPLICABLE` | |
| 14 | `ui_language_observed` | toate | cod (ex. `ro`, `en`) / `NOT_VISIBLE` | Limba interfeței, nu limba răspunsului. |
| 15 | `conversation_mode_observed` | A | `TEMPORARY` / `NEW_CONVERSATION` / `EXISTING_CONVERSATION` / `NOT_VISIBLE` | `TEMPORARY` cere eticheta modului temporar sau incognito al produsului. `EXISTING_CONVERSATION` cere mesaje anterioare vizibile în același fir. `NEW_CONVERSATION` cere ca începutul firului să fie vizibil și să conțină doar query-ul curent. |
| 16 | `conversation_mode_basis` | dacă col. 15 ≠ `NOT_VISIBLE` | text | |
| 17 | `prior_turns_visible` | A | `YES` / `NO` / `NOT_VISIBLE` | `NO` doar dacă începutul firului se vede. |
| 18 | `history_sidebar_visible` | A | `YES` / `NO` / `NOT_VISIBLE` | Istoricul conversațiilor afișat lateral. **Nu** înseamnă contaminare. Se notează doar ca indicator al contului. |
| 19 | `model_displayed` | A | verbatim / `NOT_VISIBLE` | |
| 20 | `special_mode_observed` | A | `NONE_VISIBLE` / `DEEP_RESEARCH` / `AGENT` / `REASONING` / `OTHER` | `OTHER` se detaliază în `notes`. |
| 21 | `web_search_indicator` | A | `VISIBLE` / `NOT_VISIBLE` | Ex. „Searched the web”, surse sau carduri de căutare. |
| 22 | `memory_indicator` | A | verbatim (ex. „Memory updated”) / `NOT_VISIBLE` | |
| 23 | `attached_context_visible` | A | `YES` / `NOT_VISIBLE` | Proiect, fișiere, GPT personalizat, instrucțiuni. |
| 24 | `contamination_status` | toate | `NONE_OBSERVED` / `SUSPECTED` / `CONTAMINATED` / `NOT_ASSESSABLE` | §3. |
| 25 | `contamination_types` | dacă col. 24 ∈ {`SUSPECTED`, `CONTAMINATED`} | listă separată prin `;` (§3) | |
| 26 | `contamination_basis` | dacă col. 24 ∈ {`SUSPECTED`, `CONTAMINATED`} | text | Ce se vede pe ecran. |
| 27 | `privacy_flag` | toate | `NONE_OBSERVED` / `PRIVACY_REVIEW_REQUIRED` / `PRIVACY_CONFIRMED` | `PRIVACY_CONFIRMED` doar după confirmarea explicită a operatorului la REVIEW (0); confirmarea se notează în `notes`. |
| 28 | `review_status` | toate | `REVIEWED` / `REVIEW_REQUIRED` | |
| 29 | `notes` | toate | text / gol | |

## 3. Contaminare

| Tip | Exemple vizibile | Status tipic |
|---|---|---|
| `PRIOR_TURNS_IN_THREAD` | Un alt query sau mesaj apare deasupra query-ului curent, în același fir | `CONTAMINATED` |
| `PERSONALIZED_REFERENCE` | Răspunsul face referire la utilizator, la firma lui, la locația lui personală sau la conversații anterioare | `CONTAMINATED` |
| `MEMORY_INDICATOR` | „Memory updated”, „Based on your saved memories” | `SUSPECTED`, sau `CONTAMINATED` dacă răspunsul folosește memoria |
| `CUSTOM_CONTEXT` | Proiect, GPT personalizat, instrucțiuni sau fișiere atașate | `SUSPECTED` / `CONTAMINATED` |
| `SEARCH_HISTORY_SIGNAL` | Sugestii din istoric în caseta de căutare, „Ați vizitat această pagină” | `SUSPECTED` |
| `LOGGED_IN_NON_TEMPORARY` | Sesiune logată, nu în mod temporar, fără alt indicator | `SUSPECTED` |
| `OTHER` | Detaliat în `contamination_basis` | după caz |

- `NONE_OBSERVED`: zona relevantă se vede (începutul firului sau antetul SERP) și nu există niciun indicator.
- `NOT_ASSESSABLE`: captura nu arată zona relevantă, de exemplu o captură după scroll.

`LOGGED_IN_NON_TEMPORARY` e tratat intenționat ca suspiciune, nu ca dovadă.
Arată că există posibilitatea de personalizare, nu că a avut loc.

## 4. Agregare (`build_session_context.mjs`, determinist)

Se agregă pe **suprafață** la STEP 5 și pe **execuție** după ce STEP 7 leagă
capturile de execuții.

- **Câmpuri de stare** (col. 6, 8, 11, 12, 14, 15, 19, 20): dacă toate valorile diferite de `NOT_VISIBLE` sunt identice → `CONSISTENT` cu acea valoare. Dacă există cel puțin două valori diferite → `CONFLICT`, care intră automat în review. Dacă toate sunt `NOT_VISIBLE` → `NOT_VISIBLE`.
- **Contaminare**: se ia valoarea cea mai severă, în ordinea `CONTAMINATED` > `SUSPECTED` > `NONE_OBSERVED` > `NOT_ASSESSABLE`. Execuția e `NONE_OBSERVED` doar dacă cel puțin o captură a ei a putut fi evaluată și niciuna nu are indicator.
- **Rezultat**: `session-context-summary.json`, cu tabel pe suprafață și pe execuție și cu numărul de capturi pe fiecare valoare.

## 5. Reconcilierea cu fișa rulării (opțională)

Dacă există `run-sheet.yaml`, fiecare câmp declarat se compară cu valoarea
agregată pe suprafață:

| Rezultat | Când |
|---|---|
| `MATCH` | Declarat = observat |
| `MISMATCH` | Declarat ≠ observat. Intră automat în REVIEW (0). |
| `NOT_DECLARED` | Observat, dar nedeclarat |
| `NOT_OBSERVABLE` | Declarat, dar `NOT_VISIBLE` în toate capturile |

Valoarea observată nu suprascrie declarația și nici declarația nu o
suprascrie pe cea observată. README-ul le arată pe amândouă.
