# Matricea de conformitate — implementarea v0.4.0

Implementare candidată pentru draftul AVL-203 v0.5.0 / AVL-204 v0.2.0, **nevalidată** ca implementare de referință (AVL-203 §19.4). Matricea arată ce acoperă codul, prin ce test și ce rămâne în afara lui. Nu este o declarație de conformitate cu o versiune 1.0.0.

Stare la 25 octombrie 2026, după 150 de teste locale (server pe 127.0.0.1). O rulare `TEST` pe delamatescu.ro a fost făcută cu v0.3.0 (grila 0.1.0); cu v0.4.0 nu s-a făcut încă nicio rulare pe un site real.

Statusuri: **acoperit** (implementat și testat) · **parțial** (implementat incomplet sau netestat pe un caz) · **manual** (depinde de procesul operatorului, nu de cod) · **neaplicabil** (cu motiv) · **blocat** (lipsește o funcție sau o decizie).

Fișierele sunt în `scripts/avl203/`; testele în `tests/`. Alegerile `OP-*` sunt în `docs/avl-203-204-registru-implementare.md`. Abaterile rămase sunt `DEV-G01` (caz neacoperit de grilă) și `DEV-G02` (intenție de indexare nedeclarată), în `scripts/avl203/diagnose.py`.

## AVL-203 v0.5.0

| Cerință | Implementare | Test | Status |
|---|---|---|---|
| REQ-001 plan înaintea primului request | `plan.validate`, `plan.freeze`, `plan.load_frozen`; captura pornește doar din plan înghețat cu hash verificat | `test_plan.FreezeTest`, `test_capture.test_tampered_plan_makes_no_request`, `test_cli.test_invalid_plan_stops_before_capture` | acoperit |
| REQ-002 rezultate negative conservate | `requests.jsonl` păstrează toate încercările și cererile sărite, cu motiv | `test_capture.FailureModesTest`, `test_out_of_bounds_targets_skipped_not_requested` | acoperit |
| REQ-003 `UNKNOWN` ≠ `NO` | stări `UNKNOWN` / `NEDETERMINAT` / „nu poate fi stabilit” | `test_analyze.Tc04Test`, `test_signals_content` | acoperit |
| REQ-004 straturi separate | comenzi și fișiere separate: `capture` → `analyze` (observations.json) → `diagnose` (diagnostic.json) → `report` | `test_cli.test_pipeline` | acoperit |
| REQ-005 versiune nouă la schimbarea unui TC | `PROTOCOL_VERSION` verificat în plan | — | manual |
| REQ-006 câmpurile minime ale manifestului | `manifest/config.json` scris înainte de primul request; necunoscutele marcate (`unknown_fields`) | `test_capture.test_config_written_before_first_request` | acoperit |
| REQ-007 date sensibile nepublicate | nicio comandă de publicare; rulările stau în `evidence/work/` (ignorat de git); fără `local_ip` în metrici | — | parțial: redactarea prin copii derivate (de exemplu `Set-Cookie`) nu e implementată |
| REQ-008 headere și corp separate, status, URL, redirecturi, tip, dimensiune, exit | `capture.Recorder.fetch`, `httpobs.summarize` (dimensiunea transferată separat de cea salvată) | `test_capture.test_compressed_size_separate_from_saved_body`, `test_redirect_headers_kept_for_chain` | acoperit |
| REQ-009 blocul răspunsului final | `httpobs.response_blocks` (exclude `1xx` și răspunsul proxy la CONNECT) | `test_capture.test_redirect_headers_kept_for_chain` | parțial: cazurile `1xx` / CONNECT sunt implementate, netestate |
| REQ-010 TLS/DNS neascunse | fără `--insecure`; eroarea păstrată în `.stderr` și exit | `test_capture.test_tls_error_kept_not_retried_not_bypassed`, `test_dns_error_retried` | acoperit |
| REQ-011 GET | `curl` fără `--head` | `test_capture` | acoperit |
| REQ-012 `200` ≠ indexare; `403` ≠ furnizor blocat | `report.FORBIDDEN`, limitele din raport | `test_diagnose.ExcludedClaimsTest` | acoperit |
| REQ-013 | **RETRASĂ** în 0.4.0, înlocuită de REQ-041 | — | neaplicabil |
| REQ-014 statusul TC-04 după tabel | `analyze.tc04`, după tabelul din v0.5.0 | `test_analyze.Tc04Test` | acoperit |
| REQ-015 sitemap ≠ tot site-ul descoperibil | note în observații, formulare exclusă | `test_diagnose.ExcludedClaimsTest` | acoperit |
| REQ-016 TC-05 din raw HTML, cu locație | `signals.extract` | `test_signals_content.SignalsTest` | acoperit |
| REQ-017 extracție nesigură → `UNKNOWN` | `signals.extract`, `signals.decode_html` | `test_non_html_and_bad_encoding_unknown` | acoperit |
| REQ-018 manifest UA versionat | `config/user-agents.v0.1.0.tsv`, hash în plan și `config.json` | `test_capture.test_config_written_before_first_request` | acoperit |
| REQ-019 dublă captură de referință | OP-11: referință înainte și după User-Agent-i | `test_capture.test_tc06_order_reference_before_and_after_agents` | acoperit |
| REQ-020 variabilitate → conținut neatribuit | `analyze.tc06` | `test_analyze.Tc06VariabilityTest` | acoperit |
| REQ-021 diferență ≠ cloaking | note, formulare exclusă | `test_diagnose.ExcludedClaimsTest` | acoperit |
| REQ-022 checksum SHA-256 peste manifest și artefacte, verificat | `integrity.write_checksums`, `integrity.verify` | `test_integrity` | acoperit |
| REQ-023 artefacte nemodificate, legate de run ID | scriere `x` (fără suprascriere), `evidence_id` cu run ID, analize în `derived/` | `test_integrity`, `test_cli.test_pipeline` | acoperit |
| REQ-024 aceeași versiune, manifest UA, URL-uri în serie | versiunile sunt înregistrate | — | manual: comparația între rulări nu e implementată |
| REQ-025 eticheta fixată la înregistrare | eticheta din planul înghețat intră în run ID | `test_plan.test_series_requires_series_id` | acoperit |
| REQ-026 `TEST` necomparat, nepublicat | marcaj în raport | `test_cli.test_pipeline` | acoperit |
| REQ-027 fără cauzalitate din succesiune | limitele din raport | — | acoperit |
| REQ-028 livrabilele minime | manifest, artefacte, exit-uri, observații, index, hash-uri, abateri (în raport) | `test_cli.test_pipeline` | parțial: de confirmat la prima rulare reală |
| REQ-029 tipul entității și categoriile | `plan.validate` | `test_plan.ValidateTest` | acoperit |
| REQ-030 plan fix; completare = rulare nouă | plan înghețat cu hash; plan schimbat → `INVALID` | `test_integrity.test_changed_plan_invalid_even_if_checksums_regenerated` | acoperit |
| REQ-031 texte-cheie declarate; normalizare înregistrată | `key_texts` obligatoriu în plan; `operational.v0.1.0.json` copiat în manifest (OP-01) | `test_plan`, `test_signals_content.ContentTest` | acoperit |
| REQ-032 TC-08 per text și zonă, cu locație | `content.analyze` | `test_location_is_original_line_and_col`, `test_every_zone_reported` | acoperit |
| REQ-033 diagnostic separat; versiunea grilei în manifest și raport | `config.json` (`grid`), `diagnostic.json`, raport §9 | `test_cli.test_pipeline` | acoperit |
| REQ-034 stare și observații-suport | `diagnose.Diagnoser.add` | `test_diagnose.BaselineTest` | acoperit |
| REQ-035 cele patru elemente ale recomandării | `recommend.build` | `test_diagnose.RecommendTest` | acoperit |
| REQ-036 grilă fixată, aplicată identic | `--rules` verificat față de versiunea implementată | `test_cli.test_pipeline` | parțial: versionarea schimbărilor de regulă e proces (manual) |
| REQ-037 afirmații excluse | `report.check_excluded` pe textele generate | `test_diagnose.ExcludedClaimsTest` | parțial: lista acoperă formele din AVL-204 §8, nu toate echivalentele posibile |
| REQ-038 extensii declarate înainte | câmpul `extensions` validat în plan | `test_plan.test_extensions_must_be_explicit` | parțial: dovezile unei extensii nu sunt încă gestionate |
| REQ-039 constatări pe extensii | — | — | blocat: nu există suport pentru extensii |
| REQ-040 raport cu straturi separate, limite, identificare | `report.report` | `test_cli.test_pipeline` | acoperit |
| REQ-041 RFC 9309 prin parser sau manual, metoda înregistrată | `robots.py`, `--robots-manual` | `test_robots` | acoperit |
| REQ-042 pagina de identitate obligatorie | `plan.validate` (fără `NOT_APPLICABLE`, absență cu proveniență) | `test_plan.test_contact_*` | acoperit |
| REQ-043 numai proiecte sau clienți, cu fișa entității | câmpul obligatoriu `entity_sheet` (referință, reprezentant, dată, relație proiect/client/laborator) | `test_plan.test_entity_sheet_required_and_relationship` | parțial: codul verifică declarația, nu existența fișei |
| REQ-044 repetarea unică la erori de rețea, DNS, timeout | `capture.Recorder.fetch` (OP-09) | `test_capture.test_network_error_retried_once_with_declared_pause`, `test_dns_error_retried`, `test_timeout_retried` | acoperit |
| REQ-045 variabilitatea referinței la status, URL, headere | `analyze.tc06`, `diagnose` (`R-Z6-07`) | `test_analyze.test_variable_reference_status_not_attributed`, `test_diagnose.Z6Test` | acoperit |

44 de identificatori activi (001–045, fără 013).

## AVL-204 v0.2.0

| Cerință | Implementare | Test | Status |
|---|---|---|---|
| REQ-001 integritatea: `R-VAL-01` per artefact, rulare invalidă pentru manifest, checksum-uri sau plan | `analyze` verifică întâi; `INVALID` → raport de invaliditate; `R-VAL-01` per artefact | `test_analyze.IntegrityGateTest`, `test_diagnose.IntegrityRuleTest` | acoperit |
| REQ-002 zonă, stare, regulă, observații | `Diagnoser.add` | `test_diagnose.BaselineTest` | acoperit |
| REQ-003 nesigur → nu „confirmată” | cazurile neacoperite → „nu poate fi stabilit” + DEV-G01 / DEV-G02 | `test_diagnose` (Z1–Z6) | acoperit |
| REQ-004 restricție declarată ≠ problemă | `R-Z1-10` (`intentional_status`), `R-Z2-05`, `R-Z4-01`, `R-Z6-08` | `test_r_z1_10_declared_status`, `test_r_z2_01_not_when_block_declared`, `test_declared_block_not_a_problem` | acoperit |
| REQ-005 zona = cea mai severă; necunoscutele separat | `diagnose.zones` | `test_zone_state_is_most_severe_and_undetermined_listed` | acoperit |
| REQ-006 „nicio problemă” ≠ certificare | textul din raport | `test_cli.test_pipeline` | acoperit |
| REQ-007 reguli §6 cu identificator | `diagnose.RULES` | `test_diagnose` | acoperit |
| REQ-008 Z2 după determinarea RFC 9309 | `Diagnoser.z2` | `test_diagnose.Z2Test` | acoperit |
| REQ-009 clasă de prioritate pentru probleme; efortul ca estimare | `recommend.build` (verificările suplimentare fără clasă) | `test_diagnose.RecommendTest` | parțial: efortul și dependențele rămân de completat de redactor |
| REQ-010 formulări excluse | `report.check_excluded` | `test_diagnose.ExcludedClaimsTest` | parțial (ca AVL203-REQ-037) |
| REQ-011 aplicare identică pentru toate entitățile evaluate cu o versiune | versiunea e înregistrată per rulare; regulile sunt cod determinist | `test_analyze.test_deterministic_reanalysis` | acoperit |
| REQ-012 abateri declarate | `diagnostic.json` → `deviations`; raport §7 | `test_diagnose` | acoperit |
| REQ-013 regulă schimbată → versiune nouă | — | — | manual |
| REQ-014 comparații cu aceeași versiune | — | — | blocat: comparația între rulări nu e implementată |
| REQ-015 numai proiecte sau clienți | `entity_sheet` obligatoriu în plan | `test_plan.test_entity_sheet_required_and_relationship` | parțial (ca AVL203-REQ-043) |
| REQ-016 succes doar pe date complete; zonă fără constatări = „neevaluată” | precondiții în `diagnose` (`R-Z1-08`, `R-Z4-09`, `R-Z5-04`, `R-Z6-05`); `diagnose.zones` | `test_diagnose.BaselineTest.test_zone_without_findings_is_not_evaluated`, `test_r_z1_03` | acoperit |
| REQ-017 politica din fișa entității; implicit acces total | `plan.validate` (doar `PERMIS` / `BLOCAT_INTENTIONAT`, cu sursă); `Diagnoser.policy_for` (implicit `PERMIS`) | `test_plan.test_unknown_policy_rejected`, `test_diagnose.test_r_z2_01_default_policy_is_full_access` | acoperit |

## AVL-200 (cerințele aplicabile)

| Cerință | Status | Notă |
|---|---|---|
| REQ-001, 005, 019 trasabilitate până la dovadă | acoperit | `evidence_ids` pe fiecare observație și constatare |
| REQ-002, 003 observație ≠ interpretare | acoperit | straturi și fișiere separate |
| REQ-004, 010, 025 incertitudinea rămâne vizibilă | acoperit | `UNKNOWN` / „nu poate fi stabilit”, niciodată `NO` |
| REQ-007 rezultatele excluse nu dispar | acoperit | încercările eșuate și cererile sărite rămân în jurnal |
| REQ-008 valorile calculabile nu se estimează | acoperit | dimensiuni, hash-uri, statusuri calculate |
| REQ-009, 037 originea câmpurilor | parțial | câmpurile nu sunt etichetate DETERMINISTIC / CLASSIFICATION / DERIVED |
| REQ-012, 040 punct de măsurare ≠ etapă | acoperit | `measurement_point` și `methodological_phase` separate |
| REQ-015, 029, 032, 036 fără rescriere | acoperit | scriere fără suprascriere; analize noi în `derived/` |
| REQ-016, 017 timp și proveniență | acoperit | ora UTC a fiecărui request; necunoscutele marcate |
| REQ-018 SHA-256 ≠ autenticitate | acoperit | notă în TC-07 și raport |
| REQ-020 criteriu operațional al clasificării | acoperit | reguli deterministe + registru |
| REQ-023 fără cauzalitate | acoperit | limitele raportului |
| REQ-027 abateri documentate | acoperit | DEV-* în raport |
| REQ-028 fără secrete în pachete publice | parțial | fără redactare automată; rulările rămân private |
| REQ-031, 034 validare înainte de manifest; manifest verificat | acoperit | `run-final.json` înaintea checksum-urilor; verificare la captură și la analiză |
| REQ-033 limita pachetului | parțial | directoarele acoperite sunt în cod, nu într-un README al pachetului |
| REQ-035 audit trail fără „gândire internă” | acoperit | jurnal de acțiuni și rezultate |
| REQ-039 eșec ≠ PASS | acoperit | coduri de ieșire distincte; `INVALID` oprește diagnosticul |
| REQ-013 etichete istorice | neaplicabil | rulări noi |
| REQ-041 PNG → WebP | neaplicabil | protocolul nu produce capturi de ecran |
