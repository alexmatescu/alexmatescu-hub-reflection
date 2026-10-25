# Tabula Rasa F3 — reguli de adjudecare (metadata v1.2)

Regulile 1–10 au fost fixate înainte de citirea capturilor; regulile 11–13 au apărut în timpul
adjudecării și au fost aplicate tuturor execuțiilor. Matricea: `alex-matescu_F3_adjudication_v1.2.csv`.

Data: 2026-10-23. Sursa taxonomiei: studiul de caz CS-001, §4 (HIT, HIT PARȚIAL, COLIZIUNE,
COLIZIUNE dezambiguizată corect, CONFABULARE, NULL, INSTABIL, NEDETERMINAT, NEADJUDICAT, HIT-C),
plus statutul nou NEAFIȘAT (decizia lui Alex, 2026-10-23).

## Unitatea de analiză

- Execuția = grupul de capturi cu același `Query group ID`, cu `Analysis inclusion status = INCLUDE`.
- Baza curată: 126 de execuții (14 interogări × 9 suprafețe).
- Încercările excluse (Copilot Q12 încercarea 1, Gemini Q01 încercările 1–2) nu primesc verdict.
- Verdictul se dă pe conținutul vizibil în capturi, nu pe eticheta din index. O nepotrivire între
  etichetă și ecran se notează.

## Verdicte

- **HIT** — sistemul identifică entitatea urmărită (Alex Matescu: inginer, System Lead Engineer la
  AUMOVIO/Continental, Sibiu, delamatescu.ro, AI Visibility Lab, Taste the Corn, studii la Craiova).
- **HIT-C** — HIT în care sistemul citează explicit sursa canonică (delamatescu.ro) ca sursă a
  răspunsului (link sau citare vizibilă). Se aplică suprafețelor generative (asistenți AI,
  Google AI Mode, Google AI Overviews). La Google/Bing Search, prezența delamatescu.ro în rezultate
  nu face HIT-C: e chiar rezultatul de căutare.
- **HIT PARȚIAL** — identificarea există, dar e incompletă, fragilă sau diluată (la căutare: rezultat
  corect prezent, dar nu pe primele poziții sau înconjurat de omonime; la AI: subiectul apare
  secundar sau cu informații puține/nesigure).
- **COLIZIUNE** — altă entitate devine dominantă sau mai multe persoane cu nume apropiate ocupă
  același spațiu de răspuns. **COLIZIUNE (dezambiguizată corect)** — sunt listate separat mai multe
  persoane reale, inclusiv subiectul, cu informații corecte, fără contopire.
- **CONFABULARE** — informație atribuită greșit subiectului sau identitate construită incorect.
  Înainte de CONFABULARE se verifică dacă informația nu e de fapt reală (lecția Taste the Corn).
  Orice detaliu neobișnuit nevalidat → REVIEW, nu CONFABULARE.
- **NULL** — sistemul nu identifică suficient entitatea (refuz, „nu am informații”, cerere de
  clarificare fără identificare).
- **NEDETERMINAT** — dovezile nu permit o clasificare sigură (captură incompletă, mapping neclar).
- **NEAFIȘAT** — statut, nu verdict: suprafața nu a generat elementul de răspuns măsurat (aici:
  Google AI Overviews nu apare pentru interogare). Execuția rămâne în tabel, dar nu intră la
  numitorul niciunui procent de rezoluție.

## Reguli de departajare (preluate din practica v3.0, aplicate uniform)

1. Căutare clasică, interogare cu forma exactă a numelui subiectului („Alex Matescu …”) și rezultate
   dominate de alte persoane, fără subiect → **COLIZIUNE**.
2. Interogare pe o variantă de nume care aparține legitim altor persoane („Alexandru Matescu”,
   „Alex Mateescu”), cu rezultate doar despre acele persoane, fără contopire cu subiectul → **NULL**.
   Dacă subiectul apare și el, corect → HIT PARȚIAL sau COLIZIUNE (dezambiguizată corect).
3. Q09 („Alex Matescu vs Alexandru Mateescu avocat”) e o interogare de dezambiguizare: HIT dacă
   sistemul separă corect subiectul de avocat și îl identifică; COLIZIUNE dacă discută doar avocatul
   sau contopește persoanele.
4. Răspuns în altă limbă decât interogarea: nu schimbă verdictul. Se notează separat (RO / EN / mixt).
5. Imaginile din răspuns se adjudecă separat de text (corecte / ale altor persoane / fără imagini).
6. Reformularea interogării de către Google/Bing: se folosește ce a consemnat operatorul în fișa
   rulării (rezultatele adjudecate sunt cele obținute după selectarea manuală a formei originale).
7. Copilot: prim moment de măsurare, fără comparație cu punctele anterioare.
8. Perplexity: condițiile mixte de autentificare rămân cum au rulat; se notează pe fiecare execuție.
9. Consemnările operatorului din fișa rulării se păstrează textual în note.
10. Cazurile neclare se marchează REVIEW și se aduc lui Alex cu captura.

## Corecții confirmate de Alex

- Fișa rulării, ChatGPT: „query 11 - http://delamatescu.ro/” e o eroare de scriere (confirmat
  2026-10-23). Capturile arată că răspunsul în engleză e la Q12 (E204); Q11 (E202–E203) a primit
  răspuns în română.

## Abatere de formulare constatată la adjudecare

- La Q12, pe ChatGPT, Claude, Copilot, Gemini și Perplexity, interogarea introdusă a fost
  „http://delamatescu.ro/”, nu „delamatescu.ro” din setul canonic. Pe Google Search, Bing,
  Google AI Mode și Google AI Overviews s-a folosit „delamatescu.ro”. Execuțiile rămân în analiză,
  cu abaterea notată; la comparația Q12 între suprafețe, formularea diferă.

## Reguli adăugate în timpul adjudecării (aplicate tuturor execuțiilor)

11. Identificare corectă, dar cu un atribut biografic greșit (proiecte contopite, o dată sau un
    statut fals) → **HIT PARȚIAL**, cu atributul notat. CONFABULARE rămâne pentru identitatea
    construită greșit în ansamblu. Aplicată la Gemini Q12 și Perplexity Q03 (2026-10-23).
12. Entitatea prezentată corect, dar împărțită în două persoane distincte → **HIT PARȚIAL**
    (Google AI Mode Q14).
13. Căutare clasică: poziția 1 ocupată doar de un articol al subiectului, fără pagina de identitate,
    restul paginii zgomot → **HIT PARȚIAL** (Google Search Q03).

## Decizii confirmate de Alex (2026-10-23)

- Gemini Q12: afacerea de familie și Taste the Corn sunt proiecte diferite.
- Profilul Facebook „Alex Matescu (@alexmatescu)” e al subiectului (AI Mode Q05).
- AI Mode Q14 și Google Q03: HIT PARȚIAL acceptat.
- Detaliile biografice atribuite (Alexandru-Costi; OVB 2021–2024; Atracțiile României 2021–2023;
  Turceni/Strâmba Jiu, Gorj; Sibiu din 2022; ~10.000 euro în Taste the Corn; magazinul de haine din
  Craiova, 2017) sunt corecte. CRANDIT e o carte în lucru.
- Fragmentul LinkedIn „Product Owner … E.ON” afișat de Bing la Q06 nu îi aparține.
- Fotografiile din răspunsurile ChatGPT Q09 și Perplexity Q06 și Q11 nu îl reprezintă pe subiect,
  inclusiv fotografia pusă de ChatGPT lângă numele „Alex Matescu”.

## Versiuni

- v1.1 (2026-10-23): prima matrice de adjudecare. Coloana de imagini de la ChatGPT Q09 afirma,
  neconfirmat, că o fotografie îl reprezintă pe subiect.
- v1.2 (2026-10-23): corecția acestei coloane la ChatGPT Q09 și Perplexity Q11, după confirmarea
  lui Alex. Niciun verdict nu se schimbă.
