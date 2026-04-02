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
        Our POS acquiring solution enables merchants to accept Mastercard, VISA, UnionPay, and PayPak payments. It ensures fast, secure transactions with full compliance to global payment standards.
      </>
    ),

    link: '/docs/POS/Intro',
    linkText: 'See More',    
  },

  
  {
    title: 'RAAST P2M Acquiring',
    Svg: require('@site/static/img/RAASTLogo.svg').default,
    description: (
      <>
        RAAST P2M allows merchants to accept payments using SQRC, DQRC, and Request-to-Pay (Now & Later). It provides secure, instant transactions with easy integration.
      </>
    ),

    link: '/docs/RAAST/RAAST-P2M-Acquiring',
    linkText: 'See More',
  },
  {
    title: 'Hybrid (RAAST + POS)',
    Svg: require('@site/static/img/RAAST.svg').default,
    description: (
      <>
        Hybrid acquiring unifies RAAST payments with traditional card acceptance. Merchants can accept account-based and card-based payments through single platform.
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
