import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiDownload } from 'react-icons/fi'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <a
                    title="Github"
                    className={styles.gitlink}
                    href="https://github.com/samifdev"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub color="white" size={48} />
                </a>
                <a
                    title="Email Me"
                    className={styles.maillink}
                    href="mailto:samifdev@gmail.com">
                    <FiMail color="white" size={48} />
                </a>
                <a
                    title="Linkedin"
                    className={styles.linkedinlink}
                    href="https://www.linkedin.com/in/sami-fares-a3993a245
"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedin color="white" size={48} />
                </a>
                <a
                    title="Get My Resume"
                    href="https://drive.google.com/file/d/1PVU34whzjnaAJsgaPr-yVudjJsUP090y/view?usp=sharing"
                    download
                    target="blank"
                    rel="noreferrer">
                    <FiDownload color="white" size={48} />
                </a>
            </div>
            <p className={styles.Copyright}>© 2022 Sami Fares</p>
        </footer>
    )
}

export default Footer
