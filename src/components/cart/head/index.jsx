import { useLocation } from 'react-router-dom';

import './style.scss';

import CartRoutes from '../../../pages/cart/routes'; 

const HeadCart = () => {
    const location = useLocation();
    const actualIndex = CartRoutes.findIndex(route => location.pathname === route.to);

    return <div className={"head-cart app-width"}>
        <div className={"routes"}>
            {
                CartRoutes.map((route, index) => {
                    const style = (index < actualIndex) ? 'active' : (actualIndex === index) ? 'selected' : '';

                    return <label key={index} to={route.to} className={style}>{route.title}</label>
                })
            }
        </div>
    </div>
}

export default HeadCart;