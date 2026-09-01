import { a as Route$4 } from "./_ssr/router-alLpVyw0.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as LabDetail } from "./_ssr/Lab-B5SkUose.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CaN1ZkEC.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { slug } = Route$4.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabDetail, { pathname: `/lab/${slug}` });
}
//#endregion
export { RouteComponent as component };
