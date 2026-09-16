import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HelpLinks from "../HelpLinks.vue";
import { support } from "~/data/copy";

describe("HelpLinks", () => {
  it("renders every help link with its href", () => {
    const wrapper = mount(HelpLinks);
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    for (const link of support.helpLinks) {
      expect(hrefs).toContain(link.href);
    }
  });

  it("opens external links in a new tab, safely", () => {
    const wrapper = mount(HelpLinks);
    const anchors = wrapper.findAll("a");
    for (const link of support.helpLinks.filter((l) => l.external)) {
      const anchor = anchors.find((a) => a.attributes("href") === link.href);
      expect(anchor?.attributes("target")).toBe("_blank");
      expect(anchor?.attributes("rel")).toBe("noopener");
    }
  });

  it("keeps internal links in the same tab", () => {
    const wrapper = mount(HelpLinks);
    const anchors = wrapper.findAll("a");
    for (const link of support.helpLinks.filter((l) => !l.external)) {
      const anchor = anchors.find((a) => a.attributes("href") === link.href);
      expect(anchor?.attributes("target")).toBeUndefined();
    }
  });

  it("offers GitHub exactly once", () => {
    const githubLinks = support.helpLinks.filter((link) => link.href.includes("github.com"));
    expect(githubLinks).toHaveLength(1);
  });

  it("has no duplicate destinations or titles", () => {
    const hrefs = support.helpLinks.map((link) => link.href);
    const titles = support.helpLinks.map((link) => link.title);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
