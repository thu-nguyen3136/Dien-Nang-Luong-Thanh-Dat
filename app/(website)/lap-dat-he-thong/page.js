import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';

export const metadata = {
  title: 'Dịch Vụ Lắp Đặt Hệ Thống Điện Mặt Trời | Thành Đạt Solar',
  description: 'Danh sách các giải pháp lắp đặt hệ thống điện năng lượng mặt trời chuyên nghiệp tại Hà Nội và các tỉnh Miền Bắc. Tiết kiệm điện năng, bảo vệ môi trường.',
};

export default function LapDatHeThongHubPage() {
  const data = getData();
  const recentPosts = data.posts || [];

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
        "name": "Lắp đặt hệ thống",
        "item": "https://lapdatdiennangluongmattroi.com/lap-dat-he-thong"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Thành Đạt Solar nhận lắp đặt tại những đâu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chúng tôi nhận thi công lắp đặt điện năng lượng mặt trời tại Hà Nội, Hưng Yên, Bắc Giang, Phú Thọ và các tỉnh thành lân cận khu vực Miền Bắc."
        }
      },
      {
        "@type": "Question",
        "name": "Hệ thống điện mặt trời có bền không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tấm pin năng lượng mặt trời có tuổi thọ trên 25 năm. Các thiết bị inverter thường có tuổi thọ từ 10-15 năm."
        }
      }
    ]
  };


  const mainItems = [
    {
      title: 'Lắp đặt cho Gia đình & Doanh nghiệp',
      desc: 'Giảm áp lực hóa đơn điện cho gia đình và doanh nghiệp.',
      image: '/images/ap-mai.png',
      link: '/lap-dat-he-thong-dien-nang-luong-mat-troi'
    },
  ];

  const provinceItems = [
    {
      title: 'Thi công điện năng lượng mặt trời tại Hà Nội',
      desc: 'Dịch vụ lắp đặt điện mặt trời trọn gói tại các quận, huyện khu vực Thủ đô Hà Nội.',
      image: '/images/lap-va-ban-dien-nang-luong-mat-t.png',
      link: '/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi'
    },
    {
      title: 'Thi công điện năng lượng mặt trời tại Hưng Yên',
      desc: 'Giải pháp năng lượng mặt trời áp mái tối ưu hiệu quả cho hộ gia đình tại Hưng Yên.',
      image: '/images/lap-dat-he-thong-dien-nang-luong-mat-troi.png',
      link: '/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen'
    },
    {
      title: 'Thi công điện năng lượng mặt trời tại Bắc Giang',
      desc: 'Lắp đặt hệ thống điện mặt trời hiệu suất cao, bảo hành dài hạn tại tỉnh Bắc Giang.',
      image: '/images/dien-nang-luong-mt-kn.png',
      link: '/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang'
    },
    {
      title: 'Thi công điện năng lượng mặt trời tại Phú Thọ',
      desc: 'Tư vấn và thi công điện năng lượng mặt trời chuyên nghiệp tại khu vực Phú Thọ.',
      image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi.png',
      link: '/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho'
    }
  ];

  const allItems = [...mainItems, ...provinceItems];

  return (
    <div style={{ backgroundColor: '#f9fafb', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header Section */}
      <section style={{
        background: 'linear-gradient(rgba(0, 31, 63, 0.8), rgba(0, 31, 63, 0.8)), url("/images/dien-nang-luong-mt-kn.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0 60px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '50px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '15px' }}>LẮP ĐẶT HỆ THỐNG ĐIỆN MẶT TRỜI</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            Khám phá các giải pháp lắp đặt năng lượng sạch hiện đại và các dự án tiêu biểu tại các tỉnh thành Miền Bắc.
          </p>
        </div>
      </section>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {allItems.map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              border: '1px solid #f1f5f9'
            }}
              className="hub-card"
            >
              <Link href={item.link} style={{ height: '300px', position: 'relative', overflow: 'hidden', display: 'block' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </Link>
              <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--primary-color)',
                  marginBottom: '15px',
                  fontWeight: '700',
                  lineHeight: '1.4'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#4b5563',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {item.desc}
                </p>
                <Link href={item.link} style={{
                  marginTop: 'auto',
                  display: 'inline-block',
                  color: 'var(--accent-color)',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px'
                }}>
                  Xem chi tiết &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hub-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .hub-card:hover img {
          transform: scale(1.1);
        }
      ` }} />
    </div>
  );
}
