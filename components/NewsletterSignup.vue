<script setup lang="ts">
import { newsletter } from "~/data/copy";

withDefaults(defineProps<{ showHeading?: boolean }>(), {
  showHeading: true,
});
</script>

<template>
  <section
    class="newsletter"
    :aria-labelledby="showHeading ? 'newsletter-heading' : undefined"
    :aria-label="showHeading ? undefined : newsletter.heading"
  >
    <form class="form" :action="newsletter.action" method="post" target="_blank" novalidate>
      <template v-if="showHeading">
        <h2 id="newsletter-heading">{{ newsletter.heading }}</h2>
        <p class="body">{{ newsletter.body }}</p>
      </template>
      <label for="mce-EMAIL">{{ newsletter.emailLabel }}</label>
      <div class="row">
        <input id="mce-EMAIL" type="email" name="EMAIL" autocomplete="email" required />
        <button type="submit">{{ newsletter.submitLabel }}</button>
      </div>
      <!-- Anti-bot honeypot: real subscribers never see or fill this in. -->
      <div class="honeypot" aria-hidden="true">
        <input type="text" :name="newsletter.honeypotName" tabindex="-1" value="" />
      </div>
      <p class="powered-by">{{ newsletter.poweredBy }}</p>
    </form>
  </section>
</template>

<style scoped>
.newsletter {
  position: relative;
  width: 100%;
}

.form {
  padding: var(--card-pad);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  text-align: left;
}

h2 {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.body {
  margin: 0 0 1.75rem;
  color: var(--color-text-muted);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

input[type="email"] {
  flex: 1 1 12rem;
  min-width: 0;
  height: 3rem;
  padding: 0 1rem;
  box-sizing: border-box;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-canvas);
  color: var(--color-text-strong);
  font: inherit;
  transition: border-color var(--duration-fast) ease;
}

input[type="email"]:focus {
  border-color: var(--color-text-muted);
}

.honeypot {
  position: absolute;
  left: -5000px;
}

button {
  flex: 0 0 auto;
  height: 3rem;
  padding: 0 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-ink);
  color: var(--color-on-ink);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) ease,
    transform var(--duration-fast) var(--ease-out);
}

button:hover {
  background: var(--color-ink-hover);
}

button:active {
  transform: var(--press);
}

.powered-by {
  margin: 1rem 0 0;
  font-size: var(--text-micro);
  color: var(--color-text-muted);
}

@media (max-width: 640px) {
  button {
    flex-basis: 100%;
  }
}
</style>
