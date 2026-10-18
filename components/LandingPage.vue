<script setup lang="ts">
import CallToAction from "./CallToAction.vue";
import FeatureGrid from "./FeatureGrid.vue";
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";
import ManifestoSection from "./ManifestoSection.vue";
import NewsletterSignup from "./NewsletterSignup.vue";
import ShellCarousel from "./ShellCarousel.vue";
</script>

<template>
  <div>
    <HeroSection />
    <ShellCarousel />
    <ManifestoSection />
    <HowItWorks />
    <FeatureGrid />
    <div class="closing">
      <CallToAction />
      <NewsletterSignup />
    </div>
  </div>
</template>

<style scoped>
/* The page's last beat: the sign-up pitch beside the mailing list. */
.closing {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
  gap: 3rem 5rem;
  align-items: end;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--section-gap) var(--gutter);
  box-sizing: border-box;
}
</style>
