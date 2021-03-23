import { useContext } from 'react';
import SettingsContext from '../../contexts/settings';

import './style.scss';

import ManagmentUI from '../../components/managmentUI';
import Footer from '../../components/footer';
import Loading from '../../components/loading';

const HomePage = () => {
    const { loading, settings } = useContext(SettingsContext);
    const homeSettings = settings?.page?.home;

    if (loading) return <Loading />

    return <>
        <ManagmentUI structure={homeSettings.structure} />
        <Footer />
    </>
}

export default HomePage;