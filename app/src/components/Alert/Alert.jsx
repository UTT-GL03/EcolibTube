import styles from './Alert.module.css';

import ALERT_TYPES from './AlertTypes';


/**
 * Component to create an alert dialog modal element to open with the given 'id' parameter.
 * 
 * @param {string} id The identifier of the dialog element, use it to open the alert dialog.
 * @param {ALERT_TYPES} alertType The type of alert dialog, see ./AlertTypes.js to find all possibles values
 * @param {string} title The title of the alert dialog, represent the content of the h4 element
 * @param {string} text The message text that describe the alert
 * 
 * @returns {JSX.Element}
 */
function Alert({id, alertType, title, text}) {
    // FUNCTIONS
    const closeAlert = () => {
        document.getElementById(id).close()
    }

    // RENDER
    return <dialog id={id} className={`${styles.alert} ${styles[`${alertType}Alert`]}`}>
        <button className={styles.closeModalBtn} onClick={closeAlert}>X</button>
        <h4>{title}</h4>
        <p>{text}</p>
    </dialog>
}

export default Alert
