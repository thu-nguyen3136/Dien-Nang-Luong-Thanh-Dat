'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';

export default function NewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    price: '',
    image: '',
    excerpt: '',
    content: '',
    status: 'published'
  });

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const res = await fetch('/api/admin/data');
    const data = await res.json();

    const newItem = {
      id: formData.slug,
      slug: formData.slug,
      title: formData.title,
      price: formData.price,
      excerpt: formData.excerpt,
      content: formData.content,
      image: formData.image,
      status: formData.status
    };

    data.products.unshift(newItem);

    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (saveRes.ok) {
      alert('Đã thêm sản phẩm thành công!');
      router.push('/admin/products');
    }
  };

  return (
    <div className={styles.adminLayout}>
      <main className={styles.content}>
        <div className={styles.topBar}>
          <div>Admin / Thêm sản phẩm</div>
          <Link href="/admin/products">Quay lại</Link>
        </div>

        <div className={styles.pageBody}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>THÊM SẢN PHẨM MỚI</h2>
            <button onClick={handleSubmit} className="btn-primary" style={{ backgroundColor: '#2c3e50', color: 'white', padding: '10px 25px', borderRadius: '4px' }}>
              Lưu & Đăng Sản Phẩm
            </button>
          </div>

          <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tên sản phẩm</label>
                <input 
                  type="text" required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Slug (URL)</label>
                <input 
                  type="text" required
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Giá niêm yết</label>
                <input 
                  type="text" placeholder="VD: 2.500.000đ"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Link ảnh đại diện</label>
                <input 
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Mô tả ngắn</label>
              <textarea 
                rows="2"
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
              ></textarea>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Chi tiết sản phẩm</label>
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
