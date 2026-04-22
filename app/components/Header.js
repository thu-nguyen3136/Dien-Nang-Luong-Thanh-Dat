'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <Link href="/" className={styles.logoWrapper} onClick={() => setIsMenuOpen(false)}>
              <div className={styles.logoImageContainer}>
                <Image
                  src="/images/logo.png"
                  alt="Thành Đạt Solar"
                  width={80}
                  height={35}
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

          {/* Hamburger Menu Button */}
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
          </button>

          {/* Navigation Overlay */}
          {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>}

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>TRANG CHỦ</Link></li>
              <li><Link href="/gioi-thieu" onClick={() => setIsMenuOpen(false)}>GIỚI THIỆU</Link></li>

              <li className={styles.hasDropdown}>
                <div className={styles.mobileLinkRow}>
                  <Link href="/san-pham" onClick={() => setIsMenuOpen(false)}>SẢN PHẨM</Link>
                  <span className={styles.arrowIcon}>▾</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/san-pham?cat=tam-pin" onClick={() => setIsMenuOpen(false)}>Tấm pin mặt trời</Link></li>
                  <li><Link href="/san-pham?cat=bien-tan" onClick={() => setIsMenuOpen(false)}>Biến tần (Inverter)</Link></li>
                  <li><Link href="/san-pham?cat=pin-luu-tru" onClick={() => setIsMenuOpen(false)}>Pin lưu trữ Lithium</Link></li>
                  <li><Link href="/san-pham?cat=phu-kien" onClick={() => setIsMenuOpen(false)}>Phụ kiện điện mặt trời</Link></li>
                </ul>
              </li>
              <li className={styles.hasDropdown}>
                <div className={styles.mobileLinkRow}>
                  <Link href="/dich-vu" onClick={() => setIsMenuOpen(false)}>DỊCH VỤ</Link>
                  <span className={styles.arrowIcon}>▾</span>
                </div>
                <ul className={styles.dropdown}>
                  <li><Link href="/dich-vu?cat=thi-cong" onClick={() => setIsMenuOpen(false)}>Thi công lắp đặt</Link></li>
                  <li><Link href="/dich-vu?cat=tu-van" onClick={() => setIsMenuOpen(false)}>Tư vấn giải pháp</Link></li>
                  <li><Link href="/dich-vu?cat=bao-tri" onClick={() => setIsMenuOpen(false)}>Bảo trì hệ thống</Link></li>
                </ul>
              </li>
              <li><Link href="/tin-tuc" onClick={() => setIsMenuOpen(false)}>TIN TỨC</Link></li>
              <li><Link href="/lien-he" onClick={() => setIsMenuOpen(false)}>LIÊN HỆ</Link></li>
            </ul>
          </nav>


        </div>
      </header>
    </div>
  );
};

export default Header;
