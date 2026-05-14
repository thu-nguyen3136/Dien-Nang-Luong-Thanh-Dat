import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = ({ categories, recentPosts }) => {
  return (
    <aside className={styles.sidebar}>
      {/* Widget Dịch vụ trọng điểm */}
      <div className={styles.widget}>
        <h3>Dịch vụ trọng điểm</h3>
        <ul className={styles.navList}>
          <li><Link href="/lap-dat-he-thong">Tổng hợp giải pháp lắp đặt</Link></li>
          <li><Link href="/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi">Thi công tại Hà Nội</Link></li>
          <li><Link href="/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen">Thi công tại Hưng Yên</Link></li>
          <li><Link href="/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang">Thi công tại Bắc Giang</Link></li>
          <li><Link href="/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho">Thi công tại Phú Thọ</Link></li>
          <li><Link href="/thiet-ke-he-thong-dien-nang-luong-mat-troi">Thiết kế hệ thống điện mặt trời</Link></li>
          <li><Link href="/cung-cap-cac-goi-he-thong-dien-mat-troi">Gói hệ thống On-grid & Hybrid</Link></li>
        </ul>
      </div>

      {/* Widget Bài viết mới nhất */}
      <div className={styles.widget}>
        <h3>Bài viết mới nhất</h3>
        <ul className={styles.recentList}>
          {recentPosts?.slice(0, 6).map(post => (
            <li key={post.id || post.slug}>
              <Link href={`/tin-tuc/${post.slug}`} className={styles.postLink}>
                <span className={styles.postTitle}>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget Hotline hỗ trợ */}
      <div className={styles.adWidget}>
        <div className={styles.hotlineBox}>
          <p>Tư vấn kỹ thuật (24/7)</p>
          <a href="tel:0368444567" className={styles.hotlineNum}>0368.444.567</a>
          <div style={{ marginTop: '15px', fontSize: '0.9rem', opacity: 0.8 }}>
            Hỗ trợ khảo sát & báo giá miễn phí
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
