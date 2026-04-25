'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Features.module.css';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const endValue = parseInt(end);
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * endValue), endValue);
      
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

export default function Features() {
  const features = [
    {
      title: 'Kinh nghiệm và chuyên môn',
      desc: 'Với đội ngũ chuyên gia, kỹ thuật viên giàu kinh nghiệm, chúng tôi tự tin mang đến cho khách hàng những giải pháp tối ưu và hiệu quả nhất.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 54C12 42.9543 20.9543 34 32 34C43.0457 34 52 42.9543 52 54" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 6L23.5 10H27.5L24.5 12.5L25.5 16.5L22 14L18.5 16.5L19.5 12.5L16.5 10H20.5L22 6Z" fill="currentColor"/>
          <path d="M42 6L43.5 10H47.5L44.5 12.5L45.5 16.5L42 14L38.5 16.5L39.5 12.5L36.5 10H40.5L42 6Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Dịch vụ chuyên nghiệp',
      desc: 'Chúng tôi cam kết cung cấp dịch vụ tư vấn, thiết kế, thi công và bảo trì chuyên nghiệp, tận tâm, đáp ứng mọi nhu cầu của khách hàng.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L12 16V32C12 44 32 56 32 56C32 56 52 44 52 32V16L32 8Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 32L28 38L42 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="8" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Công nghệ tiên tiến',
      desc: 'Chúng tôi luôn cập nhật và áp dụng những công nghệ tiên tiến nhất trong lĩnh vực năng lượng, đảm bảo chất lượng và hiệu suất của các công trình.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 18V46M18 32H46M32 4L38 12M32 4L26 12M32 60L38 52M32 60L26 52M4 32L12 38M4 32L12 26M60 32L52 38M60 32L52 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M48 48C48 48 44 52 32 52C20 52 16 48 16 48M48 16C48 16 44 12 32 12C20 12 16 16 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: 'Uy tín và chất lượng',
      desc: 'Điện Năng Lượng Mặt Trời Thành Đạt luôn đặt uy tín và chất lượng lên hàng đầu, cam kết mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4L38 18H54L42 28L46 44L32 34L18 44L22 28L10 18H26L32 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M32 12V24M32 34V44M22 26L18 24M42 26L46 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const stats = [
    { label: 'Năm kinh nghiệm', value: '10', suffix: '+' },
    { label: 'Dự án thực hiện', value: '500', suffix: '+' },
    { label: 'MWp Công suất', value: '25', suffix: '+' },
    { label: 'Khách hàng hài lòng', value: '100', suffix: '%' },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((item) => (
            <div key={item.title} className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
