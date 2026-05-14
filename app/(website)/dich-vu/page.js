import Link from 'next/link';
import { getData } from '@/lib/db';
import styles from './dich-vu.module.css';
import FeaturedServices from '@/app/components/FeaturedServices';
import SystemProductGrid from '@/app/components/SystemProductGrid';

export const metadata = {
  title: 'Dịch Vụ Lắp Đặt Điện Mặt Trời | Thành Đạt Solar',
  description: 'Cung cấp các giải pháp điện mặt trời trọn gói: Lắp đặt áp mái, hệ thống lưu trữ, bảo trì và sửa chữa chuyên nghiệp.',
};

export default function ServicesPage() {
  const data = getData();
  const services = data.services || [];
  const products = data.products || [];
  // Lấy các gói hệ thống
  const systemProducts = products.filter(p => !p.id.startsWith('solar-') && !p.id.startsWith('battery-'));

  return (
    <div className={styles.servicesPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>DỊCH VỤ & GIẢI PHÁP</h1>
          <p>Cung cấp giải pháp năng lượng tối ưu cho gia đình và doanh nghiệp</p>
        </div>
      </section>

      {/* 1. Grid CÁC GÓI HỆ THỐNG ĐIỆN MẶT TRỜI */}
      <SystemProductGrid products={systemProducts} />

      {/* 2. Grid DỊCH VỤ NỔI BẬT */}
      <FeaturedServices />

      {/* 3. Danh sách dịch vụ chi tiết (Design Wide Card) */}
      <section style={{ padding: '40px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title">DỰ ÁN <span>TIÊU BIỂU</span></h2>
          
          <div className={styles.provinceGrid}>
            {[
              {
                title: 'Thi công điện năng lượng mặt trời tại Hà Nội',
                desc: 'Giải pháp năng lượng sạch tối ưu cho hộ gia đình và doanh nghiệp tại Thủ đô.',
                image: '/images/lap-va-ban-dien-nang-luong-mat-t.png',
                link: '/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi'
              },
              {
                title: 'Thi công điện năng lượng mặt trời tại Hưng Yên',
                desc: 'Lắp đặt hệ thống điện mặt trời áp mái chuyên nghiệp, tiết kiệm chi phí tại Hưng Yên.',
                image: '/images/lap-dat-he-thong-dien-nang-luong-mat-troi.png',
                link: '/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen'
              },
              {
                title: 'Thi công điện năng lượng mặt trời tại Bắc Giang',
                desc: 'Tư vấn và lắp đặt hệ thống điện năng lượng mặt trời hiệu suất cao tại Bắc Giang.',
                image: '/images/dien-nang-luong-mt-kn.png',
                link: '/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang'
              },
              {
                title: 'Thi công điện năng lượng mặt trời tại Phú Thọ',
                desc: 'Dịch vụ thi công điện mặt trời trọn gói, bảo hành dài hạn tại khu vực Phú Thọ.',
                image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi.png',
                link: '/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho'
              }
            ].map((province) => (
              <div key={province.link} className={styles.provinceCard}>
                <Link href={province.link}>
                  <img src={province.image} alt={province.title} className={styles.provinceImage} />
                </Link>
                <div className={styles.provinceInfo}>
                  <h3>{province.title}</h3>
                  <p>{province.desc}</p>
                  <Link href={province.link} className={styles.provinceLink}>Chi tiết &rarr;</Link>
                </div>
              </div>
            ))}
          </div>

          {services.length > 0 && (
            <div className={styles.servicesGrid} style={{ marginTop: '40px' }}>
              {services.map((service) => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.imageBox}>
                    <Link href={`/dich-vu/${service.slug}`}>
                      <img src={service.image} alt={service.title} />
                    </Link>
                  </div>
                  <div className={styles.infoBox}>
                    <h2>{service.title}</h2>
                    <p>{service.content.substring(0, 200)}...</p>
                    <Link href={`/dich-vu/${service.slug}`} className={styles.detailBtn}>Chi tiết dự án &rarr;</Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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
