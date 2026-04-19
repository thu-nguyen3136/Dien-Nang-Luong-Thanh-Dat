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
                <span className={styles.icon}>📍</span>
                <div>
                  <p><strong>Địa chỉ:</strong></p>
                  <p>Thôn Liễu Trì, Huyện Mê Linh, Thành phố Hà Nội</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>📞</span>
                <div>
                  <p><strong>Hotline 24/7:</strong></p>
                  <p>0368.444.567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>✉️</span>
                <div>
                  <p><strong>Email:</strong></p>
                  <p>ctythanhdat6886@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>🌐</span>
                <div>
                  <p><strong>Website:</strong></p>
                  <p>thanhdatsolar.net</p>
                </div>
              </div>
            </div>

            <div className={styles.map}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118991.68822026852!2d105.700140!3d21.168545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fe06037e462d%3A0x8979d5019087d152!2sM%C3%AA%20Linh%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1712933000000!5m2!1svi!2s" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>GỬI YÊU CẦU TƯ VẤN</h3>
            <p>Vui lòng để lại thông tin, chuyên viên của chúng tôi sẽ gọi lại tư vấn miễn phí trong vòng 15 phút.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Họ và tên *" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Số điện thoại *" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Chủ đề tư vấn" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Nội dung tin nhắn..." 
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>GỬI THÔNG TIN NGAY</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
