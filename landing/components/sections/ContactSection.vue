<template>
  <section id="contact" class="section-padding bg-neutral-50">
    <div class="container-max">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: Info -->
        <div>
          <p class="font-display font-semibold text-accent-500 text-sm uppercase tracking-widest mb-3">
            {{ t('contact_label') }}
          </p>
          <h2 class="font-display font-bold text-4xl text-primary-900 leading-tight mb-6">
            {{ t('contact_headline') }}
          </h2>
          <p class="text-neutral-600 text-lg leading-relaxed mb-10">
            {{ t('contact_body') }}
          </p>

          <!-- Contact details -->
          <div class="flex flex-col gap-6">
            <a
              :href="`mailto:${t('contact_email')}`"
              class="flex items-center gap-4 group"
            >
              <div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors duration-200">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">{{ t('contact_email_label') }}</p>
                <p class="text-primary-900 font-semibold group-hover:text-accent-500 transition-colors duration-200">
                  {{ t('contact_email') }}
                </p>
              </div>
            </a>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-neutral-500 uppercase tracking-wide font-medium">{{ t('contact_phone_label') }}</p>
                <p class="text-primary-900 font-semibold">{{ t('contact_phone') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div>
          <BaseCard variant="elevated" padding="lg">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
              class="flex flex-col gap-5"
              novalidate
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <!-- Name + Company -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                  <label for="name" class="text-sm font-medium text-primary-900">{{ t('form_name') }} *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    name="name"
                    type="text"
                    :placeholder="t('form_name_ph')"
                    :class="inputClass(errors.name)"
                    @blur="touch('name')"
                  />
                  <p v-if="errors.name" class="text-xs text-red-500 mt-0.5">{{ errors.name }}</p>
                </div>
                <div class="flex flex-col gap-1.5">
                  <label for="company" class="text-sm font-medium text-primary-900">{{ t('form_company') }} *</label>
                  <input
                    id="company"
                    v-model="form.company"
                    name="company"
                    type="text"
                    :placeholder="t('form_company_ph')"
                    :class="inputClass(errors.company)"
                    @blur="touch('company')"
                  />
                  <p v-if="errors.company" class="text-xs text-red-500 mt-0.5">{{ errors.company }}</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-1.5">
                <label for="email" class="text-sm font-medium text-primary-900">{{ t('form_email') }} *</label>
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  :placeholder="t('form_email_ph')"
                  :class="inputClass(errors.email)"
                  @blur="touch('email')"
                />
                <p v-if="errors.email" class="text-xs text-red-500 mt-0.5">{{ errors.email }}</p>
              </div>

              <!-- Message -->
              <div class="flex flex-col gap-1.5">
                <label for="message" class="text-sm font-medium text-primary-900">{{ t('form_message') }} *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  :placeholder="t('form_message_ph')"
                  :class="inputClass(errors.message)"
                  class="resize-none"
                  @blur="touch('message')"
                ></textarea>
                <p v-if="errors.message" class="text-xs text-red-500 mt-0.5">{{ errors.message }}</p>
              </div>

              <!-- Submit error -->
              <p v-if="submitError" class="text-sm text-red-500 text-center">
                {{ t('form_error') }}
              </p>

              <BaseButton type="submit" variant="primary" size="lg" class="w-full" :disabled="submitting">
                <span v-if="submitting">{{ t('form_submitting') }}</span>
                <span v-else>{{ t('form_submit') }}</span>
              </BaseButton>

              <p class="text-xs text-neutral-500 text-center">
                {{ t('form_confidential') }}
              </p>
            </form>
          </BaseCard>
        </div>

      </div>
    </div>

    <!-- Success modal -->
    <SuccessModal v-model="showModal" />
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const submitting = ref(false)
const submitError = ref(false)
const showModal = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
})

const touched = reactive({
  name: false,
  company: false,
  email: false,
  message: false,
})

type Field = keyof typeof form

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(): Partial<Record<Field, string>> {
  const e: Partial<Record<Field, string>> = {}
  if (!form.name.trim() || form.name.trim().length < 2)
    e.name = t('form_err_name')
  if (!form.company.trim() || form.company.trim().length < 2)
    e.company = t('form_err_company')
  if (!form.email.trim() || !EMAIL_RE.test(form.email))
    e.email = t('form_err_email')
  if (!form.message.trim() || form.message.trim().length < 10)
    e.message = t('form_err_message')
  return e
}

const errors = computed(() => {
  const all = validate()
  const visible: Partial<Record<Field, string>> = {}
  for (const key of Object.keys(all) as Field[]) {
    if (touched[key]) visible[key] = all[key]!
  }
  return visible
})

function touch(field: Field) {
  touched[field] = true
}

function inputClass(hasError?: string) {
  const base = 'w-full px-4 py-3 rounded-card border text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all'
  return hasError
    ? `${base} border-red-400 focus:ring-red-400`
    : `${base} border-neutral-200 focus:ring-primary-900`
}

async function handleSubmit() {
  for (const key of Object.keys(touched) as Field[]) touched[key] = true

  const allErrors = validate()
  if (Object.keys(allErrors).length > 0) return

  submitting.value = true
  submitError.value = false

  const body = new URLSearchParams({
    'form-name': 'contact',
    name: form.name,
    company: form.company,
    email: form.email,
    message: form.message,
  })

  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    if (res.ok) {
      showModal.value = true
      Object.assign(form, { name: '', company: '', email: '', message: '' })
      Object.assign(touched, { name: false, company: false, email: false, message: false })
    } else {
      submitError.value = true
    }
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>
