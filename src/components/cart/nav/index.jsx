import { useState } from 'react';
import './style.scss';

const NavCart = () => {
    const [message, setMessage] = useState(null);

    const showMessage = (message) => {
        setMessage(message);
        setTimeout(() => setMessage(null), 5000);
    }

    return <div className={"nav-cart"}>
        { (message && message.length > 0) && <div className={"message"}>{message}</div> }
        <div className={"controls"}>
            <button className={"volver"}>Volver</button>
            <button className={"siguiente"} onClick={() => showMessage("hola que tal")}>Sigueinte</button>
        </div>
    </div>
}

export default NavCart;