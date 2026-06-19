'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../dashboard/dashboard.module.css';
import AdminEditor from '@/app/components/AdminEditor';
import ImageSelector from '@/app/components/ImageSelector';

export default function NewPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    type: 'news',
    image: '',
    excerpt: '',
    content: '',
    status: 'published',
    showOnHome: true,
    seoTitle: '',
    metaDesc: ''
  });

  const handleSubmit = async (overrideStatus) => {
    const targetStatus = overrideStatus || formData.status;
    const targetForm = { ...formData, status: targetStatus };

    const res = await fetch('/api/admin/data');
    const data = await res.json();

    const today = new Date().toISOString().split('T')[0];
    const newItem = {
      id: targetForm.slug,
      slug: targetForm.slug,
      title: targetForm.title,
      excerpt: targetForm.excerpt,
      content: targetForm.content,
      image: targetForm.image,
      status: targetForm.status,
      showOnHome: targetForm.showOnHome !== false,
      updatedAt: today,
      seoTitle: targetForm.seoTitle || '',
      metaDesc: targetForm.metaDesc || ''
    };

    if (targetForm.type === 'news') {
      data.posts.unshift({ ...newItem, date: today });
    } else {
      data.services.unshift(newItem);
    }

    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (saveRes.ok) {
      alert(targetStatus === 'draft' ? 'Đã lưu bản nháp!' : 'Đã đăng bài thành công!');
      router.push('/admin/posts');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '14px', color: '#666' }}>
          <Link href="/admin/posts" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Bài viết</Link> &gt; Thêm mới
        </div>
        <Link href="/admin/posts" style={{ color: '#666', fontSize: '14px' }}>&larr; Quay lại</Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: 0 }}>THÊM BÀI VIẾT / DỊCH VỤ MỚI</h2>
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
            style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}
          >
            Đăng bài ngay
          </button>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
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
            <ImageSelector 
              value={formData.image} 
              onChange={(url) => setFormData({...formData, image: url})} 
              label="Ảnh đại diện bài viết"
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input 
            type="checkbox" 
            id="showOnHome"
            checked={formData.showOnHome !== false}
            onChange={(e) => setFormData({...formData, showOnHome: e.target.checked})}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor="showOnHome" style={{ fontWeight: '600', cursor: 'pointer' }}>Hiển thị bài viết/dịch vụ này ở Trang chủ</label>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Mô tả ngắn</label>
          <textarea 
            rows="3"
            required
            value={formData.excerpt}
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            placeholder="Nhập mô tả ngắn cho bài viết (tin tức hoặc dịch vụ) để tối ưu hiển thị và SEO..."
            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}
          ></textarea>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '6px', border: '1px solid #e2e8f0', marginTop: '10px', marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '5px' }}>⚙️ Cấu hình SEO (Tùy chọn)</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>SEO Title (Tiêu đề SEO)</label>
            <input 
              type="text" 
              value={formData.seoTitle || ''}
              onChange={(e) => setFormData({...formData, seoTitle: e.target.value})}
              placeholder="Nếu để trống, sẽ tự động sử dụng Tiêu đề bài viết..."
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Meta Description (Mô tả Meta)</label>
            <textarea 
              rows="3"
              value={formData.metaDesc || ''}
              onChange={(e) => setFormData({...formData, metaDesc: e.target.value})}
              placeholder="Nếu để trống, sẽ tự động sử dụng Mô tả ngắn..."
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit', resize: 'vertical' }}
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
    </>
  );
}
