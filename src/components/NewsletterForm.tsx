import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type Props = {
  variant?: "default" | "compact";
  theme?: "default" | "crandit";
  title?: string;
  description?: string;
};

const NewsletterForm = ({
  variant = "default",
  theme = "default",
  title = "Lista de așteptare",
  description = "Îți voi trimite doar actualizări relevante despre articole, carte și proiecte.",
}: Props) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    try {
      const list = JSON.parse(localStorage.getItem("am_waitlist") || "[]");
      list.push({ email, at: new Date().toISOString() });
      localStorage.setItem("am_waitlist", JSON.stringify(list));
    } catch {}
    setSent(true);
    toast({ title: "Mulțumesc.", description: "Te-am adăugat pe listă." });
    setEmail("");
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handle} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adresa@email.ro"
          className="flex-1 h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm transition-colors"
        />
        <button
          type="submit"
          className="h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
        >
          {sent ? "Înscris" : "Înscrie-mă"}
        </button>
      </form>
    );
  }

  return (
    <div className={cn(
      "relative overflow-hidden border p-8 md:p-14",
      theme === "crandit"
        ? "border-[#c9a86c]/15 bg-[#1a1a1a]"
        : "border-foreground/10 bg-surface"
    )}>
      <div className={cn(
        "absolute inset-0 bg-grain opacity-60 pointer-events-none",
        theme === "crandit" && "opacity-40"
      )} />
      <div className="relative grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <p className={cn(
            "eyebrow mb-5",
            theme === "crandit" && "text-[#c9a86c]"
          )}>Newsletter</p>
          <h3 className={cn(
            "text-3xl md:text-4xl leading-tight text-balance",
            theme === "crandit" ? "font-trajan text-[#c9a86c]" : "font-serif"
          )}>{title}</h3>
          <p className={cn(
            "mt-4 max-w-lg",
            theme === "crandit" ? "text-[#f5f0e8]/70" : "text-muted-foreground"
          )}>{description}</p>
        </div>
        <form onSubmit={handle} className="md:col-span-5 flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="adresa@email.ro"
            className={cn(
              "h-12 px-4 border outline-none text-sm transition-colors",
              theme === "crandit"
                ? "bg-[#151515] border-[#c9a86c]/20 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#c9a86c]/50"
                : "bg-background border-foreground/15 focus:border-foreground/40"
            )}
          />
          <button
            type="submit"
            className={cn(
              "h-12 px-6 text-sm tracking-wide transition-colors",
              theme === "crandit"
                ? "bg-[#c9a86c] text-[#151515] hover:bg-[#c9a86c]/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {sent ? "Te-am adăugat" : "Intră pe listă"}
          </button>
          <p className={cn(
            "text-xs",
            theme === "crandit" ? "text-[#f5f0e8]/50" : "text-muted-foreground"
          )}>Te poți dezabona oricând. Fără spam.</p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
