import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/projects">Projects</NavLink>

            <NavLink to="/skills">Skills</NavLink>
        </nav>
    )
}

export default Navbar
