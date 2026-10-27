// @vitest-environment node

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("../..", import.meta.url));
const page = readFileSync(join(root, "content/docs/help/index.md"), "utf8");
const nerdAt = page.indexOf("\n## Nerd Notes\n");
const prose = nerdAt === -1 ? page : page.slice(0, nerdAt);

describe("help docs page", () => {
  it("opens in plain language and keeps technical detail under Nerd Notes", () => {
    expect(page).toContain("## How to use it");
    expect(page).toContain("\n## Nerd Notes\n");
    expect(prose).not.toMatch(/\/api\//);
    expect(prose).not.toMatch(/\bcurl\b/);
    expect(prose).not.toMatch(/\bdocker\b/i);
    expect(prose).not.toMatch(/\bTLS\b/);
    expect(prose).not.toMatch(/sudo quark install/);
  });

  it("drops the retired vault, the coming-soon remote access, and the vendor name", () => {
    expect(page.toLowerCase()).not.toContain("master password");
    expect(page.toLowerCase()).not.toContain("coming soon");
    expect(page.toLowerCase()).not.toContain("tailscale");
    expect(page.toLowerCase()).not.toContain("headscale");
    expect(page.toLowerCase()).not.toContain("vault is admin-only");
    expect(page.toLowerCase()).not.toContain("vault device disconnected");
    expect(page).not.toContain("the **Features** tab");
  });

  it("describes live remote access and the per-account vault in the app's words", () => {
    expect(prose).toContain("Settings → Network");
    expect(prose).toContain("Set up remote access");
    expect(prose).toContain("Turn on remote access");
    expect(prose).toContain("Start over");
    expect(prose).toContain("That password doesn't unlock your vault.");
    expect(prose).toContain("Delete your vault?");
    expect(prose).toContain("[Calendar](/docs/calendar)");
    expect(prose).toContain("[Books](/docs/books)");
  });
});
