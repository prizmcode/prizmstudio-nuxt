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
- **Contact form:** posts to `/wp-json/prizm/v1/contact` on WordPress (the `prizm-contact.php` mu-plugin in the `prizm-studio-wp-content` repo), which emails each message through WP Mail SMTP.

## Deploying

The site is static. `npm run generate` writes it to `.output/public/`, and `.github/workflows/deploy.yml` uploads that folder to Hostinger over FTP. The comments at the top of the workflow list the GitHub secrets and variables it needs. It deploys only when you start it by hand until the `DEPLOY_ON_PUSH` variable is set to `true`.

Because the pages are built ahead of time, changes to the About page in WordPress appear after the next deploy.
