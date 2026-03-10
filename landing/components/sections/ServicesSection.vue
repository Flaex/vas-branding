<template>
  <section id="services" class="section-padding bg-neutral-50">
    <div class="container-max">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">
          {{ t('services_label') }}
        </p>
        <h2 class="font-display font-bold text-4xl text-primary-900 leading-tight max-w-2xl mx-auto">
          {{ t('services_headline') }}
        </h2>
        <p class="text-neutral-600 text-lg mt-4 max-w-2xl mx-auto">
          {{ t('services_subheadline') }}
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <p class="text-neutral-600 text-2xl mb-4">{{ t('services_cta_text') }}</p>
        <BaseButton href="#contact" variant="outline" size="md">
          {{ t('services_cta_button') }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const services = computed(() =>
  (tm('services') as Array<Record<string, unknown>>).map(item => ({
    icon: rt(item.icon as any),
    title: rt(item.title as any),
    description: rt(item.description as any),
  }))
)
</script>
