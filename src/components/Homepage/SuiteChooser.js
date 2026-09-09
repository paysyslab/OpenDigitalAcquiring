import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import LocalIcon from '@site/static/img/local-icon.svg';
import InternationalIcon from '@site/static/img/international-icon.svg';
import { suites } from '@site/src/data/suites';
import styles from './SuiteChooser.module.css';

const icons = {
  local: LocalIcon,
  international: InternationalIcon,
};

export default function SuiteChooser() {
  const [selectedId, setSelectedId] = useState(suites[0].id);
  const selected = suites.find((suite) => suite.id === selectedId) ?? suites[0];

  return (
    <section id="suites" className={styles.section} aria-labelledby="suites-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Documentation</span>
          <h2 id="suites-heading" className={styles.heading}>
            Choose your acquiring suite
          </h2>
          <p className={styles.description}>
            Select the suite your merchants settle on. Both share the same merchant,
            terminal, and transaction resource model, so the reference simply scopes
            itself to your rails.
          </p>
        </div>

        <fieldset className={styles.fieldset}>
          <legend className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
            Acquiring suite
          </legend>
          <div className={styles.cards}>
            {suites.map((suite) => {
              const Icon = icons[suite.id];
              const isSelected = suite.id === selectedId;
              return (
                <label
                  key={suite.id}
                  className={isSelected ? `${styles.card} ${styles.cardSelected}` : styles.card}
                >
                  <input
                    type="radio"
                    name="suite"
                    value={suite.id}
                    checked={isSelected}
                    onChange={() => setSelectedId(suite.id)}
                    className={styles.radioInput}
                  />

                  <span className={styles.cardTop}>
                    <span className={isSelected ? `${styles.iconBadge} ${styles.iconBadgeSelected}` : styles.iconBadge}>
                      <Icon className={styles.icon} role="img" />
                    </span>
                    <span className={isSelected ? `${styles.check} ${styles.checkSelected}` : styles.check}>
                      {isSelected && '✓'}
                    </span>
                  </span>

                  <span className={styles.cardEyebrow}>{suite.eyebrow}</span>
                  <span className={styles.cardName}>{suite.name}</span>
                  <span className={styles.cardSummary}>{suite.summary}</span>

                  <span className={styles.cardMeta}>
                    <span>
                      <span className={styles.metaLabel}>Coverage</span>
                      <span className={styles.metaValue}>{suite.coverage}</span>
                    </span>
                    <span>
                      <span className={styles.metaLabel}>Settlement</span>
                      <span className={styles.metaValue}>{suite.settlement}</span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={styles.footer}>
          <p className={styles.bestFor}>
            <span className={styles.bestForLabel}>Best for:</span> {selected.bestFor}
          </p>
          <Link className={styles.cta} to={selected.path}>
            {selected.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
