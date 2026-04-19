'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../dashboard/dashboard.module.css';

export default function AdminProducts() {
  const [data, setData] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => { loadData(); }, []);

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

  const totalPages = Math.ceil(data.products.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const pagedProducts = data.products.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{margin:0}}>QUẢN LÝ SẢN PHẨM</h2>
        <Link href="/admin/products/new" className="btn-primary" style={{backgroundColor:'#27ae60', padding:'10px 20px', borderRadius:'4px', color:'white', fontWeight:'bold'}}>+ THÊM SẢN PHẨM</Link>
      </div>

      {loading ? <p>Đang tải dữ liệu...</p> : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá niêm yết</th>
                <th>Slug</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {pagedProducts.map(product => (
                <tr key={product.slug}>
                  <td>{product.title}</td>
                  <td style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{product.price}</td>
                  <td style={{ fontSize: '12px', color: '#888' }}>{product.slug}</td>
                  <td>
                    <Link href={`/admin/products/edit/${product.slug}`} style={{ color: '#3498db' }}>Sửa</Link>
                    <button style={{ color: '#e74c3c', background:'none', border:'none', cursor:'pointer', marginLeft:'15px' }} onClick={() => handleDelete(product.slug)}>Xóa</button>
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
