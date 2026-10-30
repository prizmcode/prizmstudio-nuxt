<script setup lang="ts">
import type { Project } from '~/data/projects';

defineProps<{ project: Project }>();
</script>

<template>
  <NuxtLink :to="`/work/${project.slug}`" class="group block">
    <div class="aspect-[4/3] overflow-hidden rounded-sm bg-ink/5">
      <NuxtImg
        v-if="project.image"
        :src="project.image"
        :alt="project.imageAlt || project.title"
        width="800"
        height="600"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      <div v-else class="flex h-full items-center justify-center p-8 text-center text-2xl font-medium tracking-tight text-ink/40">
        {{ project.title }}
      </div>
    </div>
    <div class="mt-4 flex items-baseline justify-between gap-4">
      <h3 class="font-medium group-hover:text-accent">{{ project.title }}</h3>
      <span class="text-sm text-ink/50">{{ project.year }}</span>
    </div>
    <p class="mt-1 text-sm text-ink/60">{{ project.categories.join(' · ') }}</p>
  </NuxtLink>
</template>
