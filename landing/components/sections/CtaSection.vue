<template>
  <section class="relative section-padding bg-accent-500 overflow-hidden">
    <img
      src="/vas-operations.webp"
      alt=""
      class="absolute inset-0 w-full h-full object-cover object-center"
      aria-hidden="true"
    />
<div class="relative z-10 container-max text-center">
      <h2 class="font-display font-bold text-4xl sm:text-5xl text-primary-900 leading-tight mb-6">
        {{ t('cta_headline') }}
      </h2>
      <p class="text-primary-900/70 text-xl mb-10 max-w-xl mx-auto">
        {{ t('cta_body') }}
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
