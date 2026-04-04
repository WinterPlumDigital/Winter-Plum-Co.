import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, Link, Routes, Route } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { motion, useScroll, useMotionValue, useMotionValueEvent, useSpring, useTransform } from "motion/react";
import { X, Menu, ArrowRight, CheckCircle2, MonitorSmartphone, Star, Mail, Loader2, Download, Minus, Plus } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Logo = forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      ref,
      src: "/logo.png",
      alt: "Winter Plum & Co. Logo",
      referrerPolicy: "no-referrer",
      ...props
    }
  );
});
const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" }
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-mulberry/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-2xl font-serif font-medium text-mulberry flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Logo, { className: "w-8 h-8 text-mulberry" }),
        "Winter Plum & Co."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
        links.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.path,
            className: cn(
              "text-sm uppercase tracking-widest transition-colors hover:text-mulberry",
              location.pathname === link.path ? "text-mulberry font-medium" : "text-ink/60"
            ),
            children: link.name
          },
          link.path
        )),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "px-6 py-2.5 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-colors",
            children: "Get Started"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden text-ink",
          onClick: () => setIsOpen(!isOpen),
          "aria-label": isOpen ? "Close menu" : "Open menu",
          "aria-expanded": isOpen,
          children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        className: "md:hidden absolute top-20 left-0 right-0 bg-cream border-b border-mulberry/10 px-6 py-8 flex flex-col gap-6",
        children: links.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.path,
            onClick: () => setIsOpen(false),
            className: cn(
              "text-lg uppercase tracking-widest",
              location.pathname === link.path ? "text-mulberry font-medium" : "text-ink/60"
            ),
            children: link.name
          },
          link.path
        ))
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-ink text-cream py-20 px-6 mt-auto relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-3xl font-serif font-medium text-blush flex items-center gap-2 mb-6", children: [
          /* @__PURE__ */ jsx(Logo, { className: "w-10 h-10 text-blush" }),
          "Winter Plum & Co."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-cream/60 max-w-sm font-light leading-relaxed", children: "We build memorable, high-converting websites for growing brands. Built to perform. So your brand can blossom in any season." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm uppercase tracking-widest text-sage font-serif font-medium mb-2", children: "Navigation" }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-cream/60 hover:text-blush transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-cream/60 hover:text-blush transition-colors", children: "Services" }),
        /* @__PURE__ */ jsx(Link, { to: "/faq", className: "text-cream/60 hover:text-blush transition-colors", children: "FAQ" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-cream/60 hover:text-blush transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm uppercase tracking-widest text-sage font-serif font-medium mb-2", children: "Contact" }),
        /* @__PURE__ */ jsx("p", { className: "text-cream/60 mt-4 text-sm", children: "winterplum.co@gmail.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 flex flex-col lg:flex-row items-center justify-between text-sm text-cream/40 gap-6 lg:gap-0", children: [
      /* @__PURE__ */ jsxs("p", { className: "order-3 lg:order-1", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Winter Plum & Co. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-3 flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-cream/80 transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-cream/80 transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function PlumBranch({ className }) {
  const branchSway = {
    animate: {
      rotate: [0, 8, 12, 9, 14, -1, 0],
      // Bends significantly, then snaps back
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.15, 0.2, 0.25, 0.4, 1]
      }
    }
  };
  const flowerTremble = {
    animate: {
      rotate: [0, -25, 30, -20, 35, -15, 20, -5, 0],
      scale: [1, 0.9, 1.1, 0.95, 1.05, 0.98, 1.02, 1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 1]
      }
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      viewBox: "0 0 200 200",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: { originX: 0, originY: 0, overflow: "visible" },
      variants: branchSway,
      animate: "animate",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxs("g", { className: "text-mulberry/40", children: [
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M-50,80 Q50,100 250,60",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              initial: { x: -100, opacity: 0 },
              animate: {
                x: [-100, 50, 200, 200],
                opacity: [0, 0.8, 0, 0]
              },
              transition: { duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.1, 0.3, 1] }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M-20,150 Q100,160 250,120",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: -100, opacity: 0 },
              animate: {
                x: [-100, 80, 250, 250],
                opacity: [0, 0.6, 0, 0]
              },
              transition: { duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.15, 0.35, 1] }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M10,30 Q100,40 200,10",
              stroke: "currentColor",
              strokeWidth: "1",
              strokeLinecap: "round",
              initial: { x: -100, opacity: 0 },
              animate: {
                x: [-100, 60, 200, 200],
                opacity: [0, 0.5, 0, 0]
              },
              transition: { duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.08, 0.25, 1] }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "text-mulberry", opacity: "0.3", children: [
          /* @__PURE__ */ jsx("path", { d: "M-20,-20 Q40,50 80,120 T220,220", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M30,35 Q80,30 130,20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M100,150 Q160,150 190,120", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M60,85 Q40,110 20,130", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round" })
        ] }),
        /* @__PURE__ */ jsxs("g", { fill: "currentColor", className: "text-mulberry", children: [
          /* @__PURE__ */ jsx("g", { transform: "translate(130, 20) scale(1.2)", children: /* @__PURE__ */ jsxs(motion.g, { variants: flowerTremble, animate: "animate", children: [
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1.5", fill: "#F7F4EF" })
          ] }) }),
          /* @__PURE__ */ jsx("g", { transform: "translate(190, 120) scale(1)", children: /* @__PURE__ */ jsxs(motion.g, { variants: flowerTremble, animate: "animate", children: [
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1.5", fill: "#F7F4EF" })
          ] }) }),
          /* @__PURE__ */ jsx("g", { transform: "translate(20, 130) scale(0.9)", children: /* @__PURE__ */ jsxs(motion.g, { variants: flowerTremble, animate: "animate", children: [
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1.5", fill: "#F7F4EF" })
          ] }) }),
          /* @__PURE__ */ jsx("g", { transform: "translate(80, 120) scale(1.5)", children: /* @__PURE__ */ jsxs(motion.g, { variants: flowerTremble, animate: "animate", children: [
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1.5", fill: "#F7F4EF" })
          ] }) }),
          /* @__PURE__ */ jsx("g", { transform: "translate(40, 50) scale(1.3)", children: /* @__PURE__ */ jsxs(motion.g, { variants: flowerTremble, animate: "animate", children: [
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-4", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-2.3", cy: "3.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "-3.8", cy: "-1.2", r: "3.5", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "1.5", fill: "#F7F4EF" })
          ] }) }),
          /* @__PURE__ */ jsx(motion.circle, { variants: flowerTremble, animate: "animate", cx: "10", cy: "15", r: "2.5", opacity: "0.95", style: { transformOrigin: "10px 15px" } }),
          /* @__PURE__ */ jsx(motion.circle, { variants: flowerTremble, animate: "animate", cx: "60", cy: "33", r: "2", opacity: "0.95", style: { transformOrigin: "60px 33px" } }),
          /* @__PURE__ */ jsx(motion.circle, { variants: flowerTremble, animate: "animate", cx: "140", cy: "140", r: "2.5", opacity: "0.95", style: { transformOrigin: "140px 140px" } }),
          /* @__PURE__ */ jsx(motion.circle, { variants: flowerTremble, animate: "animate", cx: "100", cy: "25", r: "1.5", opacity: "0.95", style: { transformOrigin: "100px 25px" } }),
          /* @__PURE__ */ jsx(motion.circle, { variants: flowerTremble, animate: "animate", cx: "40", cy: "100", r: "2", opacity: "0.95", style: { transformOrigin: "40px 100px" } })
        ] })
      ]
    }
  );
}
function Blossom({ transform, delay }) {
  const petalTargets = [
    { cx: 0, cy: -4 },
    { cx: 3.8, cy: -1.2 },
    { cx: 2.3, cy: 3.2 },
    { cx: -2.3, cy: 3.2 },
    { cx: -3.8, cy: -1.2 }
  ];
  const petalVariants = {
    hidden: { cx: 0, cy: 0, r: 0, opacity: 0 },
    visible: (custom) => ({
      cx: custom.cx,
      cy: custom.cy,
      r: 3.5,
      opacity: 0.85,
      transition: {
        delay: delay + custom.i * 0.1,
        // Stagger petals
        duration: 1.2,
        type: "spring",
        bounce: 0.3
      }
    })
  };
  const centerVariants = {
    hidden: { r: 0, opacity: 0 },
    visible: {
      r: 1.5,
      opacity: 1,
      transition: {
        delay: delay + 0.4,
        duration: 0.8,
        type: "spring"
      }
    }
  };
  const groupVariants = {
    hidden: { rotate: -30, scale: 0.8 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        delay,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsx("g", { transform, children: /* @__PURE__ */ jsxs(motion.g, { variants: groupVariants, children: [
    petalTargets.map((target, i) => /* @__PURE__ */ jsx(
      motion.circle,
      {
        custom: { ...target, i },
        variants: petalVariants,
        fill: "currentColor"
      },
      i
    )),
    /* @__PURE__ */ jsx(motion.circle, { variants: centerVariants, cx: "0", cy: "0", fill: "#F7F4EF" })
  ] }) });
}
function Bud({
  cx,
  cy,
  r,
  delay,
  transformOrigin
}) {
  const budVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.95,
      transition: {
        delay,
        duration: 1.2,
        type: "spring",
        bounce: 0.4
      }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.circle,
    {
      variants: budVariants,
      cx,
      cy,
      r,
      fill: "currentColor",
      style: { transformOrigin }
    }
  );
}
function GrowingPlumBranch({ className }) {
  const branchVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: Math.max(0.5, 4.5 - delay), ease: "easeOut" },
        opacity: { delay, duration: 0.2 }
      }
    })
  };
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      viewBox: "0 0 200 200",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      style: { overflow: "visible" },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxs("g", { className: "text-mulberry", opacity: "0.6", children: [
          /* @__PURE__ */ jsx(motion.path, { custom: 0, variants: branchVariants, d: "M-10,-20 Q10,15 35,40 Q60,60 80,90 Q105,125 135,145 Q170,165 210,220", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          /* @__PURE__ */ jsx(motion.path, { custom: 0.8, variants: branchVariants, d: "M35,40 Q70,35 115,20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          /* @__PURE__ */ jsx(motion.path, { custom: 1.8, variants: branchVariants, d: "M80,90 Q95,130 105,175", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          /* @__PURE__ */ jsx(motion.path, { custom: 3.1, variants: branchVariants, d: "M135,145 Q165,140 195,125", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }),
          /* @__PURE__ */ jsx(motion.path, { custom: 1.3, variants: branchVariants, d: "M72.5,32.5 Q90,20 105,5", stroke: "currentColor", strokeWidth: "0.8", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "text-mulberry", children: [
          /* @__PURE__ */ jsx(Blossom, { delay: 0.8, transform: "translate(35, 40) scale(1.3)" }),
          /* @__PURE__ */ jsx(Blossom, { delay: 1.3, transform: "translate(72.5, 32.5) scale(1.1)" }),
          /* @__PURE__ */ jsx(Bud, { delay: 1.8, cx: 115, cy: 20, r: 2, transformOrigin: "115px 20px" }),
          /* @__PURE__ */ jsx(Bud, { delay: 1.8, cx: 105, cy: 5, r: 1.5, transformOrigin: "105px 5px" }),
          /* @__PURE__ */ jsx(Bud, { delay: 1.8, cx: 80, cy: 90, r: 2.5, transformOrigin: "80px 90px" }),
          /* @__PURE__ */ jsx(Blossom, { delay: 2.4, transform: "translate(94, 131) scale(1.2)" }),
          /* @__PURE__ */ jsx(Bud, { delay: 3, cx: 105, cy: 175, r: 2, transformOrigin: "105px 175px" }),
          /* @__PURE__ */ jsx(Blossom, { delay: 3.1, transform: "translate(135, 145) scale(1.4)" }),
          /* @__PURE__ */ jsx(Bud, { delay: 3.5, cx: 165, cy: 137.5, r: 2, transformOrigin: "165px 137.5px" }),
          /* @__PURE__ */ jsx(Blossom, { delay: 3.9, transform: "translate(195, 125) scale(1.1)" })
        ] })
      ]
    }
  );
}
function SEO({
  title,
  description = "We create SEO-powered websites that look professional, attract customers, stay visible on Google, and turn visitors into customers.",
  keywords,
  url = "https://winterplum.co",
  image = "https://winterplum.co/og-image.png",
  type = "website",
  schema,
  noindex
}) {
  const siteTitle = title === "Home" ? "Winter Plum & Co | Premium Web Design Studio" : `${title} | Winter Plum & Co`;
  const canonicalUrl = url.replace("/#", "");
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: siteTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    noindex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: siteTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: image }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: siteTitle }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: image }),
    /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
    /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/favicon.png" }),
    schema && schema.map((item, index) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(item) }, index))
  ] });
}
const ChineseCloud1 = ({ x, y, scale = 1, opacity = 1, delay = 0, flip = false, blur = 0 }) => /* @__PURE__ */ jsx("g", { transform: `translate(${x}, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`, style: { filter: blur > 0 ? `blur(${blur}px)` : "none" }, children: /* @__PURE__ */ jsxs(
  motion.g,
  {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity,
      y: [0, -10, 0]
    },
    transition: {
      x: { duration: 0.8, ease: "easeOut", delay },
      opacity: { duration: 0.8, ease: "easeOut", delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
    },
    children: [
      /* @__PURE__ */ jsx("path", { d: "M -100,20 L 100,20 C 130,20 140,-10 110,-20 C 100,-23 90,-20 80,-15 C 80,-50 20,-60 -10,-30 C -20,-50 -60,-50 -80,-20 C -110,-10 -120,20 -100,20 Z", fill: "#f7f4ef", stroke: "#a3b1a9", strokeWidth: "6", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M 110,-20 C 90,-27 70,-15 70,0 C 70,10 80,15 90,15 C 100,15 105,10 105,5 C 105,0 100,-5 95,-5", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M -10,-30 C 10,-10 0,10 -20,15 C -30,17 -40,10 -40,0 C -40,-10 -30,-15 -20,-15", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M -80,-20 C -60,-10 -50,0 -60,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" })
    ]
  }
) });
const ChineseCloud2 = ({ x, y, scale = 1, opacity = 1, delay = 0, flip = false, blur = 0 }) => /* @__PURE__ */ jsx("g", { transform: `translate(${x}, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`, style: { filter: blur > 0 ? `blur(${blur}px)` : "none" }, children: /* @__PURE__ */ jsxs(
  motion.g,
  {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity,
      y: [0, -10, 0]
    },
    transition: {
      x: { duration: 0.8, ease: "easeOut", delay },
      opacity: { duration: 0.8, ease: "easeOut", delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
    },
    children: [
      /* @__PURE__ */ jsx("path", { d: "M -60,15 L 60,15 C 80,15 90,-5 70,-15 C 60,-20 50,-15 40,-10 C 30,-35 -10,-40 -30,-20 C -40,-30 -70,-25 -80,-10 C -100,-5 -90,15 -60,15 Z", fill: "#f7f4ef", stroke: "#a3b1a9", strokeWidth: "6", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M 70,-15 C 50,-20 40,-5 40,5 C 40,10 50,12 55,8", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M -30,-20 C -10,-10 -15,5 -30,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M -80,-10 C -65,-5 -60,5 -70,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" })
    ]
  }
) });
const MovingCloud1 = ({ y, scale = 1, opacity = 1, duration = 60, delay = 0, flip = false, blur = 0 }) => /* @__PURE__ */ jsx(
  motion.g,
  {
    initial: { x: -800 },
    animate: { x: 4800 },
    transition: { duration, repeat: Infinity, ease: "linear", delay },
    style: { filter: blur > 0 ? `blur(${blur}px)` : "none" },
    children: /* @__PURE__ */ jsx("g", { transform: `translate(0, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`, children: /* @__PURE__ */ jsxs(
      motion.g,
      {
        initial: { opacity: 0 },
        animate: { opacity: [0, opacity, opacity, 0] },
        transition: { duration, repeat: Infinity, ease: "linear", delay, times: [0, 0.05, 0.95, 1] },
        children: [
          /* @__PURE__ */ jsx("path", { d: "M -100,20 L 100,20 C 130,20 140,-10 110,-20 C 100,-23 90,-20 80,-15 C 80,-50 20,-60 -10,-30 C -20,-50 -60,-50 -80,-20 C -110,-10 -120,20 -100,20 Z", fill: "#f7f4ef", stroke: "#a3b1a9", strokeWidth: "6", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M 110,-20 C 90,-27 70,-15 70,0 C 70,10 80,15 90,15 C 100,15 105,10 105,5 C 105,0 100,-5 95,-5", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M -10,-30 C 10,-10 0,10 -20,15 C -30,17 -40,10 -40,0 C -40,-10 -30,-15 -20,-15", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M -80,-20 C -60,-10 -50,0 -60,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" })
        ]
      }
    ) })
  }
);
const MovingCloud2 = ({ y, scale = 1, opacity = 1, duration = 60, delay = 0, flip = false, blur = 0 }) => /* @__PURE__ */ jsx(
  motion.g,
  {
    initial: { x: -800 },
    animate: { x: 4800 },
    transition: { duration, repeat: Infinity, ease: "linear", delay },
    style: { filter: blur > 0 ? `blur(${blur}px)` : "none" },
    children: /* @__PURE__ */ jsx("g", { transform: `translate(0, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`, children: /* @__PURE__ */ jsxs(
      motion.g,
      {
        initial: { opacity: 0 },
        animate: { opacity: [0, opacity, opacity, 0] },
        transition: { duration, repeat: Infinity, ease: "linear", delay, times: [0, 0.05, 0.95, 1] },
        children: [
          /* @__PURE__ */ jsx("path", { d: "M -60,15 L 60,15 C 80,15 90,-5 70,-15 C 60,-20 50,-15 40,-10 C 30,-35 -10,-40 -30,-20 C -40,-30 -70,-25 -80,-10 C -100,-5 -90,15 -60,15 Z", fill: "#f7f4ef", stroke: "#a3b1a9", strokeWidth: "6", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M 70,-15 C 50,-20 40,-5 40,5 C 40,10 50,12 55,8", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M -30,-20 C -10,-10 -15,5 -30,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M -80,-10 C -65,-5 -60,5 -70,10", fill: "none", stroke: "#a3b1a9", strokeWidth: "6", strokeLinecap: "round" })
        ]
      }
    ) })
  }
);
function MountainSunrise({ className = "" }) {
  return /* @__PURE__ */ jsx("div", { className: `absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`, children: /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 4000 700",
      className: "w-full h-full object-cover object-bottom",
      preserveAspectRatio: "xMidYMax slice",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "fog", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#f7f4ef", stopOpacity: "0" }),
            /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#f7f4ef", stopOpacity: "0.8" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#f7f4ef", stopOpacity: "1" })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: "sunGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#f2b5bc", stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#f2d5d9", stopOpacity: "0.4" })
          ] }),
          /* @__PURE__ */ jsxs("radialGradient", { id: "sunGlow", cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#f2b5bc", stopOpacity: "0.6" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#f2b5bc", stopOpacity: "0" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          motion.circle,
          {
            cx: "2000",
            cy: "200",
            r: "300",
            fill: "url(#sunGlow)",
            initial: { cy: 500, opacity: 0 },
            animate: { cy: 200, opacity: 1 },
            transition: { duration: 2.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.circle,
          {
            cx: "2000",
            cy: "200",
            r: "140",
            fill: "url(#sunGradient)",
            initial: { cy: 500, opacity: 0 },
            animate: { cy: 200, opacity: 1 },
            transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.g,
          {
            initial: { y: 450, opacity: 0 },
            animate: { y: 300, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut", delay: 0.1 },
            children: [
              /* @__PURE__ */ jsx("path", { d: "M-1000,700 L840,700 L1240,500 L1490,450 L1740,520 L1940,420 L2190,500 L2490,450 L3160,700 L5000,700 Z", className: "fill-cream" }),
              /* @__PURE__ */ jsx("path", { d: "M-1000,700 L840,700 L1240,500 L1490,450 L1740,520 L1940,420 L2190,500 L2490,450 L3160,700 L5000,700 Z", className: "fill-sage/20" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.g,
          {
            initial: { y: 450, opacity: 0 },
            animate: { y: 300, opacity: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsx("path", { d: "M-1000,700 L840,700 L1290,550 L1320,560 L1360,450 L1400,470 L1460,320 L1500,350 L1560,250 L1600,280 L1630,290 L1770,120 L1780,70 L1800,20 L1920,0 Q2000,-30 2080,0 L2110,80 L2160,220 L2220,320 L2300,450 L2420,550 L2590,630 L3160,700 L5000,700 Z", className: "fill-cream" }),
              /* @__PURE__ */ jsx("path", { d: "M-1000,700 L840,700 L1290,550 L1320,560 L1360,450 L1400,470 L1460,320 L1500,350 L1560,250 L1600,280 L1630,290 L1770,120 L1780,70 L1800,20 L1920,0 Q2000,-30 2080,0 L2110,80 L2160,220 L2220,320 L2300,450 L2420,550 L2590,630 L3160,700 L5000,700 Z", className: "fill-sage/40" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 1200, y: 550, scale: 1.2, opacity: 0.8, delay: 0.5 }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 1400, y: 600, scale: 1.5, opacity: 0.7, delay: 0.7 }),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 1600, y: 520, scale: 0.9, opacity: 0.6, delay: 0.9, flip: true }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 1800, y: 620, scale: 1.3, opacity: 0.8, delay: 1.1 }),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 2100, y: 580, scale: 1.4, opacity: 0.9, delay: 0.6 }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 2300, y: 500, scale: 1.1, opacity: 0.6, delay: 0.8, flip: true }),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 2500, y: 630, scale: 1.6, opacity: 0.8, delay: 1 }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 2800, y: 570, scale: 1.2, opacity: 0.7, delay: 1.2 }),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 1500, y: 200, scale: 1.4, opacity: 0.5, delay: 1.3 }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 1900, y: 100, scale: 1.1, opacity: 0.4, delay: 1.5, flip: true }),
        /* @__PURE__ */ jsx(ChineseCloud1, { x: 2300, y: 150, scale: 1.3, opacity: 0.5, delay: 1.4 }),
        /* @__PURE__ */ jsx(ChineseCloud2, { x: 2700, y: 250, scale: 1.5, opacity: 0.6, delay: 1.6 }),
        /* @__PURE__ */ jsx(MovingCloud1, { y: 150, scale: 1.8, opacity: 0.4, duration: 120, delay: 0 }),
        /* @__PURE__ */ jsx(MovingCloud2, { y: 250, scale: 1.2, opacity: 0.5, duration: 90, delay: 15, flip: true }),
        /* @__PURE__ */ jsx(MovingCloud1, { y: 450, scale: 2.5, opacity: 0.3, duration: 150, delay: 30 }),
        /* @__PURE__ */ jsx(MovingCloud2, { y: 350, scale: 1.5, opacity: 0.6, duration: 100, delay: 45 }),
        /* @__PURE__ */ jsx(MovingCloud1, { y: 100, scale: 1, opacity: 0.5, duration: 80, delay: 60, flip: true }),
        /* @__PURE__ */ jsx(MovingCloud2, { y: 550, scale: 2, opacity: 0.4, duration: 140, delay: 10 }),
        /* @__PURE__ */ jsx(MovingCloud1, { y: 200, scale: 1.4, opacity: 0.6, duration: 110, delay: 75 }),
        /* @__PURE__ */ jsx(MovingCloud2, { y: 400, scale: 1.8, opacity: 0.3, duration: 130, delay: 25, flip: true }),
        /* @__PURE__ */ jsx("rect", { x: "-1000", y: "400", width: "6000", height: "300", fill: "url(#fog)" })
      ]
    }
  ) });
}
function AnimatedPagoda({ className = "" }) {
  const buildUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
        // smooth ease out
      }
    })
  };
  const bloom = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.15,
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    })
  };
  const mulberry = "#8c5a65";
  const mulberryDark = "#6b414a";
  const sage = "#a3b89f";
  const cream = "#fcf6ee";
  const ink = "#302928";
  const blush = "#f4d8db";
  const blushLight = "#fcebed";
  return /* @__PURE__ */ jsx("div", { className: `w-full h-full flex items-center justify-center ${className}`, children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 500", className: "w-full h-full drop-shadow-xl", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxs(motion.g, { custom: 0, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "460", rx: "140", ry: "25", fill: sage, opacity: "0.3" }),
      /* @__PURE__ */ jsx("ellipse", { cx: "200", cy: "460", rx: "100", ry: "15", fill: sage, opacity: "0.4" }),
      /* @__PURE__ */ jsx("path", { d: "M 80 450 Q 90 435 100 450 Q 90 460 80 450 Z", fill: mulberryDark, opacity: "0.8" }),
      /* @__PURE__ */ jsx("path", { d: "M 300 460 Q 315 445 330 460 Q 315 470 300 460 Z", fill: mulberryDark, opacity: "0.8" }),
      /* @__PURE__ */ jsx("path", { d: "M 320 455 Q 330 445 340 455 Q 330 460 320 455 Z", fill: mulberry, opacity: "0.9" }),
      /* @__PURE__ */ jsxs(
        motion.g,
        {
          animate: { rotate: [0, 2, 0, -1.5, 0] },
          transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          children: [
            /* @__PURE__ */ jsx("circle", { cx: "90", cy: "450", r: "120", fill: "transparent", pointerEvents: "none" }),
            /* @__PURE__ */ jsxs("g", { transform: "translate(90, 450) scale(1.35) translate(-90, -450)", children: [
              /* @__PURE__ */ jsx("path", { d: "M 90 450 Q 80 430 85 410 Q 90 390 75 380", fill: "none", stroke: ink, strokeWidth: "6", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M 85 420 Q 60 415 50 410", fill: "none", stroke: ink, strokeWidth: "4", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M 87 400 Q 110 395 120 385", fill: "none", stroke: ink, strokeWidth: "3", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M 80 390 Q 65 380 55 375", fill: "none", stroke: ink, strokeWidth: "3", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("circle", { cx: "50", cy: "410", r: "15", fill: sage, opacity: "0.9" }),
              /* @__PURE__ */ jsx("circle", { cx: "40", cy: "405", r: "12", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "60", cy: "405", r: "10", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "120", cy: "385", r: "16", fill: sage, opacity: "0.9" }),
              /* @__PURE__ */ jsx("circle", { cx: "110", cy: "375", r: "12", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "130", cy: "380", r: "10", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "55", cy: "375", r: "14", fill: sage, opacity: "0.9" }),
              /* @__PURE__ */ jsx("circle", { cx: "45", cy: "370", r: "10", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "75", cy: "380", r: "18", fill: sage, opacity: "0.9" }),
              /* @__PURE__ */ jsx("circle", { cx: "85", cy: "370", r: "14", fill: sage }),
              /* @__PURE__ */ jsx("circle", { cx: "65", cy: "365", r: "12", fill: sage }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "45", cy: "410", r: "3.5", fill: blush, custom: 0, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "55", cy: "405", r: "4.5", fill: blushLight, custom: 1, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "38", cy: "400", r: "3", fill: blush, custom: 2, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "115", cy: "385", r: "4.5", fill: blushLight, custom: 3, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "125", cy: "380", r: "3.5", fill: blush, custom: 4, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "110", cy: "372", r: "3", fill: blushLight, custom: 5, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "75", cy: "380", r: "4.5", fill: blush, custom: 6, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "85", cy: "375", r: "3.5", fill: blushLight, custom: 7, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "65", cy: "370", r: "4.5", fill: blush, custom: 8, variants: bloom }),
              /* @__PURE__ */ jsx(motion.circle, { cx: "50", cy: "375", r: "3.5", fill: blushLight, custom: 9, variants: bloom })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { custom: 1, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("polygon", { points: "110,440 290,440 270,410 130,410", fill: mulberryDark }),
      /* @__PURE__ */ jsx("rect", { x: "170", y: "410", width: "60", height: "30", fill: cream }),
      /* @__PURE__ */ jsx("rect", { x: "175", y: "420", width: "50", height: "10", fill: "#efe6db" }),
      /* @__PURE__ */ jsx("rect", { x: "180", y: "430", width: "40", height: "10", fill: "#e5d9c5" })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { custom: 2, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("rect", { x: "145", y: "340", width: "110", height: "70", fill: cream }),
      /* @__PURE__ */ jsx("rect", { x: "145", y: "340", width: "12", height: "70", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "243", y: "340", width: "12", height: "70", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "180", y: "360", width: "40", height: "50", fill: mulberryDark }),
      /* @__PURE__ */ jsx("rect", { x: "185", y: "365", width: "12", height: "45", fill: ink, opacity: "0.5" }),
      /* @__PURE__ */ jsx("rect", { x: "203", y: "365", width: "12", height: "45", fill: ink, opacity: "0.5" }),
      /* @__PURE__ */ jsx("path", { d: "M 90 350 Q 145 320 145 310 L 255 310 Q 255 320 310 350 Q 280 340 255 340 L 145 340 Q 120 340 90 350 Z", fill: mulberryDark })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { custom: 3, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("rect", { x: "155", y: "250", width: "90", height: "60", fill: cream }),
      /* @__PURE__ */ jsx("rect", { x: "155", y: "250", width: "10", height: "60", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "235", y: "250", width: "10", height: "60", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "175", y: "265", width: "20", height: "30", fill: mulberryDark }),
      /* @__PURE__ */ jsx("rect", { x: "205", y: "265", width: "20", height: "30", fill: mulberryDark }),
      /* @__PURE__ */ jsx("path", { d: "M 105 260 Q 155 230 155 220 L 245 220 Q 245 230 295 260 Q 265 250 245 250 L 155 250 Q 135 250 105 260 Z", fill: mulberryDark })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { custom: 4, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("rect", { x: "165", y: "170", width: "70", height: "50", fill: cream }),
      /* @__PURE__ */ jsx("rect", { x: "165", y: "170", width: "8", height: "50", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "227", y: "170", width: "8", height: "50", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "185", y: "180", width: "30", height: "25", fill: mulberryDark }),
      /* @__PURE__ */ jsx("rect", { x: "198", y: "180", width: "4", height: "25", fill: mulberry }),
      /* @__PURE__ */ jsx("path", { d: "M 120 180 Q 165 150 165 140 L 235 140 Q 235 150 280 180 Q 250 170 235 170 L 165 170 Q 150 170 120 180 Z", fill: mulberryDark })
    ] }),
    /* @__PURE__ */ jsxs(motion.g, { custom: 5, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: buildUp, children: [
      /* @__PURE__ */ jsx("path", { d: "M 185 140 L 215 140 L 210 120 L 190 120 Z", fill: mulberry }),
      /* @__PURE__ */ jsx("rect", { x: "197", y: "40", width: "6", height: "80", fill: mulberryDark }),
      /* @__PURE__ */ jsx("rect", { x: "188", y: "100", width: "24", height: "4", fill: mulberry, rx: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "190", y: "85", width: "20", height: "4", fill: mulberry, rx: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "192", y: "70", width: "16", height: "4", fill: mulberry, rx: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "194", y: "55", width: "12", height: "4", fill: mulberry, rx: "2" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "35", r: "6", fill: mulberryDark }),
      /* @__PURE__ */ jsx("path", { d: "M 200 29 L 200 15", stroke: mulberryDark, strokeWidth: "2", strokeLinecap: "round" })
    ] })
  ] }) });
}
function Home() {
  const { scrollY } = useScroll();
  const accumulatedRotation = useMotionValue(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== void 0 && latest > previous) {
      const diff = latest - previous;
      accumulatedRotation.set(accumulatedRotation.get() + diff * 0.72);
    }
  });
  const logoRotate = useSpring(accumulatedRotation, {
    damping: 40,
    stiffness: 50,
    mass: 2
  });
  const [hoveredCard, setHoveredCard] = useState(1);
  const mouseX = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const mouseXPos = e.clientX - rect.left;
    const xPct = mouseXPos / width - 0.5;
    mouseX.set(xPct);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    setHoveredCard(1);
  };
  const packages = [
    {
      title: "Basic",
      subtitle: "Clean, foundational design.",
      features: [
        "3 pages",
        "Clean, basic design with a modern layout",
        "Mobile Optimization",
        "Contact setup",
        "Basic SEO optimization",
        "Image setups",
        "Launch",
        "2 rounds of revision"
      ],
      buttonText: "Select Basic",
      transform: "translateZ(30px)",
      badge: null
    },
    {
      title: "Standard",
      subtitle: "Conversion focused growth.",
      features: [
        "Everything from Basic",
        "4-7 pages",
        "Advanced Mobile Optimization",
        "Conversion focused layout",
        "SEO Optimization",
        "Copywriting",
        "Full setup and Launch support",
        "1 week of post launch support",
        "Guided handoff"
      ],
      buttonText: "Select Standard",
      transform: "translateZ(60px)",
      badge: "Most Popular"
    },
    {
      title: "Premium",
      subtitle: "Fully custom digital experience.",
      features: [
        "Everything from Standard & Basic",
        "8+ pages",
        "Fully custom design",
        "High converting design with advanced SEO",
        "Premium visual design",
        "Priority support"
      ],
      buttonText: "Select Premium",
      transform: "translateZ(30px)",
      badge: null
    }
  ];
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Home",
        description: "Winter Plum & Co is a premium web design studio based in San Jose, CA. We create custom, conversion-focused websites for small businesses and growing brands in Silicon Valley and beyond.",
        url: "https://winterplum.co",
        keywords: "web design San Jose, custom website design Silicon Valley, conversion-focused web design, premium web design studio, small business websites, modern digital agency",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Winter Plum & Co | Premium Web Design Studio",
            "description": "Custom web design and digital strategy for growing brands.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://winterplum.co"
                }
              ]
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-32 md:py-48 overflow-hidden flex items-center justify-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-blush/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/20 rounded-full blur-3xl mix-blend-multiply opacity-70" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -50, y: -50 },
          animate: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 1.5, ease: "easeOut" },
          className: "absolute top-0 left-0 w-64 md:w-96 text-mulberry/30 pointer-events-none -z-10",
          children: /* @__PURE__ */ jsx(PlumBranch, { className: "w-full h-full" })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50, y: 50 },
          animate: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 1.5, ease: "easeOut" },
          className: "absolute bottom-0 right-0 w-64 md:w-96 text-mulberry/30 pointer-events-none -z-10 rotate-180",
          children: /* @__PURE__ */ jsx(PlumBranch, { className: "w-full h-full" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-4xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[120%] md:w-[100%] aspect-square pointer-events-none -z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 0.25, scale: 1 },
            transition: { duration: 1.5, ease: "easeOut" },
            style: { rotate: logoRotate },
            className: "w-full h-full",
            children: /* @__PURE__ */ jsx(Logo, { className: "w-full h-full text-mulberry" })
          }
        ) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mulberry/5 border border-mulberry/10 text-mulberry text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-sm",
            children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-mulberry animate-pulse" }),
              "Digital Marketing & Design"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
            className: "text-5xl md:text-7xl lg:text-8xl font-serif text-ink tracking-tight leading-[1.1] mb-8",
            style: { textShadow: "0 4px 24px rgba(247,244,239,0.9), 0 0 10px rgba(247,244,239,0.8)" },
            children: [
              "We Build, ",
              /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("span", { className: "text-mulberry font-medium", children: "You Blossom" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            className: "text-lg md:text-xl text-ink/80 max-w-2xl font-light leading-relaxed mb-12",
            style: { textShadow: "0 2px 10px rgba(247,244,239,0.9)" },
            children: [
              "We build memorable, high-converting websites for growing brands.",
              /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
              "Built to perform. So your brand can blossom in any season."
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            className: "flex flex-col sm:flex-row items-center gap-6",
            children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/contact",
                  className: "px-8 py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2",
                  children: [
                    "Get Started ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/services",
                  className: "px-8 py-4 rounded-full bg-transparent border border-ink/20 text-ink text-sm uppercase tracking-widest hover:border-ink hover:bg-ink/5 transition-all",
                  children: "View Our Work"
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "px-6 py-32 bg-cream-dark/30 relative overflow-hidden",
        style: { perspective: "2000px" },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 md:w-96 text-mulberry pointer-events-none z-0", children: /* @__PURE__ */ jsx(GrowingPlumBranch, { className: "w-full h-full" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 md:w-96 text-mulberry pointer-events-none z-0 scale-x-[-1]", children: /* @__PURE__ */ jsx(GrowingPlumBranch, { className: "w-full h-full" }) }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-sm uppercase tracking-widest text-sage font-medium mb-4", children: "Our Packages" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif text-ink leading-tight", children: [
                "Tailored to make YOU ",
                /* @__PURE__ */ jsx("span", { className: "text-mulberry font-bold", children: "blossom" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { rotateY, transformStyle: "preserve-3d" },
                className: "flex flex-col lg:flex-row gap-8 items-stretch justify-center",
                children: packages.map((pkg, index) => {
                  const isActive = hoveredCard === index;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      onMouseEnter: () => setHoveredCard(index),
                      className: `flex-1 p-8 lg:p-10 rounded-[2.5rem] flex flex-col relative transition-colors duration-500 ${isActive ? "bg-mulberry shadow-2xl border-mulberry-light/20 border z-10" : "bg-white/80 backdrop-blur-xl shadow-xl border-white/40 border z-0"} ${index === 1 ? "lg:-mt-8 lg:mb-8" : ""}`,
                      style: { transform: pkg.transform },
                      children: [
                        pkg.badge && /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap transition-colors duration-500 ${isActive ? "bg-blush text-mulberry" : "bg-mulberry text-cream"}`, children: pkg.badge }),
                        /* @__PURE__ */ jsx("h3", { className: `text-2xl font-serif mb-2 transition-colors duration-500 ${isActive ? "text-cream" : "text-ink"}`, children: pkg.title }),
                        /* @__PURE__ */ jsx("p", { className: `text-sm mb-8 h-10 transition-colors duration-500 ${isActive ? "text-cream/70" : "text-ink/60"}`, children: pkg.subtitle }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-4 flex-1 mb-8", children: pkg.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: `flex items-start gap-3 text-sm transition-colors duration-500 ${isActive ? "text-cream/90" : "text-ink/80"}`, children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: `shrink-0 mt-0.5 transition-colors duration-500 ${isActive ? "text-blush" : "text-sage"}` }),
                          /* @__PURE__ */ jsx("span", { children: feature })
                        ] }, i)) }),
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/contact",
                            className: `w-full py-4 rounded-full text-center text-sm uppercase tracking-widest transition-all duration-500 ${isActive ? "bg-cream text-mulberry hover:bg-white shadow-lg" : "border border-ink/20 text-ink hover:bg-ink/5"}`,
                            children: pkg.buttonText
                          }
                        )
                      ]
                    },
                    index
                  );
                })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative h-96 -my-48 z-20 pointer-events-none overflow-hidden bg-gradient-to-b from-transparent via-cream/40 to-transparent", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 4000 600", className: "w-full h-full", preserveAspectRatio: "xMidYMid slice", children: [
      /* @__PURE__ */ jsx(MovingCloud1, { y: 150, scale: 2.5, opacity: 0.6, duration: 40, blur: 4 }),
      /* @__PURE__ */ jsx(MovingCloud2, { y: 300, scale: 3.5, opacity: 0.5, duration: 50, delay: 2.5, blur: 2 }),
      /* @__PURE__ */ jsx(MovingCloud1, { y: 450, scale: 2.2, opacity: 0.7, duration: 35, delay: 5, flip: true, blur: 3 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 400, y: 200, scale: 1.8, opacity: 0.6, delay: 0.2, blur: 1 }),
      /* @__PURE__ */ jsx(ChineseCloud2, { x: 1200, y: 400, scale: 2, opacity: 0.5, delay: 0.5, flip: true, blur: 2 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 2200, y: 150, scale: 1.6, opacity: 0.7, delay: 0.7, blur: 1 }),
      /* @__PURE__ */ jsx(ChineseCloud2, { x: 3200, y: 300, scale: 2.2, opacity: 0.6, delay: 1, blur: 3 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 800, y: 500, scale: 1.8, opacity: 0.5, delay: 1.2, blur: 2 }),
      /* @__PURE__ */ jsx(ChineseCloud2, { x: 1800, y: 200, scale: 1.6, opacity: 0.6, delay: 1.5, flip: true, blur: 1 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 2800, y: 450, scale: 2, opacity: 0.5, delay: 1.7, blur: 2 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 1500, y: 300, scale: 1.9, opacity: 0.6, delay: 2, blur: 2 }),
      /* @__PURE__ */ jsx(ChineseCloud2, { x: 2500, y: 200, scale: 1.7, opacity: 0.5, delay: 2.2, flip: true, blur: 1 }),
      /* @__PURE__ */ jsx(ChineseCloud1, { x: 3600, y: 400, scale: 2.1, opacity: 0.6, delay: 2.5, blur: 3 })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-32 relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "lg:pl-12 xl:pl-16",
          children: [
            /* @__PURE__ */ jsx("span", { className: "block text-sm uppercase tracking-widest text-sage font-medium mb-4", children: "Our Philosophy" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif text-ink leading-tight mb-8", children: [
              "Built to grow, ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-mulberry", children: "Designed with Meaning" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-ink/70 font-light leading-relaxed mb-8 text-lg", children: "We believe that your website should not only look good today. It should hold up tomorrow, next season, and years from now. We design with longevity in mind- so your brand evolves alongside you." }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: [
              "Timeless design over trends",
              "Structure that scales with you",
              "Strategy behind every detail",
              "Built for long-term growth"
            ].map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1 text-sage", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 20 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-ink/80", children: item })
            ] }, i)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "relative",
          children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-[2rem] overflow-hidden relative bg-cream-dark/30 flex items-center justify-center p-8 border border-mulberry/10", children: /* @__PURE__ */ jsx(AnimatedPagoda, {}) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-16 md:py-20 bg-mulberry text-cream relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none z-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-96 h-96 bg-mulberry-light rounded-full blur-3xl opacity-20" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-96 h-96 bg-ink rounded-full blur-3xl opacity-20" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] pointer-events-none z-0", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, rotate: -10 },
          whileInView: { opacity: 0.15, scale: 1, rotate: 0 },
          viewport: { once: true },
          transition: { duration: 1.5, ease: "easeOut" },
          className: "w-full h-full",
          children: /* @__PURE__ */ jsx(Logo, { className: "w-full h-full text-cream" })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-16", children: [
          /* @__PURE__ */ jsx("span", { className: "block text-sm uppercase tracking-widest text-blush font-medium mb-4", children: "What We Do" }),
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-serif leading-tight", children: [
            "Crafting Digital ",
            /* @__PURE__ */ jsx("span", { className: "italic text-blush", children: "Experiences" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          {
            title: "Website Design",
            desc: "Sleek, responsive, and conversion-focused websites built for the modern web.",
            icon: /* @__PURE__ */ jsx(MonitorSmartphone, { size: 32, strokeWidth: 1.5 })
          },
          {
            title: "SEO Optimization",
            desc: "Strategic visibility to ensure your brand is found by the right audience.",
            icon: /* @__PURE__ */ jsx(Star, { size: 32, strokeWidth: 1.5 })
          },
          {
            title: "Brand Strategy",
            desc: "Cohesive visual storytelling that aligns with your core philosophy.",
            icon: /* @__PURE__ */ jsx(CheckCircle2, { size: 32, strokeWidth: 1.5 })
          }
        ].map((service, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.2 },
            className: "bg-mulberry-dark/30 border border-[#F7E7CE]/40 p-10 rounded-[2rem] hover:bg-mulberry-dark/50 hover:border-[#F7E7CE]/70 transition-all duration-500 group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-blush/10 flex items-center justify-center text-blush mb-8 group-hover:scale-110 transition-transform", children: service.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-serif mb-4", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-cream/70 font-light leading-relaxed mb-8", children: service.desc }),
              /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-blush hover:text-white transition-colors", children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "mt-20 pt-8 border-t border-cream/10 text-center text-sm text-cream/60", children: /* @__PURE__ */ jsxs("p", { children: [
          "We work with growing businesses across the Bay Area. Looking for ",
          /* @__PURE__ */ jsx(Link, { to: "/web-design-silicon-valley", className: "underline hover:text-cream transition-colors", children: "web design in the Silicon Valley" }),
          " or ",
          /* @__PURE__ */ jsx(Link, { to: "/web-design-san-jose", className: "underline hover:text-cream transition-colors", children: "San Jose" }),
          "? Learn more here."
        ] }) })
      ] })
    ] })
  ] });
}
function Services() {
  const [hoveredCard, setHoveredCard] = useState(1);
  const mouseX = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const mouseXPos = e.clientX - rect.left;
    const xPct = mouseXPos / width - 0.5;
    mouseX.set(xPct);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    setHoveredCard(1);
  };
  const packages = [
    {
      title: "Basic",
      subtitle: "Clean, foundational design.",
      features: [
        "3 pages",
        "Clean, basic design with a modern layout",
        "Mobile Optimization",
        "Contact setup",
        "Basic SEO optimization",
        "Image setups",
        "Launch",
        "2 rounds of revision"
      ],
      buttonText: "Select Basic",
      transform: "translateZ(30px)",
      badge: null
    },
    {
      title: "Standard",
      subtitle: "Conversion focused growth.",
      features: [
        "Everything from Basic",
        "4-7 pages",
        "Advanced Mobile Optimization",
        "Conversion focused layout",
        "SEO Optimization",
        "Copywriting",
        "Full setup and Launch support",
        "1 week of post launch support",
        "Guided handoff"
      ],
      buttonText: "Select Standard",
      transform: "translateZ(60px)",
      badge: "Most Popular"
    },
    {
      title: "Premium",
      subtitle: "Fully custom digital experience.",
      features: [
        "Everything from Standard & Basic",
        "8+ pages",
        "Fully custom design",
        "High converting design with advanced SEO",
        "Premium visual design",
        "Priority support"
      ],
      buttonText: "Select Premium",
      transform: "translateZ(30px)",
      badge: null
    }
  ];
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-24 pb-20", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Services & Pricing",
        description: "Explore our custom web design and digital marketing services. We offer tailored packages, monthly support, and one-off upgrades for growing brands in San Jose and Silicon Valley.",
        url: "https://winterplum.co/services",
        keywords: "web design services, website packages, monthly web maintenance, SEO services San Jose, custom web development, digital marketing packages",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Design & Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Winter Plum & Co"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Jose"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basic Web Design Package"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standard Web Design Package"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium Web Design Package"
                  }
                }
              ]
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "px-6 pt-10 pb-10 text-center relative overflow-hidden min-h-[300px] flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx(MountainSunrise, {}),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10" }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "max-w-3xl mx-auto relative z-10 -mt-10",
          children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-serif text-ink leading-tight mb-6", children: [
              "Our ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-mulberry", children: "Services" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-ink/70 font-light leading-relaxed", children: "We blend modern design with meaning and functionality to create a digital experience that resonates, and converts." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "px-6 pt-0 pb-12 relative overflow-visible",
        style: { perspective: "2000px" },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-48 left-0 w-64 md:w-96 text-mulberry pointer-events-none z-0", children: /* @__PURE__ */ jsx(GrowingPlumBranch, { className: "w-full h-full overflow-visible" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-48 right-0 w-64 md:w-96 text-mulberry pointer-events-none z-0 scale-x-[-1]", children: /* @__PURE__ */ jsx(GrowingPlumBranch, { className: "w-full h-full overflow-visible" }) }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Web Design Packages" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                style: { rotateY, transformStyle: "preserve-3d" },
                className: "flex flex-col lg:flex-row gap-8 items-stretch justify-center",
                children: packages.map((pkg, index) => {
                  const isActive = hoveredCard === index;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      onMouseEnter: () => setHoveredCard(index),
                      className: `flex-1 p-8 lg:p-10 rounded-[2.5rem] flex flex-col relative transition-colors duration-500 border border-[#D4AF37]/50 ${isActive ? "bg-mulberry shadow-2xl border-[#D4AF37] z-10" : "bg-white/80 backdrop-blur-xl shadow-xl z-0"} ${index === 1 ? "lg:-mt-8 lg:mb-8" : ""}`,
                      style: { transform: pkg.transform },
                      children: [
                        pkg.badge && /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap transition-colors duration-500 ${isActive ? "bg-blush text-mulberry" : "bg-mulberry text-cream"}`, children: pkg.badge }),
                        /* @__PURE__ */ jsx("h4", { className: `text-2xl font-serif mb-2 transition-colors duration-500 ${isActive ? "text-cream" : "text-ink"}`, children: pkg.title }),
                        /* @__PURE__ */ jsx("p", { className: `text-sm mb-8 h-10 transition-colors duration-500 ${isActive ? "text-cream/70" : "text-ink/60"}`, children: pkg.subtitle }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-4 flex-1 mb-8", children: pkg.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: `flex items-start gap-3 text-sm transition-colors duration-500 ${isActive ? "text-cream/90" : "text-ink/80"}`, children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: `shrink-0 mt-0.5 transition-colors duration-500 ${isActive ? "text-blush" : "text-sage"}` }),
                          /* @__PURE__ */ jsx("span", { children: feature })
                        ] }, i)) }),
                        /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: "/contact",
                            className: `w-full py-4 rounded-full text-center text-sm uppercase tracking-widest transition-all duration-500 ${isActive ? "bg-cream text-mulberry hover:bg-white shadow-lg" : "border border-ink/20 text-ink hover:bg-ink/5"}`,
                            children: pkg.buttonText
                          }
                        )
                      ]
                    },
                    index
                  );
                })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "px-6 pt-8 pb-24 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-3xl font-serif text-ink mb-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "w-8 h-[1px] bg-mulberry" }),
              "Monthly Services"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-2xl font-serif text-ink group-hover:text-cream transition-colors duration-500", children: "Basic Care" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-mulberry group-hover:text-cream font-medium text-xl transition-colors duration-500", children: [
                    "$45",
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-ink/50 group-hover:text-cream/70 transition-colors duration-500", children: "/m" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Website & Domain maintenance" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Small edits" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Support" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-2xl font-serif text-ink group-hover:text-cream transition-colors duration-500", children: "Blossoming Plan" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-mulberry group-hover:text-cream font-medium text-xl transition-colors duration-500", children: [
                    "$80",
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-ink/50 group-hover:text-cream/70 transition-colors duration-500", children: "/m" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Everything in Basic" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "SEO Updates" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Content & Web updates" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-ink/80 group-hover:text-cream/90 transition-colors duration-500", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 18, className: "shrink-0 mt-0.5 text-sage group-hover:text-blush transition-colors duration-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Up to 1 new page created per month" })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-3xl font-serif text-ink mb-8 flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "w-8 h-[1px] bg-mulberry" }),
              "One Offs"
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "group block bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-ink/10 hover:bg-mulberry hover:border-mulberry hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 shadow-lg cursor-pointer", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1", children: "Content Upgrade" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light", children: "Refresh and optimize your existing copy." })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl", children: "$35" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1", children: "Visual Upgrade" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light", children: "Enhance your imagery and visual assets." })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl", children: "$50" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-center border-b border-ink/5 group-hover:border-cream/10 transition-colors duration-500 pb-6 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xl font-serif text-ink group-hover:text-cream transition-colors duration-500 mb-1", children: "New Page" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/60 group-hover:text-cream/70 transition-colors duration-500 font-light", children: "Design and development of an additional page." })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-mulberry group-hover:text-cream transition-colors duration-500 font-medium text-xl", children: "$150" })
              ] })
            ] }) })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-32 bg-mulberry text-cream text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] pointer-events-none z-0", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8, rotate: -10 },
          whileInView: { opacity: 0.2, scale: 1, rotate: 0 },
          viewport: { once: true },
          transition: { duration: 1.5, ease: "easeOut" },
          className: "w-full h-full",
          children: /* @__PURE__ */ jsx(Logo, { className: "w-full h-full text-cream" })
        }
      ) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "max-w-2xl mx-auto relative z-10",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-serif mb-6", children: "Ready to elevate your brand?" }),
            /* @__PURE__ */ jsx("p", { className: "text-cream/80 font-light mb-10 text-lg", children: "Let's collaborate to create a digital presence that truly reflects your vision and drives results." }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center gap-2 bg-cream text-mulberry px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors shadow-xl",
                children: [
                  "Start a Project ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    business: "",
    service: "",
    message: "",
    newsletterOptIn: true
  });
  const handleChange = (e) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbz8QS75pHh8u1om_mNHaRXZM59gWTo6xlbdLmgbuDD5CLYh-GYwXjqzx4_VaAtSYZ_p/exec";
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        // Using text/plain avoids CORS preflight issues with Google Apps Script
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData)
      });
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredContact: "email",
        business: "",
        service: "",
        message: "",
        newsletterOptIn: true
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-24 pb-12 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Contact Us",
        description: "Get in touch with Winter Plum & Co. Tell us about your web design or digital marketing project. We're ready to help your brand blossom in San Jose and beyond.",
        url: "https://winterplum.co/contact",
        keywords: "contact web designer, hire web design agency San Jose, digital marketing consultation, website project inquiry, Bay Area web design studio",
        schema: [
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Winter Plum & Co",
            "description": "Contact form and information for Winter Plum & Co web design studio.",
            "mainEntity": {
              "@type": "ProfessionalService",
              "name": "Winter Plum & Co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Jose",
                "addressRegion": "CA",
                "addressCountry": "US"
              }
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden", children: /* @__PURE__ */ jsx(MountainSunrise, {}) }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          className: "flex flex-col justify-center",
          children: [
            /* @__PURE__ */ jsx("span", { className: "block text-sm uppercase tracking-widest text-sage font-medium mb-4", children: "Get in Touch" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-serif text-ink leading-tight mb-8", children: [
              "Let's build your ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsxs("span", { className: "text-mulberry", children: [
                "Digital ",
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "legacy." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-ink/70 font-light leading-relaxed mb-12 max-w-md", children: "We work with brands that care about how they grow, not just how they look. Tell us where you're headed. We'll build the path to get you there." }),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-cream-dark flex items-center justify-center text-mulberry shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 20 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-sm uppercase tracking-widest text-ink/50 mb-1", children: "Email Us" }),
                /* @__PURE__ */ jsx("a", { href: "mailto:winterplum.co@gmail.com", className: "text-lg text-ink hover:text-mulberry transition-colors font-serif", children: "winterplum.co@gmail.com" })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "bg-white/60 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/40 relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-6 -right-6 w-24 h-24 bg-mulberry/10 rounded-full blur-xl" }),
            isSuccess ? /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center py-12 text-center space-y-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center text-sage", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 40 }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink", children: "Thank you!" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-ink/70 font-light", children: "We've received your message and will be in touch with you shortly." })
            ] }) : /* @__PURE__ */ jsxs("form", { className: "relative z-10 space-y-8", onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsx("input", { type: "hidden", name: "_subject", value: `New inquiry from ${formData.name || "Website"}` }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Full Name *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      required: true,
                      className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30",
                      placeholder: "Jane Doe"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Email Address *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                      required: true,
                      className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30",
                      placeholder: "jane@example.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Phone Number" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      value: formData.phone,
                      onChange: handleChange,
                      className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30",
                      placeholder: "(555) 123-4567"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "preferredContact", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Preferred Contact Method" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "preferredContact",
                      name: "preferredContact",
                      value: formData.preferredContact,
                      onChange: handleChange,
                      className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors appearance-none",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "email", children: "Email" }),
                        /* @__PURE__ */ jsx("option", { value: "phone", children: "Phone Call" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "business", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Business Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "business",
                    name: "business",
                    value: formData.business,
                    onChange: handleChange,
                    className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30",
                    placeholder: "Your Company LLC"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "service", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Service of Interest" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    id: "service",
                    name: "service",
                    value: formData.service,
                    onChange: handleChange,
                    className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors appearance-none",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select a service..." }),
                      /* @__PURE__ */ jsx("option", { value: "basic", children: "Basic Package" }),
                      /* @__PURE__ */ jsx("option", { value: "standard", children: "Standard Package" }),
                      /* @__PURE__ */ jsx("option", { value: "premium", children: "Premium Package" }),
                      /* @__PURE__ */ jsx("option", { value: "other", children: "Other / Not Sure" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "text-xs uppercase tracking-widest text-ink/60 font-medium", children: "Project Details *" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    rows: 4,
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-mulberry transition-colors placeholder:text-ink/30 resize-none",
                    placeholder: "Tell us about your goals, timeline, and vision..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "newsletterOptIn",
                    name: "newsletterOptIn",
                    type: "checkbox",
                    checked: formData.newsletterOptIn,
                    onChange: handleChange,
                    className: "w-4 h-4 rounded border-ink/30 text-mulberry focus:ring-mulberry bg-transparent"
                  }
                ) }),
                /* @__PURE__ */ jsx("label", { htmlFor: "newsletterOptIn", className: "text-sm text-ink/70 font-light leading-snug", children: "I'd like to receive occasional updates, design tips, and marketing insights from Winter Plum & Co." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "w-full py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2",
                  children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }),
                    "Sending..."
                  ] }) : "Send Inquiry"
                }
              )
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
function Brand() {
  const downloadPNG = () => {
    const downloadLink = document.createElement("a");
    downloadLink.download = "WinterPlum_Logo.png";
    downloadLink.href = "/logo.png";
    downloadLink.click();
  };
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Brand Assets",
        description: "Download Winter Plum & Co brand assets and logos.",
        url: "https://winterplum.co/brand"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3" }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "block text-sm uppercase tracking-widest text-sage font-medium mb-4", children: "Brand Kit" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-serif text-ink leading-tight", children: [
        "Download ",
        /* @__PURE__ */ jsx("span", { className: "italic text-mulberry", children: "Assets" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white/60 backdrop-blur-xl p-16 md:p-24 rounded-[3rem] shadow-2xl border border-white/40 mb-12 flex items-center justify-center", children: /* @__PURE__ */ jsx(Logo, { className: "w-64 h-64" }) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: downloadPNG,
        className: "flex items-center gap-3 px-8 py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsx(Download, { size: 18 }),
          "Download as PNG"
        ]
      }
    )
  ] });
}
function WebDesignSiliconValley() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);
  const siliconValleySchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Design",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Winter Plum & Co",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Silicon Valley",
          "addressRegion": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Silicon Valley"
      },
      "description": "Premium web design and development services for businesses in the Silicon Valley and the Bay Area."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Web Design Silicon Valley | Custom Websites",
        description: "Elevate your brand with premium web design in Silicon Valley. Winter Plum & Co builds custom, conversion-focused websites for growing Bay Area businesses. Expert Silicon Valley web designer.",
        keywords: "web design Silicon Valley, Silicon Valley web designer, custom websites Silicon Valley, Bay Area web design, SEO optimized web design, digital agency Silicon Valley, tech company web design",
        url: "https://winterplum.co/web-design-silicon-valley",
        schema: [
          ...siliconValleySchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://winterplum.co"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web Design Silicon Valley",
                "item": "https://winterplum.co/#/web-design-silicon-valley"
              }
            ]
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cream", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-full left-0 right-0",
        style: {
          height: "200vh",
          y: backgroundY,
          opacity: backgroundOpacity
        },
        children: /* @__PURE__ */ jsx(MountainSunrise, {})
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: "pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-24 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "inline-block mb-6 px-4 py-1.5 rounded-full border border-ink/10 bg-cream/50 backdrop-blur-sm text-sm uppercase tracking-widest text-ink/70",
            children: "Silicon Valley & The Bay Area"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "text-5xl md:text-7xl font-serif font-bold text-ink leading-tight mb-6",
            children: [
              "Web Design in the ",
              /* @__PURE__ */ jsx("span", { className: "text-mulberry", children: "Silicon Valley" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: "text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed",
            children: "We design high-converting, custom websites for ambitious brands across the Silicon Valley and the Bay Area."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12 text-lg text-ink/80 leading-relaxed", children: [
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Elevating Bay Area Brands Through Strategic Design" }),
              /* @__PURE__ */ jsx("p", { children: "The Silicon Valley is a global hub of innovation. In this competitive landscape, your digital presence must captivate and convert. We specialize in premium web design, blending modern aesthetics with rigorous technical SEO to ensure your site performs flawlessly." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Our Core Web Design Services" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Custom Website Design" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Clean, semantic, and highly optimized digital environments built from the ground up." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Strategic Redesigns" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Breathe new life into your brand with restructured content and a premium visual identity." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Conversion-Focused UX" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Meticulously mapped user journeys that guide visitors naturally toward taking action." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "SEO-Optimized Architecture" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Foundational technical SEO ensuring your site is fast, mobile-responsive, and easily found." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Why Choose Winter Plum & Co?" }),
              /* @__PURE__ */ jsx("p", { children: "We view ourselves as your digital partners. Our philosophy is rooted in intentionality—prioritizing clean, modern aesthetics and lightning-fast performance to ensure your business stands out in the crowded Bay Area market." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Our Streamlined Process" }),
              /* @__PURE__ */ jsxs("ol", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "01." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Discovery & Strategy" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Deep dive into your goals, audience, and competitive landscape." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "02." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Design & Prototyping" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Translating your brand identity into stunning, interactive visual concepts." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "03." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Development & SEO" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Writing clean, performant code with advanced technical SEO and flawless responsiveness." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "04." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Launch & Growth" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Rigorous testing, launch, and ongoing support for your thriving digital presence." })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Who We Work With" }),
              /* @__PURE__ */ jsx("p", { children: "We proudly partner with small businesses, creative professionals, and ambitious founders across the Silicon Valley and the Bay Area, translating your vision into a compelling online reality." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "mt-12 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none", children: /* @__PURE__ */ jsx(Logo, { className: "w-96 h-96 text-cream" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-4xl font-serif mb-6", children: "Ready to transform your digital presence?" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-cream/80 mb-10 max-w-2xl mx-auto", children: "Let's build a memorable, high-converting website that positions your brand for success. Contact us today to discuss your project." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "inline-block bg-cream text-ink px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream/90 transition-colors font-medium rounded-full",
                    children: "Start Your Project"
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function WebDesignSanJose() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);
  const sanJoseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Design",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Winter Plum & Co",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Jose",
          "addressRegion": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "San Jose"
      },
      "description": "Premium web design and development services for businesses in San Jose and the Bay Area."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Web Design San Jose | Custom Websites",
        description: "Elevate your brand with premium web design in San Jose. Winter Plum & Co builds custom, conversion-focused websites for growing Bay Area businesses. Expert San Jose web designer.",
        keywords: "web design San Jose, San Jose web designer, custom websites San Jose, Bay Area web design, SEO optimized web design, digital agency San Jose, website redesign San Jose",
        url: "https://winterplum.co/web-design-san-jose",
        schema: [
          ...sanJoseSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://winterplum.co"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Web Design San Jose",
                "item": "https://winterplum.co/#/web-design-san-jose"
              }
            ]
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cream", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-full left-0 right-0",
        style: {
          height: "200vh",
          y: backgroundY,
          opacity: backgroundOpacity
        },
        children: /* @__PURE__ */ jsx(MountainSunrise, {})
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: "pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-24 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "inline-block mb-6 px-4 py-1.5 rounded-full border border-ink/10 bg-cream/50 backdrop-blur-sm text-sm uppercase tracking-widest text-ink/70",
            children: "San Jose & The Bay Area"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "text-5xl md:text-7xl font-serif font-bold text-ink leading-tight mb-6",
            children: [
              "Web Design in ",
              /* @__PURE__ */ jsx("span", { className: "text-mulberry", children: "San Jose" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: "text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed",
            children: "We design high-converting, custom websites for ambitious brands across San Jose and the Bay Area."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12 text-lg text-ink/80 leading-relaxed", children: [
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Elevating Bay Area Brands Through Strategic Design" }),
              /* @__PURE__ */ jsx("p", { children: "San Jose is a global hub of innovation. In this competitive landscape, your digital presence must captivate and convert. We specialize in premium web design, blending modern aesthetics with rigorous technical SEO to ensure your site performs flawlessly." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Our Core Web Design Services" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Custom Website Design" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Clean, semantic, and highly optimized digital environments built from the ground up." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Strategic Redesigns" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Breathe new life into your brand with restructured content and a premium visual identity." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "Conversion-Focused UX" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Meticulously mapped user journeys that guide visitors naturally toward taking action." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/40 p-8 rounded-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-colors duration-500", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-3", children: "SEO-Optimized Architecture" }),
                  /* @__PURE__ */ jsx("p", { className: "text-base", children: "Foundational technical SEO ensuring your site is fast, mobile-responsive, and easily found." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Why Choose Winter Plum & Co?" }),
              /* @__PURE__ */ jsx("p", { children: "We view ourselves as your digital partners. Our philosophy is rooted in intentionality—prioritizing clean, modern aesthetics and lightning-fast performance to ensure your business stands out in the crowded Bay Area market." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Our Streamlined Process" }),
              /* @__PURE__ */ jsxs("ol", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "01." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Discovery & Strategy" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Deep dive into your goals, audience, and competitive landscape." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "02." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Design & Prototyping" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Translating your brand identity into stunning, interactive visual concepts." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "03." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Development & SEO" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Writing clean, performant code with advanced technical SEO and flawless responsiveness." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-3xl font-serif text-sage/80", children: "04." }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif text-ink mb-2", children: "Launch & Growth" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base", children: "Rigorous testing, launch, and ongoing support for your thriving digital presence." })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]/80 transition-all duration-500",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-serif text-ink mb-6", children: "Who We Work With" }),
              /* @__PURE__ */ jsx("p", { children: "We proudly partner with small businesses, creative professionals, and ambitious founders across San Jose and the Bay Area, translating your vision into a compelling online reality." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: "mt-12 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none", children: /* @__PURE__ */ jsx(Logo, { className: "w-96 h-96 text-cream" }) }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-4xl font-serif mb-6", children: "Ready to transform your digital presence?" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-cream/80 mb-10 max-w-2xl mx-auto", children: "Let's build a memorable, high-converting website that positions your brand for success. Contact us today to discuss your project." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "inline-block bg-cream text-ink px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream/90 transition-colors font-medium rounded-full",
                    children: "Start Your Project"
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const faqs = [
  {
    question: "How long does a typical web design project take?",
    answer: "A standard project usually takes between 4 to 8 weeks from discovery to launch. This timeline depends on the complexity of the site, the number of pages, and how quickly we receive feedback and content from your team."
  },
  {
    question: "Do you offer ongoing website maintenance and support?",
    answer: "Yes, we offer monthly care plans (Basic and Blossoming) that include domain maintenance, security updates, small content edits, and ongoing SEO support to ensure your site continues to perform at its best."
  },
  {
    question: "What is your pricing structure for custom websites?",
    answer: "We offer three main packages: Basic, Standard, and Premium. Prices vary based on the scope of work, but we provide transparent quotes after our initial discovery call. We also offer one-off upgrades for specific needs like copywriting or visual refreshes."
  },
  {
    question: "Will my website be optimized for search engines (SEO)?",
    answer: "Absolutely. Every site we build includes foundational technical SEO. Our Standard and Premium packages include more advanced SEO strategies, including keyword research and content optimization, to help your brand blossom in search results."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialize in strategic redesigns. We'll analyze your current site's performance, identify areas for improvement, and create a modern, high-converting digital presence that aligns with your current brand goals."
  },
  {
    question: "Who do you typically work with?",
    answer: "We proudly partner with small businesses, creative professionals, and ambitious founders across the Bay Area and beyond. We love working with clients who value intentional design and long-term growth."
  }
];
function FAQItem({ question, answer, isOpen, onClick }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-mulberry/10 last:border-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick,
        className: "w-full py-6 flex items-center justify-between text-left group",
        children: [
          /* @__PURE__ */ jsx("span", { className: `text-xl font-serif transition-colors duration-300 ${isOpen ? "text-mulberry" : "text-ink group-hover:text-mulberry"}`, children: question }),
          /* @__PURE__ */ jsx("span", { className: "text-mulberry ml-4", children: isOpen ? /* @__PURE__ */ jsx(Minus, { size: 20 }) : /* @__PURE__ */ jsx(Plus, { size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: false,
        animate: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
        transition: { duration: 0.3, ease: "easeInOut" },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "pb-6 text-ink/70 leading-relaxed max-w-3xl", children: answer })
      }
    )
  ] });
}
function FAQ() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);
  const [openIndex, setOpenIndex] = useState(0);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen pt-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our web design process, pricing, SEO services, and ongoing support for businesses in San Jose and the Bay Area.",
        url: "https://winterplum.co/faq",
        keywords: "web design FAQ, website pricing San Jose, SEO questions, digital agency support, web design process, Bay Area web design studio",
        schema: [faqSchema]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cream", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute w-full left-0 right-0",
        style: {
          height: "200vh",
          y: backgroundY,
          opacity: backgroundOpacity
        },
        children: /* @__PURE__ */ jsx(MountainSunrise, {})
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 md:px-12 relative z-10 mb-24", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-20 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "inline-block mb-6 px-4 py-1.5 rounded-full border border-ink/10 bg-cream/50 backdrop-blur-sm text-sm uppercase tracking-widest text-ink/70",
            children: "Support & Information"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "text-5xl md:text-7xl font-serif font-bold text-ink leading-tight mb-6",
            children: [
              "Common ",
              /* @__PURE__ */ jsx("span", { className: "text-mulberry", children: "Questions" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: "text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed",
            children: "Everything you need to know about partnering with us to grow your digital presence."
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "bg-cream/70 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/40 shadow-xl shadow-ink/5",
          children: /* @__PURE__ */ jsx("div", { className: "divide-y divide-mulberry/10", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(
            FAQItem,
            {
              question: faq.question,
              answer: faq.answer,
              isOpen: openIndex === index,
              onClick: () => setOpenIndex(openIndex === index ? null : index)
            },
            index
          )) })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6 },
          className: "mt-20 bg-ink text-cream p-12 rounded-[2rem] text-center shadow-2xl border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:-translate-y-2 hover:shadow-ink/20 transition-all duration-500 relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none", children: /* @__PURE__ */ jsx(Logo, { className: "w-96 h-96 text-cream" }) }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl font-serif mb-6", children: "Ready to transform your digital presence?" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-cream/80 mb-10 max-w-2xl mx-auto", children: "Let's build a memorable, high-converting website that positions your brand for success. Contact us today to discuss your project." }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "inline-block bg-cream text-ink px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream/90 transition-colors font-medium rounded-full",
                  children: "Start Your Project"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen relative", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,rgba(250,240,230,0.6),transparent_70%)]" }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/services", element: /* @__PURE__ */ jsx(Services, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/brand", element: /* @__PURE__ */ jsx(Brand, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/web-design-silicon-valley", element: /* @__PURE__ */ jsx(WebDesignSiliconValley, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/web-design-san-jose", element: /* @__PURE__ */ jsx(WebDesignSanJose, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQ, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster, { position: "bottom-right", toastOptions: { style: { background: "#f7f4ef", color: "#2b2627", border: "1px solid #e5e5e5" } } })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(App, {}) }) })
);
