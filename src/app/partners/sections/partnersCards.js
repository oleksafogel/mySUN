'use client'

import React, { useState } from 'react';

import Image from 'next/image';

import styles from './partnersCards.module.css';

import wzmh from '/src/images/partners-page-wzmh-logo.svg';
import sparkbird from '/src/images/partners-page-sparkbird-logo.svg';
import giraffe from '/src/images/partners-page-giraffe-logo.svg';
import gart from '/src/images/partners-page-gart-logo.svg';

import wzmhBg from '../../../images/partners-page-modal-wzmh-bg.svg';
import sparkbirdBg from '../../../images/partners-page-modal-sparkbird-bg.svg';
import giraffeBg from '../../../images/partners-page-modal-giraffe-bg.svg';
import gartBg from '../../../images/partners-page-modal-gart-bg.svg';

import Modal from './modal';

const PartnersCards = () => {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const cardsContent = [
        {
            name: "WZMH Architects",
            image: wzmh,
            intro: 'WZMH Architects, headquartered in Toronto, has proudly delivered design excellence for over six decades. Our unwavering commitment to sustainability fuels our continuous evolution and innovation.'
        },
        {
            name: "Sparkbird",
            image: sparkbird,
            intro: 'In 2017, WZMH Architects introduced the Intelligent Structural Panel (ISP), a revolutionary prefabricated building product that sparked a wave of innovative smart building technologies and concepts.'
        },
        {
            name: "Giraffe",
            image: giraffe,
            intro: 'GIRAFFE is a pioneering software company specializing in cutting-edge applications for the design and construction industry, with a strong emphasis on sustainability, AI design tools, and construction automation.'
        },
        {
            name: "Gart Technology",
            image: gart,
            intro: `On the 24th of February, with the first air raid siren, civilian Ukrainians were caught with one thought: "How can I help if I don't have any combat skills?"`
        }
    ];

    function handleClick(e, partnerName) {
        e.preventDefault();
        // eslint-disable-next-line
        switch (partnerName) {
            case "WZMH Architects":
                setModalContent({
                    image: wzmh,
                    background: `url(${wzmhBg.src})`,
                    linkText: partnerName,
                    link: 'https://www.wzmh.com/'
                });
            break;
            // eslint-disable-next-line
            case "Sparkbird":
                setModalContent({
                    image: sparkbird,
                    background: `url(${sparkbirdBg.src})`,
                    linkText: partnerName,
                    link: 'https://www.wzmh.com/sparkbird/about'
                });
            break;
            // eslint-disable-next-line
            case "Giraffe":
                setModalContent({
                    image: giraffe,
                    background: `url(${giraffeBg.src})`,
                    linkText: partnerName,
                    link: 'https://giraffe.software/'
                });
            break;
            // eslint-disable-next-line
            case "Gart Technology":
                setModalContent({
                    image: gart,
                    background: `url(${gartBg.src})`,
                    linkText: partnerName,
                    link: 'https://gart.tech/'
                });
            break;
        }
        setShow(true);
    }

    function handleClose(e) {
        e.preventDefault();
        setShow(false);
    }

    return(
        <section className={styles.partnersCards}>
            {cardsContent.map((contentItem, index) => (
                <div className={`${styles.partnerCard} ${index === 0 || index === 3 ? `${styles.color}` : `${styles.bw}`}`} key={index}>
                    <div className={styles.top}>
                        <Image src={contentItem.image} alt={`${contentItem.name} logo`} style={{'width': '200px', 'height': '125px'}} />
                        <p>{contentItem.intro}</p>
                    </div>
                    <a href="/" onClick={(e) => handleClick(e, contentItem.name)}>Read more...</a>
                </div>
            ))}
            {modalContent && 
                <Modal 
                    onClose={handleClose} 
                    show={show} 
                    modalContent={modalContent} 
                />
            }
        </section>
    );
}

export default PartnersCards;