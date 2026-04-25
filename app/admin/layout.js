'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './dashboard/dashboard.module.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // If it's the login page, don't show the sidebar/topbar
  if (pathname === '/admin/login') {
    return <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>{children}</div>;
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>👨‍💼</span>
            <span>Xin chào, <strong>Admin</strong>!</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" target="_blank" rel="noopener noreferrer">🌐 Vào trang web</Link>
            <Link href="/admin/login">🔓 Đăng xuất</Link>
          </div>
        </div>
        <div className={styles.pageBody}>
          {children}
        </div>
      </main>
    </div>
  );
}
