# Structura README-ului

`build_readme.mjs` construiește README-ul mecanic, din config, fișa rulării,
`stats.json` și `validation-result.json`. Toate numerele sunt calculate de
script. Paragrafele narative sunt texte fixe, reproduse exact mai jos. Textul
liber vine doar din `config.notes` și din fișa rulării. Modelul nu adaugă
proză în acest pas.

```
# <instance_id> — Discovery Evidence Package

Series: <series_id> · Quarter: <quarter> · Instance type: <instance_type>
Query set: <query_set_id> (source SHA-256 <…>)
Package version: archive v<archive.version> / metadata v<metadata_version>
Captures: <n> · Executions: <n> · Observations: <n>
Generated: <data ISO>

## 1. Scop
## 2. Instanța și setul de query-uri        (query-uri executate × suprafețe; execuții lipsă)
## 3. Principiul as-returned
## 4. Context de sesiune                     (observat din capturi, pe suprafață; declarat în fișa rulării; MATCH/MISMATCH)
## 5. Abateri declarate                       (din fișa rulării, verbatim)
## 6. Sigilare și proveniență                 (manifest, archive_sha256, sealed_at)
## 7. Capture Index                           (statistici: roluri, statusuri, relevanță)
## 8. Observation Register                    (pe proveniență / suprafață / query / bandă de adâncime / relevanță / inclusion)
## 9. Relevanța față de query                 (execuții și rânduri ≠ RELEVANT, cu relevance_basis)
## 10. Incidente și anomalii                  (omisă dacă nu există; secțiunile următoare se renumerotează, fără gol)
## 11. Integritate                            (checksums, comanda de verificare)
## 12. Limitele interpretării
## 13. Ce NU conține pachetul
## 14. Versionare
## 15. Fișiere
```

## Texte fixe

**§1 Scop:** „Acest pachet conservă capturile și observațiile brute ale unei
rulări Discovery. Documentează ce au afișat suprafețele la momentul
capturii. Nu constituie Candidate Set, Market Reference Set sau o evaluare
a furnizorilor.”

**§3 As-returned:** „Au fost înregistrate exclusiv rezultatele afișate direct
de suprafață ca răspuns la interogare: rezultate SERP (poziție, titlu, URL
afișat, fragment) și textul răspunsurilor AI cu sursele afișate. Paginile
rezultatelor și sursele citate nu au fost deschise. Entitățile din interiorul
directoarelor sau articolelor nu au fost extrase, cu excepția numelor
vizibile în fragmentul SERP.”

**§4 Context de sesiune:** „Contextul de sesiune a fost stabilit din
indicatorii vizibili în capturi. NOT_VISIBLE înseamnă că indicatorul nu
apare pe ecran, nu că starea respectivă lipsea. Fereastra privată și
conversația nouă nu garantează absența personalizării sau a localizării.”

**§9 Relevanță:** „Calificarea IRRELEVANT descrie lipsa de legătură a
rezultatului cu intenția interogării, pe baza conținutului afișat. Nu este
o evaluare a furnizorului, a calității sau a eligibilității lui.”

**§12 Limite:** „Rezultatele motoarelor de căutare și răspunsurile AI depind
de momentul rulării, de versiunea modelului, de starea indexului, de cont,
personalizare și localizare. O singură execuție pe pereche query–suprafață
descrie o observație punctuală, nu o probabilitate stabilă de apariție.
Pachetul susține auditabilitatea, trasabilitatea și verificarea observațiilor
înregistrate, precum și reproductibilitatea protocolului documentat. Nu
susține reproductibilitatea unor rezultate identice. Prezența într-un rezultat
nu este o recomandare editorială a motorului. Absența nu dovedește
inexistența sau ieșirea de pe piață.”

**§13 Ce NU conține:** „Deduplicarea entităților, Verification (identitate,
serviciu, relevanță pentru România, eligibilitate), clasamente sau
concluzii despre piață.”
