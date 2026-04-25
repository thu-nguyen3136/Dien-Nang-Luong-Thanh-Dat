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
import HeroSlider from '@/app/components/HeroSlider';

import SystemProductGrid from '@/app/components/SystemProductGrid';

export default function Home() {
  const data = getData();
  const products = data.products || [];
  const systemProducts = products.filter(p => !p.id.startsWith('solar-') && !p.id.startsWith('battery-'));
  const posts = data.posts?.slice(0, 4) || [];

  return (
    <div className={styles.home}>
      <HeroSlider />

      <section className={styles.welcomeSection}>
        <div className="container">
          <div className={styles.welcomeContent}>
            <h1>ĐIỆN NĂNG LƯỢNG MẶT TRỜI <span>THÀNH ĐẠT</span></h1>
            <p>Giải pháp năng lượng xanh cho tương lai bền vững. Tiết kiệm chi phí điện năng lên đến 90%, bảo vệ môi trường và tối ưu hóa tài chính cho gia đình & doanh nghiệp.</p>
            <div className={styles.welcomeBtns}>
              <Link href="/san-pham" className="btn-primary">KHÁM PHÁ SẢN PHẨM</Link>
              <Link href="/lien-he" className={styles.btnOutline}>TƯ VẤN MIỄN PHÍ</Link>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <AboutSection />

      <SystemProductGrid products={systemProducts} />

      <SolarPanelGrid />

      <BatteryStorageGrid />



      <FeaturedServices />

      <CommitmentSection />

      <Testimonials />

      <NewsSection posts={data.posts || []} />

    </div>
  );
}
