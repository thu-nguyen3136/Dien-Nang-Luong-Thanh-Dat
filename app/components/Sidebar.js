import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = ({ categories, recentPosts }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Tìm kiếm..." />
        <button>🔍</button>
      </div>

      <div className={styles.widget}>
        <h3>Danh mục</h3>
        <ul className={styles.navList}>
          <li><Link href="/dich-vu">DỊCH VỤ</Link></li>
          <li><Link href="/tin-tuc">TIN TỨC</Link></li>
          <li><Link href="/san-pham">CÁC HỆ THỐNG ĐIỆN MẶT TRỜI</Link></li>
        </ul>
      </div>

      <div className={styles.widget}>
        <h3>Bài viết gần đây</h3>
        <ul className={styles.recentList}>
          {recentPosts?.slice(0, 5).map(post => (
            <li key={post.id}>
              <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.adWidget}>
        <div className={styles.hotlineBox}>
          <p>Tư vấn kỹ thuật (24/7)</p>
          <a href="tel:0368444567" className={styles.hotlineNum}>0368.444.567</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
