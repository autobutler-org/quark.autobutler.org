import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SiteHeader from "../SiteHeader.vue";
import { masthead } from "~/data/copy";

describe("SiteHeader", () => {
  it("shows the Quark wordmark", () => {
    const wrapper = mount(SiteHeader);
    expect(wrapper.get(".wordmark").text()).toBe(masthead.wordmark);
  });

  it("links the wordmark back to the homepage", () => {
    const wrapper = mount(SiteHeader);
    expect(wrapper.get(".wordmark").attributes("href")).toBe("/");
  });

  it("renders every masthead link, including Docs", () => {
    const wrapper = mount(SiteHeader);
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    for (const link of masthead.links) {
      expect(hrefs).toContain(link.href);
    }
    expect(hrefs).toContain("/docs");
  });
});
