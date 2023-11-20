import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.vidCol}>
        <div>
          <iframe width="560" height="315" loading="lazy" src="https://www.youtube-nocookie.com/embed/fdt0sgphzRU?si=LmpX3MX-qWtUouC1" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      <div className={styles.textCol}>
          <h2>Transform your habits with mySUN app</h2>
          <p>
            Meet mySUN, the gaming app that makes reducing your environmental
            impact fun and easy!
          </p>
          <p>
            Simply answer some questions about your lifestyle, and mySUN will
            analyze your habits and provide goals to lower your Nature's
            Footprint.
          </p>
          <p>
            Compete with friends, earn points, and win awards by making
            positive changes, such as biking to work instead of driving.
          </p>
      </div>
    </section>
  );
}

export default About;