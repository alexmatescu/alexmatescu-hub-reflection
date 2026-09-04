import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { U as Seo, p as toast } from "./router-C6P2ccwf.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as Instagram, i as Rss, l as Facebook, n as Twitter, o as Mail, s as Linkedin } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-C5_7DpV5.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cb0nGML8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reasons = [
	"Colaborare",
	"AI Visibility Lab/GEO/AEO",
	"Media / podcast",
	"Proiect",
	"Altceva"
];
var contactSchema = objectType({
	name: stringType().trim().min(1, "Numele este obligatoriu").max(120),
	email: stringType().trim().email("Adresă de email invalidă").max(254),
	reason: stringType().max(120).optional(),
	message: stringType().trim().min(1, "Mesajul nu poate fi gol").max(5e3)
});
var Contact = () => {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		reason: reasons[0],
		message: ""
	});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		const parsed = contactSchema.safeParse(form);
		if (!parsed.success) {
			toast({
				title: "Verifică datele",
				description: parsed.error.issues[0]?.message ?? "Date invalide",
				variant: "destructive"
			});
			return;
		}
		setSubmitting(true);
		try {
			const { error: dbError } = await supabase.from("contact_messages").insert({
				name: parsed.data.name,
				email: parsed.data.email,
				reason: parsed.data.reason ?? null,
				message: parsed.data.message
			});
			if (dbError) throw dbError;
			supabase.functions.invoke("send-contact-notification", { body: parsed.data }).catch(() => {});
			toast({
				title: "Mulțumesc.",
				description: "Mesajul tău a fost trimis. Revin când pot."
			});
			setForm({
				name: "",
				email: "",
				reason: reasons[0],
				message: ""
			});
		} catch (err) {
			toast({
				title: "Nu am putut trimite mesajul",
				description: err instanceof Error ? err.message : "Încearcă din nou în câteva momente.",
				variant: "destructive"
			});
		} finally {
			setSubmitting(false);
		}
	};
	const inputCls = "w-full h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Contact — Alex Matescu",
			description: "Scrie-i lui Alex Matescu pentru colaborări, cercetare, studii de caz sau discuții legate de AI Visibility Lab, GEO și AEO.",
			imageUrl: "https://delamatescu.ro/images/AlexMatescu-profile-picture.jpg",
			imageAlt: "Alex Matescu"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial pt-20 md:pt-32 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl",
					children: "Scrie-mi. Răspund când pot, dar răspund."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-2xl",
					children: "Pentru colaborări, cercetare, studii de caz sau discuții legate de AI Visibility Lab, poți folosi formularul de mai jos."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial pb-24 grid lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "lg:col-span-7 space-y-5 border border-foreground/10 p-8 md:p-10 bg-surface/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: "Nume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								className: `${inputCls} mt-2`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: `${inputCls} mt-2`
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Motivul contactului"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.reason,
							onChange: (e) => setForm({
								...form,
								reason: e.target.value
							}),
							className: `${inputCls} mt-2`,
							children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: r }, r))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: "Mesaj"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 7,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							className: "w-full mt-2 p-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm transition-colors resize-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: submitting,
						className: "h-12 px-8 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60",
						children: submitting ? "Se trimite…" : "Trimite mesajul"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-5 space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5",
							children: "Direct"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:alexmatescu.c@gmail.com",
							className: "inline-flex items-center gap-3 font-serif text-2xl link-underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }), " alexmatescu.c@gmail.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Pentru orice subiect care merită un răspuns scris."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5",
						children: "Social"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: [
							{
								label: "LinkedIn",
								icon: Linkedin,
								href: "https://www.linkedin.com/in/alex-matescu-8b2b8813b/"
							},
							{
								label: "X / Twitter",
								icon: Twitter,
								href: "https://x.com/MatescuAlex"
							},
							{
								label: "Facebook",
								icon: Facebook,
								href: "https://www.facebook.com/alexmatescu"
							},
							{
								label: "Instagram",
								icon: Instagram,
								href: "https://www.instagram.com/alexmatescu.c"
							},
							{
								label: "Blog (RSS)",
								icon: Rss,
								href: "/blog"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.href,
							target: s.href.startsWith("http") ? "_blank" : void 0,
							rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
							className: "inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" }),
								" ",
								s.label
							]
						}) }, s.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-foreground/10 pt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-lg text-muted-foreground leading-snug",
							children: "„Răspund de obicei într-o săptămână. Câteodată mai târziu. Niciodată automat.”"
						})
					})
				]
			})]
		})
	] });
};
var SplitComponent = Contact;
//#endregion
export { SplitComponent as component };
