<script setup lang="ts">
import { projects } from '~/data/projects';

const featured = projects.slice(0, 4);
</script>

<template>
  <div>
    <section class="max-w-3xl py-12 sm:py-20">
      <h1 class="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">Websites and design, made with care.</h1>
      <p class="mt-6 text-lg text-ink/70">
        Prizm Studio is a small web development and graphic design studio in Bremerton, Washington, building clean, fast websites and the
        visual identities that go with them.
      </p>
      <div class="mt-10 flex gap-6 text-sm">
        <NuxtLink to="/work" class="rounded-sm bg-ink px-6 py-3 text-paper hover:bg-accent">See the work</NuxtLink>
        <NuxtLink to="/contact" class="py-3 underline underline-offset-4 hover:text-accent">Start a project</NuxtLink>
      </div>
    </section>

    <section class="grid gap-10 border-t border-ink/10 py-16 sm:grid-cols-2">
      <div>
        <h2 class="text-xl font-medium">Web development</h2>
        <p class="mt-3 text-ink/70">Custom websites and online stores built with Nuxt, Vue, WordPress and Tailwind: fast, accessible and easy to update.</p>
      </div>
      <div>
        <h2 class="text-xl font-medium">Graphic design</h2>
        <p class="mt-3 text-ink/70">Logos, brand identities and print pieces that give your business a clear, consistent look.</p>
      </div>
    </section>

    <section class="border-t border-ink/10 py-16">
      <div class="mb-10 flex items-baseline justify-between">
        <h2 class="text-2xl font-medium tracking-tight">Selected work</h2>
        <NuxtLink to="/work" class="text-sm hover:text-accent">All work &rarr;</NuxtLink>
      </div>
      <div class="grid gap-x-8 gap-y-14 sm:grid-cols-2">
        <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
      </div>
    </section>
  </div>
</template>
