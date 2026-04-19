'use client';
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, products: 0, services: 0 });

  useEffect(() => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => {
        setStats({
          posts: json.posts?.length || 0,
          products: json.products?.length || 0,
          services: json.services?.length || 0
        });
      });
  }, []);

  return (
    <>
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h4>Tổng bài viết</h4>
          <p className={styles.number}>{stats.posts}</p>
        </div>
        <div className={styles.statCard}>
          <h4>Tổng sản phẩm</h4>
          <p className={styles.number}>{stats.products}</p>
        </div>
        <div className={styles.statCard}>
          <h4>Tổng dịch vụ</h4>
          <p className={styles.number}>{stats.services}</p>
        </div>
      </section>

      <section style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h3>Chào mừng quay trở lại hệ quản trị!</h3>
        <p style={{ color: '#666', marginTop: '10px' }}>
          Hệ thống đã được đồng bộ hóa hoàn toàn. Bạn có thể xem lời chào "Xin chào, Admin!" ở thanh công cụ phía trên.
        </p>
      </section>
    </>
  );
}
