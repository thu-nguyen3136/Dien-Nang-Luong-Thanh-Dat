import Link from 'next/link';
import { getData } from '@/lib/db';
import styles from './san-pham.module.css';

export const metadata = {
  title: 'Sản Phẩm Pin Năng Lượng Mặt Trời & Phụ Kiện | Thành Đạt Solar',
  description: 'Cung cấp tấm pin Jinko, Longi, Inverter Deye, Luxpower và các hệ thống lưu trữ Lithium chất lượng cao.',
};

export default function ProductsPage() {
  const data = getData();
  const products = data.products || [];

  return (
    <div className={styles.productsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>SẢN PHẨM & GIẢI PHÁP</h1>
          <p>Thiết bị năng lượng mặt trời hàng đầu thế giới</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageBox}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.infoBox}>
                <h2>{product.title}</h2>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.excerpt}>{product.excerpt}</p>
                <Link href={`/san-pham/${product.slug}`} className={styles.viewBtn}>Xem chi tiết</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
