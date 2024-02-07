import Button from '../button/button';
import styles from './auction-card.module.css';
import heart from '../../assets/images/auctions/heart.svg';
import heart_filled from '../../assets/images/auctions/heart_filled.svg';


import { FC, FunctionComponent, SVGProps, useEffect, useState } from 'react';
import { TAuction } from '../../shared/libs/types';


export const TYPE_AUCTION_CARD = 'AUCTION_CARD'
export const TYPE_CATEGORY_CARD = 'CATEGORY_CARD'

type TProps = {
    type: 'AUCTION_CARD' | 'CATEGORY_CARD',
    likeCallback: (id: number) => void
}


const AuctionCard: FC<TAuction & TProps> = ({ image, altImage, avatar, avatarAlt, name, likes, timer, bid, isLiked, id, type, likeCallback }) => {
    const [isLikedLocalState, setIsLiked] = useState(false)
    function changeHeartColor() {
        likeCallback(id)
    }

    useEffect(() => {
        setIsLiked(isLiked)

    }, [isLiked])


    return (
        <article className={`${styles.card}`}>
            <img src={image} alt={altImage} className={`${styles.image}`} />
            {type === TYPE_AUCTION_CARD && <div className={`${styles.timer}`}>{timer}</div>}
            <div className={`${styles.container}`}>
                <div className={`${styles.avatar_container}`}>
                    <img src={avatar} alt={avatarAlt} className={`${styles.avatar}`} />
                    <div className={`${styles.info_wrapper}`}>
                        <h4 className={`${styles.title}`}>{name}</h4>
                        <p className={`${styles.text}`}>by @wzard</p>
                    </div>
                </div>
                <div className={`${styles.like}`}>
                    <button className={`${styles.like_button}`}>
                        {
                            isLikedLocalState
                            && <img src={heart_filled} alt="heart" className={`${styles.icon}`} onClick={changeHeartColor} />
                            || <img src={heart} alt="heart" className={`${styles.icon}`} onClick={changeHeartColor} />
                        }

                    </button>
                    <p className={`${styles.number}`}>{likes}</p>
                </div>
            </div>
            <div className={`${styles.wrapper}`}>
                <p className={`${styles.name}`}>Current bid</p>
                <p className={`${styles.price}`}>{bid}</p>
            </div>
            {type === TYPE_AUCTION_CARD && <Button buttonType="gray" textType="yellow" buttonSize='medium' className={`${styles.button_ya}`}>Place a bid</Button>}
        </article>
    );
}

export default AuctionCard;