<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
import FeatureGrid from "./FeatureGrid.vue";
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";
import ManifestoSection from "./ManifestoSection.vue";
import NewsletterSignup from "./NewsletterSignup.vue";
import ProductShowcase from "./ProductShowcase.vue";
</script>

<template>
  <div>
    <HeroSection />
    <ProductShowcase />
    <ManifestoSection />
    <HowItWorks />
    <FeatureGrid />
    <CallToAction />
    <NewsletterSignup />
  </div>
</template>
