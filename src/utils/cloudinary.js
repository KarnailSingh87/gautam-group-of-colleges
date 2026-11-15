import cloudinaryMap from '../data/cloudinaryMap.json';

/**
 * Returns the Cloudinary CDN URL for an asset path if mapped, otherwise returns the original path.
 * Supports auto-format and auto-quality for ultra-fast asset delivery on Render and mobile devices.
 * @param {string} path - e.g. '/ggc-campus.jpg' or '/apex-logos/ugc.png'
 * @returns {string} Cloudinary CDN URL or original path
 */
export function getCdnUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return cloudinaryMap[normalized] || cloudinaryMap[path] || path;
}

export default getCdnUrl;
