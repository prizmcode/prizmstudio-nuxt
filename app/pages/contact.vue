<script setup lang="ts">
useHead({ title: 'Contact' });

const form = reactive({ name: '', email: '', message: '', company: '' });
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle');

// Submissions go to Netlify Forms (defined in public/__forms.html).
async function submit() {
  status.value = 'sending';
  try {
    const body = new URLSearchParams({ 'form-name': 'contact', ...form });
    const res = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    status.value = 'sent';
  } catch {
    status.value = 'error';
  }
}
</script>

<template>
  <div class="mx-auto max-w-xl">
    <h1 class="text-4xl font-medium tracking-tight">Contact</h1>
    <p class="mt-3 text-ink/60">Have a website or design project in mind? Tell me about it.</p>

    <p v-if="status === 'sent'" class="mt-10 rounded-sm bg-ink/5 p-6">Thank you! I'll get back to you soon.</p>

    <form v-else class="mt-10 space-y-6" @submit.prevent="submit">
      <label class="block">
        <span class="text-sm">Name</span>
        <input v-model="form.name" name="name" required autocomplete="name" class="field" />
      </label>
      <label class="block">
        <span class="text-sm">Email</span>
        <input v-model="form.email" name="email" type="email" required autocomplete="email" class="field" />
      </label>
      <label class="block">
        <span class="text-sm">Message</span>
        <textarea v-model="form.message" name="message" rows="6" required class="field" />
      </label>
      <label class="hidden" aria-hidden="true">
        Company
        <input v-model="form.company" name="company" tabindex="-1" autocomplete="off" />
      </label>

      <button type="submit" :disabled="status === 'sending'" class="rounded-sm bg-ink px-6 py-3 text-sm text-paper hover:bg-accent disabled:opacity-50">
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </button>
      <p v-if="status === 'error'" class="text-sm text-red-700">Something went wrong. Please try again.</p>
    </form>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.field {
  @apply mt-2 block w-full rounded-sm border border-ink/15 bg-white px-4 py-3 outline-none focus:border-ink;
}
</style>
