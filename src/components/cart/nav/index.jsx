import { useState } from 'react';

import './style.scss';

const NavCart = ({onNext = () => null, onBack = () => null}) => {
    const [message, setMessage] = useState(null);

    const showMessage = text => {
        setMessage(text);
        
        new Promise(resolve => {
            const t = setTimeout(() => {
                setMessage(null);
                resolve(t);
            }, 5000)
        }).then(t => clearTimeout(t));
    }

    const onClick = () => {
        const message = onNext();
        if (message && message.length > 0) showMessage(message)
    }

    return <div className={"nav-cart"}>
        { (message && message.length > 0) && <div className={"message"}>{message}</div> }
        <div className={"controls"}>
            <button className={"volver"} onClick={onBack}>Volver</button>
            <button className={"siguiente"} onClick={onClick}>Sigueinte</button>
        </div>
    </div>
}

export default NavCart;