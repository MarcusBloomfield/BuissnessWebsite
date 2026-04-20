<template>
  <div class="contact-form-container">
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" required placeholder="Your full name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required placeholder="email@example.com">
      </div>
      <div class="form-group">
        <label for="subject">Project Type</label>
        <select id="subject" v-model="form.subject">
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Interior">Interior Design</option>
          <option value="Consultation">Consultation</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="5" required placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Enquiry</button>
    </form>

    <div
      v-if="isEmailOptionsOpen"
      class="email-modal-backdrop"
      role="presentation"
      @click.self="closeEmailOptions"
    >
      <div
        class="email-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-options-title"
      >
        <button type="button" class="modal-close" aria-label="Close email options" @click="closeEmailOptions">
          X
        </button>
        <h3 id="email-options-title">Choose Your Email</h3>
        <p>Select the email service you want to use for this enquiry.</p>
        <div class="email-options">
          <button
            v-for="option in emailOptions"
            :key="option.id"
            type="button"
            class="email-option"
            @click="openEmailOption(option)"
          >
            <span>{{ option.label }}</span>
            <small>{{ option.description }}</small>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'Residential',
  message: ''
})

const isEmailOptionsOpen = ref(false)
const emailRecipient = 'info@apexarch.com.au'

const emailSubject = computed(() => `New Enquiry: ${form.subject} - ${form.name}`)
const emailBody = computed(() => `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)

const buildGmailComposeUrl = () => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: emailRecipient,
    su: emailSubject.value,
    body: emailBody.value
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

const buildOutlookComposeUrl = () => {
  const params = new URLSearchParams({
    to: emailRecipient,
    subject: emailSubject.value,
    body: emailBody.value
  })

  return `https://outlook.live.com/mail/0/deeplink/compose?${params.toString()}`
}

const buildYahooComposeUrl = () => {
  const params = new URLSearchParams({
    to: emailRecipient,
    subject: emailSubject.value,
    body: emailBody.value
  })

  return `https://compose.mail.yahoo.com/?${params.toString()}`
}

const buildMailtoUrl = () => {
  const params = new URLSearchParams({
    subject: emailSubject.value,
    body: emailBody.value
  })

  return `mailto:${emailRecipient}?${params.toString()}`
}

const emailOptions = computed(() => [
  {
    id: 'gmail',
    label: 'Gmail',
    description: 'Open Gmail in your browser.',
    url: buildGmailComposeUrl(),
    opensInNewTab: true
  },
  {
    id: 'outlook',
    label: 'Outlook',
    description: 'Open Outlook in your browser.',
    url: buildOutlookComposeUrl(),
    opensInNewTab: true
  },
  {
    id: 'yahoo',
    label: 'Yahoo Mail',
    description: 'Open Yahoo Mail in your browser.',
    url: buildYahooComposeUrl(),
    opensInNewTab: true
  },
  {
    id: 'default',
    label: 'Default Mail App',
    description: 'Use the email app set on this device.',
    url: buildMailtoUrl(),
    opensInNewTab: false
  }
])

const openInNewTab = (url) => {
  const composeWindow = window.open('', '_blank')

  if (composeWindow) {
    composeWindow.opener = null
    composeWindow.location.href = url
  } else {
    window.location.assign(url)
  }
}

const openEmailOption = (option) => {
  if (option.opensInNewTab) {
    openInNewTab(option.url)
  } else {
    window.location.href = option.url
  }

  closeEmailOptions()
}

const closeEmailOptions = () => {
  isEmailOptionsOpen.value = false
}

const handleSubmit = () => {
  isEmailOptionsOpen.value = true
}
</script>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input, select, textarea {
  padding: 12px;
  border: 1px solid var(--border-color);
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.submit-btn {
  margin-top: 10px;
  width: 100%;
}

.email-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(26, 26, 26, 0.55);
}

.email-modal {
  position: relative;
  width: min(100%, 520px);
  padding: 32px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
}

.email-modal h3 {
  margin-bottom: 12px;
  font-size: 1.35rem;
}

.email-modal p {
  margin-bottom: 24px;
  color: rgba(26, 26, 26, 0.75);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
  line-height: 1;
}

.email-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.email-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 96px;
  padding: 18px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--secondary-bg);
  color: var(--text-color);
  text-align: left;
}

.email-option span {
  margin-bottom: 6px;
  font-weight: 700;
}

.email-option small {
  font-size: 0.78rem;
  line-height: 1.4;
  text-transform: none;
  letter-spacing: 0;
  opacity: 0.75;
}

@media (max-width: 560px) {
  .email-modal {
    padding: 28px 20px 20px;
  }

  .email-options {
    grid-template-columns: 1fr;
  }
}
</style>
