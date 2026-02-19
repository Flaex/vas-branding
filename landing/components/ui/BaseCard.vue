<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'default' | 'elevated' | 'bordered'
  padding?: 'sm' | 'md' | 'lg'
}>(), {
  variant: 'default',
  padding: 'md',
})

const classes = computed(() => {
  const base = 'rounded-card bg-white'

  const variants = {
    default:  'shadow-sm',
    elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-200',
    bordered: 'border border-neutral-100',
  }

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return [base, variants[props.variant], paddings[props.padding]].join(' ')
})
</script>
