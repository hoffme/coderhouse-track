import './style.scss';

import logo from '../../assets/logo/logo.png';

const AppHeader = () => {
    return <header className={"app-header app-width"}>
        <a className={"logo"} href={"/"}>
            <img src={logo} alt="logo trank"/>
        </a>
    </header>;
}

export default AppHeader;