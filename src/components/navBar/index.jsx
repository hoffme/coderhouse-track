import './style.css';

import logo from '../../assets/logo/logo.png';

const NavBar = () => {
    return <header className={"app-width"}>
        <a className={"logo"} href={"/"}>
            <img src={logo} alt="logo trank"/>
        </a>
        <nav>
            <ul>
                <li><a href={"/combos"}>Combos</a></li>
                <li><a href={"/cervezas"}>Cerverzas</a></li>
                <li><a href={"/vinos"}>Vinos</a></li>
                <li><a href={"/sin-alcohol"}>Sin Alcohol</a></li>
            </ul>
        </nav>
    </header>;
}

export default NavBar;