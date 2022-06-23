import { Link } from 'react-router-dom'
import landingpic from '../../assets/landing.png'
import undercpic from '../../assets/underc.webp'
import styles from './Projects.module.css'

function Projects() {
    return (
        <section>
            <h1>Check Out Some Of My Work</h1>
            <div className={styles.ProjectBoxes}>
                <Link to="/projects/freelancer">
                    <img
                        className={styles.ProjectThumbnail}
                        src={landingpic}
                        alt="freelancer"></img>
                </Link>

                <Link to="/projects/placeholder">
                    <img
                        className={styles.ProjectThumbnail}
                        src={undercpic}
                        alt="freelancer"></img>
                </Link>
            </div>
        </section>
    )
}

export default Projects
