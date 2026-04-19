import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topSlogan}>
            Thành Đạt Solar - Giải pháp năng lượng xanh tiết kiệm cho mọi gia đình
          </div>
          <div className={styles.topRight}>
            <a href="tel:0368444567" className={styles.topCallBtn}>
              <span className={styles.topCallIcon}>📞</span>
              Gọi ngay: 0368.444.567
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoWrapper}>
              <div className={styles.logoImageContainer}>
                <Image
                  src="/images/logo.png"
                  alt="Thành Đạt Solar"
                  width={100}
                  height={45}
                  className={styles.logoImg}
                  priority
                />
              </div>

              <div className={styles.logoText}>
                <span className={styles.brandName}>
                  THÀNH ĐẠT SOLAR
                </span>
                <span className={styles.tagline}>
                  Năng lượng cho tương lai
                </span>
              </div>
            </Link>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.active}>TRANG CHỦ</Link></li>
              <li><Link href="/gioi-thieu">GIỚI THIỆU</Link></li>

              <li className={styles.hasDropdown}>
                <Link href="/san-pham">SẢN PHẨM <span className={styles.arrowIcon}>▾</span></Link>
                <ul className={styles.dropdown}>
                  <li><Link href="/san-pham?cat=tam-pin">Tấm pin mặt trời</Link></li>
                  <li><Link href="/san-pham?cat=bien-tan">Biến tần (Inverter)</Link></li>
                  <li><Link href="/san-pham?cat=pin-luu-tru">Pin lưu trữ Lithium</Link></li>
                  <li><Link href="/san-pham?cat=phu-kien">Phụ kiện điện mặt trời</Link></li>
                </ul>
              </li>
              <li className={styles.hasDropdown}>
                <Link href="/dich-vu">DỊCH VỤ <span className={styles.arrowIcon}>▾</span></Link>
                <ul className={styles.dropdown}>
                  <li><Link href="/dich-vu?cat=thi-cong">Thi công lắp đặt</Link></li>
                  <li><Link href="/dich-vu?cat=tu-van">Tư vấn giải pháp</Link></li>
                  <li><Link href="/dich-vu?cat=bao-tri">Bảo trì hệ thống</Link></li>
                </ul>
              </li>
              <li><Link href="/tin-tuc">TIN TỨC</Link></li>
              <li><Link href="/lien-he">LIÊN HỆ</Link></li>
            </ul>
          </nav>

          <div className={styles.searchContainer}>
            <input type="text" placeholder="Tìm sản phẩm..." className={styles.searchInput} />
            <button className={styles.searchButton} aria-label="Tìm kiếm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
