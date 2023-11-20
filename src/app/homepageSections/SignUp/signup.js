import styles from './signup.module.css';

import Image from 'next/image';

import signupImg from "../../../images/signup-img.png";

import Form from "../../../universalComponents/form";

const SignUp = () => {
  return (
    <section className={styles.signup} id='sign-up'>
      <div className={styles.imgCol}>
        <Image src={signupImg} quality={100} alt="Sign up to mySUN app waitlist" />
      </div>
      <div className={styles.textCol}>
        <h2>Get <span className={styles.underscore}>early access</span></h2>
        <p>
          Don't miss out on this exclusive opportunity to be among the first
          to experience all that our app has to offer. We promise no spam!
        </p>
        <Form />
      </div>
    </section>
  );
};

export default SignUp;