import { getData } from '@/lib/db';
import styles from './product.module.css';
import { notFound } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';
import ProductGallery from '@/app/components/ProductGallery';

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
                <ProductGallery images={product.images || [product.image]} title={product.title} />
              </div>

              <div className={styles.productInfo}>
                <h1>{product.title}</h1>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.shortDesc}>
                  <ul className={styles.featureList}>
                    {product.features 
                      ? product.features.map((feature, idx) => (
                          <li key={idx}>✅ {feature}</li>
                        ))
                      : (product.excerpt ? product.excerpt.split('\n') : []).map((item, idx) => (
                          <li key={idx}>✅ {item.replace(/^- /, '')}</li>
                        ))
                    }
                  </ul>
                </div>
                
                <div className={styles.actions}>
                  <a href="tel:0368444567" className={styles.orderBtn}>GỌI TƯ VẤN: 0368.444.567</a>
                </div>

                <div className={styles.advantagesGrid}>
                  <div className={styles.advItem}>
                    <div className={styles.advIconWrapper}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.advIcon}>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                        <path d="M12 18V6" />
                      </svg>
                    </div>
                    <div className={styles.advText}>
                      <h4>GIÁ CẢ</h4>
                      <p>Cam kết giá tốt nhất cho Khách hàng</p>
                    </div>
                  </div>
                  
                  <div className={styles.advItem}>
                    <div className={styles.advIconWrapper}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.advIcon}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div className={styles.advText}>
                      <h4>BẢO HÀNH</h4>
                      <p>Thời gian bảo hành dài lâu</p>
                    </div>
                  </div>
                  
                  <div className={styles.advItem}>
                    <div className={styles.advIconWrapper}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.advIcon}>
                        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                        <path d="m21 3-6 6" />
                        <path d="M8.38 6A6.1 6.1 0 0 0 5.44 9.8L5.4 10a3.18 3.18 0 0 0 .18 2.35l.8 1.63a2.55 2.55 0 0 1-.32 2.65L4 18.78a2 2 0 1 0 2.83 2.83l2.12-2.12a2.55 2.55 0 0 1 2.65-.32l1.63.8a3.18 3.18 0 0 0 2.35.18l.2-.04A6.1 6.1 0 0 0 18 15.62" />
                        <path d="M9 18h2" />
                      </svg>
                    </div>
                    <div className={styles.advText}>
                      <h4>CAM KẾT</h4>
                      <p>Đảm bảo sản phẩm chất lượng</p>
                    </div>
                  </div>
                  
                  <div className={styles.advItem}>
                    <div className={styles.advIconWrapper}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.advIcon}>
                        <circle cx="12" cy="13" r="8" />
                        <path d="M12 9v4l2 2" />
                        <path d="M5 3 2 6" />
                        <path d="m22 6-3-3" />
                        <path d="M10 2h4" />
                      </svg>
                    </div>
                    <div className={styles.advText}>
                      <h4>NHANH CHÓNG</h4>
                      <p>Thi công an toàn, đúng tiến độ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {product.content && (
              <div className={styles.detailedContent}>
                <h2 className={styles.detailTitle}>Chi Tiết Sản Phẩm</h2>
                <div 
                  className={styles.htmlContent}
                  dangerouslySetInnerHTML={{ __html: product.content }} 
                />
              </div>
            )}

          </div>

          <Sidebar recentPosts={data.posts} />
        </div>
      </div>
    </div>
  );
}
