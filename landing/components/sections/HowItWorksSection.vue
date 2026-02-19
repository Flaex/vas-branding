<template>
  <section id="how-it-works" class="section-padding bg-primary-700">
    <div class="container-max">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="font-display font-semibold text-accent-400 text-sm uppercase tracking-widest mb-3">
          {{ t('how_label') }}
        </p>
        <h2 class="font-display font-bold text-4xl text-white leading-tight">
          {{ t('how_headline') }}
        </h2>
        <p class="text-white/60 text-lg mt-4 max-w-xl mx-auto">
          {{ t('how_subheadline') }}
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

        <div
          v-for="step in howItWorks"
          :key="step.step"
          class="relative flex flex-col items-center text-center"
        >
          <!-- Step number circle -->
          <div class="relative z-10 w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center mb-6 shadow-lg ring-4 ring-primary-700">
            <span class="font-display font-bold text-2xl text-white">{{ step.step }}</span>
          </div>

          <!-- Content -->
          <h3 class="font-display font-bold text-2xl text-white mb-3">
            {{ step.title }}
          </h3>
          <p class="text-white/60 text-base leading-relaxed max-w-xs">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const howItWorks = computed(() =>
  (tm('how_it_works') as Array<Record<string, unknown>>).map(item => ({
    step: rt(item.step as any),
    title: rt(item.title as any),
    description: rt(item.description as any),
  }))
)
</script>
