import Image from 'next/image';

import styles from './modal.module.css';
import '/src/universalComponents/button.css';

const Modal = (props) => {
    const { show, onClose, modalContent } = props;

    const backgroundPositions = {
      "WZMH Architects": 'top 40px right 45px',
      "Sparkbird": 'top 400px right 30px',
      "Giraffe": 'top 80px right 40px',
      "Gart Technology": 'top 30px right 30px'
    }

    const modalStyle = {
      backgroundColor: modalContent.linkText === "Sparkbird" || modalContent.linkText === "Gart Technology" ? '#FFFFFF' : '#EBEBEB',
      border: modalContent.linkText === "Sparkbird" || modalContent.linkText === "Gart Technology" ? '1px solid black' : 'none',
      backgroundImage: modalContent.background,
      backgroundPosition: backgroundPositions[modalContent.linkText]
    }

    let switchContent;
    let mobileClassname;

    if (!show) {
        return null;
    }

    switch (modalContent.linkText) {
        case 'WZMH Architects':
            switchContent = (
                <p>WZMH Architects, headquartered in Toronto, has proudly delivered design excellence for over six decades. Our unwavering commitment to sustainability fuels our continuous evolution and innovation. We embrace fresh thinking and foster creativity, which infuse our work with contemporary relevance and profound meaning.<br /><br />Our mission is to craft timeless spaces that optimize their surroundings and enhance the lives of their occupants. We believe in the power of architecture to create lasting positive impacts. This vision is the driving force behind Sparkbird, our dedicated research and development lab. Here, we channel our creative energy and technical expertise to invent cutting-edge design and software solutions that contribute to a greener planet.<br /><br />We invite you to join us on this transformative architectural journey. Together, we aim to shape a sustainable legacy that resonates with generations, leaving a positive imprint on our world and the people who inhabit it.</p>
            );
            mobileClassname = `${styles.wzmhBgMob}`;
            break;
        case 'Sparkbird':
            switchContent = (
                <p>In 2017, WZMH Architects introduced the Intelligent Structural Panel (ISP), a revolutionary prefabricated building product that sparked a wave of innovative smart building technologies and concepts. This initial breakthrough led to a series of game-changing ideas and products, including Black Box, mySUN, floor sensors, prefab wood floors, green energy solutions, advanced software applications, and integrated photovoltaics, all reshaping the landscape of sustainable construction.<br /><br />As our workspace evolved, a dedicated research and development lab emerged, housing tangible prototypes that embody our commitment to innovation. Within this dynamic environment, we collaboratively create, test, and refine new concepts and software applications in partnership with industry leaders.<br /><br />Today, we proudly introduce Sparkbird, the official research and development arm of WZMH Architects. Sparkbird represents the culmination of our lab's achievements and embodies our mission to drive positive change in the architectural world.</p>
            );
            mobileClassname = `${styles.sparkbirdBgMob}`;
            break;
        case 'Giraffe':
            switchContent = (
                <p>On the 24th of February, with the first air raid siren, civilian Ukrainians were caught with one thought: "How can I help if I don't have any combat skills?"<br /><br />Techies started to discuss it with their friends and colleagues, and within a few hours, a volunteer community called IT#Stand For Ukraine was founded. It grew significantly fast, and it happened thanks to word-of-mouth and a solid will to stand for Ukraine's independence. Together we have managed to set up cooperation with other volunteer communities and the government.<br /><br />The volunteer tech movement brought different and unfamiliar people together, and the founders of UA IT Hub learned about the job loss problem from experienced professionals who used to work in prominent Ukrainian outsourcing tech companies or promising start-ups and developed products for acknowledged international clients.<br /><br />Now these incredibly talented people help commercial companies to optimize and transform their products or develop new solutions from scratch to achieve any business.</p>
            );
            mobileClassname = `${styles.giraffeBgMob}`;
            break;
        case 'Gart Technology':
            switchContent = (
                <p>WZMH Architects, headquartered in Toronto, has proudly delivered design excellence for over six decades. Our unwavering commitment to sustainability fuels our continuous evolution and innovation. We embrace fresh thinking and foster creativity, which infuse our work with contemporary relevance and profound meaning.<br /><br />Our mission is to craft timeless spaces that optimize their surroundings and enhance the lives of their occupants. We believe in the power of architecture to create lasting positive impacts. This vision is the driving force behind Sparkbird, our dedicated research and development lab. Here, we channel our creative energy and technical expertise to invent cutting-edge design and software solutions that contribute to a greener planet.<br /><br />We invite you to join us on this transformative architectural journey. Together, we aim to shape a sustainable legacy that resonates with generations, leaving a positive imprint on our world and the people who inhabit it.</p>
            );
            mobileClassname = `${styles.gartBgMob}`;
            break;
        default:
            switchContent = null;
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <section className={`${mobileClassname} ${styles.modalContent}`} onClick={(e) => e.stopPropagation()} style={modalStyle} >
                <Image src={modalContent.image} alt={`${modalContent.name} logo`} className={styles.modalLogo} />
                {switchContent}
                <a href={modalContent.link} target='_blank' rel='noreferrer' className="button-link">{modalContent.linkText}</a>
                <a href='/' className={styles.close} onClick={onClose}>Close</a>
            </section>
        </div>
    );
};

export default Modal;