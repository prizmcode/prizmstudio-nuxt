<script setup lang="ts">
const { wpHostname } = useRuntimeConfig().public;

const { data: settings } = await useAsyncGql('getSiteSettings');
const { data: menu } = await useAsyncGql('getMenu', { name: 'Primary menu' });

const siteTitle = computed(() => settings.value?.generalSettings?.title || 'Prizm Studio');

const menuItems = computed(() =>
  (menu.value?.menu?.menuItems?.nodes ?? [])
    .map((item) => ({ id: item.id, label: item.label, to: toSitePath(item.uri, wpHostname) }))
    .filter((item) => !isStorePath(item.to)),
);

useHead({
  titleTemplate: (title) => (title ? `${title} | ${siteTitle.value}` : siteTitle.value),
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="border-b border-ink/10">
      <nav class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">
        <NuxtLink to="/" class="text-xl font-semibold tracking-tight">{{ siteTitle }}</NuxtLink>
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li v-for="item in menuItems" :key="item.id">
            <NuxtLink :to="item.to" class="hover:text-accent">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <slot />
    </main>

    <footer class="border-t border-ink/10">
      <div class="mx-auto max-w-6xl px-4 py-8 text-sm text-ink/60">
        &copy; {{ new Date().getFullYear() }} Prizm Studio, LLC
      </div>
    </footer>
  </div>
</template>
