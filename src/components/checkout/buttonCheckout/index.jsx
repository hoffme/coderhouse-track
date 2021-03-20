import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import CartContext from '../../../contexts/cart';

import './style.scss';

const ButtonCheckout = ({ onClick = () => {} }) => {
    const {isEmpty} = useContext(CartContext);
    const history = useHistory();

    return <button
        onClick={e => {
            history.push('/checkout/');
            onClick(e);
        }}
        className={"button-checkout"}
        disabled={isEmpty()}
    >
        Comprar Ya
    </button>
}

export default ButtonCheckout;