import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-C5_7DpV5.js
var SUPABASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PROJECT_ID": "mquykxzqqsjagusqpcje",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xdXlreHpxcXNqYWd1c3FwY2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3ODgzMTEsImV4cCI6MjA5ODM2NDMxMX0.PySjaROQuTx7M8lOeNA0OKBFxU_1z44Ja9NAbFYGx14",
	"VITE_SUPABASE_URL": "https://mquykxzqqsjagusqpcje.supabase.co"
}["VITE_SUPABASE_URL"];
var SUPABASE_PUBLISHABLE_KEY = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_PROJECT_ID": "mquykxzqqsjagusqpcje",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xdXlreHpxcXNqYWd1c3FwY2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3ODgzMTEsImV4cCI6MjA5ODM2NDMxMX0.PySjaROQuTx7M8lOeNA0OKBFxU_1z44Ja9NAbFYGx14",
	"VITE_SUPABASE_URL": "https://mquykxzqqsjagusqpcje.supabase.co"
}["VITE_SUPABASE_PUBLISHABLE_KEY"];
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
var supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
	global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
	auth: {
		storage: typeof window !== "undefined" ? window.localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	}
});
//#endregion
export { supabase as t };
