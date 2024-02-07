import { FC } from 'react';
import styles from './title.module.css';

type TTitle = {
    circleType: string
    children: React.ReactNode
}


const Title: FC<TTitle> = ((props) => {
    let colorSchema
    if (props.circleType === "purple") {
        colorSchema = styles.purple
    }

    if (props.circleType === "red") {
        colorSchema = styles.red
    }

    if (props.circleType === "none") {
        colorSchema = styles.none
    }
    return (
        <div className={`${styles.container}`}>
            <h2 className={`${styles.title}`}>{props.children}</h2>
            <div className={`${styles.circle} ${colorSchema}`}></div>
        </div>
    );
})

export default Title;