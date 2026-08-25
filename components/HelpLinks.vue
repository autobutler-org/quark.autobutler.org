<script setup lang="ts">
import { support } from "~/data/copy";
</script>

<template>
  <div class="help-links">
    <h2>{{ support.helpHeading }}</h2>
    <p>{{ support.helpIntro }}</p>
    <div class="grid">
      <a
        v-for="link in support.helpLinks"
        :key="link.href"
        :href="link.href"
        class="card"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener' : undefined"
        :aria-label="`${link.title} — ${link.description}`"
      >
        <span class="title">{{ link.title }}</span>
        <span class="desc">{{ link.description }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.help-links {
  margin-bottom: 3rem;
}

h2 {
  margin: 0 0 0.75rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.help-links > p {
  margin: 0 0 1.25rem;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.25rem;
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

.title {
  font-weight: 600;
  color: var(--color-text-strong);
}

.desc {
  font-size: 0.85rem;
  line-height: 1.4;
  color: var(--color-text-muted);
}
</style>
