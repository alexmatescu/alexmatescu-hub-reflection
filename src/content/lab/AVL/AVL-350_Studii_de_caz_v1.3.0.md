---
document_id: "AVL-350"
title: "AVL-350 — Studii de caz"
level: "D2 — Case Studies"
version: "1.3.0"
status: "Activ"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_modified: "2026-09-04"
canonical: "https://delamatescu.ro/lab/studii-de-caz"
source_note: "Sursă .md regenerată la 5 noiembrie 2026 din pagina publicată (src/data/lab-content/avl-350.ts), care rămâne sursa de adevăr pentru acest document."
---
# AVL-350 — Studii de caz

*Document de poziționare și structură editorială*

| Câmp | Valoare |
|---|---|
| Document ID        | AVL-350                   |
| Nivel              | D2 — Case Studies         |
| Versiune           | 1.3.0                     |
| Statut             | Activ                     |
| Autor              | [Alex Matescu](/despre)   |
| Organizație        | [AI Visibility Lab](/lab) |
| Ultima actualizare | 4 septembrie 2026         |

Pagina **Studii de caz** reunește colaborările reale în care metodologia și principiile AI Visibility Lab — entity resolution, coerența semnalelor, dovezi verificabile, separarea observației de inferență — sunt aplicate direct pe o entitate sau un brand concret, cu dovezi, limite și rezultate publicate integral.

Spre deosebire de [Experimente publice](/lab/experimente-publice), care testează ipoteze declarate dinainte pe un teren neutru, un studiu de caz documentează o aplicare continuă a metodologiei asupra unui subiect real, urmărit de-a lungul mai multor ferestre de măsurare.

## Ce documentează un studiu de caz

Fiecare studiu de caz publicat aici va include, unde subiectul permite:

- obiectul de studiu (entitatea) și motivul pentru care a fost ales;
- Query Universe-ul și Query Set-urile înghețate folosite, cu criteriul din spatele fiecăreia;
- auditul/baseline-ul inițial și, dacă e cazul, unul sau mai multe experimente controlate incluse în studiu;
- taxonomia de clasificare a rezultatelor;
- dovezile — capturi originale, evidence set, mapping query → rezultat;
- rezultatele agregate, cu limitele lor explicite;
- ce demonstrează și, la fel de important, ce nu demonstrează observațiile;
- o secțiune de transparență metodologică, inclusiv eventualele conflicte de interes.

Un studiu de caz individual nu primește un identificator AVL-xxx (rezervat documentelor normative sau de poziționare, ca acesta) — primește un identificator propriu, format CS-NNN (ex. CS-001), definit în registrul de ID-uri al laboratorului.

## Ce nu este această secțiune

Studiile de caz nu sunt experimente publice cu ipoteză predefinită și teren neutru (vezi [Experimente publice](/lab/experimente-publice)), nu sunt documentație metodologică normativă (vezi [Metodologie](/lab/metodologie)) și nu sunt analize sau explicații conceptuale despre industrie (vezi [Articole](/lab/articole)).

Primele studii de caz publicate aici documentează aplicarea metodologiei pe entități controlate direct de AI Visibility Lab — nu pe proiecte comerciale ale unor terți. Colaborările comerciale vor fi documentate separat, în secțiunea [Experimente publice](/lab/experimente-publice), care va fi actualizată ulterior cu acest tip de conținut.

## Cui se adresează această pagină

Studiile de caz sunt destinate specialiștilor SEO, GEO și AEO, brandurilor și persoanelor care vor să înțeleagă cum arată, în practică și pe termen lung, aplicarea rigorii AI Visibility Lab asupra unei identități reale — nu doar principiile ei declarate.

> Pagina Studii de caz documentează colaborări reale în care metodologia AI Visibility Lab este aplicată direct, cu dovezi publicate integral și limite metodologice asumate — distinct de experimentele publice cu ipoteză predefinită și de proiectele comerciale, documentate separat.

## Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|----|----|----|----|
| 1.0.0 | 4 septembrie 2026 | Activ | Prima versiune a documentului de poziționare a secțiunii. |
| 1.1.0 | 4 septembrie 2026 | Activ | MINOR, audit metodologic: clarificare ID (CS-NNN pentru instanțe, niciodată AVL-xxx); reformularea listei de conținut a unui studiu de caz (Query Universe/Query Set înghețat, audit/baseline, experimente incluse — nu „ipoteză experimentală" generică, care ar confunda Case Study cu Experiment). Secțiunea rămâne pregătită tehnic (routing, meta, JSON-LD), dar neactivată în navigație până la publicarea primului studiu de caz. |
| 1.2.0 | 4 septembrie 2026 | Activ | MINOR: secțiunea activată în navigație (labNav, index /lab) — infrastructura confirmată și testată. Primul studiu de caz (#001 — Alex Matescu, CS-001) rămâne intenționat nepublicat; va fi activat separat, într-un pas independent ulterior. |
| 1.3.0 | 4 septembrie 2026 | Activ | MINOR: primul studiu de caz (#001 — Alex Matescu, CS-001, experiment Tabula Rasa) publicat și conectat în navigație, prin skill-ul dedicat `.claude/skills/publica-studiu-de-caz`. |
