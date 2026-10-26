<script setup lang="ts">
import LandingPage from "~/components/LandingPage.vue";

// Pre-release: no price or offers until Quark is on sale.
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Quark",
        url: "https://quark.autobutler.org",
        description:
          "Quark plugs into your router and gives you a private home cloud. Keep photos and files on storage in your home.",
        applicationCategory: "UtilitiesApplication",
        codeRepository: "https://github.com/autobutler-org/quark",
        publisher: {
          "@type": "Organization",
          name: "AutoButler",
          url: "https://autobutler.org",
        },
      }),
    },
  ],
});
</script>

<template>
  <LandingPage />
</template>
