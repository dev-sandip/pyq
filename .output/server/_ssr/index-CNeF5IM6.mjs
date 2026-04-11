import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as QuestionsData } from "./router-u8FKtLDV.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { b as Search, H as Hash, F as FileText } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const convertDriveToPreviewLink = (link) => {
  try {
    const idMatch = link.match(/\/d\/(.+?)\//);
    if (idMatch && idMatch[1])
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    return link;
  } catch {
    return link;
  }
};
const PreviewModal = ({
  isOpen,
  onClose,
  link,
  title
}) => {
  if (!isOpen) return null;
  const previewUrl = convertDriveToPreviewLink(link);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bg-card w-full max-w-5xl h-[85vh] rounded-xl border border-border-subtle shadow-2xl flex flex-col overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-header font-bold text-lg text-text-primary truncate pr-4", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onClose,
            className: "p-2 hover:bg-border-subtle rounded-full transition-colors text-text-secondary hover:text-text-primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" }),
              "✕"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-gray-100 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: previewUrl,
          className: "w-full h-full",
          allow: "autoplay",
          title: "PDF Preview"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", onClick: onClose })
  ] });
};
const QuestionCard = ({
  item,
  index,
  showContext
}) => {
  const [showPreview, setShowPreview] = reactExports.useState(false);
  const downloadLink = reactExports.useMemo(() => {
    try {
      const idMatch = item.link.match(/\/d\/(.+?)\//);
      return idMatch ? `https://drive.google.com/uc?export=download&id=${idMatch[1]}` : item.link;
    } catch {
      return item.link;
    }
  }, [item.link]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, transition: { duration: 0.1 } },
        transition: {
          duration: 0.2,
          // Faster animation (was 0.3 or default)
          delay: Math.min(index * 0.02, 0.15),
          // Cap delay at 0.15s maximum
          ease: "easeOut"
        },
        className: "group flex flex-col justify-between p-5 bg-bg-card border border-border-subtle rounded-xl hover:border-text-primary transition-colors duration-200",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-text-secondary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold uppercase", children: "PDF" })
              ] }),
              showContext && item.semester && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-text-secondary bg-bg-secondary px-2 py-1 rounded border border-border-subtle", children: item.semester.replace(/_/g, " ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowPreview(true),
                className: "block text-left w-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-header text-lg font-semibold text-text-primary leading-tight mb-2 group-hover:text-accent transition-colors", children: item.text })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border-subtle flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowPreview(true),
                className: "flex-1 text-center py-2 rounded border border-border-subtle bg-bg-card text-xs font-bold text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors",
                children: "PREVIEW"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: downloadLink,
                className: "flex-1 flex items-center justify-center gap-2 text-center py-2 rounded bg-text-primary text-bg-primary text-xs font-bold hover:opacity-90 transition-opacity",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DOWNLOAD" })
              }
            )
          ] })
        ]
      }
    ),
    showPreview && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PreviewModal,
      {
        isOpen: showPreview,
        onClose: () => setShowPreview(false),
        link: item.link,
        title: item.text
      }
    )
  ] });
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const semesterCount = Object.keys(QuestionsData).length;
const totalResourceCount = Object.values(QuestionsData).reduce((count, items) => count + items.length, 0);
function App() {
  const [activeTab, setActiveTab] = reactExports.useState("1st_Semester");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const semesters = Object.keys(QuestionsData);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const allQuestions = reactExports.useMemo(() => {
    return Object.entries(QuestionsData).flatMap(([semester, questions]) => questions.map((q) => ({
      ...q,
      semester
    })));
  }, []);
  const filteredQuestions = reactExports.useMemo(() => {
    if (normalizedQuery) {
      return allQuestions.filter((q) => q.text.toLowerCase().includes(normalizedQuery));
    }
    return QuestionsData[activeTab] ?? [];
  }, [activeTab, normalizedQuery, allQuestions]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full relative bg-bg-primary font-body text-text-primary transition-colors duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none opacity-[0.03]", style: {
      backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, className: "pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          y: 10,
          opacity: 0
        }, animate: {
          y: 0,
          opacity: 1
        }, className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-header text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight", children: [
            "IOE past questions,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-secondary", children: "organized to study fast." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed", children: [
            "Search a curated archive of past-question PDFs and engineering resources for IOE students. Browse ",
            totalResourceCount,
            " resources across ",
            semesterCount,
            " semesters and elective collections from one index."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border-subtle bg-bg-card px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-text-secondary", children: "Semesters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-header text-2xl text-text-primary", children: semesterCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border-subtle bg-bg-card px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-text-secondary", children: "Resources" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-header text-2xl text-text-primary", children: totalResourceCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border-subtle bg-bg-card px-4 py-3 col-span-2 sm:col-span-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-text-secondary", children: "Focus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-header text-2xl text-text-primary", children: "PYQ" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "resource-search", className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "resource-search", className: "sr-only", children: "Search archive resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative group max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center bg-bg-card border border-border-subtle rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "ml-4 text-text-secondary", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", "aria-label": "Search subjects and question collections", placeholder: "Search subjects (Global Search)...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full bg-transparent text-text-primary font-body text-base py-4 px-3 focus:outline-none placeholder:text-text-secondary/50" }),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearchQuery(""), className: "mr-4 text-text-secondary hover:text-text-primary", "aria-label": "Clear search query", children: "✕" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
        opacity: 0,
        height: 0
      }, animate: {
        opacity: 1,
        height: "auto"
      }, exit: {
        opacity: 0,
        height: 0
      }, className: "mb-8", "aria-labelledby": "semester-filter", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "semester-filter", className: "mb-3 font-mono text-xs font-bold uppercase tracking-widest text-text-secondary", children: "Browse by semester" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pb-4 border-b border-border-subtle", children: semesters.map((sem) => {
          const isActive = activeTab === sem;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab(sem), className: cn("relative px-4 py-2 rounded text-sm font-header font-bold transition-all duration-200", isActive ? "bg-text-primary text-bg-primary" : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"), children: sem.replace(/_/g, " ") }, sem);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "resource-results", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { size: 14, className: "text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "resource-results", className: "font-mono text-xs font-bold uppercase text-text-secondary", children: searchQuery ? "Global Results" : activeTab.replace(/_/g, " ") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-text-secondary", children: [
            filteredQuestions.length,
            " resources"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filteredQuestions.length > 0 ? filteredQuestions.map((q, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionCard, { item: q, index: idx, showContext: !!searchQuery }, `${q.text}-${q.semester || activeTab}`)) : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, transition: {
          duration: 0.2
        }, className: "col-span-full py-20 text-center border border-dashed border-border-subtle rounded-xl bg-bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-header text-lg font-bold text-text-primary", children: "No Matching Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-text-secondary text-sm mt-1", children: "Try a different keyword." })
        ] }) }) })
      ] })
    ] }) })
  ] });
}
export {
  App as component
};
