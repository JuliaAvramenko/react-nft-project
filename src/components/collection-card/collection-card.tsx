import styles from './collection-card.module.css';
import avatar from '../../assets/images/collections/ava.png'
import img1 from '../../assets/images/collections/img1.png'
import img2 from '../../assets/images/collections/img2.png'
import { FC } from 'react';
import { TCollection } from '../../shared/libs/types';


const CollectionCard: FC<TCollection> = ({ image, altImage, avatar, avatarAlt, name, number }) => {
    return (
        <article className={`${styles.card}`}>
            <img src={image} alt={altImage} className={styles.image} />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img src={avatar} alt={avatarAlt} className={styles.avatar} />
                    <p className={styles.text}>{name}</p>
                </div>
                <p className={styles.number}>{number}</p>
            </div>
        </article>
    );
}
export default CollectionCard;