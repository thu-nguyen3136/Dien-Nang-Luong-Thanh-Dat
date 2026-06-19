import { getData } from '@/lib/db';

export default async function sitemap() {
  const baseUrl = 'https://lapdatdiennangluongmattroi.com'; 
  const data = getData();
  const dbServices = data.services || [];

  const rootServiceSlugs = new Set([
    'thiet-ke-he-thong-dien-nang-luong-mat-troi',
    'lap-dat-he-thong-dien-nang-luong-mat-troi',
    'lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi',
    'thi-cong-dien-nang-luong-mat-troi-tai-ha-noi',
    'thi-cong-dien-nang-luong-mat-troi-tai-hung-yen',
    'thi-cong-dien-nang-luong-mat-troi-tai-bac-giang',
    'thi-cong-dien-nang-luong-mat-troi-tai-phu-tho'
  ]);

  const posts = (data.posts || [])
    .filter((post) => post.status !== 'draft')
    .map((post) => ({
      url: `${baseUrl}/tin-tuc/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

  const products = (data.products || [])
    .filter((product) => product.status !== 'draft')
    .map((product) => ({
      url: `${baseUrl}/san-pham/${product.slug}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  const services = dbServices
    .filter((service) => service.status !== 'draft')
    .map((service) => {
      const isRoot = rootServiceSlugs.has(service.slug);
      return {
        url: isRoot ? `${baseUrl}/${service.slug}` : `${baseUrl}/dich-vu/${service.slug}`,
        lastModified: service.updatedAt ? new Date(service.updatedAt) : new Date(),
        changeFrequency: isRoot ? 'weekly' : 'monthly',
        priority: 0.7,
      };
    });

  const baseStaticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/gioi-thieu', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/lien-he', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/san-pham', priority: 0.9, changeFrequency: 'daily' },
    { url: '/san-pham/pin-luu-tru', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/san-pham/tam-pin-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/dich-vu', priority: 0.9, changeFrequency: 'daily' },
    { url: '/tin-tuc', priority: 0.9, changeFrequency: 'daily' },
    { url: '/lap-dat-he-thong', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/cung-cap-cac-goi-he-thong-dien-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
  ];

  // If a root service is not in db.json, still include it as static fallback
  for (const slug of rootServiceSlugs) {
    const exists = dbServices.some(s => s.slug === slug);
    if (!exists) {
      baseStaticPages.push({
        url: `/${slug}`,
        priority: 0.8,
        changeFrequency: 'weekly'
      });
    }
  }

  const staticPages = baseStaticPages.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticPages, ...posts, ...products, ...services];
}

