import Image from 'next/image';

import styles from './usersIntro.module.css';

import introImg from '/src/images/users-intro-img.png';

const UsersIntro = () => {
    return (
        <section className={styles.usersIntro}>
            <Image className={styles.introImg} src={introImg} quality={100} priority={true} alt="mySUN users" />
            <div className={styles.usersIntroTextCol}>
                <h1>mySUN -Bridging Sustainability<br /> & Wellness</h1>
                <div>
                    <p>In our interconnected world, corporations, institutions, and governments hold the power to drive environmental change.</p>
                    <p>Meet <em>mySUN</em>, an app merging sustainability with wellness for a greener, healthier future. Simple acts like eating organic or cycling benefit both our planet and well-being.</p>
                    <p>mySUN integrates with sectors to promote ESG standards, empowering collective efforts for a brighter tomorrow.</p>
                </div>
            </div>
        </section>
    );
}

export default UsersIntro;