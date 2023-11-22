import styles from './usersPage.module.css';

import UsersIntro from "./sections/usersIntro";
import UserCards from "./sections/userCards";

export const metadata = {
    title: 'Our Users • mySUN app',
    description: "Elevate sustainability with mySUN app! Discover how corporations, institutions, and governments can drive environmental change for a greener future.",
}

const UsersPage = () => {
    return (
        <main className={styles.usersPage}>
            <UsersIntro />
            <UserCards />
        </main>
    );
}

export default UsersPage;