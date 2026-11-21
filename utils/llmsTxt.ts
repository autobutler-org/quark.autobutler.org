import { hero, orgSiteUrl, signup, support } from "../data/copy";

/**
 * `/llms.txt` (https://llmstxt.org): a short Markdown map of the site for AI
 * assistants. Built from the docs collection at generate time so it can't go
 * stale. Descriptions come from each page's own copy or frontmatter.
 */

const SITE = "https://quark.autobutler.org";

export interface LlmsDoc {
  readonly path: string;
  readonly title: string;
  readonly description?: string;
}

/** The docs a newcomer should read first, in reading order. */
export const KEY_DOCS = [
  "/docs/start/welcome",
  "/docs/start/getting-started",
  "/docs/start/how-it-works",
  "/docs/help/security-guide",
  "/docs/settings/remote-access",
] as const;

const link = (title: string, path: string, description?: string): string =>
  `- [${title}](${path.startsWith("http") ? path : `${SITE}${path}`})${description ? `: ${description}` : ""}`;

export const llmsTxt = (docs: readonly LlmsDoc[]): string => {
  const byPath = new Map(docs.map((doc) => [doc.path, doc]));
  const keyDocs = KEY_DOCS.flatMap((path) => {
    const doc = byPath.get(path);
    return doc ? [link(doc.title, doc.path, doc.description)] : [];
  });
  const otherDocs = docs
    .filter((doc) => !(KEY_DOCS as readonly string[]).includes(doc.path))
    .map((doc) => link(doc.title, doc.path, doc.description));

  return [
    "# Quark",
    "",
    `> ${hero.headline}. ${hero.subhead} ${hero.lede} ` +
      "Quark is open source under the MIT-0 license, with no subscription.",
    "",
    "## Start here",
    "",
    link("Home", "/", hero.subhead),
    ...keyDocs,
    link(support.heading, "/support", support.helpIntro),
    link(signup.heading, "/signup", signup.intro),
    "",
    "## Docs",
    "",
    link("All docs", "/docs", "Every Quark guide, grouped like the app's menu."),
    ...otherDocs,
    "",
    "## Company",
    "",
    link("AutoButler", orgSiteUrl, "The company that makes Quark."),
    "",
  ].join("\n");
};
