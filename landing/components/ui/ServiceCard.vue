<template>
  <BaseCard variant="elevated" padding="lg" class="flex flex-col gap-4 group">
    <div class="text-4xl">{{ service.icon }}</div>
    <h3 class="font-display font-bold text-xl text-primary-900 group-hover:text-accent-500 transition-colors duration-200">
      {{ service.title }}
    </h3>
    <p class="text-neutral-600 leading-relaxed text-sm">
      {{ service.description }}
    </p>
  </BaseCard>
</template>

<script setup lang="ts">
defineProps<{
  service: {
    title: string
    description: string
    icon: string
  }
}>()
</script>
