/** Piese de layout comune paginilor Market Discovery și Market Verification. */
import type { ReactNode } from "react";

export const StatTiles = ({
  items,
}: {
  items: { value: string; label: string; note?: string }[];
}) => (
  <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
    {items.map((it) => (
      <div key={it.label} className="bg-background p-5 md:p-6">
        <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {it.label}
        </dt>
        <dd className="mt-2 font-serif text-3xl md:text-4xl tracking-tight tabular-nums">
          {it.value}
        </dd>
        {it.note && (
          <p className="mt-1 text-xs text-muted-foreground">{it.note}</p>
        )}
      </div>
    ))}
  </dl>
);

export const SectionHead = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => (
  <div className="max-w-3xl">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight text-balance">
      {title}
    </h2>
    {children && (
      <div className="mt-4 text-base text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    )}
  </div>
);

export const Chip = ({
  children,
  strong = false,
}: {
  children: ReactNode;
  strong?: boolean;
}) => (
  <span
    className={`inline-block px-1.5 py-0.5 text-[11px] leading-none rounded-sm border ${
      strong
        ? "border-foreground/50 text-foreground"
        : "border-foreground/15 text-muted-foreground"
    }`}
  >
    {children}
  </span>
);
