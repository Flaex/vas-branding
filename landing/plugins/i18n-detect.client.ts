export default defineNuxtPlugin({
  name: 'i18n-browser-detect',
  enforce: 'post',
  setup(nuxtApp) {
    // useCookie is safe in plugin setup; useI18n() is NOT (requires a Vue component instance)
    const cookie = useCookie<string>('i18n_redirected', {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      path: '/',
    })

    nuxtApp.hook('app:mounted', async () => {
      // Access i18n via the injected global instance instead of useI18n()
      const i18n = nuxtApp.$i18n as any

      const codes: string[] = i18n.locales.value.map(
        (l: any) => (typeof l === 'string' ? l : l.code),
      )

      // Use saved preference if valid
      if (cookie.value && codes.includes(cookie.value)) {
        if (i18n.locale.value !== cookie.value) {
          await i18n.setLocale(cookie.value)
        }
        return
      }

      // Detect from browser language list (ordered by preference)
      const preferred = Array.from(
        navigator.languages?.length ? navigator.languages : [navigator.language || 'en'],
      )

      for (const lang of preferred) {
        // Exact match (e.g. 'zh-TW')
        if (codes.includes(lang)) {
          cookie.value = lang
          await i18n.setLocale(lang)
          return
        }
        // Prefix match (e.g. 'es-MX' → 'es', 'fr-FR' → 'fr')
        const prefix = lang.split('-')[0]
        const match = codes.find((c: string) => c === prefix || c.startsWith(prefix + '-'))
        if (match) {
          cookie.value = match
          await i18n.setLocale(match)
          return
        }
      }
    })
  },
})
