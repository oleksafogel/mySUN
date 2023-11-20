import Image from "next/image";

import styles from './keyFeaturesRows.module.css';

import impactImg from "/src/images/key-features-impact-img.png";
import impactIcon from "/src/images/key-features-impact-icon.svg";
import suggestionsImg from "/src/images/key-features-suggestions-img.png";
import suggestionsIcon from "/src/images/key-features-suggestions-icon.svg";
import progressImg from "/src/images/key-features-progress-img.png";
import progressIcon from "/src/images/key-features-progress-icon.svg";
import eventsImg from "/src/images/key-features-events-img.png";
import eventsIcon from "/src/images/key-features-events-icon.svg";
import challengesImg from "/src/images/key-features-challenges-img.png";
import challengesIcon from "/src/images/key-features-challenges-icon.svg";
import rewardsImg from "/src/images/key-features-rewards-img.png";
import rewardsIcon from "/src/images/key-features-rewards-icon.svg";
import Button from "/src/universalComponents/button";

const content = [
  {
    image: impactImg,
    icon: impactIcon,
    title: 'Analyze the way you live and calculate your ecological impact',
    paragraph1: `By completing a simple questionnaire, we can compare your results to our extensive database and calculate your nature's footprint. This can help you gain a better understanding of how your daily habits impact the environment, and provide insights into how you can make more sustainable choices.`,
    paragraph2: `See how you can reduce your impact on the planet!`,
    hasButton: false
  },
  {
    image: suggestionsImg,
    icon: suggestionsIcon,
    title: 'Get personal suggestions to help you live sustainably and healthy',
    paragraph1: `mySUN app, based on your questionnaire, offers personalized suggestions to help you make eco-friendly and health-conscious choices that align with your unique lifestyle and preferences.`,
    paragraph2: `Whether it's tips on reducing waste, choosing eco-friendly products, or adopting healthier habits, we're here to support you on your journey towards a more sustainable and fulfilling life.`,
    hasButton: false
  },
  {
    image: progressImg,
    icon: progressIcon,
    title: 'Automatically track your progress and compete with your friends',
    paragraph1: `mySUN app provides a great way to track your progress towards reducing your nature's footprint, while also offering a fun and competitive element to keep you motivated. Connect with your friends and compete against each other!`,
    paragraph2: `Our app is designed to be user-friendly and intuitive, making it easy to stay on track and progress toward a healthier, happier you!`,
    hasButton: false
  },
  {
    image: eventsImg,
    icon: eventsIcon,
    title: 'Participate in eco events and make new connections',
    paragraph1: `Attending eco events is a great way to learn more about sustainability, meet new people who share your interests, and have fun while making a difference in your community.`,
    paragraph2: `It's a fantastic opportunity to create meaningful connections and develop new skills while also helping to make the world a better place. Give it a try and see how it can enrich your life and help you make a difference!`,
    hasButton: true
  },
  {
    image: challengesImg,
    icon: challengesIcon,
    title: 'Earn points by participating in sustainable challenges',
    paragraph1: `Our sustainable challenges are a great way to make a positive impact on the planet and earn points and compete against others! You can participate as an individual in a Group Challenge or as part of a Division in the Division Challenge. You choose to compete against your friends, co-workers, or even the general mySUN community.`,
    paragraph2: `You'll earn points and climb up the leaderboard by completing eco-friendly challenges and making sustainable choices. Plus, the most important - you're making a difference for the environment!`,
    hasButton: false
  },
  {
    image: rewardsImg,
    icon: rewardsIcon,
    title: 'Points with Purpose: earn financial rewards or donate to charity',
    paragraph1: `mySUN app offers a unique opportunity to earn rewards while helping our planet. By completing your goals and sustainable challenges, you'll earn points that can be redeemed for financial rewards, such as gift cards and other prizes. Alternatively, you can choose to donate your points to a charitable cause of your choice, helping to support important initiatives and make a difference in the lives of others.`,
    paragraph2: `Whether you're motivated by financial benefits or giving back to the community, our app offers something for everyone!`,
    hasButton: false
  },
]

const KeyFeaturesRows = () => {
  return (
    <div className={styles.keyFeaturesRows}>
      {content.map((contentItem, index) => (
        <div key={index} className={`${styles.featureRow} ${index % 2 ? styles.switch : ''}`}>
          <div className={styles.imgCol}>
            <Image src={contentItem.image} alt={contentItem.title} quality={100} />
          </div>
          <div className={styles.textCol}>
            <Image src={contentItem.icon} alt='' className={`${(index === 4 || index === 5) ? styles.nextReleases : styles.currentFeatures}`} />
            <h3>{contentItem.title}</h3>
            <div className={styles.text}>
              <p>{contentItem.paragraph1}</p>
              <p>{contentItem.paragraph2}</p>
            </div>
            <div className={styles.buttonBlock}>
              {contentItem.hasButton && <Button />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KeyFeaturesRows;