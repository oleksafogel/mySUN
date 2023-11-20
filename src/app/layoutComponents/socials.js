import Image from 'next/image';

import styles from './socials.module.css';

import instaIcon from "/src/images/socials-insta-icon.svg";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="https://www.instagram.com/mysun_officialpage/"><Image src={instaIcon} alt="mySUN Instagram profile" /></a>
    </div>
  );
}

export default Socials;