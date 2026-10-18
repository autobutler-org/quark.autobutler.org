<script setup lang="ts">
import SectionIntro from "./SectionIntro.vue";
import { features } from "~/data/copy";
</script>

<template>
  <section class="features">
    <SectionIntro :eyebrow="features.eyebrow" :heading="features.heading" :lede="features.lede" />
    <ul class="bento">
      <li
        v-for="(feature, index) in features.items"
        :key="feature.name"
        class="card reveal"
        :class="{ upcoming: feature.upcoming, lead: feature.illustration }"
      >
        <div class="meta">
          <span class="index" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</span>
          <span v-if="feature.badge" class="badge">{{ feature.badge }}</span>
        </div>
        <div v-if="feature.illustration === 'files'" class="art files" aria-hidden="true">
          <span v-for="row in 4" :key="row" class="file"
            ><span class="glyph"></span><span class="line"></span
          ></span>
        </div>
        <div v-else-if="feature.illustration === 'photos'" class="art photos" aria-hidden="true">
          <span v-for="tile in 6" :key="tile" class="tile"></span>
        </div>
        <h3>{{ feature.name }}</h3>
        <p>{{ feature.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.features {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter) 0;
  box-sizing: border-box;
}

.bento {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
  gap: 0.75rem;
  margin: 3.5rem 0 0;
  padding: 0;
  list-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  padding: var(--card-pad);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-none);
  transition: box-shadow var(--duration-fast) ease;
}

.card:hover {
  box-shadow: var(--shadow-hover);
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 1.5rem;
  margin-bottom: 2rem;
}

.index {
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  color: var(--color-text-muted);
}

.badge {
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  background: var(--pastel-yellow);
  color: var(--pastel-yellow-ink);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.upcoming {
  border-style: dashed;
  border-color: var(--color-border-strong);
  background: var(--color-surface-sunken);
}

/* Small abstract sketches for the two lead cards: a file list and a photo grid. */
.art {
  margin-bottom: 2rem;
}

.files {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 22rem;
}

.file {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-canvas);
}

.file .glyph {
  flex: 0 0 auto;
  width: 1rem;
  height: 0.8rem;
  border-radius: 2px;
  background: var(--pastel-blue);
}

.file .line {
  height: 0.4rem;
  border-radius: var(--radius-pill);
  background: var(--color-border-strong);
}

.file:nth-child(1) .line {
  width: 55%;
}

.file:nth-child(2) .line {
  width: 38%;
}

.file:nth-child(2) .glyph {
  background: var(--pastel-green);
}

.file:nth-child(3) .line {
  width: 68%;
}

.file:nth-child(3) .glyph {
  background: var(--pastel-yellow);
}

.file:nth-child(4) .line {
  width: 30%;
}

.photos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  max-width: 15rem;
}

.tile {
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  background: var(--pastel-yellow);
}

.tile:nth-child(2),
.tile:nth-child(6) {
  background: var(--pastel-green);
}

.tile:nth-child(3),
.tile:nth-child(4) {
  background: var(--pastel-blue);
}

.tile:nth-child(5) {
  background: var(--pastel-red);
}

h3 {
  margin: 0 0 0.6rem;
  font-family: var(--font-serif);
  font-size: var(--text-h3);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

p {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  text-wrap: pretty;
}

/*
 * On wide screens the cards settle into an asymmetric 12-column bento. Spans
 * follow the order of `features.items`; an item added past the end falls back
 * to a third of the row.
 */
@media (min-width: 960px) {
  .bento {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .card {
    grid-column: span 4;
  }

  .card:nth-child(1),
  .card:nth-child(7) {
    grid-column: span 7;
  }

  .card:nth-child(2),
  .card:nth-child(6) {
    grid-column: span 5;
  }

  .card:nth-child(n + 8):nth-child(-n + 11) {
    grid-column: span 3;
  }

  .lead h3 {
    margin-top: auto;
    font-size: 2.25rem;
    letter-spacing: var(--tracking-tight);
  }

  .lead p {
    max-width: 30rem;
    font-size: 1.0625rem;
  }
}
</style>
