import Image from 'next/image';
import styles from './CommitmentSection.module.css';

export default function CommitmentSection() {
  const commitments = [
    {
      title: 'Nguồn Gốc Xuất Xứ Rõ Ràng',
      desc: 'Cam kết 100% thiết bị chính hãng từ các thương hiệu TOP đầu thế giới. Đầy đủ chứng chỉ CO, CQ và bảo hành theo tiêu chuẩn nhà sản xuất.',
      icon: '🛡️'
    },
    {
      title: 'Giải Pháp Tối Ưu - Đa Dạng',
      desc: 'Cung cấp nhiều chủng loại, mẫu mã với các phân khúc giá khác nhau, đáp ứng mọi nhu cầu từ hộ gia đình đến doanh nghiệp tập đoàn.',
      icon: '💡'
    },
    {
      title: 'Dịch Vụ Chuyên Nghiệp 24/7',
      desc: 'Luôn sẵn sàng tư vấn, hỗ trợ kỹ thuật và bảo trì nhanh chóng. Đội ngũ kỹ sư tận tâm đồng hành cùng khách hàng suốt vòng đời hệ thống.',
      icon: '🤝'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">TẠI SAO NÊN CHỌN <span>THÀNH ĐẠT SOLAR?</span></h2>

        <div className={styles.flexWrapper}>
          <div className={styles.content}>
            <div className={styles.list}>
              {commitments.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <div className={styles.itemContent}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.mainImage}>
              <Image 
                src="/images/N8.jpg" 
                alt="Thi công điện mặt trời Thành Đạt" 
                width={600} 
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.experienceBox}>
              <span className={styles.expNumber}>10+</span>
              <span className={styles.expText}>Năm Kinh Nghiệm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
