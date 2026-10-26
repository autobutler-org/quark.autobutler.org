// @vitest-environment node

import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { docsNav } from "../../data/docsNav";
import { docsRedirects } from "../../data/docsRedirects";
import { docLinks, docPathFromFile, headingAnchor, headingAnchors } from "../docsLinks";
import { categoryOf } from "../docsNav";

const root = fileURLToPath(new URL("../..", import.meta.url));
const contentDir = join(root, "content/docs");

const filesUnder = (dir: string, extension: string): readonly string[] =>
  readdirSync(join(root, dir), { recursive: true, encoding: "utf8" })
    .filter((file) => file.endsWith(extension) && !file.includes("__tests__"))
    .map((file) => join(root, dir, file));

/** Every doc page, by URL, with the anchors its headings produce. */
const docs = new Map(
  filesUnder("content/docs", ".md").map((file) => [
    docPathFromFile(relative(contentDir, file)),
    headingAnchors(readFileSync(file, "utf8")),
  ])
);

/** Every file that links into the docs: the docs themselves, landing copy, components and pages. */
const linkSources = [
  ...filesUnder("content/docs", ".md"),
  join(root, "data/copy.ts"),
  ...filesUnder("components", ".vue"),
  ...filesUnder("pages", ".vue"),
];

const links = linkSources.flatMap((file) =>
  docLinks(readFileSync(file, "utf8")).map((link) => ({ file: relative(root, file), ...link }))
);

describe("internal docs links", () => {
  it("finds the docs and the links to check", () => {
    expect(docs.size).toBeGreaterThan(20);
    expect(links.length).toBeGreaterThan(100);
  });

  it("all point at a doc that exists", () => {
    const broken = links.filter(({ path }) => path !== "/docs" && !docs.has(path));
    expect(broken).toEqual([]);
  });

  it("all point at a heading that exists when they carry an anchor", () => {
    const broken = links.filter(
      ({ path, anchor }) => anchor !== undefined && docs.has(path) && !docs.get(path)?.has(anchor)
    );
    expect(broken).toEqual([]);
  });

  it("never rely on a redirect", () => {
    const redirected = links.filter(({ path }) => path in docsRedirects);
    expect(redirected).toEqual([]);
  });
});

describe("docs redirects", () => {
  it("each send a URL that is no longer a doc to one that is", () => {
    for (const [from, to] of Object.entries(docsRedirects)) {
      expect(docs.has(from), from).toBe(false);
      expect(docs.has(to), `${from} → ${to}`).toBe(true);
    }
  });
});

describe("docs pages", () => {
  it("each sit in a category the sidebar lists", () => {
    const slugs = new Set(docsNav.flatMap((group) => group.categories.map(({ slug }) => slug)));
    const orphans = [...docs.keys()].filter((path) => !slugs.has(categoryOf(path) ?? ""));
    expect(orphans).toEqual([]);
  });
});

describe("docPathFromFile", () => {
  it("maps a file to the URL @nuxt/content gives it", () => {
    expect(docPathFromFile("start/welcome.md")).toBe("/docs/start/welcome");
    expect(docPathFromFile("files/index.md")).toBe("/docs/files");
    expect(docPathFromFile("index.md")).toBe("/docs");
  });
});

describe("headingAnchor", () => {
  it("slugs a heading the way the rendered page does", () => {
    expect(headingAnchor("Delete account vs. Reset this Quark")).toBe(
      "delete-account-vs-reset-this-quark"
    );
    expect(headingAnchor("I'm having **performance** issues")).toBe("im-having-performance-issues");
    expect(headingAnchor("`docker run` in a [container](/x)")).toBe("docker-run-in-a-container");
  });

  it("numbers repeated headings and ignores fenced code", () => {
    const anchors = headingAnchors("## Setup\n\n```sh\n# not a heading\n```\n\n## Setup\n");
    expect([...anchors]).toEqual(["setup", "setup-1"]);
  });
});

describe("docLinks", () => {
  it("finds Markdown links and hrefs, with and without anchors", () => {
    expect(
      docLinks('See [Files](/docs/files#trash) and [Docs](/docs/).\n{ href: "/docs/help" }')
    ).toEqual([{ path: "/docs/files", anchor: "trash" }, { path: "/docs" }, { path: "/docs/help" }]);
  });

  it("ignores links to other sites and to /assets", () => {
    expect(
      docLinks("[x](https://github.com/org/repo/blob/main/docs/auth.md) ![y](/assets/docs/a.webp)")
    ).toEqual([]);
  });
});
