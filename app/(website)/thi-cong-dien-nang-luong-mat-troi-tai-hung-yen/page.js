import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';

export const metadata = {
  title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hưng Yên | Thành Đạt Solar',
  description: 'Thành Đạt Solar cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hưng Yên trọn gói, từ tư vấn, thiết kế đến lắp đặt và bảo trì. Tiết kiệm 50-90% hóa đơn điện.',
  alternates: {
    canonical: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen',
  },
  openGraph: {
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hưng Yên | Thành Đạt Solar',
    description: 'Giải pháp điện mặt trời áp mái tối ưu cho gia đình và doanh nghiệp tại Hưng Yên. Tiết kiệm chi phí, chủ động nguồn điện.',
    images: ['/images/lap-dat-he-thong-dien-nang-luong-mat-troi.png'],
    url: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen',
    type: 'article',
  },
};

export default function ThiCongDienMatTroiHungYenPage() {
  const data = getData();
  const recentPosts = data.posts || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thi công điện năng lượng mặt trời tại Hưng Yên",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Thành Đạt Solar",
      "image": "https://lapdatdiennangluongmattroi.com/images/logo.png",
      "telephone": "0368.444.567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hưng Yên",
        "addressCountry": "VN"
      }
    },
    "description": "Dịch vụ thi công điện năng lượng mặt trời tại Hưng Yên trọn gói cho gia đình và doanh nghiệp. Tiết kiệm chi phí điện, bảo vệ môi trường.",
    "areaServed": "Hưng Yên",
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
        "name": "Thi công tại Hưng Yên",
        "item": "https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Giá lắp điện mặt trời tại Hưng Yên là bao nhiêu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chi phí lắp đặt trọn gói tại Hưng Yên dao động từ 10-15 triệu/kWp đối với hệ hòa lưới và 15-25 triệu/kWp đối với hệ Hybrid có pin lưu trữ."
        }
      },
      {
        "@type": "Question",
        "name": "Thời gian thi công hệ thống điện mặt trời tại Hưng Yên mất bao lâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Với các hộ gia đình, thời gian thi công thường từ 1-3 ngày. Với doanh nghiệp và nhà xưởng, thời gian từ 7-15 ngày tùy công suất hệ thống."
        }
      },
      {
        "@type": "Question",
        "name": "Hệ thống điện mặt trời có hoạt động khi trời mưa không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hệ thống vẫn hoạt động khi trời mưa hoặc mây mù nhưng sản lượng điện sẽ thấp hơn so với khi trời nắng to."
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
            Thi Công Điện Năng Lượng Mặt Trời Tại Hưng Yên
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.95, 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Giải pháp tiết kiệm điện thông minh, bền vững cho tương lai.
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
            Thi công điện năng lượng mặt trời tại Hưng Yên
          </h2>

          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '15px' }}>
              Trong bối cảnh chi phí điện ngày càng tăng, nhiều hộ gia đình và doanh nghiệp đang chuyển sang giải pháp <strong>lắp đặt điện năng lượng mặt trời tại Hưng Yên</strong> nhằm giảm chi phí và chủ động nguồn điện sử dụng. Với lợi thế về diện tích mái và điều kiện nắng ổn định, Hưng Yên là khu vực phù hợp để triển khai các hệ thống điện mặt trời áp mái.
            </p>
            <p style={{ marginBottom: '25px' }}>
              <strong>Thành Đạt Solar</strong> cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hưng Yên trọn gói, từ tư vấn, thiết kế đến lắp đặt và bảo trì, giúp khách hàng tối ưu hiệu quả sử dụng điện và tiết kiệm chi phí lâu dài.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Giải Pháp Điện Năng Lượng Mặt Trời Cho Gia Đình & Doanh Nghiệp
            </h3>
            <p style={{ marginBottom: '15px' }}>Các giải pháp điện năng lượng mặt trời tại Hưng Yên</p>
            <p style={{ marginBottom: '15px' }}>Tùy theo nhu cầu sử dụng, khách hàng có thể lựa chọn các hệ thống điện mặt trời phù hợp:</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '25px' }}>
              <li style={{ padding: '10px 15px', background: '#f0fdf4', borderLeft: '4px solid #16a34a', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Hệ thống điện mặt trời hòa lưới:</strong> Giúp giảm chi phí điện hàng tháng, phù hợp với hộ gia đình và doanh nghiệp sử dụng điện ban ngày.
              </li>
              <li style={{ padding: '10px 15px', background: '#eff6ff', borderLeft: '4px solid #2563eb', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Hệ thống điện mặt trời có lưu trữ:</strong> Có thể sử dụng khi mất điện, phù hợp với khu vực điện không ổn định.
              </li>
              <li style={{ padding: '10px 15px', background: '#fffbeb', borderLeft: '4px solid #d97706', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Hệ thống điện mặt trời độc lập:</strong> Dành cho khu vực chưa có điện lưới hoặc nhu cầu sử dụng riêng biệt.
              </li>
            </ul>
            <p style={{ marginBottom: '30px' }}>Mỗi giải pháp đều được thiết kế phù hợp với điều kiện thực tế tại Hưng Yên.</p>

            {/* Middle Image */}
            <div style={{ margin: '40px 0', textAlign: 'center' }}>
              <img
                src="/images/lap-va-ban-dien-nang-luong-mat-t.png"
                alt="Thi công điện năng lượng mặt trời tại Hưng Yên"
                style={{
                  width: '100%',
                  maxWidth: '850px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Các hệ thống điện năng lượng mặt trời theo công suất tại Hưng Yên
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Tại Hưng Yên, các hệ thống điện năng lượng mặt trời được triển khai với nhiều mức công suất khác nhau, đáp ứng nhu cầu sử dụng điện từ dân dụng đến sản xuất.
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
              Việc lựa chọn công suất phù hợp sẽ giúp tối ưu chi phí đầu tư và hiệu quả sử dụng điện lâu dài.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời Cho Hộ Gia Đình Và Công Trình Tại Hưng Yên:
            </h3>
            
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontWeight: '600' }}>
              1. Bảng chi phí lắp Hệ thống điện mặt trời hòa lưới bán tải (On-grid)
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Hệ thống điện năng lượng mặt trời tại Hưng Yên hòa lưới được thiết kế tối ưu cho các đối tượng khách hàng có nhu cầu sử dụng điện lớn vào ban ngày, giúp tối đa hóa hiệu quả giảm thiểu chi phí điện năng.
            </p>
            <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginBottom: '25px' }}>
              <strong>Lưu ý quan trọng:</strong> Đây là hệ thống hòa lưới, do đó sẽ không có khả năng phát điện khi xảy ra sự cố mất điện lưới.
            </div>

            {/* Price Table Image 1 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/image-bang-chi-phi-1.png"
                alt="Bảng chi phí lắp điện mặt trời hòa lưới tại Hưng Yên"
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
              Bảng giá điện mặt trời tại Hưng Yên áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
            </p>

            {/* Price Table Image 2 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/bang-chi-phi-2-new.png"
                alt="Bảng chi phí lắp điện mặt trời Hybrid tại Hưng Yên"
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
              Thành Đạt Solar cung cấp các gói lắp đặt điện mặt trời áp mái tại Hưng Yên và các tỉnh khu vực phía Bắc. Các gói lắp đặt điện mặt trời được chúng tôi phân phối bao gồm các thiết bị chính là: Tấm pin năng lượng mặt trời, Biến tần hoà lưới (Grid-Inverter) hoặc Inverter Hybrid và các phụ kiện khác (tủ điện, dây điện DC, ốc vít,…).
            </p>

            {/* Kinh nghiem section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Kinh nghiệm khi lắp đặt điện mặt trời tại Hưng Yên
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Để hệ thống điện mặt trời hoạt động ổn định và mang lại hiệu quả lâu dài, khách hàng tại Hưng Yên nên lưu ý một số kinh nghiệm sau:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              {[
                'Lựa chọn công suất phù hợp với mức tiêu thụ điện hàng tháng',
                'Ưu tiên thiết bị chính hãng để đảm bảo độ bền và hiệu suất',
                'Tận dụng tối đa diện tích mái để tăng sản lượng điện',
                'Hợp tác với đơn vị thi công uy tín để hạn chế rủi ro'
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '15px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Quy trinh section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Quy trình Thi công Lắp đặt Điện Năng Lượng Mặt Trời tại Thành Đạt
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Để đảm bảo mỗi công trình tại Hưng Yên đạt hiệu quả tối ưu về cả kỹ thuật và kinh tế, Thành Đạt Solar đã xây dựng một quy trình làm việc chuyên nghiệp, minh bạch và khoa học.
            </p>
            
            <div className={styles.gridCards}>
              <div className={styles.card}>
                <h4>1. Khảo sát & Tư vấn Chuyên sâu</h4>
                <p>Đội ngũ kỹ sư của Thành Đạt sẽ trực tiếp khảo sát địa điểm để đánh giá các yếu tố quan trọng như hướng nắng, diện tích mái, kết cấu công trình.</p>
              </div>
              <div className={styles.card}>
                <h4>2. Thiết kế Kỹ thuật Tối ưu</h4>
                <p>Từ kết quả khảo sát, chúng tôi tiến hành thiết kế bản vẽ kỹ thuật chi tiết, đảm bảo hiệu suất khai thác điện cao nhất.</p>
              </div>
              <div className={styles.card}>
                <h4>3. Báo giá Minh bạch Từng Hạng mục</h4>
                <p>Thành Đạt cam kết mang đến báo giá rõ ràng, chi tiết theo từng hạng mục thiết bị, vật tư và chi phí nhân công.</p>
              </div>
              <div className={styles.card}>
                <h4>4. Thi công Chuyên nghiệp</h4>
                <p>Tiến hành thi công lắp đặt tại Hưng Yên theo đúng tiến độ cam kết, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn điện.</p>
              </div>
              <div className={styles.card}>
                <h4>5. Vận hành & Hướng dẫn</h4>
                <p>Kiểm tra và chạy thử kỹ lưỡng. Hướng dẫn chi tiết cách vận hành, theo dõi sản lượng điện và cách bảo trì cơ bản.</p>
              </div>
              <div className={styles.card}>
                <h4>6. Bảo trì & Hỗ trợ 24/7</h4>
                <p>Đồng hành cùng bạn xuyên suốt vòng đời hệ thống. Bảo trì định kỳ và hỗ trợ kỹ thuật nhanh chóng, kịp thời 24/7.</p>
              </div>
            </div>

            {/* Lợi ích section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lợi ích khi lắp đặt điện mặt trời tại Hưng Yên
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Đầu tư điện mặt trời mang lại lợi ích kinh tế và môi trường vượt trội cho cả hộ gia đình lẫn doanh nghiệp tại Hưng Yên.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>💰 Tiết kiệm chi phí điện</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Giảm từ 50-90% hóa đơn điện. Hệ 5kWp tiết kiệm 1,5-2 triệu đồng/tháng (18-24 triệu/năm).</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🌿 Năng lượng sạch</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Mỗi 1kWp giảm 1,5 tấn CO₂/năm. Không tạo khí thải độc hại, bảo vệ môi trường sống.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🏠 Tăng giá trị bất động sản</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Tăng giá trị nhà từ 3-5% và thời gian bán nhanh hơn 20-30% nhờ lợi ích tiết kiệm lâu dài.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>⚡ Hoàn vốn nhanh</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Hộ gia đình hoàn vốn trong 4-6 năm, doanh nghiệp 3-5 năm. Tuổi thọ hệ thống 25-30 năm.</p>
              </div>
            </div>

            {/* Truong hop section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Các trường hợp nên lắp điện năng lượng mặt trời tại Hưng Yên
            </h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginBottom: '40px' }}>
              {[
                { t: 'Hộ gia đình có tiền điện cao', d: 'Hóa đơn từ 2–3 triệu/tháng trở lên.' },
                { t: 'Sử dụng điện nhiều vào ban ngày', d: 'Dùng điều hòa, máy bơm, thiết bị sản xuất.' },
                { t: 'Doanh nghiệp, xưởng sản xuất', d: 'Tiết kiệm chi phí vận hành đáng kể.' },
                { t: 'Khu vực điện không ổn định', d: 'Cần nguồn điện liên tục (hệ Hybrid).' },
                { t: 'Nhà có mái rộng, ít bị che bóng', d: 'Đạt hiệu suất phát điện cao nhất.' },
                { t: 'Muốn đầu tư lâu dài', d: 'Giải pháp tiết kiệm bền vững 20-25 năm.' }
              ].map((item, i) => (
                <li key={i} style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px' }}>
                  <strong style={{ display: 'block', marginBottom: '5px', color: '#1e293b' }}>{item.t}</strong>
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.d}</span>
                </li>
              ))}
            </ul>

            {/* Tại sao chọn Thành Đạt section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lý do khách hàng lựa chọn Thành Đạt Solar khi có nhu cầu thi công điện năng lượng mặt trời tại Hưng Yên
            </h3>
            <div style={{ marginBottom: '30px' }}>
              {[
                { t: 'Kinh nghiệm thi công thực tế tại Hưng Yên', d: 'Đã thực hiện nhiều công trình cho hộ gia đình, doanh nghiệp và nhà xưởng tại địa phương.' },
                { t: 'Tư vấn đúng nhu cầu, không phát sinh chi phí', d: 'Tư vấn công suất phù hợp, tránh đầu tư dư thừa.' },
                { t: 'Hiệu quả tiết kiệm điện rõ ràng', d: 'Giảm 50-90% hóa đơn tiền điện hàng tháng.' },
                { t: 'Thi công nhanh, đảm bảo an toàn', d: 'Quy trình bài bản, đúng kỹ thuật, an toàn tuyệt đối.' },
                { t: 'Bảo hành rõ ràng, hỗ trợ lâu dài', d: 'Chính sách minh bạch, bảo trì định kỳ.' },
                { t: 'Giá thành hợp lý, tối ưu đầu tư', d: 'Cân bằng giữa chất lượng thiết bị và chi phí.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <h4 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: '700', marginBottom: '5px' }}>● {item.t}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>{item.d}</p>
                </div>
              ))}
            </div>

            {/* Pham vi section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Phạm vi thi công điện năng lượng mặt trời tại Hưng Yên
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Thành Đạt Solar nhận thi công trên toàn bộ khu vực tỉnh Hưng Yên, bao gồm thành phố và các huyện:
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              marginBottom: '40px' 
            }}>
              {[
                'TP Hưng Yên', 'Mỹ Hào', 'Văn Lâm', 'Văn Giang', 'Yên Mỹ', 
                'Khoái Châu', 'Kim Động', 'Ân Thi', 'Tiên Lữ', 'Phù Cừ'
              ].map(area => (
                <span key={area} style={{ 
                  padding: '6px 15px', 
                  background: '#f1f5f9', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem',
                  color: '#475569',
                  border: '1px solid #e2e8f0'
                }}>
                  {area}
                </span>
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
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '700' }}>Liên hệ thi công điện năng lượng mặt trời tại Hưng Yên</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9, lineHeight: '1.8' }}>
                Nếu bạn đang tìm kiếm đơn vị thi công uy tín, Thành Đạt Solar là lựa chọn đáng tin cậy với nhiều năm kinh nghiệm. 
                Chúng tôi cam kết mang đến giải pháp tối ưu, phù hợp nhu cầu và ngân sách của bạn.
              </p>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: '600' }}>
                Hãy liên hệ với Thành Đạt ngay hôm nay để nhận được tư vấn chuyên sâu!
              </p>
            <style dangerouslySetInnerHTML={{ __html: `
              .cta-button { transition: transform 0.2s; }
              .cta-button:hover { transform: scale(1.05); }
            ` }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
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
