import { describe, expect, it } from "vitest";

import {
  docsBreadcrumbs,
  jsonLdScript,
  softwareApplication,
  techArticle,
  webSite,
} from "../structuredData";

const doc = {
  path: "/docs/start/welcome",
  title: "Welcome",
  description: "Welcome to Quark",
  modified: "2026-11-21T17:21:12Z",
};

describe("softwareApplication", () => {
  const app = softwareApplication("A private home cloud.");

  it("has an @id and points its publisher at AutoButler's Organization", () => {
    expect(app["@type"]).toBe("SoftwareApplication");
    expect(app["@id"]).toBe("https://quark.autobutler.org/#software");
    expect(app.publisher).toEqual({ "@id": "https://autobutler.org/#organization" });
  });

  it("states only true facts: Linux, open license, free, the repo", () => {
    expect(app.operatingSystem).toBe("Linux");
    expect(app.license).toBe("https://github.com/autobutler-org/quark/blob/main/LICENSE");
    expect(app.isAccessibleForFree).toBe(true);
    expect(app.sameAs).toEqual(["https://github.com/autobutler-org/quark"]);
    expect(app.description).toBe("A private home cloud.");
  });

  it("makes no price, rating or review claims", () => {
    expect(app).not.toHaveProperty("offers");
    expect(app).not.toHaveProperty("aggregateRating");
    expect(app).not.toHaveProperty("review");
  });
});

describe("webSite", () => {
  it("names the site and its publisher", () => {
    expect(webSite()).toMatchObject({
      "@type": "WebSite",
      "@id": "https://quark.autobutler.org/#website",
      name: "Quark",
      url: "https://quark.autobutler.org",
      publisher: { "@id": "https://autobutler.org/#organization" },
    });
  });
});

describe("techArticle", () => {
  it("links the doc to the site and the software", () => {
    expect(techArticle(doc)).toMatchObject({
      "@type": "TechArticle",
      headline: "Welcome",
      description: "Welcome to Quark",
      dateModified: "2026-11-21T17:21:12Z",
      url: "https://quark.autobutler.org/docs/start/welcome",
      isPartOf: { "@id": "https://quark.autobutler.org/#website" },
      about: { "@id": "https://quark.autobutler.org/#software" },
    });
  });

  it("leaves out a date it doesn't know instead of guessing", () => {
    expect(techArticle({ ...doc, modified: undefined })).not.toHaveProperty("dateModified");
  });
});

describe("docsBreadcrumbs", () => {
  it("goes Docs → page", () => {
    expect(docsBreadcrumbs(doc).itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Docs", item: "https://quark.autobutler.org/docs" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Welcome",
        item: "https://quark.autobutler.org/docs/start/welcome",
      },
    ]);
  });
});

describe("jsonLdScript", () => {
  it("serializes a node into a JSON-LD script entry", () => {
    const script = jsonLdScript(webSite());
    expect(script.type).toBe("application/ld+json");
    expect(JSON.parse(script.innerHTML)).toEqual(webSite());
  });
});
