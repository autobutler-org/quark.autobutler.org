<script setup lang="ts">
import { docsIndex, docsPreviewCount } from "~/data/copy";
import { searchDocs, searchTerms, sectionsFromBody, type SearchableDoc } from "~/utils/docsSearch";

const { data: docs } = await useAsyncData("docs-index", () =>
  queryCollection("docs").select("path", "title", "description", "navigation").all()
);

/**
 * Each doc's body as plain text, split by heading. The handler runs during
 * `nuxt generate`, so only the extracted text ships in the page payload and
 * searching it costs no request and sends nothing anywhere.
 */
const { data: sections } = await useAsyncData("docs-search-sections", async () => {
  const bodies = await queryCollection("docs").select("path", "body").all();
  return bodies.flatMap((doc) => sectionsFromBody(doc.path, doc.body));
});

const sortedDocs = computed(() =>
  ((docs.value ?? []) as unknown as SearchableDoc[])
    .slice()
    .sort((a, b) => (a.navigation?.order ?? 999) - (b.navigation?.order ?? 999))
);

/** The first few by `navigation.order` — a curated set is still an open decision. */
const previewDocs = computed(() => sortedDocs.value.slice(0, docsPreviewCount));

const query = ref("");
const isSearching = computed(() => searchTerms(query.value).length > 0);
const matchingDocs = computed(() =>
  searchDocs(sortedDocs.value, sections.value ?? [], query.value)
);

const clearSearch = () => {
  query.value = "";
};

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

    <div class="search">
      <label class="search-label" for="docs-search">{{ docsIndex.searchLabel }}</label>
      <div class="search-field">
        <input
          id="docs-search"
          v-model="query"
          type="search"
          class="search-input"
          :placeholder="docsIndex.searchPlaceholder"
          autocomplete="off"
        />
        <button v-if="isSearching" type="button" class="clear" @click="clearSearch">
          {{ docsIndex.clearLabel }}
        </button>
      </div>
      <p class="count" role="status" aria-live="polite">
        {{ isSearching ? docsIndex.resultCount(matchingDocs.length) : "" }}
      </p>
    </div>

    <template v-if="isSearching">
      <h2 class="section-heading">{{ docsIndex.resultsHeading }}</h2>
      <p v-if="matchingDocs.length === 0" class="empty">{{ docsIndex.noResults }}</p>
      <div v-else class="grid">
        <NuxtLink
          v-for="{ doc, excerpt } in matchingDocs"
          :key="doc.path"
          :to="excerpt?.to ?? doc.path"
          class="card"
        >
          <h3>{{ doc.navigation?.title || doc.title }}</h3>
          <p>{{ doc.description }}</p>
          <p v-if="excerpt" class="excerpt">
            <span v-if="excerpt.heading" class="excerpt-heading">{{ excerpt.heading }}</span>
            <template v-for="(part, index) in excerpt.parts" :key="index">
              <mark v-if="part.match">{{ part.text }}</mark>
              <template v-else>{{ part.text }}</template>
            </template>
          </p>
        </NuxtLink>
      </div>
    </template>

    <template v-else>
      <h2 class="section-heading">{{ docsIndex.previewHeading }}</h2>
      <div class="grid">
        <NuxtLink v-for="doc in previewDocs" :key="doc.path" :to="doc.path" class="card">
          <h3>{{ doc.navigation?.title || doc.title }}</h3>
          <p>{{ doc.description }}</p>
        </NuxtLink>
      </div>

      <h2 class="section-heading">{{ docsIndex.allHeading }}</h2>
      <ul class="all-docs">
        <li v-for="doc in sortedDocs" :key="doc.path">
          <NuxtLink :to="doc.path" class="row">
            <span class="row-title">{{ doc.navigation?.title || doc.title }}</span>
            <span class="row-desc">{{ doc.description }}</span>
          </NuxtLink>
        </li>
      </ul>
    </template>
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
  margin: 0 0 2rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.search {
  margin: 0 0 2.5rem;
}

.search-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.search-field {
  display: flex;
  gap: 0.5rem;
  align-items: stretch;
  flex-wrap: wrap;
}

.search-input {
  flex: 1 1 16rem;
  min-width: 0;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: inherit;
  font: inherit;
}

.search-input::placeholder {
  color: var(--color-text-subtle);
}

.search-input:focus-visible {
  border-color: var(--color-accent-border);
}

.clear {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font: inherit;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.clear:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
}

.count {
  margin: 0.6rem 0 0;
  min-height: 1.2em;
  font-size: 0.9rem;
  color: var(--color-text-subtle);
}

.section-heading {
  margin: 0 0 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
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

.card h3 {
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

.card .excerpt {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.9rem;
  color: var(--color-text-subtle);
}

.excerpt-heading {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
}

.excerpt mark {
  background: var(--color-accent-glow);
  color: var(--color-text-strong);
}

.all-docs {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  align-items: baseline;
  padding: 0.9rem 0.25rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  transition: background var(--transition-fast);
}

.row:hover {
  background: var(--color-surface-hover);
}

.row-title {
  flex: 0 0 auto;
  font-weight: 600;
  color: var(--color-text-strong);
}

.row-desc {
  flex: 1 1 14rem;
  min-width: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.empty {
  margin: 0 0 3rem;
  color: var(--color-text-muted);
}
</style>
