import tailwindcss from '@tailwindcss/vite';

// WordPress (headless) provides pages, posts and menus over WPGraphQL.
// The store lives on liliesofthefield.co, so no WooCommerce code here.
const GQL_HOST = process.env.GQL_HOST || 'https://prizmstudio.com/graphql';
const WP_HOSTNAME = new URL(GQL_HOST).hostname;

export default defineNuxtConfig({
  compatibilityDate: '2026-01-18',

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },

  modules: ['nuxt-graphql-client', '@nuxt/image', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      wpHostname: WP_HOSTNAME,
      'graphql-client': {
        clients: {
          default: { host: GQL_HOST },
        },
      },
    },
  },

  image: {
    domains: [WP_HOSTNAME],
  },

  // Serve cached pages from the CDN and refresh them from WordPress in the background.
  routeRules: {
    '/**': { isr: 3600 },
  },
});
