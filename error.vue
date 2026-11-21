<script setup lang="ts">
import type { NuxtError } from "#app";

import ErrorMessage from "./components/ErrorMessage.vue";
import SiteShell from "./components/SiteShell.vue";
import { errorPage } from "./data/copy";

const props = defineProps<{ readonly error: NuxtError }>();

const heading = computed(() =>
  props.error.statusCode === 404 ? errorPage.notFoundHeading : errorPage.errorHeading
);

useSeoMeta({ title: () => `${heading.value} — Quark` });
</script>

<template>
  <SiteShell>
    <ErrorMessage :status-code="error.statusCode ?? 500" />
  </SiteShell>
</template>
