---
title: "Market Discovery — set utilizator fără cunoștințe de specialitate și comparație între seturi"
version: "0.2.0"
status: "Set standard de lucru pentru pilot; nevalidat empiric"
created: "2026-10-10"
updated: "2026-10-10"
supersedes_query_set: "USER-RO-v0.1.0"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "USER-RO-v0.2.0"
related_query_set: "MKT-RO-AIV-discovery-query-set-v0.1.0.md — Q-DISC-001…012"
document_role: "Anexă operațională; nu constituie AVL-MKT-002"
---

# Setul USER-RO și comparația cu setul DISCOVERY

## 1. Scop, decizia adoptată și statut

Se păstrează două seturi distincte, rulate în fiecare ciclu trimestrial: DISCOVERY, setul oficial de lucru cu formulări de specialitate, și USER, setul cu expresii scurte din perspectiva unui utilizator standard. Fiecare conține 12 interogări. „Oficial” desemnează rolul adoptat în exercițiu, nu validarea empirică sau activarea unui protocol normativ. Statutul metodologic rămâne de pilot până la validare și înghețare.

Setul DISCOVERY Q-DISC-001…012 rămâne cel din prima propunere, documentat în MKT-RO-AIV-discovery-query-set-v0.1.0.md. Setul USER este înlocuit în această versiune cu expresiile scurte stabilite în conversație la 10 octombrie 2026.

Varianta intermediară USER v0.1.0, cu întrebări complete și preambulul „Am o firmă în România”, este retrasă din utilizarea curentă. Nu formează un al treilea set activ. Eventualele rulări deja făcute cu ea rămân atribuite versiunii 0.1.0 și nu sunt comparate ca și când ar avea aceleași texte.

Formulările USER sunt scenarii de căutare plauzibile, nu expresii validate printr-un eșantion de utilizatori sau volume de căutare. Etichetele descriu modul de formulare, nu persoane recrutate și evaluate într-un studiu.

## 2. Setul USER — expresiile exacte

Se transmite exclusiv expresia din tabel, identic în Search și pe suprafețele AI. Fără preambul, fără completarea în propoziție, fără instrucțiuni de rol și fără adăugarea cuvântului „România” acolo unde acesta nu este deja prezent. Se păstrează scrierea și diacriticele.

| ID | Expresia exactă |
|---|---|
| Q-USER-001 | consultant AI | X
| Q-USER-002 | recomandare ChatGPT |
| Q-USER-003 | promovare ChatGPT | X
| Q-USER-004 | firma mea pe ChatGPT |
| Q-USER-005 | apariție în ChatGPT |
| Q-USER-006 | vizibilitate AI |
| Q-USER-007 | promovare firmă AI |
| Q-USER-008 | optimizare site ChatGPT | X
| Q-USER-009 | marketing AI |
| Q-USER-010 | agenție AI România |
| Q-USER-011 | specialist ChatGPT |
| Q-USER-012 | servicii promovare AI | X

Identitatea completă a unei interogări este combinația dintre query_set_id, query_id și query_exact. ID-urile locale Q-USER-001…012 sunt păstrate, însă textele sunt schimbate material față de v0.1.0; ID-ul singur nu este suficient pentru comparații istorice.

## 3. Diferențele dintre DISCOVERY și USER

| Dimensiune | DISCOVERY — set oficial de specialitate | USER — utilizator standard |
|---|---|---|
| Formă | Întrebări complete, explicite și structurate | Expresii scurte de două până la patru cuvinte |
| Vocabular | GEO, AEO, AI Visibility, audit, monitorizare | Consultant, promovare, marketing, specialist, ChatGPT |
| Cunoaștere presupusă | Cunoaște serviciul sau descrie precis nevoia | Cunoaște produsul AI ori ideea de promovare, fără denumirea serviciului |
| Intenție exprimată | Identificarea explicită a furnizorilor relevanți | Intenție incompletă sau ambiguă; interpretarea devine parte din observație |
| Geografie în text | România este precizată în fiecare întrebare de bază | România apare numai în Q-USER-010 |
| Domeniu solicitat | Servicii de vizibilitate în răspunsurile AI | Poate conduce și către automatizări, training, conținut sau software |
| Rol în exercițiu | Descoperire ghidată de definiția pieței | Observarea traseului pornit dintr-o expresie nespecializată |
| Rezultat urmărit | Furnizori și surse relevante pentru piața definită | Sensul atribuit expresiei, categorii de soluții, furnizori și surse |

Exemplu DISCOVERY: „Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România?” Exemplu USER: „consultant AI”. Nu sunt interogări semantic echivalente și nu constituie o pereche experimentală controlată.

Ambiguitatea USER este intenționată. „Recomandare ChatGPT” poate fi interpretată drept recomandarea produsului, o recomandare făcută cu acesta sau dorința de a fi recomandat de el. „Marketing AI” poate conduce către folosirea AI în marketing. Se consemnează interpretarea susținută de răspuns sau de rezultate, fără a presupune acces la raționamentul intern al sistemului.

Termenii largi sunt evitați în nucleul specializat DISCOVERY, dar păstrați deliberat în USER. Diferența de rol explică alegerea; nu modifică eligibilitatea pieței.

Distribuția USER: ChatGPT numit în 6 expresii (002, 003, 004, 005, 008, 011), AI generic în celelalte 6. Nu este o estimare a popularității platformelor. Suprafața pe care rulezi expresia și produsul numit în ea sunt câmpuri distincte.

Piața analizată rămâne România, însă USER nu o precizează uniform. Rezultatele internaționale se păstrează și se clasifică separat; nu se elimină înainte de a documenta orientarea geografică observabilă. Eligibilitatea pentru piața românească se verifică ulterior.

Comparația descrie efectul întregii formulări: lungime, vocabular, intenție, geografie și platformă-țintă. Nu izolează efectul experienței utilizatorului sau al jargonului. Nu se presupune corespondență unu-la-unu între numerele Q-DISC și Q-USER.

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

Un răspuns explicativ, o solicitare de clarificare sau rezultate dintr-o categorie adiacentă sunt observații valide pentru o expresie ambiguă. Nu sunt automat eșecuri ale sistemului. Un rezultat din afara pieței GEO/AEO poate reflecta o interpretare plauzibilă a expresiei USER.

Dacă sistemul cere domeniul firmei sau alte clarificări, răspunsul se conservă în această stare. Nu se introduce domeniul autorului pentru a forța continuarea setului standard.

Nu se adaugă „dar cine mă poate ajuta?” după un răspuns informativ în seria principală. O continuare ar crea o condiție conversațională diferită. Poate fi studiată într-un modul separat, cu text fix și proveniență.

În Search se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii găsiți numai în paginile deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau ale răspunsului AI.

## 6. Ce înregistrăm la fiecare execuție

Câmpuri comune:
instance_id, query_set_id, query_id, query_exact, execution_surface, target_platform_in_prompt, run_id, timestamp, environment_id, execution_status, raw_evidence_id.

Se înregistrează și interpreted_intent, interpretation_evidence, categoria soluției observate și orientarea geografică observabilă. Intenția este o clasificare a evaluatorului, susținută de răspuns/rezultate, nu acces la un proces intern. Se folosesc UNKNOWN sau MULTIPLE când sensul este neclar ori mixt. Categoriile soluțiilor pot fi AI Visibility, automatizări, training, conținut/marketing, software, alta sau incertă. Nu se aplică noului USER vechile clase PROBLEM/GOAL/PROVIDER.

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
7. Distribuția interpretărilor și categoriilor de soluții din USER, inclusiv geografia și cazurile ambigue.
8. După Verification, aceleași comparații pentru furnizorii eligibili, separate de observațiile brute.

Pentru suprapunerea candidaților, A este setul de candidați deduplicați din DISCOVERY, B din USER. Se pot raporta cardinalitățile A, B, A∩B, A\\B și B\\A. Opțional: Jaccard = |A∩B| / |A∪B|. Dacă reuniunea este goală, rezultatul este N/A, nu 0% sau 100%.

Nu se tratează numărul mai mic de furnizori eligibili din USER ca performanță inferioară: expresiile nu cer uniform prestatori GEO/AEO și nici România. Nu există în noul USER un subset PROVIDER predefinit 009–012. Se compară separat entitățile afișate, candidații potențial relevanți și furnizorii confirmați eligibili după Verification.

O singură execuție pe întrebare descrie răspunsul observat. Nu estimează probabilitatea stabilă a recomandării. Pentru această estimare ar fi necesare repetări preregistrate.

## 8. Separarea de Market Reference Set și de raportul de reprezentare AI

Ambele seturi pot produce candidați pentru Discovery; candidații potențial relevanți intră în aceeași reuniune, cu proveniența păstrată. Entitățile adiacente se păstrează în observațiile brute și în clasificarea rezultatelor, fără a fi declarate automat eligibile. Eligibilitatea se verifică independent.

Comparația acestor execuții poate fi publicată ca observație descriptivă asupra procesului de Discovery, cu limite explicite. Dacă scopul este măsurarea acoperirii unei piețe verificate, se îngheață mai întâi Market Reference Set și se fac execuții noi, separate, pentru măsurarea reprezentării. Aceleași răspunsuri nu sunt folosite simultan la construirea populației și drept evaluare independentă a reprezentării ei.

Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-un răspuns sau dintr-un ciclu nu înseamnă că furnizorul a încetat activitatea.

## 9. Exemplu de concluzie permisă

„În această fereastră și pe această suprafață, setul DISCOVERY a returnat furnizorii A, B și C, iar setul USER a returnat B și D. Furnizorul D a fost identificat numai prin formulările USER. Pentru expresia «marketing AI», sistemul a oferit explicații despre folosirea AI pentru producerea de conținut.”

Exemplul folosește litere fictive; nu reprezintă un rezultat măsurat.

Nu rezultă: „utilizatorii fără experiență văd numai B și D” sau „jargonul a cauzat diferența”. Setul nu este un eșantion validat de utilizatori, iar intențiile diferă.

## 10. Istoric

0.2.0 — 10 octombrie 2026: înlocuirea celor 12 întrebări complete USER cu cele 12 expresii scurte; eliminarea preambulului; păstrarea DISCOVERY; adăugarea tabelului comparativ și a regulilor privind ambiguitatea, geografia și interpretarea; retragerea clasificării vechi PROBLEM/GOAL/PROVIDER. Schimbare materială: rezultatele v0.1.0 și v0.2.0 nu se amestecă într-o serie de query-uri identice. Nicio interogare de piață nu a fost executată în această actualizare.


0.1.0 — 10 octombrie 2026: set USER de 12 întrebări și procedură propusă de comparație cu setul DISCOVERY. Nicio interogare de piață nu a fost executată pentru elaborarea acestui document.

