import { describe, expect, it } from "vitest";

import { docsNav } from "../../data/docsNav";
import { categoryOf, groupDocs, type NavDoc } from "../docsNav";

const doc = (path: string, order?: number): NavDoc => ({
  path,
  title: path,
  navigation: order === undefined ? undefined : { order },
});

describe("docsNav", () => {
  it("follows the app drawer: Start here, Household, Manage, then Help and Nerd Notes", () => {
    expect(docsNav.map((group) => group.label)).toEqual([undefined, "Household", "Manage", undefined]);
    expect(docsNav.flatMap((group) => group.categories.map((category) => category.title))).toEqual([
      "Start here",
      "Files",
      "Photos",
      "Calendar",
      "Docs",
      "Sheets",
      "Slides",
      "Books",
      "Chat",
      "Vault",
      "Trash",
      "System",
      "Users",
      "Settings",
      "Help",
      "Nerd Notes",
    ]);
  });
});

describe("categoryOf", () => {
  it("returns the first segment under /docs", () => {
    expect(categoryOf("/docs/files")).toBe("files");
    expect(categoryOf("/docs/files/file-types/")).toBe("files");
    expect(categoryOf("/docs")).toBeUndefined();
  });
});

describe("groupDocs", () => {
  it("puts each category's index first, then its pages by navigation order", () => {
    const groups = groupDocs([
      doc("/docs/settings/versions", 4),
      doc("/docs/settings/ssh", 3),
      doc("/docs/settings", 9),
      doc("/docs/start/welcome", 1),
    ]);
    expect(groups.map((group) => group.categories.map((category) => category.slug))).toEqual([
      ["start"],
      ["settings"],
    ]);
    expect(groups[1]?.categories[0]?.docs.map(({ path }) => path)).toEqual([
      "/docs/settings",
      "/docs/settings/ssh",
      "/docs/settings/versions",
    ]);
  });

  it("leaves out categories with no pages yet, like Calendar and Books", () => {
    const slugs = groupDocs([doc("/docs/photos"), doc("/docs/docs")]).flatMap((group) =>
      group.categories.map((category) => category.slug)
    );
    expect(slugs).toEqual(["photos", "docs"]);
  });

  it("drops docs outside every category", () => {
    expect(groupDocs([doc("/docs/unknown/page")])).toEqual([]);
  });
});
