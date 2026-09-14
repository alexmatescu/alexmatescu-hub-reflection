import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as toast, s as cn } from "./router-DomSMBGf.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-C5_7DpV5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NewsletterForm-bt0_Uu5V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NewsletterForm = ({ variant = "default", theme = "default", list = "newsletter", title = "Lista de așteptare", description = "Îți voi trimite doar actualizări relevante despre articole, carte și proiecte." }) => {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handle = async (e) => {
		e.preventDefault();
		if (!email.includes("@")) return;
		setLoading(true);
		const source = typeof window !== "undefined" ? window.location.pathname : null;
		const table = list === "crandit" ? "crandit_waitlist" : "newsletter_subscribers";
		const { error } = await supabase.from(table).insert({
			email: email.trim().toLowerCase(),
			source
		});
		setLoading(false);
		if (error && error.code !== "23505") {
			toast({
				title: "Ceva nu a mers",
				description: error.message,
				variant: "destructive"
			});
			return;
		}
		setSent(true);
		toast({
			title: "Mulțumesc.",
			description: error?.code === "23505" ? "Erai deja pe listă." : "Te-am adăugat pe listă."
		});
		setEmail("");
	};
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handle,
		className: "flex flex-col sm:flex-row gap-3 w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "email",
			required: true,
			"aria-label": "Adresă de email",
			value: email,
			onChange: (e) => setEmail(e.target.value),
			placeholder: "adresa@email.ro",
			className: "flex-1 h-12 px-4 bg-background border border-foreground/15 focus:border-foreground/40 outline-hidden text-sm transition-colors"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			className: "h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors",
			children: sent ? "Înscris" : "Înscrie-mă"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden border p-8 md:p-14", theme === "crandit" ? "border-[#c9a86c]/15 bg-[#1a1a1a]" : "border-foreground/10 bg-surface"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 bg-grain opacity-60 pointer-events-none", theme === "crandit" && "opacity-40") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid md:grid-cols-12 gap-8 items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("eyebrow mb-5", theme === "crandit" && "text-[#c9a86c]"),
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("text-3xl md:text-4xl leading-tight text-balance", theme === "crandit" ? "font-trajan text-[#c9a86c]" : "font-serif"),
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-4 max-w-lg", theme === "crandit" ? "text-[#f5f0e8]/70" : "text-muted-foreground"),
						children: description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handle,
				className: "md:col-span-5 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						"aria-label": "Adresă de email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "adresa@email.ro",
						className: cn("h-12 px-4 border outline-hidden text-sm transition-colors", theme === "crandit" ? "bg-[#151515] border-[#c9a86c]/20 text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:border-[#c9a86c]/50" : "bg-background border-foreground/15 focus:border-foreground/40")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: cn("h-12 px-6 text-sm tracking-wide transition-colors", theme === "crandit" ? "bg-[#c9a86c] text-[#151515] hover:bg-[#c9a86c]/90" : "bg-primary text-primary-foreground hover:bg-primary/90"),
						children: sent ? "Te-am adăugat" : "Intră pe listă"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-xs", theme === "crandit" ? "text-[#f5f0e8]/50" : "text-muted-foreground"),
						children: "Te poți dezabona oricând. Fără spam."
					})
				]
			})]
		})]
	});
};
//#endregion
export { NewsletterForm as t };
