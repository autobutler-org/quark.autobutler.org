<script setup lang="ts">
import { ref } from "vue";

import SectionIntro from "./SectionIntro.vue";
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
    <div class="head">
      <SectionIntro :eyebrow="shellGallery.eyebrow" :heading="shellGallery.heading" />
      <div class="controls">
        <span class="count" aria-live="polite">
          {{ String(current + 1).padStart(2, "0") }} / {{ shellGallery.slides.length }}
        </span>
        <button
          type="button"
          :aria-label="shellGallery.previousLabel"
          :disabled="current === 0"
          @click="go(current - 1)"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          :aria-label="shellGallery.nextLabel"
          :disabled="current === lastIndex"
          @click="go(current + 1)"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
    <div ref="track" class="track reveal" tabindex="0" @scroll.passive="onScroll">
      <figure
        v-for="(slide, index) in shellGallery.slides"
        :key="slide.src"
        class="slide"
        aria-roledescription="slide"
        :aria-label="`${index + 1} of ${shellGallery.slides.length}`"
      >
        <div class="frame">
          <img
            :src="slide.src"
            :alt="slide.alt"
            :width="slide.width"
            :height="slide.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
            decoding="async"
          />
        </div>
        <figcaption>{{ slide.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
  box-sizing: border-box;
}

.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem 2rem;
  margin-bottom: 2rem;
}

.track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border-radius: var(--radius-lg);
}

.track::-webkit-scrollbar {
  display: none;
}

.track:focus-visible {
  outline-offset: 4px;
}

.slide {
  flex: 0 0 100%;
  margin: 0;
  scroll-snap-align: start;
}

.frame {
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface-sunken);
}

.frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figcaption {
  padding-top: 1rem;
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-style: italic;
  color: var(--color-text-muted);
}

.controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.count {
  min-width: 4rem;
  margin-right: 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-muted);
}

button {
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text-strong);
  font-size: 1.05rem;
  cursor: pointer;
  transition:
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) var(--ease-out);
}

button:hover:not(:disabled) {
  border-color: var(--color-text-muted);
}

button:active:not(:disabled) {
  transform: var(--press);
}

button:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
