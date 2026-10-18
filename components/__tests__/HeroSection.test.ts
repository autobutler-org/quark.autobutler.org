import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HeroSection from "../HeroSection.vue";
import { hero, repoUrl } from "~/data/copy";

describe("HeroSection", () => {
  it("renders the headline and lede", () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.get("h1").text()).toBe(hero.headline);
    expect(wrapper.get(".subhead").text()).toBe(hero.subhead);
    expect(wrapper.text()).toContain(hero.lede);
  });

  it("leads with sign-up, leaving the code to the masthead's Source link", () => {
    const wrapper = mount(HeroSection);
    const primary = wrapper.get("a.primary");
    expect(primary.text()).toBe(hero.primary.label);
    expect(primary.attributes("href")).toBe("/signup");
    expect(primary.attributes("href")).not.toContain(repoUrl);
  });

  it("offers the in-page how-it-works link as the second action", () => {
    const hrefs = mount(HeroSection)
      .findAll("a")
      .map((anchor) => anchor.attributes("href"));
    expect(hrefs).toEqual([hero.primary.href, hero.secondary.href]);
  });

  it("lists every fact as a labelled term and value", () => {
    const wrapper = mount(HeroSection);
    const list = wrapper.get("dl");
    expect(list.attributes("aria-label")).toBe(hero.factsLabel);
    const terms = list.findAll("dt").map((term) => term.text());
    const values = list.findAll("dd").map((value) => value.text());
    expect(terms).toEqual(hero.facts.map((fact) => fact.label));
    expect(values).toEqual(hero.facts.map((fact) => fact.value));
  });

  /* The facts sit beside the headline as plain claims; keep them to ones the page backs. */
  it("states no subscription and an open license in its facts", () => {
    const text = mount(HeroSection).get("dl").text();
    expect(text).toMatch(/subscription\s*none/i);
    expect(text).toContain("MIT-0");
    expect(text).not.toMatch(/\$|price|free trial/i);
  });
});
