import Image from 'next/image';
import Link from 'next/link';
import styles from './BatteryStorageGrid.module.css';

export default function BatteryStorageGrid() {
  const batteries = [
    {
      brand: 'LVTOPSUN',
      title: 'Pin Lithium LVTOPSUN 51.2V - 300AH (Power Wall)',
      image: '/images/tampinluutru-6.jpg',
      price: 'Giá liên hệ',
      tag: 'Bán chạy'
    },
    {
      brand: 'BETTENERGY',
      title: 'Pin Lithium BETTENERGY 51.2V - 314AH (16kWh)',
      image: '/images/tampinluutru-1.jpg',
      price: 'Giá liên hệ',
      tag: 'Dung lượng lớn'
    },
    {
      brand: 'POWERBOX',
      title: 'Lithium POWERBOX 14.34kWh (Model ES-BOX12 MAX)',
      image: '/images/tampinluutru-3.jpg',
      price: 'Giá liên hệ',
      tag: 'Cao cấp'
    },
    {
      brand: 'POWERBOX',
      title: 'Lithium POWERBOX 5.12kWh (Model ES-BOX2)',
      image: '/images/tampinluutru-2.jpg',
      price: 'Giá liên hệ',
      tag: 'Phổ biến'
    },
    {
      brand: 'Deye',
      title: 'Hệ Thống Pin Lưu Trữ Deye (Lithium Battery)',
      image: '/images/tampinluutru-5.jpg',
      price: 'Giá liên hệ',
      tag: 'Hiệu suất cao'
    },
    {
      brand: 'BETTENERGY',
      title: 'Pin Lưu Trữ Lithium BETTENERGY (Compact Model)',
      image: '/images/tampinluutru-4.jpg',
      price: 'Giá liên hệ',
      tag: 'Thiết kế đẹp'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">PIN <span>LƯU TRỮ LITHIUM</span></h2>

        <div className={styles.grid}>
          {batteries.map((battery, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                {battery.tag && <span className={styles.tag}>{battery.tag}</span>}
                <Image
                  src={battery.image}
                  alt={battery.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.brand}>{battery.brand}</span>
                <h3>{battery.title}</h3>
                <p className={styles.price}>{battery.price}</p>
                <Link href="/lien-he" className={styles.btn}>
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
