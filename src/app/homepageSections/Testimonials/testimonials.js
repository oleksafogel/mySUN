import styles from './testimonials.module.css';

import TestimonialsCards from "./testimonialsCards";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>
        Check out what <span className={styles.underscore}>people say</span>
      </h2>
      <div>
        <TestimonialsCards />
      </div>
    </section>
  );
}

export default Testimonials;