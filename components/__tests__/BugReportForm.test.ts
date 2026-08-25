import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";

import BugReportForm from "../BugReportForm.vue";
import { support } from "~/data/copy";

describe("BugReportForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("opens a pre-filled GitHub issue in a new tab on submit", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const wrapper = mount(BugReportForm);

    await wrapper.get("#title").setValue("Files page crashes on upload");
    await wrapper.get("#what-happened").setValue("It just crashed.");
    await wrapper.get("form").trigger("submit");

    expect(openSpy).toHaveBeenCalledOnce();
    const [url, target] = openSpy.mock.calls[0] ?? [];
    expect(target).toBe("_blank");
    expect(url).toContain(support.githubIssuesUrl);

    const params = new URL(url as string).searchParams;
    expect(params.get("template")).toBe("bug.yaml");
    expect(params.get("title")).toBe("[Bug] Files page crashes on upload");
    expect(params.get("what-happened")).toBe("It just crashed.");
  });

  it("omits optional fields from the issue URL when left blank", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const wrapper = mount(BugReportForm);

    await wrapper.get("#title").setValue("Something broke");
    await wrapper.get("#what-happened").setValue("Details.");
    await wrapper.get("form").trigger("submit");

    const [url] = openSpy.mock.calls[0] ?? [];
    const params = new URL(url as string).searchParams;
    expect(params.has("url")).toBe(false);
    expect(params.has("logs")).toBe(false);
  });

  it("renders every component and browser checkbox option", () => {
    const wrapper = mount(BugReportForm);
    const checkboxValues = wrapper
      .findAll('input[type="checkbox"]')
      .map((input) => input.attributes("value"));
    for (const option of [...support.form.componentOptions, ...support.form.browserOptions]) {
      expect(checkboxValues).toContain(option);
    }
  });
});
