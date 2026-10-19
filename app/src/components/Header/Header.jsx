import styles from './Header.module.css';


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
function Header() {
    // FUNCTIONS


    // RENDER
    return (
        <header className={styles.header}>
            <div className={styles.burgerMenu}>Menu</div>
            <form className={styles.searchContainer}>
                <input type="text" name="search" placeholder="Recherche..."></input>
                <button type="submit">→</button>
            </form>
            <div className={styles.profileButton}>Profil</div>
        </header>
    )
}

export default Header
