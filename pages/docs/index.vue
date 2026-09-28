<script setup lang="ts">
import DocsSoftLaunchChip from "~/components/DocsSoftLaunchChip.vue";
import { docsIndex } from "~/data/copy";
import { docsSecondaryLinks, docsTaskCards, isDocsTaskPath } from "~/data/docsNav";
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

const query = ref("");
const searchInput = ref<HTMLInputElement | null>(null);
const isSearching = computed(() => searchTerms(query.value).length > 0);
const matchingDocs = computed(() =>
  searchDocs(sortedDocs.value, sections.value ?? [], query.value, {
    boostPath: isDocsTaskPath,
  })
);

const clearSearch = () => {
  query.value = "";
};

const onGlobalKeydown = (event: KeyboardEvent) => {
  if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
  const target = event.target as HTMLElement | null;
  if (
    target &&
    (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)
  ) {
    return;
  }
  event.preventDefault();
  searchInput.value?.focus();
};

onMounted(() => {
  window.addEventListener("keydown", onGlobalKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onGlobalKeydown);
});

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
          ref="searchInput"
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
      <p class="hint">{{ docsIndex.searchHint }}</p>
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
      <h2 class="section-heading">{{ docsIndex.tasksHeading }}</h2>
      <div class="grid tasks">
        <NuxtLink
          v-for="card in docsTaskCards"
          :key="card.path"
          :to="card.path"
          class="card task-card"
          :class="{ muted: card.comingSoon }"
        >
          <div class="card-top">
            <h3>{{ card.title }}</h3>
            <DocsSoftLaunchChip v-if="card.softLaunch" kind="soft-launch" />
            <DocsSoftLaunchChip v-else-if="card.comingSoon" kind="coming-soon" />
          </div>
          <p>{{ card.outcome }}</p>
        </NuxtLink>
      </div>

      <h2 class="section-heading secondary-heading">{{ docsIndex.secondaryHeading }}</h2>
      <div class="secondary">
        <NuxtLink
          v-for="link in docsSecondaryLinks"
          :key="link.path"
          :to="link.path"
          class="secondary-link"
        >
          <span class="secondary-title">{{ link.title }}</span>
          <span class="secondary-outcome">{{ link.outcome }}</span>
        </NuxtLink>
      </div>
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
  font-size: clamp(2rem, 5vw, 2.75rem);
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
  line-height: 1.65;
  color: var(--color-text-muted);
}

.search {
  margin: 0 0 2.75rem;
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
  min-height: 2.75rem;
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: inherit;
  font: inherit;
  font-size: 1.05rem;
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

.hint {
  margin: 0.55rem 0 0;
  font-size: 0.85rem;
  color: var(--color-text-faint);
}

.count {
  margin: 0.4rem 0 0;
  min-height: 1.2em;
  font-size: 0.9rem;
  color: var(--color-text-subtle);
}

.section-heading {
  margin: 0 0 1.35rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.secondary-heading {
  margin-top: 0.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
  gap: 1.35rem;
  margin-bottom: 3rem;
}

.tasks {
  margin-bottom: 3.25rem;
}

.card {
  display: block;
  padding: 1.65rem 1.5rem;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: inherit;
  min-height: 7.5rem;
  box-sizing: border-box;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.card:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.card.muted {
  opacity: 0.85;
}

.card-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.65rem;
  margin-bottom: 0.65rem;
}

.card h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.55;
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

.secondary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.secondary-link {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface-subtle);
  text-decoration: none;
  color: inherit;
  min-height: 2.75rem;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.secondary-link:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
}

.secondary-title {
  font-weight: 600;
  color: var(--color-text-strong);
}

.secondary-outcome {
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--color-text-muted);
}

.empty {
  margin: 0 0 3rem;
  color: var(--color-text-muted);
}
</style>
