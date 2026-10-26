/**
 * The docs sidebar and the `/docs` index, in the order of the Quark app's main
 * menu (the left-side drawer). Each menu item is a docs category: a folder
 * under `content/docs/` whose `index.md` is the category's own page. Start
 * here, Help and Nerd Notes aren't menu items; they hold the pages that aren't
 * about one feature.
 *
 * Which pages sit in a category comes from the content collection, so adding a
 * page to a folder needs no change here. A category with no pages yet
 * (Calendar, Books) renders nothing until one exists.
 */

export interface DocsCategory {
  /** The folder under `content/docs/`, and the category's URL segment. */
  readonly slug: string;
  readonly title: string;
}

export interface DocsGroup {
  /** The drawer's group label, or omitted for a category that stands alone. */
  readonly label?: string;
  readonly categories: readonly DocsCategory[];
}

export const docsNav: readonly DocsGroup[] = [
  { categories: [{ slug: "start", title: "Start here" }] },
  {
    label: "Household",
    categories: [
      { slug: "files", title: "Files" },
      { slug: "photos", title: "Photos" },
      { slug: "calendar", title: "Calendar" },
      { slug: "docs", title: "Docs" },
      { slug: "sheets", title: "Sheets" },
      { slug: "slides", title: "Slides" },
      { slug: "books", title: "Books" },
      { slug: "chat", title: "Chat" },
      { slug: "vault", title: "Vault" },
    ],
  },
  {
    label: "Manage",
    categories: [
      { slug: "trash", title: "Trash" },
      { slug: "system", title: "System" },
      { slug: "users", title: "Users" },
      { slug: "settings", title: "Settings" },
    ],
  },
  {
    categories: [
      { slug: "help", title: "Help" },
      { slug: "nerd-notes", title: "Nerd Notes" },
    ],
  },
];
