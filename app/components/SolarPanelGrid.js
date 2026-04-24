import Image from 'next/image';
import Link from 'next/link';
import styles from './SolarPanelGrid.module.css';

export default function SolarPanelGrid() {
  const panels = [
    {
      brand: 'Canadian Solar',
      title: 'Tấm Pin CANADIAN 550W - 780W',
      slug: 'canadian-550w-780w',
      image: '/images/8841z6394868637238-bdc3e09702ccfbc1266d7c9d32931a5-300x300.webp',
      features: ['Hiệu suất cao vượt trội', 'Công nghệ Mono half-cell', 'Bảo hành 25 năm'],
      tag: 'Bán chạy'
    },
    {
      brand: 'Longi Solar',
      title: 'Tấm Pin Longi 600W - 670W',
      slug: 'longi-600w-670w',
      image: '/images/316z6394868802320-23cba65007c885cd52703c0dcea40308-300x300.webp',
      features: ['Hiệu suất ổn định', 'Kháng PID tuyệt vời', 'Chịu tải gió & tuyết cao'],
      tag: 'Phổ biến'
    },
    {
      brand: 'Jinko Solar',
      title: 'Tấm Pin Jinko Tiger Pro 550W - 700W',
      slug: 'jinko-tiger-pro-550w-700w',
      image: '/images/2537z6394868543983-8d5ed988fa8b84ba240ff66ebde6d06-300x300.webp',
      features: ['Công nghệ Tiger Pro', 'Độ bền cực cao', 'Hiệu suất quang năng tối ưu'],
      tag: 'Cao cấp'
    },
    {
      brand: 'Công Nghệ Mới',
      title: 'Tấm Pin Năng Lượng Full-Cell',
      slug: 'tam-pin-nang-luong-full-cell',
      image: '/images/z6713411960215-db4d9fe8f6b945a3f060784f8b35cb6f-300x300.jpg',
      features: ['Diện tích hấp thụ tối đa', 'Độ bền khung nhôm cao', 'Phù hợp mọi địa hình'],
      tag: 'Full-Cell'
    },
    {
      brand: 'Hiệu Suất Cao',
      title: 'Tấm Pin Năng Lượng Half-Cell',
      slug: 'tam-pin-nang-luong-half-cell',
      image: '/images/z6713414403022-c170ad8bf404fc7b52171464ff4d3107.jpg',
      features: ['Giảm tổn hao dòng điện', 'Hoạt động tốt khi bị che bóng', 'Tối ưu hóa nhiệt độ'],
      tag: 'Half-Cell'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">TẤM PIN <span>NĂNG LƯỢNG MẶT TRỜI</span></h2>

        <div className={styles.grid}>
          {panels.map((panel, index) => (
            <Link href={`/san-pham/${panel.slug}`} key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                {panel.tag && <span className={styles.tag}>{panel.tag}</span>}
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.brand}>{panel.brand}</span>
                <h3>{panel.title}</h3>
                <ul className={styles.features}>
                  {panel.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
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
