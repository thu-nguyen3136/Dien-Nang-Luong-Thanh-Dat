import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import Script from 'next/script';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const data = getData();
  const service = (data.services || []).find(s => s.slug === 'thi-cong-dien-nang-luong-mat-troi-tai-ha-noi');
  if (service && service.status === 'published') {
    return {
      title: service.seoTitle || `${service.title} | Thành Đạt Solar`,
      description: service.metaDesc || service.excerpt || service.title,
    };
  }
  return {
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội | Thành Đạt Solar',
    description: 'Thành Đạt Solar cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hà Nội trọn gói, từ tư vấn, thiết kế đến lắp đặt và bảo trì. Giải pháp năng lượng sạch tối ưu.',
    alternates: {
      canonical: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi',
    },
    openGraph: {
      title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội | Thành Đạt Solar',
      description: 'Dịch vụ lắp đặt điện mặt trời áp mái chuyên nghiệp tại Hà Nội. Tiết kiệm 50-90% chi phí điện mỗi tháng.',
      images: ['/images/lap-va-ban-dien-nang-luong-mat-t.png'],
      url: 'https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi',
      type: 'article',
    },
  };
}

export default function ThiCongDienMatTroiHaNoiPage() {
  const data = getData();
  const recentPosts = data.posts || [];
  
  const service = (data.services || []).find(s => s.slug === 'thi-cong-dien-nang-luong-mat-troi-tai-ha-noi');
  
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
              Tiên phong cung cấp giải pháp năng lượng sạch bền vững tại Thủ đô.
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
    "name": "Thi công điện năng lượng mặt trời tại Hà Nội",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Thành Đạt Solar",
      "image": "https://lapdatdiennangluongmattroi.com/images/logo.png",
      "telephone": "0368.444.567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hà Nội",
        "addressCountry": "VN"
      }
    },
    "description": "Giải pháp thi công điện mặt trời trọn gói tại Hà Nội cho hộ gia đình và doanh nghiệp. Tiết kiệm chi phí điện, bảo hành dài hạn.",
    "areaServed": "Hà Nội",
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
        "name": "Thi công tại Hà Nội",
        "item": "https://lapdatdiennangluongmattroi.com/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Lắp điện mặt trời tại Hà Nội loại nào tốt nhất?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tùy nhu cầu, nếu bạn muốn tiết kiệm điện ban ngày thì hệ Hòa lưới là tối ưu. Nếu muốn dự phòng khi mất điện, hệ Hybrid có lưu trữ là lựa chọn hàng đầu."
        }
      },
      {
        "@type": "Question",
        "name": "Thành Đạt Solar có hỗ trợ thủ tục với EVN Hà Nội không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, chúng tôi hỗ trợ trọn gói thủ tục khảo sát, đấu nối và thay đồng hồ 2 chiều với EVN Hà Nội cho khách hàng."
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
            Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.95, 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Tiên phong cung cấp giải pháp năng lượng sạch bền vững tại Thủ đô.
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
            Thi công điện năng lượng mặt trời tại Hà Nội
          </h2>

          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            <p style={{ marginBottom: '15px' }}>
              Là đơn vị tiên phong trong lĩnh vực năng lượng tái tạo tại Hà Nội, <strong>Thành Đạt Solar</strong> chuyên cung cấp dịch vụ trọn gói từ tư vấn, thiết kế, thi công lắp đặt đến bảo trì hệ thống điện năng lượng mặt trời cho hộ gia đình, doanh nghiệp và nhà máy. Thành Đạt Solar tự hào là đơn vị hàng đầu chuyên cung cấp dịch vụ thi công lắp đặt điện năng lượng mặt trời tại Hà Nội, Chúng tôi cam kết mang đến những giải pháp năng lượng sạch tối ưu, giúp khách hàng tiết kiệm chi phí điện năng, nâng cao hiệu suất sử dụng và chung tay bảo vệ môi trường.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Thành Đạt Solar nhận thi công hệ thống điện năng lượng mặt trời đa dạng theo nhu cầu sử dụng thực tế của khách hàng, bao gồm:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '25px' }}>
              <li style={{ padding: '10px 15px', background: '#eff6ff', borderLeft: '4px solid #2563eb', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Thi công hệ thống điện năng lượng mặt trời có lưu trữ (Hybrid)</strong>
              </li>
              <li style={{ padding: '10px 15px', background: '#f0fdf4', borderLeft: '4px solid #16a34a', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Thi công hệ thống điện năng lượng mặt trời không lưu trữ (Hòa lưới – On-grid)</strong>
              </li>
              <li style={{ padding: '10px 15px', background: '#fffbeb', borderLeft: '4px solid #d97706', marginBottom: '10px', borderRadius: '4px' }}>
                <strong>Thi công hệ thống điện năng lượng mặt trời độc lập (Off-grid)</strong>
              </li>
            </ul>
            <p style={{ marginBottom: '30px' }}>
              Với mỗi loại hệ thống, chúng tôi đều tối ưu thiết kế theo mục tiêu sử dụng điện, ngân sách đầu tư và điều kiện công trình, giúp khách hàng đạt hiệu quả tiết kiệm điện tối đa và vận hành ổn định lâu dài.
            </p>

            {/* Middle Image */}
            <div style={{ margin: '40px 0', textAlign: 'center' }}>
              <img
                src="/images/lap-va-ban-dien-nang-luong-mat-t.png"
                alt="Thi công điện năng lượng mặt trời tại Hà Nội"
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
              Giải Pháp Điện Năng Lượng Mặt Trời Cho Gia Đình & Doanh Nghiệp
            </h3>
            <h4 style={{ fontSize: '1.2rem', color: '#1f2937', marginBottom: '15px', fontWeight: '600' }}>
              Các hệ thống điện năng lượng mặt trời theo công suất
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Thành Đạt Solar cung cấp và thi công đa dạng các hệ thống điện năng lượng mặt trời theo nhiều mức công suất khác nhau, phù hợp cho hộ gia đình, doanh nghiệp và nhà xưởng:
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
              <i>Mỗi mức công suất sẽ được Thành Đạt Solar tư vấn thiết kế riêng biệt, đảm bảo phù hợp với nhu cầu sử dụng điện thực tế, diện tích mái và khả năng đầu tư của khách hàng.</i>
            </p>

            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời Cho Hộ Gia Đình Và Công Trình Tại Hà Nội:
            </h3>
            
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontWeight: '600' }}>
              1. Bảng chi phí lắp Hệ thống điện mặt trời hòa lưới bán tải (On-grid)
            </h4>
            <p style={{ marginBottom: '20px' }}>
              Hệ thống điện năng lượng mặt trời tại Hà Nội hòa lưới được thiết kế tối ưu cho các đối tượng khách hàng có nhu cầu sử dụng điện lớn vào ban ngày, giúp tối đa hóa hiệu quả giảm thiểu chi phí điện năng.
            </p>
            <div style={{ background: '#fef2f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', marginBottom: '25px' }}>
              <strong>Lưu ý quan trọng:</strong> Đây là hệ thống hòa lưới, do đó sẽ không có khả năng phát điện khi xảy ra sự cố mất điện lưới.
            </div>

            {/* Price Table Image 1 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/image-bang-chi-phi-1.png"
                alt="Bảng chi phí lắp điện mặt trời hòa lưới tại Hà Nội"
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
              Bảng giá điện mặt trời tại Hà Nội áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
            </p>

            {/* Price Table Image 2 */}
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
              <img
                src="/images/bang-chi-phi-2-new.png"
                alt="Bảng chi phí lắp điện mặt trời Hybrid tại Hà Nội"
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
              Thành Đạt Solar cung cấp các gói lắp đặt điện mặt trời áp mái tại Hà Nội và các tỉnh khu vực phía Bắc. Các gói lắp đặt điện mặt trời được chúng tôi phân phối bao gồm các thiết bị chính là: Tấm pin năng lượng mặt trời, Biến tần hoà lưới (Grid-Inverter) hoặc Inverter Hybrid và các phụ kiện khác (tủ điện, dây điện DC, ốc vít,…).
            </p>

            {/* Các yếu tố ảnh hưởng section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Các yếu tố ảnh hưởng đến chi phí lắp điện năng lượng mặt trời
            </h3>
            <p style={{ marginBottom: '30px' }}>
              Công suất hệ thống là yếu tố quan trọng nhất ảnh hưởng đến giá, hệ có công suất càng lớn thì chi phí càng cao . Loại tấm pin quyết định hiệu suất và giá thành, trên thị trường có nhiều loại với hiệu suất và giá cả khác nhau. Ngoài ra, thiết bị đi kèm bao gồm inverter, khung giá đỡ, dây cáp và tủ điện cũng tác động đến tổng chi phí. Chi phí lắp đặt thay đổi tùy độ phức tạp công trình, vị trí địa lý và đơn vị thi công. Thương hiệu và xuất xứ sản phẩm từ các nhà sản xuất uy tín có giá cao hơn nhưng chất lượng được đảm bảo.
            </p>

            {/* Quy trinh section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Quy trình Thi công Lắp đặt Điện Năng Lượng Mặt Trời tại Thành Đạt
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Để đảm bảo mỗi công trình tại Hà Nội đạt hiệu quả tối ưu về cả kỹ thuật và kinh tế, Thành Đạt Solar đã xây dựng một quy trình làm việc chuyên nghiệp, minh bạch và khoa học.
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
                <p>Tiến hành thi công lắp đặt tại Hà Nội theo đúng tiến độ cam kết, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn điện.</p>
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
              Lợi ích khi lắp đặt điện mặt trời tại Hà Nội
            </h3>
            <p style={{ marginBottom: '25px' }}>
              Đầu tư điện mặt trời mang lại lợi ích kinh tế và môi trường vượt trội cho cả hộ gia đình lẫn doanh nghiệp tại Hà Nội.
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

            {/* Tại sao chọn Thành Đạt section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '20px', fontWeight: '700' }}>
              Lý do khách hàng lựa chọn Thành Đạt Solar khi có nhu cầu thi công điện năng lượng mặt trời tại Hà Nội
            </h3>
            <div style={{ marginBottom: '30px' }}>
              {[
                { t: 'Đã triển khai thực tế tại nhiều khu vực Hà Nội', d: 'Kinh nghiệm tại Cầu Giấy, Hà Đông, Đống Đa… giúp hiểu rõ đặc điểm mái nhà và điều kiện lắp đặt tại Thủ đô.' },
                { t: 'Tư vấn đúng nhu cầu, không phát sinh chi phí', d: 'Tư vấn công suất phù hợp, tránh đầu tư dư thừa.' },
                { t: 'Hiệu quả tiết kiệm điện rõ ràng', d: 'Giảm 50-90% hóa đơn tiền điện hàng tháng cho hộ gia đình và doanh nghiệp.' },
                { t: 'Thi công nhanh, đảm bảo an toàn', d: 'Quy trình bài bản, đúng kỹ thuật, an toàn điện và kết cấu công trình.' },
                { t: 'Bảo hành rõ ràng, hỗ trợ lâu dài', d: 'Chính sách minh bạch, bảo trì định kỳ ổn định.' },
                { t: 'Giá thành hợp lý, tối ưu đầu tư', d: 'Cân bằng hoàn hảo giữa chất lượng thiết bị và chi phí đầu tư.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
                  <h4 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: '700', marginBottom: '5px' }}>● {item.t}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>{item.d}</p>
                </div>
              ))}
            </div>

            {/* Pham vi section */}
            <h3 style={{ fontSize: '1.5rem', color: '#111827', marginTop: '35px', marginBottom: '15px', fontWeight: '700' }}>
              Khu vực Thành Đạt Solar nhận thi công điện năng lượng mặt trời tại Hà Nội
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Thành Đạt Solar nhận thi công trên toàn bộ các quận, huyện tại Hà Nội, đảm bảo khảo sát nhanh chóng và triển khai phù hợp.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: '#1e293b', marginBottom: '10px' }}>📍 Khu vực nội thành</h4>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '0.9rem', color: '#475569' }}>
                  {[
                    'Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Hai Bà Trưng', 
                    'Cầu Giấy', 'Thanh Xuân', 'Hoàng Mai', 'Hà Đông', 
                    'Tây Hồ', 'Long Biên'
                  ].map(a => <li key={a} style={{ marginBottom: '4px' }}>• {a}</li>)}
                </ul>
              </div>
              <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ color: '#1e293b', marginBottom: '10px' }}>🗺️ Khu vực ngoại thành</h4>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '0.9rem', color: '#475569' }}>
                  {[
                    'Đông Anh', 'Gia Lâm', 'Thanh Trì', 'Hoài Đức', 
                    'Thanh Oai', 'Thường Tín', 'Phú Xuyên', 'Sóc Sơn', 
                    'Mê Linh', 'Quốc Oai', 'Thạch Thất', 'Chương Mỹ', 
                    'Ứng Hòa', 'Mỹ Đức', 'Ba Vì', 'Đan Phượng'
                  ].map(a => <li key={a} style={{ marginBottom: '4px' }}>• {a}</li>)}
                </ul>
              </div>
            </div>

            <p style={{ marginBottom: '30px' }}>
              <strong>Thành Đạt Solar</strong> là đơn vị chuyên thi công điện năng lượng mặt trời tại Hà Nội uy tín, cung cấp giải pháp lắp đặt trọn gói. Nếu bạn đang tìm kiếm đơn vị giá tốt, hiệu quả cao và bảo hành dài hạn, chúng tôi chính là lựa chọn đáng tin cậy.
            </p>

            {/* Footer Contact */}
            <div style={{ 
              background: 'linear-gradient(135deg, #065f46 0%, #064e3b 100%)', 
              padding: '40px', 
              borderRadius: '16px', 
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '700' }}>Liên hệ thi công điện năng lượng mặt trời tại Hà Nội</h3>
              <p style={{ marginBottom: '25px', opacity: 0.9, lineHeight: '1.8' }}>
                Hãy liên hệ với Thành Đạt ngay hôm nay để nhận được tư vấn chuyên sâu về giải pháp năng lượng sạch và bền vững cho tương lai.
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
