import styles from './app.module.css';
import Header from '../header/header'
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from '../my-routes/myRoute';
import Top from '../top/top';
import Advert from '../advert/advert';
import Auctions from '../auctions/auctions';
import HowWorks from '../how-works/how-works';
import Collections from '../collections/collections';
import Creators from '../creators/creators';
import Subscribe from '../subscribe/subscribe';
import Footer from '../footer/footer';
import Categories from '../categories/categories';


function App() {


    return (
        <div className={styles.app}>
            <BrowserRouter>
                <div className={styles.effect}></div>
                <Header></Header>
                <Top></Top>
                <Auctions></Auctions>
                <HowWorks></HowWorks>
                <Collections></Collections>
                <Categories></Categories>
                <Creators></Creators>
                <Subscribe></Subscribe>
                <Footer></Footer>
            </BrowserRouter>

        </div>


    );
}

export default App;


