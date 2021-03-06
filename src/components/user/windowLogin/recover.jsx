import { useContext, useState } from 'react';

import UserContext from '../../../contexts/user';

import InputField from '../../fields/input';

const UserRecover = ({onMessage, onLogin}) => {
    const {recover} = useContext(UserContext);

    const [email, setEmail] = useState("");

    const recoverUser = () => {
        recover()
            .then(() => onMessage("Verifica la casilla de correo"))
            .catch(err => onMessage(err.code));
    }

    return <div className={"section"}>
        <h3>Recuperar Contraseña</h3>
        <InputField
            title={'Correo'}
            type={"text"}
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
        />
        <button className={"button-primary"} onClick={recoverUser}>Recuperar</button>
        <button className={"button-secondary"} onClick={onLogin}>Ingresar</button>
    </div>;
}

export default UserRecover;