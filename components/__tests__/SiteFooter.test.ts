import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SiteFooter from "../SiteFooter.vue";
import { footer } from "~/data/copy";

describe("SiteFooter", () => {
  it("shows the footer note", () => {
    const wrapper = mount(SiteFooter);
    expect(wrapper.text()).toContain(footer.note);
  });

  it("keeps the concept-render fine print at the bottom of the page", () => {
    const wrapper = mount(SiteFooter);
    expect(wrapper.text()).toContain(footer.renderNote);
  });

  it("renders every footer link", () => {
    const wrapper = mount(SiteFooter);
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    for (const link of footer.links) {
      expect(hrefs).toContain(link.href);
    }
  });

  it("links to the docs and support pages, not just the header", () => {
    const wrapper = mount(SiteFooter);
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    expect(hrefs).toContain("/docs");
    expect(hrefs).toContain("/support");
  });
});
