import { useContext } from 'react';
import SettingsContext from '../../contexts/settings';

import './style.scss';

import ManagmentUI from '../../components/managmentUI';
import Footer from '../../components/footer';

const HomePage = () => {
    const { loading, settings } = useContext(SettingsContext);
    const homeSettings = settings?.page?.home;

    if (loading) {
        return <label>loading ...</label>
    }

    return <>
        <ManagmentUI structure={homeSettings.structure} />
        <Footer />
    </>
}

export default HomePage;