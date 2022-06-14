import { GitHub, Linkedin, Mail, Download } from 'react-feather'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2022 Sami Fares</p>
            <a
                className={styles.gitlink}
                href="https://github.com/samifdev"
                target="_blank"
                rel="noreferrer">
                <GitHub color="black" size={48} />
            </a>
            <a className={styles.maillink} href="mailto:samifdev@gmail.com">
                <Mail color="black" size={48} />
            </a>
            <a
                className={styles.linkedinlink}
                href="https://www.linkedin.com/in/sami-f81291/"
                target="_blank"
                rel="noreferrer">
                <Linkedin color="black" size={48} />
            </a>
            <a
                href="./assets/Sami Fares_Resume.pdf"
                download
                target="blank"
                rel="noreferrer">
                <Download color="black" size={48} />
            </a>
        </footer>
    )
}

export default Footer
