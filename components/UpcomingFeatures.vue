<script setup lang="ts">
import { upcoming } from "~/data/copy";
</script>

<template>
  <section class="upcoming">
    <h2>{{ upcoming.heading }}</h2>
    <p class="lede">{{ upcoming.lede }}</p>
    <ul class="grid">
      <li v-for="feature in upcoming.items" :key="feature.name">
        <div class="head">
          <h3>{{ feature.name }}</h3>
          <span class="badge">{{ upcoming.badge }}</span>
        </div>
        <p>{{ feature.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.upcoming {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
  border-top: 1px solid var(--color-border);
}

h2 {
  margin: 0 0 1rem;
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

.lede {
  max-width: var(--lede-width);
  margin: 0 auto 2.5rem;
  text-align: center;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
  gap: var(--gutter);
  margin: 0;
  padding: 0;
  list-style: none;
}

/*
 * Dashed rather than solid, and no hover lift: these are not things you can go
 * and use yet, so they should not invite a click the way a feature card does.
 */
li {
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-border-strong);
  background: transparent;
}

.head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.75rem;
  flex-wrap: wrap;
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
}

.badge {
  padding: 0.15rem 0.55rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-strong);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent);
}

p {
  margin: 0;
  line-height: 1.7;
}
</style>
