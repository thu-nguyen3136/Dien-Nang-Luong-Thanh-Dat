import Image from 'next/image';
import styles from './FeaturedServices.module.css';
import Link from 'next/link';

export default function FeaturedServices() {
  const services = [
    {
      title: 'THIẾT KẾ HỆ THỐNG ĐIỆN NĂNG LƯỢNG MẶT TRỜI',
      desc: 'Tư vấn và thiết kế bản vẽ kỹ thuật chi tiết, tối ưu hóa diện tích lắp đặt và hiệu suất thu năng lượng.',
      image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-6.webp',
      link: '/thiet-ke-he-thong-dien-nang-luong-mat-troi'
    },
    {
      title: 'LẮP ĐẶT HỆ THỐNG ĐIỆN NĂNG LƯỢNG MẶT TRỜI',
      desc: 'Quy trình thi công chuyên nghiệp, đảm bảo an toàn, đúng tiến độ và vận hành ổn định lâu dài.',
      image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-7.webp',
      link: '/lap-dat-he-thong-dien-nang-luong-mat-troi'
    },
    {
      title: 'LẮP ĐẶT ĐIỆN MẶT TRỜI ÁP MÁI TRỌN GÓI',
      desc: 'Giải pháp trọn gói từ tư vấn, thiết kế đến thi công, giúp khách hàng tiết kiệm tối đa chi phí điện năng.',
      image: '/images/ap-mai.png',
      link: '/lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi'
    }
  ];

  return (
    <section className={styles.featured}>
      <div className="container">
        <h2 className="section-title">DỊCH VỤ <span>NỔI BẬT</span></h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.link} className={styles.card}>
              <div className={styles.imageOverlay}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.img}
                />
                <div className={styles.gradient}></div>
              </div>
              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link href={service.link} className={styles.link}>
                  Chi Tiết <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
