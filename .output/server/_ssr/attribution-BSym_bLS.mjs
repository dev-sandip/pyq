import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as Sparkles, E as ExternalLink, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/tanstack__store.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function RouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -20
  }, className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-accent/10 rounded-full mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-accent", size: 48 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-header text-4xl md:text-5xl font-bold text-text-primary mb-6", children: [
      "Attribution & ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Ownership" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bg-card border border-border-subtle p-8 rounded-2xl shadow-xl w-full mb-8 relative overflow-hidden group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-text-secondary text-lg mb-6 leading-relaxed", children: [
        "The question collection data provided in this application is sourced directly from",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-text-primary", children: " Digital NCE" }),
        ". Full ownership, copyrights, and intellectual property rights of the content belong to them."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text-secondary text-sm mb-8", children: "This platform serves purely as a modern, enhanced User Interface (UI) to facilitate easier searching, filtering, and previewing of these valuable resources for IOE students." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://digitalnce.com/ioe_questions/?p=question", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 px-6 py-4 bg-text-primary text-bg-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 group-hover:scale-[1.02]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit Original Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 18 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-mono text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "rotate-180", size: 16 }),
      "RETURN TO ARCHIVE"
    ] })
  ] }) });
}
export {
  RouteComponent as component
};
