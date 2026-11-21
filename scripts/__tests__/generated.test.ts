// @vitest-environment node

/**
 * Checks the static site `nuxt generate` wrote to `.output/public`: the key
 * facts are in the raw HTML (readable without JavaScript), every page carries
 * its structured data, and the crawler files exist. Skipped when there is no
 * build; `make check/generated` (run in CI after generate) requires one.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { hero, manifesto, signup } from "../../data/copy";

const out = fileURLToPath(new URL("../../.output/public", import.meta.url));
const built = existsSync(join(out, "index.html"));
const required = process.env.REQUIRE_GENERATED === "1";

const read = (path: string): string => readFileSync(join(out, path), "utf8");

/** The HTML as a reader sees its text: entities decoded, whitespace collapsed. */
const text = (html: string): string =>
  html
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");

const jsonLd = (html: string): Record<string, unknown>[] =>
  [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([^<]*)<\/script>/g)].map(
    (match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>
  );

const types = (html: string): unknown[] => jsonLd(html).map((node) => node["@type"]);

const sitemapPaths = (): string[] =>
  [...read("sitemap.xml").matchAll(/<loc>https:\/\/quark\.autobutler\.org([^<]*)<\/loc>/g)].map(
    (match) => match[1] ?? ""
  );

const pageFile = (path: string): string =>
  path === "/" ? "index.html" : `${path.replace(/^\//, "")}/index.html`;

describe("generated site", () => {
  it("has a build to check when one is required", () => {
    expect(built || !required).toBe(true);
  });

  describe.skipIf(!built)("output", () => {
    it("states the key facts on / without JavaScript", () => {
      const home = text(read("index.html"));
      expect(home).toContain(hero.headline);
      expect(home).toContain(hero.subhead);
      for (const fact of hero.facts) {
        expect(home).toContain(fact.value);
      }
      expect(home).toContain(manifesto.openSource.link.label);
      expect(types(read("index.html"))).toEqual(["SoftwareApplication", "WebSite"]);
    });

    it("states the launch facts on /signup without JavaScript", () => {
      const page = text(read("signup/index.html"));
      expect(page).toContain(signup.heading);
      expect(page).toContain(signup.intro);
      expect(page).toContain(signup.launch.body);
    });

    it("gives every doc a TechArticle, breadcrumbs and an Updated date", () => {
      const docs = sitemapPaths().filter((path) => path.startsWith("/docs/"));
      expect(docs.length).toBeGreaterThan(0);
      const problems = docs.flatMap((path) => {
        const html = read(pageFile(path));
        const article = jsonLd(html)[0] ?? {};
        return [
          types(html).join() === "TechArticle,BreadcrumbList" ? [] : [`${path}: JSON-LD types`],
          /^\d{4}-\d{2}-\d{2}T/.test(String(article.dateModified)) ? [] : [`${path}: dateModified`],
          /Updated [A-Z][a-z]+ \d{1,2}, \d{4}/.test(text(html)) ? [] : [`${path}: Updated line`],
        ].flat();
      });
      expect(problems).toEqual([]);
    });

    it("puts a lastmod on every sitemap URL", () => {
      const urls = read("sitemap.xml").match(/<url>.*?<\/url>/g) ?? [];
      expect(urls.length).toBeGreaterThan(0);
      for (const url of urls) {
        expect(url).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
      }
    });

    it("serves robots.txt that allows everything and names the sitemap", () => {
      const robots = read("robots.txt");
      expect(robots).not.toMatch(/^Disallow:\s*\S/m);
      expect(robots).toContain("Sitemap: https://quark.autobutler.org/sitemap.xml");
    });

    it("serves llms.txt whose site links all resolve to generated pages", () => {
      const llms = read("llms.txt");
      expect(llms.startsWith("# Quark\n")).toBe(true);
      const links = [...llms.matchAll(/\]\(https:\/\/quark\.autobutler\.org([^)]*)\)/g)].map(
        (match) => match[1] ?? ""
      );
      expect(links.length).toBeGreaterThan(5);
      expect(links.filter((path) => !existsSync(join(out, pageFile(path))))).toEqual([]);
    });
  });
});
