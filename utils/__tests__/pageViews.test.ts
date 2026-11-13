import { describe, expect, it } from "vitest";

import { pageViewUrl, shouldCount } from "~/utils/pageViews";

const production = {
  hostname: "quark.autobutler.org",
  doNotTrack: null,
  globalPrivacyControl: undefined,
};

describe("shouldCount", () => {
  it("counts on the production host", () => {
    expect(shouldCount(production)).toBe(true);
  });

  it("does not count on localhost or a preview host", () => {
    expect(shouldCount({ ...production, hostname: "localhost" })).toBe(false);
    expect(shouldCount({ ...production, hostname: "autobutler-org.github.io" })).toBe(false);
  });

  it("does not count when the visitor sends Do Not Track", () => {
    expect(shouldCount({ ...production, doNotTrack: "1" })).toBe(false);
  });

  it("does not count when the visitor sends Global Privacy Control", () => {
    expect(shouldCount({ ...production, globalPrivacyControl: true })).toBe(false);
  });
});

describe("pageViewUrl", () => {
  it("sends the host and path and nothing else", () => {
    const url = new URL(
      pageViewUrl({
        host: "quark.autobutler.org",
        path: "/docs/files",
        referrer: "",
      })
    );
    expect(url.origin).toBe("https://goatcounter.cloud.autobutler.org");
    expect([...url.searchParams.keys()]).toEqual(["p"]);
    expect(url.searchParams.get("p")).toBe("quark.autobutler.org/docs/files");
  });

  it("sends an outside referrer without its query string", () => {
    const url = new URL(
      pageViewUrl({
        host: "quark.autobutler.org",
        path: "/",
        referrer: "https://news.ycombinator.com/item?id=1",
      })
    );
    expect(url.searchParams.get("r")).toBe("https://news.ycombinator.com/item");
  });

  it("drops a referrer from the same site", () => {
    const url = new URL(
      pageViewUrl({
        host: "quark.autobutler.org",
        path: "/docs",
        referrer: "https://quark.autobutler.org/",
      })
    );
    expect(url.searchParams.has("r")).toBe(false);
  });
});
