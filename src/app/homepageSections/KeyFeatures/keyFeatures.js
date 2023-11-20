import styles from './keyFeatures.module.css';

import KeyFeaturesRows from "./keyFeaturesRows";

const KeyFeatures = () => {
  return (
    <section className={styles.keyFeatures}>
      <h2>mySUN App Key Features</h2>
      <KeyFeaturesRows />
    </section>
  );
}

export default KeyFeatures;