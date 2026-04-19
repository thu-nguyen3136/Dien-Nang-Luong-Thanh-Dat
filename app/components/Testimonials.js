import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Anh Chiến',
      location: 'Hải Phòng',
      avatar: '/images/kh4-280x280.png',
      feedback: 'Tôi đánh giá cao dịch vụ tư vấn và giải pháp mà Điện năng lượng mặt trời Thành Đạt mang lại. Đội ngũ kỹ thuật khảo sát kỹ lưỡng, đưa ra phương án tối ưu cho diện tích mái nhà. Nhờ vậy, hệ thống vận hành hiệu quả và tạo ra nguồn điện ổn định, phù hợp với nhu cầu thực tế.'
    },
    {
      name: 'Chị Ngọc',
      location: 'Ninh Bình',
      avatar: '/images/kh1-280x280.png',
      feedback: 'Điểm tôi hài lòng nhất là dịch vụ hậu mãi của Thành Đạt. Sau khi bàn giao, công ty vẫn thường xuyên hỗ trợ kỹ thuật, kiểm tra định kỳ để đảm bảo hệ thống vận hành an toàn. Đây là sự khác biệt lớn so với nhiều đơn vị khác trên thị trường hiện nay.'
    },
    {
      name: 'Chú Hùng',
      location: 'Bắc Ninh',
      avatar: '/images/kh5-280x280.png',
      feedback: 'Hệ thống vận hành rất êm, đội ngũ thi công lắp đặt nhanh gọn, sạch sẽ. Tôi đã giới thiệu cho nhiều bạn bè và hàng xóm cùng lắp đặt vì hiệu quả tiết kiệm điện thực sự rất rõ rệt chỉ sau vài tháng sử dụng.'
    }
  ];

  const featured = {
    name: 'Anh Mạnh',
    location: 'Hà Nội',
    avatar: '/images/kh2-280x280.png',
    title: 'Giải Pháp Tối Ưu Cho Gia Đình Việt',
    feedback: 'Sản phẩm của Thành Đạt có chất lượng rất tốt, tấm pin hoạt động ổn định ngay cả trong điều kiện thời tiết thay đổi. Sau khi lắp đặt, gia đình tôi đã tiết kiệm đáng kể chi phí tiền điện hàng tháng. Hệ thống còn thân thiện với môi trường, mang lại cảm giác an tâm khi sử dụng.'
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">KHÁCH HÀNG <span>NÓI GÌ VỀ CHÚNG TÔI?</span></h2>

        {/* Featured Review */}
        <div className={styles.featuredReview}>
          <div className={styles.featuredAvatar}>
            <Image
              src={featured.avatar}
              alt={featured.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.rating}>★★★★★</div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredText}>"{featured.feedback}"</p>
            <div className={styles.featuredUser}>
              <h4>{featured.name} <span>- {featured.location}</span></h4>
            </div>
          </div>
        </div>

        {/* Grid of Other Reviews */}
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.topInfo}>
                  <div className={styles.rating}>★★★★★</div>
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
              </div>
              <p className={styles.feedback}>"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
