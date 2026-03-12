import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'POS Acquiring',
    Svg: require('@site/static/img/POS-device.svg').default,
    description: (
      <>
        Our POS services enables merchants to accept payments via Mastercard, VISA, UnionPay, and PayPak. It ensures secure, seamless transactions and compliance with global standards.
      </>
    ),

    link: '/docs/POS/Intro',
    linkText: 'See More',    
  },

  
  {
    title: 'RAAST Acquiring',
    Svg: require('@site/static/img/RAAST.svg').default,
    description: (
      <>
        RAAST acquiring allows merchants to accept payments via SQRC, DQRC and Requst To Pay now & later services. It offers secure, real-time transactions with seamless integration.
      </>
    ),

    link: '/docs/RAAST/RAAST-P2M-Acquiring',
    linkText: 'See More',
  },
  {
    title: 'Hybrid (RAAST + POS)',
    Svg: require('@site/static/img/RAASTLogo.svg').default,
    description: (
      <>
        RAAST + POS acquiring combines QR and RTP payment options with traditional POS solutions. It offers secure, real-time transactions through both digital and card-based methods.
      </>
    ),
    link: '/docs/RAAST/Introduction-to-RAAST',
    linkText: 'See More',
  },
];

function Feature({ Svg, title, description, link, linkText }) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <Svg className="featureSvg" role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>

        <Link
          className="button button--primary button--md"
          to={link}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
