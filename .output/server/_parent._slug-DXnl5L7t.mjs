import { i as Route$1 } from "./_ssr/router-DomSMBGf.mjs";
import { v as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as LabDetail } from "./_ssr/Lab-CTx1AW7K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_parent._slug-DXnl5L7t.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { parent, slug } = Route$1.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabDetail, { pathname: `/lab/${parent}/${slug}` });
}
//#endregion
export { RouteComponent as component };
