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
          "Quark plugs into your Wi-Fi router and turns USB storage into a private home cloud. Your photos and files stay at home.",
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
