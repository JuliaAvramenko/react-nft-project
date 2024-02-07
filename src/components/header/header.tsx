
import Logo from '../logo/logo';
import styles from './header.module.css';
import Button from '../button/button';



function Header() {

    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.container}`}>
                <Logo width={"66px"} height={"66px"}></Logo>
                <div className={`${styles.wrapper}`}>
                    <nav className={`${styles.nav}`}>
                        <ul className={`${styles.list}`}>
                            <li className={`${styles.item} ${styles.item_active}`}>
                                <a href="#" className={`${styles.link} ${styles.link_active}`}>Explore</a>
                            </li>
                            <li className={`${styles.item}`}><a href="#" className={`${styles.link}`}>Creators</a></li>
                            <li className={`${styles.item}`}><a href="#" className={`${styles.link}`}>Community</a></li>
                        </ul>
                    </nav>
                    <Button buttonType="gray" textType="yellow" buttonSize='small' className={`${styles.button}`}>Connect Wallet</Button>
                </div>
            </div>
        </header >
    );
}

export default Header;