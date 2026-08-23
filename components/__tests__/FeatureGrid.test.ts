import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FeatureGrid from "../FeatureGrid.vue";
import { features } from "~/data/copy";

describe("FeatureGrid", () => {
  it("renders one entry per feature, in order", () => {
    const wrapper = mount(FeatureGrid);
    const names = wrapper.findAll("li h3").map((heading) => heading.text());
    expect(names).toEqual(features.items.map((feature) => feature.name));
  });

  it("renders the body copy for every feature", () => {
    const wrapper = mount(FeatureGrid);
    const text = wrapper.text();
    for (const feature of features.items) {
      expect(text).toContain(feature.body);
    }
  });
});
