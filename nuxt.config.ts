// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content"],
  css: ["~/assets/main.css"],
  nitro: {
    static: true,
  },
  routeRules: {
    "/docs/welcome": { redirect: "/docs/start-here/welcome" },
    "/docs/getting-started": { redirect: "/docs/start-here/getting-started" },
    "/docs/how-it-works": { redirect: "/docs/start-here/how-it-works" },
    "/docs/photos": { redirect: "/docs/things-you-can-do/photos" },
    "/docs/google-takeout": { redirect: "/docs/things-you-can-do/google-takeout" },
    "/docs/vault": { redirect: "/docs/things-you-can-do/vault" },
    "/docs/help": { redirect: "/docs/if-something-goes-wrong/help" },
    "/docs/nerd-notes": { redirect: "/docs/nerd-notes/overview" },
    "/docs/security-guide": { redirect: "/docs/nerd-notes/security-guide" },
  },
  app: {
    head: {
      title: "Quark — Data Autonomy For Everyone",
      meta: [
        {
          name: "description",
          content:
            "Quark is a plug-and-play home cloud device. Your photos, files, and documents on hardware you own — no subscriptions, no data mining, no big tech.",
        },
        { property: "og:site_name", content: "Quark" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Quark — Data Autonomy For Everyone" },
        {
          property: "og:description",
          content:
            "A plug-and-play home cloud device. Your photos and files, stored on your own hardware.",
        },
        { property: "og:url", content: "https://quark.autobutler.org" },
        { property: "og:image", content: "https://quark.autobutler.org/quark.png" },
        { property: "og:image:width", content: "912" },
        { property: "og:image:height", content: "912" },
        { property: "og:image:alt", content: "The Quark logo" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Quark — Data Autonomy For Everyone" },
        {
          name: "twitter:description",
          content:
            "A plug-and-play home cloud device. Your photos and files, stored on your own hardware.",
        },
        { name: "twitter:image", content: "https://quark.autobutler.org/quark.png" },
        { name: "theme-color", content: "#00bbff" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "catppuccin-mocha",
            dark: "catppuccin-mocha",
            light: "catppuccin-mocha",
          },
          preload: ["bash", "json", "yaml"],
        },
      },
    },
  },
});
