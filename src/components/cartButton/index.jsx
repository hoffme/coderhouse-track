import './style.scss';

import cartIcon from '../../assets/icons/cart.svg';

import Cart from '../cart';

import { useState } from 'react';

const CartButton = () => {
    const [showCart, setShowCart] = useState(false);

    return <>
        <button onClick={() => setShowCart(!showCart)} className={"button-cart"}>
            <img src={cartIcon} alt={"icon cart"} />
        </button>
        { showCart ? <Cart /> : null }
    </>;
}

export default CartButton;