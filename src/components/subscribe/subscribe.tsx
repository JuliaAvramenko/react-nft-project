import Title from '../title/title';
import styles from './subscribe.module.css';


function Subscribe() {


    return (
        <section className={`${styles.container}`}>
            <Title circleType='none'>Ready for Next NFT Drop?</Title>
            <form className={styles.form}>
                <input type="text" placeholder="info@gmail.com" className={styles.input} />
                <button className={styles.button}>Subscribe</button>
            </form>
        </section>
    );
}

export default Subscribe;