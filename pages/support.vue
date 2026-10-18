<script setup lang="ts">
import BugReportForm from "~/components/BugReportForm.vue";
import HelpLinks from "~/components/HelpLinks.vue";
import { support } from "~/data/copy";

useSeoMeta({
  title: `${support.heading} — Quark`,
  description: support.helpIntro,
  ogTitle: `${support.heading} — Quark`,
  ogDescription: support.helpIntro,
  ogUrl: "https://quark.autobutler.org/support",
  ogType: "website",
  twitterTitle: `${support.heading} — Quark`,
  twitterDescription: support.helpIntro,
});
</script>

<template>
  <section class="page">
    <h1>{{ support.heading }}</h1>
    <HelpLinks />
    <BugReportForm />
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
  margin: 0 0 3rem;
  font-family: var(--font-serif);
  font-size: var(--text-h1);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-strong);
}
</style>
