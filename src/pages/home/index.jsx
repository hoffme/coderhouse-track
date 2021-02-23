import './style.scss';

import NavBar from '../../components/navBar';
import ProductListContainer from '../../components/productListContainer';

const HomePage = () => {
    return <>
        <NavBar />
        <ProductListContainer title={"Novedades"} />
    </>
}

export default HomePage;