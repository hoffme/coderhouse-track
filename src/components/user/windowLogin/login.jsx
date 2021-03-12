import { useContext, useState } from 'react';

import UserContext from '../../../contexts/user';
import InputField from '../../fields/input';

const UserLogin = ({onSingUp, onRecover, onMessage}) => {
    const {credentialsLogin, googleLogin} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    

    const login = () => {
        credentialsLogin(email, password)
            .catch(err => onMessage(err));
    }

    return <div className={"section"}>
        <h3>Ingresar</h3>
        <InputField
            title={'Correo'}
            type={"text"}
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
        />
        <InputField
            title={'Contraseña'}
            type={"password"}
            onChange={e => setPassword(e.currentTarget.value)}
            value={password}
        />
        <button className={"button-primary"} onClick={login}>Ingresar</button>
        <button className={"button-secondary"} onClick={onSingUp}>Registrar</button>
        <button className={"button-terceary"} onClick={onRecover}>Recuperar Contraseña</button>
        <button className={"button-google"} onClick={googleLogin}>Ingresa con Google</button>
    </div>;
}

export default UserLogin;