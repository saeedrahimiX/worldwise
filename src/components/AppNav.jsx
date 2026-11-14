
import style from "./AppNav.module.css" 


function AppNav() {
    return (
        <Nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <a href="/app/cities" className={style.navLink}>Cities</a>
                </li>
                <li className={style.navItem}>
                    <a href="/app/countries" className={style.navLink}>Countries</a>
                </li>
                <li className={style.navItem}>
                    <a href="/app/form" className={style.navLink}>Form</a>
                </li>
            </ul>
        </Nav>
    )
}

export default AppNav
