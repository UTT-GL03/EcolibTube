import styles from './Alert.module.css';


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
