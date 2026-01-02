//src/components/Hero/Hero.tsx

'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import {
  Hospital,
  Syringe,
  Baby,
  HeartPulse,
  Users,
  Scissors,
  Stethoscope,
  MessageCircle,
  Bone,
} from 'lucide-react';

const SERVICES = [
  { icon: Hospital, title: 'Outpatient', desc: 'General consultations' },
  { icon: Syringe, title: 'Immunization', desc: 'Vaccines & protection' },
  { icon: Baby, title: 'Antenatal', desc: 'Prenatal care' },
  { icon: HeartPulse, title: 'Postnatal', desc: 'After-birth support' },
  { icon: Users, title: 'Family Planning', desc: 'Reproductive health' },
  { icon: Scissors, title: 'Minor Surgery', desc: 'Outpatient procedures' },
  { icon: Stethoscope, title: 'Gynaecology', desc: "Women's health" },
  { icon: MessageCircle, title: 'Counselling', desc: 'Mental wellness' },
  { icon: Bone, title: 'Physiotherapy', desc: 'Rehabilitation care' },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/hero/hero1.jpg',
    '/hero/hero2.jpg',
    '/hero/hero3.jpg',
    '/hero/hero4.jpg',
    '/hero/hero5.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const navigate = (direction: number) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.mainSlider}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div key={i} className={styles.slide}>
              <img
                src={src}
                alt={`Healthcare slide ${i + 1}`}
                className={styles.heroImage}
              />
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={() => navigate(-1)}
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={() => navigate(1)}
          aria-label="Next"
        >
          ›
        </button>

        <div className={styles.indicators}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${
                i === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.servicesCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Our Services</h3>
            <p className={styles.cardSubtitle}>
              Comprehensive Healthcare Solutions
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className={styles.serviceItem}>
                  <span className={styles.serviceIcon}>
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <div className={styles.serviceText}>
                    <h4 className={styles.serviceName}>{service.title}</h4>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.pharmacyCard}>
          <div className={styles.pharmacyBadge}>
            <svg
              className={styles.badgeIcon}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2v20M2 12h20M12 6l4 6-4 6-4-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.badgeText}>24/7</span>
          </div>

          <div className={styles.pharmacyContent}>
            <h3 className={styles.pharmacyTitle}>Pharmacy</h3>
            <p className={styles.pharmacyDesc}>
              Quality medications & expert guidance
            </p>
            <button className={styles.ctaButton}>
              Visit Pharmacy <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
