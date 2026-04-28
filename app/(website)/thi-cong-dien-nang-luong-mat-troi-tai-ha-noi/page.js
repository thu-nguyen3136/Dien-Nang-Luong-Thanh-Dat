import React from 'react';
import Link from 'next/link';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';
import styles from '@/app/components/ServiceLayout.module.css';

export const metadata = {
  title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội | Thành Đạt Solar',
  description: 'Thành Đạt Solar cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hà Nội trọn gói, chuyên nghiệp. Giải pháp năng lượng sạch cho hộ gia đình và doanh nghiệp.',
};

export default function ThiCongDienMatTroiHaNoiPage() {
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase' }}>Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Tiên phong - Chuyên nghiệp - Hiệu quả bền vững</p>
        </div>
      </section>


      <div className={`container ${styles.serviceLayout}`} style={{ marginTop: '40px' }}>
        <div className={styles.serviceContent}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px', fontSize: '1.8rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px' }}>Dịch Vụ Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội Uy Tín</h2>

          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Là đơn vị tiên phong trong lĩnh vực năng lượng tái tạo tại Hà Nội, <strong>Thành Đạt Solar</strong> chuyên cung cấp dịch vụ trọn gói từ tư vấn, thiết kế, thi công lắp đặt đến bảo trì hệ thống điện năng lượng mặt trời cho hộ gia đình, doanh nghiệp và nhà máy. Thành Đạt Solar tự hào là đơn vị hàng đầu chuyên cung cấp dịch vụ thi công lắp đặt điện năng lượng mặt trời tại Hà Nội. Chúng tôi cam kết mang đến những giải pháp năng lượng sạch tối ưu, giúp khách hàng tiết kiệm chi phí điện năng, nâng cao hiệu suất sử dụng và chung tay bảo vệ môi trường.
          </p>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            Thành Đạt Solar nhận thi công hệ thống điện năng lượng mặt trời đa dạng theo nhu cầu sử dụng thực tế của khách hàng, bao gồm:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.8' }}>
            <li><strong>Thi công hệ thống điện năng lượng mặt trời có lưu trữ (Hybrid)</strong></li>
            <li><strong>Thi công hệ thống điện năng lượng mặt trời không lưu trữ (Hòa lưới – On-grid)</strong></li>
            <li><strong>Thi công hệ thống điện năng lượng mặt trời độc lập (Off-grid)</strong></li>
          </ul>
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            Với mỗi loại hệ thống, chúng tôi đều tối ưu thiết kế theo mục tiêu sử dụng điện, ngân sách đầu tư và điều kiện công trình, giúp khách hàng đạt hiệu quả tiết kiệm điện tối đa và vận hành ổn định lâu dài.
          </p>

          {/* Bắt đầu phần chèn ảnh */}
          <div style={{ margin: '40px 0', textAlign: 'center' }}>
            <img
              src="/images/lap-va-ban-dien-nang-luong-mat-t.png"
              alt="Thi công lắp đặt điện năng lượng mặt trời chuyên nghiệp tại Hà Nội"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) object:contain'
              }}
            />
          </div>
          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Các hệ thống điện năng lượng mặt trời theo công suất</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Thành Đạt Solar cung cấp và thi công đa dạng các hệ thống điện năng lượng mặt trời theo nhiều mức công suất khác nhau, phù hợp cho hộ gia đình, doanh nghiệp và nhà xưởng:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
            <ul style={{ listStyleType: 'square', paddingLeft: '20px', lineHeight: '1.8', margin: 0 }}>
              <li>Hệ thống 1kWp, 2kWp, 3kWp</li>
              <li>Hệ thống 5kWp, 6kWp, 8kWp</li>
              <li>Hệ thống 10kWp, 15kWp, 20kWp</li>
            </ul>
            <ul style={{ listStyleType: 'square', paddingLeft: '20px', lineHeight: '1.8', margin: 0 }}>
              <li>Hệ thống 30kWp, 50kWp</li>
              <li>Hệ thống 100kWp, 200kWp, 300kWp</li>
              <li>Hệ thống 500kWp, 1MWp</li>
            </ul>
          </div>
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            <i>Mỗi mức công suất sẽ được Thành Đạt Solar tư vấn thiết kế riêng biệt, đảm bảo phù hợp với nhu cầu sử dụng điện thực tế, diện tích mái và khả năng đầu tư của khách hàng.</i>
          </p>

          {/* Bắt đầu phần chèn ảnh */}
          <div style={{ margin: '40px 0', textAlign: 'center' }}>
            <img
              src="/images/solar_1.jpeg"
              alt="Dự án thi công điện mặt trời thực tế bởi Thành Đạt Solar"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            />
          </div>
          {/* Kết thúc phần chèn ảnh */}

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời</h3>
          <h4 style={{ color: '#1f2937', marginBottom: '10px' }}>1. Bảng chi phí Hệ thống điện mặt trời hòa lưới bám tải (On-grid)</h4>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Hệ thống điện năng lượng mặt trời hòa lưới được thiết kế tối ưu cho các đối tượng khách hàng có nhu cầu sử dụng điện lớn vào ban ngày, giúp tối đa hóa hiệu quả giảm thiểu chi phí điện năng.
            <br />
            <strong>Lưu ý quan trọng:</strong> Đây là hệ thống hòa lưới, do đó sẽ không có khả năng phát điện khi xảy ra sự cố mất điện lưới.
          </p>
          {/* Bắt đầu phần chèn Bảng giá */}
          <div style={{ margin: '30px 0', textAlign: 'center' }}>
            <img
              src="/images/image-bang-chi-phi-1.png"
              alt="Bảng giá lắp điện mặt trời trọn gói"
              style={{
                width: '100%',
                maxWidth: '900px',
                height: 'auto',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          {/* Kết thúc phần chèn Bảng giá */}

          <h4 style={{ color: '#1f2937', marginBottom: '10px', marginTop: '20px' }}>2. Bảng chi phí Hệ thống điện năng lượng mặt trời có lưu trữ (Hybrid)</h4>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Bảng giá điện mặt trời tại HàNội áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
          </p>
          {/* Bắt đầu phần chèn Bảng giá số 2 */}
          <div style={{ margin: '30px 0', textAlign: 'center' }}>
            <img
              src="/images/bang-chi-phi-2-new.png"
              alt="Bảng giá điện mặt trời có lưu trữ (Hybrid)"
              style={{
                width: '100%',
                maxWidth: '900px',
                height: 'auto',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          {/* Kết thúc phần chèn Bảng giá số 2 */}

          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6', marginBottom: '30px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', margin: 0, color: '#1e293b' }}>

              <li>Lắp 1 kWp với chi phí chỉ 10-15 triệu khi lắp đặt trọn gói bởi Thành Đạt Solar</li>
              <li>1 kWp sẽ tạo ra 4-5 ký điện (kWh) trong 1 ngày tùy vào từng vùng miền cụ thể.</li>
              <li>Diện tích lắp 1 kWp khoảng 6-8 mét vuông phụ thuộc vào công suất tấm pin</li>
            </ul>
          </div>
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            Thành Đạt Solar cung cấp các gói lắp đặt điện mặt trời áp mái tại Hà Nội bao gồm các thiết bị chính là: Tấm pin năng lượng mặt trời, Biến tần hoà lưới (Grid-Inverter) hoặc Inverter Hybrid và các phụ kiện khác (tủ điện, dây điện DC, ốc vít,…).
          </p>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Các yếu tố ảnh hưởng đến chi phí lắp đặt</h3>
          <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
            Công suất hệ thống là yếu tố quan trọng nhất ảnh hưởng đến giá, hệ có công suất càng lớn thì chi phí càng cao. Loại tấm pin quyết định hiệu suất và giá thành. Ngoài ra, thiết bị đi kèm bao gồm inverter, khung giá đỡ, dây cáp và tủ điện cũng tác động đến tổng chi phí. Chi phí thay đổi tùy độ phức tạp công trình, vị trí địa lý. Hàng chất lượng từ các nhà sản xuất uy tín sẽ có giá cao hơn nhưng chất lượng luôn được đảm bảo.
          </p>
          {/* Bắt đầu phần chèn Ảnh Lợi ích */}
          <div style={{ margin: '10px 0 40px 0', textAlign: 'center' }}>
            <img
              src="/images/2512_khathy.vn-innlmt.jpg"
              alt="Lợi ích điện mặt trời mái nhà cho gia đình và cộng đồng"
              style={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            />
          </div>
          {/* Kết thúc phần chèn Ảnh Lợi ích */}

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Quy Trình Thi Công Lắp Đặt Tại Thành Đạt Solar</h3>
          <div className={styles.gridCards}>
            <div className={styles.card}>
              <h4>1. Khảo sát & Tư vấn</h4>
              <p>Khảo sát trực tiếp địa điểm đánh giá hướng nắng, diện tích mái, kết cấu công trình để tư vấn công suất hệ thống tối ưu nhất.</p>
            </div>
            <div className={styles.card}>
              <h4>2. Thiết kế Kỹ thuật</h4>
              <p>Tính toán tỉ mỉ lựa chọn loại tấm pin, inverter và bố trí bản vẽ hệ thống đảm bảo hiệu suất khai thác cao nhất.</p>
            </div>
            <div className={styles.card}>
              <h4>3. Báo giá Minh bạch</h4>
              <p>Mọi khoản đầu tư được giải thích cặn kẽ, cam kết không có chi phí phát sinh bất ngờ, chi tiết theo từng hạng mục vật tư.</p>
            </div>
            <div className={styles.card}>
              <h4>4. Thi công Chuyên nghiệp</h4>
              <p>Đội ngũ kỹ thuật viên tay nghề cao tuân thủ nghiêm ngặt các tiêu chuẩn an toàn điện, đảm bảo triển khai đúng tiến độ cam kết.</p>
            </div>
            <div className={styles.card}>
              <h4>5. Vận hành & Hướng dẫn</h4>
              <p>Chạy thử nghiệm hệ thống kỹ lưỡng. Chuyên viên sẽ hướng dẫn chi tiết cách vận hành và theo dõi sản lượng điện cho khách hàng.</p>
            </div>
            <div className={styles.card}>
              <h4>6. Bảo trì Định kỳ 24/7</h4>
              <p>Cung cấp dịch vụ bảo trì định kỳ, kiểm tra hiệu suất và hỗ trợ kỹ thuật nhanh chóng 24/7 trong suốt vòng đời hệ thống.</p>
            </div>
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Tại sao đầu tư điện mặt trời mang lại lợi ích vượt trội?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <h4 style={{ color: '#059669', marginBottom: '10px' }}>🌿 Tiết kiệm chi phí điện</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Hệ thống giúp giảm từ 50-90% hóa đơn tiền điện hàng tháng. Hệ 5kWp có thể giúp tiết kiệm lên đến 18-24 triệu đồng mỗi năm.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <h4 style={{ color: '#059669', marginBottom: '10px' }}>♻️ Năng lượng xanh</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Mỗi 1kWp giảm 1,5 tấn CO2 mỗi năm. Không phát thải độc hại, giúp bảo vệ môi trường hệt như việc trồng hàng ngàn cây xanh.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <h4 style={{ color: '#059669', marginBottom: '10px' }}>📈 Tăng giá trị Bất Động Sản</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Nhà có điện mặt trời tăng giá trị 3-5%, đồng thời dễ bán hơn vì người mua ngày càng ưa chuộng các tiện ích tiết kiệm điện.</p>
            </div>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              <h4 style={{ color: '#059669', marginBottom: '10px' }}>⏱ Thời gian hoàn vốn nhanh</h4>
              <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Hộ gia đình chỉ cần 4-6 năm, doanh nghiệp từ 3-5 năm để thu hồi vốn, trong khi tuổi thọ hệ thống lên đến 25-30 năm.</p>
            </div>
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Tại Sao Chọn Thành Đạt Solar Tại Hà Nội?</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Khi tìm kiếm đơn vị thi công điện năng lượng mặt trời tại Hà Nội, khách hàng thường quan tâm đến hiệu quả thực tế, chi phí đầu tư và độ uy tín của đơn vị triển khai. Thành Đạt Solar được nhiều khách hàng lựa chọn nhờ những yếu tố sau:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li><strong>Đã triển khai thực tế tại nhiều khu vực Hà Nội:</strong> Thành Đạt Solar có kinh nghiệm thi công tại các khu vực như Cầu Giấy, Hà Đông, Đống Đa…, giúp hiểu rõ đặc điểm mái nhà và điều kiện lắp đặt tại từng khu vực, từ đó đưa ra giải pháp phù hợp.</li>
            <li><strong>Tư vấn đúng nhu cầu, không phát sinh chi phí:</strong> Khách hàng được tư vấn công suất hệ thống phù hợp với mức tiêu thụ điện thực tế, tránh đầu tư dư thừa và hạn chế chi phí phát sinh trong quá trình thi công.</li>
            <li><strong>Hiệu quả tiết kiệm điện rõ ràng:</strong> Các hệ thống được thiết kế tối ưu giúp giảm từ 50–90% chi phí điện mỗi tháng, đặc biệt phù hợp với hộ gia đình và doanh nghiệp sử dụng điện nhiều tại Hà Nội.</li>
            <li><strong>Thi công nhanh, đảm bảo an toàn:</strong> Quy trình thi công điện mặt trời tại Hà Nội được thực hiện bài bản, đảm bảo đúng kỹ thuật, an toàn điện và không ảnh hưởng đến kết cấu công trình.</li>
            <li><strong>Bảo hành rõ ràng, hỗ trợ lâu dài:</strong> Chính sách bảo hành minh bạch, hỗ trợ kiểm tra và bảo trì định kỳ giúp hệ thống vận hành ổn định trong suốt thời gian sử dụng.</li>
            <li><strong>Giá thành hợp lý, tối ưu đầu tư:</strong> Thành Đạt Solar cung cấp giải pháp lắp đặt điện năng lượng mặt trời tại Hà Nội với chi phí hợp lý, cân bằng giữa chất lượng thiết bị và hiệu quả sử dụng lâu dài.</li>
          </ul>
          {/* Bắt đầu phần chèn Ảnh Lợi ích */}
          <div style={{ margin: '10px 0 40px 0', textAlign: 'center' }}>
            <img
              src="/images/ảnh_end.jpg"
              alt="Lợi ích điện mặt trời mái nhà cho gia đình và cộng đồng"
              style={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            />
          </div>
          {/* Kết thúc phần chèn Ảnh Lợi ích */}

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827' }}>Khu Vực Thành Đạt Solar Nhận Thi Công Tại Hà Nội</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Thành Đạt Solar nhận thi công điện năng lượng mặt trời tại Hà Nội trên toàn bộ các quận, huyện, đảm bảo khảo sát nhanh chóng và triển khai phù hợp với từng loại công trình.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderTop: '4px solid #3b82f6' }}>
              <h4 style={{ color: '#1f2937', marginBottom: '15px', fontSize: '1.1rem' }}>📍 Khu vực nội thành</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Thi công điện mặt trời tại Ba Đình</li>
                <li>Thi công điện mặt trời tại Hoàn Kiếm</li>
                <li>Thi công điện mặt trời tại Đống Đa</li>
                <li>Thi công điện mặt trời tại Hai Bà Trưng</li>
                <li>Thi công điện mặt trời tại Cầu Giấy</li>
                <li>Thi công điện mặt trời tại Thanh Xuân</li>
                <li>Thi công điện mặt trời tại Hoàng Mai</li>
                <li>Thi công điện mặt trời tại Hà Đông</li>
                <li>Thi công điện mặt trời tại Tây Hồ</li>
                <li>Thi công điện mặt trời tại Long Biên</li>
              </ul>
            </div>

            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderTop: '4px solid #10b981' }}>
              <h4 style={{ color: '#1f2937', marginBottom: '15px', fontSize: '1.1rem' }}>🗺️ Khu vực ngoại thành</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Thi công điện mặt trời tại Đông Anh</li>
                <li>Thi công điện mặt trời tại Gia Lâm</li>
                <li>Thi công điện mặt trời tại Thanh Trì</li>
                <li>Thi công điện mặt trời tại Hoài Đức</li>
                <li>Thi công điện mặt trời tại Thanh Oai</li>
                <li>Thi công điện mặt trời tại Thường Tín</li>
                <li>Thi công điện mặt trời tại Phú Xuyên</li>
                <li>Thi công điện mặt trời tại Sóc Sơn</li>
                <li>Thi công điện mặt trời tại Mê Linh</li>
                <li>Thi công điện mặt trời tại Quốc Oai</li>
                <li>Thi công điện mặt trời tại Thạch Thất</li>
                <li>Thi công điện mặt trời tại Chương Mỹ</li>
                <li>Thi công điện mặt trời tại Ứng Hòa</li>
                <li>Thi công điện mặt trời tại Mỹ Đức</li>
                <li>Thi công điện mặt trời tại Ba Vì</li>
                <li>Thi công điện mặt trời tại Đan Phượng</li>
              </ul>
            </div>
          </div>

          <div style={{ background: '#fffbeb', padding: '30px', borderRadius: '8px', textAlign: 'center', border: '1px solid #fde68a' }}>
            <p style={{ marginBottom: '15px', color: '#92400e', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <strong>Thành Đạt Solar</strong> là đơn vị chuyên thi công điện năng lượng mặt trời tại Hà Nội uy tín, cung cấp giải pháp lắp đặt điện mặt trời trọn gói từ hộ gia đình đến doanh nghiệp. Chúng tôi nhận thi công hệ thống điện năng lượng mặt trời hòa lưới, hệ thống điện mặt trời có lưu trữ và hệ thống điện mặt trời độc lập với nhiều mức công suất từ 1kWp đến hàng MWp.
            </p>
            <p style={{ marginBottom: '25px', color: '#92400e', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Nếu bạn đang tìm kiếm đơn vị lắp đặt điện năng lượng mặt trời tại Hà Nội giá tốt, hiệu quả cao và bảo hành dài hạn, Thành Đạt Solar chính là lựa chọn đáng tin cậy. <br />
              <strong>Hãy liên hệ với Thành Đạt ngay hôm nay để nhận được tư vấn chuyên sâu về giải pháp năng lượng sạch và bền vững cho tương lai.</strong>
            </p>
            <a href="tel:0368444567" style={{ display: 'inline-block', backgroundColor: '#d97706', color: 'white', padding: '14px 40px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none', transition: 'all 0.3s' }}>
              Hotline: 0368.444.567
            </a>
          </div>
        </div>

        <div className="sidebarWrapper">
          <Sidebar recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}
