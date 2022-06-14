import styles from './Skills.module.css'
import { FaHtml5, FaCss3, FaReact, FaNode } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import {
    SiMysql,
    SiMongodb,
    SiApollographql,
    SiTailwindcss
} from 'react-icons/si'

function Skills() {
    return (
        <body>
            <h3 className={styles.skillsHeader}>Familiar Technologies</h3>
            <section className={styles.skillsContainer}>
                <FaHtml5 className={styles.skillsIcon} />
                <FaCss3 className={styles.skillsIcon} />
                <TbBrandJavascript className={styles.skillsIcon} />
                <FaReact className={styles.skillsIcon} />
                <FaNode className={styles.skillsIcon} />
                <SiMysql className={styles.skillsIcon} />
                <SiMongodb className={styles.skillsIcon} />
                <SiApollographql className={styles.skillsIcon} />
                <SiTailwindcss className={styles.skillsIcon} />
            </section>
        </body>
    )
}

export default Skills
