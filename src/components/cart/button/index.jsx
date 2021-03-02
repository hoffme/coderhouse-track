import './style.scss';

import { Link } from 'react-router-dom';
import { useContext } from "react";

import CartContext from '../../../contexts/cart';

import cartIcon from '../../../assets/icons/cart.svg';

const CartButton = () => {
    const {totalCount} = useContext(CartContext);

    if (totalCount === 0) return <></>

    return <Link to={"/cart/"} className={"button-cart"}>
        Finalizar Compra
    </Link>;
}

export default CartButton;