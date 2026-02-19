<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        @click.self="$emit('update:modelValue', false)"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-primary-900/70 backdrop-blur-sm" aria-hidden="true" />

        <!-- Panel -->
        <div class="relative bg-white rounded-card shadow-2xl max-w-md w-full p-10 flex flex-col items-center text-center">
          <!-- Gold top accent line -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-accent-500 rounded-t-card" aria-hidden="true" />

          <!-- Icon -->
          <div class="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <!-- Content -->
          <h3 id="modal-title" class="font-display font-bold text-2xl text-primary-900 mb-3">
            {{ t('modal_title') }}
          </h3>
          <p class="text-neutral-600 text-base leading-relaxed mb-8">
            {{ t('modal_body') }}
          </p>

          <!-- CTA -->
          <BaseButton variant="primary" size="md" class="w-full" @click="$emit('update:modelValue', false)">
            {{ t('modal_done') }}
          </BaseButton>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ 'update:modelValue': [value: boolean] }>()

const { t } = useI18n()
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: translateY(12px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: translateY(12px);
  opacity: 0;
}
</style>
