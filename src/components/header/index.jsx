import './style.scss';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.png';

import Search from '../search';
import CartButton from '../cart/button';
import UserButton from '../user/button';

const Header = () => {
    return <header className={"header app-width"}>
        <div className={"left"}>
            <Link className={"logo"} to={"/"}>
                <img src={logo} alt="logo trank"/>
            </Link>
        </div>
        <div className={"center"}>
            <Search />
        </div>
        <div className={"right"}>
            <CartButton />
            <UserButton />
        </div>
    </header>;
}

export default Header;