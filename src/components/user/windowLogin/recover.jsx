import { useContext, useState } from 'react';

import UserContext from '../../../contexts/user';

import InputField from '../../fields/input';

const UserRecover = ({onMessage, onLogin}) => {
    const {recoverEmail} = useContext(UserContext);

    const [email, setEmail] = useState("");

    const recover = () => {
        recoverEmail(email)
            .then(() => onMessage("Te hemos enviado un mensaje a tu correo"))
            .catch(() => {
                onMessage("Ups, ha ocurrido un error intentalo devuelta");
            });
    }

    return <div className={"section"}>
        <h3>Recuperar Contraseña</h3>
        <InputField
            title={'Correo'}
            type={"email"}
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
        />
        <button className={"button-primary"} onClick={recover}>Recuperar</button>
        <button className={"button-secondary"} onClick={onLogin}>Ingresar</button>
    </div>;
}

export default UserRecover;