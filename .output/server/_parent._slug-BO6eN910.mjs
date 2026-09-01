import { i as Route } from "./_ssr/router-alLpVyw0.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as LabDetail } from "./_ssr/Lab-B5SkUose.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_parent._slug-BO6eN910.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { parent, slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabDetail, { pathname: `/lab/${parent}/${slug}` });
}
//#endregion
export { RouteComponent as component };
