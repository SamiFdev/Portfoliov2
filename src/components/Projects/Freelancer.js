import landingpic from '../../assets/landing.png'
import styles from './Projects.module.css'

const Freelancer = () => {
    return (
        <section className={styles.ProjectContainer}>
            <h1>Freelancer</h1>
            <img
                className={styles.ProjectImg}
                src={landingpic}
                alt="freelancer"
            />
            <p className={styles.ProjectDescription}>
                An application built for freelancers. Anyone with a techincal
                skill can create an account and post their services for sale. If
                you are looking to hire someone, you can just as easily create
                an account and browse the platform and reach out to any seller
                you are interested in hiring.
            </p>
            <h3 className={styles.Built}> Built Using</h3>
            <p2 className={styles.ProjectTech}>
                CSS, JS, React, Apollo, MongoDb
            </p2>
            <div className={styles.ProjectLinkCont}>
                <a
                    className={styles.FreelanceLink}
                    href="https://freelancersal.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    Check It Out!
                </a>
            </div>
        </section>
    )
}

export default Freelancer
