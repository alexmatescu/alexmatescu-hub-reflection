import { h as useParams$1, t as Link$1, u as posts, z as Seo } from "./_ssr/router-alLpVyw0.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { g as ArrowLeft } from "./_libs/lucide-react.mjs";
import { t as NewsletterForm } from "./_ssr/NewsletterForm-DyvcEv2i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CEyJQ1pR.js
var import_jsx_runtime = require_jsx_runtime();
var formatDate = (iso) => new Date(iso).toLocaleDateString("ro-RO", {
	day: "numeric",
	month: "long",
	year: "numeric"
});
var BlogPost = () => {
	const { slug } = useParams$1();
	const post = posts.find((p) => p.slug === slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-editorial py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif text-4xl",
			children: "Articolul nu există"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
			to: "/blog",
			className: "mt-8 inline-flex items-center gap-2 link-underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Înapoi la blog"]
		})]
	});
	const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: post.seoTitle ? `${post.seoTitle} | Alex Matescu` : `${post.title} — Alex Matescu`,
			description: post.metaDescription ?? post.excerpt,
			canonicalUrl: `https://delamatescu.ro/blog/${post.slug}`,
			ogType: "article",
			ogTitle: post.ogTitle ?? post.seoTitle ?? post.title,
			ogDescription: post.ogDescription ?? post.metaDescription ?? post.excerpt,
			ogSiteName: "Alex Matescu",
			ogLocale: "ro_RO",
			...post.twitterTitle ? { twitterTitle: post.twitterTitle } : {},
			...post.twitterDescription ? { twitterDescription: post.twitterDescription } : {},
			robots: "index, follow",
			...post.heroImage?.src ? {
				imageUrl: post.heroImage.src.startsWith("http") ? post.heroImage.src : `https://delamatescu.ro${post.heroImage.src}`,
				imageAlt: post.imageAlt ?? post.heroImage.alt
			} : {}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "container-editorial pt-20 md:pt-28 pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Toate articolele"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.category }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDate(post.date) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [post.readingTime, " citire"] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-serif italic text-xl md:text-2xl text-muted-foreground leading-snug text-balance",
							children: post.subtitle
						})
					]
				})]
			}),
			post.heroImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prose",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "my-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.heroImage.src,
						alt: post.heroImage.alt,
						width: post.heroImage.width,
						height: post.heroImage.height,
						className: "w-full aspect-video object-cover rounded-sm",
						loading: "eager",
						fetchPriority: "high"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-editorial",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-prose py-16",
				children: post.html ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-editorial",
					dangerouslySetInnerHTML: { __html: post.html }
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-editorial",
					children: post.content?.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-editorial pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
					title: "Primește articolele noi în inbox.",
					description: "Trimit rar și doar conținut original. Fără promoții, fără reciclări."
				})
			})
		] }),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-foreground/10 bg-surface/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-editorial py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8",
					children: "Continuă lectura"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: `/blog/${p.slug}`,
						className: "group bg-background p-8 hover:bg-surface transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4",
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl leading-snug group-hover:text-primary transition-colors",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: p.excerpt
							})
						]
					}, p.slug))
				})]
			})
		})
	] });
};
var SplitComponent = BlogPost;
//#endregion
export { SplitComponent as component };
