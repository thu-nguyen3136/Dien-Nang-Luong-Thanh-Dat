import Image from 'next/image';
import Link from 'next/link';
import styles from './BatteryStorageGrid.module.css';

export default function BatteryStorageGrid() {
  const batteries = [
    {
      title: 'Pin lưu trữ 14,3k BH 10 năm',
      slug: 'pin-luu-tru-143k-bh-10-nam',
      image: '/images/tampinluutru-1.jpg',
      tag: 'Bảo hành 10 năm'
    },
    {
      title: 'Lithium Powerbox 5.12kWH, Model ES-Box12 Plus',
      slug: 'lithium-powerbox-512kwh',
      image: '/images/tampinluutru-2.jpg',
      tag: 'Phổ biến'
    },
    {
      title: 'Lithium Powerbox 10,34kWh Model ES-Box12 Plus',
      slug: 'lithium-powerbox-1034kwh',
      image: '/images/tampinluutru-3.jpg',
      tag: 'Mở rộng cao'
    },
    {
      title: 'Pin Lưu Trữ 16KWH | Pin Lithium Bettenegy 51.2v-314ah',
      slug: 'pin-luu-tru-16kwh-pin-lithium-bettenergy-51-2V-314AH',
      image: '/images/tampinluutru-4.jpg',
      tag: 'Dung lượng lớn'
    },
    {
      title: 'Pin Lưu Trữ Lifepo4 51,2v 200ah',
      slug: 'pin-luu-tru-lifepo4-51-2V-200AH',
      image: '/images/tampinluutru-5.jpg',
      tag: 'Hiệu suất 98%'
    },
    {
      title: 'Pin Lithium Lvtopsun 51.2V-300AH (LVTS 512300)',
      slug: 'pin-lithium-lvtopsun-51-2v-300ah',
      image: '/images/tampinluutru-6.jpg',
      tag: 'Chất lượng cao'
    },
    {
      title: 'Pin JA625',
      slug: 'pin-JA625',
      image: '/images/pin-JA625.jpg',
      tag: ''
    }
  ];

  return (
    <section className={styles.section} id="pin-luu-tru">
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'contain' }}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
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
