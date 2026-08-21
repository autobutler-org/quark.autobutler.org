import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import LandingPage from "../LandingPage.vue";
import { hero, orgSiteUrl, repoUrl } from "@/content/copy";

describe("LandingPage", () => {
  it("leads with the hero headline", () => {
    const wrapper = mount(LandingPage);
    expect(wrapper.get("h1").text()).toBe(hero.headline);
  });

  it("renders each section exactly once", () => {
    const wrapper = mount(LandingPage);
    expect(wrapper.findAll("h1")).toHaveLength(1);
    expect(wrapper.findAll("section")).toHaveLength(5);
    expect(wrapper.findAll("header")).toHaveLength(1);
    expect(wrapper.findAll("footer")).toHaveLength(1);
  });

  it("links out to the product repository and the org site", () => {
    const wrapper = mount(LandingPage);
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    expect(hrefs).toContain(repoUrl);
    expect(hrefs).toContain(orgSiteUrl);
  });

  it("sends every outbound link to an https destination", () => {
    const wrapper = mount(LandingPage);
    const external = wrapper
      .findAll("a")
      .map((anchor) => anchor.attributes("href") ?? "")
      .filter((href) => !href.startsWith("#"));
    expect(external.length).toBeGreaterThan(0);
    for (const href of external) {
      expect(href).toMatch(/^https:\/\//);
    }
  });
});
