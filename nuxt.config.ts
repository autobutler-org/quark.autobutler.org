// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-08-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content"],
  /*
   * Fonts are self-hosted: @fontsource packages are bundled into the build, so
   * no request ever leaves for a font CDN.
   */
  css: [
    "@fontsource-variable/newsreader/opsz.css",
    "@fontsource-variable/newsreader/opsz-italic.css",
    "@fontsource-variable/geist",
    "@fontsource-variable/geist-mono",
    "~/assets/main.css",
  ],
  nitro: {
    static: true,
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Quark: Your Family Home Base, a Private Home Cloud",
      meta: [
        {
          name: "description",
          content:
            "Quark plugs into your Wi-Fi router and turns USB storage into a private home cloud. Your photos and files stay at home: open source, no subscription.",
        },
        { property: "og:site_name", content: "Quark" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Quark: Your Family Home Base, a Private Home Cloud",
        },
        {
          property: "og:description",
          content:
            "Quark plugs into your Wi-Fi router and turns USB storage into a private home cloud. Your photos and files stay at home: open source, no subscription.",
        },
        { property: "og:url", content: "https://quark.autobutler.org" },
        { property: "og:image", content: "https://quark.autobutler.org/quark.png" },
        { property: "og:image:width", content: "912" },
        { property: "og:image:height", content: "912" },
        { property: "og:image:alt", content: "The Quark logo" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Quark: Your Family Home Base, a Private Home Cloud",
        },
        {
          name: "twitter:description",
          content:
            "Quark plugs into your Wi-Fi router and turns USB storage into a private home cloud. Your photos and files stay at home: open source, no subscription.",
        },
        { name: "twitter:image", content: "https://quark.autobutler.org/quark.png" },
        { name: "theme-color", content: "#f7f6f3", media: "(prefers-color-scheme: light)" },
        { name: "theme-color", content: "#161615", media: "(prefers-color-scheme: dark)" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
      ],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          preload: ["bash", "json", "yaml"],
        },
      },
    },
  },
});
