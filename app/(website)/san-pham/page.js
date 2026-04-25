import Link from 'next/link';
import { getData } from '@/lib/db';
import styles from './san-pham.module.css';
import SolarPanelGrid from '@/app/components/SolarPanelGrid';
import BatteryStorageGrid from '@/app/components/BatteryStorageGrid';

export const metadata = {
  title: 'Sản Phẩm Pin Năng Lượng Mặt Trời & Thiết Bị | Thành Đạt Solar',
  description: 'Cung cấp tấm pin Jinko, Longi, Inverter Deye, Luxpower và các hệ thống lưu trữ Lithium chất lượng cao.',
};

export default function ProductsPage() {
  const data = getData();
  const products = data.products || [];

  // Loại bỏ các item lắp đặt hệ thống (không phải là thiết bị rời như solar panel hay battery)
  const filteredProducts = products.filter(p => p.id.startsWith('solar-') || p.id.startsWith('battery-'));

  return (
    <div className={styles.productsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>SẢN PHẨM & THIẾT BỊ</h1>
          <p>Cung cấp thiết bị năng lượng mặt trời hàng đầu thế giới</p>
        </div>
      </section>

      <SolarPanelGrid />

      <BatteryStorageGrid />

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
