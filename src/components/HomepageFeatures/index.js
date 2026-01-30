import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'POS Acquiring',
    Svg: require('@site/static/img/POS-device.svg').default,
    description: (
      <>
        Our POS services enables merchants to accept payments via Mastercard, VISA, UnionPay, and PayPak. It ensures secure, seamless transactions and compliance with global standards.
      </>
    ),
  },
  {
    title: 'RAAST Acquiring',
    Svg: require('@site/static/img/RAAST.svg').default,
    description: (
      <>
        RAAST acquiring allows merchants to accept payments via QRs and RTP services. It offers secure, real-time transactions with seamless integration.
      </>
    ),
  },
  {
    title: 'RAAST + POS',
    Svg: require('@site/static/img/RAASTLogo.svg').default,
    description: (
      <>
        RAAST + POS acquiring combines QR and RTP payment options with traditional POS solutions. It offers secure, real-time transactions through both digital and card-based methods.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
