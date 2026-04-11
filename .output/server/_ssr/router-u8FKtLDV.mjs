import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as Database, U as Users, I as Info, S as Sun, M as Moon } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles--JMUOE4V.css";
const Header = ({
  toggleTheme,
  isDark
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-bg-card/90 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-3 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-text-primary text-bg-primary rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 20, strokeWidth: 2.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-header font-bold text-xl tracking-wide text-text-primary leading-none", children: [
            "IOE ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "ARCHIVE" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        "aria-label": "Primary",
        className: "flex items-center gap-1 md:gap-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/developers",
              activeOptions: { exact: true },
              activeProps: {
                className: "flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors bg-bg-secondary text-accent"
              },
              inactiveProps: {
                className: "flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "DEV_TEAM" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/attribution",
              activeOptions: { exact: true },
              activeProps: {
                className: "flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors bg-bg-secondary text-accent"
              },
              inactiveProps: {
                className: "flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "CREDITS" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-5 bg-border-subtle mx-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleTheme,
              className: "p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors",
              children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18 })
            }
          )
        ]
      }
    )
  ] }) });
};
const Route$3 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "IOE Archive | Past Questions and Resources"
      },
      {
        name: "theme-color",
        content: "#0f172a"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        href: "/favicon.ico"
      },
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-bg-primary text-text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { toggleTheme, isDark: darkMode }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const DEFAULT_SITE_URL = "https://dev-sandip.github.io/pyq";
const SITE_NAME = "IOE Archive";
const SITE_URL = DEFAULT_SITE_URL.replace(/\/$/, "");
const DEFAULT_OG_IMAGE = "/logo512.png";
function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
function buildSeo({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = DEFAULT_OG_IMAGE,
  jsonLd
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      { name: "keywords", content: keywords.join(", ") },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: "IOE Archive logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:url", content: canonicalUrl }
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts: jsonLd ? [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd)
      }
    ] : []
  };
}
const $$splitComponentImporter$2 = () => import("./developers-Uhpj-TG0.mjs");
const Route$2 = createFileRoute("/developers")({
  head: () => buildSeo({
    title: "Developers | IOE Archive",
    description: "Meet the contributors and maintainers behind IOE Archive, the searchable past-question resource for IOE students.",
    path: "/developers",
    keywords: ["IOE Archive developers", "project contributors", "open source maintainers"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "IOE Archive Developers",
      url: "https://dev-sandip.github.io/pyq/developers",
      description: "Contributor and maintainer information for the IOE Archive project."
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./attribution-BSym_bLS.mjs");
const Route$1 = createFileRoute("/attribution")({
  head: () => buildSeo({
    title: "Attribution | IOE Archive",
    description: "Source and ownership information for the question collections surfaced through IOE Archive.",
    path: "/attribution",
    keywords: ["IOE Archive attribution", "Digital NCE source", "question ownership"],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "IOE Archive Attribution",
      url: "https://dev-sandip.github.io/pyq/attribution",
      description: "Attribution and ownership details for the educational resources linked by IOE Archive."
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const QuestionsData = {
  "1st_Semester": [
    {
      "text": "Computer Programming (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQBXv5hwEWvFQbY-Joe3vnX9AQ64Et-mZmCdIIrDGnvzOVc?e=IOECgC"
    },
    {
      "text": "Engineering Geology I (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQC0fDfdo1rfS4EsA5wvx282AVfh8X0x94vFzcxh4_NnLCo?e=bse8Gp"
    },
    {
      "text": "Engineering Drawing (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQC4Lhoxh08eSKMIrp-pfNsmAdZp4FfGbSeiR4hLSL9ZS_o?e=ODpGAR"
    },
    {
      "text": "Engineering Physics (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQCYgYM2WS6NSrS8uZlFfj_-AYPA_IT-st79KyauU0UYUaE?e=jTfXz9"
    },
    {
      "text": "Engineering Mathematics I (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQB2lFZ3LUI9TLJVzF6CP4YtAf2eLSowGTgIk8qwcTfZ960?e=tqUXnU"
    },
    {
      "text": "Basic Electrical and Electronics Engineering (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQCHcwCZPNAIRL72sUl5x0EOATF-znM4HP4ZUdkrnfZ4I_w?e=veqxse"
    },
    {
      "text": "Engineering Mechanics (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQBZaPgQOv3ZS5bADuCkd5OkAdoHWPcSGx5yFt8sH0dx-xc?e=cUaHJe"
    },
    {
      "text": "Civil Engineering Materials (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQB7Eoa4jkGiQr-JLWJ_l-cYAcK_FCGsYtjBBUnmpKpSsrM?e=Vh8a7Q"
    },
    {
      "text": "Engineering Chemistry (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQAAkOcghlHUSIgdwrriy3DpAZHrNxhd4saCo18UL0QWp_w?e=mKtev0"
    },
    {
      "text": "Fundamental of Electrical and Electronics Engineering (New Course)",
      "link": "https://nceedunp-my.sharepoint.com/:b:/g/personal/bharat_nce_edu_np/IQBcq_TEa5AkR7salK__rakJAYisfMpavgV0d0aWHQOsMAA?e=VeZeHc"
    },
    {
      "text": "C Programming",
      "link": "https://drive.google.com/file/d/1JY4F1z_EfnQAbZbM9M5KFUOXkUMQSHoc/view?usp=sharing"
    },
    {
      "text": "Basic Electrical Engineering",
      "link": "https://drive.google.com/file/d/1-NaO9nPuxyd9Oox_7z5TP2vKtZyPlijK/view?usp=sharing"
    },
    {
      "text": "Applied mechanics",
      "link": "https://drive.google.com/file/d/18Vt8LJwirrOGse2fHGhn2iolI2uTUU_A/view?usp=sharing"
    },
    {
      "text": "Engineering Drawing I",
      "link": "https://drive.google.com/file/d/1wvuScNOV_BY-DL1XCXqHH41yA0MdExqK/view?usp=sharing"
    },
    {
      "text": "Engineering Mathematics I",
      "link": "https://drive.google.com/file/d/1xHfO-9pz-aS8O2CJ5zvg3kniBZYiwd-V/view?usp=sharing"
    },
    {
      "text": "Engineering Physics",
      "link": "https://drive.google.com/file/d/1kz7wgTWJ_KeSEwSpP4wenAYt19vompnq/view?usp=sharing"
    },
    {
      "text": "Engineering Chemistry",
      "link": "https://drive.google.com/file/d/1wXry0DwAQjxtCmri4uiig2IeqhS0qRWP/view?usp=sharing"
    },
    {
      "text": "Thermodynamics",
      "link": "https://drive.google.com/file/d/1nYTd7-CQ-jOCtFVZP0Vq8TxpeTpQPmoY/view?usp=sharing"
    },
    {
      "text": "Digital Logic(BEI)",
      "link": "https://drive.google.com/file/d/169gfsidLOGzLOvf35ffvQ9iMF1CgiHVM/view?usp=sharing"
    }
  ],
  "2nd_Semester": [
    {
      "text": "Advanced Computer Programming(BEL New Course)",
      "link": "https://drive.google.com/file/d/1s4O0Rh0z8I_VNbD-X_ZMdHZgxmJ-ZQKW/view?usp=sharing"
    },
    {
      "text": "Logic Circuit(BEI, BCT New Course)",
      "link": "https://drive.google.com/file/d/1BtyYQcCjcCSJ8LJ_oKSWtBeJJlzFfOOr/view?usp=sharing"
    },
    {
      "text": "Electrical Circuits and Machines(BEI, BCT New Course)",
      "link": "https://drive.google.com/file/d/1J_c4dwS7WFhXfRon6ZMOg851jiZdTAZR/view?usp=sharing"
    },
    {
      "text": "Stregth of Materials(New-BCE)",
      "link": "https://drive.google.com/file/d/1rnARuS-sCSGxW18JyCPifzm2fgocBcVV/view?usp=sharing"
    },
    {
      "text": "Engineering Drawing(New-BCE)",
      "link": "https://drive.google.com/file/d/1uF6lnBK1m2NY0ybHSElESUqpNfu9j2QE/view?usp=sharing"
    },
    {
      "text": "Engineering Survey I(New-BCE)",
      "link": "https://drive.google.com/file/d/1_jGIa_L3QWaUpL3HqLKmRkfheGkPRxvi/view?usp=sharing"
    },
    {
      "text": "Engineering Geology II(New-BCE)",
      "link": "https://drive.google.com/file/d/1N-rc5vy6ieXb6nOCHILWgbphb1qdKzQ5/view?usp=sharing"
    },
    {
      "text": "Engineering Physics(New-BCE)",
      "link": "https://drive.google.com/file/d/16QUNF4VYT9jgGgrULQNkZTh6cF6m6jO-/view?usp=sharing"
    },
    {
      "text": "Electric Circuits II(BEL New Course)",
      "link": "https://drive.google.com/file/d/1uo1w1ZzTZdGKt9BmxtJGT_6qL3KSpwSC/view?usp=sharing"
    },
    {
      "text": "Electronics Circuits(BEL New Course)",
      "link": "https://drive.google.com/file/d/1yQdmu7y8KgmQn3XOeLwAuUeFPckjTtdE/view?usp=sharing"
    },
    {
      "text": "Applied Mechanics",
      "link": "https://drive.google.com/file/d/1XLDiJEuRirT4o6QsfKFOZu1GLRPNYS09/view?usp=sharing"
    },
    {
      "text": "Basic Electrical Engineering",
      "link": "https://drive.google.com/file/d/15vH4UteYOMyPQ1WdY8sNOHOr5PxDh_R9/view?usp=sharing"
    },
    {
      "text": "Engineering Physics",
      "link": "https://drive.google.com/file/d/1AebHCUiVaRDtAMGtrcxbso4w5k-9DXJx/view?usp=sharing"
    },
    {
      "text": "Basic Electronics Engineering",
      "link": "https://drive.google.com/file/d/1XATa3ni9zrUq2gfl9MJftKGU7tVgbGY2/view?usp=sharing"
    },
    {
      "text": "Electronics Devices and Circuits(New Course)",
      "link": "https://drive.google.com/file/d/1uDwa-uyMrWwPjDMYCmN3q_zIzn6MhpwG/view?usp=sharing"
    },
    {
      "text": "Engineering Drawing II",
      "link": "https://drive.google.com/file/d/1gXoqkSOtMbSy-RopX0QA-EI2PUYDAegI/view?usp=sharing"
    },
    {
      "text": "Engineering Mathematics II",
      "link": "https://drive.google.com/file/d/1nfA-1ePAB8tSSdZaAQA3DWccvUwxl2IN/view?usp=sharing"
    },
    {
      "text": "Engineering Mathematics II(New Course)",
      "link": "https://drive.google.com/file/d/1Go390YUl-Dbqba2Vsr8-tn3NB6NCrNM6/view?usp=sharing"
    },
    {
      "text": "Microprocessor",
      "link": "https://drive.google.com/file/d/1G_R0etdQajEOZw1UHinMRzgwmnIlvNXw/view?usp=sharing"
    },
    {
      "text": "Electric Circuits & Machine",
      "link": "https://drive.google.com/file/d/1qgun7n3lCOJnowlD3YfXeOuF4xE2WBhQ/view?usp=sharing"
    },
    {
      "text": "Object Oriented Programming",
      "link": "https://drive.google.com/file/d/1x-PLCB1TWdPvGSEfXCTdCOu_9ouMzZ5j/view?usp=sharingg"
    },
    {
      "text": "Fundamentals of Thermodynamics & Heat Transfer",
      "link": "https://drive.google.com/file/d/1s_P-VxvbNEqvfa-fCtRdNinl8XkU_ixz/view?usp=sharing"
    },
    {
      "text": "Engineering Chemistry",
      "link": "https://drive.google.com/file/d/1ysX1gvmmphoJYdao_UcCtNy7d4xCrgLy/view?usp=sharing"
    },
    {
      "text": "Engineering Chemistry (New Course)",
      "link": "https://drive.google.com/file/d/10EoqeX0-Ux10RaOTJvoBjcm_KnNa_V5N/view?usp=sharing"
    },
    {
      "text": "Object Oriented Programming (New Course)",
      "link": "https://drive.google.com/file/d/1BxB4Ozh1YUjYgY6xZyqCiugeigdA63G-/view?usp=sharing"
    }
  ],
  "3rd_Semester": [
    {
      "text": "Engineering Mathematics III(New Course)",
      "link": "https://drive.google.com/file/d/1eVuuxNIqGv28EmfR7SN0CWMbEJ4b8CFB/view?usp=sharing"
    },
    {
      "text": "Engineering Mathematics III",
      "link": "https://drive.google.com/file/d/1sBcN_rDroPWYjLfWkO-GB8RR99mGlHjU/view?usp=sharing"
    },
    {
      "text": "Numerial Methods (New)",
      "link": "https://drive.google.com/file/d/1fOWQLacYdjCT9PKIQCZT1734FVKrlAfE/view?usp=drive_link"
    },
    {
      "text": "Fluid Mechanics",
      "link": "https://drive.google.com/file/d/1OWT8jSSPrcsx2oIAfgb9ZVgL9BHlDeP7/view?usp=sharing"
    },
    {
      "text": "Fluid Mechanics(New)",
      "link": "https://drive.google.com/file/d/146nUjti4dapeLaNSszTBhkjFcrscM6Gs/view?usp=sharing"
    },
    {
      "text": "Theory of Structure I(New)",
      "link": "https://drive.google.com/file/d/1y1p45ppSZmicQh7BOl9kbzfY_2cPlV8V/view?usp=sharing"
    },
    {
      "text": "Engineering Survey II (New)",
      "link": "https://drive.google.com/file/d/1JbB5j2HNkYZG6bQYbpLTFzzQfENn_Lk-/view?usp=sharing"
    },
    {
      "text": "Computer Aided Civil Drawing (New)",
      "link": "https://drive.google.com/file/d/1f0oFERtv0yjWiabsMk_pyFvgr-qcksqy/view?usp=sharing"
    },
    {
      "text": "Concrete Technology (New)",
      "link": "https://drive.google.com/file/d/1k2_FL9Tg6sEQTtK-p8ZMI4ck82i0v6YE/view?usp=sharing"
    },
    {
      "text": "Communication English (New)",
      "link": "https://drive.google.com/file/d/1eIqW2u8sKX15l9qw8VjwjasTFa5bELy0/view?usp=sharing"
    },
    {
      "text": "Computer Graphics and Visualization (New)",
      "link": "https://drive.google.com/file/d/10YOeajPQbQcD0Fr7HZ-3N4dgdhRZTKiL/view?usp=sharing"
    },
    {
      "text": "Foundation of Data Science (New)",
      "link": "https://drive.google.com/file/d/1SFrJOyf0R5r3R4KtHz0iIuQOznUevP89/view?usp=sharing"
    },
    {
      "text": "Theory of Computation (New)",
      "link": "https://drive.google.com/file/d/1ImdaLz_MXyvjFcHBHr3Weue86vFUwkZ4/view?usp=sharing"
    },
    {
      "text": "Microprocessors (New)",
      "link": "https://drive.google.com/file/d/1X_NxFAaeEibKaUvgaDTKJxQdKW68wcC6/view?usp=sharing"
    },
    {
      "text": "Advanced Electronics (New)(BEI)",
      "link": "https://drive.google.com/file/d/1-ZypMyFpyE28WLbTW6jh0nDan_7wrh98/view?usp=sharing"
    },
    {
      "text": "Control System(BEI)(New)",
      "link": "https://drive.google.com/file/d/19fMGV2kCdvNZXOsWGkFYK8CSPbwmCns5/view?usp=sharing"
    },
    {
      "text": "Instrumentation and Measurement(BEL)(New)",
      "link": "https://drive.google.com/file/d/1bdf1Oq8TgnN8HATbP4rH_o-Mdv9ePPwZ/view?usp=sharing"
    },
    {
      "text": "Electrical Machine I(BEL)(New)",
      "link": "https://drive.google.com/file/d/1NdNu18NXZcb5Jr4tMm58ufYnvZ1s_EXW/view?usp=sharing"
    },
    {
      "text": "Electrical Engineering Material(BEL)(New)",
      "link": "https://drive.google.com/file/d/12BzHZr0UKllFgpesHx6HZlH_o7Igjr9w/view?usp=sharing"
    },
    {
      "text": "Applied Dynamics",
      "link": "https://drive.google.com/file/d/10mhIX3vujCRuojprTpjfvFZsQrzBspUs/view?usp=sharing"
    },
    {
      "text": "Electrical Machine I (ENEE 202)(new course)",
      "link": "https://drive.google.com/file/d/1GMvC0IvrOpuXxA4foQTTBw7-vfODxjDD/view?usp=sharing"
    },
    {
      "text": "Engineering Geology",
      "link": "https://drive.google.com/file/d/1lvzRBNkaY3DhFBUnrQgERzwfQVHyLgBH/view?usp=sharing"
    },
    {
      "text": "Strength of Material",
      "link": "https://drive.google.com/file/d/1M0Y_2LfrF_F5O16hoO3QwcT51OHffMNL/view?usp=sharing"
    },
    {
      "text": "Surveying I",
      "link": "https://drive.google.com/file/d/1Wk7eCxguS3f02acw0O-Hdcq-3YZI4io0/view?usp=sharing"
    },
    {
      "text": "Civil Engineering Material",
      "link": "https://drive.google.com/file/d/14K7F2NMqaHtV6RT4TfI-4K-mg0yKOriD/view?usp=sharing"
    },
    {
      "text": "Object Oriented programming",
      "link": "https://drive.google.com/file/d/1eb66sDnDlovV8oJ3qYxCxLnCXQTLF_gH/view?usp=sharing"
    },
    {
      "text": "Electronic Devices and Circuits",
      "link": "https://drive.google.com/file/d/1KlnSWyZUb7IyIJ7AwGR54jQdC8ai0DlD/view?usp=sharing"
    },
    {
      "text": "Electromagnetics",
      "link": "https://drive.google.com/file/d/1QNkJ98Qyu4gRKVi9b3PIWdLhK0eCn-kG/view?usp=sharing"
    },
    {
      "text": "Electrical Engineering Materials(new course)",
      "link": "https://drive.google.com/file/d/1jxsIKnzUOfCVJJsoTlKZDdNmjqJriypt/view?usp=sharing"
    },
    {
      "text": "Electrical Engineering Materials",
      "link": "https://drive.google.com/file/d/1-l7769IrPHZhnjwLj4gCWxT7RqCovfwO/view?usp=sharing"
    },
    {
      "text": "Electric Circuit Theory",
      "link": "https://drive.google.com/file/d/1y_MUXNBEN4Ajyjp07mIjNvlZCoXDqewb/view?usp=sharing"
    },
    {
      "text": "Logic Circuit (ENEX 203)(New Course)",
      "link": "https://drive.google.com/file/d/18aER3jxJR-qZ_lhVaTA911DzYzUVBe9I/view?usp=sharing"
    },
    {
      "text": "Digital Logic",
      "link": "https://drive.google.com/file/d/1DTlFQdLeCF4V63hbe4EA3OSdhfAeWBbl/view?usp=sharing"
    },
    {
      "text": "Instrumentation and Measurement(New Course)",
      "link": "https://drive.google.com/file/d/1y9pcFfAHTqQQZcDPQ_nasqfcMFDKi0bY/view?usp=sharing"
    },
    {
      "text": "Instrumentation - BEI",
      "link": "https://drive.google.com/file/d/1tWT6pukLSKXrXc8jjCUh-cdEnSfCDFaW/view?usp=sharing"
    },
    {
      "text": "Control System- BEI, BAS",
      "link": "https://drive.google.com/file/d/1ZBS6qeyZATlhLWl48eXP2jEC9Plg5ETp/view?usp=sharing"
    },
    {
      "text": "Power System Analysis I (New Course)",
      "link": "https://drive.google.com/file/d/1Np69kP2UczZVgpjqDwqFpeMJDRLFWEly/view?usp=sharing"
    },
    {
      "text": "Probability and Statistics(BEI)",
      "link": "https://drive.google.com/file/d/1dNMGrXPh1afUejKMjKfdOEmvK75PJGR8/view?usp=sharing"
    },
    {
      "text": "Theory of Computation",
      "link": "https://drive.google.com/file/d/1lhZ-ecCVNo-arSp-S-imZ47kHZgTeWBR/view?usp=sharing"
    }
  ],
  "4th_Semester": [
    {
      "text": "Communication English (New Course)",
      "link": "https://drive.google.com/file/d/1FKXIwWl_2GZe1HkHPmMkQXXo9Wfidu9E/view?usp=sharing"
    },
    {
      "text": "Probability & Statistics(New Course)",
      "link": "https://drive.google.com/file/d/1aSk1b3dH5pA1Ei3sahPNrLwfav69UVyC/view?usp=sharing"
    },
    {
      "text": "Hydraulics(New Course)",
      "link": "https://drive.google.com/file/d/1E-xmU9RGsF8QYZiHUs9VspHApLtfLWGi/view?usp=sharing"
    },
    {
      "text": "Theory of Structures-ii (New Course)",
      "link": "https://drive.google.com/file/d/13zMybP9JoDlkE9udTUpt8ZeH4hqyuGHC/view?usp=sharing"
    },
    {
      "text": "Soil Mechanics (New Course)",
      "link": "https://drive.google.com/file/d/1O4gzNy5ytCZSoMx7S3Ntm9G2ebLDRdR6/view?usp=sharing"
    },
    {
      "text": "Water Supply Engineering (New Course)",
      "link": "https://drive.google.com/file/d/1y4N2WZKUnIyy_3I3QmMKL_M8LiDPAJlZ/view?usp=sharing"
    },
    {
      "text": "Building Technology (New Course)",
      "link": "https://drive.google.com/file/d/152E23Dqi8Oi9znF8W1qKmWUs8GUMq3Kh/view?usp=sharing"
    },
    {
      "text": "Numerical methods (New Course)",
      "link": "https://drive.google.com/file/d/1MWA08oHkgD6rYt5yK5xImce3_zNhnAV2/view?usp=sharing"
    },
    {
      "text": "Electrical Machine ii (New Course)",
      "link": "https://drive.google.com/file/d/16LbGF6sjWDpIdwm-Y7za3mW9zYPb03mV/view?usp=sharing"
    },
    {
      "text": "Power System Analysis ii (New Course)",
      "link": "https://drive.google.com/file/d/1Q_h1VMOCnHUEPXOcElWWwY6DTL8WgPjo/view?usp=sharing"
    },
    {
      "text": "Control System (New Course)",
      "link": "https://drive.google.com/file/d/1gOgqeYlH7Ts8BXsBbF8Vb71jOFjMfFAG/view?usp=sharing"
    },
    {
      "text": "Microprocessors & Microcontrollers (New Course)",
      "link": "https://drive.google.com/file/d/1GPy9pDpt0KHFFFu4_kziNsy0PrQkX4-_/view?usp=sharing"
    },
    {
      "text": "Discrete Structure (New Course)",
      "link": "https://drive.google.com/file/d/14Ps4PEgVH8lKdJKtLNDm8yRFtW_F2rLV/view?usp=sharing"
    },
    {
      "text": "Instrumentation (New Course)",
      "link": "https://drive.google.com/file/d/1OmTouItSVy3VBjmWspFScc5Se8CPpynT/view?usp=sharing"
    },
    {
      "text": "Computer Organization & Architecture (New Course)",
      "link": "https://drive.google.com/file/d/1fRIg7QI8L4uOp_nm4WxPiCLEn2Uxl7Hk/view?usp=sharing"
    },
    {
      "text": "Electromagnetics (New Course)",
      "link": "https://drive.google.com/file/d/1TIjV8p2L4Twgw56Bk-WQ34j3ubz2napD/view?usp=sharing"
    },
    {
      "text": "Signals & Systems (New Course)",
      "link": "https://drive.google.com/file/d/1AcJWrWybn6ObGrAsiRigF7yWTTF5xMaM/view?usp=sharing"
    },
    {
      "text": "Data Structure and Algorithm (New Course)",
      "link": "https://drive.google.com/file/d/165JSeTcsasWtFoNbL9Fc3_LDdy-akzoU/view?usp=sharing"
    },
    {
      "text": "Data Communication (New Course)",
      "link": "https://drive.google.com/file/d/106EL8cjOrCKH0zHq4s1v18YjjCnYBe7F/view?usp=sharing"
    },
    {
      "text": "Operating System (New Course)",
      "link": "https://drive.google.com/file/d/1yVE5swxcoR2qhpEDl56VlM2tOmOwHNiF/view?usp=sharing"
    },
    {
      "text": "Probability and Statistics",
      "link": "https://drive.google.com/file/d/1Qzyl7K14snoexPrsaGhY9WEMoCNOC5A7/view?usp=sharing"
    },
    {
      "text": "Building Drawing",
      "link": "https://drive.google.com/file/d/1wzxyNVQ79ZlVA6cee9fLbJldsqXJcSCD/view?usp=sharing"
    },
    {
      "text": "Hydraulics",
      "link": "https://drive.google.com/file/d/1bUV5QtPpwglwLxFRqrZpbrOYAKFBxZus/view?usp=sharing"
    },
    {
      "text": "Soil Mechanics",
      "link": "https://drive.google.com/file/d/1w6TNGLheODtuKx9MRQj4Dc_TJp_Ehlrm/view?usp=sharing"
    },
    {
      "text": "Surveying II",
      "link": "https://drive.google.com/file/d/1y6iecNMz1Ra3fzXcQETZs4E5pXHFW0pj/view?usp=sharing"
    },
    {
      "text": "Theory of Structure I",
      "link": "https://drive.google.com/file/d/1XWLpRLK7TlMH_ST-vnJS2O1hHDLRP4iZ/view?usp=sharing"
    },
    {
      "text": "Engineering Geology II",
      "link": "https://drive.google.com/file/d/1bz1hmWTzPEn9HHdle_f2DT3bNuSlckRH/view?usp=sharing"
    },
    {
      "text": "Instrumentation I",
      "link": "https://drive.google.com/file/d/1aoo0xdD6fBYocI_UKpqvLeog0832z35W/view?usp=sharing"
    },
    {
      "text": "Numerical Methods",
      "link": "https://drive.google.com/file/d/1SOf-0NKC07aGru5C0KAcMlCaJwBta1Po/view?usp=sharing"
    },
    {
      "text": "Electrical Machines",
      "link": "https://drive.google.com/file/d/1wScRQVq3CZRTLhQ_WNC4QBPgPQMmEtm9/view?usp=sharing"
    },
    {
      "text": "Microprocessor",
      "link": "https://drive.google.com/file/d/1ov8mOqzjce6ROrYvxs1ZnLw4vzLgRqWb/view?usp=sharing"
    },
    {
      "text": "Power System Analysis I",
      "link": "https://drive.google.com/file/d/1rCmfu7bSVw-4g1BKVeAXbFPgKcpH_w3X/view?usp=sharing"
    },
    {
      "text": "Data Structure and Algorithum",
      "link": "https://drive.google.com/file/d/1kcYBbMjcQR2CoWCSt-1cSbgoW75A7Ih_/view?usp=sharing"
    },
    {
      "text": "Discrete Structure",
      "link": "https://drive.google.com/file/d/1oohPCpPT3thB3210yUPAPz5yN70kr4R3/view?usp=sharing"
    },
    {
      "text": "Advanced Electronics",
      "link": "https://drive.google.com/file/d/1gW1CH4o-7of4wP0nG386Bn2fn6upKBm0/view?usp=sharing"
    },
    {
      "text": "Applied Mathematics",
      "link": "https://drive.google.com/file/d/1xl4CawIZ0os5HJ7r6Y78c5J1tISpGQ8-/view?usp=sharing"
    },
    {
      "text": "Electrical Machine I for BEL",
      "link": "https://drive.google.com/file/d/1EqUPQ5L84MygqcimQyGTZRAANWUcmpUT/view?usp=sharing"
    },
    {
      "text": "Computer Graphics (BEI)",
      "link": "https://drive.google.com/file/d/1Lfqx-pdj_KhjIctSbuqeARIq1lbZ_wSP/view?usp=sharing"
    },
    {
      "text": "Power System (BEX)",
      "link": "https://drive.google.com/file/d/13s8hfmpuUdAeEUpIl9_W2ijLwbmn_T_7/view?usp=sharing"
    }
  ],
  "5th_Semester": [
    {
      "text": "Concrete Technology",
      "link": "https://drive.google.com/file/d/1w1MfmNr1ukj1lmx0btZDpajqeGUeNrd2/view?usp=sharing"
    },
    {
      "text": "Engineering Hydrology",
      "link": "https://drive.google.com/file/d/1r7ihD6guVxEMg0o4DElwfMsMiR0Agj4a/view?usp=sharing"
    },
    {
      "text": "Foundation Engineering",
      "link": "https://drive.google.com/file/d/1qO_yGyQurZcjiXvZawR7ehuRGPY15yu5/view?usp=sharing"
    },
    {
      "text": "Numerical Methods",
      "link": "https://drive.google.com/file/d/1e5i6g4ASibQI9v-VKNNVefmlr_-4lRPV/view?usp=sharing"
    },
    {
      "text": "Theory of Structure II",
      "link": "https://drive.google.com/file/d/1Wy8rauCMAdU6isQ4FGCTiW8LIknc06BH/view?usp=sharing"
    },
    {
      "text": "Water Supply Engineering",
      "link": "https://drive.google.com/file/d/1U_a81asWsTCUwz8Bqp0HI319kSu24zid/view?usp=sharing"
    },
    {
      "text": "Probability and Statistics",
      "link": "https://drive.google.com/file/d/1Qz5NGj_RfoWwpQK1Yd4k8YS8O3Sa1oU1/view?usp=sharing"
    },
    {
      "text": "Electrical Machine Design",
      "link": "https://drive.google.com/file/d/1WMW4q4RqQvZGT-jxX5BibBkhJTVA3biv/view?usp=sharing"
    },
    {
      "text": "Instrumentation II",
      "link": "https://drive.google.com/file/d/1VIPvWytmHxfPf86mKeqMttB-dCiAHvAw/view?usp=sharing"
    },
    {
      "text": "Control System",
      "link": "https://drive.google.com/file/d/1MPVLRGM0gDhHnXKbXrF5Ez5w6M4pXaJK/view?usp=sharing"
    },
    {
      "text": "Communication English",
      "link": "https://drive.google.com/file/d/1QXh4eBrfG5t3xHryd-JCp-eXKY9rJ9tb/view?usp=sharing"
    },
    {
      "text": "Power Syatem Analysis II",
      "link": "https://drive.google.com/file/d/1XUtbAqtPT1mQ7xI93Bjf11LZ98sJgT7Z/view?usp=sharing"
    },
    {
      "text": "Electrical Machine II",
      "link": "https://drive.google.com/file/d/1DQ66O8FJvX1-O1X9raVunXKw2v6Giv22/view?usp=sharing"
    },
    {
      "text": "Computer Graphics",
      "link": "https://drive.google.com/file/d/1_2MvAfb0YwY8LN6OREWbWgHqghd-Erz9/view?usp=sharing"
    },
    {
      "text": "Computer Organization Architecture",
      "link": "https://drive.google.com/file/d/1Xd6m2Nsfx6qt3gUUiZ3Z-qzX_Svyo1wW/view?usp=sharing"
    },
    {
      "text": "Data Communication",
      "link": "https://drive.google.com/file/d/1iRSbRmym1VlC-8MbBEHwlZaM-7_SFB2A/view?usp=sharing"
    },
    {
      "text": "Software Engineering",
      "link": "https://drive.google.com/file/d/1dqgqjfD2fm-978NUEQpGMJZENh2mA6Wb/view?usp=sharing"
    },
    {
      "text": "Advnaced Electronics",
      "link": "https://drive.google.com/file/d/1dYoeRrO7Lk-2I4f-EUTEbDq5sZNF-TPS/view?usp=sharing"
    },
    {
      "text": "Computer Network(BEI)",
      "link": "https://drive.google.com/file/d/16yZCuCR0gLCM4pIuXKVtvN96ICCbwTUH/view?usp=sharing"
    },
    {
      "text": "Operating System(BEI)",
      "link": "https://drive.google.com/file/d/19jW4ArZeFDpqDUtB6iXactthjLZrTayl/view?usp=sharing"
    },
    {
      "text": "Filter Design(BEI)",
      "link": "https://drive.google.com/file/d/1XnTB0rK5HhViyhLjJlvU01h0luvsk3nW/view?usp=sharing"
    },
    {
      "text": "Database Management Systems(BEI)",
      "link": "https://drive.google.com/file/d/1HPMZQrzZPZWKnoko0u6MkJI6bxHSLb7Q/view?usp=sharing"
    },
    {
      "text": "Engineering Economics(BEI)",
      "link": "https://drive.google.com/file/d/1nI-nxFrca2-87s1XEcYxBLdBPZ94ilxf/view?usp=sharing"
    }
  ],
  "6th_Semester": [
    {
      "text": "Transportation Engineering",
      "link": "https://drive.google.com/file/d/1LJ69tnTNaJBTJnUWmYJgAxWOWpkrUPru/view?usp=sharing"
    },
    {
      "text": "Sanitary Engineering",
      "link": "https://drive.google.com/file/d/1psDfbHu98F3cd1Z0R-JMeoPfCX3vHlRO/view?usp=sharing"
    },
    {
      "text": "Irrigation and Drainage Engineering",
      "link": "https://drive.google.com/file/d/14wVMu0DdS5OfNOTuzLn09ieqT654XZje/view?usp=sharing"
    },
    {
      "text": "Engineering Economics",
      "link": "https://drive.google.com/file/d/12iMduQ_EHVqtOgFg6QdpzSICeGCpLNxj/view?usp=sharing"
    },
    {
      "text": "Design of Steel and Timber Structure",
      "link": "https://drive.google.com/file/d/1PEDKYseX1xAtbqfHdzouVscHluYpAQqG/view?usp=sharing"
    },
    {
      "text": "Building Technology",
      "link": "https://drive.google.com/file/d/18uS1AejdsAuUNfMUg81L-II4eEOiI3tZ/view?usp=sharing"
    },
    {
      "text": "Communication English",
      "link": "https://drive.google.com/file/d/19X3REp_ye0WutcT-eSKt6atDAntqp3GZ/view?usp=sharing"
    },
    {
      "text": "Digital Control System",
      "link": "https://drive.google.com/file/d/1Lb8MkPXkmMrDsGmYLbLzts0mjIfUxjRN/view?usp=sharing"
    },
    {
      "text": "Hydropower",
      "link": "https://drive.google.com/file/d/1Bjn3Mknpbm4zs-Dnu_XXEdQd6hF1YhON/view?usp=sharing"
    },
    {
      "text": "Industrial Power Distribution",
      "link": "https://drive.google.com/file/d/1vl48HE-diPImZqb0PHjYMeB52J-uhJlW/view?usp=sharing"
    },
    {
      "text": "Signal Analysis",
      "link": "https://drive.google.com/file/d/1R61bZtdwe9maHoGWJzi5ShuNiEeRk3ay/view?usp=sharing"
    },
    {
      "text": "Switchgear and Protection",
      "link": "https://drive.google.com/file/d/17P5qEtNxcELmqk1hKCLkJkQkmtwxa_gC/view?usp=sharing"
    },
    {
      "text": "Artificial Intelligence",
      "link": "https://drive.google.com/file/d/1N5cnVN-ZlQ7a0dCzU4prg-voCtTScVlJ/view?usp=sharing"
    },
    {
      "text": "Database Management System",
      "link": "https://drive.google.com/file/d/1FAtWys7SAedLk4IjI5Z0_CiUsZWvUZgP/view?usp=sharing"
    },
    {
      "text": "Embedded System",
      "link": "https://drive.google.com/file/d/1ThbUSt7-2yKeIr2o3zuFWVQsZ3ChhBa8/view?usp=sharing"
    },
    {
      "text": "Object Oriented Analysis and Design",
      "link": "https://drive.google.com/file/d/1XVo9QHf5Y_VPepShqclLXx3CG6dp8Jxp/view?usp=sharing"
    },
    {
      "text": "Operating System",
      "link": "https://drive.google.com/file/d/1qKmfWXdt9eJEW9UZChoqomf8RSmKkCa0/view?usp=sharing"
    },
    {
      "text": "Communication Systems",
      "link": "https://drive.google.com/file/d/10PHfrfrtNP238QSptUfzmfwguojxYJqd/view?usp=sharing"
    },
    {
      "text": "Propagation and Antenna",
      "link": "https://drive.google.com/file/d/15NZNjlaMv1QP9rQ46jAS3Pc7_qm5PMqG/view?usp=sharing"
    },
    {
      "text": "Computer Network",
      "link": "https://drive.google.com/file/d/11Vacvpja_QJr-cDPhUWSWbupcpIo5E-n/view?usp=sharing"
    },
    {
      "text": "Project Management(BEI)",
      "link": "https://drive.google.com/file/d/1jRfTSTEQy3fE_nRzAeHXhqBpG_4zIUZH/view?usp=sharing"
    },
    {
      "text": "Object Oriented Software Engineering",
      "link": "https://drive.google.com/file/d/1e-ossAfElxERCjk7_pnqvSpY_mfFEtSP/view?usp=sharing"
    }
  ],
  "7th_Semester": [
    {
      "text": "Hydropower Engineering",
      "link": "https://drive.google.com/file/d/1OAJh3Fgp-iQg3i1Mg241F841Ma03bSxe/view?usp=sharing"
    },
    {
      "text": "Project Engineering",
      "link": "https://drive.google.com/file/d/189Wsl8wDzFbAXhe4DcT79gWDBJAPuyXc/view?usp=sharing"
    },
    {
      "text": "Transportation Engineering II",
      "link": "https://drive.google.com/file/d/1excqlnySZMbqRxB_yCxsA62SW6eC1Qxt/view?usp=sharing"
    },
    {
      "text": "Design of RCC Structure",
      "link": "https://drive.google.com/file/d/1iAwlQ0D_j3Ap4BGc6wendtX9gN4KV3k1/view?usp=sharing"
    },
    {
      "text": "Estimating _ Costing",
      "link": "https://drive.google.com/file/d/1gI0T16hE0JVxQTuETCOvQtgrdIY58kD1/view?usp=sharing"
    },
    {
      "text": "Organization and Management",
      "link": "https://drive.google.com/file/d/1m54-acFDITDJTBXYsbRAQJKcsCGKv5p-/view?usp=sharing"
    },
    {
      "text": "Power Electronics",
      "link": "https://drive.google.com/file/d/1zBBtoBb2P8V72ahVMhFh5yRqPs6JVX1D/view?usp=sharing"
    },
    {
      "text": "Power Plant Equipment",
      "link": "https://drive.google.com/file/d/1hxQzwnxx-rS-g0a6Ux1R-Uz2TcyhXCGc/view?usp=sharing"
    },
    {
      "text": "Technology, Environment and Society",
      "link": "https://drive.google.com/file/d/1Jh4xDH1Riidm_OrVRMkqsv6oOTswdWO4/view?usp=sharing"
    },
    {
      "text": "Utilization of Electrical Energy",
      "link": "https://drive.google.com/file/d/1fi4dGfO6QXvKjv3woBBqkvad3qUd0a6E/view?usp=sharing"
    },
    {
      "text": "Project Management",
      "link": "https://drive.google.com/file/d/1FkI8CQLbb1cvdT0YTwKJN8MwFjRmz8g5/view?usp=sharing"
    },
    {
      "text": "Computer Network",
      "link": "https://drive.google.com/file/d/1Z4MglrE_4YdVwYR-jMZrBcohs7MyBOuZ/view?usp=sharing"
    },
    {
      "text": "Energy Environment _ Society",
      "link": "https://drive.google.com/file/d/1wYR6A1vnoUOfrSmqTeoWHOqoxtngy7YF/view?usp=sharing"
    },
    {
      "text": "Distributed System",
      "link": "https://drive.google.com/file/d/1pZYQ-vaOpmdLkMYBrI6pO9Rr7Iyjr8hh/view?usp=sharing"
    },
    {
      "text": "Digital Signai Analysis _ Processing",
      "link": "https://drive.google.com/file/d/1vaErecW8441J_O8HNnUsWQnmni5r2-yo/view?usp=sharing"
    },
    {
      "text": "Filter Design(old course)",
      "link": "https://drive.google.com/file/d/1rA5ZzPCv6EOayG2FSfNJQiHZg0LM2tb0/view?usp=sharing"
    },
    {
      "text": "Communication Systems II(old course)",
      "link": "https://drive.google.com/file/d/1zvbMZ1s1ZrVz54SvN8gW4Afqze10bItz/view?usp=sharing"
    },
    {
      "text": "Telecommunication(old course)",
      "link": "https://drive.google.com/file/d/1VfUSWtcBz1fAf2qxoFoPdi4gBPCuZHey/view?usp=sharing"
    },
    {
      "text": "Wireless Communication(BEI)",
      "link": "https://drive.google.com/file/d/1cz5ZYvzYkLSiix74Gj_PlDHgay_RdYH2/view?usp=sharing"
    },
    {
      "text": "Digital Signal Analysis and Processing(BEI)",
      "link": "https://drive.google.com/file/d/1vaErecW8441J_O8HNnUsWQnmni5r2-yo/view?usp=sharing"
    },
    {
      "text": "RF and Microwave Engineering(BEI)",
      "link": "https://drive.google.com/file/d/1CMA_Ds8YRy4BNrqE_W1daBvgB7q5tbAP/view?usp=sharing"
    },
    {
      "text": "Artificial Intelligence(BEI)",
      "link": "https://drive.google.com/file/d/1JzeHQSNjH7JeeLSu7v6CSe8JNVFFGK4-/view?usp=sharing"
    },
    {
      "text": "Enterprise Computing(BEI and BCT)",
      "link": "https://drive.google.com/file/d/1BJe_goiGHoH0nbJ6bZy1zQyAJpi5kYr8/view?usp=sharing"
    },
    {
      "text": "Aero_nautical TeJecom-munication(BEI and BCT)",
      "link": "https://drive.google.com/file/d/1TyExrsqMay072Xmfqh98i73B1JI4KQND/view?usp=sharing"
    },
    {
      "text": "Earth Tluzurd",
      "link": "https://drive.google.com/file/d/1BP43YWgpJkQnmX7Q52Pq3nlU5Gs2K75N/view?usp=sharing"
    },
    {
      "text": "Image Processing and Pattem Recognition",
      "link": "https://drive.google.com/file/d/1E80VsxwTNq38vzc_-mYbUMNQGkGJ1Kw-/view?usp=sharing"
    }
  ],
  "8th_Semester": [
    {
      "text": "Engineering Professional Practice",
      "link": "https://drive.google.com/file/d/1kVwcu9t-cwGhs-JOIQxBKR_JWwVhR1vn/view?usp=sharing"
    },
    {
      "text": "Technology, Environment and Society",
      "link": "https://drive.google.com/file/d/1r_R47Dxmt7_amtk-neiykKgslIE4Uxza/view?usp=sharing"
    },
    {
      "text": "Computational Techniques in Civil Engineering",
      "link": "https://drive.google.com/file/d/1CRmyiK_b34btGnpmbPAzbF_giKD7U4CO/view?usp=sharing"
    },
    {
      "text": "Construction Management",
      "link": "https://drive.google.com/file/d/1P5enGX0jgZFAwJ_XDzjvXdU-TLbTPj5c/view?usp=sharing"
    },
    {
      "text": "Transmission and Distribution",
      "link": "https://drive.google.com/file/d/1oDSO7XkpcjPXHyYFdSrZg050lP6HRiwy/view?usp=sharing"
    },
    {
      "text": "Power Plant Design",
      "link": "https://drive.google.com/file/d/1VegaNKHgizHn0Q7DFJNTNhwPGP3O6UtA/view?usp=sharing"
    },
    {
      "text": "High Voltage Engineering",
      "link": "https://drive.google.com/file/d/1TR1TmwHK0OVrxZ2uF9WFZ_Fo600EdL_i/view?usp=sharing"
    },
    {
      "text": "Information System",
      "link": "https://drive.google.com/file/d/1kt-Sc3LJs-Mu-egSGowWnxGoA3PYQlSG/view?usp=sharing"
    },
    {
      "text": "Internet and Intranet",
      "link": "https://drive.google.com/file/d/1oJd1sNErKv6aaSESH8xxGoI8jAxY25E0/view?usp=sharing"
    },
    {
      "text": "Simulation and Modeling",
      "link": "https://drive.google.com/file/d/1clBKyYdVJWNFmz_Kj_hvnnWt-SB3_rHo/view?usp=sharing"
    },
    {
      "text": "Digital Signal Processing",
      "link": "https://drive.google.com/file/d/1QUD-K1pIk_5pu8bGhCqrMinePN2KFP9X/view?usp=sharing"
    },
    {
      "text": "Wireless Communication",
      "link": "https://drive.google.com/file/d/12ql5puowXaNXwefcY3vXgm1qxLutYj1a/view?usp=sharing"
    },
    {
      "text": "RF and Microwave Engineering",
      "link": "https://drive.google.com/file/d/1wqQL33I8tUF-Q4GGMF-WFOUnw8QarvkJ/view?usp=sharing"
    },
    {
      "text": "Energy,Environment and Society(BEI)",
      "link": "https://drive.google.com/file/d/1vuQkTZETdVmswWtpzmCFGyNknQOy_DqP/view?usp=sharing"
    },
    {
      "text": "Telecommunication(BEI)",
      "link": "https://drive.google.com/file/d/1QVurqjxv_CKC_d6hlycMDx4-Xoz1MLYI/view?usp=sharing"
    }
  ],
  "Elective-I": [
    {
      "text": "Earth Hazard",
      "link": "https://drive.google.com/file/d/1bsX_CI2zJxhx5-0EcttGdirPT9Duf3AU/view?usp=sharing"
    },
    {
      "text": "Enterprise Computing",
      "link": "https://drive.google.com/file/d/1r3aU_Y1qB_ZoPp1vfXw7udunkNT25xkN/view?usp=sharing"
    },
    {
      "text": "Bio-Engineering",
      "link": "https://drive.google.com/file/d/1V4XKM6A9jpXFVSENZqRy694EaPVkwU6Q/view?usp=sharing"
    },
    {
      "text": "Rock Engineering",
      "link": "https://drive.google.com/file/d/1hCCsAoP74zz8z-RVyK2gHf8R0wBKZ8ob/view?usp=sharing"
    },
    {
      "text": "Structural Dynamics",
      "link": "https://drive.google.com/file/d/1AgCxnPzp-IaEGeoHPnIz3wjD9f4J7t3O/view?usp=sharing"
    },
    {
      "text": "Transportation planning and engineering",
      "link": "https://drive.google.com/file/d/11N2t1sotjKnRHf8IOaFfXOzni7g_K3_w/view?usp=sharing"
    },
    {
      "text": "Rural Electrification",
      "link": "https://drive.google.com/file/d/14WHNJOphdQEDXx9Yi_jIu0RO-sCmb_On/view?usp=sharing"
    },
    {
      "text": "Electrical Energy System Management",
      "link": "https://drive.google.com/file/d/1TvD3W1r7eG_gaFlUKos2t4HLw70uyJAy/view?usp=sharing"
    },
    {
      "text": "Advanced Java Programming",
      "link": "https://drive.google.com/file/d/17wHAMV3ZdoQDB7iislM68GLjop1Kn1Hd/view?usp=sharing"
    },
    {
      "text": "Data Mining",
      "link": "https://drive.google.com/file/d/1m7mIRZys3qA6Dhex2QWh5uz3e8YsnmQf/view?usp=sharing"
    },
    {
      "text": "Satellite Communication",
      "link": "https://drive.google.com/file/d/10L8IMqRisJay2KdTwERpUqqDC6jhAdFT/view?usp=sharing"
    },
    {
      "text": "Biomedical Instruction",
      "link": "https://drive.google.com/file/d/1f5TLTG7zMak1h8hTCsCZwDDxx82Uqw_o/view?usp=sharing"
    },
    {
      "text": "Web Technologies and Applications(BEX & BCT)",
      "link": "https://drive.google.com/file/d/1zB-rkdPHa9-2ibXZdIrocQ5pVKIfGJRZ/view?usp=sharing"
    }
  ],
  "Elective-II": [
    {
      "text": "Earlhquake Resistance Design of structure",
      "link": "https://drive.google.com/file/d/1eaqFmK7O92He3naNesiklWDVyN_hOCb2/view?usp=sharing"
    },
    {
      "text": "Rural Road Engineering",
      "link": "https://drive.google.com/file/d/1DooDMn3T6yamNH-1ZEWZp1cA5gbS-db5/view?usp=sharing"
    },
    {
      "text": "Road Safety",
      "link": "https://drive.google.com/file/d/1_43G9EFeKRrlyZmkMDQGoYmIXWrC-wxU/view?usp=sharing"
    },
    {
      "text": "Biomedical Instrumentation",
      "link": "https://drive.google.com/file/d/1u4ZnGCm0cWO8ogGPjCpHhIG1QQeODMN_/view?usp=sharing"
    },
    {
      "text": "Applied Photovoltaic Engineering",
      "link": "https://drive.google.com/file/d/1nEsD5q46YOkllL5ZPnMQL2MEaKa3sdrW/view?usp=sharing"
    },
    {
      "text": "Big Data Technologies",
      "link": "https://drive.google.com/file/d/1xdvi5ubbpbpq1O4jQQXLD4-CoYUfjyoh/view?usp=sharing"
    },
    {
      "text": "Broadcast Engineering",
      "link": "https://drive.google.com/file/d/158a9TOZgePbP7Y-IcRB8wbsGp0doukE7/view?usp=sharing"
    },
    {
      "text": "Optical Fiber Communication",
      "link": "https://drive.google.com/file/d/1R9X--JXQI39Ea_VViUqHUmF9LyLZ0qVQ/view?usp=sharing"
    },
    {
      "text": "Advanced Power System Analysis",
      "link": "https://drive.google.com/file/d/1cFaxW810B-xAPxg_WAirHcuxUTUK1O5U/view?usp=sharing"
    },
    {
      "text": "Traffic Transportation and Modeling",
      "link": "https://drive.google.com/file/d/1IMmbhmVgec4W9tfvd34JE78FOZswQtkK/view?usp=sharing"
    },
    {
      "text": "Advanced Gotechnical Engineering",
      "link": "https://drive.google.com/file/d/1aHRMpDJAQNPA_G0hiyN4z_XpynxPVbdt/view?usp=sharing"
    },
    {
      "text": "Agile Software Development",
      "link": "https://drive.google.com/file/d/1RnMiYl7MvF-WIUWUPFf1k99juRO4Apai/view?usp=sharing"
    },
    {
      "text": "Networking with IPv6",
      "link": "https://drive.google.com/file/d/1xWFK6JBnMoiQ7CsPDKY5yyj3fOq4a5oX/view?usp=sharing"
    },
    {
      "text": "Rock Slope Engineering",
      "link": "https://drive.google.com/file/d/1HazcQRuumbMuCEu1KS7tmVi2b6cwIMvR/view?usp=sharing"
    },
    {
      "text": "Database Management System",
      "link": "https://drive.google.com/file/d/1Y7ynaiYHzFDhxBLr7RTVzPCEJcGDV1Mh/view?usp=sharing"
    },
    {
      "text": "Ground Water Engineering",
      "link": "https://drive.google.com/file/d/1ZX16tLCsDt3r_bCo1C0YAxsCqg0X_IDi/view?usp=sharing"
    },
    {
      "text": "Rock Mechanics",
      "link": "https://drive.google.com/file/d/1i0ICdIdT8t7XDrz2TZcA7RQmlFOz7pFN/view?usp=sharing"
    },
    {
      "text": "Design of Bridge",
      "link": "https://drive.google.com/file/d/1cS0fiJbLfZY8N0phZgTF78wxKdhIsB4j/view?usp=sharing"
    },
    {
      "text": "Hill Irrigation",
      "link": "https://drive.google.com/file/d/1I7lkddbAVhary140yvIEfayzpHO72TMt/view?usp=sharing"
    },
    {
      "text": "Geotechnical Earthquake Engineering",
      "link": "https://drive.google.com/file/d/1UY1g2QhyI9dCUxzI47CqO6183-QDQhns/view?usp=sharing"
    }
  ],
  "Elective-III": [
    {
      "text": "Disaster Risk Management",
      "link": "https://drive.google.com/file/d/1shlBQST1NcmXTUsYVKiWQSrz_f2D3Uji/view?usp=sharing"
    },
    {
      "text": "Procurement Management",
      "link": "https://drive.google.com/file/d/1J4NKoiJ1YYcjkVbGuQV3wqeH4wV93Lg_/view?usp=sharing"
    },
    {
      "text": "Micro Hydro Power",
      "link": "https://drive.google.com/file/d/1tFCY9XOKMMYbBBFewmBrnnYBxo93Wlys/view?usp=sharing"
    },
    {
      "text": "Multimedia System",
      "link": "https://drive.google.com/file/d/1IBlrX1VOcybJD5hPGF_U-e0xFVw1OGTD/view?usp=sharing"
    },
    {
      "text": "GIS and Remote Sensing",
      "link": "https://drive.google.com/file/d/1ZqGzT-EEcrQmEjjiZhbokktdHH3Xs0IB/view?usp=sharing"
    },
    {
      "text": "Construction Safety Management",
      "link": "https://drive.google.com/file/d/1HWNP5cyIymqRjBzofC44vPS8rTaswNP1/view?usp=sharing"
    },
    {
      "text": "Environment Impact Assessment",
      "link": "https://drive.google.com/file/d/1Aj30cnDZb0o-qCOP3cuSA9JEj6_4zj3P/view?usp=sharing"
    },
    {
      "text": "Time Series Analysis",
      "link": "https://drive.google.com/file/d/1Nx4LTmz6snVQezStE2laPZZ_Z4rQlqLy/view?usp=sharing"
    },
    {
      "text": "Enterprise Application Design and Development",
      "link": "https://drive.google.com/file/d/1gcizacBI_O3UBU_diapWWlrUmK0WSmOQ/view?usp=sharing"
    },
    {
      "text": "Geographic Information System(GIS)",
      "link": "https://drive.google.com/file/d/1DiZTaQEBx130Pti57uvTEWerIkUn4n4f/view?usp=sharing"
    },
    {
      "text": "Remote Sensing",
      "link": "https://drive.google.com/file/d/114ksUn10BWnLJniqZjrv2KIZwSbqEb3S/view?usp=sharing"
    },
    {
      "text": "XML:Foundation Techniques and Application",
      "link": "https://drive.google.com/file/d/1haSoOcL6C4M5-XYQfnzAxRpzWiklEfeK/view?usp=sharing"
    },
    {
      "text": "Artificial Intelligence",
      "link": "https://drive.google.com/file/d/1vYhV3pX3C8iyvh6c-dSl-f-AIwvtxRZV/view?usp=sharing"
    },
    {
      "text": "Artificial Neural Network",
      "link": "https://drive.google.com/file/d/1ulAAfq6OXVbKdCLkziLGGzwAJh5iYL5n/view?usp=sharing"
    },
    {
      "text": "Wind Energy Conversion System",
      "link": "https://drive.google.com/file/d/1bBByCXWMRuaRjjJqZkU0q_mQ4mGG72bM/view?usp=sharing"
    },
    {
      "text": "Telecommunication",
      "link": "https://drive.google.com/file/d/18pguW_t2JO2HLbdtp6ukS6zI4d4hgjkq/view?usp=sharing"
    }
  ]
};
const $$splitComponentImporter = () => import("./index-CNeF5IM6.mjs");
const semesterCount = Object.keys(QuestionsData).length;
const totalResourceCount = Object.values(QuestionsData).reduce((count, items) => count + items.length, 0);
const Route = createFileRoute("/")({
  head: () => buildSeo({
    title: "IOE Archive | Past Questions and Resources",
    description: `Browse ${totalResourceCount} IOE past-question resources across ${semesterCount} semesters, electives, and engineering subjects in one searchable archive.`,
    path: "/",
    keywords: ["IOE past questions", "IOE archive", "engineering question bank", "Nepal engineering resources", "semester question collection"],
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "WebSite",
        name: "IOE Archive",
        url: "https://dev-sandip.github.io/pyq/",
        description: "Searchable archive of IOE past questions and study resources."
      }, {
        "@type": "CollectionPage",
        name: "IOE Archive PYQ Collection",
        url: "https://dev-sandip.github.io/pyq/",
        isPartOf: {
          "@type": "WebSite",
          name: "IOE Archive",
          url: "https://dev-sandip.github.io/pyq/"
        },
        about: "IOE past questions, semester resources, and engineering subjects"
      }]
    }
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const DevelopersRoute = Route$2.update({
  id: "/developers",
  path: "/developers",
  getParentRoute: () => Route$3
});
const AttributionRoute = Route$1.update({
  id: "/attribution",
  path: "/attribution",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  AttributionRoute,
  DevelopersRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  QuestionsData as Q,
  router as r
};
