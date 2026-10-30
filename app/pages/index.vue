<script setup lang="ts">
const { data: settings } = await useAsyncGql('getSiteSettings');
const { data: posts } = await useAsyncGql('getPosts', { first: 3 });
</script>

<template>
  <div>
    <section class="py-16">
      <h1 class="text-5xl font-semibold tracking-tight">{{ settings?.generalSettings?.title }}</h1>
      <p class="mt-4 text-xl text-ink/70">{{ settings?.generalSettings?.description }}</p>
    </section>

    <section v-if="posts?.posts?.nodes?.length" class="mt-8">
      <div class="mb-6 flex items-baseline justify-between">
        <h2 class="text-2xl font-semibold">From the blog</h2>
        <NuxtLink to="/blog" class="text-sm hover:text-accent">All posts &rarr;</NuxtLink>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard v-for="post in posts.posts.nodes" :key="post.id" :post="post" />
      </div>
    </section>
  </div>
</template>
