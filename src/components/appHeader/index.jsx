import './style.scss';

import logo from '../../assets/logo/logo.png';

import NavBar from '../navBar';

const AppHeader = () => {
    return <header className={"app-header app-width"}>
        <a className={"logo"} href={"/"}>
            <img src={logo} alt="logo trank"/>
        </a>
        <NavBar />
    </header>;
}

export default AppHeader;