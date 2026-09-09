import React from 'react';
import Link from '@docusaurus/Link';
import { capabilities } from '@site/src/data/capabilities';
import styles from './Capabilities.module.css';

export default function Capabilities() {
  const [featured, ...rest] = capabilities;

  return (
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.inner}>
        <div>
          <h2 id="capabilities-heading" className={styles.heading}>
            What the platform handles for you
          </h2>

          <Link to={featured.link} className={styles.featured}>
            <p className={styles.featuredMeta}>{featured.meta}</p>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredDescription}>{featured.description}</p>
          </Link>
        </div>

        <ul className={styles.list}>
          {rest.map((capability) => (
            <li key={capability.title} className={styles.listItem}>
              <Link to={capability.link} className={styles.listLink}>
                <div className={styles.listTop}>
                  <h3 className={styles.listTitle}>{capability.title}</h3>
                  <span className={styles.listMeta}>{capability.meta}</span>
                </div>
                <p className={styles.listDescription}>{capability.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
