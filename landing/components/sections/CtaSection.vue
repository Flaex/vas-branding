<template>
  <section class="section-padding bg-accent-500">
    <div class="container-max text-center">
      <h2 class="font-display font-bold text-4xl sm:text-5xl text-primary-900 leading-tight mb-6">
        {{ t('cta_headline') }}
      </h2>
      <p class="text-primary-900/70 text-xl mb-10 max-w-xl mx-auto">
        {{ t('cta_body') }}
      </p>
      <BaseButton href="#contact" variant="navy" size="lg">
        {{ t('cta_button') }}
      </BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
