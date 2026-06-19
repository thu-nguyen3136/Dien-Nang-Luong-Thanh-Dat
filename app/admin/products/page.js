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

export default function AdminProducts() {
  const [data, setData] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const [searchTerm, setSearchTerm] = useState('');
  const [showOnHomeFilter, setShowOnHomeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => { loadData(); }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, showOnHomeFilter, statusFilter]);

  const loadData = () => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(json => { setData(json); setLoading(false); });
  };

  const handleDelete = async (slug) => {
    if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;
    const newData = { ...data, products: data.products.filter(p => p.slug !== slug) };

    const res = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
    if (res.ok) { loadData(); alert('Đã xóa thành công!'); }
  };
  const handleDuplicate = async (slug) => {
    const res = await fetch('/api/admin/data');
    const dbData = await res.json();
    const today = new Date().toISOString().split('T')[0];
    
    const original = dbData.products.find(p => p.slug === slug);
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
    dbData.products.unshift(duplicated);
    
    const saveRes = await fetch('/api/admin/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dbData)
    });
    if (saveRes.ok) {
      loadData();
      setActiveDropdown(null);
      alert('Nhân bản sản phẩm thành công!');
    }
  };

  const handleToggleShowOnHome = async (slug, checked) => {
    const today = new Date().toISOString().split('T')[0];
    const newData = { 
      ...data, 
      products: data.products.map(p => p.slug === slug ? { ...p, showOnHome: checked, updatedAt: today } : p) 
    };
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

  const filteredProducts = (data.products || []).filter(product => {
    const matchesSearch = !searchTerm || 
                          product.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.slug?.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesShowOnHome = showOnHomeFilter === 'all' || 
                              (showOnHomeFilter === 'home' && product.showOnHome !== false) || 
                              (showOnHomeFilter === 'hidden' && product.showOnHome === false);
                              
    const matchesStatus = statusFilter === 'all' || 
                          product.status === statusFilter;
                          
    return matchesSearch && matchesShowOnHome && matchesStatus;
  });

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{margin:0}}>QUẢN LÝ SẢN PHẨM</h2>
        <Link href="/admin/products/new" className="btn-primary" style={{backgroundColor:'#27ae60', padding:'10px 20px', borderRadius:'4px', color:'white', fontWeight:'bold'}}>+ THÊM SẢN PHẨM</Link>
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
            placeholder="🔍 Tìm kiếm sản phẩm..." 
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
            value={showOnHomeFilter} 
            onChange={(e) => setShowOnHomeFilter(e.target.value)}
            style={{ 
              padding: '10px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '160px',
              backgroundColor: '#fff',
              cursor: 'pointer'
            }}
          >
            <option value="all">Tất cả hiển thị</option>
            <option value="home">🏠 Hiện ở Trang chủ</option>
            <option value="hidden">📂 Không hiện Trang chủ</option>
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
                <th>Tên sản phẩm</th>
                <th>Giá niêm yết</th>
                <th>Slug</th>
                <th style={{ textAlign: 'center' }}>Nổi bật</th>
                <th>Ngày cập nhật</th>
                <th>Trạng thái</th>
                <th style={{ width: '80px', textAlign: 'center' }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {pagedProducts.map(product => (
                <tr key={product.slug}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{product.title}</span>
                      {product.status === 'draft' ? (
                        <button 
                          onClick={() => alert('Sản phẩm này đang là Bản nháp. Vui lòng chuyển sang trạng thái Xuất bản để xem trước trên website!')}
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
                          href={`/san-pham/${product.slug}`} 
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
                          title="Xem trước sản phẩm (Preview)"
                        >
                          👁️
                        </Link>
                      )}
                    </div>
                  </td>
                  <td style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{product.price}</td>
                  <td style={{ fontSize: '12px', color: '#888' }}>{product.slug}</td>
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
                        checked={product.showOnHome !== false} 
                        onChange={(e) => handleToggleShowOnHome(product.slug, e.target.checked)}
                        style={{ opacity: 0, width: 0, height: 0 }} 
                      />
                      <span style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: product.showOnHome !== false ? '#008542' : '#ccc',
                        transition: '0.3s',
                        borderRadius: '24px'
                      }} />
                      <span style={{
                        position: 'absolute',
                        content: '""',
                        height: '18px',
                        width: '18px',
                        left: product.showOnHome !== false ? '34px' : '4px',
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
                        left: product.showOnHome !== false ? '8px' : 'auto',
                        right: product.showOnHome !== false ? 'auto' : '8px',
                        pointerEvents: 'none'
                      }}>
                        {product.showOnHome !== false ? 'ON' : 'OFF'}
                      </span>
                    </label>
                  </td>
                  <td style={{ fontSize: '13px', color: '#555' }}>
                    {formatDate(product.updatedAt)}
                  </td>
                  <td>
                    <span style={{
                      fontSize: '11px',
                      background: product.status === 'draft' ? '#fef6e0' : '#e2f0e8',
                      color: product.status === 'draft' ? '#b7791f' : '#008542',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      display: 'inline-block'
                    }}>
                      {product.status === 'draft' ? '📝 Bản nháp' : '✅ Xuất bản'}
                    </span>
                  </td>
                  <td style={{ position: 'relative', textAlign: 'center' }}>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === product.slug ? null : product.slug)}
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
                    {activeDropdown === product.slug && (
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
                            href={`/admin/products/edit/${product.slug}`} 
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
                            onClick={() => handleDuplicate(product.slug)}
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
                            onClick={() => handleDelete(product.slug)}
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
                  background: currentPage === i + 1 ? '#3498db' : 'white',
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
