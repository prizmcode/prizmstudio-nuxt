<script setup lang="ts">
defineProps<{
  post: {
    title?: string | null;
    uri?: string | null;
    date?: string | null;
    excerpt?: string | null;
    featuredImage?: { node?: { sourceUrl?: string | null; altText?: string | null } | null } | null;
  };
}>();
</script>

<template>
  <article class="group">
    <NuxtLink :to="post.uri || '/'">
      <NuxtImg
        v-if="post.featuredImage?.node?.sourceUrl"
        :src="post.featuredImage.node.sourceUrl"
        :alt="post.featuredImage.node.altText || ''"
        width="600"
        height="400"
        loading="lazy"
        class="mb-4 aspect-[3/2] w-full rounded object-cover" />
      <h2 class="text-lg font-semibold group-hover:text-accent">{{ post.title }}</h2>
    </NuxtLink>
    <p class="mt-1 text-sm text-ink/60">{{ formatDate(post.date) }}</p>
    <div v-if="post.excerpt" class="prose prose-sm mt-2" v-html="post.excerpt" />
  </article>
</template>
