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
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
}

h1 {
  margin: 0 0 2rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
