import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ProductShowcase from "../ProductShowcase.vue";
import { productShowcase } from "~/data/copy";

describe("ProductShowcase", () => {
  it("renders every showcase image with its alt text", () => {
    const wrapper = mount(ProductShowcase);
    const images = wrapper.findAll("img");
    expect(images).toHaveLength(productShowcase.images.length);
    images.forEach((img, index) => {
      expect(img.attributes("src")).toBe(productShowcase.images[index]?.src);
      expect(img.attributes("alt")).toBe(productShowcase.images[index]?.alt);
    });
  });

  it("gives every image real alt text, not empty or decorative", () => {
    const wrapper = mount(ProductShowcase);
    for (const img of wrapper.findAll("img")) {
      expect(img.attributes("alt")?.length).toBeGreaterThan(0);
    }
  });
});
