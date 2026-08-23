<script setup lang="ts">
import { manifesto } from "~/data/copy";
</script>

<template>
  <section class="manifesto">
    <h2>{{ manifesto.heading }}</h2>
    <p v-for="paragraph in manifesto.paragraphs" :key="paragraph">
      {{ paragraph }}
    </p>
    <hr />
    <p class="note">{{ manifesto.funding }}</p>
    <p class="note">
      <a :href="manifesto.openSource.link.href">
        {{ manifesto.openSource.link.label }}
      </a>
      {{ manifesto.openSource.trailing }}
    </p>
  </section>
</template>

<style scoped>
.manifesto {
  width: 100%;
  max-width: var(--prose-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.75;
}

h2 {
  margin: 0 0 2rem;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  margin: 0 0 1.25rem;
}

hr {
  width: 70%;
  margin: 2.5rem auto;
  border: none;
  border-top: 1px solid var(--color-border-soft);
}

.note {
  font-size: 1rem;
  color: var(--color-text-muted);
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
