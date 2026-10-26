/**
 * Pure helpers for checking internal `/docs/…` links against the docs that
 * actually exist. `utils/__tests__/docsLinks.test.ts` runs them over
 * `content/docs/` so `make test` fails on a link to a page that isn't there.
 */

/** An internal docs link, split into the page path and an optional `#anchor`. */
export interface DocLink {
  readonly path: string;
  readonly anchor?: string;
}

/**
 * The URL `@nuxt/content` gives a file under `content/docs/`: the relative path
 * without `.md`, and `index` dropped so a folder's index is the folder's URL.
 */
export const docPathFromFile = (relativePath: string): string => {
  const withoutExt = relativePath.replace(/\\/g, "/").replace(/\.md$/, "");
  const withoutIndex = withoutExt.replace(/(^|\/)index$/, "");
  return withoutIndex ? `/docs/${withoutIndex}` : "/docs";
};

/**
 * The anchor a heading gets, the way GitHub and `@nuxt/content` slug it:
 * Markdown syntax dropped, lowercased, punctuation removed, spaces to dashes.
 */
export const headingAnchor = (heading: string): string =>
  heading
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");

/**
 * Every heading anchor in a Markdown document, skipping fenced code. A repeated
 * heading gets `-1`, `-2`, … like GitHub's slugger.
 */
export const headingAnchors = (markdown: string): ReadonlySet<string> => {
  const anchors = new Set<string>();
  let inFence = false;
  for (const line of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const heading = /^#{1,6}\s+(.+?)\s*#*\s*$/.exec(line);
    if (!heading?.[1]) continue;
    const base = headingAnchor(heading[1]);
    let anchor = base;
    for (let n = 1; anchors.has(anchor); n++) anchor = `${base}-${n}`;
    anchors.add(anchor);
  }
  return anchors;
};

const LINK = /(?:\]\(|href="|href: ")(\/docs(?:\/[^\s)"#]*)?)(?:#([^\s)"]+))?[)"]/g;

/** Every internal `/docs…` link in Markdown (`](/docs/…)`) or TS/Vue (`href: "/docs/…"`). */
export const docLinks = (source: string): readonly DocLink[] =>
  [...source.matchAll(LINK)].map(([, rawPath = "", anchor]) => {
    const path = rawPath.replace(/\/+$/, "") || "/docs";
    return anchor ? { path, anchor } : { path };
  });
