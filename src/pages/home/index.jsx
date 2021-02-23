import './style.scss';

import NavBar from '../../components/navBar';
import ItemListContainer from '../../components/itemListContainer';

const HomePage = () => {
    return <>
        <NavBar />
        <ItemListContainer title={"Novedades"} />
    </>
}

export default HomePage;