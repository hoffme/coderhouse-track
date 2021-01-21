import './style.css';

const NavBar = () => {
    return <header>
        <a className={"logo"} href={"/"}>
            <img src="https://i.pinimg.com/originals/fd/5c/22/fd5c22af8d5b84d301de072995443386.png" />
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