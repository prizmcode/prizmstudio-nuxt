<script setup lang="ts">
import { findProject } from '~/data/projects';

const route = useRoute();
const project = findProject(String(route.params.slug));

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true });
}

useHead({ title: project.title });
useSeoMeta({ description: project.summary });
</script>

<template>
  <article v-if="project">
    <NuxtLink to="/work" class="text-sm text-ink/50 hover:text-accent">&larr; All work</NuxtLink>

    <header class="mt-6 grid gap-8 md:grid-cols-[2fr_1fr]">
      <div>
        <h1 class="text-4xl font-medium tracking-tight">{{ project.title }}</h1>
        <p class="mt-4 text-lg text-ink/70">{{ project.summary }}</p>
      </div>
      <dl class="space-y-3 text-sm">
        <div v-if="project.client">
          <dt class="text-ink/50">Client</dt>
          <dd>{{ project.client }}</dd>
        </div>
        <div>
          <dt class="text-ink/50">Year</dt>
          <dd>{{ project.year }}</dd>
        </div>
        <div>
          <dt class="text-ink/50">Services</dt>
          <dd>{{ project.services.join(', ') }}</dd>
        </div>
        <div v-if="project.url">
          <dt class="text-ink/50">Website</dt>
          <dd>
            <a :href="project.url" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-accent">
              {{ project.url.replace(/^https?:\/\//, '') }}
            </a>
          </dd>
        </div>
      </dl>
    </header>

    <NuxtImg
      v-if="project.image"
      :src="project.image"
      :alt="project.imageAlt || project.title"
      width="1600"
      class="mt-12 w-full rounded-sm" />

    <div v-if="project.description?.length" class="prose prose-lg mt-12 max-w-2xl">
      <p v-for="(paragraph, i) in project.description" :key="i">{{ paragraph }}</p>
    </div>
  </article>
</template>
