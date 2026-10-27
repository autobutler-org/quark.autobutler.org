import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import FeatureGrid from "../FeatureGrid.vue";
import { features, manifesto } from "~/data/copy";

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

  /* Quark v0.56.2 has no beta features, so the app drawer carries no Beta marker. */
  it("does not badge any shipped feature as beta", () => {
    const wrapper = mount(FeatureGrid);
    const badged = wrapper
      .findAll("li")
      .filter((item) => item.find(".badge").exists())
      .map((item) => `${item.find("h3").text()}: ${item.find(".badge").text()}`);
    expect(badged).toEqual([]);
  });

  /*
   * Quark v0.56.2: every account has its own vault, opened with the login
   * password, and an admin cannot open someone else's. Admins can open files,
   * not a vault or a chat they are not in. Remote access ships and
   * stays off until an admin turns it on. It works away from home only in the
   * iPhone and Android apps. Spreadsheets still need an account on the Quark.
   * Never name the remote-access vendor.
   */
  it("states the Vault, Accounts, Spreadsheets and Remote access limits", () => {
    expect(bodyOf("Vault")).toMatch(/own vault/i);
    expect(bodyOf("Vault")).toMatch(/sign in/i);
    expect(bodyOf("Vault")).toMatch(/admin/i);
    expect(bodyOf("Vault")).not.toMatch(/master password/i);
    expect(bodyOf("Vault")).not.toMatch(/one vault per quark/i);
    expect(bodyOf("Vault")).not.toMatch(/on the drive/i);
    expect(bodyOf("Accounts and sharing")).toMatch(/vault/i);
    expect(bodyOf("Accounts and sharing")).toMatch(/chat/i);
    expect(bodyOf("Accounts and sharing")).toMatch(/admin/i);
    expect(bodyOf("Accounts and sharing")).not.toMatch(/open everything/i);
    expect(bodyOf("Accounts and sharing")).not.toMatch(/nothing else is visible/i);
    expect(bodyOf("Spreadsheets")).not.toMatch(/no account required/i);
    expect(bodyOf("Remote access")).toMatch(/admin/i);
    expect(bodyOf("Remote access")).toMatch(/Settings → Network/i);
    expect(bodyOf("Remote access")).toMatch(/iPhone and Android apps/i);
    expect(bodyOf("Remote access")).toMatch(/browser.*home WiFi/i);
    expect(bodyOf("Remote access")).not.toMatch(/not in the app yet|coming soon/i);
    expect(bodyOf("Remote access")).not.toMatch(/tailscale/i);
    expect(manifesto.paragraphs.join("\n")).not.toMatch(/coming soon/i);
    expect(manifesto.paragraphs.join("\n")).not.toMatch(/tailscale/i);
  });

  /* Remote access ships, so no feature tile is drawn as unreleased. */
  it("marks no feature as upcoming", () => {
    expect(features.items.filter((feature) => feature.upcoming)).toEqual([]);
  });

  it("describes the shipped Chat, Calendar, Books, Search, and Trash behavior", () => {
    const text = mount(FeatureGrid).text();
    expect(text).not.toMatch(/in review|not in your hands|coming soon/i);
    expect(bodyOf("Chat")).not.toMatch(/keys live on your devices/i);
    expect(bodyOf("Chat")).not.toMatch(/admin can turn chat off/i);
    expect(bodyOf("Calendar")).not.toMatch(/phone alerts|\.ics|import/i);
    expect(bodyOf("Calendar")).not.toMatch(/admin can turn it off/i);
    expect(bodyOf("Books")).toMatch(/PDF and EPUB/i);
    expect(bodyOf("Books")).toMatch(/built-in storage/i);
    expect(bodyOf("Search")).toMatch(/documents, spreadsheets, and presentations/i);
    expect(bodyOf("Trash")).toMatch(/30 days/i);
  });

  it("does not imply that customer files are available for AI training", () => {
    expect(manifesto.paragraphs.join("\n")).not.toMatch(/train (?:an? )?model|AI training/i);
  });
});
