import Link from 'next/link';
import Image from 'next/image';

import styles from './footer.module.css';

import Logo from "./logo";
import Socials from "./socials";

import email from '/src/images/footer-email.svg';
import phone from '/src/images/footer-phone.svg';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlocksWrapper}>
        <div className={styles.logoBlockWrapper}>
          <Logo />
        </div>
        <ul className={styles.footerMenu}>
          <li><Link href="/users">mySUN Users</Link></li>
          <li><Link href="/actions">Actions</Link></li>
          <li><Link href="/partners">Partners</Link></li>
          <li><Socials /></li>
        </ul>
        <div className={styles.footerInfo}>
          <div className={styles.contactsWrapper}>
            <div>
              Have questions? Contact us:
            </div>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <Image src={email} alt="email" />
                <a href="mailto:ZRadewych@giraffe.software">ZRadewych@giraffe.software</a>
              </div>
              <div className={`${styles.contactItem} ${styles.phone}`}>
                <Image src={phone} alt="phone" />
                <span>+ 1 416-961-4111</span>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.legal}>
              <Link href="/privacy-policy" target='_blank'>Privacy Policy</Link>
              <Link href="/cookie-policy" target="_blank">Cookie Policy</Link>
            </div>
            <div className="copyright">
              {`© ${currentYear} Giraffe Apps Inc`}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;