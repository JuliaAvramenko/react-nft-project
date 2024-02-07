
import AuctionCard, { TYPE_AUCTION_CARD } from '../auction-card/auction-card';
import Button from '../button/button';
import Title from '../title/title';
import styles from './auctions.module.css';
import { FC, useEffect, useState } from 'react';
import { getAuctionCards } from '../../shared/api/auction-card';
import { TAuction } from '../../shared/libs/types';
import CardScroll from '../card-scroll/card-scroll';




const Auctions: FC = () => {
    const [auctionCardsData, setAuctionsCards] = useState<TAuction[]>([])

    function likeManage(item: TAuction) {
        if (item.isLiked === true) {
            item.likes -= 1

        } else {
            item.likes += 1
        }
        item.isLiked = !item.isLiked

        return item
    }

    function renewLikesNumberCallback(id: number) {
        console.log(id)

        const cards = auctionCardsData.filter((item) => {
            return id === item.id
        }).map((item) => likeManage(item))
        const noChangesCards = auctionCardsData.filter((item) => {
            return id !== item.id
        })

        setAuctionsCards(
            [
                ...cards,
                ...noChangesCards,
            ].sort((a, b) => a.id - b.id)
        )

    }

    useEffect(() => {
        const data = getAuctionCards()
        setAuctionsCards(data)

    }, [])



    return (
        <div className={`${styles.auctions}`}>
            <Title circleType="purple">Live Auctions</Title>
            <CardScroll className={styles.scroll}>
                {
                    auctionCardsData.map((item, index) => {
                        return <AuctionCard key={index} {...item} type={TYPE_AUCTION_CARD} likeCallback={renewLikesNumberCallback} />
                    })
                }
            </CardScroll>
            <Button buttonType="gray" textType="white" buttonSize='big' className={`${styles.button_general}`}>View All</Button>

        </div>
    );
}
export default Auctions;