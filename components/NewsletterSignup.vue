<script setup lang="ts">
import { newsletter } from "~/data/copy";
</script>

<template>
  <section class="newsletter" aria-labelledby="newsletter-heading">
    <form class="form" :action="newsletter.action" method="post" target="_blank" novalidate>
      <h2 id="newsletter-heading">{{ newsletter.heading }}</h2>
      <p class="powered-by">{{ newsletter.poweredBy }}</p>
      <div class="field">
        <label for="mce-EMAIL">Email Address</label>
        <input id="mce-EMAIL" type="email" name="EMAIL" required />
      </div>
      <!-- Anti-bot honeypot: real subscribers never see or fill this in. -->
      <div class="honeypot" aria-hidden="true">
        <input type="text" :name="newsletter.honeypotName" tabindex="-1" value="" />
      </div>
      <button type="submit">{{ newsletter.submitLabel }}</button>
    </form>
  </section>
</template>

<style scoped>
.newsletter {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--gutter) var(--section-gap);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 32rem;
  padding: 2.5rem 2rem;
  box-sizing: border-box;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  text-align: center;
}

h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 600;
  color: var(--color-text-strong);
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.powered-by {
  margin: 0 0 1.5rem;
  font-size: 0.8rem;
  color: var(--color-text-faint);
}

.field {
  margin-bottom: 1.25rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text-bright);
}

input[type="email"] {
  width: 100%;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  background: var(--color-surface-subtle);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  color: var(--color-text-strong);
  font-size: 1rem;
}

input[type="email"]:focus {
  outline: none;
  background: var(--color-surface-strong);
  border-color: var(--color-accent-faint);
}

.honeypot {
  position: absolute;
  left: -5000px;
}

button {
  padding: 0.85rem 2.5rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-md);
  background: var(--gradient-accent);
  color: var(--color-text-strong);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-accent);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

button:hover {
  transform: var(--lift-sm);
  box-shadow: var(--shadow-accent-hover);
}
</style>
