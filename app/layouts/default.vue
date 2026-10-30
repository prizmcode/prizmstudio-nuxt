<script setup lang="ts">
const nav = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

useHead({
  titleTemplate: (title) => (title ? `${title} | Prizm Studio` : 'Prizm Studio | Web Development & Graphic Design'),
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header>
      <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
        <NuxtLink to="/" class="text-lg font-medium tracking-tight">Prizm Studio</NuxtLink>
        <ul class="flex gap-6 text-sm">
          <li v-for="item in nav" :key="item.to">
            <NuxtLink :to="item.to" class="hover:text-accent" active-class="text-accent">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <slot />
    </main>

    <footer>
      <div class="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-10 text-sm text-ink/50 sm:px-6">
        <span>&copy; {{ new Date().getFullYear() }} Prizm Studio, LLC</span>
        <NuxtLink to="/contact" class="hover:text-accent">Get in touch</NuxtLink>
      </div>
    </footer>
  </div>
</template>
