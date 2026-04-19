import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { getData } from '@/lib/db';
import Features from '@/app/components/Features';
import AboutSection from '@/app/components/AboutSection';
import FeaturedServices from '@/app/components/FeaturedServices';
import SolarPanelGrid from '@/app/components/SolarPanelGrid';
import BatteryStorageGrid from '@/app/components/BatteryStorageGrid';
import CommitmentSection from '@/app/components/CommitmentSection';
import Testimonials from '@/app/components/Testimonials';
import NewsSection from '@/app/components/NewsSection';

export default function Home() {
  const data = getData();
  const products = data.products || [];
  const posts = data.posts?.slice(0, 4) || [];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/hero.png"
            alt="Thành Đạt Solar"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1>ĐIỆN NĂNG LƯỢNG MẶT TRỜI <br /><span>THÀNH ĐẠT</span></h1>
          <p>Giải pháp năng lượng xanh cho tương lai bền vững. Tiết kiệm chi phí điện năng lên đến 90%.</p>
          <div className={styles.heroBtns}>
            <Link href="/san-pham" className="btn-primary">XEM SẢN PHẨM</Link>
            <Link href="/lien-he" className={styles.btnOutline}>NHẬN TƯ VẤN</Link>
          </div>
        </div>
      </section>

      <Features />

      <AboutSection />

      {/* Products Grid */}
      <section className={styles.services}>
        <div className="container">
          <h2 className="section-title">CÁC GÓI <span>HỆ THỐNG ĐIỆN MẶT TRỜI</span></h2>
          <div className={styles.grid}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.cardImgContainer}>
                  <img src={product.image} alt={product.title} className={styles.cardImg} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{product.title}</h3>
                  <p className={styles.price}>{product.price}</p>
                  <p className={styles.feature}>{product.feature}</p>
                  <Link href={`/san-pham/${product.slug}`} className={styles.readMore}>Xem chi tiết &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolarPanelGrid />

      <BatteryStorageGrid />



      <FeaturedServices />

      <CommitmentSection />

      <Testimonials />

      <NewsSection posts={data.posts || []} />

    </div>
  );
}
