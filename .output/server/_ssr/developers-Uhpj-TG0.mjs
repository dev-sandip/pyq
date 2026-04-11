import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as ChevronRight, T as Terminal, E as ExternalLink } from "../_libs/lucide-react.mjs";
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
const GITHUB_OWNER = "dev-sandip";
const GITHUB_REPO = "pyq";
function RouteComponent() {
  const [contributors, setContributors] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors`).then((res) => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    }).then((data) => {
      setContributors(data);
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 pt-32 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "p-2 rounded-full bg-bg-secondary hover:bg-border-subtle text-text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "rotate-180", size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-header text-4xl font-bold text-text-primary", children: "Development Team" })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" }) }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-mono text-center", children: [
      "Failed to load contributor data from GitHub. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " Check API Limits or Repo settings."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: contributors.map((dev, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: dev.html_url, target: "_blank", rel: "noopener noreferrer", initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      delay: i * 0.1
    }, className: "flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-accent hover:shadow-lg transition-all group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dev.avatar_url, alt: dev.login, className: "w-12 h-12 rounded-full border-2 border-bg-secondary group-hover:border-accent transition-colors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-header font-bold text-text-primary", children: dev.login }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs font-mono text-text-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { size: 10 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            dev.contributions,
            " Commits"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-auto text-text-secondary group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity", size: 16 })
    ] }, dev.id)) })
  ] });
}
export {
  RouteComponent as component
};
