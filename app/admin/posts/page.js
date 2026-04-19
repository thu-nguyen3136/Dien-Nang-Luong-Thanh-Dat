'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../dashboard/dashboard.module.css';

export default function AdminPosts() {
  const [data, setData] = useState({ posts: [], services: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => { loadData(); }, []);

  const loadData = () => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); });
  };

  const handleDelete = async (slug, type) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;
    const newData = { ...data };
    if (type === 'news') newData.posts = data.posts.filter(p => p.slug !== slug);
    else newData.services = data.services.filter(s => s.slug !== slug);

    const res = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
    if (res.ok) { loadData(); alert('Đã xóa thành công!'); }
  };

  const allArticles = [...(data.posts || []), ...(data.services || [])];
  const totalPages = Math.ceil(allArticles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedArticles = allArticles.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{margin:0}}>BÀI VIẾT & DỊCH VỤ</h2>
        <Link href="/admin/posts/new" className="btn-primary" style={{backgroundColor:'#27ae60', padding:'10px 20px', borderRadius:'4px', color:'white', fontWeight:'bold'}}>+ THÊM MỚI</Link>
      </div>

      {loading ? <p>Đang tải dữ liệu...</p> : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu đề</th>
                <th>Loại</th>
                <th>Slug</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {pagedArticles.map((article, idx) => (
                <tr key={article.slug || idx}>
                  <td>{article.title}</td>
                  <td>
                    <span style={{ 
                      fontSize:'11px', 
                      background: article.date ? '#e1f5fe' : '#f3e5f5', 
                      padding:'2px 8px', 
                      borderRadius:'4px' 
                    }}>
                      {article.date ? 'Tin tức' : 'Dịch vụ'}
                    </span>
                  </td>
                  <td style={{color:'#888', fontSize:'12px'}}>{article.slug}</td>
                  <td>
                    <Link href={`/admin/posts/edit/${article.slug}`} style={{ color:'#2980b9' }}>Sửa</Link>
                    <button onClick={() => handleDelete(article.slug, article.date ? 'news' : 'service')} style={{ color:'#c0392b', background:'none', border:'none', cursor:'pointer', marginLeft:'15px' }}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              style={{ padding: '8px 12px', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}
            >
              &laquo; Trước
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                style={{ 
                  padding: '8px 15px', 
                  border: '1px solid #ddd', 
                  background: currentPage === i + 1 ? 'var(--primary-color)' : 'white',
                  color: currentPage === i + 1 ? 'white' : 'black',
                  cursor: 'pointer'
                }}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              style={{ padding: '8px 12px', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}
            >
              Sau &raquo;
            </button>
          </div>
        </>
      )}
    </>
  );
}
