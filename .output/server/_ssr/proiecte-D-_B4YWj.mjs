import { c as getPresaEntriesBySubject, d as projects, j as Seo, t as Link$1 } from "./router-BGlFS8WK.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/proiecte-D-_B4YWj.js
var import_jsx_runtime = require_jsx_runtime();
var tasteTheCornLogo = "/images/blog/taste-the-corn-logo.webp";
var ovbLogo = "/images/blog/ovb-logo.webp";
var statusTone = {
	"activ": "text-emerald-800 bg-emerald-100/60",
	"în lucru": "text-amber-900 bg-amber-100/60",
	"închis": "text-stone-700 bg-stone-200/70",
	"finalizat": "text-stone-700 bg-stone-200/70",
	"concept": "text-foreground/70 bg-foreground/5"
};
/** „Economedia · Turnul Sfatului · +2” — featured primele, restul numărate. */
var pressSummary = (slug) => {
	const entries = getPresaEntriesBySubject(slug);
	if (entries.length === 0) return null;
	const sorted = [...entries].sort((a, b) => a.featured === b.featured ? 0 : a.featured ? -1 : 1);
	const shown = sorted.slice(0, 2).map((e) => e.publication);
	const remaining = sorted.length - shown.length;
	return remaining > 0 ? `${shown.join(" · ")} · +${remaining}` : shown.join(" · ");
};
var Projects = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Proiecte — Alex Matescu",
			description: "Portofoliul lui Alex Matescu: CRANDIT, AI Visibility Lab, afaceri de familie și experimente antreprenoriale, active sau închise, construite în timp."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial pt-20 md:pt-32 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Proiecte"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl",
					children: "Ce construiesc, ce testez, ce las să se așeze."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-2xl",
					children: "Un portofoliu viu: cărți, experimente antreprenoriale, direcții de lucru. Unele sunt active, altele s-au închis, câteva sunt încă în formare."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-foreground/10 border-y border-foreground/10",
				children: projects.map((p, i) => {
					const press = pressSummary(p.slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: p.slug === "geo-ai-visibility" ? "/lab/introducere" : `/proiecte/${p.slug}`,
						className: "group grid md:grid-cols-12 gap-6 py-12 md:pt-16 md:pb-8 items-start hover:bg-surface/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2 text-xs text-muted-foreground tabular-nums",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-7",
								children: [
									(p.slug === "taste-the-corn" || p.slug === "ovb") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-20 h-20 rounded-2xl overflow-hidden border border-foreground/10 shadow-xs bg-white mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.slug === "ovb" ? ovbLogo : tasteTheCornLogo,
											alt: `Logo ${p.title}${p.slug === "taste-the-corn" ? " — N-ai cum să-i spui nu" : ""}`,
											className: "w-full h-full object-contain",
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance group-hover:text-primary transition-colors",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif italic text-lg text-muted-foreground",
										children: p.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-muted-foreground max-w-xl",
										children: p.description
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-3 flex flex-col items-start md:items-end gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[p.status]}`,
									children: p.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 text-sm",
									children: ["Vezi proiectul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})]
							})
						]
					}), press && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 md:px-4 -mx-2 md:-mx-4 pb-8 md:pb-10 -mt-2 md:grid md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: "/presa",
							className: "md:col-span-7 text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: [
								"Menționat în: ",
								press,
								" →"
							]
						})]
					})] }, p.slug);
				})
			})
		})
	] });
};
var SplitComponent = Projects;
//#endregion
export { SplitComponent as component };
