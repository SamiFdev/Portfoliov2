import styles from './Projects.module.css'
import undercpic from '../../assets/CT_pic.png'

function Placeholder() {
    return (
        <section className={styles.ProjectContainer}>
            <h1>Crypto Tracker</h1>
            <img
                className={styles.ProjectImg}
                src={undercpic}
                alt="Coming Soon"
            />
            <p className={styles.ProjectDescription}>
                A website that allows users to get current information on their
                favorite cryptocurrencies. Highlighted by a moving ticker that
                shows top market cap coins and a favorites section that allows
                the user to revisit their top coins.
            </p>
            <h3 className={styles.Built}> Built Using</h3>
            <p2 className={styles.ProjectTech}>
                CSS, JS, React, Redux, coinGeckoAPI{' '}
            </p2>
            <div className={styles.ProjectLinkCont}>
                <a
                    className={styles.FreelanceLink}
                    href="https://cozy-tapioca-808c0f.netlify.app/"
                    target="_blank"
                    rel="noreferrer">
                    Check It Out!
                </a>
            </div>
        </section>
    )
}

export default Placeholder
