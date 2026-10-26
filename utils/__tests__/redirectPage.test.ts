import { describe, expect, it } from "vitest";

import { redirectPage } from "../redirectPage";

describe("redirectPage", () => {
  const page = redirectPage("/docs/users");

  it("refreshes straight to the new URL", () => {
    expect(page).toContain('<meta http-equiv="refresh" content="0; url=/docs/users">');
  });

  it("names the new URL as canonical", () => {
    expect(page).toContain('<link rel="canonical" href="https://quark.autobutler.org/docs/users">');
  });

  it("links the new URL for clients that ignore the refresh", () => {
    expect(page).toContain('<a href="/docs/users">');
  });
});
