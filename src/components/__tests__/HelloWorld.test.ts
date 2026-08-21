import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders the message prop", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "hello" } });
    expect(wrapper.text()).toContain("hello");
  });

  it("increments the count when clicked", async () => {
    const wrapper = mount(HelloWorld, { props: { msg: "hello" } });
    expect(wrapper.get("button").text()).toBe("count is 0");

    await wrapper.get("button").trigger("click");
    expect(wrapper.get("button").text()).toBe("count is 1");
  });
});
