# Prizm Studio (Nuxt)

The prizmstudio.com site: Nuxt 4 on the front end, with WordPress used headless (through WPGraphQL) for the About page content. This site has no store. The WooCommerce shop lives on liliesofthefield.co.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

`GQL_HOST` points at the WordPress GraphQL endpoint. It is `https://prizmstudio.com/graphql` for now and changes to `https://cms.prizmstudio.com/graphql` when WordPress moves to the subdomain at launch.

## Where content lives

- **Portfolio:** `app/data/projects.ts`. Add an entry there and put its images in `public/images/work/`.
- **About:** the "About Prizm Studio" page in WordPress, fetched with `app/queries/getPage.gql`.
- **Home and contact copy:** directly in `app/pages/`.
- **Contact form:** Netlify Forms. The form is defined in `public/__forms.html`, and submissions show up under Forms in the Netlify dashboard, where you can turn on email notifications.

## Deploying

Netlify builds with `npm run build`. Set `GQL_HOST` in the site's environment variables.
