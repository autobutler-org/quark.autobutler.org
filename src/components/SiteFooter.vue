<script setup lang="ts">
import { footer } from "@/content/copy";
</script>

<template>
  <footer class="footer">
    <p>{{ footer.note }}</p>
    <nav aria-label="Footer">
      <a v-for="link in footer.links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 2rem var(--gutter) 3rem;
  box-sizing: border-box;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-faint);
  font-size: 0.9rem;
}

p {
  margin: 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}
</style>
