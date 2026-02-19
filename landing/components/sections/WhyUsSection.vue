<template>
  <section id="why-us" class="section-padding bg-primary-900">
    <div class="container-max">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">
          {{ t('why_us_label') }}
        </p>
        <h2 class="font-display font-bold text-4xl text-white leading-tight max-w-2xl mx-auto">
          {{ t('why_us_headline') }}
        </h2>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in whyUs"
          :key="item.title"
          class="bg-white/5 border border-white/10 rounded-card p-8 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-200 group"
        >
          <div class="text-3xl mb-4">{{ item.icon }}</div>
          <div class="text-white font-display font-bold text-4xl mb-4 opacity-60 leading-none">
            0{{ index + 1 }}
          </div>
          <h3 class="font-display font-bold text-white text-lg mb-3 group-hover:text-accent-400 transition-colors duration-200">
            {{ item.title }}
          </h3>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const whyUs = computed(() =>
  (tm('why_us') as Array<Record<string, unknown>>).map(item => ({
    icon: rt(item.icon as any),
    title: rt(item.title as any),
    description: rt(item.description as any),
  }))
)
</script>
