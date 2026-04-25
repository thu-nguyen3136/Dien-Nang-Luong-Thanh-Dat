import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';

export const metadata = {
  title: 'Thiết Kế Hệ Thống Điện Năng Lượng Mặt Trời | Thành Đạt Solar',
  description: 'Thành Đạt Solar cung cấp giải pháp thiết kế và thi công hệ thống điện mặt trời đồng bộ, tối ưu, ăn khớp với từng nhu cầu của khách hàng.',
};

export default function ThietKeHeThongPage() {
  const data = getData();
  const recentPosts = data.posts || [];

  return (
    <div style={{ backgroundColor: '#f9fafb', paddingBottom: '60px' }}>
      <section style={{
        position: 'relative',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        <Image
          src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-6.webp"
          alt="Thiết kế hệ thống điện mặt trời"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', zIndex: 1 }}
          priority
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 2
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>THIẾT KẾ HỆ THỐNG ĐIỆN NĂNG LƯỢNG MẶT TRỜI</h1>
        </div>
      </section>

      <style>{`
        .serviceLayout { display: grid; grid-template-columns: 1fr 300px; gap: 40px; }
        .serviceContent { background-color: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .imageBox { position: relative; width: 100%; height: 400px; margin: 30px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        @media (max-width: 992px) { 
          .serviceLayout { grid-template-columns: 1fr; }
          .serviceContent { padding: 20px; }
          .imageBox { height: 250px; }
        }
      `}</style>

      <div className="container serviceLayout" style={{ marginTop: '40px' }}>
        <div className="serviceContent">

          <p style={{ marginBottom: '20px', marginTop: '10px', lineHeight: '1.8', textAlign: 'justify' }}>
            Trong bối cảnh chi phí điện sinh hoạt và sản xuất ngày càng gia tăng, điện năng lượng mặt trời đang trở thành xu hướng tất yếu giúp tiết kiệm chi phí và hỗ trợ bảo vệ môi trường. Tuy nhiên, nhiều hộ gia đình và doanh nghiệp vẫn chưa tối ưu hóa hệ thống để đạt được hiệu suất tốt nhất. Đó chính là lý do Điện Năng Lượng Mặt Trời Thành Đạt ra đời để cung cấp giải pháp thiết kế và thi công hệ thống điện mặt trời đồng bộ, tối ưu, ăn khớp với từng nhu cầu của khách hàng.
          </p>

          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-6.webp"
              alt="Thiết kế hệ thống điện mặt trời"
              fill
              sizes="(max-width: 992px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontStyle: 'italic', color: '#6b7280', marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>Thiết kế hệ thống điện mặt trời tối ưu</p>

          <h2 style={{ marginTop: '40px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Lý Do Nên Chọn Điện Năng Lượng Mặt Trời: Xu Hướng Tương Lai Cho Gia Đình Và Doanh Nghiệp</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.8', textAlign: 'justify' }}>
            Trong bối cảnh biến đổi khí hậu và nguy cơ thiếu hụt năng lượng truyền thống, việc chủ động chuyển sang sử dụng điện năng lượng mặt trời không còn là một lựa chọn, mà đang dần trở thành xu hướng phát triển bền vững. Vậy tại sao ngày càng nhiều người lựa chọn đầu tư hệ thống điện mặt trời?
          </p>

          <h3 style={{ marginTop: '30px', marginBottom: '15px', color: '#111827', fontSize: '1.3rem', fontWeight: 'bold' }}>Lý do nên chọn điện mặt trời:</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li><strong>Tiết kiệm chi phí lâu dài:</strong> Trung bình mỗi hộ gia đình có thể tiết kiệm 30–70% hóa đơn tiền điện mỗi tháng. Đối với doanh nghiệp và nhà xưởng, mức tiết kiệm còn lớn hơn.</li>
            <li><strong>Tăng giá trị bất động sản:</strong> Các ngôi nhà được lắp hệ thống năng lượng mặt trời có thể tăng giá trị từ 3% – 4% khi giao dịch.</li>
            <li><strong>Bảo vệ môi trường:</strong> Hệ thống điện mặt trời không thải ra khí CO2, giúp giảm dấu chân carbon và góp phần chống biến đổi khí hậu.</li>
            <li><strong>Bán điện dư vào lưới:</strong> Theo chính sách EVN, hộ dân và doanh nghiệp có thể bán lại điện dư thừa, tạo thêm nguồn thu nhập.</li>
            <li><strong>Phù hợp với khí hậu Việt Nam:</strong> Việt Nam nằm trong khu vực nhiệt đới, trung bình có từ 4 – 5 giờ nắng hiệu quả mỗi ngày, rất phù hợp để khai thác năng lượng mặt trời.</li>
          </ul>

          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-2.png"
              alt="Lý do chọn điện mặt trời"
              fill
              sizes="(max-width: 992px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h2 style={{ marginTop: '40px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.5rem' }}> Vì Sao Nên Chọn Thành Đạt Là Đối Tác Thiết Kế & Thi Công Hệ Thống Điện Mặt Trời?</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.8', textAlign: 'justify' }}>
            Trên thị trường có rất nhiều nhà cung cấp dịch vụ, nhưng không phải đơn vị nào cũng đủ năng lực để mang đến giải pháp hiệu quả và bền vững. Dưới đây là lý do vì sao khách hàng tin tưởng Thành Đạt:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li><strong>Đội ngũ kỹ sư chuyên môn cao:</strong> Gồm các kỹ sư điện – điện tử, kỹ sư năng lượng có kinh nghiệm hơn 7 năm trong lĩnh vực năng lượng tái tạo. Đội ngũ thường xuyên được cập nhật kiến thức về tiêu chuẩn an toàn điện và công nghệ mới.</li>
            <li><strong>Tư vấn giải pháp phù hợp:</strong> Mỗi khách hàng sẽ được tư vấn riêng theo mục tiêu sử dụng: hộ gia đình cần tối ưu diện tích mái; nhà xưởng cần công suất lớn ổn định; doanh nghiệp, trường học chú trọng vận hành lâu dài.</li>
            <li><strong>Thiết bị chính hãng:</strong> Sử dụng các tấm pin, inverter từ các thương hiệu uy tín như Canadian Solar, JA Solar, SMA, Huawei... đảm bảo hiệu suất và độ bền.</li>
            <li><strong>Thi công đúng tiến độ – kỹ thuật cao:</strong> Triển khai bài bản, đội ngũ lắp đặt chuyên nghiệp, tuân thủ tiêu chuẩn kỹ thuật và an toàn lao động.</li>
            <li><strong>Hỗ trợ vận hành – bảo hành tận nơi:</strong> Hệ thống được bàn giao cùng hướng dẫn chi tiết, kèm chính sách bảo hành dài hạn.</li>
          </ul>

          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-7.webp"
              alt="Lý do chọn điện mặt trời"
              fill
              sizes="(max-width: 992px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h2 style={{ marginTop: '40px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Các Bước Triển Khai Thiết Kế & Lắp Đặt Tại Thành Đạt</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0 0 30px 0' }}>
            <li style={{ padding: '15px', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#f8fafc', marginBottom: '10px' }}><strong>Tiếp nhận nhu cầu:</strong> Khách hàng có thể liên hệ trực tiếp qua hotline <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 5px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 0962.772.459 hoặc Zalo để được tư vấn sơ bộ và đặt lịch khảo sát.</li>
            <li style={{ padding: '15px', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#f8fafc', marginBottom: '10px' }}><strong>Khảo sát thực tế:</strong> Kỹ sư của Thành Đạt sẽ đến khảo sát vị trí lắp đặt, đo đạc mái nhà/xưởng, đánh giá hướng nắng, kiểm tra tải điện.</li>
            <li style={{ padding: '15px', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#f8fafc', marginBottom: '10px' }}><strong>Thiết kế và báo giá:</strong> Dựa trên dữ liệu thực tế, đội ngũ thiết kế hệ thống công suất phù hợp, lập dự toán chi tiết và phân tích khả năng hoàn vốn (ROI).</li>
            <li style={{ padding: '15px', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#f8fafc', marginBottom: '10px' }}><strong>Ký kết hợp đồng:</strong> Thống nhất phương án, tiến hành ký kết hợp đồng thi công rõ ràng, minh bạch về giá cả và thời gian triển khai.</li>
            <li style={{ padding: '15px', borderLeft: '4px solid var(--primary-color)', backgroundColor: '#f8fafc', marginBottom: '10px' }}><strong>Thi công – vận hành:</strong> Lắp đặt hệ thống theo đúng quy trình kỹ thuật, kiểm tra kỹ thuật đầu cuối và hướng dẫn khách hàng sử dụng, theo dõi hiệu suất qua app.</li>
          </ul>

          <h2 style={{ marginTop: '40px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Thành Đạt Thiết Kế Những Loại Hệ Thống Điện Năng LƯỢNG Mặt Trời Nào?</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li><strong>Hệ thống điện mặt trời áp mái gia đình:</strong> Dành cho nhà dân có mái nhà riêng, giúp giảm tiền điện và tăng giá trị ngôi nhà.</li>
            <li><strong>Hệ thống điện mặt trời cho nhà xưởng:</strong> Công suất lớn, phù hợp với nhu cầu sản xuất liên tục, giúp giảm chi phí vận hành đáng kể.</li>
            <li><strong>Hệ thống cho trường học, bệnh viện:</strong> Đảm bảo cung cấp nguồn điện ổn định, giảm áp lực tài chính và lan tỏa ý thức sử dụng năng lượng xanh.</li>
            <li><strong>Hệ thống Off-grid/Hybrid:</strong> Phù hợp với vùng sâu vùng xa chưa có điện lưới hoặc có điện nhưng chập chờn. Có thể kết hợp lưu trữ bằng pin.</li>
            <li><strong>Hệ thống cho chung cư, tòa nhà:</strong> Thiết kế phù hợp cho các công trình cao tầng, có khả năng cung cấp điện cho khu vực chung như thang máy, chiếu sáng hành lang…</li>
          </ul>

          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi.png"
              alt="Thiết kế hệ thống điện mặt trời"
              fill
              sizes="(max-width: 992px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontStyle: 'italic', color: '#6b7280', marginTop: '-20px', marginBottom: '30px', textAlign: 'center' }}>Thiết kế hệ thống điện mặt trời tối ưu</p>

          <h2 style={{ marginTop: '40px', marginBottom: '15px', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Câu Hỏi Thường Gặp Về Thiết Kế Hệ Thống Điện Mặt Trời</h2>
          <ol style={{ paddingLeft: '20px', marginBottom: '30px', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '15px' }}><strong>Chi phí lắp đặt hệ thống điện mặt trời khoảng bao nhiêu?</strong><br />Chi phí trung bình dao động từ 15 – 25 triệu đồng/kWp, tùy thuộc vào quy mô, thiết bị và địa điểm lắp đặt. Hệ thống 5kWp phù hợp với hộ gia đình sẽ có chi phí khoảng 75 – 125 triệu đồng.</li>
            <li style={{ marginBottom: '15px' }}><strong>Hệ thống hoạt động bao lâu thì hoàn vốn?</strong><br />Thời gian hoàn vốn trung bình từ 5 – 7 năm, trong khi vòng đời hệ thống lên đến 25 – 30 năm.</li>
            <li style={{ marginBottom: '15px' }}><strong>Hệ thống có hoạt động vào ngày mưa hay ban đêm không?</strong><br />Hệ thống chỉ tạo ra điện vào ban ngày khi có ánh sáng mặt trời, tuy nhiên vẫn hoạt động trong ngày nhiều mây. Ban đêm sẽ sử dụng điện từ lưới hoặc pin lưu trữ (nếu có).</li>
            <li style={{ marginBottom: '15px' }}><strong>Có phải xin phép gì khi lắp điện mặt trời không?</strong><br />Với hệ thống dân dụng, thường không cần xin phép. Tuy nhiên nếu muốn đấu nối bán điện vào lưới, cần đăng ký với EVN.</li>
            <li style={{ marginBottom: '15px' }}><strong>Có thể giám sát hệ thống từ xa không?</strong><br />Hoàn toàn có thể. Thành Đạt trang bị ứng dụng giám sát thông minh qua điện thoại, giúp khách hàng theo dõi sản lượng điện, tình trạng hệ thống mọi lúc.</li>
          </ol>

          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-1.jpg"
              alt="Thiết kế hệ thống điện mặt trời"
              fill
              sizes="(max-width: 992px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p style={{ fontStyle: 'italic', color: '#6b7280', marginTop: '-20px', marginBottom: '30px', textAlign: 'center' }}>Thiết kế hệ thống điện mặt trời tối ưu</p>

          <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '40px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontSize: '1.5rem', textAlign: 'center' }}>Liên Hệ Với Điện Năng Lượng Mặt Trời Thành Đạt Ngay Hôm Nay!</h2>
            <p style={{ marginBottom: '10px', textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>Điện Năng Lượng Mặt Trời Thành Đạt</p>
            <p style={{ marginBottom: '5px', textAlign: 'center' }}><strong>Địa chỉ:</strong> Thôn Liễu Trì, Huyện Mê Linh, Hà Nội</p>
            <p style={{ marginBottom: '15px', textAlign: 'center' }}><strong>Hotline:</strong> <a href="tel:0962772459" style={{ color: 'var(--accent-color, red)', fontWeight: 'bold' }}>0962.772.459</a></p>
            <p style={{ marginBottom: '20px', lineHeight: '1.6', textAlign: 'justify' }}>
              Thành Đạt tự tin là đối tác tin cậy của bạn trong lĩnh vực điện năng lượng mặt trời. Với đội ngũ chuyên gia giàu kinh nghiệm, sản phẩm chất lượng cao và dịch vụ tận tâm, chúng tôi cam kết mang đến cho bạn giải pháp năng lượng sạch, hiệu quả và bền vững nhất. Hãy liên hệ với chúng tôi ngay hôm nay để bắt đầu hành trình tiết kiệm năng lượng và bảo vệ môi trường!
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="tel:0962772459" style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px 35px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Gọi Tư Vấn Miễn Phí</a>
            </div>
          </div>
        </div>

        <div className="sidebarWrapper">
          <Sidebar recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}
