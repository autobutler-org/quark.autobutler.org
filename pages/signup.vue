<script setup lang="ts">
import NewsletterSignup from "~/components/NewsletterSignup.vue";
import { signup } from "~/data/copy";

useSeoMeta({
  title: `${signup.heading} — Quark`,
  description: signup.intro,
  ogTitle: `${signup.heading} — Quark`,
  ogDescription: signup.intro,
  ogUrl: "https://quark.autobutler.org/signup",
  ogType: "website",
  twitterTitle: `${signup.heading} — Quark`,
  twitterDescription: signup.intro,
});
</script>

<template>
  <section class="page">
    <h1>{{ signup.heading }}</h1>
    <p class="intro">{{ signup.intro }}</p>

    <NewsletterSignup :show-heading="false" />

    <div class="launch">
      <p class="badge">
        <strong>{{ signup.launch.badge }}</strong>
      </p>
      <p>{{ signup.launch.body }}</p>
    </div>
  </section>
</template>

<style scoped>
.page {
  width: 100%;
  max-width: var(--prose-width);
  margin: 0 auto;
  padding: clamp(4rem, 9vw, 7rem) var(--gutter) var(--section-gap);
  box-sizing: border-box;
}

h1 {
  margin: 0 0 1.25rem;
  font-family: var(--font-serif);
  font-size: var(--text-h1);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-strong);
  text-wrap: balance;
}

.intro {
  max-width: var(--lede-width);
  margin: 0 0 2.5rem;
  font-size: var(--text-lede);
  color: var(--color-text-muted);
  text-wrap: pretty;
}

.launch {
  margin: 2.5rem 0 0;
  padding-top: 1.75rem;
  border-top: 1px solid var(--color-border-strong);
}

.launch p {
  margin: 0;
  color: var(--color-text);
}

.launch .badge {
  margin-bottom: 0.9rem;
}

.badge strong {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-pill);
  background: var(--pastel-blue);
  color: var(--pastel-blue-ink);
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}
</style>
