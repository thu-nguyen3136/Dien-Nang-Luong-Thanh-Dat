import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import Script from 'next/script';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const data = getData();
  const service = (data.services || []).find(s => s.slug === 'thi-cong-dien-nang-luong-mat-troi-tai-phu-tho');
  if (service && service.status === 'published') {
    return {
      title: service.seoTitle || `${service.title} | Thành Đạt Solar`,
      description: service.metaDesc || service.excerpt || service.title,
    };
  }
  return {
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Phú Thọ | Thành Đạt Solar',
    description: 'Dịch vụ thi công điện năng lượng mặt trời tại Phú Thọ trọn gói. Giải pháp tiết kiệm chi phí điện cho gia đình và doanh nghiệp. Tư vấn, lắp đặt chuyên nghiệp.',
    alternates: {
      canonical: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho',
    },
    openGraph: {
      title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Phú Thọ | Thành Đạt Solar',
      description: 'Lắp đặt điện mặt trời áp mái tại Phú Thọ giúp giảm 50-90% hóa đơn điện. Bảo hành dài hạn, thiết bị chính hãng.',
      images: ['/images/lap-va-ban-dien-nang-luong-mat-t.png'],
      url: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho',
      type: 'article',
    },
  };
}

export default function ThiCongDienMatTroiPhuThoPage() {
  const data = getData();
  const recentPosts = data.posts || [];
  
  const service = (data.services || []).find(s => s.slug === 'thi-cong-dien-nang-luong-mat-troi-tai-phu-tho');
  
  if (service) {
    if (service.status === 'draft') {
      notFound();
    }
    return (
      <div style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${service.image || "/images/ap-mai.png"}")`,
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
              {service.title}
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.95, 
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Giải pháp năng lượng sạch tối ưu cho mọi gia đình và doanh nghiệp Đất Tổ.
            </p>
          </div>
        </section>

        <div className={`container ${styles.serviceLayout}`}>
          <div className={styles.serviceContent}>
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </div>
          <div className="sidebarWrapper">
            <Sidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    );
  }


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thi công điện năng lượng mặt trời tại Phú Thọ",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Thành Đạt Solar",
      "image": "https://lapdatdiennangluongmattroi.com/images/logo.png",
      "telephone": "0368.444.567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phú Thọ",
        "addressCountry": "VN"
      }
    },
    "description": "Giải pháp lắp đặt điện mặt trời chuyên nghiệp tại Phú Thọ. Tiết kiệm chi phí, bảo vệ môi trường cho hộ gia đình và nhà xưởng.",
    "areaServed": "Phú Thọ",
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
        "name": "Thi công tại Phú Thọ",
        "item": "https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Chi phí lắp điện mặt trời tại Phú Thọ năm 2024 có cao không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hiện tại chi phí thiết bị đã giảm đáng kể so với trước đây. Lắp đặt trọn gói tại Phú Thọ chỉ từ 10 triệu/kWp, giúp rút ngắn thời gian hoàn vốn xuống còn 4-5 năm."
        }
      },
      {
        "@type": "Question",
        "name": "Thành Đạt Solar bảo hành tấm pin bao lâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chúng tôi bảo hành tấm pin 12 năm về sản phẩm và 25 năm về hiệu suất (cam kết trên 80%)."
        }
      }
    ]
  };


  return (
    <div style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
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
            Thi Công Điện Năng Lượng Mặt Trời Tại Phú Thọ
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.95, 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Giải pháp năng lượng sạch tối ưu cho mọi gia đình và doanh nghiệp Đất Tổ.
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
            Thi công điện năng lượng mặt trời tại Phú Thọ
          </h2>

          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '15px' }}>
              Các hệ thống <strong>điện năng lượng mặt trời tại Phú Thọ</strong> hiện nay được thiết kế với đa dạng công suất, từ hệ thống điện mặt trời hộ gia đình đến hệ thống điện mặt trời cho doanh nghiệp và nhà xưởng sản xuất. Việc lắp đặt điện mặt trời áp mái tại Phú Thọ theo từng mức công suất kWp giúp tối ưu sản lượng điện, giảm chi phí điện hàng tháng và phù hợp với từng nhu cầu sử dụng điện thực tế, từ dân dụng đến công nghiệp.
            </p>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Giải Pháp Điện Năng Lượng Mặt Trời Cho Gia Đình & Doanh Nghiệp
            </h3>
            <h4 style={{ fontSize: '1.2rem', color: '#1f2937', marginBottom: '15px', fontWeight: '600' }}>
              Các hệ thống điện năng lượng mặt trời theo công suất tại Phú Thọ
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Tại Phú Thọ, Thành Đạt Solar triển khai đa dạng các hệ thống điện năng lượng mặt trời với nhiều mức công suất khác nhau, phù hợp cho hộ gia đình, doanh nghiệp và nhà xưởng sản xuất:
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
              Mỗi hệ thống điện năng lượng mặt trời tại Phú Thọ đều được thiết kế tối ưu theo nhu cầu sử dụng điện thực tế, giúp tiết kiệm chi phí điện và đảm bảo hiệu quả vận hành lâu dài.
            </p>

            {/* Price section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời Cho Hộ Gia Đình Và Công Trình Tại Phú Thọ:
            </h3>
            
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontWeight: '600' }}>
              1. Bảng chi phí lắp Hệ thống điện mặt trời hòa lưới bán tải (On-grid)
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Hệ thống điện năng lượng mặt trời tại Phú Thọ hòa lưới được thiết kế tối ưu cho các đối tượng khách hàng có nhu cầu sử dụng điện lớn vào ban ngày, giúp tối đa hóa hiệu quả giảm thiểu chi phí điện năng.
            </p>
            <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginBottom: '25px' }}>
              <strong>Lưu ý quan trọng:</strong> Đây là hệ thống hòa lưới, do đó sẽ không có khả năng phát điện khi xảy ra sự cố mất điện lưới.
            </div>

            {/* Price Table Image 1 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/image-bang-chi-phi-1.png"
                alt="Bảng chi phí lắp điện mặt trời hòa lưới tại Phú Thọ"
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
              Bảng giá điện mặt trời tại Phú Thọ áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
            </p>

            {/* Price Table Image 2 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/bang-chi-phi-2-new.png"
                alt="Bảng chi phí lắp điện mặt trời Hybrid tại Phú Thọ"
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
              Thành Đạt Solar cung cấp các gói lắp đặt điện mặt trời áp mái tại Phú Thọ và các tỉnh khu vực phía Bắc. Các gói lắp đặt điện mặt trời được chúng tôi phân phối bao gồm các thiết bị chính là: Tấm pin năng lượng mặt trời, Biến tần hoà lưới (Grid-Inverter) hoặc Inverter Hybrid và các phụ kiện khác (tủ điện, dây điện DC, ốc vít,…).
            </p>

            {/* Tối ưu chi phí section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Cách tối ưu chi phí khi lắp điện năng lượng mặt trời tại Phú Thọ
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Để tối ưu chi phí lắp đặt, khách hàng không nên chỉ tập trung vào giá rẻ mà cần lựa chọn giải pháp phù hợp với nhu cầu sử dụng điện thực tế.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
              {[
                { t: 'Sử dụng thiết bị chất lượng cao', d: 'Pin và inverter tốt giúp vận hành ổn định và giảm phí bảo trì.' },
                { t: 'Tận dụng tối đa diện tích mái', d: 'Bố trí hợp lý giúp tăng sản lượng điện tạo ra.' },
                { t: 'Lựa chọn đơn vị thi công uy tín', d: 'Đảm bảo hiệu suất hệ thống và hạn chế rủi ro.' },
                { t: 'Lựa chọn công suất phù hợp', d: 'Tránh lắp dư thừa hoặc thiếu hụt điện năng.' }
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '15px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ color: 'var(--primary-color)', marginBottom: '5px' }}>{item.t}</strong>
                  <span style={{ fontSize: '0.9rem' }}>{item.d}</span>
                </div>
              ))}
            </div>

            {/* Gợi ý công suất section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Gợi ý lựa chọn công suất phù hợp tại Phú Thọ
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '12px' }}>
                <h4 style={{ color: '#166534', marginBottom: '8px', fontWeight: '700' }}>Hệ thống 3kWp</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Cho hộ gia đình nhỏ (tiền điện 1–2 triệu/tháng). Sản lượng 350–450 kWh/tháng.</p>
              </div>
              <div style={{ padding: '20px', background: '#eff6ff', borderRadius: '12px' }}>
                <h4 style={{ color: '#1e40af', marginBottom: '8px', fontWeight: '700' }}>Hệ thống 5kWp</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Cho gia đình trung bình. Sản lượng 600–750 kWh/tháng, giảm đáng kể chi phí điện.</p>
              </div>
              <div style={{ padding: '20px', background: '#fffbeb', borderRadius: '12px' }}>
                <h4 style={{ color: '#92400e', marginBottom: '8px', fontWeight: '700' }}>Từ 10kWp trở lên</h4>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Cho nhà xưởng, kinh doanh hoặc hộ sử dụng điện lớn, đảm bảo tiết kiệm lâu dài.</p>
              </div>
            </div>

            {/* Quy trinh section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Quy trình Thi công Lắp đặt Điện Năng Lượng Mặt Trời tại Thành Đạt
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Để đảm bảo mỗi công trình tại Phú Thọ đạt hiệu quả tối ưu về cả kỹ thuật và kinh tế, Thành Đạt Solar đã xây dựng một quy trình làm việc chuyên nghiệp, minh bạch và khoa học.
            </p>
            
            <div className={styles.gridCards}>
              <div className={styles.card}>
                <h4>1. Khảo sát & Tư vấn Chuyên sâu</h4>
                <p>Khảo sát trực tiếp địa điểm đánh giá hướng nắng, diện tích mái, kết cấu để tư vấn công suất tối ưu nhất.</p>
              </div>
              <div className={styles.card}>
                <h4>2. Thiết kế Kỹ thuật Tối ưu</h4>
                <p>Thiết kế bản vẽ chi tiết, lựa chọn tấm pin và inverter phù hợp nhất để đạt hiệu suất cao.</p>
              </div>
              <div className={styles.card}>
                <h4>3. Báo giá Minh bạch</h4>
                <p>Cam kết báo giá rõ ràng, không chi phí phát sinh, giải thích cặn kẽ mọi khoản đầu tư của bạn.</p>
              </div>
              <div className={styles.card}>
                <h4>4. Thi công Chuyên nghiệp</h4>
                <p>Đội ngũ kỹ thuật viên tay nghề cao tuân thủ nghiêm ngặt tiêu chuẩn an toàn điện và xây dựng.</p>
              </div>
              <div className={styles.card}>
                <h4>5. Vận hành & Hướng dẫn</h4>
                <p>Kiểm tra hệ thống, chạy thử kỹ lưỡng và hướng dẫn khách hàng làm chủ hệ thống của mình.</p>
              </div>
              <div className={styles.card}>
                <h4>6. Bảo trì & Hỗ trợ 24/7</h4>
                <p>Đồng hành trọn đời hệ thống với dịch vụ bảo trì định kỳ và hỗ trợ kỹ thuật nhanh chóng 24/7.</p>
              </div>
            </div>

            {/* Lợi ích section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lợi ích khi lắp đặt điện mặt trời tại Phú Thọ
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>💰 Tiết kiệm chi phí</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Giảm 50-90% hóa đơn điện. Hệ 5kWp tiết kiệm 1,5-2 triệu đồng/tháng (18-24 triệu/năm).</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🌿 Năng lượng sạch</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Mỗi 1kWp giảm 1,5 tấn CO₂/năm. Không phát thải độc hại, bảo vệ môi trường Đất Tổ xanh sạch đẹp.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>🏠 Tăng giá trị Bất động sản</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Tăng giá trị nhà 3-5% và dễ dàng chuyển nhượng hơn nhờ các tiện ích xanh hiện đại.</p>
              </div>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <h4 style={{ color: '#059669', marginBottom: '12px', fontSize: '1.1rem' }}>⚡ Hoàn vốn cực nhanh</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Hoàn vốn sau 4-6 năm cho gia đình, 3-5 năm cho doanh nghiệp. Tuổi thọ hệ thống lên đến 30 năm.</p>
              </div>
            </div>

            {/* Tại sao chọn Thành Đạt section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lý do khách hàng lựa chọn Thành Đạt Solar khi có nhu cầu thi công điện năng lượng mặt trời tại Phú Thọ
            </h3>
            <div style={{ marginBottom: '30px' }}>
              {[
                { t: 'Đã triển khai thực tế tại nhiều khu vực Phú Thọ', d: 'Nắm rõ đặc điểm kết cấu mái và nhu cầu điện tại Việt Trì, Lâm Thao, Phù Ninh... giúp tư vấn tối ưu nhất.' },
                { t: 'Tư vấn đúng nhu cầu, không phát sinh chi phí', d: 'Giải pháp đúng công suất, cam kết không có chi phí ẩn trong suốt quá trình thi công.' },
                { t: 'Hiệu quả tiết kiệm điện rõ ràng', d: 'Hệ thống thiết kế chuẩn giúp giảm 50-90% hóa đơn tiền điện ngay tháng đầu tiên.' },
                { t: 'Thi công nhanh, đảm bảo an toàn', d: 'Quy trình thi công bài bản, an toàn điện tuyệt đối và không ảnh hưởng mái nhà.' },
                { t: 'Bảo hành rõ ràng, hỗ trợ lâu dài', d: 'Chính sách bảo hành minh bạch, hỗ trợ bảo trì định kỳ ổn định.' },
                { t: 'Giá thành hợp lý, tối ưu đầu tư', d: 'Cung cấp thiết bị chính hãng với mức giá cạnh tranh nhất thị trường.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <h4 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: '700', marginBottom: '5px' }}>● {item.t}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>{item.d}</p>
                </div>
              ))}
            </div>

            {/* Pham vi section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Khu vực Thành Đạt Solar nhận thi công điện năng lượng mặt trời tại Phú Thọ
            </h3>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px', 
              marginBottom: '40px' 
            }}>
              {[
                'Việt Trì', 'Phú Thọ', 'Lâm Thao', 'Phù Ninh', 'Thanh Ba', 
                'Đoan Hùng', 'Hạ Hòa', 'Cẩm Khê', 'Tam Nông', 'Thanh Thủy', 
                'Thanh Sơn', 'Tân Sơn', 'Yên Lập'
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
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '700' }}>Liên hệ thi công điện năng lượng mặt trời tại Phú Thọ</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9, lineHeight: '1.8' }}>
                Thành Đạt Solar cam kết mang đến giải pháp điện mặt trời chất lượng, phù hợp cho hộ gia đình, doanh nghiệp và nhà xưởng tại Phú Thọ.
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
