import Image from 'next/image';

import styles from './actionSteps.module.css';

import actionsImg from "/src/images/actions-page-img.png";

const actions = [
    `Lower your home's thermostat in winter`,
    `Raise your home's thermostat in summer`,
    `Support 'green' events`,
    `Buy organic`,
    `Consider an electric car for your next purchase`,
    `Convert your furnace to electric`,
    `Sort and recycle your garbage`,
    `Reduce beef consumption`,
    `Opt for green power`,
    `Bike to work`,
    `Carpool to work`,
    `Use public transportation`,
    `Take the stairs, not elevators`,
    `Clean your air conditioning unit`,
    `Install solar panels at home`,
    `Bring your own cup to the coffee shop`,
    `Conduct an energy audit at home`,
    `Replace the furnace filter regularly`,
    `Clean your home ducts`,
    `Turn off your computer(s) when not in use`,
    `Turn off lights when leaving home`,
    `Stay fit, exercise`
]

const ActionSteps = () => {
    return (
        <section className={styles.actionSteps}>
            <div className={styles.actionsImgCol}>
                <Image className={styles.topImg} src={actionsImg} quality={100} priority={true} alt="Daily sustainable actions" />
            </div>
            <div className={styles.actionsTextCol}>
                <h1 className={styles.underscore}>mySUN Actions</h1>
                <ul>
                    {actions.map((action, index) => (
                        <li key={index} className={`${index === 2 ? `${styles.paperplaneImg}` : ''}${index === 14 ? `${styles.electricImg}` : ''}${index === 21 ? `${styles.fitImg}` : ''}`}>
                            {action}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ActionSteps;