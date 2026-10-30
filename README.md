# Prizm Studio (Nuxt)

The prizmstudio.com site: Nuxt 4 on the front end, with WordPress used headless for pages, posts and menus through WPGraphQL. This site has no store. The WooCommerce shop lives on liliesofthefield.co.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

`GQL_HOST` points at the WordPress GraphQL endpoint. It is `https://prizmstudio.com/graphql` for now and changes to `https://cms.prizmstudio.com/graphql` when WordPress moves to the subdomain at launch.

## How content is routed

- `/` shows the home page, with the site title and tagline from WordPress plus the latest posts.
- `/blog` lists posts.
- Every other path is looked up in WordPress with `nodeByUri`, so existing page and post URLs keep working.
- Store pages (shop, cart, checkout, account) return 404. See `app/utils/wp.ts`.

## Deploying

Netlify builds with `npm run build`. Set `GQL_HOST` in the site's environment variables.
