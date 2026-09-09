import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Hero.module.css';

export default function Hero() {
  const bannerUrl = useBaseUrl('/img/banner-image.png');

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p id="hero-heading" className={styles.eyebrow}>Open Digital Acquiring</p>
          <h1 className={styles.title}>
            Powering banks with smarter payment acceptance
          </h1>
          <p className={styles.subtitle}>
            One reference for Raast domestic acquiring and cross-border International
            acquiring — merchant lifecycle, terminals, transactions, and settlement,
            documented end to end.
          </p>
          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} to="#suites">
              Choose your suite
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/RAAST/RAAST-P2M-Acquiring">
              Read the docs
            </Link>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img
            src={bannerUrl}
            alt="Payment terminals, a soft POS phone, a contactless card, and a QR stand alongside Mastercard, UnionPay and Visa acceptance"
            className={styles.image}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
