import styles from './how-works.module.css';
import vector from '../../assets/images/how it works/vector.svg'
import vector2 from '../../assets/images/how it works/vector2.svg'
import wallet from '../../assets/images/how it works/wallet.svg'
import collection from '../../assets/images/how it works/collection.svg'
import collections from '../../assets/images/how it works/collections.svg'
import report from '../../assets/images/how it works/report.svg'

function HowWorks() {


    return (
        <section className={`${styles.section}`}>
            <div className={`${styles.container}`}>
                <h2 className={`${styles.title}`}>How it works</h2>
                <div className={styles.wrapper}>
                    <div className={styles.circle}>
                        <img src={wallet} alt="" className={styles.icon} />
                    </div>
                    <img src={vector} alt="arrow" className={styles.arrow} />
                    <div className={styles.circle}>
                        <img src={collection} alt="collection" className={styles.icon} />
                    </div>
                    <img src={vector} alt="arrow" className={styles.arrow} />
                    <div className={styles.circle}>
                        <img src={collections} alt="collections" className={styles.icon} />
                    </div>
                    <img src={vector2} alt="arrow" className={styles.arrow} />
                    <div className={styles.circle}>
                        <img src={report} alt="report" className={styles.icon} />
                    </div>

                </div>
                <div className={styles.wrapper_texts}>
                    <p className={styles.text}>Set up your wallet</p>
                    <p className={styles.text}>Create your collection</p>
                    <p className={styles.text}>Add your NFTs</p>
                    <p className={styles.text}>List them for sale</p>
                </div>

            </div>
        </section>
    );
}

export default HowWorks;