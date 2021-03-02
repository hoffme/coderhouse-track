import './style.scss';

import { Link } from 'react-router-dom';
import { useContext } from "react";

import CartContext from '../../../contexts/cart';

import cartIcon from '../../../assets/icons/cart.svg';

const CartButton = () => {
    const {totalCount} = useContext(CartContext);

    return <Link to={"/cart/"} className={"button-cart"}>
        <div className={"total-count"}>{(totalCount > 0) && totalCount}</div>
        <img src={cartIcon} alt={"icon cart"} />	
    </Link>;
}

export default CartButton;