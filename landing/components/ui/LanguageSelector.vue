<template>
  <div ref="selectorRef" class="relative">
    <!-- Trigger button -->
    <button
      class="flex items-center gap-2 text-white/70 hover:text-white text-xs transition-colors duration-200 py-1.5 px-3 rounded bg-primary-700 hover:bg-primary-500 border border-white/10"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="isOpen = !isOpen"
    >
      <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>{{ currentLocaleName }}</span>
      <svg
        class="w-3 h-3 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        :class="[
          'absolute right-0 bg-primary-700 border border-white/20 rounded-card shadow-xl py-1 min-w-[160px] z-50',
          dropUp ? 'bottom-full mb-2' : 'top-full mt-2',
        ]"
        role="listbox"
      >
        <button
          v-for="loc in locales"
          :key="loc.code"
          class="w-full text-left px-4 py-2 text-sm transition-colors duration-150"
          :class="loc.code === locale ? 'text-accent-400 bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'"
          role="option"
          :aria-selected="loc.code === locale"
          @click="selectLocale(loc.code)"
        >
          {{ loc.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ dropUp?: boolean }>()

const { locale, locales, setLocale } = useI18n()
const cookie = useCookie('i18n_redirected', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
  path: '/',
})

const isOpen = ref(false)
const selectorRef = ref<HTMLElement | null>(null)

const currentLocaleName = computed(() => {
  const current = (locales.value as Array<{ code: string; name?: string }>).find(l => l.code === locale.value)
  return current?.name ?? locale.value
})

async function selectLocale(code: string) {
  cookie.value = code
  await setLocale(code)
  isOpen.value = false
}

function handleClickOutside(event: Event) {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
