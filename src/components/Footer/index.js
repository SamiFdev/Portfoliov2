import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiDownload } from 'react-icons/fi'
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
                <FaGithub color="black" size={48} />
            </a>
            <a className={styles.maillink} href="mailto:samifdev@gmail.com">
                <FiMail color="black" size={48} />
            </a>
            <a
                className={styles.linkedinlink}
                href="https://www.linkedin.com/in/sami-f81291/"
                target="_blank"
                rel="noreferrer">
                <FaLinkedin color="black" size={48} />
            </a>
            <a
                href="./assets/Sami_Fares_Resume.pdf"
                download
                target="blank"
                rel="noreferrer">
                <FiDownload color="black" size={48} />
            </a>
        </footer>
    )
}

export default Footer
