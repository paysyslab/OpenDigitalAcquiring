import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      
      <div className="container">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</link>
        <Heading as="h1" className="hero__title">
          
        </Heading>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Acquiring_Complete_Intro">
            Get Started
          </Link>
        </div>
      <div className='bannercontainer'>
        <div className={styles.bannertext}>
          <p className="bannertext">
          <span>OPEN DIGITAL </span>
          <span>ACQUIRING</span>   
          </p>
        </div>

        <div className={styles.bannertext2}>
          <p className="bannertext2">
          <span>Powering Banks with Smarter Payment </span>
          <span>Acceptance.</span>
          </p>
        </div>
      </div>
      <img
        src="img/banner-image.png"
        alt="Banner Image"
        className= {styles.bannerimg}
        />

      </div>
      
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
