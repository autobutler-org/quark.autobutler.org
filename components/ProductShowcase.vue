<script setup lang="ts">
import { productShowcase } from "~/data/copy";
</script>

<template>
  <section class="showcase" aria-label="Product photos">
    <div v-for="image in productShowcase.images" :key="image.src" class="frame">
      <img :src="image.src" :alt="image.alt" loading="lazy" />
    </div>
  </section>
</template>

<style scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.frame {
  flex: 1 1 20rem;
  max-width: 32rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border-soft);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition);
}

.frame:hover {
  transform: translateY(-4px);
}

.frame img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
</style>
