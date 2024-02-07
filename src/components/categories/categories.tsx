import AuctionCard, { TYPE_CATEGORY_CARD } from '../auction-card/auction-card';
import Button from '../button/button';
import Title from '../title/title';
import styles from './categories.module.css';
import { FC, useEffect, useState } from 'react';
import { getAuctionCards } from '../../shared/api/auction-card';
import { TAuction } from '../../shared/libs/types';
import CardScroll from '../card-scroll/card-scroll';

const Categories: FC = () => {
    const [auctionCardsData, setAuctionsCards] = useState<TAuction[]>([])

    function renewLikesNumberCallback(id: number) {
        console.log(id)

    }

    useEffect(() => {
        const data = getAuctionCards()
        setAuctionsCards(data)

    }, [])

    return (
        <div className={`${styles.categories}`}>
            <Title circleType="purple">Explore By Categories</Title>
            <CardScroll className={styles.scroll}>
                {
                    auctionCardsData.map((item, index) => {
                        return <AuctionCard key={index} {...item} type={TYPE_CATEGORY_CARD} likeCallback={renewLikesNumberCallback} />
                    })
                }
            </CardScroll >
            <Button buttonType="gray" textType="white" buttonSize='big' className={`${styles.button_general}`}>View All</Button>

        </div>
    );
}
export default Categories;