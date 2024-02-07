import styles from './logo.module.css';
import logo from "../../assets/images/nft.svg";
import { FC } from 'react';

type TLogoProps = {
    width: string,
    height: string
}


const Logo: FC<TLogoProps> = (({ width, height }) => {

    return (
        <a href="#" style={{ width, height }}>
            <img src={logo} alt="logo" className={styles.image} />
        </a>
    );
})

export default Logo;