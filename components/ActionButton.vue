<script setup lang="ts">
import type { Link } from "~/data/copy";

withDefaults(defineProps<{ link: Link; variant?: "primary" | "secondary" }>(), {
  variant: "primary",
});
</script>

<template>
  <a class="btn" :class="variant" :href="link.href">{{ link.label }}</a>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition);
}

.btn:hover {
  text-decoration: none;
  transform: var(--lift-sm);
}

.primary {
  color: var(--color-text-strong);
  border-color: var(--color-accent-border);
  background: var(--gradient-accent);
  box-shadow: var(--shadow-accent);
}

.primary:hover {
  color: var(--color-text-strong);
  box-shadow: var(--shadow-accent-hover);
}

.secondary {
  color: var(--color-text-bright);
  border-color: var(--color-border-strong);
  background: var(--color-surface-subtle);
}

.secondary:hover {
  color: var(--color-text-strong);
  background: var(--color-surface-strong);
}

@media (max-width: 640px) {
  .btn {
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
