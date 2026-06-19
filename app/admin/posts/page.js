'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../dashboard/dashboard.module.css';

const formatDate = (dateStr) => {
  if (!dateStr) return '18/06/2026';
  if (/\d{2}\/\d{2}\/\d{4}/.test(dateStr)) return dateStr;
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
};

export default function AdminPosts() {
  const [data, setData] = useState({ posts: [], services: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => { loadData(); }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, typeFilter, statusFilter]);

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

  const handleDuplicate = async (slug, type) => {
    const res = await fetch('/api/admin/data');
    const dbData = await res.json();
    const today = new Date().toISOString().split('T')[0];
    
    if (type === 'news') {
      const original = dbData.posts.find(p => p.slug === slug);
      if (!original) return;
      const copySlug = `${original.slug}-copy-${Math.floor(1000 + Math.random() * 9000)}`;
      const copyTitle = `${original.title} (Bản sao)`;
      const duplicated = {
        ...original,
        id: copySlug,
        slug: copySlug,
        title: copyTitle,
        status: 'draft',
        updatedAt: today
      };
      dbData.posts.unshift(duplicated);
    } else {
      const original = dbData.services.find(s => s.slug === slug);
      if (!original) return;
      const copySlug = `${original.slug}-copy-${Math.floor(1000 + Math.random() * 9000)}`;
      const copyTitle = `${original.title} (Bản sao)`;
      const duplicated = {
        ...original,
        id: copySlug,
        slug: copySlug,
        title: copyTitle,
        status: 'draft',
        updatedAt: today
      };
      dbData.services.unshift(duplicated);
    }
    
    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dbData)
    });
    if (saveRes.ok) {
      loadData();
      setActiveDropdown(null);
      alert('Nhân bản bài viết thành công!');
    }
  };

  const handleToggleShowOnHome = async (slug, type, checked) => {
    const newData = { ...data };
    const today = new Date().toISOString().split('T')[0];
    if (type === 'news') {
      newData.posts = data.posts.map(p => p.slug === slug ? { ...p, showOnHome: checked, updatedAt: today } : p);
    } else {
      newData.services = data.services.map(s => s.slug === slug ? { ...s, showOnHome: checked, updatedAt: today } : s);
    }
    setData(newData);

    const res = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
    if (!res.ok) {
      loadData();
      alert('Không thể cập nhật trạng thái hiển thị trang chủ.');
    }
  };

  const allArticles = [...(data.posts || []), ...(data.services || [])];
  
  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = !searchTerm || 
                          article.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.slug?.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const isNews = !!article.date;
    const matchesType = typeFilter === 'all' || 
                        (typeFilter === 'news' && isNews) || 
                        (typeFilter === 'service' && !isNews);
                        
    const matchesStatus = statusFilter === 'all' || 
                          article.status === statusFilter;
                          
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredArticles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedArticles = filteredArticles.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{margin:0}}>BÀI VIẾT & DỊCH VỤ</h2>
        <Link href="/admin/posts/new" className="btn-primary" style={{backgroundColor:'#27ae60', padding:'10px 20px', borderRadius:'4px', color:'white', fontWeight:'bold'}}>+ THÊM MỚI</Link>
      </div>

      {/* Search and Filter Controls */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginBottom: '20px', 
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #eef2ee',
        alignItems: 'center'
      }}>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <input 
            type="text" 
            placeholder="🔍 Tìm kiếm theo tiêu đề hoặc slug..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '14px' 
            }}
          />
        </div>
        <div>
          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{ 
              padding: '10px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '130px',
              backgroundColor: '#fff',
              cursor: 'pointer'
            }}
          >
            <option value="all">Tất cả loại</option>
            <option value="news">Tin tức</option>
            <option value="service">Dịch vụ</option>
          </select>
        </div>
        <div>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ 
              padding: '10px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '150px',
              backgroundColor: '#fff',
              cursor: 'pointer'
            }}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="published">✅ Xuất bản</option>
            <option value="draft">📝 Bản nháp</option>
          </select>
        </div>
      </div>

      {loading ? <p>Đang tải dữ liệu...</p> : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tiêu đề</th>
                <th>Loại</th>
                <th>Slug</th>
                <th style={{ textAlign: 'center' }}>Nổi bật</th>
                <th>Ngày cập nhật</th>
                <th>Trạng thái</th>
                <th style={{ width: '80px', textAlign: 'center' }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {pagedArticles.map((article, idx) => (
                <tr key={article.slug || idx}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{article.title}</span>
                      {article.status === 'draft' ? (
                        <button 
                          onClick={() => alert('Nội dung này đang là Bản nháp. Vui lòng chuyển sang trạng thái Xuất bản để xem trước trên website!')}
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3px',
                            borderRadius: '4px',
                            backgroundColor: '#f0f2f5',
                            fontSize: '12px',
                            color: '#888',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          title="Không thể xem trước Bản nháp"
                        >
                          👁️
                        </button>
                      ) : (
                        <Link 
                          href={article.date ? `/tin-tuc/${article.slug}` : `/dich-vu/${article.slug}`} 
                          target="_blank"
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '3px',
                            borderRadius: '4px',
                            backgroundColor: '#f0f2f5',
                            fontSize: '12px',
                            color: '#555',
                            textDecoration: 'none'
                          }}
                          title="Xem trước bài viết (Preview)"
                        >
                          👁️
                        </Link>
                      )}
                    </div>
                  </td>
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
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <label style={{
                      position: 'relative',
                      display: 'inline-block',
                      width: '56px',
                      height: '24px',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}>
                      <input 
                        type="checkbox" 
                        checked={article.showOnHome !== false} 
                        onChange={(e) => handleToggleShowOnHome(article.slug, article.date ? 'news' : 'service', e.target.checked)}
                        style={{ opacity: 0, width: 0, height: 0 }} 
                      />
                      <span style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: article.showOnHome !== false ? '#008542' : '#ccc',
                        transition: '0.3s',
                        borderRadius: '24px'
                      }} />
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: article.showOnHome !== false ? '34px' : '4px',
                        bottom: '3px',
                        backgroundColor: 'white',
                        transition: '0.3s',
                        borderRadius: '50%',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                      }} />
                      <span style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#fff',
                        left: article.showOnHome !== false ? '8px' : 'auto',
                        right: article.showOnHome !== false ? 'auto' : '8px',
                        pointerEvents: 'none'
                      }}>
                        {article.showOnHome !== false ? 'ON' : 'OFF'}
                      </span>
                    </label>
                  </td>
                  <td style={{ fontSize: '13px', color: '#555' }}>
                    {formatDate(article.updatedAt || article.date)}
                  </td>
                  <td>
                    <span style={{
                      fontSize: '11px',
                      background: article.status === 'draft' ? '#fef6e0' : '#e2f0e8',
                      color: article.status === 'draft' ? '#b7791f' : '#008542',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      {article.status === 'draft' ? '📝 Bản nháp' : '✅ Xuất bản'}
                    </span>
                  </td>
                  <td style={{ position: 'relative', textAlign: 'center' }}>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === article.slug ? null : article.slug)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        fontSize: '18px', 
                        cursor: 'pointer', 
                        padding: '5px 10px', 
                        color: '#666',
                        fontWeight: 'bold'
                      }}
                    >
                      •••
                    </button>
                    {activeDropdown === article.slug && (
                      <>
                        <div 
                          onClick={() => setActiveDropdown(null)} 
                          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }} 
                        />
                        <div style={{
                          position: 'absolute',
                          right: '10px',
                          top: '35px',
                          backgroundColor: '#fff',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                          zIndex: 999,
                          minWidth: '130px',
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '6px 0',
                          textAlign: 'left'
                        }}>
                          <Link 
                            href={`/admin/posts/edit/${article.slug}`} 
                            style={{ 
                              padding: '8px 16px', 
                              color: '#2980b9', 
                              display: 'block', 
                              fontSize: '13px',
                              fontWeight: '500',
                              transition: 'background-color 0.2s'
                            }}
                            onClick={() => setActiveDropdown(null)}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f5f5f5'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                          >
                            ✏️ Sửa
                          </Link>
                          <button 
                            onClick={() => handleDuplicate(article.slug, article.date ? 'news' : 'service')}
                            style={{ 
                              padding: '8px 16px', 
                              color: '#27ae60', 
                              background: 'none', 
                              border: 'none', 
                              width: '100%', 
                              textAlign: 'left', 
                              cursor: 'pointer', 
                              fontSize: '13px',
                              fontWeight: '500',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f5f5f5'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                          >
                            📋 Nhân bản
                          </button>
                          <button 
                            onClick={() => handleDelete(article.slug, article.date ? 'news' : 'service')}
                            style={{ 
                              padding: '8px 16px', 
                              color: '#c0392b', 
                              background: 'none', 
                              border: 'none', 
                              width: '100%', 
                              textAlign: 'left', 
                              cursor: 'pointer', 
                              fontSize: '13px',
                              fontWeight: '500',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#f5f5f5'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                          >
                            🗑️ Xóa
                          </button>
                        </div>
                      </>
                    )}
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
