<script setup lang="ts">
import { masthead } from "~/data/copy";
</script>

<template>
  <header class="masthead">
    <span class="wordmark">{{ masthead.wordmark }}</span>
    <nav aria-label="Site">
      <a v-for="link in masthead.links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.masthead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 1.75rem var(--gutter);
  box-sizing: border-box;
}

.wordmark {
  color: var(--color-text-strong);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
  font-size: 0.95rem;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}
</style>
