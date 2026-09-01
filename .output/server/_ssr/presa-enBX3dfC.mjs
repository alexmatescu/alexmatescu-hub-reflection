import { l as getPresaGroupedByStory, z as Seo } from "./router-alLpVyw0.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/presa-enBX3dfC.js
var import_jsx_runtime = require_jsx_runtime();
var formatDate = (iso) => new Date(iso).toLocaleDateString("ro-RO", {
	day: "numeric",
	month: "long",
	year: "numeric"
});
var Press = () => {
	const groups = getPresaGroupedByStory();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Apariții în presă și mențiuni externe — Alex Matescu",
			description: "Articole și mențiuni despre Alex Matescu și proiectele sale, apărute în publicații externe — cu link direct către sursa originală.",
			ogType: "website"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-editorial pt-20 md:pt-32 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Presă"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl",
					children: "Apariții în presă și mențiuni externe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-muted-foreground max-w-2xl",
					children: "Articole din publicații externe despre Alex Matescu și proiectele sale, grupate pe eveniment. Fiecare titlu duce la sursa originală."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-editorial pb-24 space-y-20",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow mb-3",
					children: [
						group.meta.label,
						" — ",
						formatDate(group.meta.date)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground max-w-2xl mb-8",
					children: group.meta.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-foreground/10 border-y border-foreground/10",
					children: group.entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: entry.url,
								target: "_blank",
								rel: "noopener",
								className: "link-underline font-serif text-xl md:text-2xl leading-snug text-balance",
								children: entry.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: [
									entry.publication,
									" · ",
									entry.author,
									" ·",
									" ",
									formatDate(entry.date)
								]
							}),
							entry.context && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground/80 max-w-2xl",
								children: entry.context
							})
						]
					}, entry.id))
				})
			] }, group.story))
		})
	] });
};
var SplitComponent = Press;
//#endregion
export { SplitComponent as component };
