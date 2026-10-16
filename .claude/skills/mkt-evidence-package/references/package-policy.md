# Politica pachetului

Politica este preluată din `evidence-release/references/release-policy.md` și
adaptată pentru un folder nearhivat și pentru registrul de observații.

## 1. Folderul sursă și arhiva

- Folderul de capturi este doar citit. Agentul nu redenumește, nu mută, nu șterge și nu „curăță” nimic în el.
- Conversia PNG → WebP q80 (STEP 1b, AVL-200 §8.1, AVL200-REQ-041) scrie într-un folder separat, `work/.../webp/converted/`, verificat pe fiecare fișier (decodare completă, dimensiuni identice, PSNR ≥ 40 dB). Acest folder se sigilează, iar capturile WebP sunt dovezile pachetului. Capturile PNG nu intră în arhivă și nu se publică; SHA-256-ul fiecăreia rămâne în manifestul conversiei, care intră în pachet și în manifestul de checksum-uri.
- O rulare sigilată înainte de AVL-200 2.0.0 rămâne în forma originală (`webp_conversion.enabled: false`, AVL200-REQ-013).
- Arhiva e creată o singură dată, la SEAL, și verificată în trei feluri: (a) `unzip -t`; (b) fiecare intrare din zip are același SHA-256 ca în manifest; (c) folderul are încă același conținut ca manifestul, la finalul sigilării.
- După sigilare, sursa de adevăr este arhiva. Copia din `work/.../extracted/` servește doar la inspecție.
- Dacă folderul se schimbă după sigilare, de exemplu cu o captură adăugată, se face o arhivă nouă cu `archive.version` nouă. Arhiva veche nu se suprascrie.

## 2. Ordinea de finalizare

```
generate → validate → freeze → checksums → verify → (opțional) release
```

Tot ce intră în manifestul de checksum-uri devine read-only (`0o444`) înainte
de calculul checksum-urilor: capture index, observation register, README,
query set, run sheet (dacă există), session context, capture manifest și manifestul conversiei WebP. Arhiva intră în manifest printr-un
link simbolic canonic. Un script care ar rescrie un artefact înghețat se
oprește cu eroare.

## 3. Versionare

- `archive.version` se schimbă doar când se schimbă bytes-ii arhivei.
- `metadata_version` se schimbă la orice corecție a clasificării, a registrului sau a README-ului.
- Evidence ID-urile nu se schimbă niciodată pentru aceeași pereche (cale, SHA-256). ID-urile de execuție și de observație se reutilizează pentru aceleași chei. Un rând de observație eliminat la o versiune nouă nu își cedează ID-ul altui rând.

## 4. Validarea controlează freeze-ul, checksum-urile controlează release-ul

Un rezultat `FAIL` oprește pipeline-ul. Un `WARNING` se raportează. Orice
element care ar putea schimba query-ul, execuția, suprafața, relevanța sau
includerea în reuniune cere confirmarea userului, chiar dacă verificările
automate trec.

## 5. Release

- Release-ul este dezactivat implicit (`release.github.enabled: false`). Decizia de publicare a pachetului pilotului este încă deschisă.
- Când e activat, se aplică exact regulile din `evidence-release`: doar draft, fără `--clobber`, oprire dacă release-ul e public, fără `--draft=false`.
- Înainte de confirmare se amintește că pachetul conține SERP-uri și răspunsuri care numesc terți, iar repository-ul poate fi public.

## 6. Privacy

Agentul nu face redactare automată. Capturile făcute logat pot conține
emailul sau numele contului. Rândurile respective se marchează
`PRIVACY_REVIEW_REQUIRED`. Dacă e nevoie de o versiune publică redactată,
aceea e un artefact separat, etichetat clar, și nu înlocuiește arhiva brută.

## 7. Git

Agentul nu face `git add`, `commit` sau `push` pe `evidence/`, decât la
cerere explicită. Directoarele `evidence/incoming`, `work` și `output` sunt
deja în `.gitignore`.
