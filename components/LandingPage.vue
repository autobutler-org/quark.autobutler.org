<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
import FeatureGrid from "./FeatureGrid.vue";
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";
import ManifestoSection from "./ManifestoSection.vue";
import NewsletterSignup from "./NewsletterSignup.vue";
import UpcomingFeatures from "./UpcomingFeatures.vue";
</script>

<template>
  <div>
    <HeroSection />
    <ManifestoSection />
    <HowItWorks />
    <FeatureGrid />
    <UpcomingFeatures />
    <CallToAction />
    <NewsletterSignup />
  </div>
</template>
