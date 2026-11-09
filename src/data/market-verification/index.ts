/**
 * Pilotul de Market Verification (seria MKT-RO-AIV) — sursa paginii
 * /lab/market-discovery/verificare-pilot-2026q4.
 *
 * Datele nu se scriu de mână: JSON-urile de aici sunt generate de
 * `scripts/build-market-verification-data.mjs` din pachetul public înghețat
 * al registrului (SHA-256 verificat la generare).
 */
import pilot from "./2026q4-pilot.json";
import unionStatusData from "./union-status.json";

export * from "./meta";

export type MvStatus =
  "ELIGIBLE" | "OUT OF SCOPE" | "INELIGIBLE" | "UNVERIFIED" | "AMBIGUOUS";

export type MvEntity = {
  id: string;
  name: string;
  persons: string;
  site: string;
  status: MvStatus;
  geo: string;
  providerClass: string;
  discovery: string;
  evidenceUrl: string;
  evidenceLevel: string;
  rationale: string;
  aliases: string;
  evidenceFile: string;
  http: string;
  finalUrl: string;
  sha256: string;
  savedUtc: string;
  terms: string;
};

export type MvPilot = Omit<typeof pilot, "entities"> & { entities: MvEntity[] };

export const mvPilot = pilot as MvPilot;

/** Cheia de deduplicare Discovery → intrarea canonică din registrul pilotului. */
export const mvUnionStatus = unionStatusData as Record<
  string,
  { id: string; status: MvStatus }
>;

export const MV_STATUS_ORDER: MvStatus[] = [
  "ELIGIBLE",
  "OUT OF SCOPE",
  "INELIGIBLE",
  "UNVERIFIED",
  "AMBIGUOUS",
];

/** Semnificația statusurilor, după regulile aplicate în pilot (AVL-MKT-001 §9, R3). */
export const MV_STATUS_MEANING: Record<MvStatus, string> = {
  ELIGIBLE:
    "Oferă un serviciu din familia instanței și e orientat către România (REQ-003 – REQ-007).",
  "OUT OF SCOPE":
    "Entitate reală, dar neorientată către România; de regulă furnizori globali.",
  INELIGIBLE: "E în România, dar nu oferă serviciul.",
  UNVERIFIED:
    "Dovada e prea slabă ca să confirme sau să excludă. Nu înseamnă INELIGIBLE (REQ-012).",
  AMBIGUOUS: "Dovezi contradictorii sau identitate nelămurită.",
};

export const MV_GEO_LABELS: Record<string, string> = {
  "RO-DOMESTIC": "RO-DOMESTIC — furnizor stabilit și activ în România",
  "RO-INDEPENDENT": "RO-INDEPENDENT — practician independent din România",
  "INTL-RO":
    "INTL-RO — furnizor internațional care deservește explicit România",
  GLOBAL: "GLOBAL — fără orientare explicită către România",
};
