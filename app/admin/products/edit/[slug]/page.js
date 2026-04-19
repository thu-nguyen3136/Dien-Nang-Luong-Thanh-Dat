'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';

export default function EditProduct({ params }) {
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

      const product = data.products.find(p => p.slug === slug);
      if (product) setFormData(product);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const newData = { 
      ...db, 
      products: db.products.map(p => p.slug === formData.slug ? formData : p) 
    };

    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });

    if (saveRes.ok) {
      alert('Đã cập nhật sản phẩm thành công!');
      router.push('/admin/products');
    }
  };

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (!formData) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div className={styles.adminLayout}>
      <main className={styles.content}>
        <div className={styles.topBar}>
          <div>Admin / Chỉnh sửa: {formData.title}</div>
          <Link href="/admin/products">Quay lại</Link>
        </div>

        <div className={styles.pageBody}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h2>CHỈNH SỬA SẢN PHẨM</h2>
            <button onClick={handleSubmit} className="btn-primary" style={{ backgroundColor: '#2c3e50', color: 'white', padding: '10px 25px', borderRadius: '4px' }}>
              Cập nhật thay đổi
            </button>
          </div>

          <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tên sản phẩm</label>
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
                  type="text" readOnly
                  value={formData.slug}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f5f5f5' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Giá niêm yết</label>
                <input 
                  type="text"
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
