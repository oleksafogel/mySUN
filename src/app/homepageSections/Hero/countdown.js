'use client'

import React, { useState, useEffect} from 'react';

import styles from './countdown.module.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const releaseDate = new Date("2023-11-01").getTime();
    const now = new Date().getTime();
    const timeLeft = releaseDate - now;

    if (timeLeft <= 0) {
      return { months: 0, days: 0, hours: 0 };
    }

    const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, days, hours };
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.introCol}>
        <p className={styles.expectedReleaseLine}>Expected release date</p>
        <p className={styles.endDate}>1 November, 2023</p>
      </div>
      <div className={styles.countdownCol}>
        <div className={styles.numbersRow}>
          <div className={styles.numbersCol}>
            <div className={styles.countdownNumbers}>{countdown.months}</div>
          </div>
          <div className={styles.numbersCol}>
            <div className={styles.countdownNumbers}>{countdown.days}</div>
          </div>
          <div className={styles.numbersCol}>
            <div className={styles.countdownNumbers}>{countdown.hours}</div>
          </div>
        </div>
        <div className={styles.unitsRow}>
          <div className={styles.unitsCol}>
            <div className={styles.countdownUnits}>months</div>
          </div>
          <div className={styles.unitsCol}>
            <div className={styles.countdownUnits}>days</div>
          </div>
          <div className={styles.unitsCol}>
            <div className={styles.countdownUnits}>hours</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;