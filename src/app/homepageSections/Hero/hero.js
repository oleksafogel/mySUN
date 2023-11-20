import Image from 'next/image';

import styles from './hero.module.css';

import Countdown from "./countdown";
import Button from "/src/universalComponents/button";

import HeroImg from "/src/images/hero-img.png";
import h1Img from "/src/images/hero-h1-img.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTextCol}>
        <div className={styles.textWrapper}>
          <h1>
            <span>
              Track. Reduce.
              Complete.
              <br />
            </span>
            <span className={styles.iconLine}>
              <Image src={h1Img} alt="Get rewards!" />
              Get Rewards.
            </span>
          </h1>
          <p className={styles.heroDescription}>
            Download <em>mySUN app</em> and reduce your ecological footprint
            while having fun and becoming healthier. Earn prizes and awards
            for making a positive impact on the planet!
          </p>
          <div className={styles.buttonBlock}>
            <Button />
          </div>
        </div>
        <div className={styles.countdownBlock}>
          <Countdown />
        </div>
      </div>
      <div className={styles.heroImgCol}>
            <Image className={styles.heroImg} width={707} height={528} unoptimized={true} quality={100} priority={true} src={HeroImg} alt="mySun app demo" />
      </div>
    </section>
  );
}

export default Hero;