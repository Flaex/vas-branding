<template>
  <section
    id="home"
    class="relative min-h-screen bg-primary-900 flex items-center overflow-hidden"
  >
    <!-- Background image -->
    <img
      src="/vas-caracas.webp"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center"
      aria-hidden="true"
      fetchpriority="high"
    />

    <!-- Dark overlay to keep text readable over the image -->
    <div class="absolute inset-0 bg-primary-900/75" aria-hidden="true"></div>

    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Gold accent line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-accent-500" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <div class="max-w-3xl">

        <!-- Eyebrow label -->
        <div class="inline-flex items-center gap-2 bg-accent-500/20 text-accent-400 text-sm font-sans font-medium px-4 py-2 rounded-full mb-8 border border-accent-500/30">
          <span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
          Business Advisory — Venezuela
        </div>

        <!-- Main headline -->
        <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {{ t('hero_headline') }}
        </h1>

        <!-- Subheadline -->
        <p class="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
          {{ t('hero_subheadline') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <BaseButton href="#contact" variant="primary" size="lg">
            {{ t('hero_cta_primary') }}
          </BaseButton>
          <BaseButton href="#services" variant="ghost" size="lg">
            {{ t('hero_cta_secondary') }}
          </BaseButton>
        </div>

        <!-- Stats strip -->
        <div class="mt-16 flex flex-wrap gap-8">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
            <span class="font-display font-bold text-4xl text-accent-400">{{ stat.value }}</span>
            <span class="text-white/50 text-lg mt-1">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30" aria-hidden="true">
      <span class="text-xs font-sans">{{ t('scroll') }}</span>
      <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { value: '6', label: t('stats_service_areas') },
  { value: '100%', label: t('stats_local_execution') },
  { value: 'Confidential', label: t('stats_professional_service') },
])
</script>
