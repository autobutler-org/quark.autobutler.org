<script setup lang="ts">
import { howItWorks } from "@/content/copy";
</script>

<template>
  <section id="how" class="how">
    <h2>{{ howItWorks.heading }}</h2>
    <ol class="steps">
      <li v-for="(step, index) in howItWorks.steps" :key="step.title">
        <span class="number" aria-hidden="true">{{ index + 1 }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.body }}</p>
      </li>
    </ol>
    <p class="footnote">{{ howItWorks.footnote }}</p>
  </section>
</template>

<style scoped>
.how {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
  text-align: center;
}

h2 {
  margin: 0 0 2.5rem;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  gap: 2rem;
  margin: 0 0 2.5rem;
  padding: 0;
  list-style: none;
  text-align: left;
}

.number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  margin-bottom: 1rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-accent-faint);
  color: var(--color-accent);
  font-weight: 600;
}

h3 {
  margin: 0 0 0.6rem;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
}

.steps p {
  margin: 0;
  line-height: 1.65;
}

.footnote {
  max-width: var(--lede-width);
  margin: 0 auto;
  color: var(--color-text-subtle);
  font-size: 0.98rem;
  line-height: 1.7;
}
</style>
