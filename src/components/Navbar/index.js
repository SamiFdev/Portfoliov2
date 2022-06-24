import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <span className={styles.navName}>Sami Fares</span>
                <span className={styles.navNameShort}>SF</span>
            </div>
            <div className={styles.linkGroup}>
                <NavLink to="/">Home</NavLink>

                <NavLink to="/projects">Projects</NavLink>

                <NavLink to="/skills">Skills</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
