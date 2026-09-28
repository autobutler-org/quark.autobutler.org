<script setup lang="ts">
withDefaults(
  defineProps<{
    kind?: "soft-launch" | "coming-soon";
  }>(),
  { kind: "soft-launch" }
);

const labels = {
  "soft-launch": "Soft launch",
  "coming-soon": "Coming soon",
} as const;
</script>

<template>
  <span class="chip" :data-kind="kind">{{ labels[kind] }}</span>
</template>

<style scoped>
.chip {
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.4;
  white-space: nowrap;
  border: 1px solid var(--color-accent-border);
  background: var(--color-accent-glow);
  color: var(--color-accent);
}

.chip[data-kind="coming-soon"] {
  border-color: var(--color-border-soft);
  background: var(--color-surface-strong);
  color: var(--color-text-subtle);
}
</style>
