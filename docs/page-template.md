# Docs page template

Every page under `content/docs/` follows this template. It sits outside `content/` so it isn't rendered on the site.

## Where a page lives

The docs follow the Quark app's main menu (the left-side drawer). Each menu item is a category: a folder under
`content/docs/`. A feature's main page is its folder's `index.md`, so its URL is the folder (`/docs/photos`). Other
pages about that feature sit beside it (`/docs/settings/ssh`).

The sidebar and the `/docs` index list the categories in drawer order, from [`data/docsNav.ts`](../data/docsNav.ts):

- **Start here**: first-run pages (`start/`)
- **Household**: Files, Photos, Calendar, Docs, Sheets, Slides, Books, Chat, Vault
- **Manage**: Trash, System, Users, Settings
- **Help**, then **Nerd Notes**: pages that aren't about one feature (`help/`, `nerd-notes/`)

A new category needs an entry in `data/docsNav.ts`. A new page in an existing folder shows up on its own. A category
with no pages yet is listed in `data/docsNav.ts` but doesn't render until its first page exists.

If a published page moves, add its old URL to [`data/docsRedirects.ts`](../data/docsRedirects.ts) and update every link
to it. `make test` fails on any internal `/docs/…` link, or `#anchor`, that doesn't match a page.

## The page, top to bottom

1. **Frontmatter:** `title`, a plain-language `description`, and `navigation.{title, order}`. `order` sorts pages
   within the category; the category's `index.md` always comes first.

   ```yaml
   ---
   title: Photos
   description: Browse the images on your Quark, upload the photos you pick, and sort them into albums
   navigation:
     title: Photos
     order: 1
   ---
   ```

2. **Top, in plain language:** what the feature does and why you'd use it, written for an older, non-technical
   household member. Then **How to use it**: numbered steps that name the app's buttons and menus (**Settings →
   Network**). No API paths, curl, Docker, config keys, file paths or port numbers in this part.
3. **Middle (optional):** common tasks, limits, and "if something goes wrong", still in plain language.
4. **Related:** links to neighbouring pages, right above `## Nerd Notes`.
5. **Bottom: `## Nerd Notes`.** Always the last section, always that exact heading, so the anchor is `#nerd-notes`. It
   holds API endpoints, curl examples, Docker and config details, file paths, ports, crypto details and anything else
   technical. Leave it out only when there's truly nothing technical to say.

The [Nerd Notes index](../content/docs/nerd-notes/index.md) links each page's `#nerd-notes` section, and holds the
technical material that has no single feature home.

## Skeleton

```markdown
---
title: Feature
description: What it does, in one plain sentence
navigation:
  title: Feature
  order: 1
---

# Feature

What it does and why you'd use it.

## How to use it

1. Open **Feature** from the app menu.
2. Tap **Button**.

## If something goes wrong

Plain-language fixes.

## Related

- [Another page](/docs/category/page): what it covers

## Nerd Notes

The technical detail.
```
