"""AVL-203 / AVL-204 — implementare candidată pentru draftul AVL-203 v0.6.2 / AVL-204 v0.3.2.

Nevalidată ca implementare de referință (AVL-203 §19.4). Doar biblioteca standard Python (3.9+);
capturile se fac cu `curl`, ca în comenzile din AVL-203 §4–§10.

Alegerile operaționale (OP-*) și istoricul propunerilor P-01…P-11 (aprobate la 25 octombrie 2026
și preluate în AVL-203 0.5.0 / AVL-204 0.2.0) sunt în `docs/avl-203-204-registru-implementare.md`;
deciziile DD-01, DD-03, DD-06 și DD-09 din 26 octombrie 2026 (AVL-203 0.6.0 / AVL-204 0.3.0), în
`docs/PLAN-AVL-203-204-VERIFICARE-TEHNICA.md` §6. AVL-203 0.6.1–0.6.2 și AVL-204 0.3.1–0.3.2 sunt
patch-uri fără cerințe sau reguli schimbate (CS-002, AVL-205); v0.5.1 doar aliniază versiunile înregistrate.
"""

SCRIPT_VERSION = "0.5.1"
PROTOCOL_VERSION = "0.6.2"
GRID_VERSION = "0.3.2"
PLAN_SCHEMA = "avl203-plan/0.2.0"
RUN_SCHEMA = "avl203-run/0.1.0"
IMPLEMENTATION_STATUS = "implementare candidată pentru draftul AVL-203 v0.6.2 / AVL-204 v0.3.2, nevalidată"
