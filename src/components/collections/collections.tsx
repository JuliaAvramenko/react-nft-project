import Button from '../button/button';
import Title from '../title/title';
import styles from './collections.module.css';
import CardScroll from '../card-scroll/card-scroll';
import CollectionCard from '../collection-card/collection-card';
import { useEffect, useState } from 'react';
import { TCollection } from '../../shared/libs/types';
import { getCollectionCards } from '../../shared/api/collection-card';


function Collections() {
    const [collectionCardsData, setCollectionsCards] = useState<TCollection[]>([])

    useEffect(() => {
        const data = getCollectionCards()
        setCollectionsCards(data)
        console.log(data)

    }, [])


    return (
        <div className={styles.collections}>
            <Title circleType="red">Popular Collections</Title>
            <CardScroll className={styles.scroll}>
                {
                    collectionCardsData.map((item, index) => {
                        return <CollectionCard key={index} {...item} />
                    })
                }
            </CardScroll>

            <Button buttonType="gray" textType="white" buttonSize='big' className={`${styles.button_general}`}>View All</Button>
        </div>
    );
}

export default Collections;