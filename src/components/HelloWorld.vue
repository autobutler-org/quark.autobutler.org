<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <section class="greeting">
    <h1>{{ msg }}</h1>
    <p>Vue 3 + Vite + TypeScript. Edit <code>src/App.vue</code> to get started.</p>
    <button type="button" @click="count++">count is {{ count }}</button>
  </section>
</template>

<style scoped>
.greeting {
  text-align: center;
}

button {
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  background: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0.5rem 1rem;
}
</style>
