import { useContext, useState } from 'react';

import UserContext from '../../../contexts/user';
import InputField from '../../fields/input';

const UserSingUp = ({onLogin, onMessage}) => {
    const {credentialSingUp, googleLogin} = useContext(UserContext);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();

        credentialSingUp(fullName, email, password)
            .catch(err => {
                if (err.code === 'auth/popup-closed-by-user') {
                    onMessage("El email esta en uso puede ser con google")
                } else {
                    onMessage("Error al ingresar, correo o contraseña invalidos");   
                }
            })
    }

    return <div className={"section"}>
        <h3>Registrar</h3>
        <InputField
            title={"Nombre Completo"}
            type={"text"}
            onChange={e => setFullName(e.currentTarget.value)}
            value={fullName}
        />
        <InputField
            title={"Correo"}
            type={"email"}
            onChange={e => setEmail(e.currentTarget.value)}
            value={email}
        />
        <InputField
            title={"Contraseña"}
            type={"password"}
            onChange={e => setPassword(e.currentTarget.value)}
            value={password}
        />
        <button className={"button-primary"} onClick={register} >Registrar</button>
        <button className={"button-secondary"} onClick={onLogin}>Ingresa</button>
        <button className={"button-google"} onClick={googleLogin}>Registrar con Google</button>
    </div>;
}

export default UserSingUp;