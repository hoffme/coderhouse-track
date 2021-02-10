import { Link } from 'react-router-dom';
import './style.scss';

const NavBar = () => {
    return <nav className={"nav-bar app-width"}>
        <ul>
            <li><Link to={"/category/combos"}>Combos</Link></li>
            <li><Link to={"/category/cervezas"}>Cerverzas</Link></li>
            <li><Link to={"/category/vinos"}>Vinos</Link></li>
            <li><Link to={"/category/sin-alcohol"}>Sin Alcohol</Link></li>
        </ul>
    </nav>;
}

export default NavBar;