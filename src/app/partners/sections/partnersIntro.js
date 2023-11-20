import Image from 'next/image';

import styles from './partnersIntro.module.css';

import introImg from '/src/images/partners-page-intro-img.svg';

const PartnersIntro = () => {
    return(
        <section className={styles.partnersIntro}>
            <div className={styles.partnersTextCol}>
                <h1>mySUN Partners</h1>
                <p>Introducing the visionary team behind <em>mySUN</em> —<br /> a remarkable collaboration that originated with <em>WZMH Architects</em> and their innovative <em>Sparkbird Lab</em>. In partnership with the IT tech firm <em>Gart Technology</em>, this groundbreaking app has now transitioned into the commercial marketplace, championed by <em>Giraffe</em>. Our team comprises a diverse array of experts, ranging from software development maestros to seasoned professionals with a deep understanding of the intricacies of live-work-play environments.  Together, we have harnessed our collective expertise to bring you mySUN.</p>
            </div>
            <div className={styles.partnersImgCol}>
                <Image src={introImg} quality={100} priority={true} alt="mySUN partners" />
            </div>
        </section>
    )
}

export default PartnersIntro;