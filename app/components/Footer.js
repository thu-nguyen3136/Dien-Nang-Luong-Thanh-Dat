import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Column 1: Brand & Intro */}
        <div className={styles.column}>
          <div className={styles.logoSection}>
            <div className={styles.logoBox}>
              <Image
                src="/images/logo.png"
                alt="Thành Đạt Solar"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brandInfo}>
              <span className={styles.brandName}>THÀNH ĐẠT SOLAR</span>
              <span className={styles.tagline}>Năng lượng cho tương lai</span>
            </div>
          </div>
          <p className={styles.introText}>
            Thành Đạt Solar tự hào là đơn vị tiên phong trong lĩnh vực cung cấp giải pháp điện mặt trời áp mái. Chúng tôi cam kết mang đến nguồn năng lượng sạch, bền vững và tiết kiệm cho mọi gia đình Việt.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">FB</a>
            <a href="#" className={styles.socialIcon} aria-label="Zalo">ZL</a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Column 2: Quick Links with Icons */}
        <div className={styles.column}>
          <h3>LIÊN KẾT NHANH</h3>
          <ul className={styles.navList}>
            <li>
              <span className={styles.linkIcon}>»</span>
              <Link href="/gioi-thieu">Về chúng tôi</Link>
            </li>
            <li>
              <span className={styles.linkIcon}>»</span>
              <Link href="/san-pham">Sản phẩm Pin & Lưu trữ</Link>
            </li>
            <li>
              <span className={styles.linkIcon}>»</span>
              <Link href="/dich-vu">Dịch vụ thi công</Link>
            </li>
            <li>
              <span className={styles.linkIcon}>»</span>
              <Link href="/tin-tuc">Tin tức & Kinh nghiệm</Link>
            </li>
            <li>
              <span className={styles.linkIcon}>»</span>
              <Link href="/lien-he">Liên hệ báo giá</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className={styles.column}>
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <ul className={styles.contactInfo}>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <span>Thôn Liễu Trì, Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội</span>
            </li>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <span><strong>Hotline:</strong> 0368.444.567</span>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <span><strong>Email:</strong> thietbidienmattroivietnam@gmail.com</span>
            </li>
            <li>
              <span className={styles.contactIcon}>🌐</span>
              <span><strong>Website:</strong> thietbidienmattroivietnam.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {currentYear} <span>Thành Đạt Solar</span>. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
