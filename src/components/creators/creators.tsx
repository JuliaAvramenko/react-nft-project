import { useEffect, useState } from 'react';
import { getCreatorsCards } from '../../shared/api/creator-card';
import Button from '../button/button';
import CreatorCard from '../creator-card/creator-card';
import Title from '../title/title';
import styles from './creators.module.css';
import { TCreator } from '../../shared/libs/types';


function Creators() {
    const [creatorsData, setCreatorsData] = useState<TCreator[]>([])

    useEffect(() => {
        const data = getCreatorsCards()
        setCreatorsData(data)

    }, [])


    return (
        <div className={`${styles.container}`}>
            <Title circleType='red'>Top Creators</Title>
            <div className={styles.cards}>
                {creatorsData.map((item, index) => {
                    return <CreatorCard key={index} {...item} />
                })}

            </div>
            <Button buttonType="gray" textType="white" buttonSize='big' className={`${styles.button_general}`}>View All</Button>

        </div >
    );
}

export default Creators;