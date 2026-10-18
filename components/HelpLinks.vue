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
  margin-bottom: 4.5rem;
}

h2 {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.help-links > p {
  margin: 0 0 1.75rem;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  gap: 0.75rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.5rem;
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

.title {
  font-weight: 600;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.desc {
  font-size: var(--text-small);
  line-height: 1.5;
  color: var(--color-text-muted);
}
</style>
