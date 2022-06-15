import { Link } from 'react-router-dom'
import landingpic from '../../assets/landing.png'
import styles from './Projects.module.css'

function Projects() {
    return (
        <section>
            <h1>PROJECTS</h1>
            <div className={styles.ProjectBoxes}>
                <Link to="/projects/freelancer">
                    <img
                        className={styles.ProjectThumbnail}
                        src={landingpic}
                        alt="freelancer"></img>
                </Link>
            </div>
            <div className={styles.LinkContainer}>
                {/* <Link className={styles.ProjectRoute} to="/projects/freelancer">
                    Freelancer
                </Link> */}
            </div>
        </section>
    )
}

export default Projects
