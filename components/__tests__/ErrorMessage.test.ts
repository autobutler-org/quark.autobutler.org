import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import ErrorMessage from "../ErrorMessage.vue";
import { errorPage } from "~/data/copy";

describe("ErrorMessage", () => {
  it("says the page was not found for a 404", () => {
    const wrapper = mount(ErrorMessage, { props: { statusCode: 404 } });
    expect(wrapper.get("h1").text()).toBe(errorPage.notFoundHeading);
    expect(wrapper.text()).toContain(errorPage.notFoundBody);
    expect(wrapper.text()).toContain("404");
  });

  it("says something went wrong for any other error", () => {
    const wrapper = mount(ErrorMessage, { props: { statusCode: 500 } });
    expect(wrapper.get("h1").text()).toBe(errorPage.errorHeading);
    expect(wrapper.text()).toContain(errorPage.errorBody);
  });

  it("offers a way back home and to the docs", () => {
    const wrapper = mount(ErrorMessage, { props: { statusCode: 404 } });
    const hrefs = wrapper.findAll("a").map((anchor) => anchor.attributes("href"));
    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/docs");
  });
});
