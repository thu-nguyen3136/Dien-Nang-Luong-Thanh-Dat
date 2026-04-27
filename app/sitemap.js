import { getData } from '@/lib/db';

export default async function sitemap() {
  const baseUrl = 'https://lapdatdiennangluongmattroi.com'; 
  const data = getData();

  const posts = (data.posts || []).map((post) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const products = (data.products || []).map((product) => ({
    url: `${baseUrl}/san-pham/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const services = (data.services || []).map((service) => ({
    url: `${baseUrl}/dich-vu/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/gioi-thieu', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/lien-he', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/san-pham', priority: 0.9, changeFrequency: 'daily' },
    { url: '/san-pham/pin-luu-tru', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/san-pham/tam-pin-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/dich-vu', priority: 0.9, changeFrequency: 'daily' },
    { url: '/tin-tuc', priority: 0.9, changeFrequency: 'daily' },
    { url: '/lap-dat-he-thong-dien-nang-luong-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/thiet-ke-he-thong-dien-nang-luong-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/cung-cap-cac-goi-he-thong-dien-mat-troi', priority: 0.8, changeFrequency: 'weekly' },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticPages, ...posts, ...products, ...services];
}
