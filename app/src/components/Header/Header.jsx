import styles from './Header.module.css';


/**
 * Component to create the header of the web site pages.
 * 
 * @returns {JSX.Element}
 */
function Header({}) {
    // FUNCTIONS


    // RENDER
    return <header className={styles.header}>
        <button className={styles.sidebarBtn}>
            <svg className={styles.burgerIcon} viewBox="0 0 24 24">
                <line x1="5" y1="7" x2="19" y2="7" strokeWidth="2" strokeLinecap="round"/>
                <line x1="5" y1="17" x2="19" y2="17" strokeWidth="2" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>

        <form className={styles.searchBarForm}>
            <input className={styles.searchBarInput} type="text" name="search" placeholder="Search..."></input>
            <button className={styles.searchBarSubmitBtn} type="submit">
                <svg className={styles.searchBarSubmitIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
            </button>
        </form>

        <button className={styles.profilBtn}>
            <img className={styles.profilPP} src='/assets/creator-pp-example.png' alt="Photo profil of the user logged."/>
        </button>
    </header>
}

export default Header
