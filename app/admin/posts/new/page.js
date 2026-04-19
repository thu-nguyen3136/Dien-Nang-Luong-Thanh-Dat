'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';

export default function NewPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    type: 'news',
    image: '',
    excerpt: '',
    content: '',
    status: 'published'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/data');
    const data = await res.json();

    const newItem = {
      id: formData.slug,
      slug: formData.slug,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      image: formData.image,
      status: formData.status
    };

    if (formData.type === 'news') {
      data.posts.unshift({ ...newItem, date: new Date().toISOString().split('T')[0] });
    } else {
      data.services.unshift(newItem);
    }

    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (saveRes.ok) {
      alert(formData.status === 'draft' ? 'Đã lưu bản nháp!' : 'Đã đăng bài thành công!');
      router.push('/admin/posts');
    }
  };

  return (
    <div className={styles.adminLayout}>
      <main className={styles.content}>
        <div className={styles.topBar}>
          <div>Admin / Viết bài mới</div>
          <Link href="/admin/posts">Quay lại</Link>
        </div>

        <div className={styles.pageBody}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>THÊM BÀI VIẾT / DỊCH VỤ MỚI</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => setFormData({...formData, status: 'draft'})}
                className="btn-secondary" 
                style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #ddd' }}
              >
                Lưu bản nháp
              </button>
              <button 
                onClick={handleSubmit}
                className="btn-primary" 
                style={{ backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none' }}
              >
                {formData.status === 'published' ? 'Đăng bài ngay' : 'Đăng bản nháp này'}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tiêu đề</label>
                <input 
                  type="text" 
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Slug (URL)</label>
                <input 
                  type="text" 
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Loại nội dung</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                >
                  <option value="news">Tin tức / Blog</option>
                  <option value="service">Dịch vụ / Dự án</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Ảnh bìa (URL)</label>
                <input 
                  type="text" 
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Nội dung chi tiết</label>
              <AdminEditor 
                initialValue={formData.content} 
                onChange={(content) => setFormData(prev => ({ ...prev, content }))} 
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
