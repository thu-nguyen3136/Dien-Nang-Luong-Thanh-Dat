'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      handleNext(); // Swiped left
    } else if (swipeDistance < -50) {
      handlePrev(); // Swiped right
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.galleryContainer}>
      <div 
        className={styles.mainImageWrapper}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 1 && (
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous image">
            &#10094;
          </button>
        )}
        
        <div className={styles.imageBox}>
          <Image 
            src={images[currentIndex]} 
            alt={`${title} - ảnh ${currentIndex + 1}`} 
            fill
            style={{ objectFit: 'contain' }}
            className={styles.mainImage} 
            priority
          />
        </div>
        
        {images.length > 1 && (
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next image">
            &#10095;
          </button>
        )}
      </div>
      
      {images.length > 1 && (
        <div className={styles.thumbnailList}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`${styles.thumbnailWrapper} ${currentIndex === idx ? styles.activeThumbnail : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className={styles.thumbBox}>
                <Image 
                  src={img} 
                  alt={`${title} ${idx + 1}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.thumbnail} 
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
