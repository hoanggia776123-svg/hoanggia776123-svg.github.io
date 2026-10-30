/**
 * Resolves a path relative to the configured Astro base URL.
 * Ensures consistent linking whether hosted at root or subpath (/repo/).
 */
export function url(path: string = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanPath}`;
}
