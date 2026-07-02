import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Linkedin, Twitter, Facebook, Instagram, Rss } from "lucide-react";

const reasons = ["Colaborare", "Coaching / mentoring", "Media / podcast", "Proiect", "Altceva"];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Numele este obligatoriu").max(120),
  email: z.string().trim().email("Adresă de email invalidă").max(254),
  reason: z.string().max(120).optional(),
  message: z.string().trim().min(1, "Mesajul nu poate fi gol").max(5000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", reason: reasons[0], message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Verifică datele", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error: dbError } = await supabase.from("contact_messages").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        reason: parsed.data.reason ?? null,
        message: parsed.data.message,
      });
      if (dbError) throw dbError;

      // Notificare pe email (best-effort; nu blocăm confirmarea dacă eșuează)
      supabase.functions.invoke("send-contact-notification", { body: parsed.data }).catch(() => {});

      toast({ title: "Mulțumesc.", description: "Mesajul tău a fost trimis. Revin când pot." });
      setForm({ name: "", email: "", reason: reasons[0], message: "" });
    } catch (err) {
      toast({
        title: "Nu am putut trimite mesajul",
        description: err instanceof Error ? err.message : "Încearcă din nou în câteva momente.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm transition-colors";

  return (
    <>
      <section className="container-editorial pt-20 md:pt-32 pb-12">
        <p className="eyebrow mb-8">Contact</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl">
          Scrie-mi. Răspund când pot, dar răspund.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Pentru colaborări, conversații cu jurnaliști, propuneri de mentoring sau proiecte. Cuvântul „concis” ajută mereu.
        </p>
      </section>

      <section className="container-editorial pb-24 grid lg:grid-cols-12 gap-12">
        <form onSubmit={submit} className="lg:col-span-7 space-y-5 border border-foreground/10 p-8 md:p-10 bg-surface/40">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Nume</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`${inputCls} mt-2`}
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`${inputCls} mt-2`}
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Motivul contactului</span>
            <select
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              className={`${inputCls} mt-2`}
            >
              {reasons.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Mesaj</span>
            <textarea
              required
              rows={7}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-2 p-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-none text-sm transition-colors resize-none"
            />
          </label>
          <button
            type="submit"
            className="h-12 px-8 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
          >
            Trimite mesajul
          </button>
        </form>

        <aside className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-5">Direct</p>
            <a href="mailto:alexmatescu.c@gmail.com" className="inline-flex items-center gap-3 font-serif text-2xl link-underline">
              <Mail className="h-5 w-5" /> alexmatescu.c@gmail.com
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Pentru orice subiect care merită un răspuns scris.</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Social</p>
            <ul className="space-y-3">
              {[
                { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/alex-matescu-8b2b8813b/" },
                { label: "X / Twitter", icon: Twitter, href: "https://x.com/MatescuAlex" },
                { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/alexmatescu" },
                { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/alexmatescu.c" },
                { label: "Blog (RSS)", icon: Rss, href: "/blog" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <s.icon className="h-4 w-4" /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-foreground/10 pt-8">
            <p className="font-serif italic text-lg text-muted-foreground leading-snug">
              „Răspund de obicei într-o săptămână. Câteodată mai târziu. Niciodată automat.”
            </p>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Contact;
