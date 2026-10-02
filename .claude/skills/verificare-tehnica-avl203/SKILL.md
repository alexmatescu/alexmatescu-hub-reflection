---
name: verificare-tehnica-avl203
description: Execută protocolul AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility (Core Technical Web Measurement Protocol) asupra unor URL-uri declarate într-un plan de măsurare. Rulează verificările TC-00…TC-07 (contextul rulării, HTTP GET / URL final, variante http/https și www, robots.txt, sitemap, semnale raw HTML, User-Agent Response Parity, integritate), conservă artefactele brute, construiește evidence index-ul și checksum-urile și raportează doar observațiile permise de protocol, fără interpretare. Invocă atunci când userul cere „verificarea tehnică AVL-203”, „rulează protocolul tehnic”, „baseline tehnic T0 / remăsurare F1 pentru un site”, sau un audit tehnic minim de accesibilitate pentru crawlere AI. NU publică nimic, NU face audit SEO complet, NU interpretează vizibilitatea AI și NU modifică documentul AVL-203.
---

# Verificare tehnică AVL-203

Agent de execuție pentru `src/content/lab/AVL/AVL-203_Protocol_minim_verificare_tehnica_site.md`. Documentul normativ are precedență asupra acestui fișier: dacă AVL-203 se schimbă (versiune nouă), recitește-l și semnalează orice divergență față de implementare înainte de rulare.

> **Principiu (AVL-203):** documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI.

## Statutul acestei implementări

- AVL-203 este **Draft 0.2.0**, neactivat. Rezultatele unei rulări sunt observații tehnice valide ca dovezi, dar procesul nu este încă „conform AVL-203 1.0.0”.
- Scriptul este **implementare candidată, NEVALIDATĂ** ca implementare de referință (AVL-203 §17.4). Fiecare rulare declară asta în `manifest/run.json` și `exceptions.md`.
- Limitări asumate, care decurg din deciziile deschise ale AVL-203 §17:
  - **TC-03:** politica robots aplicabilă rămâne `NEDETERMINAT` pentru toți agenții — nu există încă parser RFC 9309 validat (§17.5). Agentul inventariază grupurile și regulile declarate, nu decide `ALLOW`/`DISALLOW`.
  - **TC-06:** șirurile User-Agent sunt înghețate în `config/user-agents.v0.1.0.tsv` cu status per rând (`OFICIAL`, `OFICIAL_CU_VERSIUNE_ALEASA`, `DOAR_TOKEN`, `NECONFIRMAT`) (§17.6). Nu modifica fișierul pentru o rulare; o schimbare înseamnă manifest nou, versionat.

## Fișiere

| Fișier | Rol |
|---|---|
| `scripts/run_avl203.sh` | capturile deterministe cu `curl` (comenzile din AVL-203 §4–§10), apoi analizorul și checksum-urile |
| `scripts/analyze_avl203.py` | TC-05, inventar robots, clasificare sitemap, comparație TC-06, evidence index, manifest, observații (doar biblioteca standard Python) |
| `config/user-agents.v0.1.0.tsv` | manifestul User-Agent înghețat la 2026-10-02, cu sursa fiecărui șir |

## Pasul 1 — Planul de măsurare (înainte de orice request)

AVL-203 §1 cere ca lista URL-urilor, motivele alegerii și limitele eșantionului să fie declarate **înaintea rulării**. Dacă userul nu a dat un plan:

1. cere-i URL-urile exacte, entitatea, eticheta rulării și motivul alegerii fiecărui URL;
2. scrie planul într-un fișier (ex. `evidence/work/avl203/plan-{entitate}-{eticheta}.md`) și arată-l userului;
3. abia apoi rulează.

**Eticheta rulării** (AVL-203 §11): `T0` pentru baseline, `F1`, `F2` … `Fn` pentru rulările ulterioare, în ordinea executării; `TEST` pentru rulări de probă care nu intră într-o serie de măsurare. Eticheta se atribuie la înregistrare și nu se schimbă ulterior. Pentru o remăsurare, folosește **aceleași URL-uri** și aceeași versiune a protocolului și a manifestului UA ca la `T0`; orice abatere se declară.

## Pasul 2 — Rularea

```bash
bash .claude/skills/verificare-tehnica-avl203/scripts/run_avl203.sh \
  --entity "delamatescu.ro" --label T0 \
  --plan evidence/work/avl203/plan-delamatescu-T0.md \
  https://delamatescu.ro/ https://delamatescu.ro/lab
```

Opțiuni: `--out DIR` (implicit `evidence/work/avl203`, ignorat de git), `--delay SECUNDE` (pauză între requesturi, implicit 1), `--chrome-version` (versiunea Chrome inserată în șirul oficial Googlebot, implicit `131.0.0.0`; se înregistrează în manifest).

Ce face, în ordine: TC-00 (mediul: `date -u`, `curl --version`, sistemul) → TC-01 (GET per URL) → TC-02 (`http`/`https` × `www`/non-`www` pe fiecare origine) → TC-03 (`robots.txt` per origine) → TC-04 (sitemap-urile declarate în robots, apoi `/sitemap.xml` și `/sitemap_index.xml`) → TC-06 (același GET pentru fiecare User-Agent din manifest; captura TC-01 și captura `client` din TC-06 formează dubla captură obligatorie a clientului de referință, AVL-203 §9) → analizorul (TC-05 + observații) → TC-07 (`sha256sums.txt` peste `manifest/` și artefacte + verificare). Requesturile sunt secvențiale, cu pauză, fără `--insecure`. Ultima linie a outputului este directorul rulării.

**Politețe și siguranță:** rulează doar asupra URL-urilor din plan. Nu rula în buclă, nu crește concurența, nu folosi protocolul pentru crawling complet (în afara Core, AVL-203 §12). Dacă un site răspunde cu `429`/`503` repetat, oprește-te și raportează.

## Pasul 3 — Verificarea rulării

Înainte de raport, confirmă din fișiere, nu din memorie:

- `integrity/verify.txt` se termină cu `exit=0` și fiecare fișier e `OK`;
- `manifest/run.json` are `start_utc`, `end_utc`, `curl_version`, `urls_testate`, `user_agents_efective`, `plan_de_masurare` (≠ `NEDECLARAT`, altfel e abatere);
- `exceptions.md` — erorile de captură (`curl_exit ≠ 0`) sunt listate, nu ascunse;
- `evidence-index.tsv` — fiecare artefact are `sha256` și e legat de TC, URL și UA.

## Pasul 4 — Raportul către user

Raportează **doar observațiile permise** din AVL-203 §3, pornind de la `observations.md`:

| TC | Ce poți afirma | Ce NU poți afirma |
|---|---|---|
| TC-01 | cod HTTP, URL final, număr redirecturi, tip, dimensiune | că pagina e indexată (`200` ≠ indexare) |
| TC-02 | convergența/divergența variantelor; erorile TLS/DNS | că domeniul „controlează” ambele hostname-uri |
| TC-03 | grupurile și regulile **declarate**, declarațiile `Sitemap` | politica aplicabilă unui crawler (rămâne `NEDETERMINAT`) |
| TC-04 | statusul după regula de mai jos | că tot site-ul e descoperibil |
| TC-05 | title, canonical declarat, meta robots, X-Robots-Tag, lang, prezența JSON-LD | canonicalul selectat de Google; validitatea Schema.org; utilizarea de către un model |
| TC-06 | variabilitatea intrinsecă (dubla captură a clientului, obligatorie); diferențe de status, URL, headere; diferențe de dimensiune/hash **doar dacă** variabilitatea intrinsecă e `NU` | cloaking; inaccesibilitate pentru furnizorul real (UA declarat ≠ crawler autentificat); diferențe de conținut atribuite UA-ului când răspunsul variază intrinsec |
| TC-07 | integritatea octeților după captură | autenticitatea sursei înaintea capturii |

Valorile `UNKNOWN`/`NOT_APPLICABLE`/erorile rămân distincte de `NO` (AVL-200 §6). Orice comparație între `T0` și `Fn` se prezintă ca observație tehnică; succesiunea temporală nu demonstrează cauzalitatea (AVL-203 §11).

### Regula de clasificare TC-04 (AVL-203 §7, v0.2.0)

| Status | Condiție |
|---|---|
| `DECLARED` | `robots.txt` declară ≥ 1 `Sitemap:` și cel puțin unul răspunde `2xx` |
| `UNAVAILABLE` | sitemap declarat, dar niciunul nu răspunde `2xx`; sau, fără declarație, căile convenționale dau erori/`5xx` |
| `FOUND_AT_CONVENTIONAL_PATH` | nicio declarație, dar `/sitemap.xml` sau `/sitemap_index.xml` răspunde `2xx` |
| `NOT_FOUND` | nicio declarație și toate căile convenționale răspund `404`/`410` |
| `UNKNOWN` | `robots.txt` nu a putut fi capturat |

## Ce NU face acest agent

- Nu publică rezultatele și nu le comite: `evidence/work/` e ignorat de git, iar repo-ul este public. Dovezile despre site-uri terțe nu ajung pe GitHub. Pentru împachetarea ca Evidence Package folosește skill-ul `evidence-release`, oprit înainte de release dacă datele nu trebuie publicate.
- Nu modifică AVL-203, manifestul UA sau scripturile în timpul unei rulări.
- Nu face audit SEO, Core Web Vitals, rendering JavaScript, validare Schema.org, crawling complet sau autentificarea roboților prin loguri (AVL-203 §12).
- Nu interoghează sisteme AI și nu deduce vizibilitate, citare sau recomandare (AVL-203 §13).
- Nu rescrie artefacte brute pentru un raport mai lizibil (AVL-200 §8.1).

## Când se schimbă implementarea

O modificare a scripturilor, a regulii TC-04 sau a manifestului UA care afectează comparabilitatea cere bump de `SCRIPT_VERSION` / fișier UA nou și menționarea în raportul rulării (AVL-203 §3, AVL-200 §19). Rulările vechi rămân atribuite versiunii cu care au fost făcute.
