<script setup lang="ts">
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";

import { skipLink } from "~/data/copy";
</script>

<template>
  <div class="page">
    <!-- First focusable element on every page, so keyboard users can jump past the header. -->
    <a class="skip-link" :href="skipLink.href">{{ skipLink.label }}</a>
    <SiteHeader />
    <!-- tabindex="-1" lets the skip link move focus here, not just scroll. -->
    <main id="main" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  overflow-x: clip;
  background: var(--color-canvas);
  color: var(--color-text);
}

.skip-link {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 1.25rem;
  border-radius: var(--radius-md);
  background: var(--color-ink);
  color: var(--color-on-ink);
  font-weight: 500;
  text-decoration: none;
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: none;
}

/* Focus lands here only from the skip link; the page itself needs no ring. */
main:focus {
  outline: none;
}
</style>
