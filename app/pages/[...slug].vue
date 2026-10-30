<script setup lang="ts">
// Renders any WordPress page or post at its existing URI, so old links keep working.
const route = useRoute();
const uri = route.path.endsWith('/') ? route.path : `${route.path}/`;

if (isStorePath(uri)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data } = await useAsyncGql('getNodeByUri', { uri });
const node = computed(() => {
  const n = data.value?.nodeByUri;
  return n?.__typename === 'Page' || n?.__typename === 'Post' ? n : null;
});

if (!node.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

useHead({ title: node.value.title || undefined });
</script>

<template>
  <article v-if="node" class="mx-auto max-w-3xl">
    <h1 class="text-4xl font-semibold tracking-tight">{{ node.title }}</h1>
    <p v-if="node.__typename === 'Post'" class="mt-2 text-sm text-ink/60">{{ formatDate(node.date) }}</p>
    <div class="prose prose-lg mt-8 max-w-none" v-html="node.content" />
  </article>
</template>
