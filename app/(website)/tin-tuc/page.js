import Link from 'next/link';
import Image from 'next/image';
import { getData } from '@/lib/db';
import styles from './tin-tuc.module.css';

export const metadata = {
  title: 'Tin Tức & Kinh Nghiệm | Thành Đạt Solar',
  description: 'Cập nhật tin tức mới nhất về năng lượng mặt trời, kiến thức hữu ích và kinh nghiệm sử dụng điện mặt trời hiệu quả.',
};

export default function NewsPage() {
  const data = getData();
  const posts = data.posts || [];

  return (
    <div className={styles.newsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>TIN TỨC & KINH NGHIỆM</h1>
          <p>Cập nhật những kiến thức mới nhất về điện năng lượng mặt trời</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.newsGrid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.newsCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className={styles.postImage}
                />
              </div>
              <div className={styles.postContent}>
                <span className={styles.date}>{post.date}</span>
                <h2><Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
                <Link href={`/tin-tuc/${post.slug}`} className={styles.readMore}>Xem chi tiết &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
