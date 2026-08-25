import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NewsletterSignup from "../NewsletterSignup.vue";
import { newsletter } from "~/data/copy";

describe("NewsletterSignup", () => {
  it("posts to the Mailchimp list in a new tab", () => {
    const wrapper = mount(NewsletterSignup);
    const form = wrapper.get("form");
    expect(form.attributes("action")).toBe(newsletter.action);
    expect(form.attributes("method")).toBe("post");
    expect(form.attributes("target")).toBe("_blank");
  });

  it("requires an email address and labels the field", () => {
    const wrapper = mount(NewsletterSignup);
    const email = wrapper.get('input[type="email"]');
    expect(email.attributes("required")).toBeDefined();
    expect(wrapper.get("label").attributes("for")).toBe(email.attributes("id"));
  });

  it("keeps the anti-bot honeypot field out of the visible form", () => {
    const wrapper = mount(NewsletterSignup);
    const honeypot = wrapper.get(`input[name="${newsletter.honeypotName}"]`);
    expect(honeypot.attributes("tabindex")).toBe("-1");
  });

  it("does not load any remote Mailchimp script or stylesheet", () => {
    const wrapper = mount(NewsletterSignup);
    expect(wrapper.html()).not.toContain("mailchimp.com");
  });

  it("shows its own heading by default, for embedding on the landing page", () => {
    const wrapper = mount(NewsletterSignup);
    expect(wrapper.find("h2").exists()).toBe(true);
  });

  it("can hide its heading, for a page that provides its own", () => {
    const wrapper = mount(NewsletterSignup, { props: { showHeading: false } });
    expect(wrapper.find("h2").exists()).toBe(false);
    expect(wrapper.get("section").attributes("aria-label")).toBe(newsletter.heading);
  });
});
