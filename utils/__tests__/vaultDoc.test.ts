// @vitest-environment node

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const root = fileURLToPath(new URL("../..", import.meta.url));
const page = readFileSync(join(root, "content/docs/vault/index.md"), "utf8");
const nerdAt = page.indexOf("\n## Nerd Notes\n");
const prose = nerdAt === -1 ? page : page.slice(0, nerdAt);

describe("vault docs page", () => {
  it("opens in plain language and keeps technical detail under Nerd Notes", () => {
    expect(page).toContain("## How to use it");
    expect(page).toContain("\n## Nerd Notes\n");
    expect(prose).not.toMatch(/\/api\//);
    expect(prose).not.toMatch(/\bcurl\b/);
    expect(prose).not.toMatch(/\bdocker\b/i);
    expect(prose).not.toMatch(/\/var\/lib/);
  });

  it("does not describe the retired household vault", () => {
    expect(prose.toLowerCase()).not.toContain("master password");
    expect(page).not.toContain("coming soon");
    expect(page.toLowerCase()).not.toContain("tailscale");
    expect(page).not.toContain("encrypted on your drive");
    expect(page).not.toContain("protected backup");
    expect(page).not.toContain("recovery password");
  });

  it("names the screens and buttons the app shows for a per-account vault", () => {
    expect(prose).toContain("Set up your vault");
    expect(prose).toContain("Set up vault");
    expect(prose).toContain("Recovery phrase (optional)");
    expect(prose).toContain("Your vault is locked");
    expect(prose).toContain("Lock vault");
    expect(prose).toContain("Start over");
    expect(prose).toContain("Delete vault");
    expect(prose).toContain("Change password");
    expect(prose).toContain("Forgot password?");
    expect(prose).toContain("remote access");
    expect(prose).toContain("anyone who has the file can read");
  });

  it("records the v0.56.2 vault mechanics in Nerd Notes", () => {
    const notes = page.slice(nerdAt);
    expect(notes).toContain("038_drop_household_vault");
    expect(notes).toContain("XChaCha20-Poly1305");
    expect(notes).toContain("vault-wrap");
    expect(notes).toContain("recovery-vault-wrap");
    expect(notes).toContain("DELETE /api/v0/vault");
    expect(notes).toContain("password is required");
    expect(notes).toContain("quark_vault.json");
    expect(notes).toContain("quark_vault.csv");
    expect(notes).toContain("vault_items_backup.db");
  });
});
