import { getData } from '@/lib/db';
import styles from './service-detail.module.css';
import { notFound } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getData();
  const service = data.services.find(s => s.slug.toLowerCase() === slug.toLowerCase());

  if (!service) return { title: 'Dịch vụ không tồn tại' };

  return {
    title: `${service.title} | Thành Đạt Solar`,
    description: service.desc || `Dịch vụ ${service.title} uy tín, chuyên nghiệp tại Thành Đạt Solar. Giải pháp điện năng lượng mặt trời tối ưu cho bạn.`,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const data = getData();
  const service = data.services.find(s => s.slug.toLowerCase() === slug.toLowerCase());

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.serviceDetail}>
      <div className={styles.breadcrumb}>
        <div className="container">
          <p>Trang chủ / Dịch vụ / {service.title}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.contentColumn}>
            <header className={styles.header}>
              <h1>{service.title}</h1>
            </header>

            <div className={styles.featuredImage}>
              <img src={service.image} alt={service.title} />
            </div>

            <div className={styles.bodyText}>
              <div dangerouslySetInnerHTML={{ __html: service.content.replace(/\n/g, '<br/>') }} />
            </div>

            <div className={styles.contactSection}>
              <h3>Bạn cần thi công dự án tương tự?</h3>
              <p>Hãy liên hệ với đội ngũ kỹ thuật của Thành Đạt Solar để được khảo sát và báo giá chi tiết.</p>
              <div className={styles.btnGroup}>
                <a href="tel:0368444567" className={styles.phoneBtn}>GỌI NGAY: 0368.444.567</a>
                <a href="https://zalo.me/0368444567" className={styles.zaloBtn}>CHAT ZALO</a>
              </div>
            </div>
          </div>

          <Sidebar recentPosts={data.posts} />
        </div>
      </div>
    </div>
  );
}
