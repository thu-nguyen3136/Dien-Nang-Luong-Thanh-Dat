import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/components/Sidebar';
import { getData } from '@/lib/db';

export const metadata = {
  title: 'Lắp Đặt Hệ Thống Điện Năng Lượng Mặt Trời | Thành Đạt Solar',
  description: 'Thành Đạt Solar cung cấp dịch vụ lắp điện năng lượng mặt trời tại Hà Nội và các tỉnh thành Miền Bắc, giúp tiết kiệm chi phí điện năng, nâng cao hiệu suất sử dụng và bảo vệ môi trường.',
};

export default function LapDatHeThongPage() {
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
          src="/images/lap-he-thong-dien-nang-luong-mat-troi.jpg"
          alt="Lắp đặt hệ thống điện mặt trời"
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>LẮP ĐẶT HỆ THỐNG ĐIỆN NĂNG LƯỢNG MẶT TRỜI</h1>
        </div>
      </section>

      <style>{`
        .serviceLayout { display: grid; grid-template-columns: 1fr 300px; gap: 40px; }
        .serviceContent { background-color: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .blueTitle { color: var(--primary-color); font-weight: bold; margin-bottom: 20px; }
        .section-margin { margin-top: 40px; }
        .imageBox { position: relative; width: 100%; height: 400px; margin: 30px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        @media (max-width: 992px) { 
          .serviceLayout { grid-template-columns: 1fr; }
          .serviceContent { padding: 20px; }
          .imageBox { height: 250px; }
        }
      `}</style>

      <div className="container serviceLayout" style={{ marginTop: '40px' }}>
        <div className="serviceContent">
          <p style={{ marginBottom: '20px', lineHeight: '1.8', textAlign: 'justify', fontSize: '1.1rem' }}>
            Thành Đạt Solar cung cấp dịch vụ lắp điện năng lượng mặt trời tại Hà Nội và các tỉnh thành Miền Bắc, giúp tiết kiệm chi phí điện năng, nâng cao hiệu suất sử dụng và bảo vệ môi trường. Giải pháp phù hợp cho hộ gia đình, doanh nghiệp và công trình công nghiệp.
          </p>

          <h2 className="blueTitle" style={{ fontSize: '1.8rem' }}>Giải Pháp Điện Năng Lượng Mặt Trời Cho Gia Đình & Doanh Nghiệp</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.8', textAlign: 'justify' }}>
            Bạn cần một giải pháp tiết kiệm điện hiệu quả, bền vững và thân thiện với môi trường? Bạn muốn giảm hóa đơn tiền điện mỗi tháng mà vẫn đảm bảo nguồn điện ổn định cho gia đình, doanh nghiệp hay nhà xưởng?
          </p>
          <div className="imageBox">
            <Image
              src="/images/dich-vu-lap-dat-he-thong-dien-mt.png"
              alt="Lắp đặt hệ thống điện mặt trời"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h2 className="blueTitle" style={{ fontSize: '1.8rem' }}>Dự Toán Chi Phí Lắp Điện Năng Lượng Mặt Trời Cho Hộ Gia Đình Và Công Trình:</h2>

          <h3 className="blueTitle" style={{ fontSize: '1.5rem' }}>1. Bảng chi phí lắp Hệ thống điện mặt trời hòa lưới bán tải (On-grid)</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            Hệ thống này áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban ngày. Hệ thống giúp giảm chi phí tiền điện. Lưu ý không thể dùng được khi mất điện lưới.
          </p>
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
          <h4 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Nên lắp đặt hệ thống điện mặt trời 3Kw hay 5Kw cho gia đình?</h4>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Hệ thống điện mặt trời có công suất 3kW thường phù hợp với các gia đình có nhu cầu sử dụng điện trung bình, có hoá đơn tiền điện hàng tháng trong ngưỡng 1 triệu. Đây có thể là lựa chọn lý tưởng cho các gia đình có diện tích mái nhà hạn chế hoặc muốn bắt đầu với một dự án nhỏ để tiết kiệm điện và giảm thiểu ảnh hưởng đến môi trường.
          </p>
          <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
            Hệ thống điện mặt trời 5kW thường phù hợp với các gia đình có nhu cầu sử dụng điện cao hơn hoặc muốn tối ưu hóa tiềm năng tiết kiệm năng lượng. Hệ thống này có thể đáp ứng nhu cầu điện của các gia đình lớn hơn hoặc có mức tiêu thụ điện cao hơn, cung cấp đủ năng lượng không chỉ cho các thiết bị gia đình mà còn cho các thiết bị tiện ích khác như hồ bơi, máy lạnh, hoặc các thiết bị công nghệ.
          </p>
          <p style={{ marginBottom: '20px', lineHeight: '1.8', fontStyle: 'italic' }}>
            Nếu không chắc chắn, việc tham khảo ý kiến của các chuyên gia trong lĩnh vực điện năng lượng mặt trời và yêu cầu báo giá từ các nhà cung cấp sẽ giúp gia đình đưa ra quyết định đúng đắn nhất. Hãy liên hệ ngay hotline Thành Đạt Solar: <a href="tel:0368444567" style={{ color: 'red', fontWeight: 'bold' }}>0368.444.567</a>
          </p>

          <h3 className="blueTitle" style={{ fontSize: '1.5rem', marginTop: '40px' }}>2. Bảng chi phí lắp Hệ thống điện năng lượng mặt trời có lưu trữ (Hybrid)</h3>

          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            Hệ thống này áp dụng cho các khách hàng có nhu cầu dùng điện chủ yếu vào ban đêm, mang lại sự tiện nghi vì có thể dùng được khi mất điện lưới.
          </p>
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
          <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>Chú ý:</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Lắp 1 KWP với chi phí chỉ 10-15 triệu khi lắp đặt trọn gói bởi Thành Đạt Solar</li>
              <li>1 KWP sẽ tạo ra 4-5 ký điện (kWh) trong 1 ngày tùy vào từng vùng miền cụ thể.</li>
              <li>Diện tích lắp 1 kWp khoảng 6-8 mét vuông phụ thuộc vào công suất tấm pin</li>
              <li>Dễ dàng lắp đặt, có thể tự lắp đặt nếu có kinh nghiệm</li>
              <li>Thiết bị được test kỹ lưỡng, vận hành ổn định, đạt hiệu suất cao</li>
              <li>Tiết kiệm nhiều chi phí</li>
              <li>Phù hợp cho nhiều nhu cầu khác nhau</li>
              <li>Thiết bị đến từ các thương hiệu nổi tiếng như Growatt, Solis, Deye, Longi, Trina, Jinko, JA,…</li>
              <li>Được bảo hành trọn gói, hỗ trợ kỹ thuật nhanh chóng</li>
            </ul>
          </div>

          <h3 className="blueTitle">Hộ gia đình có hóa đơn điện cao mỗi tháng</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Nếu gia đình bạn thường xuyên có hóa đơn tiền điện từ 1 triệu đồng trở lên, việc lắp đặt hệ thống điện mặt trời sẽ giúp tiết kiệm đáng kể chi phí hàng tháng. Đồng thời, đây cũng là bước đầu để gia đình tiếp cận với nguồn năng lượng xanh, sạch và bền vững.</p>
          <div className="imageBox">
            <Image
              src="/images/thiet-ke-he-thong-dien-nang-luong-mat-troi.png"
              alt="Lắp đặt hệ thống điện mặt trời"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="blueTitle">Nhà xưởng, cơ sở sản xuất hoạt động liên tục</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Các cơ sở sản xuất tiêu thụ điện lớn và hoạt động nhiều vào ban ngày là đối tượng cực kỳ phù hợp. Việc tận dụng nguồn năng lượng mặt trời không chỉ giúp giảm chi phí vận hành mà còn nâng cao hình ảnh doanh nghiệp trong việc sử dụng năng lượng tái tạo.</p>

          <h3 className="blueTitle">Tòa nhà văn phòng, khách sạn, trung tâm thương mại</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Các công trình thương mại có diện tích mái rộng và nhu cầu sử dụng điện liên tục trong giờ hành chính sẽ tận dụng rất tốt nguồn điện từ mặt trời. Ngoài ra, việc lắp điện mặt trời còn giúp nâng cao giá trị bất động sản và tạo điểm nhấn "thân thiện môi trường".</p>

          <h3 className="blueTitle">Trang trại nông nghiệp, chăn nuôi ở vùng xa</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Ở các khu vực điện lưới yếu hoặc không ổn định, hệ thống điện mặt trời kết hợp pin lưu trữ (battery) sẽ giúp đảm bảo nguồn điện liên tục cho các thiết bị tưới tiêu, quạt làm mát, camera, đèn chiếu sáng,... mà không phụ thuộc vào điện lưới.</p>

          <h3 className="blueTitle">Công trình có mái nhà, mái tôn tiếp xúc nắng tốt</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Bất kỳ công trình nào có mái hướng nắng, thông thoáng, không bị che khuất đều có thể tận dụng để lắp hệ thống điện mặt trời. Đây là một cách đầu tư “biến mái nhà thành tài sản sinh lợi lâu dài”.</p>

          <h3 className="blueTitle">Doanh nghiệp muốn giảm chi phí và nâng cao thương hiệu xanh</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Không chỉ giúp giảm chi phí điện, việc sử dụng năng lượng mặt trời còn thể hiện trách nhiệm xã hội và cam kết phát triển bền vững của doanh nghiệp – điều ngày càng được đánh giá cao trong mắt đối tác, khách hàng và cộng đồng.</p>

          <p style={{ background: '#fffbeb', padding: '15px', borderRadius: '5px', color: '#b45309', fontWeight: 'bold', textAlign: 'center', margin: '30px 0' }}>
            Bạn thuộc một trong những trường hợp trên? Đừng bỏ lỡ cơ hội đầu tư thông minh – tiết kiệm chi phí, nâng cao giá trị công trình và góp phần bảo vệ môi trường cùng Thành Đạt!
          </p>

          <h3 className="blueTitle">Giảm áp lực hóa đơn điện mỗi tháng</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Không còn lo lắng mỗi lần đến kỳ thanh toán tiền điện. Hệ thống điện mặt trời sẽ tự sản sinh nguồn điện miễn phí từ ánh nắng, giúp giảm đến 50–90% chi phí điện – đặc biệt hiệu quả với các hộ tiêu thụ điện cao như nhà xưởng, văn phòng, khách sạn, trường học…</p>

          <h3 className="blueTitle">Hiệu quả đầu tư bền vững</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Chỉ cần đầu tư một lần, bạn có thể khai thác lợi ích trong suốt 25–30 năm. Thời gian hoàn vốn nhanh (khoảng 4–6 năm) và sau đó là nguồn lợi nhuận thuần túy từ việc tiết kiệm chi phí điện mỗi tháng.</p>

          <h3 className="blueTitle">Góp phần bảo vệ hành tinh xanh</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Điện mặt trời là năng lượng tái tạo, sạch và không gây phát thải. Việc sử dụng hệ thống này đồng nghĩa với việc bạn đang góp phần giảm ô nhiễm khí hậu và bảo vệ môi trường sống cho thế hệ mai sau.</p>

          <h3 className="blueTitle">Tự chủ nguồn điện – sẵn sàng mọi tình huống</h3>
          <p style={{ marginBottom: '40px', lineHeight: '1.8' }}>Không còn phụ thuộc hoàn toàn vào điện lưới. Bạn có thể tích hợp thêm hệ thống lưu trữ điện (battery) để sử dụng vào ban đêm hoặc khi mất điện, đảm bảo dòng điện luôn ổn định cho sinh hoạt và sản xuất.</p>
          <div className="imageBox">
            <Image
              src="/images/aa.png"
              alt="Lắp đặt hệ thống điện mặt trời"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h2 className="blueTitle" style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px' }}>Quy Trình Làm Việc Tại Thành Đạt Solar</h2>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Để đảm bảo mỗi công trình đạt hiệu quả tối ưu cả về kỹ thuật lẫn kinh tế, Thành Đạt xây dựng quy trình làm việc bài bản, rõ ràng và minh bạch từ khâu khảo sát đến hậu mãi sau thi công. Dưới đây là các bước cụ thể:</p>

          {[
            { step: 1, title: 'Khảo sát thực tế & tư vấn giải pháp tối ưu', content: 'Chúng tôi tiến hành khảo sát trực tiếp tại địa điểm lắp đặt để đánh giá điều kiện tự nhiên như hướng nắng, diện tích mái, kết cấu công trình,… Từ đó tư vấn phương án lắp đặt phù hợp nhất với nhu cầu sử dụng điện, công suất kỳ vọng và khả năng đầu tư của khách hàng.' },
            { step: 2, title: 'Thiết kế hệ thống theo yêu cầu và hiện trạng', content: 'Dựa trên dữ liệu khảo sát, đội ngũ kỹ sư của Thành Đạt sẽ thiết kế bản vẽ kỹ thuật chi tiết, lựa chọn loại tấm pin, inverter và các thiết bị phụ kiện phù hợp, đảm bảo hiệu suất khai thác điện tối ưu – đồng thời đảm bảo yếu tố thẩm mỹ và độ bền công trình.' },
            { step: 3, title: 'Báo giá minh bạch, rõ ràng theo từng hạng mục', content: 'Chúng tôi gửi báo giá cụ thể, phân tách từng hạng mục thiết bị, vật tư, nhân công và chi phí phát sinh (nếu có). Mọi khoản chi phí đều được giải thích rõ ràng, không phát sinh bất ngờ trong quá trình thi công. Khách hàng hoàn toàn chủ động kiểm soát ngân sách đầu tư.' },
            { step: 4, title: 'Thi công đúng tiến độ, an toàn và chuyên nghiệp', content: 'Sau khi ký hợp đồng, Thành Đạt tiến hành triển khai thi công đúng tiến độ cam kết. Đội ngũ kỹ thuật viên tay nghề cao, tuân thủ các quy chuẩn an toàn điện và xây dựng. Quá trình thi công được giám sát chặt chẽ nhằm đảm bảo chất lượng và tiến độ từng công đoạn.' },
            { step: 5, title: 'Kiểm tra – vận hành – hướng dẫn sử dụng', content: 'Sau khi hoàn tất lắp đặt, hệ thống sẽ được kiểm tra kỹ lưỡng, chạy thử để đảm bảo hoạt động ổn định và an toàn. Chúng tôi sẽ hướng dẫn khách hàng cách vận hành, theo dõi sản lượng điện, bảo trì cơ bản và xử lý các tình huống thường gặp.' },
            { step: 6, title: 'Bảo trì định kỳ & hỗ trợ kỹ thuật 24/7', content: 'Thành Đạt cam kết đồng hành cùng khách hàng trong suốt quá trình sử dụng hệ thống. Dịch vụ hậu mãi bao gồm bảo trì định kỳ, kiểm tra hiệu suất và hỗ trợ kỹ thuật từ xa hoặc tại chỗ 24/7. Đảm bảo hệ thống luôn hoạt động với hiệu suất cao nhất trong suốt vòng đời.' }
          ].map((item) => (
            <div key={item.step} style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '5px solid var(--primary-color)' }}>
              <h4 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>Bước {item.step}: {item.title}</h4>
              <p style={{ lineHeight: '1.6', color: '#4b5563' }}>{item.content}</p>
            </div>
          ))}

          <div className="imageBox">
            <Image
              src="/images/lap-dat-nang-luong-mat-troi-giai.png"
              alt="Lắp đặt hệ thống điện mặt trời"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ background: '#eef2ff', padding: '30px', borderRadius: '12px', marginTop: '40px', border: '1px solid #c7d2fe' }}>
            <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>Với nhiều năm kinh nghiệm trong lĩnh vực năng lượng tái tạo, Điện Năng Lượng Mặt Trời Thành Đạt là đơn vị chuyên tư vấn, thiết kế và thi công hệ thống điện mặt trời cho hộ gia đình, doanh nghiệp, nhà xưởng và trang trại trên toàn quốc.</p>
            <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>Chúng tôi cung cấp dịch vụ trọn gói gồm: khảo sát, tư vấn, thiết kế hệ thống, thi công, đấu nối với EVN, bảo trì và hỗ trợ kỹ thuật dài hạn. Mỗi công trình được đảm bảo về hiệu suất, độ bền và tính thẩm mỹ.</p>
            <p style={{ marginBottom: '20px', lineHeight: '1.8', fontWeight: 'bold', color: 'var(--primary-color)', textAlign: 'center' }}>Thành Đạt – Không chỉ là đơn vị thi công, mà còn là người bạn đồng hành cùng khách hàng trên hành trình chuyển đổi sang nguồn năng lượng sạch và tiết kiệm.</p>
            <div style={{ textAlign: 'center' }}>
              <a href="tel:0368444567" style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)', color: 'white', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>Liên Hệ Tư Vấn: 0368.444.567</a>
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
