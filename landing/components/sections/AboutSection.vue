<template>
  <section id="about" class="relative section-padding bg-neutral-50 overflow-hidden">
    <!-- Background image: right 25%, centered vertically -->
    <img
      src="/vas-study-patterns.webp"
      alt=""
      class="absolute top-1/2 lg:-translate-y-1/2 right-0 w-1/4 h-full object-cover object-center"
      aria-hidden="true"
    />

    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Content -->
        <div>
          <p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-4">
            {{ t('about_label') }}
          </p>
          <h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6">
            {{ t('about_headline') }}
          </h2>
          <p class="text-neutral-600 text-lg leading-relaxed mb-8">
            {{ t('about_body') }}
          </p>

          <!-- Core pillars -->
          <div class="flex flex-col gap-4">
            <div
              v-for="pillar in pillars"
              :key="pillar.label"
              class="flex items-start gap-4"
            >
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center mt-0.5">
                <span class="text-lg">{{ pillar.icon }}</span>
              </div>
              <div>
                <h4 class="font-display font-semibold text-primary-900 text-base">{{ pillar.label }}</h4>
                <p class="text-neutral-600 text-sm mt-1">{{ pillar.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual accent block -->
        <div class="relative pb-8">
          <div class="bg-primary-900 rounded-card p-10 pb-24 text-white relative overflow-hidden">
            <blockquote class="relative z-10">
              <div class="text-accent-400 text-5xl font-display font-bold leading-none mb-4">"</div>
              <p class="text-white/90 text-2xl font-display font-semibold mb-8">
                {{ t('about_quote') }}
              </p>
              <div class="border-t border-white/10 pt-6">
                <p class="text-white/60 text-sm">
                  {{ t('about_quote_body') }}
                </p>
              </div>
            </blockquote>
          </div>

          <!-- Floating card -->
          <div class="absolute -bottom-6 left-6 bg-accent-500 text-white rounded-card p-5 shadow-xl max-w-[360px]">
            <p class="font-display font-bold text-2xl">{{ t('about_floating_title') }}</p>
            <p class="text-white/80 text-xs mt-1">{{ t('about_floating_sub') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const pillars = computed(() => [
  {
    icon: '🏛️',
    label: t('pillar_local_expertise_label'),
    description: t('pillar_local_expertise_desc'),
  },
  {
    icon: '🌐',
    label: t('pillar_international_label'),
    description: t('pillar_international_desc'),
  },
  {
    icon: '⚙️',
    label: t('pillar_practical_label'),
    description: t('pillar_practical_desc'),
  },
])
</script>
