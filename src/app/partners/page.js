import styles from './page.module.css';

import PartnersIntro from "./sections/partnersIntro";
import PartnersCards from "./sections/partnersCards";
import Button from "/src/universalComponents/button";

export const metadata = {
    metadataBase: new URL('https://mysunapp.com'),
    alternates: {
        canonical: 'partners/'
    },
    title: 'Our Partners • mySUN app',
    description: "Discover our valued partners in the sustainability journey. Together, we're making a positive impact on the environment with mySUN app.",
}

const PartersPage = () => {
    return (
        <main className={styles.partnersPage}>
            <PartnersIntro />
            <PartnersCards />
            <div className={styles.partnersCta}>
                <h2>We support your green path</h2>
                <Button />
            </div>
        </main>
    )
}

export default PartersPage;