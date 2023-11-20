'use client'

import SSRProvider from 'react-bootstrap/SSRProvider';

import styles from './page.module.css';

import Hero from "./homepageSections/Hero/hero";
import Partners from "./homepageSections/Partners/partners";
import About from "./homepageSections/About/about";
import FeaturesSummary from "./homepageSections/FeaturesSummary/featuresSummary";
import Testimonials from "./homepageSections/Testimonials/testimonials";
import KeyFeatures from "./homepageSections/KeyFeatures/keyFeatures";
import Timeline from "./homepageSections/Timeline/timeline";
import SignUp from "./homepageSections/SignUp/signup";
import FAQ from "./homepageSections/FAQ/faq";

const Homepage = () => {
  return (
    <SSRProvider>
      <main>
          <div className={styles.darkerRoundedBg}>
            <Hero />
            <Partners />
            <About />
          </div>
          <FeaturesSummary />
          <Testimonials />
          <KeyFeatures />
          <Timeline />
          <SignUp />
          <FAQ />
      </main>
    </SSRProvider>
  );
}

export default Homepage;
