import { FC, useEffect, useState } from 'react';
import styles from './card-scroll.module.css';
import arrowLeft from '../../assets/images/auctions/left.png'
import arrowRight from '../../assets/images/auctions/right.png'
import { getAuctionCards } from '../../shared/api/auction-card';

type TProps = {
    className?: string
    children: React.ReactNode[]
}


const CardScroll: FC<TProps> = ({ className, children }) => {
    const CARDS_NUMBER = 3
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardNodes, setCardNodes] = useState<any[]>([])

    useEffect(() => {
        setCardNodes(children)

    }, [children])

    function moveToLeft() {
        // console.log(currentIndex)
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }

    }
    function moveToRight() {
        if (currentIndex < cardNodes.length - CARDS_NUMBER) {
            setCurrentIndex(currentIndex + 1)
        }

    }

    return (
        <div className={`${styles.scroll} ${className}`}>
            <div className={`${styles.button_wrapper}`}>
                <button className={`${styles.button} ${currentIndex > 0 && styles.button_active}`} onClick={moveToLeft}>
                    <img src={arrowLeft} alt="arrow" className={styles.button_img} />
                </button>
                <button className={`${styles.button} ${currentIndex < cardNodes.length - CARDS_NUMBER && styles.button_active}`} onClick={moveToRight}>
                    <img src={arrowRight} alt="arrow" className={styles.button_img} />
                </button>
            </div>
            <div className={`${styles.cards}`}>
                {cardNodes.slice(currentIndex, currentIndex + CARDS_NUMBER)}
            </div>

        </div>
    );
}

export default CardScroll;