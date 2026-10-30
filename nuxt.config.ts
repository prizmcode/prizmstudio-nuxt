import tailwindcss from '@tailwindcss/vite';

// WordPress (headless) provides the About page over WPGraphQL and sends contact
// form email (prizm-contact mu-plugin). The store lives on liliesofthefield.co.
const GQL_HOST = process.env.GQL_HOST || 'https://prizmstudio.com/graphql';
const WP_ORIGIN = new URL(GQL_HOST).origin;
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
      wpOrigin: WP_ORIGIN,
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

  // Built as static files (`npm run generate`) and uploaded to Hostinger.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
});
