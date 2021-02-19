import './style.scss';

import { useContext } from "react";
import { Link } from 'react-router-dom';

import CartContext from '../../contexts/cart';

const FinishPurchaseButton = () => {
    const {isEmpty} = useContext(CartContext);

    return <Link to={"/cart/"} className={"button-finish-purchase " + (isEmpty() ? 'disable' : '')}>
        Finalizar Compra
    </Link>
}

export default FinishPurchaseButton;