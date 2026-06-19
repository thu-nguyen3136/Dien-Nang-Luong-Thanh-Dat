'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './dashboard/dashboard.module.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    document.body.style.paddingTop = '0px';
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin && pathname !== '/admin/login') {
      setIsAuthenticated(false);
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('isAdmin');
    router.push('/admin/login');
  };

  // If it's the login page, don't show the sidebar/topbar
  if (pathname === '/admin/login') {
    return <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>{children}</div>;
  }

  // Show a clean loading status while checking auth state to prevent flash of content
  if (isAuthenticated === null || !isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e2f0e8',
            borderTop: '4px solid #008542',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 15px'
          }}></div>
          <p style={{ color: '#008542', fontSize: '15px', fontWeight: '600' }}>Xác thực tài khoản...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={`${styles.sidebar} ${sidebarOpen ? '' : styles.sidebarCollapsed}`}>
        <h3>TD SOLAR CMS</h3>
        <nav className={styles.sideNav}>
          <Link href="/admin/dashboard" className={pathname === '/admin/dashboard' ? styles.active : ''}>📊 Tổng quan</Link>
          <Link href="/admin/posts" className={pathname.includes('/admin/posts') ? styles.active : ''}>📝 Quản lý bài viết</Link>
          <Link href="/admin/products" className={pathname.includes('/admin/products') ? styles.active : ''}>🛒 Quản lý sản phẩm</Link>
          <Link href="/admin/banners" className={pathname.includes('/admin/banners') ? styles.active : ''}>🖼️ Quản lý Banner</Link>
          <Link href="/admin/settings" className={pathname === '/admin/settings' ? styles.active : ''}>⚙️ Cấu hình website</Link>
        </nav>
      </aside>

      <main className={styles.content}>
        <div className={styles.topBar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#008542',
                padding: '5px 8px',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
                lineHeight: '1'
              }}
              title="Ẩn/Hiện Sidebar"
            >
              ☰
            </button>
            <span style={{ fontSize: '20px' }}>👨‍💼</span>
            <span>Xin chào, <strong>Admin</strong>!</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" target="_blank" rel="noopener noreferrer">🌐 Vào trang web</Link>
            <button 
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                font: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: 0
              }}
            >
              🔓 Đăng xuất
            </button>
          </div>
        </div>
        <div className={styles.pageBody}>
          {children}
        </div>
      </main>
    </div>
  );
}
