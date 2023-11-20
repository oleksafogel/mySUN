import Image from 'next/image';

import styles from './partners.module.css';

import wzmh from "/src/images/partners-wzmh-logo.svg";
import sparkbird from "/src/images/partners-sparkbird-logo.svg";
import uaithub from "/src/images/partners-uaithub-logo.svg";

const Partners = ()=>  {
  return (
    <section className={styles.partners}>
      <ul className={styles.partnersList}>
        <li className={styles.partnerItem}>
          <p className={styles.trustedBy}>TRUSTED BY</p>
        </li>
        <li className={styles.partnerItem}>
          <Image src={wzmh} alt="WZMH logo" className={styles.partnerImage} />
        </li>
        <li className={styles.partnerItem}>
          <Image src={sparkbird} alt="Sparkbird logo" className={styles.partnerImage} />
        </li>
        <li className={styles.partnerItem}>
          <Image src={uaithub} alt="UA IT Hub logo" className={styles.partnerImage} />
        </li>
      </ul>
    </section>
  );
}

export default Partners;