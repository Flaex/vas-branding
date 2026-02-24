<template>
  <footer class="bg-primary-900 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

        <!-- Brand column -->
        <div class="md:col-span-1">
          <img src="/logo-white.svg" alt="Venezuela Advisory Services" class="h-[62px] w-auto mb-4" />
          <p class="text-white/60 text-sm leading-relaxed max-w-xs">
            {{ t('footer_tagline') }}
          </p>
        </div>

        <!-- Nav column -->
        <div>
          <h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4">
            {{ t('footer_navigate') }}
          </h4>
          <nav class="flex flex-col gap-3">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-white/70 hover:text-white text-sm transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>

        <!-- Contact column -->
        <div>
          <h4 class="font-display font-bold text-sm text-white/40 uppercase tracking-widest mb-4">
            {{ t('footer_contact') }}
          </h4>
          <div class="flex flex-col gap-3">
            <a
              :href="`mailto:${t('contact_email')}`"
              class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
            >
              <span>📧</span> {{ t('contact_email') }}
            </a>
            <a
              :href="`tel:${t('contact_phone').split('/')[0].trim().replace(/\s/g, '')}`"
              class="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
            >
              <span>📞</span> {{ t('contact_phone') }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <p class="text-white/40 text-xs">
            &copy; {{ new Date().getFullYear() }} Venezuela Advisory Services. {{ t('footer_rights') }}
          </p>
          <span class="hidden sm:block text-white/20 text-xs">·</span>
          <p class="text-white/30 text-xs flex items-center gap-2">
            {{ t('footer_made_by') }} <a href="https://novanet.studio/" target="_blank" rel="noopener noreferrer"><img src="/novanet-logo-2025.svg" alt="Novanet" class="h-4 w-auto opacity-50 hover:opacity-100 transition-opacity duration-200" /></a>
          </p>
        </div>
        <div class="flex items-center gap-4">
          <p class="text-white/30 text-xs">
            {{ t('footer_confidential') }}
          </p>
          <LanguageSelector :drop-up="true" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

const navLinks = computed(() => [
  { label: t('nav_home'), href: '#home' },
  { label: t('nav_services'), href: '#services' },
  { label: t('nav_contact'), href: '#contact' },
])
</script>
