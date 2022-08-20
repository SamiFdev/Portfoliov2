import { Link } from 'react-router-dom'
import landingpic from '../../assets/landing.png'
import CT_pic from '../../assets/CT_pic.png'
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

                <Link to="/projects/CryptoTracker">
                    <img
                        className={styles.ProjectThumbnail}
                        src={CT_pic}
                        alt="CryptoTracker"></img>
                </Link>
            </div>
        </section>
    )
}

export default Projects
