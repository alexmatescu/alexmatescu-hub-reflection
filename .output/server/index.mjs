globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2004-PN9wWJVZfTW0CQC4X9Qv4HrJAPI\"",
		"mtime": "2026-08-19T04:01:00.880Z",
		"size": 8196,
		"path": "../public/.DS_Store"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"62e-eadvCiyjMC1/daeCTq8N1312H0w\"",
		"mtime": "2026-08-19T04:01:00.880Z",
		"size": 1582,
		"path": "../public/llms.txt"
	},
	"/favicon.webp": {
		"type": "image/webp",
		"etag": "\"4db8-Ry/uts93Y7Vz8x5TqzwpeVRfzP0\"",
		"mtime": "2026-08-19T04:01:00.881Z",
		"size": 19896,
		"path": "../public/favicon.webp"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"390-kRF36TK1OPqP+SprMwVFc0yRyiU\"",
		"mtime": "2026-08-19T04:01:00.881Z",
		"size": 912,
		"path": "../public/robots.txt"
	},
	"/placeholder.svg": {
		"type": "image/svg+xml",
		"etag": "\"6fd1-qWQOhyJn/rRMFfFPaVsAALDm3NY\"",
		"mtime": "2026-08-19T04:01:00.882Z",
		"size": 28625,
		"path": "../public/placeholder.svg"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"7af5-E2QoYn8PFSkt3VclX3fWj3Qo9U4\"",
		"mtime": "2026-08-19T04:01:00.881Z",
		"size": 31477,
		"path": "../public/sitemap.xml"
	},
	"/images/.DS_Store": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2004-hXpOPPCp1tNGGkh3/MxG5Uhdtj8\"",
		"mtime": "2026-08-19T04:01:00.810Z",
		"size": 8196,
		"path": "../public/images/.DS_Store"
	},
	"/assets/Lab-BhhoWHbi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cf02-nOe2CyP9P+c1R/Iw1c7a6JN2HiE\"",
		"mtime": "2026-08-19T04:01:00.538Z",
		"size": 184066,
		"path": "../public/assets/Lab-BhhoWHbi.js"
	},
	"/assets/NewsletterForm-Xhads9z7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb2-WjnJEBZGNIyJQyJ2LnuzkuD/t58\"",
		"mtime": "2026-08-19T04:01:00.538Z",
		"size": 3250,
		"path": "../public/assets/NewsletterForm-Xhads9z7.js"
	},
	"/assets/Seo-B2m5xV9m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa8-6jpxDvKXsaZ5LihHSS8xJnnBByY\"",
		"mtime": "2026-08-19T04:01:00.538Z",
		"size": 2728,
		"path": "../public/assets/Seo-B2m5xV9m.js"
	},
	"/assets/_parent._slug-Dj3Mbi_v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-50qx8LBG62Q+jVMEZYUyrMopPIs\"",
		"mtime": "2026-08-19T04:01:00.538Z",
		"size": 247,
		"path": "../public/assets/_parent._slug-Dj3Mbi_v.js"
	},
	"/assets/_site-BtFt9CRa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c347-9A/YH0PGCxviMkVCwr1U1VCCF+Q\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 49991,
		"path": "../public/assets/_site-BtFt9CRa.js"
	},
	"/assets/_slug-DR_ZxskH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c30-8gcHgb/0C8ovae9yztM5uFpz9RQ\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 7216,
		"path": "../public/assets/_slug-DR_ZxskH.js"
	},
	"/assets/_site-rC2u2BKA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3381-p7YnTrqDi7l8VU6iqQA9/VYszPg\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 13185,
		"path": "../public/assets/_site-rC2u2BKA.js"
	},
	"/assets/_slug-Fu-JWGsv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-DN/yDPJ7QKGeZC1Lx2vjqExGzTU\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 238,
		"path": "../public/assets/_slug-Fu-JWGsv.js"
	},
	"/assets/_slug-DdaSQX4b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1026-aRDx5M/OvF96xgsSukw6bCKHBVw\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 4134,
		"path": "../public/assets/_slug-DdaSQX4b.js"
	},
	"/assets/accordion-DDdIE70l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b89-cFhy8lkynvh9mckaSyKUSfhGs14\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 7049,
		"path": "../public/assets/accordion-DDdIE70l.js"
	},
	"/assets/abonati-CyEthWu1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d5-tpkNkx1Vq7HIH9Pg/UmSyZ240tk\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 6613,
		"path": "../public/assets/abonati-CyEthWu1.js"
	},
	"/assets/arrow-left-BEErJzv1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-fu0y5jXiAyqtT4U2xP1iV0sq+fs\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BEErJzv1.js"
	},
	"/assets/arrow-right-D5pQCwSL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-ZEAsrP4e3qMmAxYVGwTMi/L1e3g\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 165,
		"path": "../public/assets/arrow-right-D5pQCwSL.js"
	},
	"/assets/arrow-up-right-Dl8303pE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-71P8QbdWZbg4Qf7+K7sIPPbScqU\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-Dl8303pE.js"
	},
	"/assets/blog-C_58OhsM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7c-9m5zukXMUcC9Eyv4z7QinZctVfs\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 3964,
		"path": "../public/assets/blog-C_58OhsM.js"
	},
	"/assets/calatoria-sD2dd-px.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fb5-dumCH79Q7VMGpGyo7svy0S3xQ34\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 32693,
		"path": "../public/assets/calatoria-sD2dd-px.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"14a47c-CMPRlWHZApWhGU9oBTyuTRhGDOs\"",
		"mtime": "2026-08-19T04:01:00.885Z",
		"size": 1352828,
		"path": "../public/favicon.png"
	},
	"/images/AlexMatescu-profile-picture.jpg": {
		"type": "image/jpeg",
		"etag": "\"1529dc-YTxU0P4nZbB8/7TvUy6xqnB+l0g\"",
		"mtime": "2026-08-19T04:01:00.815Z",
		"size": 1386972,
		"path": "../public/images/AlexMatescu-profile-picture.jpg"
	},
	"/assets/carte-C2blVTu4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6836-afCz776p11wUYtCVpiKiPNVmkx4\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 26678,
		"path": "../public/assets/carte-C2blVTu4.js"
	},
	"/assets/client-BdTZYWw5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"331cf-pZv3raxOx2UbJ0yph9/4GhWcPX0\"",
		"mtime": "2026-08-19T04:01:00.539Z",
		"size": 209359,
		"path": "../public/assets/client-BdTZYWw5.js"
	},
	"/assets/contact-BylJQPjQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f649-AwyY3yrduolM914zfnymUkFEltg\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 63049,
		"path": "../public/assets/contact-BylJQPjQ.js"
	},
	"/assets/crandit-6XMb9r8q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16c9-Th0VWmr2ZAieONw8Ona+AlKn8g0\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 5833,
		"path": "../public/assets/crandit-6XMb9r8q.js"
	},
	"/assets/createLucideIcon-CEGepnBf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-9w7034WUPiHI10TPGK6P975saJ0\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-CEGepnBf.js"
	},
	"/assets/despre-CewnUi4C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48f1-37lCOszT7K/fwmaVl7INRY8ofuY\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 18673,
		"path": "../public/assets/despre-CewnUi4C.js"
	},
	"/assets/dist-20AqsKik.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43dd-h7AXJWLpFlmtIRHMjudHFGHmp+8\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 17373,
		"path": "../public/assets/dist-20AqsKik.js"
	},
	"/assets/dist-COgOIooo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28a-eC4gIZ2dFYCfIc4cNJKzbIjPfI0\"",
		"mtime": "2026-08-19T04:01:00.540Z",
		"size": 650,
		"path": "../public/assets/dist-COgOIooo.js"
	},
	"/assets/jsx-runtime-Cltr0gcK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ee-ObwGPj96dlkL76iVLbX2wLAXzuw\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 8430,
		"path": "../public/assets/jsx-runtime-Cltr0gcK.js"
	},
	"/assets/lab-CzrGdvfu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45-I7vJEOAkgcFguLTlX1TH3P5R7nQ\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 69,
		"path": "../public/assets/lab-CzrGdvfu.js"
	},
	"/assets/mesaje-Z7QWW4GP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1393-pqvn/vdCyTkBBYDfKuzU0bwbXaI\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 5011,
		"path": "../public/assets/mesaje-Z7QWW4GP.js"
	},
	"/assets/presa-VPojRpz9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ae-SqSgggnfqqcFBF/RWhQxU97r6k0\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 1966,
		"path": "../public/assets/presa-VPojRpz9.js"
	},
	"/assets/proiecte-C0KD7S5a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e98-oQKKRcwNFGwz865cJJcy4uYOu+U\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 3736,
		"path": "../public/assets/proiecte-C0KD7S5a.js"
	},
	"/assets/react-dom-c8CiVcdp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dde-v2rj0M/R609wdLvPW5J0CbS25fk\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 3550,
		"path": "../public/assets/react-dom-c8CiVcdp.js"
	},
	"/assets/router-compat-Bw9qB0WQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12118-4Yiqc+Epbtdn7xR1E+LVp2qcmT8\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 74008,
		"path": "../public/assets/router-compat-Bw9qB0WQ.js"
	},
	"/assets/styles-BpXBZU3Z.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"198c4-2w9VP+dEYcD9DH694jB2tnHioWg\"",
		"mtime": "2026-08-19T04:01:00.542Z",
		"size": 104644,
		"path": "../public/assets/styles-BpXBZU3Z.css"
	},
	"/assets/tslib.es6-Tae09705.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-qJHuGuq51+EbLaebsBAkbj1JLbk\"",
		"mtime": "2026-08-19T04:01:00.541Z",
		"size": 1069,
		"path": "../public/assets/tslib.es6-Tae09705.js"
	},
	"/images/blog/.gitkeep": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
		"mtime": "2026-07-18T10:55:20.027Z",
		"size": 0,
		"path": "../public/images/blog/.gitkeep"
	},
	"/images/blog/150107151100-large.jpg": {
		"type": "image/jpeg",
		"etag": "\"e72e-q4QktgFwH3S2B5vCY4lY1LPY17U\"",
		"mtime": "2026-08-19T04:01:00.811Z",
		"size": 59182,
		"path": "../public/images/blog/150107151100-large.jpg"
	},
	"/images/blog/Captura__de_ecran_din_2025-09-22_la_19.23.58.webp": {
		"type": "image/webp",
		"etag": "\"881e-Xu2e1bVktGOH37WliOR92XVubJ0\"",
		"mtime": "2026-08-19T04:01:00.811Z",
		"size": 34846,
		"path": "../public/images/blog/Captura__de_ecran_din_2025-09-22_la_19.23.58.webp"
	},
	"/images/blog/IMG_11031227295966.jpeg": {
		"type": "image/jpeg",
		"etag": "\"965d-m5UtkG1F8XHAZY5JD02bfjGDk/o\"",
		"mtime": "2026-08-19T04:01:00.811Z",
		"size": 38493,
		"path": "../public/images/blog/IMG_11031227295966.jpeg"
	},
	"/images/blog/ChatGPT_Image_Feb_12__2026__05_52_18_PM.webp": {
		"type": "image/webp",
		"etag": "\"16d3c-cQ92zzN20IRsLBFKKCm3Z+2Qhys\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 93500,
		"path": "../public/images/blog/ChatGPT_Image_Feb_12__2026__05_52_18_PM.webp"
	},
	"/images/blog/IMG_49311441823328.jpeg": {
		"type": "image/jpeg",
		"etag": "\"10171-+MqBfB+USERDyyI3Lgkm9+kJe24\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 65905,
		"path": "../public/images/blog/IMG_49311441823328.jpeg"
	},
	"/images/blog/Stiinta.jpg": {
		"type": "image/jpeg",
		"etag": "\"a105-Byt5yznlBwb5+Q+ePtZi8Y7sGtE\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 41221,
		"path": "../public/images/blog/Stiinta.jpg"
	},
	"/assets/index-DFGWIAE-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b6d9c-yu4SbafNpYkniKNFHOetyPHita0\"",
		"mtime": "2026-08-19T04:01:00.538Z",
		"size": 1797532,
		"path": "../public/assets/index-DFGWIAE-.js"
	},
	"/images/blog/_blog_-_eseu_-_Somn__mis_care__hrana__-_baza_ignorata__a_echilibrului_mental.webp": {
		"type": "image/webp",
		"etag": "\"1cbd2-30qdR1qHjAzh1gFyqNHnOYogjlQ\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 117714,
		"path": "../public/images/blog/_blog_-_eseu_-_Somn__mis_care__hrana__-_baza_ignorata__a_echilibrului_mental.webp"
	},
	"/images/blog/aaaqqqw.webp": {
		"type": "image/webp",
		"etag": "\"8aea-7sK2rg63xWGOEZWr9PSqK1ZOfAg\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 35562,
		"path": "../public/images/blog/aaaqqqw.webp"
	},
	"/images/blog/alegeri-vara.webp": {
		"type": "image/webp",
		"etag": "\"2cd0c-I4oyMUQLRAY2TxDZYL/3dwvYc/c\"",
		"mtime": "2026-08-19T04:01:00.822Z",
		"size": 183564,
		"path": "../public/images/blog/alegeri-vara.webp"
	},
	"/images/blog/are_blog_-_Atent_ia_a_devenit_noua_moneda_._Iar_noi_o_cheltuim_react_iona_nd.webp": {
		"type": "image/webp",
		"etag": "\"ba86-Pmn4DTtKBCP0ZqoOXP3tWycitwI\"",
		"mtime": "2026-08-19T04:01:00.813Z",
		"size": 47750,
		"path": "../public/images/blog/are_blog_-_Atent_ia_a_devenit_noua_moneda_._Iar_noi_o_cheltuim_react_iona_nd.webp"
	},
	"/images/blog/ai-visibility-hero.webp": {
		"type": "image/webp",
		"etag": "\"2f96a-SEkLBW0SXnAA3UeisbUhE5CNYHY\"",
		"mtime": "2026-08-19T04:01:00.812Z",
		"size": 194922,
		"path": "../public/images/blog/ai-visibility-hero.webp"
	},
	"/images/blog/bad.jpg": {
		"type": "image/jpeg",
		"etag": "\"d451-yLOUuUzKaJZvHm0vOTAL3dWivDM\"",
		"mtime": "2026-08-19T04:01:00.813Z",
		"size": 54353,
		"path": "../public/images/blog/bad.jpg"
	},
	"/images/blog/blogg.webp": {
		"type": "image/webp",
		"etag": "\"864c-4+63+cb207PmbJlpEof/1PGPtBc\"",
		"mtime": "2026-08-19T04:01:00.815Z",
		"size": 34380,
		"path": "../public/images/blog/blogg.webp"
	},
	"/images/blog/bgg.jpg": {
		"type": "image/jpeg",
		"etag": "\"103ba-4QBomt1CqzzXQAoeObcllYFK0II\"",
		"mtime": "2026-08-19T04:01:00.814Z",
		"size": 66490,
		"path": "../public/images/blog/bgg.jpg"
	},
	"/images/blog/bg.jpg": {
		"type": "image/jpeg",
		"etag": "\"5955-YbyWMeHrgFJbBBu+0RRyiXb5u3Y\"",
		"mtime": "2026-08-19T04:01:00.813Z",
		"size": 22869,
		"path": "../public/images/blog/bg.jpg"
	},
	"/images/blog/caesar.webp": {
		"type": "image/webp",
		"etag": "\"619e-mTx1lcVZ4mdSJfguPsreiRAyoPk\"",
		"mtime": "2026-08-19T04:01:00.816Z",
		"size": 24990,
		"path": "../public/images/blog/caesar.webp"
	},
	"/images/blog/cheating.jpg": {
		"type": "image/jpeg",
		"etag": "\"5700f-7dP+g2tEIUWzES99dazkKPlKuH4\"",
		"mtime": "2026-08-19T04:01:00.819Z",
		"size": 356367,
		"path": "../public/images/blog/cheating.jpg"
	},
	"/images/blog/changes.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f68b-crkiVW0tzL3qz6Y1Gl9RY2mEFa0\"",
		"mtime": "2026-08-19T04:01:00.817Z",
		"size": 128651,
		"path": "../public/images/blog/changes.jpg"
	},
	"/images/blog/blog1.JPG": {
		"type": "image/jpeg",
		"etag": "\"12744-8xRG/u1cN/9nq99RReo6n054cOs\"",
		"mtime": "2026-08-19T04:01:00.816Z",
		"size": 75588,
		"path": "../public/images/blog/blog1.JPG"
	},
	"/images/blog/chioices.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ee9-kLWLk3mIzK1bsCnkU4SJzFBST8I\"",
		"mtime": "2026-08-19T04:01:00.817Z",
		"size": 12009,
		"path": "../public/images/blog/chioices.jpg"
	},
	"/images/blog/confused_by_vonzilla.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b2b-hYU6xGTN5AmxhekKL7S4FzkmZCM\"",
		"mtime": "2026-08-19T04:01:00.819Z",
		"size": 23339,
		"path": "../public/images/blog/confused_by_vonzilla.jpg"
	},
	"/images/blog/cuplu-fericit-razand.webp": {
		"type": "image/webp",
		"etag": "\"a148-RRH5DZXruSpJUh7JF2wf1egCwZo\"",
		"mtime": "2026-08-19T04:01:00.825Z",
		"size": 41288,
		"path": "../public/images/blog/cuplu-fericit-razand.webp"
	},
	"/images/blog/crandit-cover.webp": {
		"type": "image/webp",
		"etag": "\"17024-ADvaHYiitTn2lTEabxvefKrSGSQ\"",
		"mtime": "2026-08-19T04:01:00.822Z",
		"size": 94244,
		"path": "../public/images/blog/crandit-cover.webp"
	},
	"/images/blog/de-ce-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"19f72-PZH/ezXC5JMRFsAjKmXVtdcg6PM\"",
		"mtime": "2026-08-19T04:01:00.826Z",
		"size": 106354,
		"path": "../public/images/blog/de-ce-3.jpg"
	},
	"/images/blog/cifrul-succesului-hero.webp": {
		"type": "image/webp",
		"etag": "\"346a6-IK/1Fn9OtaoFZYoLUAstdXU3o6M\"",
		"mtime": "2026-08-19T04:01:00.819Z",
		"size": 214694,
		"path": "../public/images/blog/cifrul-succesului-hero.webp"
	},
	"/images/blog/decisions.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6826-wwmggca2ofZKyX4z95QNlgrUBnQ\"",
		"mtime": "2026-08-19T04:01:00.824Z",
		"size": 26662,
		"path": "../public/images/blog/decisions.jpeg"
	},
	"/images/blog/costul-invizibil-istoriei.webp": {
		"type": "image/webp",
		"etag": "\"49608-odN/gpWtsUIDBQ3KMEfL/LgR//Q\"",
		"mtime": "2026-08-19T04:01:00.824Z",
		"size": 300552,
		"path": "../public/images/blog/costul-invizibil-istoriei.webp"
	},
	"/images/blog/dsa.jpg": {
		"type": "image/jpeg",
		"etag": "\"6272-d9k8alLdtVehVtLkFyQqORgtPJ0\"",
		"mtime": "2026-08-19T04:01:00.824Z",
		"size": 25202,
		"path": "../public/images/blog/dsa.jpg"
	},
	"/images/blog/eseu_Recorder-Justitie.webp": {
		"type": "image/webp",
		"etag": "\"563aa-1HBNqfbwVBVNcYc2paVo8qut3Is\"",
		"mtime": "2026-08-19T04:01:00.827Z",
		"size": 353194,
		"path": "../public/images/blog/eseu_Recorder-Justitie.webp"
	},
	"/images/blog/femei.jpg": {
		"type": "image/jpeg",
		"etag": "\"ebd5-rRcSlc9ViKvImA6wDsIVneBVkEU\"",
		"mtime": "2026-08-19T04:01:00.826Z",
		"size": 60373,
		"path": "../public/images/blog/femei.jpg"
	},
	"/images/blog/fucking.webp": {
		"type": "image/webp",
		"etag": "\"8d8e-KtMIu7ABO/8ex7s77za4IRQotvM\"",
		"mtime": "2026-08-19T04:01:00.827Z",
		"size": 36238,
		"path": "../public/images/blog/fucking.webp"
	},
	"/images/blog/focus.jpg": {
		"type": "image/jpeg",
		"etag": "\"26316-Qe/NA7e760rirUEC4ZOU2M1ycxo\"",
		"mtime": "2026-08-19T04:01:00.827Z",
		"size": 156438,
		"path": "../public/images/blog/focus.jpg"
	},
	"/images/blog/images.jpg": {
		"type": "image/jpeg",
		"etag": "\"13a2-Xon6+Jbn00zQ0NAinf129Rj78Lo\"",
		"mtime": "2026-08-19T04:01:00.828Z",
		"size": 5026,
		"path": "../public/images/blog/images.jpg"
	},
	"/images/blog/girl.jpg": {
		"type": "image/jpeg",
		"etag": "\"404cd-4/paLoW7L2o44gvsjPOLGXBmGTk\"",
		"mtime": "2026-08-19T04:01:00.830Z",
		"size": 263373,
		"path": "../public/images/blog/girl.jpg"
	},
	"/images/blog/indiferenta.jpg": {
		"type": "image/jpeg",
		"etag": "\"38e2-D8sXzja44ypmqUJRCZvdIc94o9o\"",
		"mtime": "2026-08-19T04:01:00.827Z",
		"size": 14562,
		"path": "../public/images/blog/indiferenta.jpg"
	},
	"/images/blog/jurnal_de_bord_07.04.2024-c345991b.webp": {
		"type": "image/webp",
		"etag": "\"bb30-ZknohJSUKvPFGBgubyezmDPrzHA\"",
		"mtime": "2026-08-19T04:01:00.828Z",
		"size": 47920,
		"path": "../public/images/blog/jurnal_de_bord_07.04.2024-c345991b.webp"
	},
	"/images/blog/jurnal_de_bord_07.04.2024-77777ad6.webp": {
		"type": "image/webp",
		"etag": "\"bb30-ZknohJSUKvPFGBgubyezmDPrzHA\"",
		"mtime": "2026-08-19T04:01:00.829Z",
		"size": 47920,
		"path": "../public/images/blog/jurnal_de_bord_07.04.2024-77777ad6.webp"
	},
	"/images/blog/jurnal_de_bord_07.04.2024-c9c497c7.webp": {
		"type": "image/webp",
		"etag": "\"bb30-ZknohJSUKvPFGBgubyezmDPrzHA\"",
		"mtime": "2026-08-19T04:01:00.828Z",
		"size": 47920,
		"path": "../public/images/blog/jurnal_de_bord_07.04.2024-c9c497c7.webp"
	},
	"/images/blog/jurnal_de_bord_07.04.2024-eddd28c1.webp": {
		"type": "image/webp",
		"etag": "\"bb30-ZknohJSUKvPFGBgubyezmDPrzHA\"",
		"mtime": "2026-08-19T04:01:00.829Z",
		"size": 47920,
		"path": "../public/images/blog/jurnal_de_bord_07.04.2024-eddd28c1.webp"
	},
	"/images/blog/lantul-pe-care-ni-l-punem-singuri.webp": {
		"type": "image/webp",
		"etag": "\"207d6-+N0Hj83cd5YLd+pUwwdGgPdaHRI\"",
		"mtime": "2026-08-19T04:01:00.830Z",
		"size": 133078,
		"path": "../public/images/blog/lantul-pe-care-ni-l-punem-singuri.webp"
	},
	"/images/blog/jurnal_de_bord_07.04.2024-e6241ae5.webp": {
		"type": "image/webp",
		"etag": "\"bb30-ZknohJSUKvPFGBgubyezmDPrzHA\"",
		"mtime": "2026-08-19T04:01:00.828Z",
		"size": 47920,
		"path": "../public/images/blog/jurnal_de_bord_07.04.2024-e6241ae5.webp"
	},
	"/images/blog/informatia-care-exista-hero.webp": {
		"type": "image/webp",
		"etag": "\"3bdde-m9p09Bmqp9WWFdKvnE2yKPIlWf0\"",
		"mtime": "2026-08-19T04:01:00.828Z",
		"size": 245214,
		"path": "../public/images/blog/informatia-care-exista-hero.webp"
	},
	"/images/blog/lovers_in_bed.jpg": {
		"type": "image/jpeg",
		"etag": "\"93df-ozGPMbtGvGd9SUWOplZlbsgoepE\"",
		"mtime": "2026-08-19T04:01:00.832Z",
		"size": 37855,
		"path": "../public/images/blog/lovers_in_bed.jpg"
	},
	"/images/blog/lonely.jpg": {
		"type": "image/jpeg",
		"etag": "\"43d82-saZffsVZ0+xVLCmsUf1QfRxYZU4\"",
		"mtime": "2026-08-19T04:01:00.833Z",
		"size": 277890,
		"path": "../public/images/blog/lonely.jpg"
	},
	"/images/blog/new.jpg": {
		"type": "image/jpeg",
		"etag": "\"9877-p1cReO5De62VcFKNsm/f4ioSRPQ\"",
		"mtime": "2026-08-19T04:01:00.834Z",
		"size": 39031,
		"path": "../public/images/blog/new.jpg"
	},
	"/images/blog/perf_morn.jpg": {
		"type": "image/jpeg",
		"etag": "\"76b4-+ADOuLk+WzJ1bhVUj7+gyCJ4IHo\"",
		"mtime": "2026-08-19T04:01:00.834Z",
		"size": 30388,
		"path": "../public/images/blog/perf_morn.jpg"
	},
	"/images/blog/motttttt.jpg": {
		"type": "image/jpeg",
		"etag": "\"48826-cBXPAWKiv2KzQ4soGZcac2BOvBg\"",
		"mtime": "2026-08-19T04:01:00.835Z",
		"size": 296998,
		"path": "../public/images/blog/motttttt.jpg"
	},
	"/images/blog/ovb-logo.webp": {
		"type": "image/webp",
		"etag": "\"2af4-NaFcQlWz2CxOvSpz5ggGP5NicZQ\"",
		"mtime": "2026-08-19T04:01:00.836Z",
		"size": 10996,
		"path": "../public/images/blog/ovb-logo.webp"
	},
	"/images/blog/postaer_blog_-_ziua_2__stii_ca_nu_stii.webp": {
		"type": "image/webp",
		"etag": "\"dfc2-CnGeJFAE16YVhbvflqPJWup3Zt0\"",
		"mtime": "2026-08-19T04:01:00.836Z",
		"size": 57282,
		"path": "../public/images/blog/postaer_blog_-_ziua_2__stii_ca_nu_stii.webp"
	},
	"/images/blog/posatre_blog__seria_despre_ras__ziua_2_-_hihi_de_acceptare.webp": {
		"type": "image/webp",
		"etag": "\"2c400-hxHQNjQGqhymmeazGfq3HWsZRW8\"",
		"mtime": "2026-08-19T04:01:00.835Z",
		"size": 181248,
		"path": "../public/images/blog/posatre_blog__seria_despre_ras__ziua_2_-_hihi_de_acceptare.webp"
	},
	"/images/blog/postare_blog_-_Alexandru_cel_Mare.webp": {
		"type": "image/webp",
		"etag": "\"3e556-3M7/vq9f8oqHS7Vz9+R1nPAUnrI\"",
		"mtime": "2026-08-19T04:01:00.838Z",
		"size": 255318,
		"path": "../public/images/blog/postare_blog_-_Alexandru_cel_Mare.webp"
	},
	"/images/blog/Vâsla și curentul.png": {
		"type": "image/png",
		"etag": "\"30a032-OlrIA7pmfVhFjbsCa3/wLgk+Nz8\"",
		"mtime": "2026-08-19T04:01:00.822Z",
		"size": 3186738,
		"path": "../public/images/blog/Vâsla și curentul.png"
	},
	"/images/blog/postare_blog_-_Carol_Quintul.webp": {
		"type": "image/webp",
		"etag": "\"20856-ghxX1PZUNUMVNDTS/JbwX5d/Y68\"",
		"mtime": "2026-08-19T04:01:00.838Z",
		"size": 133206,
		"path": "../public/images/blog/postare_blog_-_Carol_Quintul.webp"
	},
	"/images/blog/postare_blog_-_Imperiul_Mogul.webp": {
		"type": "image/webp",
		"etag": "\"6220e-LveKqCLzFtsAPrJCZQpFv5cz2tk\"",
		"mtime": "2026-08-19T04:01:00.839Z",
		"size": 401934,
		"path": "../public/images/blog/postare_blog_-_Imperiul_Mogul.webp"
	},
	"/images/blog/postare_blog_-_Ra_zboaiele_nu_i_ncep_din_ura_.webp": {
		"type": "image/webp",
		"etag": "\"1d940-ebzQYKlCp88z03Aqzha8amD5+2o\"",
		"mtime": "2026-08-19T04:01:00.839Z",
		"size": 121152,
		"path": "../public/images/blog/postare_blog_-_Ra_zboaiele_nu_i_ncep_din_ura_.webp"
	},
	"/images/blog/postare_blog_-_Ginghis_Han.webp": {
		"type": "image/webp",
		"etag": "\"4e964-MdyVBVkUbto9whvFurv6xh4kL2k\"",
		"mtime": "2026-08-19T04:01:00.838Z",
		"size": 321892,
		"path": "../public/images/blog/postare_blog_-_Ginghis_Han.webp"
	},
	"/images/blog/postare_blog_-_asimetrie_si_actiune_-_balanta.webp": {
		"type": "image/webp",
		"etag": "\"1f9e8-XR4Te75Wy92b11794VkORVEf9uE\"",
		"mtime": "2026-08-19T04:01:00.843Z",
		"size": 129512,
		"path": "../public/images/blog/postare_blog_-_asimetrie_si_actiune_-_balanta.webp"
	},
	"/images/blog/postare_blog_-_anatomia_declinului.webp": {
		"type": "image/webp",
		"etag": "\"31536-A9Rm0QW9y4M/6SpDrsqe6pLywko\"",
		"mtime": "2026-08-19T04:01:00.842Z",
		"size": 202038,
		"path": "../public/images/blog/postare_blog_-_anatomia_declinului.webp"
	},
	"/images/blog/postare_blog_-_Soliman_Magnificul.webp": {
		"type": "image/webp",
		"etag": "\"50b58-KvnLdeVn/ASm/an0ghkog3RJSoY\"",
		"mtime": "2026-08-19T04:01:00.840Z",
		"size": 330584,
		"path": "../public/images/blog/postare_blog_-_Soliman_Magnificul.webp"
	},
	"/images/blog/postare_blog_-_biserica_de_paste.webp": {
		"type": "image/webp",
		"etag": "\"32e88-Ul5c08UATDd2mOMxu7Dq3UBvdKU\"",
		"mtime": "2026-08-19T04:01:00.844Z",
		"size": 208520,
		"path": "../public/images/blog/postare_blog_-_biserica_de_paste.webp"
	},
	"/images/blog/postare_blog_-_bun_vs_rau_si_nuante.webp": {
		"type": "image/webp",
		"etag": "\"26184-R4N1ASUhWAbM7gJbPQoLRvJ5hXA\"",
		"mtime": "2026-08-19T04:01:00.845Z",
		"size": 156036,
		"path": "../public/images/blog/postare_blog_-_bun_vs_rau_si_nuante.webp"
	},
	"/images/blog/postare_blog_-_ce_spune_Alex_de_la_18_ani.webp": {
		"type": "image/webp",
		"etag": "\"16584-eHe4ni4EXCPP2SjuY9fJG+sIAgc\"",
		"mtime": "2026-08-19T04:01:00.844Z",
		"size": 91524,
		"path": "../public/images/blog/postare_blog_-_ce_spune_Alex_de_la_18_ani.webp"
	},
	"/images/blog/postare_blog_-_conginerea__organism_care_traieste_in_simbioza.webp": {
		"type": "image/webp",
		"etag": "\"e1d8-IXu/NCZrZPkX288aCDqG7op5ZKE\"",
		"mtime": "2026-08-19T04:01:00.846Z",
		"size": 57816,
		"path": "../public/images/blog/postare_blog_-_conginerea__organism_care_traieste_in_simbioza.webp"
	},
	"/images/blog/postare_blog_-_SUA__Europa_s_i_diferent_ele_care_construiesc_lumea.webp": {
		"type": "image/webp",
		"etag": "\"384a0-rNSoJaR+ll5ul8V/4G6q/5rBsr8\"",
		"mtime": "2026-08-19T04:01:00.839Z",
		"size": 230560,
		"path": "../public/images/blog/postare_blog_-_SUA__Europa_s_i_diferent_ele_care_construiesc_lumea.webp"
	},
	"/images/blog/postare_blog_-_controlul_sovietic_vs_controlul_AI_V2.webp": {
		"type": "image/webp",
		"etag": "\"3a384-2eOO4iQ+rplW6aj0F+nshl/1KV4\"",
		"mtime": "2026-08-19T04:01:00.846Z",
		"size": 238468,
		"path": "../public/images/blog/postare_blog_-_controlul_sovietic_vs_controlul_AI_V2.webp"
	},
	"/images/blog/postare_blog_-_costurile_si_claritatea.webp": {
		"type": "image/webp",
		"etag": "\"1d0b0-NwJHvFwPsPqSyiPQ2ipnA7EskZ0\"",
		"mtime": "2026-08-19T04:01:00.847Z",
		"size": 118960,
		"path": "../public/images/blog/postare_blog_-_costurile_si_claritatea.webp"
	},
	"/images/blog/postare_blog_-_cum_invatam_cu_adevarat.webp": {
		"type": "image/webp",
		"etag": "\"9f4e-J5R4Hgvf24UuIyLrfTY69d085oQ\"",
		"mtime": "2026-08-19T04:01:00.847Z",
		"size": 40782,
		"path": "../public/images/blog/postare_blog_-_cum_invatam_cu_adevarat.webp"
	},
	"/images/blog/postare_blog_-_cele_4_etape_ale_invatarii.webp": {
		"type": "image/webp",
		"etag": "\"21624-RoQD23uGdu3/wVt+tshFHDbZZ6c\"",
		"mtime": "2026-08-19T04:01:00.846Z",
		"size": 136740,
		"path": "../public/images/blog/postare_blog_-_cele_4_etape_ale_invatarii.webp"
	},
	"/images/blog/postare_blog_-_dinastia_lui_Kangxi.webp": {
		"type": "image/webp",
		"etag": "\"34aec-FzenL0nJTdrRbzMxT6MEoF4JmmY\"",
		"mtime": "2026-08-19T04:01:00.847Z",
		"size": 215788,
		"path": "../public/images/blog/postare_blog_-_dinastia_lui_Kangxi.webp"
	},
	"/images/blog/postare_blog_-_directia_si_disciplina_v2.webp": {
		"type": "image/webp",
		"etag": "\"52946-u39zOqo4Ov2R7ONizIY5GkyswF8\"",
		"mtime": "2026-08-19T04:01:00.848Z",
		"size": 338246,
		"path": "../public/images/blog/postare_blog_-_directia_si_disciplina_v2.webp"
	},
	"/images/blog/postare_blog_-_earned_vs_unearned_success.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ac4a-DEU4cQCyzhfrb0jeBJVzyOqlGWM\"",
		"mtime": "2026-08-19T04:01:00.851Z",
		"size": 109642,
		"path": "../public/images/blog/postare_blog_-_earned_vs_unearned_success.jpg"
	},
	"/images/blog/postare_blog_-_eliberarea_spatiului_mental.webp": {
		"type": "image/webp",
		"etag": "\"f1e2-QH8F7hF2tGuTVkjQVVK273alSdE\"",
		"mtime": "2026-08-19T04:01:00.847Z",
		"size": 61922,
		"path": "../public/images/blog/postare_blog_-_eliberarea_spatiului_mental.webp"
	},
	"/images/blog/postare_blog_-_eroist_post-factum_vs_realitate.webp": {
		"type": "image/webp",
		"etag": "\"222d2-aRmVtDhHj7XovCuJdQubqrj+K/E\"",
		"mtime": "2026-08-19T04:01:00.850Z",
		"size": 139986,
		"path": "../public/images/blog/postare_blog_-_eroist_post-factum_vs_realitate.webp"
	},
	"/images/blog/lantul pe care ni-l punem singuri.png": {
		"type": "image/png",
		"etag": "\"20f0a8-F7H3xm4kzxkHfCa9wHNkEzoWuvg\"",
		"mtime": "2026-08-19T04:01:00.836Z",
		"size": 2158760,
		"path": "../public/images/blog/lantul pe care ni-l punem singuri.png"
	},
	"/images/blog/postare_blog_-_epilog_anatomia_declinului.webp": {
		"type": "image/webp",
		"etag": "\"47b18-0TtfIl1HP+oq74WqfYscpENS8IM\"",
		"mtime": "2026-08-19T04:01:00.849Z",
		"size": 293656,
		"path": "../public/images/blog/postare_blog_-_epilog_anatomia_declinului.webp"
	},
	"/images/blog/postare_blog_-_hegemonia_americana.webp": {
		"type": "image/webp",
		"etag": "\"31684-0KgCm0HluP/m7p8CgeCUyVY0mc4\"",
		"mtime": "2026-08-19T04:01:00.850Z",
		"size": 202372,
		"path": "../public/images/blog/postare_blog_-_hegemonia_americana.webp"
	},
	"/images/blog/postare_blog_-_hobby.webp": {
		"type": "image/webp",
		"etag": "\"4c220-0fxKmPezCVPu4NnQWppUWa0rJME\"",
		"mtime": "2026-08-19T04:01:00.853Z",
		"size": 311840,
		"path": "../public/images/blog/postare_blog_-_hobby.webp"
	},
	"/images/blog/postare_blog_-_identitatea_si_integritatea.webp": {
		"type": "image/webp",
		"etag": "\"25836-8hOnFDZHcutA7mfb3d++vXW4Ub0\"",
		"mtime": "2026-08-19T04:01:00.854Z",
		"size": 153654,
		"path": "../public/images/blog/postare_blog_-_identitatea_si_integritatea.webp"
	},
	"/images/blog/postare_blog_-_mastile_de_toate_zilele.webp": {
		"type": "image/webp",
		"etag": "\"11548-yrwMs4R6kZoaDd+LVyacTQ1bEic\"",
		"mtime": "2026-08-19T04:01:00.852Z",
		"size": 70984,
		"path": "../public/images/blog/postare_blog_-_mastile_de_toate_zilele.webp"
	},
	"/images/blog/postare_blog_-_manageri_in_corporatii.webp": {
		"type": "image/webp",
		"etag": "\"97bc-wR6CKGxOPHjEZWfQDW33HE3pulQ\"",
		"mtime": "2026-08-19T04:01:00.853Z",
		"size": 38844,
		"path": "../public/images/blog/postare_blog_-_manageri_in_corporatii.webp"
	},
	"/images/blog/postare_blog_-_mediocru_vs_performer.webp": {
		"type": "image/webp",
		"etag": "\"15ba8-gMWMm7g8AC9jSQXGsi6GPOmJ5FU\"",
		"mtime": "2026-08-19T04:01:00.855Z",
		"size": 89e3,
		"path": "../public/images/blog/postare_blog_-_mediocru_vs_performer.webp"
	},
	"/images/blog/postare_blog_-_neuroplasticitate_biologica_si_momentum_.webp": {
		"type": "image/webp",
		"etag": "\"1e964-4pYWvDh2qO/pT5YX67TPmxJLGS8\"",
		"mtime": "2026-08-19T04:01:00.859Z",
		"size": 125284,
		"path": "../public/images/blog/postare_blog_-_neuroplasticitate_biologica_si_momentum_.webp"
	},
	"/images/blog/postare_blog_-_mereu_obosit__mereu_in_priva_V2.webp": {
		"type": "image/webp",
		"etag": "\"77f52-eyCnlMZBppPdFGzdwAPB4lOlBis\"",
		"mtime": "2026-08-19T04:01:00.855Z",
		"size": 491346,
		"path": "../public/images/blog/postare_blog_-_mereu_obosit__mereu_in_priva_V2.webp"
	},
	"/images/blog/postare_blog_-_placebo__credintele_care_vindeca.webp": {
		"type": "image/webp",
		"etag": "\"758a-VsDB/I7V9R9Pl4YRRT1BqaEgmu4\"",
		"mtime": "2026-08-19T04:01:00.856Z",
		"size": 30090,
		"path": "../public/images/blog/postare_blog_-_placebo__credintele_care_vindeca.webp"
	},
	"/images/blog/postare_blog_-_normal_ca_n-ai_timp_V2.webp": {
		"type": "image/webp",
		"etag": "\"269b0-1ag0CUutMscOqGOjawWv/2JENjs\"",
		"mtime": "2026-08-19T04:01:00.856Z",
		"size": 158128,
		"path": "../public/images/blog/postare_blog_-_normal_ca_n-ai_timp_V2.webp"
	},
	"/images/blog/postare_blog_-_precedentul_pozitiv.webp": {
		"type": "image/webp",
		"etag": "\"39128-vo+MeoMMVTgzgj5j86s9BeIqITA\"",
		"mtime": "2026-08-19T04:01:00.857Z",
		"size": 233768,
		"path": "../public/images/blog/postare_blog_-_precedentul_pozitiv.webp"
	},
	"/images/blog/postare_blog_-_provocare_vs_problema.webp": {
		"type": "image/webp",
		"etag": "\"7504-9fEdO6yJTsBUil06mlUfjcCQIJo\"",
		"mtime": "2026-08-19T04:01:00.857Z",
		"size": 29956,
		"path": "../public/images/blog/postare_blog_-_provocare_vs_problema.webp"
	},
	"/images/blog/postare_blog_-_principiul_precedentului_creat.webp": {
		"type": "image/webp",
		"etag": "\"2e186-rUxSMS7Fhy7bVi7xvMfRQEVktcc\"",
		"mtime": "2026-08-19T04:01:00.859Z",
		"size": 188806,
		"path": "../public/images/blog/postare_blog_-_principiul_precedentului_creat.webp"
	},
	"/images/blog/postare_blog_-_norocul_si_navigarea.webp": {
		"type": "image/webp",
		"etag": "\"2bfca-zVdRhu5j0B1NA8LP8+LkFMY3gAQ\"",
		"mtime": "2026-08-19T04:01:00.856Z",
		"size": 180170,
		"path": "../public/images/blog/postare_blog_-_norocul_si_navigarea.webp"
	},
	"/images/blog/postare_blog_-_perfectionism.webp": {
		"type": "image/webp",
		"etag": "\"ddec-fqciofIl3gi5ztUr1145BlAj+zA\"",
		"mtime": "2026-08-19T04:01:00.858Z",
		"size": 56812,
		"path": "../public/images/blog/postare_blog_-_perfectionism.webp"
	},
	"/images/blog/postare_blog_-_puzzle.webp": {
		"type": "image/webp",
		"etag": "\"5f0b4-4Gn06KgWViFIQpL7SiKKlwNK9+w\"",
		"mtime": "2026-08-19T04:01:00.861Z",
		"size": 389300,
		"path": "../public/images/blog/postare_blog_-_puzzle.webp"
	},
	"/images/blog/postare_blog_-_rabdare_si_repetitie.webp": {
		"type": "image/webp",
		"etag": "\"5d948-0B9Z1yhaCB7ye8JVVFVhi+twBB8\"",
		"mtime": "2026-08-19T04:01:00.863Z",
		"size": 383304,
		"path": "../public/images/blog/postare_blog_-_rabdare_si_repetitie.webp"
	},
	"/images/blog/postare_blog_-_razboaie_fara_adversar.webp": {
		"type": "image/webp",
		"etag": "\"1c972-S3x33k8lJO++k1GdvxX8byTkJe8\"",
		"mtime": "2026-08-19T04:01:00.860Z",
		"size": 117106,
		"path": "../public/images/blog/postare_blog_-_razboaie_fara_adversar.webp"
	},
	"/images/blog/postare_blog_-_razboaie_fara_adversar__ziua_2.webp": {
		"type": "image/webp",
		"etag": "\"30234-IH+EmzSUfoqu6oeTxLBhp/SYPoE\"",
		"mtime": "2026-08-19T04:01:00.859Z",
		"size": 197172,
		"path": "../public/images/blog/postare_blog_-_razboaie_fara_adversar__ziua_2.webp"
	},
	"/images/blog/postare_blog_-_razboaie_sociale_v2.webp": {
		"type": "image/webp",
		"etag": "\"371fe-3F/OasXCfbv0wwylNXIPy7y1Veg\"",
		"mtime": "2026-08-19T04:01:00.862Z",
		"size": 225790,
		"path": "../public/images/blog/postare_blog_-_razboaie_sociale_v2.webp"
	},
	"/images/blog/postare_blog_-_regatul_britanic_si_regina_Victoria.webp": {
		"type": "image/webp",
		"etag": "\"1f486-0hI2C86+NWdduLbgXLKzXJKO0hU\"",
		"mtime": "2026-08-19T04:01:00.862Z",
		"size": 128134,
		"path": "../public/images/blog/postare_blog_-_regatul_britanic_si_regina_Victoria.webp"
	},
	"/images/blog/postare_blog_-_roma._Marcus_Aurelius_si_Commodus.webp": {
		"type": "image/webp",
		"etag": "\"31300-Zh3i0lpCyDB1EaxtS6+l0rdUPSo\"",
		"mtime": "2026-08-19T04:01:00.864Z",
		"size": 201472,
		"path": "../public/images/blog/postare_blog_-_roma._Marcus_Aurelius_si_Commodus.webp"
	},
	"/images/blog/postare_blog_-_romanii_performanti1.webp": {
		"type": "image/webp",
		"etag": "\"489a8-NYREFj+GT+0YKU0wG2hNTEvVhoA\"",
		"mtime": "2026-08-19T04:01:00.863Z",
		"size": 297384,
		"path": "../public/images/blog/postare_blog_-_romanii_performanti1.webp"
	},
	"/images/blog/postare_blog_-_scopul_maretiei_V2.webp": {
		"type": "image/webp",
		"etag": "\"21cb4-4/qd1wBxhw1eLfk5e/Wjsf+ug5I\"",
		"mtime": "2026-08-19T04:01:00.864Z",
		"size": 138420,
		"path": "../public/images/blog/postare_blog_-_scopul_maretiei_V2.webp"
	},
	"/images/blog/postare_blog_-_serie_de_Craciun__ziua_1.webp": {
		"type": "image/webp",
		"etag": "\"eab4-OOroEYt0aUrWpNYHfAGAUyNqTVE\"",
		"mtime": "2026-08-19T04:01:00.864Z",
		"size": 60084,
		"path": "../public/images/blog/postare_blog_-_serie_de_Craciun__ziua_1.webp"
	},
	"/images/blog/postare_blog_-_serie_de_Craciun__ziua_8_-_intoarcerea.webp": {
		"type": "image/webp",
		"etag": "\"263cc-tK2hy/FgLhtA+bHwNPimQWw7Ozs\"",
		"mtime": "2026-08-19T04:01:00.864Z",
		"size": 156620,
		"path": "../public/images/blog/postare_blog_-_serie_de_Craciun__ziua_8_-_intoarcerea.webp"
	},
	"/images/blog/postare_blog_-_spectacol_intr-o_arena_goala.webp": {
		"type": "image/webp",
		"etag": "\"33f9c-JUb8RMnSWVWUqYwSdKMPB/TOnJM\"",
		"mtime": "2026-08-19T04:01:00.866Z",
		"size": 212892,
		"path": "../public/images/blog/postare_blog_-_spectacol_intr-o_arena_goala.webp"
	},
	"/images/blog/postare_blog_-_succes_fara_sens.webp": {
		"type": "image/webp",
		"etag": "\"112b8-o9Hqzguz0SkchRtRL3xwNBgghNE\"",
		"mtime": "2026-08-19T04:01:00.865Z",
		"size": 70328,
		"path": "../public/images/blog/postare_blog_-_succes_fara_sens.webp"
	},
	"/images/blog/postare_blog_-_teoriile_conspiratiilor_v2.webp": {
		"type": "image/webp",
		"etag": "\"21920-Fq3XBztn+BK77sBbM2FIjjOP/LU\"",
		"mtime": "2026-08-19T04:01:00.867Z",
		"size": 137504,
		"path": "../public/images/blog/postare_blog_-_teoriile_conspiratiilor_v2.webp"
	},
	"/images/blog/postare_blog_-_training_tribal.webp": {
		"type": "image/webp",
		"etag": "\"1a828-FXqxpbnTS1nVcpeKq86bC/4WKNo\"",
		"mtime": "2026-08-19T04:01:00.865Z",
		"size": 108584,
		"path": "../public/images/blog/postare_blog_-_training_tribal.webp"
	},
	"/images/blog/postare_blog_-_trib_-_tema1_energii.webp": {
		"type": "image/webp",
		"etag": "\"1fd2c-AJnHr6CMh0HiD20mXYsfgJy1pX4\"",
		"mtime": "2026-08-19T04:01:00.866Z",
		"size": 130348,
		"path": "../public/images/blog/postare_blog_-_trib_-_tema1_energii.webp"
	},
	"/images/blog/postare_blog_-_trib_-_tema3_multiplicare.webp": {
		"type": "image/webp",
		"etag": "\"2a244-eJRjGvyM3avTYmSW6a83Wj9glTo\"",
		"mtime": "2026-08-19T04:01:00.866Z",
		"size": 172612,
		"path": "../public/images/blog/postare_blog_-_trib_-_tema3_multiplicare.webp"
	},
	"/images/blog/postare_blog_-_trib_-_tema2_oglinzi.webp": {
		"type": "image/webp",
		"etag": "\"39162-NQo+o3BHYa9Vo73+4MM3F56/Rt0\"",
		"mtime": "2026-08-19T04:01:00.866Z",
		"size": 233826,
		"path": "../public/images/blog/postare_blog_-_trib_-_tema2_oglinzi.webp"
	},
	"/images/blog/postare_blog_-_uniunea_sovietica.webp": {
		"type": "image/webp",
		"etag": "\"5211e-Z+c7mCJcwajrR/DCigULQ635nCU\"",
		"mtime": "2026-08-19T04:01:00.867Z",
		"size": 336158,
		"path": "../public/images/blog/postare_blog_-_uniunea_sovietica.webp"
	},
	"/images/blog/postare_blog_-_ziua_1__nu_stii_ca_nu_stii.webp": {
		"type": "image/webp",
		"etag": "\"12128-uDVcA+ywYiSN0lVmvKHfQLRji/U\"",
		"mtime": "2026-08-19T04:01:00.867Z",
		"size": 74024,
		"path": "../public/images/blog/postare_blog_-_ziua_1__nu_stii_ca_nu_stii.webp"
	},
	"/images/blog/postare_blog_-_ziua_2__a_sti_ce_face_bine_vs_a_face_bine_v2.webp": {
		"type": "image/webp",
		"etag": "\"10dec-Re9knwABbhatleTbgJz6cycxp9w\"",
		"mtime": "2026-08-19T04:01:00.867Z",
		"size": 69100,
		"path": "../public/images/blog/postare_blog_-_ziua_2__a_sti_ce_face_bine_vs_a_face_bine_v2.webp"
	},
	"/images/blog/postare_blog_-_ziua_4__dimineata_lenesa.webp": {
		"type": "image/webp",
		"etag": "\"f330-NKytYviAHBXrNpONxXl8ZD7e0F8\"",
		"mtime": "2026-08-19T04:01:00.868Z",
		"size": 62256,
		"path": "../public/images/blog/postare_blog_-_ziua_4__dimineata_lenesa.webp"
	},
	"/images/blog/postare_blog_-_ziua_3__stii_ca_stii.webp": {
		"type": "image/webp",
		"etag": "\"2cc88-vDtNxVLg6rPmUEr4FMOpoGKbajY\"",
		"mtime": "2026-08-19T04:01:00.868Z",
		"size": 183432,
		"path": "../public/images/blog/postare_blog_-_ziua_3__stii_ca_stii.webp"
	},
	"/images/blog/postare_blog_-_ziua_4__nu_stii_ca_stii.webp": {
		"type": "image/webp",
		"etag": "\"2e2c6-ts/8W8E1tTkcW6GQPMnzh0uwAAw\"",
		"mtime": "2026-08-19T04:01:00.870Z",
		"size": 189126,
		"path": "../public/images/blog/postare_blog_-_ziua_4__nu_stii_ca_stii.webp"
	},
	"/images/blog/postare_blog_-_ziua_5__ziua_buna_incepe_in_seara_de_dinainte.webp": {
		"type": "image/webp",
		"etag": "\"a396-ym4oKOrB9VssimYVG1tYUdqd58o\"",
		"mtime": "2026-08-19T04:01:00.869Z",
		"size": 41878,
		"path": "../public/images/blog/postare_blog_-_ziua_5__ziua_buna_incepe_in_seara_de_dinainte.webp"
	},
	"/images/blog/postare_blog_-_ziua_6__motivatie_fara_actiune.webp": {
		"type": "image/webp",
		"etag": "\"106da-J0fgZwxm0u68bm8vO+8b7ZPKqA4\"",
		"mtime": "2026-08-19T04:01:00.870Z",
		"size": 67290,
		"path": "../public/images/blog/postare_blog_-_ziua_6__motivatie_fara_actiune.webp"
	},
	"/images/blog/postare_blog_-_ziua_3__energia_pentru_o_noua_zi.webp": {
		"type": "image/webp",
		"etag": "\"ccc6-BBruKQFB3AKNz/Q6PiL6wuaxZtM\"",
		"mtime": "2026-08-19T04:01:00.867Z",
		"size": 52422,
		"path": "../public/images/blog/postare_blog_-_ziua_3__energia_pentru_o_noua_zi.webp"
	},
	"/images/blog/postare_blog__seria_despre_ras__ziua_5_-_hehe_de_retragere_dupa_atac.webp": {
		"type": "image/webp",
		"etag": "\"fab0-MTCfH35MThZgDtH+Gen2XMGEln0\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 64176,
		"path": "../public/images/blog/postare_blog__seria_despre_ras__ziua_5_-_hehe_de_retragere_dupa_atac.webp"
	},
	"/images/blog/postare_blog__seria_despre_ras__ziua_3_-_haha_de_amortizare_a_durerii.webp": {
		"type": "image/webp",
		"etag": "\"14df6-jb6jHCrfvguAhdbQzvg9d2BDMFI\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 85494,
		"path": "../public/images/blog/postare_blog__seria_despre_ras__ziua_3_-_haha_de_amortizare_a_durerii.webp"
	},
	"/images/blog/postare_blog__serie_despre_ras__ziua_1_-_introducere.webp": {
		"type": "image/webp",
		"etag": "\"106d0-Xpmp1F7L+a0+kQ/p0w8CrykS3OU\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 67280,
		"path": "../public/images/blog/postare_blog__serie_despre_ras__ziua_1_-_introducere.webp"
	},
	"/images/blog/postare_blog__seria_despre_ras__ziua_4_-_hoho_de_protejare_a_relatiei.webp": {
		"type": "image/webp",
		"etag": "\"22296-8MlvbEMHgpJCGPqJ0swGQNmWOFg\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 139926,
		"path": "../public/images/blog/postare_blog__seria_despre_ras__ziua_4_-_hoho_de_protejare_a_relatiei.webp"
	},
	"/images/blog/postare_blog__ziua_10_-_mitul_pesterii_in_modern.webp": {
		"type": "image/webp",
		"etag": "\"20ed4-eC8BSnlotxN8j2Pp9atfb1YWEPI\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 134868,
		"path": "../public/images/blog/postare_blog__ziua_10_-_mitul_pesterii_in_modern.webp"
	},
	"/images/blog/postare_blog_-_ziua_5__incheiere.webp": {
		"type": "image/webp",
		"etag": "\"25afe-/oIS6rRPoVKW+MJE7z5gEohElQ0\"",
		"mtime": "2026-08-19T04:01:00.870Z",
		"size": 154366,
		"path": "../public/images/blog/postare_blog_-_ziua_5__incheiere.webp"
	},
	"/images/blog/postare_blog__ziua_8_-_schimbarea_de_perspectiva.webp": {
		"type": "image/webp",
		"etag": "\"7a1e-DH08EKPSCOubBNd3uq5VKwsBmHU\"",
		"mtime": "2026-08-19T04:01:00.872Z",
		"size": 31262,
		"path": "../public/images/blog/postare_blog__ziua_8_-_schimbarea_de_perspectiva.webp"
	},
	"/images/blog/postare_blog__ziua_7_-_pilot_automat.webp": {
		"type": "image/webp",
		"etag": "\"23e28-a0XdSPW/pqQzsjDQl2KgSANbEro\"",
		"mtime": "2026-08-19T04:01:00.873Z",
		"size": 146984,
		"path": "../public/images/blog/postare_blog__ziua_7_-_pilot_automat.webp"
	},
	"/images/blog/postare_blog__ziua_9_-_motivatie__flow__sens.webp": {
		"type": "image/webp",
		"etag": "\"209f4-YWIQTnLh93tRThStcT0jw7e9ESQ\"",
		"mtime": "2026-08-19T04:01:00.874Z",
		"size": 133620,
		"path": "../public/images/blog/postare_blog__ziua_9_-_motivatie__flow__sens.webp"
	},
	"/images/blog/postare_blog_cum_mi-am_dat_seama_ca_am_toate_resursele.webp": {
		"type": "image/webp",
		"etag": "\"11dec-KFkMAPO5dlisA08v+xDPNGzqqHs\"",
		"mtime": "2026-08-19T04:01:00.871Z",
		"size": 73196,
		"path": "../public/images/blog/postare_blog_cum_mi-am_dat_seama_ca_am_toate_resursele.webp"
	},
	"/images/blog/question_behind_question.webp": {
		"type": "image/webp",
		"etag": "\"bda2-4QMBUTCciAcUQgLNJZ/T26Wg/2o\"",
		"mtime": "2026-08-19T04:01:00.875Z",
		"size": 48546,
		"path": "../public/images/blog/question_behind_question.webp"
	},
	"/images/blog/re_blog_-_serie_de_Craciun__ziua_4_-_traditiile_au_fost_mai_mult_decat_decor.webp": {
		"type": "image/webp",
		"etag": "\"60d40-KVxjIRnq4Fp5uv9EoQLaANtt0is\"",
		"mtime": "2026-08-19T04:01:00.875Z",
		"size": 396608,
		"path": "../public/images/blog/re_blog_-_serie_de_Craciun__ziua_4_-_traditiile_au_fost_mai_mult_decat_decor.webp"
	},
	"/images/blog/rian.jpg": {
		"type": "image/jpeg",
		"etag": "\"4383a-Oj5ljaPUVFpUVOYfnU5JN4prStw\"",
		"mtime": "2026-08-19T04:01:00.876Z",
		"size": 276538,
		"path": "../public/images/blog/rian.jpg"
	},
	"/images/blog/taste-the-corn-logo.webp": {
		"type": "image/webp",
		"etag": "\"18524-EEOjjaO2OyEogOlgVGw25iDbqe8\"",
		"mtime": "2026-08-19T04:01:00.876Z",
		"size": 99620,
		"path": "../public/images/blog/taste-the-corn-logo.webp"
	},
	"/images/blog/timp-cover-int.jpg": {
		"type": "image/jpeg",
		"etag": "\"110be-xp05edX5w8RaYACK3hwrzR7h96Y\"",
		"mtime": "2026-08-19T04:01:00.876Z",
		"size": 69822,
		"path": "../public/images/blog/timp-cover-int.jpg"
	},
	"/images/blog/tomorrow.jpg": {
		"type": "image/jpeg",
		"etag": "\"971f-hTw+i+J5tU47UQxMRn4zERcWyWc\"",
		"mtime": "2026-08-19T04:01:00.877Z",
		"size": 38687,
		"path": "../public/images/blog/tomorrow.jpg"
	},
	"/images/blog/va.jpg": {
		"type": "image/jpeg",
		"etag": "\"14d75-a4+rlxxhK9oCFLOCTvNSQG0mtps\"",
		"mtime": "2026-08-19T04:01:00.879Z",
		"size": 85365,
		"path": "../public/images/blog/va.jpg"
	},
	"/images/blog/valent.jpg": {
		"type": "image/jpeg",
		"etag": "\"699d-Yzo8OsMqUp0CP4HvTIDxzQMmbfc\"",
		"mtime": "2026-08-19T04:01:00.877Z",
		"size": 27037,
		"path": "../public/images/blog/valent.jpg"
	},
	"/images/blog/work.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a7a-aOHbiV1bm7NHDHTGpQ19Ne18Vvw\"",
		"mtime": "2026-08-19T04:01:00.878Z",
		"size": 27258,
		"path": "../public/images/blog/work.jpg"
	},
	"/images/blog/vasla-si-curentul-hero.webp": {
		"type": "image/webp",
		"etag": "\"5a690-THRPZQC1L/p5OzNwP81/Tjekroo\"",
		"mtime": "2026-08-19T04:01:00.880Z",
		"size": 370320,
		"path": "../public/images/blog/vasla-si-curentul-hero.webp"
	},
	"/images/blog/tumblr_m93zeaYZQ41qbnvdao1_500.gif": {
		"type": "image/gif",
		"etag": "\"7c0bb-lEwxh1E19ycktGihtZMkHx3eEio\"",
		"mtime": "2026-08-19T04:01:00.879Z",
		"size": 508091,
		"path": "../public/images/blog/tumblr_m93zeaYZQ41qbnvdao1_500.gif"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_WL8oRZ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_WL8oRZ
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
