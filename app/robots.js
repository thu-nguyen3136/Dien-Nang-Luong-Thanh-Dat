export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://lapdatdiennangluongmattroi.com/sitemap.xml',
  };
}
