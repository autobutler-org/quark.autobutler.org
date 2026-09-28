<script setup lang="ts">
import { docsNavFolders } from "~/data/docsNav";
import DocsSoftLaunchChip from "~/components/DocsSoftLaunchChip.vue";

defineProps<{
  currentPath: string;
}>();

const route = useRoute();
const nerdOpen = ref(false);

watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/docs/nerd-notes")) nerdOpen.value = true;
  },
  { immediate: true }
);
</script>

<template>
  <nav class="sidebar" aria-label="Documentation">
    <NuxtLink to="/docs" class="home" :class="{ current: currentPath === '/docs' }">
      All docs
    </NuxtLink>

    <div
      v-for="folder in docsNavFolders"
      :key="folder.id"
      class="folder"
      :class="{ demoted: folder.demoted }"
    >
      <template v-if="folder.demoted">
        <button
          type="button"
          class="folder-toggle"
          :aria-expanded="nerdOpen"
          @click="nerdOpen = !nerdOpen"
        >
          <span class="folder-title">{{ folder.title }}</span>
          <span class="chevron" aria-hidden="true">{{ nerdOpen ? "▾" : "▸" }}</span>
        </button>
        <ul v-show="nerdOpen" class="pages">
          <li v-for="page in folder.pages" :key="page.path">
            <NuxtLink :to="page.path" :class="{ current: page.path === currentPath }" class="page">
              <span class="page-title">{{ page.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template v-else>
        <p class="folder-title">{{ folder.title }}</p>
        <ul class="pages">
          <li v-for="page in folder.pages" :key="page.path">
            <NuxtLink :to="page.path" :class="{ current: page.path === currentPath }" class="page">
              <span class="page-title">{{ page.title }}</span>
              <DocsSoftLaunchChip v-if="page.softLaunch" kind="soft-launch" />
              <DocsSoftLaunchChip v-else-if="page.comingSoon" kind="coming-soon" />
            </NuxtLink>
          </li>
        </ul>
      </template>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  background: var(--color-surface-subtle);
  border: 1px solid var(--color-border);
}

.home {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-strong);
  text-decoration: none;
}

.home:hover,
.home.current {
  background: var(--color-surface-hover);
  color: var(--color-accent);
}

.folder-title {
  margin: 0 0 0.45rem;
  padding: 0 0.6rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

.folder.demoted .folder-title {
  color: var(--color-text-faint);
}

.folder-toggle {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0.25rem 0.6rem;
  border: none;
  border-radius: var(--radius-md);
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-align: left;
}

.folder-toggle:hover {
  background: var(--color-surface-hover);
}

.folder-toggle .folder-title {
  margin: 0;
  padding: 0;
}

.chevron {
  font-size: 0.75rem;
  color: var(--color-text-faint);
}

.pages {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  padding: 0.45rem 0.6rem 0.45rem 0.85rem;
  margin-left: 0.15rem;
  border-radius: var(--radius-md);
  border-left: 2px solid transparent;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.35;
  min-height: 2.5rem;
  box-sizing: border-box;
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.page:hover {
  color: var(--color-text-strong);
  background: var(--color-surface-hover);
}

.page.current {
  color: var(--color-accent);
  background: var(--color-accent-glow);
  border-left-color: var(--color-accent);
  font-weight: 600;
}

.demoted .page {
  color: var(--color-text-faint);
  font-size: 0.88rem;
}

.demoted .page.current {
  color: var(--color-accent);
}

.page-title {
  flex: 1 1 auto;
  min-width: 0;
}
</style>
