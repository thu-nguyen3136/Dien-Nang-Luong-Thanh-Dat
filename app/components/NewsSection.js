import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsSection.module.css';

export default function NewsSection({ posts }) {
  // Take last 4 posts for homepage
  const recentPosts = posts.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">TIN TỨC <span>& KINH NGHIỆM</span></h2>
          <Link href="/tin-tuc" className={styles.viewAll}>
            Xem Tất Cả Tin Tức <span>&rarr;</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {recentPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <Link href={`/tin-tuc/${post.slug}`} className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} />
              </Link>
              <div className={styles.content}>
                <span className={styles.date}>{post.date}</span>
                <h3>
                  <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={`/tin-tuc/${post.slug}`} className={styles.readMore}>
                  Đọc Tiếp <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
