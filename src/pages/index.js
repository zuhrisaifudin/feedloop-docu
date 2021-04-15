

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'https://static.wixstatic.com/media/550988_b7772a5a29f2424280754c8ad97fffdb~mv2.png/v1/fill/w_960,h_960,al_c,q_90,usm_0.66_1.00_0.01/Mini%20Illustration%202%20-%20Blue%201.webp',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Digital Business Operation',
    imageUrl: 'https://static.wixstatic.com/media/550988_5f736e16c48043979428b88992a0305b~mv2.png/v1/fill/w_898,h_896,al_c,q_90,usm_0.66_1.00_0.01/Mini%20Illustration%201%20-%20Blue%201.webp',
    description: (
      <>
        Feedloop can help transform business operation to be more agile, allows for faster innovation and adaptation for your Company
      </>
    ),
  },
  {
    title: 'Personalized Customer Journey',
    imageUrl: 'https://static.wixstatic.com/media/550988_37358a56f68346dfbd14f2f1086a5238~mv2.png/v1/fill/w_786,h_786,al_c,q_90,usm_0.66_1.00_0.01/Mini%20Illustration%203%20-%20Blue%201.webp',
    description: (
      <>
        Improve overall customer experience of your business to drive growth with Feedloop
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
