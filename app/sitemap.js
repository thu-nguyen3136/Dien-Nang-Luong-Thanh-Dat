import { getData } from '@/lib/db';

export default async function sitemap() {
  const baseUrl = 'https://thietbidienmattroivietnam.com'; 
  const data = getData();

  const posts = (data.posts || []).map((post) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    lastModified: new Date(),
  }));

  const products = (data.products || []).map((product) => ({
    url: `${baseUrl}/san-pham/${product.slug}`,
    lastModified: new Date(),
  }));

  const services = (data.services || []).map((service) => ({
    url: `${baseUrl}/dich-vu/${service.slug}`,
    lastModified: new Date(),
  }));

  const staticPages = [
    '',
    '/gioi-thieu',
    '/lien-he',
    '/san-pham',
    '/dich-vu',
    '/tin-tuc',
    '/lap-dat-he-thong-dien-nang-luong-mat-troi',
    '/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi',
    '/lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi',
    '/thiet-ke-he-thong-dien-nang-luong-mat-troi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...posts, ...products, ...services];
}
