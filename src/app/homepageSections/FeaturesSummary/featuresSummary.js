import Image from 'next/image';

import styles from './featuresSummary.module.css';

import FeaturesSummaryCards from "./featuresSummaryCards";
import Button from "../../../universalComponents/button";

import featuresSumBg from "../../../images/features-summary-bg.svg";

const FeaturesSummary = () => {
  return (
    <section className={styles.featuresSummary}>
      <div className={styles.textCol}>
        <div>
          <h2 className={styles.featuresSumTitle}>We support your green path</h2>
          <p className={styles.featuresSummaryDescription}>
            Eco-conscious choices, made fun and simple with mySUN app.
          </p>
          <Button />
        </div>
        <Image alt='' src={featuresSumBg} className={styles.featuresSumBg}/>
      </div>
      <div className={styles.cardCol}>
        <FeaturesSummaryCards />
      </div>
    </section>
  );
}

export default FeaturesSummary;