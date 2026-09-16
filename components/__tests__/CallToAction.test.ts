import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import CallToAction from "../CallToAction.vue";
import { callToAction, repoUrl } from "~/data/copy";

describe("CallToAction", () => {
  it("renders the heading, body, and action label", () => {
    const wrapper = mount(CallToAction);
    expect(wrapper.text()).toContain(callToAction.heading);
    expect(wrapper.text()).toContain(callToAction.body);
    expect(wrapper.get("a.btn").text()).toBe(callToAction.action.label);
  });

  it("sends the reader to a customer-facing destination, not the repo", () => {
    const wrapper = mount(CallToAction);
    const href = wrapper.get("a.btn").attributes("href");
    expect(href).toBe(callToAction.action.href);
    expect(href?.startsWith("/")).toBe(true);
    expect(href).not.toContain(repoUrl);
    expect(href).not.toContain("github.com");
  });
});
