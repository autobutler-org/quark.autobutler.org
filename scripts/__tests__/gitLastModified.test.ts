// @vitest-environment node

import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { gitLastModified } from "../gitLastModified";

const root = fileURLToPath(new URL("../..", import.meta.url));

describe("gitLastModified", () => {
  it("returns the ISO date of a committed file's last commit", () => {
    expect(gitLastModified(`${root}package.json`)).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
  });

  it("returns undefined for a file git doesn't know", () => {
    expect(gitLastModified(`${root}no-such-file.md`)).toBeUndefined();
  });
});
