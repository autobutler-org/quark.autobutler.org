import { describe, expect, it } from "vitest";

import { isoDay, updatedLabel } from "../docDates";

describe("updatedLabel", () => {
  it("spells the date out the American way", () => {
    expect(updatedLabel("2026-11-21T17:21:12Z")).toBe("Updated November 21, 2026");
  });

  it("uses the UTC day, so the label doesn't depend on the build machine", () => {
    expect(updatedLabel("2026-01-01T23:30:00-05:00")).toBe("Updated January 2, 2026");
  });

  it("shows nothing for a missing or invalid date", () => {
    expect(updatedLabel(undefined)).toBeUndefined();
    expect(updatedLabel("not a date")).toBeUndefined();
  });
});

describe("isoDay", () => {
  it("keeps only the UTC calendar day", () => {
    expect(isoDay("2026-11-21T17:21:12-08:00")).toBe("2026-11-22");
    expect(isoDay(undefined)).toBeUndefined();
  });
});
