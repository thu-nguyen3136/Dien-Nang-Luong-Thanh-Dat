import Image from 'next/image';
import Link from 'next/link';
import styles from './BatteryStorageGrid.module.css';

export default function BatteryStorageGrid() {
  const batteries = [
    {
      brand: 'LVTOPSUN',
      title: 'Pin Lithium LVTOPSUN 51.2V - 300AH (Power Wall)',
      slug: 'pin-lithium-lvtopsun-51-2v-300ah',
      image: '/images/tampinluutru-6.jpg',
      tag: 'Bán chạy'
    },
    {
      brand: 'BETTENERGY',
      title: 'Pin Lithium BETTENERGY 51.2V - 314AH (16kWh)',
      slug: 'pin-lithium-bettenergy-51-2v-314ah',
      image: '/images/tampinluutru-1.jpg',
      tag: 'Dung lượng lớn'
    },
    {
      brand: 'POWERBOX',
      title: 'Lithium POWERBOX 14.34kWh (Model ES-BOX12 MAX)',
      slug: 'lithium-powerbox-14-34kwh',
      image: '/images/tampinluutru-3.jpg',
      tag: 'Cao cấp'
    },
    {
      brand: 'POWERBOX',
      title: 'Lithium POWERBOX 5.12kWh (Model ES-BOX2)',
      slug: 'lithium-powerbox-5-12kwh',
      image: '/images/tampinluutru-2.jpg',
      tag: 'Phổ biến'
    },
    {
      brand: 'Deye',
      title: 'Hệ Thống Pin Lưu Trữ Deye (Lithium Battery)',
      slug: 'he-thong-pin-luu-tru-deye',
      image: '/images/tampinluutru-5.jpg',
      tag: 'Hiệu suất cao'
    },
    {
      brand: 'BETTENERGY',
      title: 'Pin Lưu Trữ Lithium BETTENERGY (Compact Model)',
      slug: 'pin-luu-tru-lithium-bettenergy-compact',
      image: '/images/tampinluutru-4.jpg',
      tag: 'Thiết kế đẹp'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">PIN <span>LƯU TRỮ LITHIUM</span></h2>

        <div className={styles.grid}>
          {batteries.map((battery, index) => (
            <Link href={`/san-pham/${battery.slug}`} key={index} className={styles.card}>
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
                <div className={styles.contactTextWrapper}>
                  <span className={styles.contactText}>Giá: Liên Hệ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
