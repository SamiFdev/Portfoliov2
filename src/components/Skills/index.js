import styles from './Skills.module.css'
import { FaHtml5, FaCss3, FaReact, FaNode } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import {
    SiMysql,
    SiMongodb,
    SiApollographql,
    SiTailwindcss,
    SiGraphql
} from 'react-icons/si'

function Skills() {
    return (
        <body>
            <h3 className={styles.skillsHeader}>Familiar Technologies</h3>
            <section className={styles.skillsContainer}>
                <div className={styles.skillsBlock}>
                    <FaHtml5 className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>HTML</span>
                </div>
                <div className={styles.skillsBlock}>
                    <FaCss3 className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>CSS</span>
                </div>
                <div className={styles.skillsBlock}>
                    <TbBrandJavascript className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>JavaScript</span>
                </div>
                <div className={styles.skillsBlock}>
                    <FaReact className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>React</span>
                </div>
                <div className={styles.skillsBlock}>
                    <FaNode className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>Node</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SiMysql className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>MySQL</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SiMongodb className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>MongoDb</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SiApollographql className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>Apollo</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SiTailwindcss className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>Tailwinds</span>
                </div>
                <div className={styles.skillsBlock}>
                    <SiGraphql className={styles.skillsIcon} />
                    <span className={styles.skillsSpan}>GraphQL</span>
                </div>
            </section>
        </body>
    )
}

export default Skills
