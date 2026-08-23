<script setup lang="ts">
import ActionButton from "./ActionButton.vue";
import { hero } from "~/data/copy";
</script>

<template>
  <section class="hero">
    <img
      class="mark"
      :src="hero.logo.src"
      :alt="hero.logo.alt"
      width="912"
      height="912"
      fetchpriority="high"
    />
    <h1>{{ hero.headline }}</h1>
    <p class="lede">{{ hero.lede }}</p>
    <div class="actions">
      <ActionButton :link="hero.primary" />
      <ActionButton :link="hero.secondary" variant="secondary" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 6rem var(--gutter);
  box-sizing: border-box;
  text-align: center;
}

.mark {
  display: block;
  width: clamp(5rem, 14vw, 8.5rem);
  height: auto;
  margin: 0 auto 2rem;
}

h1 {
  margin: 0 0 var(--gutter);
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lede {
  max-width: var(--lede-width);
  margin: 0 auto 2.5rem;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 640px) {
  .hero {
    padding: 3.5rem var(--gutter) var(--section-gap);
  }

  .mark {
    margin-bottom: 1.5rem;
  }
}
</style>
