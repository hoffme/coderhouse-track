import './style.scss';

import Header from '../../components/header';
import NavBar from '../../components/navBar';
import ProductListContainer from '../../components/product/listContainer';

const HomePage = () => {
    return <>
        <Header />
        <NavBar />
        <ProductListContainer title={"Novedades"} />
    </>
}

export default HomePage;