import Image from "next/image";

import styles from './timeline.module.css';

import ideaIcon from "/src/images/timeline-idea-icon.svg";
import researchIcon from "/src/images/timeline-research-icon.svg";
import desdevIcon from "/src/images/timeline-des&dev-icon.svg";
import waitlistIcon from "/src/images/timeline-waitlist-icon.svg";
import releaseIcon from "/src/images/timeline-release-icon.svg";

const content = [
  {
    icon: ideaIcon,
    title: 'Idea',
    date: 'May 2020',
    paragraph: `After brainstorming ways to make a positive difference, we came up with the idea for MySun, an app aimed at popularizing green lifestyles and nature protection.`
  },
  {
    icon: researchIcon,
    title: 'Research',
    date: 'June 2022',
    paragraph: `Zenon's idea for an easy-to-use eco app sparked deep research, including exploring concerns, features, and attracting ecologists for more trust.`
  },
  {
    icon: desdevIcon,
    title: 'Design & Development',
    date: 'December 2022',
    paragraph: `The iterative process began with the creation of a Feature Breakdown List (FBL) and UX wireframes, followed by the UI design.`
  },
  {
    icon: waitlistIcon,
    title: 'Waitlist Registration',
    date: 'October 2023',
    paragraph: `Be among the first to try mySUN app - join our waitlist now and be notified when it launches!`
  },
  {
    icon: releaseIcon,
    title: 'mySUN App Release',
    date: 'November 2023',
    paragraph: `We are so happy that the MVP release of mySUN app is scheduled so soon, and we can't wait to embark on our sustainable journey!`
  },
]

const Timeline = () => {
  return (
    <section className={styles.timeline}>
      <div className={styles.timelineIntro}>
        <h2>Timelines</h2>
        <div>
          <p className={styles.timelineIntroDescription}>
            We began working on the MySun app in June,{" "}
            <em>
              collaborating with the ecologist we created the app's logic, UX
              wireframes, and UI design
            </em>
            . The waitlist for early access will open in April, with the MVP
            release planned for May 2023!
          </p>
        </div>
      </div>
      <div className={styles.timelineContainerDesktop}>
        <div className={styles.timelineItemsDesktop}>
          {content.map((contentItem, index) => (
            <div key={index} className={styles.itemWrapperDesktop}>
              <div className={styles.itemStageDesktop}>
                <Image src={contentItem.icon} alt={`${contentItem.title} stage`} />
                <div className={`${index % 2 ? styles.bottomBar : styles.topBar}`}></div>
                <div className={`${index % 2 ? styles.bottomBarDot : styles.topBarDot}`}></div>
                <div className={`${index % 2 ? styles.contentDesktopBottom : styles.contentDesktopTop}`}>
                  <div className={styles.date}>{contentItem.date}</div>
                  <h3>{contentItem.title}</h3>
                  <p className={styles.content}>{contentItem.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.timelineContainerTabMob}>
        <div className={styles.timelineItemsTabMob}>
          {content.map((contentItem, index) => (
            <div key={index} className={styles.itemStageTabMob}>
              <div className={styles.iconTabMob}>
                <Image src={contentItem.icon} alt={`${contentItem.title} stage`} />
              </div>
              <div className={`${index % 2 === 1 ? `${styles.right}` : ''} ${styles.contentTabMob}`}>
                <div className={styles.date}>{contentItem.date}</div>
                <h3>{contentItem.title}</h3>
                <p className={styles.content}>{contentItem.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;