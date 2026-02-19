<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-primary-900 shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-5 sm:py-7">

        <!-- Logo -->
        <a href="#home" class="flex-shrink-0" aria-label="VAS Home">
          <img
            src="/logo-white.svg"
            alt="Venezuela Advisory Services"
            class="h-[50px] sm:h-[62px] w-auto"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white/80 hover:text-white font-sans font-medium text-sm transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center gap-4">
          <BaseButton href="#contact" variant="primary" size="sm" class="hidden sm:inline-flex">
            {{ t('cta_request_consultation') }}
          </BaseButton>

          <!-- Mobile menu button -->
          <button
            class="md:hidden text-white p-2"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="mobileOpen" class="md:hidden pb-4 border-t border-white/10 mt-2">
        <nav class="flex flex-col gap-1 pt-4" aria-label="Mobile navigation">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white/80 hover:text-white font-sans text-base py-2 transition-colors duration-200"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
          <BaseButton href="#contact" variant="primary" size="sm" class="mt-3 w-full" @click="mobileOpen = false">
            {{ t('cta_request_consultation') }}
          </BaseButton>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()

const navLinks = computed(() => [
  { label: t('nav_home'), href: '#home' },
  { label: t('nav_services'), href: '#services' },
  { label: t('nav_contact'), href: '#contact' },
])

const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 50 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>
