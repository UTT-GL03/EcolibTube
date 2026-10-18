import { useState } from 'react';
import styles from './BuilderView.module.css';

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
        <h1>Hello World !</h1>
        <p className={styles.loremText}>Some Lorem ipsum you know just simple placeholder to fill</p>
        <button className={`${styles.btn} ${styles.colorSchemeBtn}`} onClick={toggleColorScheme}>Switch Color Scheme</button>
        <button className={`${styles.btn} ${styles.alertsBtn}`} onClick={openAlerts}>Show Alerts</button>
        <button className={`${styles.btn} ${styles.countBtn}`} onClick={increment}>Count : {count}</button>

        <dialog id='alerts-dialog'>
        <button class={styles.closeModalBtn} onClick={closeAlerts}>X</button>
        <div className={`${styles.alert} ${styles.dangerAlert}`}>
            <h4>Payment failed</h4>
            <p>Your bank account has rejected the payment.</p>
        </div>
        <div className={`${styles.alert} ${styles.warningAlert}`}>
            <h4>Plan expiring soon</h4>
            <p>Your plan will expire in 3 days.</p>
        </div>
        <div className={`${styles.alert} ${styles.successAlert}`}>
            <h4>Video Upload</h4>
            <p>Your video has been successfully uploaded on the platform.</p>
        </div>
        </dialog>
    </>
}

export default BuilderView
