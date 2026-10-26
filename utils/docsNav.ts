import { docsNav, type DocsCategory, type DocsGroup } from "~/data/docsNav";

export interface NavDoc {
  readonly path: string;
  readonly title: string;
  readonly navigation?: { readonly title?: string; readonly order?: number };
}

export interface NavCategory<T extends NavDoc> extends DocsCategory {
  /** The category's own page (its `index.md`), then the rest by `navigation.order`. */
  readonly docs: readonly T[];
}

export interface NavGroup<T extends NavDoc> {
  readonly label?: string;
  readonly categories: readonly NavCategory<T>[];
}

/** The category slug a doc path sits in: `/docs/files/file-types` → `files`. */
export const categoryOf = (path: string): string | undefined =>
  /^\/docs\/([^/]+)/.exec(path.replace(/\/+$/, ""))?.[1];

const byOrder = <T extends NavDoc>(slug: string) => {
  const index = `/docs/${slug}`;
  return (a: T, b: T): number =>
    Number(b.path === index) - Number(a.path === index) ||
    (a.navigation?.order ?? 999) - (b.navigation?.order ?? 999) ||
    a.path.localeCompare(b.path);
};

/**
 * Sorts docs into the app-menu categories of `data/docsNav.ts`. Categories with
 * no docs yet are left out, and so is a group left with no categories.
 */
export const groupDocs = <T extends NavDoc>(
  docs: readonly T[],
  nav: readonly DocsGroup[] = docsNav
): readonly NavGroup<T>[] =>
  nav
    .map((group) => ({
      ...group,
      categories: group.categories
        .map((category) => ({
          ...category,
          docs: docs
            .filter((doc) => categoryOf(doc.path) === category.slug)
            .sort(byOrder(category.slug)),
        }))
        .filter((category) => category.docs.length > 0),
    }))
    .filter((group) => group.categories.length > 0);
