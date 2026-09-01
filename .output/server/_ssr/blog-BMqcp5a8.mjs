import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as categories, t as Link$1, u as posts, z as Seo } from "./router-alLpVyw0.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as ArrowUpRight, r as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BMqcp5a8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formatDate = (iso) => new Date(iso).toLocaleDateString("ro-RO", {
	day: "numeric",
	month: "long",
	year: "numeric"
});
var Blog = () => {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("Toate");
	const filtered = (0, import_react.useMemo)(() => {
		return posts.filter((p) => {
			const matchCat = cat === "Toate" || p.category === cat;
			const matchQ = !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.subtitle.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase());
			return matchCat && matchQ;
		});
	}, [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Blog — Alex Matescu",
			description: "Articole de Alex Matescu despre claritate, disciplină, muncă, succes, tehnologie și antreprenoriat, scrise rar și deliberat."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial pt-20 md:pt-32 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Blog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl",
					children: "Texte despre claritate, disciplină, muncă și sens."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-2xl",
					children: "Scriu rar și deliberat. Fiecare articol este o încercare de a numi onest ceva ce văd."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 border-y border-foreground/10 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						"aria-label": "Caută în articole",
						onChange: (e) => setQ(e.target.value),
						placeholder: "Caută în articole...",
						className: "w-full pl-7 h-10 bg-transparent border-b border-foreground/10 focus:border-foreground/40 outline-hidden text-sm transition-colors"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: ["Toate", ...categories].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `text-xs uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors ${cat === c ? "bg-foreground text-background border-foreground" : "border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/40"}`,
						children: c
					}, c))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial py-16",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground py-20 text-center",
				children: "Niciun articol pentru această căutare."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-foreground/10 border-b border-foreground/10",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: `/blog/${p.slug}`,
					className: "group grid md:grid-cols-12 gap-6 py-10 md:py-14 items-start hover:bg-surface/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3 flex flex-col gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.22em] text-[11px]",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDate(p.date) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.readingTime })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif italic text-muted-foreground text-lg",
								children: p.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground max-w-2xl",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-sm",
								children: ["Citește articolul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						]
					})]
				}) }, p.slug))
			})
		})
	] });
};
var SplitComponent = Blog;
//#endregion
export { SplitComponent as component };
