<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <CtaSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo_title'),
  description: () => t('seo_description'),
  ogTitle: () => t('seo_og_title'),
  ogDescription: () => t('seo_og_description'),
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
