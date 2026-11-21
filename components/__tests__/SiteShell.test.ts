import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SiteShell from "../SiteShell.vue";
import { skipLink } from "~/data/copy";

const FOCUSABLE = "a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])";

describe("SiteShell", () => {
  it("makes a skip link the first thing the Tab key reaches", () => {
    const wrapper = mount(SiteShell);
    const first = wrapper.element.querySelector(FOCUSABLE);
    expect(first?.textContent).toBe(skipLink.label);
    expect(first?.getAttribute("href")).toBe("#main");
  });

  it("points the skip link at the one main landmark, which holds the page", () => {
    const wrapper = mount(SiteShell, { slots: { default: "<h1>Page body</h1>" } });
    const mains = wrapper.findAll("main");
    expect(mains).toHaveLength(1);
    expect(mains[0]?.attributes("id")).toBe("main");
    expect(mains[0]?.text()).toBe("Page body");
    // Focusable from script, so following the skip link moves focus, not just the scroll.
    expect(mains[0]?.attributes("tabindex")).toBe("-1");
  });

  it("keeps the header and footer outside the main landmark", () => {
    const wrapper = mount(SiteShell);
    const main = wrapper.get("main");
    expect(main.find("header").exists()).toBe(false);
    expect(main.find("footer").exists()).toBe(false);
    expect(wrapper.find("header").exists()).toBe(true);
    expect(wrapper.find("footer").exists()).toBe(true);
  });
});
