import Image from 'next/image';

import styles from './userCards.module.css';

import corporateImg from '/src/images/users-corporate-img.svg';
import institutionalImg from '/src/images/users-institutional-img.svg';
import govermentImg from '/src/images/users-government-img.svg';

const content = [
    {
        image: corporateImg,
        alt: 'Corporate',
        scenarioParagraph: `Imagine a world where every company meeting doesn't start with profit graphs but with a leaderboard showcasing each region's Nature's Footprint. The New York office competes fervently with the London and Tokyo branches. Every regional office is eager to show off their achievements in monthly video calls.`,
        exampleTitle1: 'Commuting Challenges:',
        exampleText1: `Employees from each office carpool, cycle, or use public transport. They log these activities in the mySUN app, and over time, the branch with the most sustainable commuting practices earns accolades.`,
        exampleTitle2: `Stairway Challenges:`,
        exampleText2: `Departments or campuses can organize cleanup events, collecting trash and ensuring recycling of materials.`,
        exampleTitle3: `Zero-Waste Weeks:`,
        exampleText3: `Regional offices challenge each other to produce the least amount of waste, promoting recycling and reusable products.`
    },
    {
        image: institutionalImg,
        alt: 'Institutional',
        scenarioParagraph: `University/College rivalries aren’t just about sports anymore. With the mySUN app, campuses compete to determine which one is more eco-friendly. The Arts Department takes on the challenge against the Science Department. Campuses from the East Coast compare scores with those on the West.`,
        exampleTitle1: 'Sustainable Dorms:',
        exampleText1: `Students earn points for implementing energy-saving choices, such as lowering the thermostat during heating seasons and raising it during cooling seasons. These practices not only conserve energy but also cultivate sustainable living habits for the future.`,
        exampleTitle2: `Campus Cleanup Days:`,
        exampleText2: `Departments or campuses can organize cleanup events, collecting trash and ensuring recycling of materials.`,
        exampleTitle3: `Vegan Meal Challenges:`,
        exampleText3: `Dining halls introduce more plant-based options, and students are encouraged to track their sustainable eating habits on the app.`
    },
    {
        image: govermentImg,
        alt: 'Government',
        scenarioParagraph: `At the heart of governance is the drive to lead by example. With the mySUN app, different government departments or regional governmental offices throw down the gauntlet to see which one can make the most sustainable changes.`,
        exampleTitle1: 'Paperless Push:',
        exampleText1: `Departments are awarded points for going digital, cutting down on excessive paper use.`,
        exampleTitle2: `Eco-friendly Transport and Wellness:`,
        exampleText2: `Along with transitioning government vehicles to hybrid or electric options, departments advocate for public transport or walking for intra-city travels. Not only does walking reduce carbon footprints, but it also promotes physical health, serving as a simple yet effective wellness activity for employees.`,
        exampleTitle3: `Public Awareness Campaigns:`,
        exampleText3: `Departments organize awareness campaigns on sustainability. Each initiative logged and executed earns them points on the app.`
    },
]

const UserCards = () => {
    return (
        <section className={styles.userCards}>
            {content.map((contentItem, index) => (
                <div key={index} className={`${styles.usersRow} ${index % 2 ? `${styles.switch}` : ''}`}>
                    <div className={styles.usersImgCol}>
                        <Image src={contentItem.image} alt={`${contentItem.alt} sector`} />
                    </div>
                    <div className={styles.usersCardCol}>
                        <div className={styles.scenario}>
                            <h3>Scenario:</h3>
                            <p>{contentItem.scenarioParagraph}</p>
                        </div>
                        <div className={styles.examples}>
                            <h3>Examples/Opportunities:</h3>
                            <p><em>{contentItem.exampleTitle1}</em> {contentItem.exampleText1}</p>
                            <p><em>{contentItem.exampleTitle2}</em> {contentItem.exampleText2}</p>
                            <p><em>{contentItem.exampleTitle3}</em> {contentItem.exampleText3}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default UserCards;