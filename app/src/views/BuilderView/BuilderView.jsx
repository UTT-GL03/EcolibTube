import { useState } from 'react';
import styles from './BuilderView.module.css';

// COMPONENTS
import { Alert, ALERT_TYPES } from '../../components/Alert';


function BuilderView() {
    // HOOKS
    const [count, setCount] = useState(0);

    // FUNCTIONS
    const toggleColorScheme = () => {
        document.body.classList.toggle("light")
    }

    const openAlerts = () => {
        document.getElementById('alerts-dialog').showModal()
    }

    const closeAlerts = () => {
        document.getElementById('alerts-dialog').close()
    }

    const increment = () => {
        setCount(count + 1)
    }

    // RENDER
    return <>
        <h1>Color Scheme Test</h1>
        <p className={styles.loremText}>Some Lorem ipsum you know just simple placeholder to fill</p>
        <button className={`${styles.btn} ${styles.colorSchemeBtn}`} onClick={toggleColorScheme}>Switch Color Scheme</button>
        <button className={`${styles.btn} ${styles.alertsBtn}`} onClick={openAlerts}>Show Alerts</button>
        <button className={`${styles.btn} ${styles.countBtn}`} onClick={increment}>Count : {count}</button>

        <dialog id='alerts-dialog'>
            <button className={styles.closeModalBtn} onClick={closeAlerts}>X</button>
            <Alert alertType={ALERT_TYPES.DANGER} title="Payment failed" text="Your bank account has rejected the payment."/>
            <Alert alertType={ALERT_TYPES.WARNING} title="Plan expiring soon" text="Your plan will expire in 3 days."/>
            <Alert alertType={ALERT_TYPES.SUCCESS} title="Video Uploaded" text="Your video has been successfully uploaded on the platform."/>
        </dialog>
    </>
}

export default BuilderView
