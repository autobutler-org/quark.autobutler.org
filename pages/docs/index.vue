<script setup lang="ts">
import { docsIndex } from "~/data/copy";
import { groupDocs } from "~/utils/docsNav";
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

/** The same app-menu categories, in the same order, as the sidebar on every doc page. */
const groups = computed(() => groupDocs((docs.value ?? []) as unknown as SearchableDoc[]));

/** Search ranks ties in sidebar order, so results read like the menu. */
const sortedDocs = computed(() =>
  groups.value.flatMap((group) => group.categories.flatMap((category) => category.docs))
);

const indexPath = (slug: string): string => `/docs/${slug}`;

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
      <section
        v-for="(group, groupIndex) in groups"
        :key="group.label ?? groupIndex"
        class="group"
        :aria-label="group.label"
      >
        <h2 v-if="group.label" class="section-heading">{{ group.label }}</h2>
        <div class="grid">
          <section v-for="category in group.categories" :key="category.slug" class="category">
            <h3>
              <NuxtLink
                v-if="category.docs.some((doc) => doc.path === indexPath(category.slug))"
                :to="indexPath(category.slug)"
              >
                {{ category.title }}
              </NuxtLink>
              <template v-else>{{ category.title }}</template>
            </h3>
            <ul class="category-docs">
              <li v-for="doc in category.docs" :key="doc.path">
                <NuxtLink :to="doc.path" class="row">
                  <span class="row-title">{{ doc.navigation?.title || doc.title }}</span>
                  <span class="row-desc">{{ doc.description }}</span>
                </NuxtLink>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </template>
  </section>
</template>

<style scoped>
.docs-index {
  width: 100%;
  max-width: var(--content-width);
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
}

.lede {
  max-width: var(--lede-width);
  margin: 0 0 3rem;
  font-size: var(--text-lede);
  color: var(--color-text-muted);
}

.search {
  max-width: var(--prose-width);
  margin: 0 0 4rem;
}

.search-label {
  display: block;
  margin-bottom: 0.6rem;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.search-field {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: stretch;
}

.search-input {
  flex: 1 1 16rem;
  min-width: 0;
  height: 3.25rem;
  padding: 0 1rem;
  box-sizing: border-box;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text-strong);
  font: inherit;
  font-size: 1.0625rem;
  transition: border-color var(--duration-fast) ease;
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

.search-input:focus {
  border-color: var(--color-text-muted);
}

.clear {
  height: 3.25rem;
  padding: 0 1.1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text-strong);
  font: inherit;
  cursor: pointer;
  transition: border-color var(--duration-fast) ease;
}

.clear:hover {
  border-color: var(--color-text-muted);
}

.count {
  min-height: 1.2em;
  margin: 0.75rem 0 0;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  color: var(--color-text-muted);
}

.section-heading {
  margin: 0 0 1.5rem;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  font-weight: 400;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: 0.75rem;
  margin-bottom: 4.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  color: inherit;
  text-decoration: none;
  box-shadow: var(--shadow-none);
  transition:
    box-shadow var(--duration-fast) ease,
    border-color var(--duration-fast) ease;
}

.card:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-hover);
}

.card h3 {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.card p {
  margin: 0;
  font-size: var(--text-small);
  line-height: 1.55;
  color: var(--color-text-muted);
}

.card .excerpt {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
}

.excerpt-heading {
  display: block;
  margin-bottom: 0.3rem;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  color: var(--color-text-muted);
}

.excerpt mark {
  padding: 0 0.15em;
  border-radius: 2px;
  background: var(--pastel-yellow);
  color: var(--pastel-yellow-ink);
}

.group + .group {
  margin-top: 1rem;
}

.category {
  padding: 1.5rem 1.75rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.category h3 {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.category h3 a {
  color: inherit;
  text-decoration: none;
}

.category h3 a:hover {
  text-decoration: underline;
  text-decoration-color: var(--color-border-strong);
  text-underline-offset: 0.2em;
}

.category-docs {
  margin: 0;
  padding: 0;
  list-style: none;
}

.category-docs li + li {
  border-top: 1px solid var(--color-border);
}

.row {
  display: grid;
  gap: 0.2rem;
  padding: 0.75rem 0;
  color: inherit;
  text-decoration: none;
}

.row-title {
  font-weight: 500;
  color: var(--color-text-strong);
}

.row:hover .row-title {
  text-decoration: underline;
  text-decoration-color: var(--color-border-strong);
  text-underline-offset: 0.2em;
}

.row-desc {
  min-width: 0;
  font-size: var(--text-small);
  line-height: 1.55;
  color: var(--color-text-muted);
}

.empty {
  margin: 0 0 3rem;
  color: var(--color-text-muted);
}
</style>
