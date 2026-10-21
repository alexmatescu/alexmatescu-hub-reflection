# Fișa rulării — `run-sheet.yaml` (opțională)

Contextul de sesiune care se vede în capturi îl extrage agentul la STEP 5
(`session-context-schema.md`). Fișa servește la două lucruri: (1) completează
ce nu se vede, cum ar fi dispozitivul, locația fizică, setările vizibile doar
în pagina de setări, incidentele și abaterile cu motivele lor; (2) permite
comparația declarat ↔ observat (`MATCH` / `MISMATCH`). Oricare câmp poate
rămâne gol.

Fișa rulării este declarația operatorului, adică a persoanei care a rulat
interogările și a făcut capturile. Agentul o validează și o preia verbatim
în pachet, dar nu o completează și nu o corectează. Un câmp lăsat gol devine
`UNKNOWN` și apare în README ca necunoscută declarată.

```yaml
instance_id: MKT-RO-AIV-2026Q4-PILOT
operator: Alex Matescu
query_set_id: MKT-RO-AIV-DISCOVERY-v0.1.0
work_sessions:
  WS1:
    date: ""              # YYYY-MM-DD
    start: ""             # HH:MM
    end: ""               # HH:MM
    timezone: Europe/Bucharest
    physical_location: "" # ex. România, oraș
    network: ""           # ex. Wi-Fi mobil (nu rețeaua obișnuită)
    browser_reported_location: ""  # locația dată de browser / IP, dacă diferă de cea fizică
    device: ""            # ex. MacBook, macOS
    browser: ""           # ex. Chrome <versiune>

execution_order: ""       # ordinea rulării: suprafețe și query-uri

surfaces:
  GSEARCH:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    private_window: ""       # YES / NO / UNKNOWN
    displayed_location: ""   # locația afișată de Google, dacă s-a văzut
    language_interface: ""
    pages_captured: 3
    ai_overview_captured: ""   # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO
  BSEARCH:
    work_session: WS1
    account_state: ""
    private_window: ""
    displayed_location: ""
    language_interface: ""
    pages_captured: 1
    cookies: ""
    new_window_per_query: ""
    notices: ""              # ex. „Some results have been removed”
  GAIMODE:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)
  CHATGPT:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)
  CLAUDE:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)
  COPILOT:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)
  GEMINI:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)
  PERPLEXITY:
    work_session: WS1
    account_state: ""        # LOGGED_OUT / LOGGED_IN / UNKNOWN
    account_tier: ""         # free / plus / pro / ... / UNKNOWN
    model_displayed: ""      # verbatim din interfață sau UNKNOWN
    web_access_setting: ""   # ON / OFF / AUTO / NO_CONTROL / UNKNOWN
    memory_personalization: "" # OFF / ON / NOT_AVAILABLE / UNKNOWN
    special_modes: NONE      # fără Deep Research / agent în condiția de bază
    new_conversation_per_query: ""  # YES / NO
    cookies: ""              # REJECTED / ACCEPTED / UNKNOWN
    new_window_per_query: "" # YES / NO (fereastră privată nouă pentru fiecare query)

incidents:                # un bloc per incident: INC-01, INC-02, ...
  INC-01:
    surface: ""
    query_id: ""
    description: ""
    retry: ""             # YES / NO

deviations:               # abateri declarate față de setul de query-uri
  DEV-01:
    rule: "DISCOVERY v0.1.0 §7 — pilot pe 3 suprafețe"
    actual: "Pilot rulat pe 8 suprafețe (4 query-uri × 8 = 32 execuții)"
    reason: ""
  DEV-02:
    rule: "DISCOVERY v0.1.0 §6 — inspectarea paginilor relevante din rezultate"
    actual: "Nu s-au deschis paginile; s-au capturat doar SERP-urile și răspunsurile"
    reason: "Principiul as-returned: se folosesc răspunsurile așa cum le returnează query-ul"
  DEV-03:
    rule: "DISCOVERY v0.1.0 §6 — primele 20 de rezultate organice"
    actual: "Primele 3 pagini SERP capturate pe Google și Bing"
    reason: ""
  DEV-04:
    rule: "DISCOVERY v0.1.0 §6 — AI Overview observat separat în Google Search"
    actual: "AI Overview nu a fost capturat"
    reason: ""

notes: ""
```

Fișa folosește doar subsetul YAML suportat de parserul agentului: perechi
`cheie: valoare`, blocuri imbricate și liste simple de scalari. Nu folosește
ancore, liste inline sau liste de obiecte. De aceea sesiunile, incidentele și
abaterile sunt blocuri cu cheie (`WS1`, `INC-01`, `DEV-01`). Un incident cu
toate câmpurile goale se ignoră.

Abaterile DEV-01…DEV-04 sunt cele cunoscute pentru primul pilot, la 2026-10-11.
Câmpul `reason` îl completează operatorul.

**Execuțiile lipsă** se declară tot ca abateri (`SKILL.md` §2.5). O execuție rulată, dar necapturată, contează ca nerulată. Exemplu:

```yaml
  DEV-05:
    rule: "Execuții așteptate: queries_executed × suprafețe"
    actual: "BSEARCH nerulat pentru niciun query (NOT_RUN)"
    reason: "Declarația operatorului"
  DEV-06:
    rule: "Execuții așteptate: queries_executed × suprafețe"
    actual: "GAIMODE și CHATGPT, Q-USER-001: rulate, dar necapturate (RUN_NOT_CAPTURED); tratate ca nerulate"
    reason: "Capturile nu au fost salvate"
```

**Notițele operatorului într-un document.** Dacă operatorul pune în rădăcina
folderului de capturi un document (de exemplu `Draft pilot 2 Romania.docx`),
documentul se sigilează (Document ID, `naming-convention.md` §3.1), iar
agentul îi transcrie declarațiile în fișa rulării. Fiecare câmp transcris
păstrează sensul documentului, fără completări. Ce documentul nu spune rămâne
gol. Fișa notează sursa: `source_document: <Document ID>`.

Câmpurile pe suprafață sunt preluate verbatim în README (§4). Doar
`account_state`, `private_window`, `displayed_location`, `model_displayed`,
`account_tier` și `language_interface` se compară cu ce se vede în capturi.
