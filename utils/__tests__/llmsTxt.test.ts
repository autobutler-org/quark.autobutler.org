import { describe, expect, it } from "vitest";

import { KEY_DOCS, llmsTxt } from "../llmsTxt";

const docs = [
  ...KEY_DOCS.map((path) => ({ path, title: `Title ${path}`, description: `About ${path}` })),
  { path: "/docs/photos", title: "Photos", description: "Your photo library" },
];

describe("llmsTxt", () => {
  const out = llmsTxt(docs);

  it("follows the llmstxt.org shape: H1, blockquote, sections of links", () => {
    expect(out.startsWith("# Quark\n\n> ")).toBe(true);
    expect(out).toContain("\n## Start here\n");
    expect(out).toContain("\n## Docs\n");
    expect(out).toContain("\n## Company\n");
  });

  it("links home, every key doc, support, signup, and AutoButler", () => {
    expect(out).toContain("- [Home](https://quark.autobutler.org/)");
    for (const path of KEY_DOCS) {
      expect(out).toContain(
        `- [Title ${path}](https://quark.autobutler.org${path}): About ${path}`
      );
    }
    expect(out).toContain("](https://quark.autobutler.org/support)");
    expect(out).toContain("](https://quark.autobutler.org/signup)");
    expect(out).toContain("- [AutoButler](https://autobutler.org)");
  });

  it("lists the remaining docs once, under Docs", () => {
    expect(out).toContain(
      "- [Photos](https://quark.autobutler.org/docs/photos): Your photo library"
    );
    expect(out.split("/docs/start/welcome)").length).toBe(2);
  });

  it("says nothing about AI features or the remote access vendor", () => {
    expect(out).not.toMatch(/\bAI\b|tailscale|headscale/i);
  });
});
