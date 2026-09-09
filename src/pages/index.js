import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Homepage/Hero';
import Metrics from '@site/src/components/Homepage/Metrics';
import SuiteChooser from '@site/src/components/Homepage/SuiteChooser';
import Capabilities from '@site/src/components/Homepage/Capabilities';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Reference documentation for Raast domestic acquiring and cross-border International acquiring.">
      <Hero />
      <Metrics />
      <SuiteChooser />
      <Capabilities />
    </Layout>
  );
}
