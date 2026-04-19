'use client';
import Link from 'next/link';
import styles from '../dashboard/dashboard.module.css';

export default function AdminBanners() {
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>QUẢN LÝ BANNER</h2>
        <button className="btn-primary">+ Thêm Banner mới</button>
      </div>

      <section className={styles.recentActivity}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ height: '150px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Main Hero Banner
            </div>
            <div style={{ padding: '15px' }}>
              <h4>Banner Trang Chủ 01</h4>
              <p style={{ fontSize: '13px', color: '#666' }}>Active</p>
              <div style={{ marginTop: '10px' }}>
                <button style={{ color: '#3498db', marginRight: '10px' }}>Sửa</button>
                <button style={{ color: '#e74c3c' }}>Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
}
