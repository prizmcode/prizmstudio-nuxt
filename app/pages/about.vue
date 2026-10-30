<script setup lang="ts">
// Content is edited in WordPress on the "About Prizm Studio" page.
useHead({ title: 'About' });

const { data } = await useAsyncGql('getPage', { uri: '/about-prizm-studio/' });
const page = computed(() => data.value?.page);
</script>

<template>
  <article class="mx-auto max-w-2xl">
    <h1 class="text-4xl font-medium tracking-tight">About</h1>
    <div v-if="page?.content" class="prose prose-lg mt-10" v-html="page.content" />
  </article>
</template>
