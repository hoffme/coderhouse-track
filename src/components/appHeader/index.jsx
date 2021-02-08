import './style.scss';

import logo from '../../assets/logo/logo.png';
import Search from '../search';

const AppHeader = () => {
    return <header className={"app-header app-width"}>
        <div className={"left"}>
            <a className={"logo"} href={"/"}>
                <img src={logo} alt="logo trank"/>
            </a>
        </div>
        <div className={"center"}>
            <Search />
        </div>
        <div className={"right"}>

        </div>
    </header>;
}

export default AppHeader;