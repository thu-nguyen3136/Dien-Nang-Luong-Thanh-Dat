import Image from 'next/image';
import styles from './SystemProductGrid.module.css';
import Link from 'next/link';

export default function SystemProductGrid({ products }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">CÁC GÓI <span>HỆ THỐNG ĐIỆN MẶT TRỜI</span></h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <Link key={product.id} href={`/san-pham/${product.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                {product.tag && <span className={styles.tag}>{product.tag}</span>}
                <Image 
                  src={product.image || '/images/lap-he-thong-dien-nang-luong-mat-troi.jpg'} 
                  alt={product.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className={styles.img} 
                />
              </div>
              <div className={styles.content}>
                <h3>{product.title}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{product.price}</span>
                  {product.originalPrice && <span className={styles.oldPrice}>{product.originalPrice}</span>}
                </div>
                
                {product.features && (
                  <ul className={styles.features}>
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                )}
                
                <div className={styles.footer}>
                  <span className={styles.viewDetail}>Xem chi tiết &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
