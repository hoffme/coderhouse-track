import './style.scss';

import NavBar from '../../components/navBar';
import ProductListContainer from '../../components/product/listContainer';

const HomePage = () => {
    return <>
        <NavBar />
        <ProductListContainer title={"Novedades"} />
    </>
}

export default HomePage;