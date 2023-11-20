import styles from './logo.module.css';

import Image from "next/image";

import logo from "/src/images/main-logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <Image src={logo} alt="mySUN app" />
      </a>
    </div>
  );
}

export default Logo;