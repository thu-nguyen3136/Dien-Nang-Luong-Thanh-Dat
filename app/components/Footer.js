"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

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
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span>Thôn Liễu Trì, Xã Mê Linh, Huyện Mê Linh, TP. Hà Nội</span>
            </li>
            <li>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span><strong>Hotline:</strong> 0368.444.567</span>
            </li>
            <li>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <span><strong>Email:</strong> ctythanhdat6886@gmail.com</span>
            </li>
            <li>
              <span className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </span>
              <span><strong>Website:</strong> lapdatdiennangluongmattroi.com</span>
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
