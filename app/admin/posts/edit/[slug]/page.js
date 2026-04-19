'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';

export default function EditPost({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);
  const [db, setDb] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { slug } = await params;
      const res = await fetch('/api/admin/data');
      const data = await res.json();
      setDb(data);

      const post = data.posts.find(p => p.slug === slug);
      const service = data.services.find(s => s.slug === slug);
      
      if (post) setFormData({ ...post, type: 'news' });
      else if (service) setFormData({ ...service, type: 'service' });
      
      setLoading(false);
    };
    fetchData();
  }, [params]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    const newData = { ...db };
    if (formData.type === 'news') {
      newData.posts = db.posts.map(p => p.slug === formData.slug ? formData : p);
    } else {
      newData.services = db.services.map(s => s.slug === formData.slug ? formData : s);
    }

    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });

    if (saveRes.ok) {
      alert('Đã cập nhật thành công!');
      router.push('/admin/posts');
    }
  };

  if (loading) return <p>Đang tải bài viết...</p>;
  if (!formData) return <p>Không tìm thấy bài viết.</p>;

  return (
    <div className={styles.adminLayout}>
      <main className={styles.content}>
        <div className={styles.topBar}>
          <div>Admin / Chỉnh sửa: {formData.title}</div>
          <Link href="/admin/posts">Quay lại</Link>
        </div>

        <div className={styles.pageBody}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>CHỈNH SỬA {formData.type.toUpperCase()}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => { setFormData({...formData, status: 'draft'}); handleSubmit(); }}
                className="btn-secondary" 
                style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #ddd' }}
              >
                Chuyển về bản nháp
              </button>
              <button 
                onClick={() => { setFormData({...formData, status: 'published'}); handleSubmit(); }}
                className="btn-primary" 
                style={{ backgroundColor: '#2c3e50', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none' }}
              >
                Cập nhật bài viết
              </button>
            </div>
          </div>

          <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tiêu đề</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Slug (URL)</label>
                <input 
                  type="text" 
                  readOnly
                  value={formData.slug}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f5f5f5' }}
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
