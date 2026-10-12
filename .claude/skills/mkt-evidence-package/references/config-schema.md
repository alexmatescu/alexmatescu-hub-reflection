# `<instance>.mkt-package.yaml` — schema config-ului

Un config per instanță de rulare. Nimic nu e hardcodat în scripturi; valorile
de mai jos sunt cele ale pilotului, ca exemplu.

## Câmpuri obligatorii

| Câmp | Tip | Note |
|---|---|---|
| `series_id` | string | `MKT-RO-AIV`. |
| `instance_id` | string | `^[A-Z0-9]+(-[A-Z0-9]+)*$`, ex. `MKT-RO-AIV-2026Q4-PILOT`. Prefix pentru toate ID-urile. Ales o dată, nu se schimbă. |
| `instance_slug` | string | kebab-case, ex. `mkt-ro-aiv-2026q4-pilot`. Folosit în căi și nume de fișiere. |
| `instance_type` | enum | `PILOT`, `FULL`, `M<luna>` (luna din calendar, două cifre, ex. `M11`). `FULL` = rularea trimestrială completă (`<instanță>-FULL`); `M<luna>` = rularea lunară (`<instanță>-M11`), cu luna în trimestrul instanței. T0 / F1…Fn nu se folosesc în Market Discovery (setul v0.2.0 §2). |
| `quarter` | string | `^\d{4}Q[1-4]$`, ex. `2026Q4`. |
| `capture_folder.path` | string | Folderul nearhivat cu capturile. Nu se scrie niciodată în el. Subfolderele și numele fișierelor le determină agentul (`naming-convention.md` §2, §6). Documentele operatorului din rădăcină se sigilează separat (§3.1). Folderul unei instanțe nu trebuie să conțină folderul altei instanțe: fiecare rulare are folderul ei, `evidence/incoming/MKT-Evidence/<instance_slug>/`. |
| `archive.version` | string | ex. `"1.0"`. |
| `metadata_version` | string | ex. `"1.0"`. Independent de `archive.version`. |
| `query_set.source_path` | string | Fișierul `.md` sursă al setului. |
| `query_set.source_sha256` | string | SHA-256 așteptat. Nepotrivire → STOP. |
| `query_set.query_set_id` | string | ex. `MKT-RO-AIV-DISCOVERY-v0.1.0`. |
| `queries_executed` | list | ID-urile rulate efectiv, subset al setului. |

## Câmpuri opționale

| Câmp | Implicit | Note |
|---|---|---|
| `surface_map` | detectat | Suprascriere manuală subfolder → cod. Se folosește doar dacă detecția automată (`naming-convention.md` §2) nu poate decide. |
| `run_sheet.path` | — | Fișa rulării, opțională. Contextul de sesiune vizibil îl extrage agentul. |
| `search.declared_depth` | — | Adâncimea preregistrată. Pentru setul v0.2.0: `30` (~30 de poziții, după câte rezultate încarcă pagina; primele 3 pagini se păstrează întotdeauna). Rândurile de peste ea primesc `beyond_declared_depth = YES`. |
| `search.depth_band_size` | `10` | Mărimea benzilor `1-10`, `11-20`… |
| `filename_timestamp.pattern` | detectat | Suprascriere manuală a tiparului (regex cu grupuri numite `year`, `month`, `day`, `hour`, `minute`, `second`, opțional `ampm`). Implicit, agentul alege singur tiparul din biblioteca de la `naming-convention.md` §6. |
| `timezone` | — | Folosit doar pentru câmpurile declarate în fișa rulării. |
| `system_file_patterns` | `[".DS_Store", "._*", "Thumbs.db"]` | Listate în manifest ca `SYSTEM_FILE_EXCLUDED`; fără Evidence ID, nu intră în zip. |
| `release.github.enabled` | `false` | Dacă e `false`, pipeline-ul se oprește la STEP 16. |
| `release.github.repository` | `origin` al repo-ului | `owner/repo`. |
| `release.github.tag` | derivat | `naming-convention.md` §5. |
| `notes` | — | Text liber preluat verbatim în README. |

## Ce determină agentul singur, fără să întrebe

- **subfolderele și maparea lor la suprafețe**, prin aliasuri (`naming-convention.md` §2). Lista de suprafețe executate rezultă din subfolderele detectate. Agentul se oprește și întreabă doar dacă un subfolder nu se potrivește cu niciun alias sau dacă două subfoldere ajung la aceeași suprafață;
- **numele tuturor fișierelor și tiparul de timestamp din nume** (`naming-convention.md` §6);
- **ordinea folderelor**: prefixul numeric (`01.`, `02.`…) se înregistrează ca `folder_ordinal`.

Tot ce detectează agentul se scrie în `detection-report.json`, împreună cu baza fiecărei decizii, și se arată la REVIEW (0), STEP 6.

## Ce nu există, intenționat

Nu există `entity_name` / `entity_code` / `study_name`: pachetul descrie o
instanță de piață, nu o entitate. Nu există `extra_columns`: condițiile de
rulare sunt coloane fixe în schemă și în fișa rulării.
