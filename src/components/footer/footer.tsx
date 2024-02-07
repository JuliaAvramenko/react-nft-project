import Logo from '../logo/logo';
import styles from './footer.module.css';
import youtube from '../../assets/images/footer/youtube.svg'
import facebook from '../../assets/images/footer/facebook.svg'
import twitter from '../../assets/images/footer/twitter.svg'
import google from '../../assets/images/footer/google.svg'


function Footer() {


    // return (
    //     <footer className={`${styles.footer}`}>
    //         <div className={`${styles.container}`}>
    //             <Logo width={"194px"} height={"194px"}></Logo>
    //             <div className={`${styles.info_wrapper}`}>
    //                 <p className={styles.info}>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
    //                 <div className={styles.icons}>
    //                     <img src={youtube} alt="youtube" className={styles.icon} />
    //                     <img src={twitter} alt="twitter" className={styles.icon} />
    //                     <img src={facebook} alt="facebook" className={styles.icon} />
    //                     <img src={google} alt="google" className={styles.icon} />
    //                 </div>
    //                 <p className={styles.copyright}>All rights reserved@2021</p>
    //             </div>
    //         </div>
    //         <div className={`${styles.wrapper}`}>
    //             <p className={styles.title}>About us</p>
    //             <p className={styles.item}><a className={styles.link}>About NFTs</a></p>
    //             <p className={styles.item}><a className={styles.link}>Live Auctions</a></p>
    //             <p className={styles.item}><a className={styles.link}>NFT Blog</a></p>
    //             <p className={styles.item}><a className={styles.link}>Activity</a></p >
    //         </div >
    //         <div className={`${styles.wrapper}`}>
    //             <p className={styles.title}>Support</p>
    //             <p className={styles.item}><a className={styles.link}>Help & Support</a></p >
    //             <p className={styles.item}><a className={styles.link}>Item Details</a></p >
    //             <p className={styles.item}><a className={styles.link}>Author Profile</a></p >
    //             <p className={styles.item}><a className={styles.link}>Collection</a></p >
    //         </div>
    //     </footer>
    // )

    return <footer className={`${styles.footer}`}>
        <div className={`${styles.container}`}>
            <Logo width={"194px"} height={"194px"}></Logo>
            <div className={`${styles.info_wrapper}`}>
                <p className={styles.info}>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
                <div className={styles.icons}>
                    <img src={youtube} alt="youtube" className={styles.icon} />
                    <img src={twitter} alt="twitter" className={styles.icon} />
                    <img src={facebook} alt="facebook" className={styles.icon} />
                    <img src={google} alt="google" className={styles.icon} />
                </div>
                <p className={styles.copyright}>All rights reserved@2021</p>
            </div>
        </div>
        <div className={`${styles.wrapper}`}>
            <p className={styles.title}>About us</p>
            <p className={styles.item}><a className={styles.link}>About NFTs</a></p>
            <p className={styles.item}><a className={styles.link}>Live Auctions</a></p>
            <p className={styles.item}><a className={styles.link}>NFT Blog</a></p>
            <p className={styles.item}><a className={styles.link}>Activity</a></p >
        </div >
        <div className={`${styles.wrapper}`}>
            <p className={styles.title}>Support</p>
            <p className={styles.item}><a className={styles.link}>Help & Support</a></p >
            <p className={styles.item}><a className={styles.link}>Item Details</a></p >
            <p className={styles.item}><a className={styles.link}>Author Profile</a></p >
            <p className={styles.item}><a className={styles.link}>Collection</a></p >
        </div>
    </footer>
}


export default Footer;