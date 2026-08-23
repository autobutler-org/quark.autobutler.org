<script setup lang="ts">
import ActionButton from "./ActionButton.vue";
import { callToAction } from "~/data/copy";
</script>

<template>
  <section class="cta">
    <h2>{{ callToAction.heading }}</h2>
    <p>{{ callToAction.body }}</p>
    <div class="actions">
      <ActionButton :link="callToAction.action" />
    </div>
  </section>
</template>

<style scoped>
.cta {
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
  margin: 0 0 var(--gutter);
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
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

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
