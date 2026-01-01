//src/components/hero/Hero.tsx
'use client'

import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.mainSlider}>
        <div 
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className={styles.slide}>
            <img 
              src="/hero/hero1.jpg" 
              alt="Happy couple embracing"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.slide}>
            <img 
              src="/hero/hero2.jpg" 
              alt="Smiling couple in white"
              className={styles.heroImage}
            />
          </div>
        </div>

        <button 
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.adCard}>
          <div className={styles.adHeader}>
            <span className={styles.brandName}>Ecuerin</span>
            <span className={styles.tagline}>SKIN CARE THAT SHOWS</span>
          </div>
          <h3 className={styles.adTitle}>Your New<br />Daily Routine</h3>
          <button className={styles.ctaButton}>
            BUY NOW <span className={styles.arrow}>▸</span>
          </button>
          <img 
            src="/hero/eucerin-ad.jpg" 
            alt="Woman with under-eye patches"
            className={styles.adImage}
          />
        </div>

        <div className={styles.adCard}>
          <div className={styles.vichyBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none">
              <path d="M12 2L12 12L12 22M12 12C16 10 20 8 20 4M12 12C8 10 4 8 4 4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <div className={styles.badgeText}>
              <span className={styles.badgeMain}>HYALURONIC</span>
              <span className={styles.badgeSub}>WATER GEL</span>
            </div>
          </div>
          <div className={styles.vichyBrand}>
            <span className={styles.vichyName}>VICHY</span>
            <span className={styles.vichySubtitle}>LABORATOIRES</span>
          </div>
          <img 
            src="/hero/vichy-ad.jpg" 
            alt="Woman with aloe vera leaf"
            className={styles.adImage}
          />
        </div>
      </aside>
    </section>
  );
};

export default Hero;