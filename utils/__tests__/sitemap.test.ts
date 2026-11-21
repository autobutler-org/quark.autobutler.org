import { describe, expect, it } from "vitest";

import { sitemapXml } from "../sitemap";

describe("sitemapXml", () => {
  it("puts a lastmod day on each URL that has a date", () => {
    const xml = sitemapXml([
      { path: "/", lastmod: "2026-11-21T10:00:00Z" },
      { path: "/docs/start/welcome", lastmod: "2026-10-01T09:00:00+00:00" },
    ]);
    expect(xml).toContain(
      "<url><loc>https://quark.autobutler.org/</loc><lastmod>2026-11-21</lastmod></url>"
    );
    expect(xml).toContain(
      "<url><loc>https://quark.autobutler.org/docs/start/welcome</loc><lastmod>2026-10-01</lastmod></url>"
    );
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
  });

  it("omits lastmod rather than inventing one", () => {
    expect(sitemapXml([{ path: "/support" }])).toContain(
      "<url><loc>https://quark.autobutler.org/support</loc></url>"
    );
  });

  it("escapes XML in URLs", () => {
    expect(sitemapXml([{ path: "/a&b" }])).toContain("/a&amp;b");
  });
});
