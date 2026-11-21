<script setup lang="ts">
import LandingPage from "~/components/LandingPage.vue";
import { jsonLdScript, softwareApplication, webSite } from "~/utils/structuredData";

// Pre-release: no price or offers until Quark is on sale.
useHead({
  script: [
    jsonLdScript(
      softwareApplication(
        "Quark plugs into your router and gives you a private home cloud. Keep photos and files on storage in your home."
      )
    ),
    jsonLdScript(webSite()),
  ],
});
</script>

<template>
  <LandingPage />
</template>
