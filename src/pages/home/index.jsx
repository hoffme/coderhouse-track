import { useContext } from 'react';
import SettingsContext from '../../contexts/settings';

import './style.scss';

import NavBar from '../../components/navBar';
import ProductListContainer from '../../components/product/listContainer';

const HomePage = () => {
    const { loading, settings } = useContext(SettingsContext);
    const homeSettings = settings?.page?.home;

    if (loading) {
        return <label>loading ...</label>
    }

    return <>
        <NavBar />
        <ProductListContainer title={"Novedades"} />
    </>
}

export default HomePage;