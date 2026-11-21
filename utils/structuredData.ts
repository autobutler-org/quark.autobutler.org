/**
 * JSON-LD (https://schema.org) for the site's pages, as plain objects. Pages
 * serialize them into a `<script type="application/ld+json">` tag.
 *
 * Only state what is true today: no `offers` or price until Quark is on sale,
 * and no `aggregateRating` or `review` until real ones exist.
 */

export const SITE_URL = "https://quark.autobutler.org";
export const SOFTWARE_ID = `${SITE_URL}/#software`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
/** The company's Organization node, defined on autobutler.org. */
export const ORGANIZATION_ID = "https://autobutler.org/#organization";

const REPO_URL = "https://github.com/autobutler-org/quark";
const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`;

type JsonLd = Readonly<Record<string, unknown>>;

/** Quark itself. Releases are built for Linux only (see the self-hosting doc). */
export const softwareApplication = (description: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: "Quark",
  url: SITE_URL,
  description,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Linux",
  license: LICENSE_URL,
  isAccessibleForFree: true,
  codeRepository: REPO_URL,
  sameAs: [REPO_URL],
  publisher: { "@id": ORGANIZATION_ID },
});

export const webSite = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Quark",
  url: SITE_URL,
  publisher: { "@id": ORGANIZATION_ID },
});

export interface ArticleDoc {
  readonly path: string;
  readonly title: string;
  readonly description?: string;
  /** ISO 8601 date the doc last changed. */
  readonly modified?: string;
}

/** One docs page. `dateModified` is left out rather than guessed when unknown. */
export const techArticle = (doc: ArticleDoc): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}${doc.path}#article`,
  headline: doc.title,
  url: `${SITE_URL}${doc.path}`,
  ...(doc.description ? { description: doc.description } : {}),
  ...(doc.modified ? { dateModified: doc.modified } : {}),
  inLanguage: "en-US",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": SOFTWARE_ID },
  publisher: { "@id": ORGANIZATION_ID },
});

/** Docs → this page. */
export const docsBreadcrumbs = (doc: Pick<ArticleDoc, "path" | "title">): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Docs", item: `${SITE_URL}/docs` },
    { "@type": "ListItem", position: 2, name: doc.title, item: `${SITE_URL}${doc.path}` },
  ],
});

/** A `useHead` script entry for one JSON-LD node. */
export const jsonLdScript = (data: JsonLd) => ({
  type: "application/ld+json" as const,
  innerHTML: JSON.stringify(data),
});
