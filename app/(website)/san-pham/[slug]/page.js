import { getData } from '@/lib/db';
import styles from './product.module.css';
import { notFound } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const data = getData();
  const product = data.products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.breadcrumb}>
        <div className="container">
          <p>Trang chủ / Sản phẩm / {product.title}</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.contentColumn}>
            <div className={styles.mainLayout}>
              <div className={styles.imageGallery}>
                <div className={styles.mainImage}>
                  <img src={product.image} alt={product.title} />
                </div>
              </div>

              <div className={styles.productInfo}>
                <h1>{product.title}</h1>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.shortDesc}>
                  <p>{product.excerpt}</p>
                </div>
                
                <div className={styles.actions}>
                  <a href="tel:0368444567" className={styles.orderBtn}>GỌI TƯ VẤN: 0368.444.567</a>
                </div>

                <div className={styles.policy}>
                  <div className={styles.policyItem}><span>🚚</span><p>Giao hàng</p></div>
                  <div className={styles.policyItem}><span>🛡️</span><p>Bảo hành</p></div>
                  <div className={styles.policyItem}><span>🛠️</span><p>Kỹ thuật</p></div>
                </div>
              </div>
            </div>

            <section className={styles.description}>
              <div className={styles.tabs}><button className={styles.activeTab}>CHI TIẾT SẢN PHẨM</button></div>
              <div className={styles.tabContent}>
                <div dangerouslySetInnerHTML={{ __html: product.content.replace(/\n/g, '<br/>') }} />
              </div>
            </section>
          </div>

          <Sidebar recentPosts={data.posts} />
        </div>
      </div>
    </div>
  );
}
