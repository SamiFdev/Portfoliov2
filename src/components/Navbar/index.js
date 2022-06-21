import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <div>
                <h1 className={styles.navName}>Sami Fares</h1>
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
