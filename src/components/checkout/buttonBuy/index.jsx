import { useContext, useState } from 'react';

import CheckOutContext from '../../../contexts/checkout';

import './style.scss';

const ButtonBuy = () => {
    const {buy} = useContext(CheckOutContext);

    const [message, setMessage] = useState(null);

    const showMessage = message => {
        setMessage(message)
        const t = setTimeout(() => {
            setMessage(null);
            clearTimeout(t)
        }, 5000);
    }

    const actionBuy = () => {
        if (message) return;

        buy()
            .then(console.log)
            .catch(err => showMessage(err.message));
    }

    return <button
        onClick={actionBuy}
        className={"buttom-buy " + (message && 'message')}
    >
        { message ? message : "Finalizar Compra" }
    </button>
}

export default ButtonBuy;