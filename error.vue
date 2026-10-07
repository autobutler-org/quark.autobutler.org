<script setup lang="ts">
import type { NuxtError } from "#app";

import SiteShell from "./components/SiteShell.vue";
import { errorPage } from "./data/copy";

const props = defineProps<{ readonly error: NuxtError }>();

const isNotFound = computed(() => props.error.statusCode === 404);
const heading = computed(() =>
  isNotFound.value ? errorPage.notFoundHeading : errorPage.errorHeading
);

useSeoMeta({ title: () => `${heading.value} — Quark` });
</script>

<template>
  <SiteShell>
    <main class="error">
      <p class="status">{{ error.statusCode }}</p>
      <h1>{{ heading }}</h1>
      <p class="body">{{ isNotFound ? errorPage.notFoundBody : errorPage.errorBody }}</p>
      <!-- Plain links force a full page load, which clears the error state. -->
      <nav class="links" aria-label="Error recovery">
        <a v-for="link in errorPage.links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
    </main>
  </SiteShell>
</template>

<style scoped>
.error {
  width: 100%;
  max-width: var(--prose-width);
  margin: 0 auto;
  padding: 5rem var(--gutter) var(--section-gap);
  box-sizing: border-box;
}

.status {
  margin: 0 0 0.5rem;
  font-weight: 600;
  color: var(--color-accent);
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

.body {
  margin: 0 0 2rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.links a {
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-strong);
  text-decoration: none;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.links a:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
}
</style>
