import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';

export const metadata = {
  title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Bắc Giang | Thành Đạt Solar',
  description: 'Dịch vụ thi công điện năng lượng mặt trời tại Bắc Giang trọn gói. Giảm 50-90% hóa đơn điện mỗi tháng. Tư vấn, thiết kế và lắp đặt chuyên nghiệp.',
  alternates: {
    canonical: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang',
  },
  openGraph: {
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Bắc Giang | Thành Đạt Solar',
    description: 'Giải pháp điện mặt trời áp mái tối ưu cho gia đình và doanh nghiệp tại Bắc Giang. Tiết kiệm chi phí, chủ động nguồn điện.',
    images: ['/images/lap-dat-he-thong-dien-nang-luong-mat-troi.png'],
    url: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang',
    type: 'article',
  },
};

export default function ThiCongDienMatTroiBacGiangPage() {
  const data = getData();
  const recentPosts = data.posts || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thi công điện năng lượng mặt trời tại Bắc Giang",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Thành Đạt Solar",
      "image": "https://lapdatdiennangluongmattroi.com/images/logo.png",
      "telephone": "0368.444.567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bắc Giang",
        "addressCountry": "VN"
      }
    },
    "description": "Dịch vụ lắp đặt điện mặt trời trọn gói tại Bắc Giang. Giải pháp năng lượng sạch tiết kiệm chi phí cho hộ gia đình và nhà xưởng.",
    "areaServed": "Bắc Giang",
    "serviceType": "Solar Energy Installation"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang chủ",
        "item": "https://lapdatdiennangluongmattroi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dịch vụ",
        "item": "https://lapdatdiennangluongmattroi.com/dich-vu"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Thi công tại Bắc Giang",
        "item": "https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tại sao nên lắp điện mặt trời tại Bắc Giang?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bắc Giang có số giờ nắng cao, rất lý tưởng để phát triển điện mặt trời áp mái giúp giảm tới 90% hóa đơn điện cho gia đình và doanh nghiệp."
        }
      },
      {
        "@type": "Question",
        "name": "Thành Đạt Solar có văn phòng tại Bắc Giang không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chúng tôi có đội ngũ kỹ thuật thường trực hỗ trợ khảo sát và thi công nhanh chóng tại TP Bắc Giang và các huyện lân cận."
        }
      }
    ]
  };


  return (
    <div style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/ap-mai.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 0',
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '2.8rem', 
            fontWeight: '800', 
            marginBottom: '20px', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Thi Công Điện Năng Lượng Mặt Trời Tại Bắc Giang
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.95, 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Giải pháp giảm hóa đơn điện từ 50-90% cho gia đình và doanh nghiệp.
          </p>
        </div>
      </section>

      <div className={`container ${styles.serviceLayout}`}>
        <div className={styles.serviceContent}>
          {/* Main Title */}
          <h2 style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '25px', 
            fontSize: '2rem', 
            borderBottom: '3px solid var(--primary-color)', 
            paddingBottom: '12px',
            fontWeight: '700'
          }}>
            Thi công điện năng lượng mặt trời tại Bắc Giang
          </h2>

          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '15px' }}>
              Bạn đang trả bao nhiêu tiền điện mỗi tháng tại Bắc Giang? 2 triệu, 5 triệu hay cao hơn? Trong khi đó, nhiều hộ gia đình và doanh nghiệp đã giảm tới 50–90% chi phí điện nhờ giải pháp <strong>thi công điện năng lượng mặt trời tại Bắc Giang</strong> của Thành Đạt Solar.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Với điều kiện bức xạ mặt trời thuận lợi, Bắc Giang là khu vực lý tưởng để phát triển điện mặt trời áp mái. Các hệ thống do Thành Đạt Solar thi công điện năng lượng mặt trời tại Bắc Giang có thể tạo ra trung bình 4–5 kWh/ngày cho mỗi kWp, giúp giảm đáng kể chi phí điện ngay từ tháng đầu vận hành.
            </p>
            <p style={{ marginBottom: '25px' }}>
              Chính vì vậy, ngày càng nhiều hộ gia đình và doanh nghiệp lựa chọn giải pháp này để tối ưu chi phí lâu dài.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Giải Pháp Điện Năng Lượng Mặt Trời Cho Gia Đình & Doanh Nghiệp
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Thành Đạt Solar cung cấp giải pháp lắp đặt điện mặt trời áp mái tại Bắc Giang cho đa dạng nhu cầu từ hộ gia đình đến doanh nghiệp và nhà xưởng. Các hệ thống được thiết kế linh hoạt theo công suất, đảm bảo phù hợp với mức tiêu thụ điện thực tế:
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '10px', 
              marginBottom: '30px',
              background: '#f8fafc',
              padding: '20px',
              borderRadius: '12px'
            }}>
              {[
                '1kWp', '2kWp', '3kWp', '5kWp', '6kWp', '8kWp', '10kWp', '15kWp',
                '20kWp', '30kWp', '50kWp', '100kWp', '200kWp', '300kWp', '500kWp', '1MWp'
              ].map(cap => (
                <div key={cap} style={{ 
                  padding: '8px 12px', 
                  background: 'white', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#475569'
                }}>
                  Hệ thống {cap}
                </div>
              ))}
            </div>
            <p style={{ marginBottom: '30px' }}>
              Mỗi hệ thống đều được tối ưu để mang lại hiệu quả sử dụng cao nhất và tiết kiệm chi phí lâu dài.
            </p>

            {/* Price section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời Cho Hộ Gia Đình Và Công Trình Tại Bắc Giang:
            </h3>
            
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontWeight: '600' }}>
              1. Bảng chi phí lắp Hệ thống điện mặt trời hòa lưới bán tải (On-grid)
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Hệ thống điện năng lượng mặt trời tại Bắc Giang hòa lưới được thiết kế tối ưu cho các đối tượng khách hàng có nhu cầu sử dụng điện lớn vào ban ngày, giúp tối đa hóa hiệu quả giảm thiểu chi phí điện năng.
            </p>
            <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginBottom: '25px' }}>
              <strong>Lưu ý quan trọng:</strong> Đây là hệ thống hòa lưới, do đó sẽ không có khả năng phát điện khi xảy ra sự cố mất điện lưới.
            </div>

            {/* Price Table Image 1 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/image-bang-chi-phi-1.png"
                alt="Bảng chi phí lắp điện mặt trời hòa lưới tại Bắc Giang"
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>

            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontWeight: '600', marginTop: '30px' }}>
              2. Bảng chi phí lắp Hệ thống điện năng lượng mặt trời có lưu trữ (Hybrid)
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Bảng giá điện mặt trời tại Bắc Giang áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
            </p>

            {/* Price Table Image 2 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/bang-chi-phi-2-new.png"
                alt="Bảng chi phí lắp điện mặt trời Hybrid tại Bắc Giang"
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>

            <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
              <h5 style={{ fontWeight: '700', marginBottom: '15px', color: '#1e293b' }}>Chú ý:</h5>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Lắp 1 KWP với chi phí chỉ <strong>10-15 triệu</strong> khi lắp đặt trọn gói bởi Thành Đạt Solar</li>
                <li style={{ marginBottom: '8px' }}>1 KWP sẽ tạo ra <strong>4-5 ký điện (kWh)</strong> trong 1 ngày tùy vào từng vùng miền cụ thể.</li>
                <li style={{ marginBottom: '0' }}>Diện tích lắp 1 kWp khoảng <strong>6-8 mét vuông</strong> phụ thuộc vào công suất tấm pin</li>
              </ul>
            </div>

            <p style={{ marginBottom: '30px' }}>
              Thành Đạt Solar cung cấp các gói lắp đặt điện mặt trời áp mái tại Bắc Giang và các tỉnh khu vực phía Bắc. Các gói lắp đặt điện mặt trời được chúng tôi phân phối bao gồm các thiết bị chính là: Tấm pin năng lượng mặt trời, Biến tần hoà lưới (Grid-Inverter) hoặc Inverter Hybrid và các phụ kiện khác (tủ điện, dây điện DC, ốc vít,…).
            </p>

            {/* Tối ưu chi phí section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Giải pháp tối ưu chi phí khi thi công điện năng lượng mặt trời tại Bắc Giang
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Khi thi công điện năng lượng mặt trời tại Bắc Giang, việc tối ưu chi phí không chỉ nằm ở giá lắp đặt mà còn phụ thuộc vào cách thiết kế và lựa chọn hệ thống phù hợp ngay từ đầu. Một hệ thống được tính toán chính xác sẽ giúp giảm chi phí đầu tư và nâng cao hiệu quả sử dụng điện trong dài hạn.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              {[
                { t: 'Lựa chọn công suất phù hợp', d: 'Xác định đúng nhu cầu giúp tránh lãng phí khi lắp dư hoặc thiếu hụt.' },
                { t: 'Tối ưu sản lượng điện', d: 'Hướng mái, độ nghiêng được tính toán để đạt hiệu suất cao nhất tại Bắc Giang.' },
                { t: 'Sử dụng thiết bị chất lượng cao', d: 'Pin và inverter tốt giúp vận hành ổn định, giảm phí bảo trì.' },
                { t: 'Lựa chọn đơn vị uy tín', d: 'Đơn vị kinh nghiệm như Thành Đạt Solar giúp đảm bảo an toàn và hiệu suất.' }
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '15px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '5px' }}>{item.t}</strong>
                  <span style={{ fontSize: '0.9rem' }}>{item.d}</span>
                </div>
              ))}
            </div>
            <p style={{ marginBottom: '30px' }}>
              Một hệ thống điện mặt trời được đầu tư đúng cách không chỉ giúp tiết kiệm chi phí điện hàng tháng mà còn rút ngắn thời gian hoàn vốn và mang lại lợi ích lâu dài cho người sử dụng.
            </p>

            {/* Gợi ý công suất section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Gợi ý lựa chọn công suất khi thi công điện năng lượng mặt trời tại Bắc Giang
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '12px', borderLeft: '5px solid #16a34a' }}>
                <h4 style={{ color: '#166534', marginBottom: '10px', fontWeight: '700' }}>Hệ thống điện mặt trời 3kWp</h4>
                <p style={{ margin: 0 }}>Phù hợp với hộ gia đình nhỏ, mức tiêu thụ điện khoảng 1 – 2 triệu đồng/tháng. Sản lượng trung bình đạt khoảng 350 – 450 kWh/tháng.</p>
              </div>
              <div style={{ padding: '20px', background: '#eff6ff', borderRadius: '12px', borderLeft: '5px solid #1d4ed8' }}>
                <h4 style={{ color: '#1e40af', marginBottom: '10px', fontWeight: '700' }}>Hệ thống điện mặt trời 5kWp</h4>
                <p style={{ margin: 0 }}>Phù hợp với hộ gia đình tiêu thụ điện trung bình. Tạo ra khoảng 600 – 750 kWh/tháng, đáp ứng tốt nhu cầu sinh hoạt cơ bản.</p>
              </div>
              <div style={{ padding: '20px', background: '#fffbeb', borderRadius: '12px', borderLeft: '5px solid #d97706' }}>
                <h4 style={{ color: '#92400e', marginBottom: '10px', fontWeight: '700' }}>Hệ thống điện mặt trời từ 10kWp trở lên</h4>
                <p style={{ margin: 0 }}>Phù hợp với nhà xưởng, cơ sở kinh doanh hoặc hộ gia đình sử dụng điện lớn. Đảm bảo nguồn điện ổn định và tiết kiệm tối đa.</p>
              </div>
            </div>

            {/* Quy trinh section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Quy trình Thi công Lắp đặt Điện Năng Lượng Mặt Trời tại Thành Đạt
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Để đảm bảo mỗi công trình tại Bắc Giang đạt hiệu quả tối ưu về cả kỹ thuật và kinh tế, Thành Đạt Solar đã xây dựng một quy trình làm việc chuyên nghiệp, minh bạch và khoa học.
            </p>
            
            <div className={styles.gridCards}>
              <div className={styles.card}>
                <h4>1. Khảo sát & Tư vấn Chuyên sâu</h4>
                <p>Khảo sát địa điểm đánh giá hướng nắng, diện tích mái, kết cấu công trình để tư vấn công suất tối ưu nhất.</p>
              </div>
              <div className={styles.card}>
                <h4>2. Thiết kế Kỹ thuật Tối ưu</h4>
                <p>Thiết kế bản vẽ chi tiết, lựa chọn thiết bị đảm bảo hiệu suất khai thác cao nhất và bền bỉ.</p>
              </div>
              <div className={styles.card}>
                <h4>3. Báo giá Minh bạch</h4>
                <p>Cam kết báo giá rõ ràng, không chi phí phát sinh, giải thích cặn kẽ từng hạng mục đầu tư.</p>
              </div>
              <div className={styles.card}>
                <h4>4. Thi công Chuyên nghiệp</h4>
                <p>Triển khai lắp đặt đúng tiến độ, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn điện quốc tế.</p>
              </div>
              <div className={styles.card}>
                <h4>5. Vận hành & Hướng dẫn</h4>
                <p>Kiểm tra kỹ lưỡng, hướng dẫn khách hàng vận hành và theo dõi sản lượng điện thực tế.</p>
              </div>
              <div className={styles.card}>
                <h4>6. Bảo trì & Hỗ trợ 24/7</h4>
                <p>Bảo trì định kỳ và hỗ trợ kỹ thuật kịp thời 24/7 trong suốt quá trình sử dụng hệ thống.</p>
              </div>
            </div>

            {/* Lợi ích section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lợi ích khi lắp đặt điện mặt trời tại Bắc Giang
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>💰 Tiết kiệm hóa đơn điện</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Giảm từ 50-90% chi phí. Hệ 5kWp giúp tiết kiệm 1,5-2 triệu đồng/tháng (18-24 triệu/năm).</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🌿 Năng lượng sạch</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Mỗi 1kWp giảm 1,5 tấn CO₂/năm. Tương đương với việc trồng thêm hàng chục cây xanh mỗi năm.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🏠 Giá trị Bất động sản</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Nhà có điện mặt trời tăng giá trị 3-5% và cực kỳ hút khách hàng nhờ yếu tố tiết kiệm lâu dài.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>⚡ Hoàn vốn cực nhanh</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Hoàn vốn sau 4-6 năm cho hộ gia đình và 3-5 năm cho doanh nghiệp. Sử dụng bền bỉ 25-30 năm.</p>
              </div>
            </div>

            {/* Tại sao chọn Thành Đạt section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lý do khách hàng lựa chọn Thành Đạt Solar khi có nhu cầu thi công điện năng lượng mặt trời tại Bắc Giang
            </h3>
            <div style={{ marginBottom: '30px' }}>
              {[
                { t: 'Kinh nghiệm thi công thực tế tại Bắc Giang', d: 'Đã thực hiện nhiều công trình cho hộ gia đình, doanh nghiệp và nhà xưởng tại Bắc Giang.' },
                { t: 'Tư vấn đúng nhu cầu, không phát sinh chi phí', d: 'Đưa ra giải pháp công suất tối ưu, tránh lãng phí cho khách hàng.' },
                { t: 'Hiệu quả tiết kiệm điện rõ ràng', d: 'Hệ thống thiết kế chuẩn giúp giảm 50-90% chi phí điện mỗi tháng.' },
                { t: 'Thi công nhanh, đảm bảo an toàn', d: 'Quy trình bài bản, đúng kỹ thuật, an toàn tuyệt đối cho mái nhà.' },
                { t: 'Bảo hành rõ ràng, hỗ trợ lâu dài', d: 'Chính sách bảo hành minh bạch, hỗ trợ bảo trì định kỳ.' },
                { t: 'Giá thành hợp lý, tối ưu đầu tư', d: 'Cung cấp thiết bị chất lượng với chi phí cạnh tranh nhất thị trường.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <h4 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: '700', marginBottom: '5px' }}>● {item.t}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>{item.d}</p>
                </div>
              ))}
            </div>

            {/* Footer Contact */}
            <div style={{ 
              background: 'linear-gradient(135deg, #065f46 0%, #064e3b 100%)', 
              padding: '40px', 
              borderRadius: '16px', 
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '700' }}>Liên hệ thi công điện năng lượng mặt trời tại Bắc Giang</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9, lineHeight: '1.8' }}>
                Thành Đạt Solar cam kết mang đến giải pháp điện mặt trời trọn gói tối ưu, chuyên nghiệp và tiết kiệm nhất cho khách hàng tại Bắc Giang.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  .cta-button { transition: transform 0.2s; }
                  .cta-button:hover { transform: scale(1.05); }
                ` }} />
                <a href="tel:0368444567" className="cta-button" style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#fbbf24', 
                  color: '#92400e', 
                  padding: '16px 35px', 
                  borderRadius: '50px', 
                  fontWeight: '800', 
                  fontSize: '1.25rem', 
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  Hotline: 0368.444.567
                </a>
                <a href="https://zalo.me/0368444567" target="_blank" rel="nofollow" className="cta-button" style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#0068ff', 
                  color: 'white', 
                  padding: '16px 35px', 
                  borderRadius: '50px', 
                  fontWeight: '800', 
                  fontSize: '1.25rem', 
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                }}>
                  Chat Zalo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebarWrapper">
          <Sidebar recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}
