---
title: "Market Discovery — set utilizator fără cunoștințe de specialitate și comparație între seturi"
version: "0.1.0"
status: "Set standard de lucru pentru pilot; nevalidat empiric"
created: "2026-10-10"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "USER-RO-v0.1.0"
related_query_set: "MKT-RO-AIV-discovery-query-set-v0.1.0.md — Q-DISC-001…012"
document_role: "Anexă operațională; nu constituie AVL-MKT-002"
---

# Setul USER-RO și comparația cu setul DISCOVERY

## 1. Scop și statut

La cererea lui Alex Matescu, se adaugă un al doilea set standard, rulat alături de setul existent la fiecare ciclu. Setul existent se numește aici DISCOVERY; setul nou se numește USER. Ambele au 12 interogări. USER descrie perspectiva unui proprietar de firmă care cunoaște asistenții AI ca produse, dar nu terminologia GEO/AEO.

Formulările sunt ipoteze de limbaj plauzibil, create pentru acest exercițiu. Nu provin dintr-un eșantion de căutări reale și nu reprezintă distribuția demonstrată a comportamentului utilizatorilor. Setul nu acoperă toate tipurile de utilizatori: exclude intenționat persoanele care nu cunosc deloc produsele AI.

Textele sunt fixate pentru pilotul acestei versiuni. O schimbare de text primește o versiune nouă și rămâne legată de istoricul vechi. Numărul egal de întrebări permite un efort comparabil; nu face seturile echivalente semantic.

## 2. Textul exact transmis

Fiecare prompt este format din contextul fix „Am o firmă în România.”, un spațiu și întrebarea de mai jos. Contextul delimitează piața și evită schimbarea geografiei declarate între seturi. Este o convenție de studiu, nu o presupunere că fiecare utilizator real precizează țara.

Coloana următoare conține promptul complet, gata de copiat. Se folosește identic în Search și pe suprafețele AI, fără ghilimelele delimitatoare și fără instrucțiuni suplimentare.

| ID | Intenție | Prompt complet |
|---|---|---|
| Q-USER-001 | PROBLEM | Am o firmă în România. De ce nu apare firma mea în ChatGPT? |
| Q-USER-002 | PROBLEM | Am o firmă în România. De ce ChatGPT recomandă concurența, dar pe mine nu? |
| Q-USER-003 | PROBLEM | Am o firmă în România. Ce pot face dacă AI-ul spune lucruri greșite despre firma mea? |
| Q-USER-004 | PROBLEM | Am o firmă în România. Site-ul meu apare pe Google, dar nu apare în răspunsurile AI. Ce pot face? |
| Q-USER-005 | GOAL | Am o firmă în România. Cum fac să îmi găsească oamenii firma când întreabă un asistent AI? |
| Q-USER-006 | GOAL | Am o firmă în România. Cum fac să îmi recomande ChatGPT firma când cineva caută serviciile mele? |
| Q-USER-007 | GOAL | Am o firmă în România. Cum fac să apară linkul site-ului meu în răspunsurile AI? |
| Q-USER-008 | GOAL | Am o firmă în România. Cum fac să apară firma mea în răspunsurile date de AI pe Google? |
| Q-USER-009 | PROVIDER | Am o firmă în România. Cine mă poate ajuta să apară firma mea în ChatGPT? |
| Q-USER-010 | PROVIDER | Am o firmă în România. Cine poate verifica ce spun asistenții AI despre firma mea? |
| Q-USER-011 | PROVIDER | Am o firmă în România. Cine poate urmări dacă firma mea este recomandată de asistenții AI? |
| Q-USER-012 | PROVIDER | Am o firmă în România. Caut pe cineva care să mă ajute ca asistenții AI să găsească informații corecte despre firma mea. La cine pot apela? |

PROBLEM: utilizatorul descrie o dificultate. GOAL: exprimă un rezultat dorit. PROVIDER: caută explicit ajutor extern.

Întrebările sunt intenționat fără acronime și denumiri de livrabile specializate. Se păstrează diacriticele. Nu se cere sistemului să joace rolul unui începător: perspectiva este exprimată prin conținutul cererii.

PROBLEM și GOAL sunt scenarii simulate. Răspunsurile lor nu constituie dovezi că firma autorului are problema descrisă. Nu se furnizează identitatea firmei.

## 3. Limite deliberate ale designului

Patru prompturi numesc ChatGPT (001, 002, 006, 009); 008 numește răspunsurile AI din Google; celelalte folosesc termeni generici. Distribuția este: ChatGPT — 4/12; Google AI — 1/12; AI generic — 7/12. Această distribuție este o alegere de proiectare și nu o estimare a popularității platformelor.

Un prompt despre ChatGPT poate fi adresat și Gemini sau Claude. Se separă:
- suprafața de execuție: unde este pusă întrebarea;
- platforma-țintă din întrebare: despre ce produs întreabă utilizatorul.

Setul DISCOVERY folosește terminologie și intenție predominant comercială. USER schimbă și vocabularul, și tipul intenției, și uneori platforma-țintă. Prin urmare, comparația este descriptivă între două seturi de scenarii. Nu izolează efectul experienței utilizatorului sau efectul jargonului.

Nu se presupune corespondență unu-la-unu între Q-DISC-001 și Q-USER-001. Pentru un test ulterior al formulării, se proiectează perechi cu aceeași nevoie, geografie și platformă, schimbând numai vocabularul. Acest test nu este executat aici.

## 4. Execuție comparabilă

Se rulează ambele seturi în fiecare ciclu și pe aceleași suprafețe disponibile: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity.

Volumul complet propus: 24 de întrebări × 8 suprafețe = 192 de execuții. Cele patru interogări exploratorii din documentul anterior sunt un modul suplimentar, raportat separat.

Se aplică aceleași condiții celor două seturi:
- conversație nouă pentru fiecare prompt;
- fără listă de furnizori, fișiere, numele autorului sau identitatea firmei;
- aceeași condiție de cont, setări de memorie/personalizare, mod de căutare și dispozitiv, în limita controlului disponibil;
- aceeași adâncime Search și același criteriu de oprire;
- aceeași fereastră temporală preregistrată;
- păstrarea modelului și interfeței afișate, datei, orei, locației observate și abaterilor.

În pilot se poate păstra propunerea anterioară: primele 20 de rezultate organice pe Google/Bing, un singur răspuns complet inițial pe fiecare suprafață conversațională. Aceste valori nu sunt validate încă.

Pentru fiecare suprafață se execută seturile cât mai apropiat în timp. Ordinea se fixează înainte: pe suprafețele 1, 3, 5, 7, DISCOVERY apoi USER; pe 2, 4, 6, 8, USER apoi DISCOVERY, conform ordinii suprafețelor enumerate mai sus. Ordinea se păstrează între trimestre sau modificarea se documentează. Aceasta reduce asocierea sistematică dintre set și momentul execuției, fără a elimina toate efectele temporale.

Incognito sau o conversație nouă nu sunt declarate drept garanție de absență a personalizării. Se notează ce a putut fi controlat.

O indisponibilitate tehnică nu este răspuns fără furnizori. O singură reîncercare pentru eroare tehnică, cu păstrarea ambelor execuții, poate urma regula preregistrată a pilotului.

## 5. Ce constituie un rezultat valid pentru USER

Un răspuns care explică problema fără să recomande un prestator este un rezultat valid pentru un prompt informațional. Nu se clasifică automat ca eșec.

Dacă sistemul cere domeniul firmei sau alte clarificări, răspunsul se conservă în această stare. Nu se introduce domeniul autorului pentru a forța continuarea setului standard.

Nu se adaugă „dar cine mă poate ajuta?” după un răspuns informativ în seria principală. O continuare ar crea o condiție conversațională diferită. Poate fi studiată într-un modul separat, cu text fix și proveniență.

În Search se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii găsiți numai în paginile deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau ale răspunsului AI.

## 6. Ce înregistrăm la fiecare execuție

Câmpuri comune:
instance_id, query_set_id, query_id, query_exact, intent_class, execution_surface, target_platform_in_prompt, run_id, timestamp, environment_id, execution_status, raw_evidence_id.

Pentru AI se adaugă:
- explanations_present: YES/NO/UNKNOWN;
- actionable_advice_present: YES/NO/UNKNOWN;
- clarification_requested: YES/NO;
- provider_named: YES/NO;
- provider_recommended: YES/NO/UNCERTAIN;
- software_tool_named: YES/NO;
- terminology_introduced: termeni precum GEO/AEO apăruți în răspuns, deși nu erau în prompt;
- source_urls și legătura lor cu afirmațiile;
- numele și descrierile furnizorilor, separat de instrumente și publisheri.

Câmpurile pot coexista: un răspuns poate conține explicații, recomandări și tooluri simultan. Recomandarea se marchează YES când textul propune explicit furnizorul ca opțiune de ajutor; simpla menționare sau citarea unui articol scris de acesta nu sunt suficiente.

Pentru Search se clasifică separat tipul fiecărui rezultat din fereastra observată: pagină comercială a unui posibil prestator, articol/ghid, director/listă, instrument software, altul sau incert. Se păstrează poziția și URL-ul. Apariția unui rezultat nu se codifică drept recomandare editorială a motorului.

## 7. Comparația între seturi

Comparația principală se face în interiorul aceleiași suprafețe și al aceluiași ciclu. Search organic și răspunsurile AI nu se agregă într-un singur clasament.

Se compară:
1. Numărul de execuții completate și incidentele, cu denominatorul real.
2. Numărul de răspunsuri AI care numesc furnizori, separat de cele care îi recomandă explicit.
3. Candidații unici din fiecare set și reuniunea lor.
4. Candidații comuni și cei găsiți numai într-unul dintre seturi.
5. Sursele și tipurile de pagini afișate.
6. Frecvența explicațiilor, instrucțiunilor și solicitărilor de clarificare în USER.
7. Diferențele în interiorul USER între PROBLEM, GOAL și PROVIDER.
8. După Verification, aceleași comparații pentru furnizorii eligibili, separate de observațiile brute.

Pentru suprapunerea candidaților, A este setul de candidați deduplicați din DISCOVERY, B din USER. Se pot raporta cardinalitățile A, B, A∩B, A\\B și B\\A. Opțional: Jaccard = |A∩B| / |A∪B|. Dacă reuniunea este goală, rezultatul este N/A, nu 0% sau 100%.

Nu se tratează numărul mai mic de furnizori din USER ca performanță inferioară: opt întrebări au intenție informațională sau orientată spre rezultat. Subsetul PROVIDER (009–012) poate fi examinat separat, însă nici el nu este o pereche semantică perfectă pentru întregul DISCOVERY.

O singură execuție pe întrebare descrie răspunsul observat. Nu estimează probabilitatea stabilă a recomandării. Pentru această estimare ar fi necesare repetări preregistrate.

## 8. Separarea de Market Reference Set și de raportul de reprezentare AI

Ambele seturi pot produce candidați pentru Discovery; candidații intră în aceeași reuniune, cu proveniența păstrată. Eligibilitatea se verifică independent.

Comparația acestor execuții poate fi publicată ca observație descriptivă asupra procesului de Discovery, cu limite explicite. Dacă scopul este măsurarea acoperirii unei piețe verificate, se îngheață mai întâi Market Reference Set și se fac execuții noi, separate, pentru măsurarea reprezentării. Aceleași răspunsuri nu sunt folosite simultan la construirea populației și drept evaluare independentă a reprezentării ei.

Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-un răspuns sau dintr-un ciclu nu înseamnă că furnizorul a încetat activitatea.

## 9. Exemplu de concluzie permisă

„În această fereastră și pe această suprafață, setul DISCOVERY a returnat furnizorii A, B și C, iar setul USER a returnat B și D. Furnizorul D a fost identificat numai prin formulările USER. Pentru întrebările USER despre probleme, sistemul a oferit preponderent explicații.”

Exemplul folosește litere fictive; nu reprezintă un rezultat măsurat.

Nu rezultă: „utilizatorii fără experiență văd numai B și D” sau „jargonul a cauzat diferența”. Setul nu este un eșantion validat de utilizatori, iar intențiile diferă.

## 10. Istoric

0.1.0 — 10 octombrie 2026: set USER de 12 întrebări și procedură propusă de comparație cu setul DISCOVERY. Nicio interogare de piață nu a fost executată pentru elaborarea acestui document.

