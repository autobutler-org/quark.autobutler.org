// @vitest-environment node

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("../..", import.meta.url));
const page = readFileSync(join(root, "content/docs/users/index.md"), "utf8");
const nerdAt = page.indexOf("\n## Nerd Notes\n");
const prose = nerdAt === -1 ? page : page.slice(0, nerdAt);

describe("users and sharing docs page", () => {
  it("opens in plain language and keeps technical detail under Nerd Notes", () => {
    expect(page).toContain("## How to use it");
    expect(page).toContain("\n## Nerd Notes\n");
    expect(page).toContain("\n## Profile picture\n");
    expect(page).toContain("\n## Turning off and removing accounts\n");
    expect(prose).not.toMatch(/\/api\//);
    expect(prose).not.toMatch(/\bcurl\b/);
    expect(prose).not.toMatch(/\bdocker\b/i);
    expect(prose).not.toMatch(/users\/</);
    expect(prose).not.toMatch(/groups\/</);
  });

  it("drops the claims that v0.56 no longer supports", () => {
    expect(prose.toLowerCase()).not.toContain("one vault");
    expect(prose.toLowerCase()).not.toContain("shared by its admins");
    expect(prose.toLowerCase()).not.toContain("chat beta");
    expect(prose.toLowerCase()).not.toContain("in the chat beta");
    expect(prose).not.toContain("turn betas on and off");
    expect(prose).not.toContain("other sessions stay signed in");
    expect(prose).not.toContain("Your other sessions stay signed in");
    expect(page.toLowerCase()).not.toContain("tailscale");
    expect(page.toLowerCase()).not.toContain("coming soon");
  });

  it("states the account rules the app actually shows", () => {
    expect(prose).toContain("Every other place your account is signed in is signed out");
    expect(prose).toContain("Set up remote access");
    expect(prose).toContain("Turn on remote access");
    expect(prose).toContain("Settings → Network");
    expect(prose).toContain(
      "There is no second password, and there is no vault shared by the household."
    );
    expect(prose).toContain("An admin cannot open another person's vault.");
    expect(prose).toContain("Nothing is in beta");
    expect(prose).toContain("Need an account? Request one");
    expect(prose).toContain(
      "This Quark needs at least one admin. Make someone else an admin first."
    );
    expect(prose).toContain("Only the owner or an admin can change sharing.");
    expect(prose).toContain("The vault is deleted with the account");
  });
});
