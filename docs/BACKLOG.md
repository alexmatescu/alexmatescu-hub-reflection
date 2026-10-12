# Backlog

Lucrări amânate în mod deliberat, cu motivul și contextul lor.

| ID | Adăugat | Ce trebuie făcut | Context |
|---|---|---|---|
| BL-001 | 2026-10-12 | Actualizarea trimiterilor la versiunea AVL-MKT-001 din AVL-202 (5 locuri) și AVL-001 (3 locuri), de la „Draft pentru revizuire, v0.9.0” la versiunea curentă, cu versiune nouă și intrare în istoric pentru fiecare document modificat, în `.md` și `.ts`. | AVL-MKT-001 0.9.1 (§3.2: rulările Market Discovery `FULL` / `M{lună}`) a fost pregătit fără să se modifice alte documente. Amânat la cererea autorului. |
| BL-002 | 2026-10-12 | `seoTitle` pentru paginile al căror titlu de bază depășește singur 60 de caractere: cele 19 articole Lab și studiul de caz (74–132 de caractere), plus „O lume prea mare pentru un singur om” (`seoTitle` actual de 98 de caractere). Propuneri într-un tabel, aprobate de autor înainte de aplicare. Separat, decizie despre cele 65 de articole din `blogger-posts.json` (arhivă înghețată — necesită excepție explicită). | Convenția `<title>` ≤ 60 caractere a fost implementată în `fitSeoTitle` / `blogSeoTitle` / `labSeoTitle` și în skill-urile `publica-articol-blog` și `publica-articol-lab`. Regula `seoTitle`: doar când `title` > 60, scurtează fără să înlocuiască, păstrează întrebarea și tema în primele cuvinte. Inventarul se reface rulând un audit cu `blogSeoTitle`/`labSeoTitle`. |
