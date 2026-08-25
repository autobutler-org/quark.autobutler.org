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
});
