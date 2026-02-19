<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost' | 'outline' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-display font-semibold rounded-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const sizes = {
    sm:  'px-4 py-2 text-sm',
    md:  'px-6 py-3 text-base',
    lg:  'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-500 shadow-md hover:shadow-lg',
    navy:    'bg-primary-900 text-white hover:bg-primary-700 focus:ring-primary-900 shadow-md hover:shadow-lg',
    ghost:   'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-900 focus:ring-white',
    outline: 'bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-900',
  }

  return [base, sizes[props.size], variants[props.variant]].join(' ')
})
</script>
