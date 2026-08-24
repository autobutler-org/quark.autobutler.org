<script setup lang="ts">
interface DocSummary {
  path: string;
  title: string;
  navigation?: { title?: string; order?: number };
}

const route = useRoute();

const { data: doc } = await useAsyncData(`doc-${route.path}`, () =>
  queryCollection("docs").path(route.path).first()
);

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Doc not found" });
}

const { data: allDocs } = await useAsyncData("docs-nav", () => queryCollection("docs").all());

const sortedDocs = computed(() =>
  ((allDocs.value ?? []) as unknown as DocSummary[])
    .slice()
    .sort((a, b) => (a.navigation?.order ?? 999) - (b.navigation?.order ?? 999))
);

useSeoMeta({
  title: () => `${doc.value?.title ?? "Docs"} — Quark`,
  description: () => doc.value?.description ?? undefined,
  ogTitle: () => `${doc.value?.title ?? "Docs"} — Quark`,
  ogDescription: () => doc.value?.description ?? undefined,
  ogUrl: () => `https://quark.autobutler.org${route.path}`,
  ogType: "article",
  twitterTitle: () => `${doc.value?.title ?? "Docs"} — Quark`,
  twitterDescription: () => doc.value?.description ?? undefined,
});
</script>

<template>
  <article class="doc">
    <nav class="doc-nav" aria-label="Documentation">
      <NuxtLink to="/docs">All docs</NuxtLink>
      <NuxtLink
        v-for="item in sortedDocs"
        :key="item.path"
        :to="item.path"
        :class="{ current: item.path === route.path }"
      >
        {{ item.navigation?.title || item.title }}
      </NuxtLink>
    </nav>
    <div class="prose">
      <ContentRenderer v-if="doc" :value="doc" />
    </div>
  </article>
</template>

<style scoped>
.doc {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 3rem;
  align-items: start;
}

.doc-nav {
  position: sticky;
  top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.doc-nav a {
  padding: 0.4rem 0.6rem;
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

.doc-nav a:first-child {
  font-weight: 600;
  color: var(--color-text-strong);
  margin-bottom: 0.5rem;
}

.doc-nav a:hover {
  color: var(--color-text-strong);
  background: var(--color-surface-hover);
}

.doc-nav a.current {
  color: var(--color-accent);
  background: var(--color-surface);
}

.prose {
  min-width: 0;
  max-width: var(--prose-width);
  line-height: 1.75;
  color: var(--color-text);
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3) {
  color: var(--color-text-strong);
  line-height: 1.3;
}

.prose :deep(h1) {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 1.5rem;
}

.prose :deep(h2) {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
}

.prose :deep(h3) {
  font-size: 1.15rem;
  margin: 2rem 0 0.75rem;
}

.prose :deep(p) {
  margin: 0 0 1.25rem;
}

.prose :deep(a) {
  color: var(--color-accent);
  text-decoration: none;
}

.prose :deep(a:hover) {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin: 0 0 1.25rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin: 0.35rem 0;
}

.prose :deep(blockquote) {
  margin: 0 0 1.25rem;
  padding: 0.75rem 1rem;
  border-left: 3px solid var(--color-accent-border);
  background: var(--color-surface-subtle);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  color: var(--color-text-muted);
}

.prose :deep(hr) {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid var(--color-border-soft);
}

.prose :deep(table) {
  display: block;
  overflow-x: auto;
  border-collapse: collapse;
  margin: 0 0 1.25rem;
  width: 100%;
}

.prose :deep(th),
.prose :deep(td) {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  text-align: left;
}

.prose :deep(code) {
  font-size: 0.9em;
  padding: 0.15em 0.4em;
  border-radius: 4px;
  background: var(--color-surface-strong);
}

.prose :deep(pre) {
  margin: 0 0 1.25rem;
  padding: 1rem;
  border-radius: var(--radius-md);
  background: var(--color-surface-strong);
  overflow-x: auto;
}

.prose :deep(pre code) {
  padding: 0;
  background: none;
}

.prose :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .doc {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .doc-nav {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
