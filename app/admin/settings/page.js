'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../dashboard/dashboard.module.css';

export default function AdminSettings() {
  const [siteData, setSiteData] = useState(null);
  const [config, setConfig] = useState({
    siteName: '',
    hotline: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => {
        setSiteData(json);
        setConfig(json.config || {});
      });
  }, []);

  const handleSave = async () => {
    const newData = { ...siteData, config: config };
    const res = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });

    if (res.ok) {
      alert('Đã cập nhật cấu hình website thành công!');
    }
  };

    <>
      <h2>CẤU HÌNH WEBSITE</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>Thay đổi thông tin liên hệ và các thiết lập chung của hệ thống.</p>

      {config.siteName === '' ? <p>Đang tải...</p> : (
        <section className={styles.recentActivity}>
          <form style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tên website</label>
              <input 
                type="text" 
                value={config.siteName}
                onChange={(e) => setConfig({...config, siteName: e.target.value})}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Hotline</label>
              <input 
                type="text" 
                value={config.hotline}
                onChange={(e) => setConfig({...config, hotline: e.target.value})}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email liên hệ</label>
              <input 
                type="email" 
                value={config.email}
                onChange={(e) => setConfig({...config, email: e.target.value})}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Địa chỉ công ty</label>
              <textarea 
                rows="3"
                value={config.address}
                onChange={(e) => setConfig({...config, address: e.target.value})}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              ></textarea>
            </div>
            <button type="button" className="btn-primary" onClick={handleSave}>Cập nhật ngay</button>
          </form>
        </section>
      )}
    </>
}
