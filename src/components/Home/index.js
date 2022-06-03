import styles from './Home.module.css'
import Profilepic from '../../assets/Profilepic.jpg'

function Home() {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={Profilepic} alt="me" />
        </div>
    )
}

export default Home
