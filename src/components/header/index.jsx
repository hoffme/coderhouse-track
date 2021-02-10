import './style.scss';

import logo from '../../assets/logo/logo.png';
import Search from '../search';
import CartButton from '../cartButton';

const Header = () => {
    return <header className={"header app-width"}>
        <div className={"left"}>
            <a className={"logo"} href={"/"}>
                <img src={logo} alt="logo trank"/>
            </a>
        </div>
        <div className={"center"}>
            <Search />
        </div>
        <div className={"right"}>
            <CartButton />
        </div>
    </header>;
}

export default Header;