import React from 'react';
import styles from './Metrics.module.css';

const metrics = [
  { value: '2', label: 'Acquiring suites', detail: 'Raast domestic and International cross-border' },
  { value: '4', label: 'Payment flows', detail: 'SQRC, DQRC, RTP Now, and RTP Later' },
  { value: 'Same-day', label: 'Settlement', detail: 'Batch settlement with a T+N deferred option' },
  { value: 'End-to-end', label: 'Merchant lifecycle', detail: 'Onboarding through reconciliation, one reference' },
];

export default function Metrics() {
  return (
    <section aria-label="Platform at a glance" className={styles.metrics}>
      <div className={styles.grid}>
        {metrics.map((metric) => (
          <div key={metric.label} className={styles.item}>
            <p className={styles.value}>{metric.value}</p>
            <p className={styles.label}>{metric.label}</p>
            <p className={styles.detail}>{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
