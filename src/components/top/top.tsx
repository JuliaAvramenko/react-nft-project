import styles from './top.module.css';
import button from "../../assets/images/top/arrow_down.svg";
import icon1 from "../../assets/images/top/coinbase.svg";
import icon2 from "../../assets/images/top/blockchain.svg";
import icon3 from "../../assets/images/top/binance.svg";
import icon4 from "../../assets/images/top/bitmex.svg";
import Advert from '../advert/advert';
import Button from '../button/button';


function Top() {


    return (
        <div className={`${styles.top}`}>
            <div className={`${styles.container}`}>
                <h1 className={`${styles.title}`}>Explore, Buy and Sell the <span className={`${styles.span}`}>Best NFTs!</span></h1>
                <div className={`${styles.button_wrapper}`}>
                    <Button buttonType="yellow" textType="black" buttonSize='big' className={`${styles.button}`}>Explore</Button>
                    <Button buttonType="gray" textType="white" buttonSize='big' className={`${styles.button}`}>Create</Button>
                </div>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.counter_wrapper}`}>
                        <h2 className={`${styles.counter}`}>32k+</h2>
                        <p className={`${styles.text}`}>Artworks</p>
                    </div>
                    <div className={`${styles.counter_wrapper}`}>
                        <h2 className={`${styles.counter}`}>20k+</h2>
                        <p className={`${styles.text}`}>Auctions</p>
                    </div>
                    <div className={`${styles.counter_wrapper}`}>
                        <h2 className={`${styles.counter}`}>12k+</h2>
                        <p className={`${styles.text}`}>Creators</p>
                    </div>
                    <div className={`${styles.image_wrapper}`}>
                        <button className={`${styles.button_scroll}`}>
                            <img src={button} alt="arrow down" className={`${styles.icon}`} />
                        </button>
                    </div>
                </div>

                <div className={`${styles.cards_wrapper}`}>
                    <img src={icon1} alt="company name" className={`${styles.card_icon}`}></img>
                    <img src={icon2} alt="company name" className={`${styles.card_icon}`}></img>
                    <img src={icon3} alt="company name" className={`${styles.card_icon}`}></img>
                    <img src={icon4} alt="company name" className={`${styles.card_icon}`}></img>
                </div>
            </div>
            <Advert></Advert>
        </div>

    );
}

export default Top;