'use client';
import { useState } from 'react';
import styles from './lien-he.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Thông tin của bạn đã được gửi đi. Chúng tôi sẽ liên hệ lại sớm nhất.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <p>Thành Đạt Solar luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>THÔNG TIN LIÊN HỆ</h3>
              <div className={styles.infoItem}>
                <span className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div>
                  <p><strong>Địa chỉ:</strong></p>
                  <p>Thôn Liễu Trì, Huyện Mê Linh, Thành phố Hà Nội</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div>
                  <p><strong>Hotline 24/7:</strong></p>
                  <p>0368.444.567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <div>
                  <p><strong>Email:</strong></p>
                  <p>ctythanhdat6886@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118991.68822026852!2d105.700140!3d21.168545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fe06037e462d%3A0x8979d5019087d152!2sM%C3%AA%20Linh%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1712933000000!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
