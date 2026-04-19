import Link from 'next/link';
import { getData } from '@/lib/db';
import styles from './dich-vu.module.css';

export const metadata = {
  title: 'Dịch Vụ Lắp Đặt Điện Mặt Trời | Thành Đạt Solar',
  description: 'Cung cấp các giải pháp điện mặt trời trọn gói: Lắp đặt áp mái, hệ thống lưu trữ, bảo trì và sửa chữa chuyên nghiệp.',
};

export default function ServicesPage() {
  const data = getData();
  const services = data.services || [];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
          <p>Giải pháp năng lượng tối ưu cho gia đình và doanh nghiệp</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.imageBox}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.infoBox}>
                <h2>{service.title}</h2>
                <p>{service.content.substring(0, 200)}...</p>
                <Link href={`/dich-vu/${service.slug}`} className={styles.detailBtn}>Chi tiết dự án &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.whyUs}>
        <div className="container">
          <h2 className="section-title">TẠI SAO CHỌN THÀNH ĐẠT SOLAR?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}>🏆</div>
              <h4>Kinh nghiệm & Uy tín</h4>
              <p>Hàng trăm công trình đã được bàn giao và hoạt động hiệu quả.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>⚡</div>
              <h4>Thiết bị chính hãng</h4>
              <p>Chỉ sử dụng pin và biến tần từ các thương hiệu top đầu thế giới.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>🛡️</div>
              <h4>Hỗ trợ trọn đời</h4>
              <p>Đồng hành cùng khách hàng trong suốt quá trình sử dụng hệ thống.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
