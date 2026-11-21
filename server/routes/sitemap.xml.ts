import { queryCollection } from "@nuxt/content/server";

import { sitemapXml } from "~/utils/sitemap";

// Keep in sync with the non-docs pages under pages/.
const PAGES = ["/", "/docs", "/signup", "/support"] as const;

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "docs").select("path", "modified").all();
  // The sitemap is prerendered, so "now" is the build date: the honest
  // lastmod for pages built from code rather than a single doc file.
  const built = new Date().toISOString();
  const entries = [
    ...PAGES.map((path) => ({ path, lastmod: built })),
    ...docs.map((doc) => ({ path: doc.path, lastmod: doc.modified ?? built })),
  ];
  setHeader(event, "content-type", "application/xml");
  return sitemapXml(entries);
});
