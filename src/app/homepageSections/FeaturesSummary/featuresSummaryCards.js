import Image from 'next/image';

import styles from './featuresSummaryCards.module.css';

import footprintIcon from "/src/images/features-summary-footprint-icon.svg";
import healthIcon from "/src/images/features-summary-health-icon.svg";
import friendsIcon from "/src/images/features-summary-friends-icon.svg";
import communityIcon from "/src/images/features-summary-community-icon.svg";

const content = [
  {
    icon: footprintIcon,
    title: "Calculate your footprint",
    paragraph: "Measure and track your carbon footprint and discover exciting ways to reduce it!",
  },
  {
    icon: healthIcon,
    title: "Become healthier",
    paragraph: "Boost your health and help the planet thrive! Move more by ditching the car and live sustainably today.",
  },
  {
    icon: friendsIcon,
    title: "Make difference with friends",
    paragraph: "Compete and see who can make the smallest impact on nature. Get ready to have fun while reducing your environmental footprint!",
  },
  {
    icon: communityIcon,
    title: "Explore your community",
    paragraph: "Attend exciting eco-friendly events and connect with like-minded individuals who share your passion for sustainability.",
  },
];

const FeaturesSummaryCards = () => {
  return (
    <section className={styles.featuresSummaryCards}>
        <div className={styles.cardsRow}>
          {content.map((contentItem, index) => (
            <div key={index} className={styles.card}>
              <Image src={contentItem.icon} alt={contentItem.title} className={styles.icon} />
              <h3>{contentItem.title}</h3>
              <p>{contentItem.paragraph}</p>
            </div>
          ))}
        </div>
    </section>
  );
}


export default FeaturesSummaryCards;