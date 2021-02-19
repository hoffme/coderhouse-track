import './style.scss';

import { Link } from 'react-router-dom';

import cartIcon from '../../assets/icons/cart.svg';

const CartButton = () => {
    return <>
        <Link to={"/cart/"} className={"button-cart"}>
            <img src={cartIcon} alt={"icon cart"} />
        </Link>
    </>;
}

export default CartButton;