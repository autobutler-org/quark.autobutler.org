<script setup lang="ts">
import { ref } from "vue";

import { masthead } from "~/data/copy";

const menuOpen = ref(false);

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value;
}

function closeMenu(): void {
  menuOpen.value = false;
}
</script>

<template>
  <header class="masthead">
    <a href="/" class="wordmark">{{ masthead.wordmark }}</a>
    <button
      type="button"
      class="menu-toggle"
      aria-label="Menu"
      aria-controls="site-nav"
      :aria-expanded="menuOpen"
      @click="toggleMenu"
    >
      <span class="menu-icon" aria-hidden="true"></span>
    </button>
    <nav id="site-nav" aria-label="Site" :class="{ open: menuOpen }">
      <a v-for="link in masthead.links" :key="link.href" :href="link.href" @click="closeMenu">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.masthead {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 1.75rem var(--gutter);
  box-sizing: border-box;
}

.wordmark {
  color: var(--color-text-strong);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.wordmark:hover {
  color: var(--color-text-strong);
  text-decoration: none;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
  font-size: 0.95rem;
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

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.menu-toggle:hover {
  background: var(--color-surface-hover);
}

.menu-icon,
.menu-icon::before,
.menu-icon::after {
  display: block;
  width: 1.15rem;
  height: 2px;
  border-radius: 1px;
  background: var(--color-text-strong);
}

.menu-icon {
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: "";
  position: absolute;
  left: 0;
}

.menu-icon::before {
  top: -0.4rem;
}

.menu-icon::after {
  top: 0.4rem;
}

@media (max-width: 640px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 0.5rem var(--gutter) 1rem;
    background: var(--color-bg-end);
    border-bottom: 1px solid var(--color-border);
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-border-soft);
  }

  nav a:last-child {
    border-bottom: none;
  }
}
</style>
