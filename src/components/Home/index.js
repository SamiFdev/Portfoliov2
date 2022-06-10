import styles from './Home.module.css'
import { GitHub, Linkedin } from 'react-feather'
import Profilepic from '../../assets/Profilepic.jpg'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <h1>Sami Fares</h1>
            <p>
                I embrace collaboration. My goals are to be better everyday and
                bridge my passions through code.
            </p>
            <section className={styles.imgContainer}>
                <div>
                    <img className={styles.img} src={Profilepic} alt="me" />
                </div>
            </section>
            <section className={styles.sociallinks}>
                <a
                    href="https://github.com/samifdev"
                    target="_blank"
                    rel="noreferrer">
                    <GitHub color="black" size={48} />
                </a>
                <a
                    href="https://www.linkedin.com/in/sami-f81291/"
                    target="_blank"
                    rel="noreferrer">
                    <Linkedin color="black" size={48} />
                </a>
            </section>
        </section>
    )
}

export default Home
