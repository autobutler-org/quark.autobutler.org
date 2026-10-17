import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FeatureGrid from "../FeatureGrid.vue";
import { features } from "~/data/copy";

const bodyOf = (name: string): string =>
  features.items.find((feature) => feature.name === name)?.body ?? "";

describe("FeatureGrid", () => {
  it("renders one entry per feature, in order", () => {
    const wrapper = mount(FeatureGrid);
    const names = wrapper.findAll("li h3").map((heading) => heading.text());
    expect(names).toEqual(features.items.map((feature) => feature.name));
  });

  it("puts every feature in a collapsible details element named by its summary", () => {
    const wrapper = mount(FeatureGrid);
    const summaries = wrapper
      .findAll("li details > summary")
      .map((summary) => summary.find("h3").text());
    expect(summaries).toEqual(features.items.map((feature) => feature.name));
  });

  it("renders the body copy for every feature", () => {
    const wrapper = mount(FeatureGrid);
    const text = wrapper.text();
    for (const feature of features.items) {
      expect(text).toContain(feature.body);
    }
  });

  /*
   * Chat and Calendar ship on by default behind a Beta marker in the app, so
   * the grid lists them and carries the same label a user would see there.
   */
  it("badges exactly the beta features, Chat and Calendar", () => {
    const wrapper = mount(FeatureGrid);
    const badged = wrapper
      .findAll("li")
      .filter((item) => item.find(".badge").exists())
      .map((item) => `${item.find("h3").text()}: ${item.find(".badge").text()}`);
    expect(badged).toEqual(["Chat: Beta", "Calendar: Beta"]);
  });

  /*
   * Claims the product does not back: the vault is one per Quark and
   * admin-only, admins can open every folder, Sheets needs a Quark account,
   * and release builds show remote access as Coming soon (quark #2882), so the
   * tile must say it is not in the app yet.
   */
  it("does not overstate the Vault, Accounts, Spreadsheets or Remote access tiles", () => {
    expect(bodyOf("Vault")).not.toMatch(/only you have/i);
    expect(bodyOf("Vault")).toMatch(/admin/i);
    expect(bodyOf("Accounts and sharing")).not.toMatch(/nothing else is visible/i);
    expect(bodyOf("Accounts and sharing")).toMatch(/admin/i);
    expect(bodyOf("Spreadsheets")).not.toMatch(/no account required/i);
    expect(bodyOf("Remote access")).not.toMatch(/from work|from a trip|phone data/i);
    expect(bodyOf("Remote access")).toMatch(/admin/i);
    expect(bodyOf("Remote access")).toMatch(/not in the app yet/i);
  });

  /* Only an unshipped feature may be drawn as upcoming, and it must say so in words too. */
  it("marks only Remote access as upcoming", () => {
    const upcoming = features.items.filter((feature) => feature.upcoming);
    expect(upcoming.map((feature) => feature.name)).toEqual(["Remote access"]);
    expect(upcoming[0]?.body).toMatch(/not in the app yet/i);
    expect(upcoming[0]?.badge).toBeUndefined();
  });

  it("does not present Chat or Calendar as unavailable or promise what is not built", () => {
    const text = mount(FeatureGrid).text();
    expect(text).not.toMatch(/in review|not in your hands|coming soon/i);
    expect(bodyOf("Chat")).not.toMatch(/keys live on your devices/i);
    expect(bodyOf("Calendar")).not.toMatch(/phone alerts|\.ics|import/i);
  });
});
