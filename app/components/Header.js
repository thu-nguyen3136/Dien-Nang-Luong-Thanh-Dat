'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menuName, e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === menuName ? null : menuName);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Bộ Icon SVG mảnh, hiện đại dùng cho dropdown
  const icons = {
    solarPanel: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>,
    battery: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line><polygon points="10 8 6 13 9 13 8 18 12 13 9 13 10 8"></polygon></svg>,
    grid: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z"></path><path d="M9 22V12h6v10"></path></svg>,
    design: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
    tool: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a2.12 2.12 0 0 1-3-3l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.79 3.79z"></path></svg>,
    phone: <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', marginRight: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  };

  return (
    <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ''}`}>
      {/* Main Header - Nền Trắng Sáng */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
              <div className={styles.logoImageContainer}>
                <Image
                  src="/images/logo.png"
                  alt="Thành Đạt Solar"
                  width={140}
                  height={50}
                  className={styles.logoImg}
                  priority
                />
              </div>
            </Link>
          </div>

          {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <div className={styles.mobileMenuHeader}>
              <span className={styles.menuTitle}>Danh mục</span>
            </div>

            <ul className={styles.navList}>
              <li><Link href="/" onClick={closeMenu}>TRANG CHỦ</Link></li>
              <li><Link href="/gioi-thieu" onClick={closeMenu}>GIỚI THIỆU</Link></li>

              <li className={styles.hasDropdown}>
                <div className={styles.mobileLinkRow} onClick={(e) => toggleDropdown('sanpham', e)}>
                  <Link href="/san-pham" onClick={closeMenu}>SẢN PHẨM</Link>
                  <span className={`${styles.arrowIcon} ${activeDropdown === 'sanpham' ? styles.arrowUp : ''}`}>▾</span>
                </div>
                <ul className={`${styles.dropdown} ${activeDropdown === 'sanpham' ? styles.dropdownOpen : ''}`}>
                  <li>
                    <Link href="/san-pham/tam-pin-mat-troi" onClick={closeMenu}>
                      {icons.solarPanel} TẤM PIN MẶT TRỜI
                    </Link>
                  </li>
                  <li>
                    <Link href="/san-pham/pin-luu-tru" onClick={closeMenu}>
                      {icons.battery} PIN LƯU TRỮ
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={styles.hasDropdown}>
                <div className={styles.mobileLinkRow} onClick={(e) => toggleDropdown('dichvu', e)}>
                  <Link href="/dich-vu" onClick={closeMenu}>DỊCH VỤ</Link>
                  <span className={`${styles.arrowIcon} ${activeDropdown === 'dichvu' ? styles.arrowUp : ''}`}>▾</span>
                </div>
                <ul className={`${styles.dropdown} ${styles.largeDropdown} ${activeDropdown === 'dichvu' ? styles.dropdownOpen : ''}`}>
                  <li>
                    <Link href="/cung-cap-cac-goi-he-thong-dien-mat-troi" onClick={closeMenu}>
                      {icons.grid} CUNG CẤP CÁC GÓI HỆ THỐNG
                    </Link>
                  </li>
                  <li>
                    <Link href="/thiet-ke-he-thong-dien-nang-luong-mat-troi" onClick={closeMenu}>
                      {icons.design} THIẾT KẾ HỆ THỐNG
                    </Link>
                  </li>
                  <li>
                    <Link href="/lap-dat-he-thong-dien-nang-luong-mat-troi" onClick={closeMenu}>
                      {icons.tool} LẮP ĐẶT HỆ THỐNG
                    </Link>
                  </li>
                </ul>
              </li>

              <li><Link href="/tin-tuc" onClick={closeMenu}>TIN TỨC</Link></li>
              <li><Link href="/lien-he" onClick={closeMenu}>LIÊN HỆ</Link></li>
            </ul>
          </nav>

          <div className={styles.headerHotline}>
            <a href="tel:0368444567" className={styles.mainCallBtn}>
              {icons.phone}
              <span>0368.444.567</span>
            </a>
          </div>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.barOpen : ''}`}></div>
          </button>

        </div>
      </header>
    </div>
  );
};

export default Header;