import './style.scss';

import NavBar from '../../components/navBar';
import ProductListContainer from '../../components/product/listContainer';
import CartButton from '../../components/cart/button';

const HomePage = () => {
    return <>
        <NavBar />
        <ProductListContainer title={"Novedades"} />
        <CartButton />
    </>
}

export default HomePage;