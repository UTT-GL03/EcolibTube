import styles from './Alert.module.css';


function Alert({alertType, title, text}) {
    return <div className={`${styles.alert} ${styles[`${alertType}Alert`]}`}>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
}

export default Alert
