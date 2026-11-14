
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
import AppNav from "./AppNav"

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            <p> List cities </p>
            <footer className={styles.footer}>
              <p className={styles.copyright}>&copy; {new Date().getFullYear()} Worldwise. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Sidebar
