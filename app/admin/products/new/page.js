'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';
import ImageSelector from '@/app/components/ImageSelector';
import MultiImageSelector from '@/app/components/MultiImageSelector';

export default function NewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    price: '',
    image: '',
    images: [],
    excerpt: '',
    features: '',
    content: '',
    status: 'published',
    showOnHome: true,
    seoTitle: '',
    metaDesc: ''
  });

  const handleSubmit = async (overrideStatus) => {
    const targetStatus = typeof overrideStatus === 'string' ? overrideStatus : formData.status;
    const res = await fetch('/api/admin/data');
    const data = await res.json();

    const today = new Date().toISOString().split('T')[0];
    const featuresArray = formData.features
      ? formData.features.split('\n').map(f => f.trim()).filter(Boolean)
      : [];

    const newItem = {
      id: formData.slug,
      slug: formData.slug,
      title: formData.title,
      price: formData.price,
      excerpt: formData.excerpt,
      features: featuresArray,
      content: formData.content || '',
      image: formData.image,
      images: formData.images || (formData.image ? [formData.image] : []),
      status: targetStatus,
      showOnHome: formData.showOnHome !== false,
      seoTitle: formData.seoTitle || '',
      metaDesc: formData.metaDesc || '',
      updatedAt: today
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
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          <Link href="/admin/products" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Sản phẩm</Link> &gt; Thêm mới
        </div>
        <Link href="/admin/products" style={{ color: '#666', fontSize: '14px' }}>&larr; Quay lại</Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0 }}>THÊM SẢN PHẨM MỚI</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => handleSubmit('draft')}
            className="btn-secondary" 
            style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}
          >
            Lưu bản nháp
          </button>
          <button 
            onClick={() => handleSubmit('published')}
            className="btn-primary" 
            style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Lưu & Đăng Sản Phẩm
          </button>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
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
            <ImageSelector 
              value={formData.image} 
              onChange={(url) => setFormData({...formData, image: url})} 
              label="Ảnh đại diện sản phẩm"
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <MultiImageSelector 
            value={formData.images || []}
            onChange={(urls) => setFormData({ ...formData, images: urls })}
            label="Thư viện hình ảnh sản phẩm (Hiển thị dạng Slide ở trang chi tiết)"
          />
        </div>

        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input 
            type="checkbox" 
            id="showOnHome"
            checked={formData.showOnHome !== false}
            onChange={(e) => setFormData({...formData, showOnHome: e.target.checked})}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor="showOnHome" style={{ fontWeight: '600', cursor: 'pointer' }}>Hiển thị sản phẩm này ở Trang chủ</label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Mô tả ngắn</label>
          <textarea 
            rows="2"
            value={formData.excerpt}
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            placeholder="Mô tả ngắn gọn về sản phẩm..."
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Thông số / Nổi bật sản phẩm (mỗi dòng một ý - Hiển thị dạng checklist ở trang chi tiết)</label>
          <textarea 
            rows="5"
            value={formData.features}
            onChange={(e) => setFormData({...formData, features: e.target.value})}
            placeholder="VD:&#10;Hiệu suất cao vượt trội&#10;Công nghệ Mono half-cell&#10;Bảo hành 25 năm"
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}
          ></textarea>
        </div>

        {/* SEO Configuration Section */}
        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '6px', border: '1px solid #e2e8f0', marginTop: '10px', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '5px' }}>⚙️ Cấu hình SEO (Tùy chọn)</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>SEO Title (Tiêu đề SEO)</label>
            <input 
              type="text" 
              value={formData.seoTitle}
              onChange={(e) => setFormData({...formData, seoTitle: e.target.value})}
              placeholder="Nếu để trống, sẽ tự động sử dụng Tiêu đề sản phẩm..."
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Meta Description (Mô tả Meta)</label>
            <textarea 
              rows="3"
              value={formData.metaDesc}
              onChange={(e) => setFormData({...formData, metaDesc: e.target.value})}
              placeholder="Nếu để trống, sẽ tự động sử dụng danh sách thông số của sản phẩm..."
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Chi tiết sản phẩm (Mô tả đầy đủ phía dưới)</label>
          <AdminEditor 
            initialValue={formData.content} 
            onChange={(content) => setFormData(prev => ({ ...prev, content }))} 
          />
        </div>
      </form>
    </>
  );
}
