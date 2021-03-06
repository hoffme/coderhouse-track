import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CartContext from '../../../contexts/cart';

import './style.scss';

const ButtonCheckout = () => {
    const {isEmpty} = useContext(CartContext);
    const history = useHistory();

    return <button
        onClick={() => !isEmpty() && history.push('/checkout/')}
        className={"button-checkout"}
        disabled={isEmpty()}
    >
        Comprar Ya
    </button>
}

export default ButtonCheckout;