<script setup lang="ts">
useHead({ title: 'Blog' });

const { data: posts } = await useAsyncGql('getPosts', { first: 24 });
</script>

<template>
  <div>
    <h1 class="mb-10 text-4xl font-semibold tracking-tight">Blog</h1>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard v-for="post in posts?.posts?.nodes ?? []" :key="post.id" :post="post" />
    </div>
  </div>
</template>
