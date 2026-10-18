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

    const openAlerts = (idAlert) => {
        document.getElementById(idAlert).showModal()
    }

    const increment = () => {
        setCount(count + 1)
    }

    // RENDER
    return <>
        <h1>Color Scheme Test</h1>
        <p className={styles.loremText}>Some Lorem ipsum you know just simple placeholder to fill</p>

        <button className={`${styles.btn} ${styles.colorSchemeBtn}`} onClick={toggleColorScheme}>Switch Color Scheme</button>

        <button className={`${styles.btn} ${styles.alertsBtn}`} onClick={() => openAlerts("alert1")}>Show Danger Alert</button>
        <button className={`${styles.btn} ${styles.alertsBtn}`} onClick={() => openAlerts("alert2")}>Show Warning Alert</button>
        <button className={`${styles.btn} ${styles.alertsBtn}`} onClick={() => openAlerts("alert3")}>Show Sucess Alert</button>
        
        <button className={`${styles.btn} ${styles.countBtn}`} onClick={increment}>Count : {count}</button>

        <Alert id="alert1" alertType={ALERT_TYPES.DANGER} title="Payment failed" text="Your bank account has rejected the payment."/>
        <Alert id="alert2" alertType={ALERT_TYPES.WARNING} title="Plan expiring soon" text="Your plan will expire in 3 days."/>
        <Alert id="alert3" alertType={ALERT_TYPES.SUCCESS} title="Video Uploaded" text="Your video has been successfully uploaded on the platform."/>
    </>
}

export default BuilderView
