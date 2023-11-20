import Image from 'next/image';

import styles from './faq.module.css';

import img from '/src/images/faq-img.svg';

import Questions from "./questions";

const FAQ = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.faqContent}>
        <h2 className={styles.faqTitle}>Common Questions</h2>
        <Questions />
        <div></div>
      </div>
      <Image src={img} alt="FAQ" className={styles.faqImg} />
    </section>
  );
}

export default FAQ;