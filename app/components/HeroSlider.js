'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: '/images/banner-1.jpg', alt: 'Thành Đạt Solar Banner 1' },
    { image: '/images/banner-2.jpg', alt: 'Thành Đạt Solar Banner 2' },
    { image: '/images/banner-3.png', alt: 'Thành Đạt Solar Banner 3' },
    { image: '/images/banner-4.png', alt: 'Thành Đạt Solar Banner 4' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Chuyển slide mỗi 5 giây
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.heroSlider}>
      <div className={styles.sliderContainer}>
        {slides.map((slide) => (
          <div 
            key={slide.image} 
            className={`${styles.slide} ${slides.indexOf(slide) === currentSlide ? styles.active : ''}`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              className={styles.img}
              priority={slides.indexOf(slide) === 0}
            />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <span 
            key={slide.image} 
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
