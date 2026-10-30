// WooCommerce pages that still exist in WordPress but aren't part of this site.
export const STORE_PATHS = ['/shop/', '/cart/', '/checkout/', '/account/', '/refund_returns/', '/tickets-checkout/', '/tickets-order/'];

// Menu items sometimes store absolute WordPress URLs; turn them into site-relative paths.
export function toSitePath(uri: string | null | undefined, wpHostname: string): string {
  if (!uri) return '/';
  try {
    const url = new URL(uri, `https://${wpHostname}`);
    const hosts = [wpHostname, 'prizmstudio.com', 'www.prizmstudio.com'];
    return hosts.includes(url.hostname) ? url.pathname : uri;
  } catch {
    return uri;
  }
}

export function isStorePath(path: string): boolean {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return STORE_PATHS.includes(normalized);
}

export function formatDate(date: string | null | undefined): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
