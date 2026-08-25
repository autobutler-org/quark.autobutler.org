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
        🚀 <strong>{{ signup.launch.badge }}</strong>
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
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
  text-align: center;
}

h1 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro {
  max-width: var(--lede-width);
  margin: 0 auto 2.5rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.launch {
  max-width: 32rem;
  margin: 2rem auto 0;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--color-accent-glow);
  border: 1px solid var(--color-accent-border);
}

.launch p {
  margin: 0.4rem 0;
  color: var(--color-text-bright);
}

.badge strong {
  color: var(--color-accent);
}
</style>
