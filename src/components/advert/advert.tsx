import Button from '../button/button';
import styles from './advert.module.css';


function Advert() {


    return (

        <div className={`${styles.advert}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.wrapper}`}>
                    <p className={`${styles.title}`}>Current Bid</p>
                    <h3 className={`${styles.text}`}>0.99 ETH</h3>
                </div>
                <div className={`${styles.wrapper}`}>
                    <p className={`${styles.title}`}>Ends in</p>
                    <h3 className={`${styles.text}`}>25 hrs</h3>
                </div>
            </div>
            <div className={`${styles.bottom_wrapper}`}>
                <div className={`${styles.info_wrapper}`}>
                    <p className={`${styles.name}`}>Artist</p>
                    <h3 className={`${styles.paragraph}`}>@wzard</h3>
                </div>
                <Button buttonType="yellow" textType="black" buttonSize='medium' className={`${styles.button}`}>Start Bid</Button>
                {/* <button className={`${styles.button}`}>Start Bid</button> */}
            </div>
        </div>

    );
}

export default Advert;