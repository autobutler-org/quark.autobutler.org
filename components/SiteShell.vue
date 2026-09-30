<script setup lang="ts">
import SiteFooter from "./SiteFooter.vue";
import SiteHeader from "./SiteHeader.vue";
</script>

<template>
  <div class="page">
    <div class="glow" aria-hidden="true" />
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  position: relative;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--color-text);
  background: var(--gradient-page);
}

.glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 18% 22%, var(--color-accent-glow) 0%, transparent 38%),
    radial-gradient(circle at 82% 68%, var(--color-warm-glow) 0%, transparent 36%);
}
</style>
