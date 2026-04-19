import Image from 'next/image';
import styles from './AboutSection.module.css';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/gioi-thieu-thanh-dat.png" 
                alt="Về Thành Đạt Solar - Giải pháp điện mặt trời uy tín" 
                width={600} 
                height={400}
                className={styles.img}
              />
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.years}>10+</span>
              <span className={styles.expText}>Năm<br/>Kinh Nghiệm</span>
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <h2 className={styles.subTitle}>VỀ CHÚNG TÔI</h2>
            <h3 className={styles.mainTitle}>THÀNH ĐẠT SOLAR - GIẢI PHÁP NĂNG LƯỢNG XANH BỀN VỮNG</h3>
            <p className={styles.description}>
              <strong>Thành Đạt Solar</strong> là đơn vị chuyên nghiệp trong lĩnh vực tư vấn, thiết kế và thi công trọn gói hệ thống điện mặt trời áp mái. Với quy trình bài bản, chúng tôi cam kết giải pháp tiết kiệm điện tối ưu, an toàn và bền vững nhất cho mọi khách hàng.
            </p>
            
            <ul className={styles.featureList}>
              <li>
                <div className={styles.checkIcon}>✓</div>
                <div><strong>Thiết bị chính hãng:</strong> Tấm pin Jinko, Longi, Inverter Deye, Luxpower...</div>
              </li>
              <li>
                <div className={styles.checkIcon}>✓</div>
                <div><strong>Thi công chuyên nghiệp:</strong> Đảm bảo kỹ thuật, thẩm mỹ và an toàn tuyệt đối.</div>
              </li>
              <li>
                <div className={styles.checkIcon}>✓</div>
                <div><strong>Hỗ trợ 24/7:</strong> Bảo trì, bảo dưỡng và giám sát hệ thống trọn đời.</div>
              </li>
            </ul>
            
            <div className={styles.btns}>
              <Link href="/gioi-thieu" className="btn-primary">TÌM HIỂU THÊM</Link>
              <div className={styles.contactMini}>
                <span>Hotline tư vấn:</span>
                <a href="tel:0368444567">0368.444.567</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
