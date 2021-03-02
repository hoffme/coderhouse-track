import { Link, useLocation } from 'react-router-dom';

import './style.scss';

const NavCart = () => {
    const location = useLocation();

    const routes = [
        {title: "Items", to: "/cart/items/"},
        {title: "Envio", to: "/cart/delivery/"},
        {title: "Pago", to: "/cart/payment/"},
        {title: "Usuario", to: "/cart/user/"},
        {title: "Info", to: "/cart/info/"},
    ]

    const actualIndex = routes.findIndex(route => location.pathname === route.to);

    return <div className={"nav-cart app-width"}>
        <div className={"routes"}>
            {
                routes.map((route, index) => {
                    const style = (index < actualIndex) ? 'active' : (actualIndex === index) ? 'selected' : '';

                    return <Link key={index} to={route.to} className={style}>{route.title}</Link>
                })
            }
        </div>
    </div>
}

export default NavCart;