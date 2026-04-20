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
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'Residential',
  message: ''
})

const handleSubmit = () => {
  const subject = encodeURIComponent(`New Enquiry: ${form.subject} - ${form.name}`)
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
  const mailtoLink = `mailto:marcusbloomfield2@gmail.com?subject=${subject}&body=${body}`
  
  const link = document.createElement('a')
  link.href = mailtoLink
  link.click()
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
</style>
