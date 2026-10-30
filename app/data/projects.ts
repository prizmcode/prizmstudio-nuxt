// Portfolio entries. Add a project by adding an object here; put its images in
// public/images/work/ and reference them as /images/work/<file>.
export type ProjectCategory = 'Web development' | 'Graphic design';

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year: number;
  categories: ProjectCategory[];
  summary: string;
  // Longer write-up for the project page; each string is a paragraph.
  description?: string[];
  services: string[];
  url?: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: 'lilies-of-the-field',
    title: 'Lilies of the Field',
    year: 2026,
    categories: ['Web development', 'Graphic design'],
    summary: 'A headless WooCommerce shop for calligraphy templates and commissions, with a custom template generator.',
    services: ['Nuxt', 'WooCommerce', 'GraphQL', 'Branding'],
    url: 'https://liliesofthefield.co',
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
