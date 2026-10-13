<script setup lang="ts">
import { ref } from "vue";

import { shellGallery } from "~/data/copy";

const track = ref<HTMLElement | null>(null);
const current = ref(0);
const lastIndex = shellGallery.slides.length - 1;

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
}

function go(index: number) {
  const el = track.value;
  const target = Math.min(Math.max(index, 0), lastIndex);
  current.value = target;
  if (!el) return;
  el.scrollTo({
    left: target * el.clientWidth,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

/** Keeps the buttons in step when the reader swipes instead of clicking. */
function onScroll() {
  const el = track.value;
  if (!el || el.clientWidth === 0) return;
  current.value = Math.round(el.scrollLeft / el.clientWidth);
}
</script>

<template>
  <section class="gallery" aria-roledescription="carousel" :aria-label="shellGallery.heading">
    <h2>{{ shellGallery.heading }}</h2>
    <div ref="track" class="track" tabindex="0" @scroll.passive="onScroll">
      <figure
        v-for="(slide, index) in shellGallery.slides"
        :key="slide.src"
        class="slide"
        aria-roledescription="slide"
        :aria-label="`${index + 1} of ${shellGallery.slides.length}`"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          :width="slide.width"
          :height="slide.height"
          loading="lazy"
          decoding="async"
        />
        <figcaption>{{ slide.caption }}</figcaption>
      </figure>
    </div>
    <div class="controls">
      <button
        type="button"
        :aria-label="shellGallery.previousLabel"
        :disabled="current === 0"
        @click="go(current - 1)"
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <span class="count" aria-live="polite">
        {{ current + 1 }} / {{ shellGallery.slides.length }}
      </span>
      <button
        type="button"
        :aria-label="shellGallery.nextLabel"
        :disabled="current === lastIndex"
        @click="go(current + 1)"
      >
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--gutter) var(--section-gap);
  box-sizing: border-box;
  text-align: center;
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

.track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.track::-webkit-scrollbar {
  display: none;
}

.track:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.slide {
  position: relative;
  flex: 0 0 100%;
  margin: 0;
  scroll-snap-align: start;
  aspect-ratio: 3 / 2;
}

.slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2.5rem var(--gutter) 1rem;
  background: linear-gradient(transparent, var(--color-bg));
  color: var(--color-text-bright);
  font-size: 0.95rem;
  text-align: left;
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
}

button {
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  color: var(--color-text-strong);
  font-size: 1.1rem;
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

button:hover:not(:disabled) {
  background: var(--color-surface-hover);
  border-color: var(--color-accent-border);
}

button:disabled {
  opacity: 0.4;
  cursor: default;
}

.count {
  min-width: 3.5rem;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
}
</style>
