import { FC } from 'react';
import { TCreator } from '../../shared/libs/types';
import styles from './creator-card.module.css';



const CreatorCard: FC<TCreator> = ({ avatar, avatarAlt, name, number, money }) => {


    return (
        <article className={`${styles.card}`}>
            {/* <div className={`${styles.content_wrapper}`}></div> */}
            <img src={avatar} alt={avatarAlt} className={styles.avatar} />
            <div className={styles.container}>
                <p className={styles.name}>{name}</p>
                <p className={styles.money}>{money}</p>

            </div>
            <div className={styles.line}></div>
            <div className={styles.wrapper}>
                <p className={styles.number}>{number}</p>
                <p className={styles.text}>Items</p>
            </div>
        </article>
    );
}

export default CreatorCard;