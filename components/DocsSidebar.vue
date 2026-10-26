<script setup lang="ts">
import { docsNavLabels } from "~/data/copy";
import { categoryOf, type NavDoc, type NavGroup } from "~/utils/docsNav";

const props = defineProps<{
  groups: readonly NavGroup<NavDoc>[];
  /** The current doc's path, without a trailing slash. */
  currentPath: string;
}>();

const currentCategory = computed(() => categoryOf(props.currentPath));
const currentTitle = computed(
  () =>
    props.groups
      .flatMap((group) => group.categories)
      .find((category) => category.slug === currentCategory.value)?.title
);

/** On narrow screens the menu is a drawer, closed until asked for; wide screens always show it. */
const open = ref(false);
watch(
  () => props.currentPath,
  () => {
    open.value = false;
  }
);

const indexPath = (slug: string): string => `/docs/${slug}`;
const navTitle = (doc: NavDoc): string => doc.navigation?.title || doc.title;
</script>

<template>
  <nav class="sidebar" aria-label="Documentation">
    <button
      type="button"
      class="toggle"
      aria-controls="docs-menu"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span>{{ docsNavLabels.menu }}</span>
      <span v-if="currentTitle" class="toggle-current">{{ currentTitle }}</span>
    </button>

    <div id="docs-menu" class="menu" :class="{ open }">
      <NuxtLink to="/docs" class="all">{{ docsNavLabels.all }}</NuxtLink>

      <div v-for="(group, groupIndex) in groups" :key="group.label ?? groupIndex" class="group">
        <p v-if="group.label" class="group-label">{{ group.label }}</p>
        <ul class="categories">
          <li
            v-for="category in group.categories"
            :key="category.slug"
            class="category"
            :class="{ current: category.slug === currentCategory }"
          >
            <NuxtLink
              v-if="category.docs.some((doc) => doc.path === indexPath(category.slug))"
              :to="indexPath(category.slug)"
              class="category-title"
              :class="{ active: currentPath === indexPath(category.slug) }"
              :aria-current="currentPath === indexPath(category.slug) ? 'page' : undefined"
            >
              {{ category.title }}
            </NuxtLink>
            <span v-else class="category-title">{{ category.title }}</span>

            <ul
              v-if="category.docs.some((doc) => doc.path !== indexPath(category.slug))"
              class="pages"
            >
              <template v-for="doc in category.docs" :key="doc.path">
                <li v-if="doc.path !== indexPath(category.slug)">
                  <NuxtLink
                    :to="doc.path"
                    :class="{ active: doc.path === currentPath }"
                    :aria-current="doc.path === currentPath ? 'page' : undefined"
                  >
                    {{ navTitle(doc) }}
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: calc(var(--header-height) + 2rem);
  max-height: calc(100vh - var(--header-height) - 4rem);
  overflow-y: auto;
  font-size: var(--text-small);
}

.toggle {
  display: none;
}

.all,
.group-label {
  display: block;
  margin: 0 0 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.all {
  margin-bottom: 1.25rem;
  text-decoration: none;
}

.all:hover {
  color: var(--color-text-strong);
}

.group + .group {
  margin-top: 1.25rem;
}

.categories,
.pages {
  margin: 0;
  padding: 0;
  list-style: none;
}

.categories {
  border-left: 1px solid var(--color-border);
}

.category-title,
.pages a {
  display: block;
  margin-left: -1px;
  border-left: 1px solid transparent;
  color: var(--color-text-muted);
  text-decoration: none;
  transition:
    color var(--duration-fast) ease,
    border-color var(--duration-fast) ease;
}

.category-title {
  padding: 0.35rem 0 0.35rem 1rem;
  font-weight: 500;
}

.category.current > .category-title {
  color: var(--color-text-strong);
}

.pages a {
  padding: 0.25rem 0 0.25rem 1.75rem;
}

a.category-title:hover,
.pages a:hover {
  color: var(--color-text-strong);
}

.category-title.active,
.pages a.active {
  border-left-color: var(--color-text-strong);
  color: var(--color-text-strong);
  font-weight: 600;
}

@media (max-width: 860px) {
  .sidebar {
    position: static;
    max-height: none;
    overflow: visible;
  }

  .toggle {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.75rem;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    background: var(--color-surface);
    color: var(--color-text-strong);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .toggle-current {
    color: var(--color-text-muted);
  }

  .menu {
    display: none;
    margin-top: 1rem;
  }

  .menu.open {
    display: block;
  }

  /* Only the current category's pages stay expanded in the drawer. */
  .category:not(.current) > .pages {
    display: none;
  }
}
</style>
