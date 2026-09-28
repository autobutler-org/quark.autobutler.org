<script setup lang="ts">
import DocsSidebar from "~/components/DocsSidebar.vue";

const route = useRoute();

const { data: doc } = await useAsyncData(`doc-${route.path}`, () =>
  queryCollection("docs").path(route.path).first()
);

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Doc not found" });
}

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
  <div class="doc-shell">
    <aside class="doc-aside">
      <DocsSidebar :current-path="route.path" />
    </aside>
    <article class="prose">
      <ContentRenderer v-if="doc" :value="doc" />
    </article>
  </div>
</template>

<style scoped>
.doc-shell {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 17rem minmax(0, 1fr);
  gap: 2.5rem;
  align-items: start;
}

.doc-aside {
  position: sticky;
  top: 5rem;
  max-height: calc(100vh - 6rem);
  overflow-y: auto;
}

.prose {
  min-width: 0;
  max-width: var(--prose-width);
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--color-text);
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3) {
  color: var(--color-text-strong);
  line-height: 1.3;
}

.prose :deep(h1) {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin: 0 0 1.5rem;
}

.prose :deep(h2) {
  font-size: 1.35rem;
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
  margin: 0.4rem 0;
}

.prose :deep(blockquote) {
  margin: 0 0 1.25rem;
  padding: 0.85rem 1.1rem;
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
  box-shadow: var(--shadow-card);
}

@media (max-width: 768px) {
  .doc-shell {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-top: 4rem;
  }

  .doc-aside {
    position: static;
    max-height: none;
    overflow: visible;
  }
}
</style>
