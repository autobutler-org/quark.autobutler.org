<script setup lang="ts">
import { docsIndex } from "~/data/copy";

interface DocSummary {
  path: string;
  title: string;
  description?: string;
  navigation?: { title?: string; order?: number };
}

const { data: docs } = await useAsyncData("docs-index", () => queryCollection("docs").all());

const sortedDocs = computed(() =>
  ((docs.value ?? []) as unknown as DocSummary[])
    .slice()
    .sort((a, b) => (a.navigation?.order ?? 999) - (b.navigation?.order ?? 999))
);

useSeoMeta({
  title: `${docsIndex.heading} — Quark`,
  description: docsIndex.lede,
  ogTitle: `${docsIndex.heading} — Quark`,
  ogDescription: docsIndex.lede,
  ogUrl: "https://quark.autobutler.org/docs",
  ogType: "website",
  twitterTitle: `${docsIndex.heading} — Quark`,
  twitterDescription: docsIndex.lede,
});
</script>

<template>
  <section class="docs-index">
    <h1>{{ docsIndex.heading }}</h1>
    <p class="lede">{{ docsIndex.lede }}</p>
    <div class="grid">
      <NuxtLink v-for="doc in sortedDocs" :key="doc.path" :to="doc.path" class="card">
        <h2>{{ doc.navigation?.title || doc.title }}</h2>
        <p>{{ doc.description }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.docs-index {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
}

h1 {
  margin: 0 0 var(--gutter);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lede {
  max-width: var(--lede-width);
  margin: 0 0 3rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: 1.25rem;
}

.card {
  display: block;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}

.card:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
  transform: translateY(-2px);
}

.card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}
</style>
