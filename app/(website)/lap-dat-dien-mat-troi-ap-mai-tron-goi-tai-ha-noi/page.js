import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';

export const metadata = {
  title: 'Lắp Đặt Điện Mặt Trời Áp Mái Trọn Gói Tại Hà Nội | Thành Đạt Solar',
  description: 'Dịch vụ lắp đặt điện mặt trời áp mái trọn gói tại Hà Nội. Giải pháp tiết kiệm điện năng cho hộ gia đình và doanh nghiệp với chi phí đầu tư thấp, bảo hành dài hạn.',
};

export default function LapDatApMaiHaNoiPage() {
  const data = getData();
  const recentPosts = data.posts || [];

  return (
    <div style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
      <section style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/ap-mai.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase' }}>Lắp Đặt Điện Mặt Trời Áp Mái Trọn Gói Tại Hà Nội</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Chuyên nghiệp - Tận tâm - Tiết kiệm tối đa chi phí</p>
        </div>
      </section>

      <style>{`
        .serviceLayout { display: grid; grid-template-columns: 1fr 300px; gap: 40px; }
        .serviceContent { background-color: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        @media (max-width: 992px) { 
          .serviceLayout { grid-template-columns: 1fr; }
          .serviceContent { padding: 20px; }
        }
      `}</style>

      <div className="container serviceLayout" style={{ marginTop: '40px' }}>
        <div className="serviceContent">

          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            Hà Nội là khu vực có mật độ dân cư và các công trình xây dựng dày đặc. Việc tận dụng không gian mái nhà để lắp đặt hệ thống điện năng lượng mặt trời (ĐNLMT) áp mái đang trở thành giải pháp ưu việt giúp các hộ gia đình và doanh nghiệp tự chủ về nguồn điện, giảm thiểu chi phí sinh hoạt hàng tháng và chung tay bảo vệ môi trường.
          </p>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Tại Sao Nên Lắp Điện Mặt Trời Áp Mái Ở Hà Nội?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
              <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Tận Dụng Tối Đa Mái Nhà</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>Biến không gian mái nhà nhàn rỗi thành cỗ máy sản xuất điện sạch, che mát cho mái nhà giúp giảm nhiệt độ đáng kể vào mùa hè.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
              <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Tiết Kiệm Lên Đến 70% Tiền Điện</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>Với giá điện bậc thang hiện nay, hệ thống áp mái giúp cắt giảm đáng kể hóa đơn tiền điện, đặc biệt vào những tháng hè cao điểm.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
              <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Hiệu Quả Đầu Tư Cao</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>Thời gian hoàn vốn chỉ từ 4 - 6 năm. Sau đó, bạn được sử dụng điện miễn phí hoàn toàn trong suốt 25 - 30 năm vòng đời của hệ thống.</p>
            </div>
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Dịch Vụ Trọn Gói Tại Thành Đạt Solar</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Thành Đạt Solar tự hào là đơn vị hàng đầu tại Hà Nội cung cấp dịch vụ lắp đặt ĐNLMT áp mái trọn gói, bao gồm:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li><strong>Khảo sát & Tư vấn miễn phí:</strong> Kỹ sư đến tận nơi khảo sát đo đạc, đánh giá kết cấu mái và tư vấn giải pháp kỹ thuật phù hợp nhất.</li>
            <li><strong>Thiết kế tối ưu:</strong> Lên bản vẽ 3D, tính toán góc nghiêng và hướng đón nắng để hệ thống đạt hiệu suất phát điện cao nhất.</li>
            <li><strong>Thiết bị chính hãng:</strong> Cam kết sử dụng tấm pin (Longi, Jinko, Canadian...) và Inverter (Deye, Growatt, SMA...) chính hãng 100%, đầy đủ CO/CQ.</li>
            <li><strong>Thi công chuyên nghiệp:</strong> Đội ngũ kỹ thuật viên tay nghề cao, thi công nhanh gọn, đảm bảo an toàn kết cấu và chống thấm cho mái nhà.</li>
            <li><strong>Bảo hành trọn đời:</strong> Hỗ trợ kỹ thuật 24/7, bảo hành thiết bị lên đến 10 năm và hiệu suất pin trên 25 năm.</li>
          </ul>

          <div style={{ background: '#fffbeb', padding: '30px', borderRadius: '8px', textAlign: 'center', border: '1px solid #fde68a' }}>
            <h3 style={{ color: '#b45309', marginBottom: '15px' }}>Khảo Sát Miễn Phí Tại Hà Nội & Các Tỉnh Lân Cận</h3>
            <p style={{ marginBottom: '20px', color: '#92400e' }}>Đừng để chi phí tiền điện trở thành gánh nặng. Hãy bắt đầu đầu tư thông minh ngay hôm nay!</p>
            <a href="tel:0368444567" style={{ display: 'inline-block', backgroundColor: '#d97706', color: 'white', padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem' }}>Liên Hệ Hotline: 0368.444.567</a>
          </div>
        </div>

        <div className="sidebarWrapper">
          <Sidebar recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}
