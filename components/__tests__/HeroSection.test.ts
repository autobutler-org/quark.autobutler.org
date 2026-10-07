import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HeroSection from "../HeroSection.vue";
import { hero, repoUrl } from "~/data/copy";

describe("HeroSection", () => {
  it("renders the headline and lede", () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.get("h1").text()).toBe(hero.headline);
    expect(wrapper.text()).toContain(hero.lede);
  });

  it("leads with sign-up, leaving the code to the masthead's Source link", () => {
    const wrapper = mount(HeroSection);
    const primary = wrapper.get("a.primary");
    expect(primary.text()).toBe(hero.primary.label);
    expect(primary.attributes("href")).toBe("/signup");
    expect(primary.attributes("href")).not.toContain(repoUrl);
  });

  it("renders the brand mark with intrinsic dimensions", () => {
    const wrapper = mount(HeroSection);
    const mark = wrapper.get("img");
    expect(mark.attributes("src")).toBe(hero.logo.src);
    expect(mark.attributes("width")).toBe("912");
    expect(mark.attributes("height")).toBe("912");
  });

  it("marks the logo decorative, since the masthead already names the brand", () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.get("img").attributes("alt")).toBe("");
  });
});
