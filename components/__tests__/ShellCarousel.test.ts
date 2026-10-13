import { mount } from "@vue/test-utils";
import { beforeAll, describe, expect, it, vi } from "vitest";

import ShellCarousel from "../ShellCarousel.vue";
import { shellGallery } from "~/data/copy";

describe("ShellCarousel", () => {
  beforeAll(() => {
    // jsdom does not implement element scrolling.
    Element.prototype.scrollTo = vi.fn();
  });

  it("renders every slide with alt text and intrinsic dimensions", () => {
    const wrapper = mount(ShellCarousel);
    const images = wrapper.findAll("img");
    expect(images).toHaveLength(shellGallery.slides.length);
    for (const [index, image] of images.entries()) {
      const slide = shellGallery.slides[index]!;
      expect(image.attributes("src")).toBe(slide.src);
      expect(image.attributes("alt")).not.toBe("");
      expect(image.attributes("width")).toBe(String(slide.width));
      expect(image.attributes("height")).toBe(String(slide.height));
    }
  });

  it("leads with the whole Pavilion case", () => {
    const wrapper = mount(ShellCarousel);
    expect(wrapper.get("img").attributes("src")).toContain("pavilion-walnut-cane-wide");
  });

  it("starts on the first slide with only the next button enabled", () => {
    const wrapper = mount(ShellCarousel);
    const [previous, next] = wrapper.findAll("button");
    expect(previous!.attributes("disabled")).toBeDefined();
    expect(next!.attributes("disabled")).toBeUndefined();
    expect(wrapper.text()).toContain(`1 / ${shellGallery.slides.length}`);
  });

  it("advances and stops at the last slide", async () => {
    const wrapper = mount(ShellCarousel);
    const next = wrapper.findAll("button")[1]!;
    for (let i = 0; i < shellGallery.slides.length + 2; i++) {
      await next.trigger("click");
    }
    const total = shellGallery.slides.length;
    expect(wrapper.text()).toContain(`${total} / ${total}`);
    expect(next.attributes("disabled")).toBeDefined();
  });
});
