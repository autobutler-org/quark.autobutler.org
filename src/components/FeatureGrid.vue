<script setup lang="ts">
import { features } from "@/content/copy";
</script>

<template>
  <section class="features">
    <h2>{{ features.heading }}</h2>
    <ul class="grid">
      <li v-for="feature in features.items" :key="feature.name">
        <h3>{{ feature.name }}</h3>
        <p>{{ feature.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.features {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
  border-top: 1px solid var(--color-border);
}

h2 {
  margin: 0 0 2.5rem;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
  gap: var(--gutter);
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition: all var(--transition);
}

li:hover {
  transform: var(--lift);
  border-color: var(--color-border-strong);
  background: var(--color-surface-hover);
  box-shadow: var(--shadow-card);
}

h3 {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
}

p {
  margin: 0;
  line-height: 1.7;
}
</style>
