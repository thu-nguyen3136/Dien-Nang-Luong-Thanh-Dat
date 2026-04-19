import styles from './gioi-thieu.module.css';

export const metadata = {
  title: 'Giới Thiệu | Thành Đạt Solar',
  description: 'Tìm hiểu về Thành Đạt Solar - Đơn vị hàng đầu cung cấp giải pháp năng lượng mặt trời tại Hà Nội và khu vực phía Bắc.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>GIỚI THIỆU VỀ THÀNH ĐẠT SOLAR</h1>
          <p>Uy tín - Chất lượng - Bền vững</p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2>TỔNG QUAN VỀ CHÚNG TÔI</h2>
              <p>
                Thành Đạt Solar là đơn vị tiên phong trong lĩnh vực cung cấp và lắp đặt hệ thống điện năng lượng mặt trời tại Việt Nam. 
                Với sứ mệnh mang nguồn năng lượng sạch, tiết kiệm đến cho mọi gia đình và doanh nghiệp, chúng tôi không ngừng nỗ lực 
                cập nhật các công nghệ tiên tiến nhất từ những thương hiệu hàng đầu thế giới như Jinko, Longi, Deye, Luxpower.
              </p>
              
              <h3>TẦM NHÌN & SỨ MỆNH</h3>
              <p>
                Trở thành biểu tượng niềm tin hàng đầu Việt Nam về sản phẩm và dịch vụ năng lượng tái tạo phục vụ cuộc sống con người. 
                Chúng tôi cam kết mang lại giá trị gia tăng lớn nhất cho khách hàng thông qua việc cung cấp các hệ thống tối ưu về hiệu suất và giá thành.
              </p>

              <h3>GIÁ TRỊ CỐT LÕI</h3>
              <ul>
                <li><strong>Chất lượng:</strong> Chỉ cung cấp sản phẩm chính hãng, độ bền cao.</li>
                <li><strong>Tận tâm:</strong> Luôn đặt lợi ích của khách hàng lên hàng đầu.</li>
                <li><strong>Sáng tạo:</strong> Không ngừng cải tiến giải pháp kỹ thuật.</li>
                <li><strong>Trách nhiệm:</strong> Đồng hành trọn đời cùng hệ thống của khách hàng.</li>
              </ul>
            </div>
            
            <div className={styles.imageContent}>
              <div className={styles.imagePlaceholder}>
                {/* Image of solar installation or team */}
                <div className={styles.overlay}>HÀNH TRÌNH PHÁT TRIỂN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.commitments}>
        <div className="container">
          <h2 className="section-title">CAM KẾT CỦA THÀNH ĐẠT SOLAR</h2>
          <div className={styles.commitGrid}>
            <div className={styles.commitCard}>
              <div className={styles.icon}>✅</div>
              <h4>Sản phẩm chính hãng</h4>
              <p>Đầy đủ chứng chỉ CO, CQ từ nhà sản xuất.</p>
            </div>
            <div className={styles.commitCard}>
              <div className={styles.icon}>⏱️</div>
              <h4>Thi công đúng tiến độ</h4>
              <p>Quy trình chuyên nghiệp, nhanh chóng và an toàn.</p>
            </div>
            <div className={styles.commitCard}>
              <div className={styles.icon}>💰</div>
              <h4>Giá thành cạnh tranh</h4>
              <p>Giải pháp tối ưu nhất cho ngân sách của bạn.</p>
            </div>
            <div className={styles.commitCard}>
              <div className={styles.icon}>🔄</div>
              <h4>Bảo hành lâu dài</h4>
              <p>Hỗ trợ kỹ thuật và bảo trì trọn đời.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
