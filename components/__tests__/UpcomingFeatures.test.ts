import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import UpcomingFeatures from "../UpcomingFeatures.vue";
import { features, upcoming } from "~/data/copy";

describe("UpcomingFeatures", () => {
  it("renders one entry per upcoming feature, in order", () => {
    const wrapper = mount(UpcomingFeatures);
    const names = wrapper.findAll("li h3").map((heading) => heading.text());
    expect(names).toEqual(upcoming.items.map((feature) => feature.name));
  });

  it("renders the body copy for every upcoming feature", () => {
    const wrapper = mount(UpcomingFeatures);
    const text = wrapper.text();
    for (const feature of upcoming.items) {
      expect(text).toContain(feature.body);
    }
  });

  /*
   * The point of the section: a reader must not mistake either entry for
   * something they can go and use today, so every card carries the label.
   */
  it("badges every entry so none reads as available", () => {
    const wrapper = mount(UpcomingFeatures);
    const badges = wrapper.findAll("li .badge").map((badge) => badge.text());
    expect(badges).toHaveLength(upcoming.items.length);
    for (const badge of badges) {
      expect(badge).toBe(upcoming.badge);
    }
  });

  /*
   * An unreleased feature appearing in both blocks would defeat the split, and
   * the shipped grid is what the page presents as available.
   */
  it("shares no entry with the shipped feature grid", () => {
    const shipped = new Set(features.items.map((feature) => feature.name));
    for (const feature of upcoming.items) {
      expect(shipped.has(feature.name)).toBe(false);
    }
  });

  it("promises nothing about when either feature arrives", () => {
    const text = mount(UpcomingFeatures).text();
    expect(text).not.toMatch(/\b20\d\d\b/);
    expect(text).not.toMatch(/\b(next (week|month|quarter)|soon)\b/i);
  });
});
