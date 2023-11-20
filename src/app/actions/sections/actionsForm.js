import styles from './actionsForm.module.css';

import Form from '/src/universalComponents/form';

const ActionsForm = () => {
    return (
        <section className={styles.formSection}>
                <div className={styles.introBlock}>
                    <h2>Sign up to get early access</h2>
                    <p>
                        Don't miss out on this exclusive opportunity to be among the first
                        to experience all that our app has to offer. We promise no spam!
                    </p>
                </div>
                <div className={styles.formBlock}>
                    <Form buttonColor="black" buttonTextColor="white" />
                </div>
        </section>
    )
}

export default ActionsForm;