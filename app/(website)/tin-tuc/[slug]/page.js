import { getData } from '@/lib/db';
import styles from './post.module.css';
import { notFound } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';

export default async function PostDetail({ params }) {
  const { slug } = await params;
  const data = getData();
  const post = data.posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.postDetail}>
      <div className={styles.breadcrumb}>
        <div className="container">
          <p>Trang chủ / Tin tức / {post.title}</p>
        </div>
      </div>

      <header className={styles.header}>
        <div className="container">
          <span className={styles.date}>{post.date}</span>
          <h1>{post.title}</h1>
        </div>
      </header>

      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.featuredImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.bodyText}>
              <p><strong>{post.excerpt}</strong></p>
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
              
              <div className={styles.cta}>
                <h3>Bạn cần tư vấn giải pháp điện mặt trời?</h3>
                <p>Liên hệ ngay với Thành Đạt Solar để được khảo sát và tư vấn miễn phí.</p>
                <a href="tel:0368444567" className="btn-primary">GỌI NGAY: 0368.444.567</a>
              </div>
            </div>
          </div>

          <Sidebar recentPosts={data.posts} />
        </div>
      </div>
    </article>
  );
}
