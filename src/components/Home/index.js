import styles from './Home.module.css'
import Profilepic from '../../assets/Profilepic.jpg'

function Home() {
    return (
        <section className={styles.homeContainer}>
            <section className={styles.imgContainer}>
                <img src={Profilepic} alt="me" />
            </section>
            <p className={styles.oneLiner}>
                I embrace collaboration. My goals are to be better everyday and
                bridge my passions through code
            </p>
            <div className={styles.writeups}>
                <div className={styles.blurbs}>
                    <span>Tech Journey:</span>
                    <br />
                    <p>
                        I am a graduate from Rutgers Coding Bootcamp. The
                        combination of topics learned along with the pace of the
                        program has given me the confidence to take on new
                        challenges. Like everything, when new there is a ton of
                        learning that takes place. The beauty of coding is the
                        learning never stops. Each day is filled with lessons
                        and I am looking forward to the journey.
                    </p>
                </div>
                <div className={styles.blurbs}>
                    <span> Music Background: </span>
                    <br />
                    <p>
                        Having recevied my Bachelor's Degree of Science in Music
                        Production from Full Sail University, I have spent the
                        last few years working in the music business. Although
                        my education was in production the collaboration aspect
                        was my favorite. Working with someone to bring their
                        thoughts to life is something I find extremely
                        rewarding.
                    </p>
                </div>
                <div className={styles.blurbs}>
                    <span>How I Unplug: </span>
                    <br />
                    <p>
                        Since I am always either working on music, coding or
                        watching sports I spend a lot of time infront of
                        screens. My favorite way to unplug is to get outdoors
                        and fish. There is something so peacful about being
                        surrounded by water and nature. Fishing has helped me
                        reset when I hit a block and I will always find time to
                        escape screens for a bit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home
