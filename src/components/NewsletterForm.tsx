import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type Props = {
  variant?: "default" | "compact";
  title?: string;
  description?: string;
};

const NewsletterForm = ({
  variant = "default",
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
    <div className="relative overflow-hidden border border-foreground/10 bg-surface p-8 md:p-14">
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      <div className="relative grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-5">Newsletter</p>
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance">{title}</h3>
          <p className="mt-4 text-muted-foreground max-w-lg">{description}</p>
        </div>
        <form onSubmit={handle} className="md:col-span-5 flex flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="adresa@email.ro"
            className="h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm transition-colors"
          />
          <button
            type="submit"
            className="h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            {sent ? "Te-am adăugat" : "Intră pe listă"}
          </button>
          <p className="text-xs text-muted-foreground">Te poți dezabona oricând. Fără spam.</p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
