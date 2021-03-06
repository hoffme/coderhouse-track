import { useContext, useState } from 'react';

import CheckOutContext from '../../../contexts/checkout';

import './style.scss';

const ButtonBuy = ({onFinishBuy}) => {
    const {user, buy} = useContext(CheckOutContext);

    const [message, setMessage] = useState(null);

    const showMessage = message => {
        setMessage(message)
        const t = setTimeout(() => {
            setMessage(null);
            clearTimeout(t)
        }, 5000);
    }

    const actionBuy = () => {
        buy()
            .then(id => onFinishBuy(user.getBuy(id)))
            .catch(err => showMessage(err.message));
    }

    if (message) {
        return <button className={"button-buy message"}>{message}</button>;
    }

    return <button onClick={actionBuy} className={"buttom-buy"}>
        Finalizar Compra
    </button>
}

export default ButtonBuy;