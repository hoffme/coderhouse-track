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

    if (message) {
        return <button className={"buttom-buy message"}>{message}</button>;
    }

    return <button onClick={() =>{
        buy()
            .then(data => onFinishBuy(data))
            .catch(err => showMessage(err.message));
    }} className={"buttom-buy"}>
        Finalizar Compra
    </button>
}

export default ButtonBuy;