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
            <h3 className={styles.skillsheader}>Familiar Technologies</h3>
            <section className={styles.skillscontainer}>
                <FaHtml5 className={styles.skillsicon} size={100} />
                <FaCss3 className={styles.skillsicon} size={100} />
                <TbBrandJavascript className={styles.skillsicon} size={100} />
                <FaReact className={styles.skillsicon} size={100} />
                <FaNode className={styles.skillsicon} size={100} />
                <SiMysql className={styles.skillsicon} size={100} />
                <SiMongodb className={styles.skillsicon} size={100} />
                <SiApollographql className={styles.skillsicon} size={100} />
                <SiTailwindcss className={styles.skillsicon} size={100} />
            </section>
        </body>
    )
}

export default Skills
