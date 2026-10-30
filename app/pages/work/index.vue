<script setup lang="ts">
import { projects } from '~/data/projects';

useHead({ title: 'Work' });
</script>

<template>
  <div>
    <h1 class="text-4xl font-medium tracking-tight">Work</h1>
    <p class="mt-3 max-w-xl text-ink/60">Selected web development and graphic design projects.</p>
    <div class="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
