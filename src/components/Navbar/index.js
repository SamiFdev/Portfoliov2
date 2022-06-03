import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/skills">Skills</Link>

            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar
