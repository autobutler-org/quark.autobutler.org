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

  it("starts with the mobile menu collapsed", () => {
    const wrapper = mount(SiteHeader);
    expect(wrapper.get("button.menu-toggle").attributes("aria-expanded")).toBe("false");
    expect(wrapper.get("nav").classes()).not.toContain("open");
  });

  it("opens the menu when the hamburger button is clicked", async () => {
    const wrapper = mount(SiteHeader);
    await wrapper.get("button.menu-toggle").trigger("click");
    expect(wrapper.get("button.menu-toggle").attributes("aria-expanded")).toBe("true");
    expect(wrapper.get("nav").classes()).toContain("open");
  });

  it("closes the menu when the hamburger button is clicked again", async () => {
    const wrapper = mount(SiteHeader);
    const button = wrapper.get("button.menu-toggle");
    await button.trigger("click");
    await button.trigger("click");
    expect(button.attributes("aria-expanded")).toBe("false");
    expect(wrapper.get("nav").classes()).not.toContain("open");
  });

  it("closes the menu when a nav link is clicked", async () => {
    const wrapper = mount(SiteHeader);
    await wrapper.get("button.menu-toggle").trigger("click");
    await wrapper.get("nav a").trigger("click");
    expect(wrapper.get("button.menu-toggle").attributes("aria-expanded")).toBe("false");
    expect(wrapper.get("nav").classes()).not.toContain("open");
  });
});
