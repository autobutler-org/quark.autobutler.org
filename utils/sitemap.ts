import { isoDay } from "./docDates";

const SITE = "https://quark.autobutler.org";

export interface SitemapEntry {
  readonly path: string;
  /** ISO 8601 date the page last changed. */
  readonly lastmod?: string;
}

const escapeXml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/** A sitemaps.org `urlset`, with `<lastmod>` on every URL whose date is known. */
export const sitemapXml = (entries: readonly SitemapEntry[]): string => {
  const urls = entries
    .map(({ path, lastmod }) => {
      const day = isoDay(lastmod);
      const mod = day ? `<lastmod>${day}</lastmod>` : "";
      return `  <url><loc>${escapeXml(`${SITE}${path}`)}</loc>${mod}</url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};
