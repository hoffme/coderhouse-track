import './style.scss';

import { Link, Redirect, useHistory } from 'react-router-dom';

import userIcon from '../../../assets/logo/logo.png';
import { useContext, useState } from 'react';
import UserContext from '../../../contexts/user';
import { getAuth, googleAuthProvider } from '../../../firebase';

const UserLogin = ({redirectTo = '/'}) => {
    const {usuario} = useContext(UserContext);
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessasge] = useState("");

    if (usuario) return <Redirect to={"/user/"} />

    const showMessage = text => {
        setMessasge(text);
        
        new Promise(resolve => {
            const t = setTimeout(() => {
                setMessasge(null);
                resolve(t);
            }, 5000)
        }).then(t => clearTimeout(t));
    }

    const credentialsLogin = async e => {
        e.preventDefault();

        await getAuth()
            .signInWithEmailAndPassword(username, password)
            .then(() => history.push(redirectTo))
            .catch(() => {
                showMessage("Error al ingresar, correo o contraseña invalidos");
            });
    }

    const socialLogin = async (provider) => {
        await getAuth()
            .signInWithPopup(provider)
            .then(() => history.push(redirectTo))
            .catch(() => {
                showMessage("A ocurrido un error al ingresar");
            });
    }

    return <div className={"user-login"}>
        <Link to={"/"}><img src={userIcon} alt={"logo trank"} /></Link>
        <h1>Login</h1>
        <div className={"card"}>
            <form onSubmit={credentialsLogin}>
                <input type={"text"} placeholder={"Telefono"} onChange={e => setUsername(e.currentTarget.value)} value={username} />
                <input type={"password"} placeholder={"Contraseña"} onChange={e => setPassword(e.currentTarget.value)} value={password} />
                <input type={"submit"} className={"button-login"} value={"Ingresar"} />
            </form>
            <Link className={"button-register"} to={"/user/register"}>Registrar</Link>
            <Link className={"button-recover"} to={"/user/recover"}>Recuperar Contraseña</Link>
        </div>
        <button className={"button-google"} onClick={() => socialLogin(googleAuthProvider)}>Ingresa con Google</button>
        { message && <div className={"message"}>{message}</div> }
    </div>;
}

export default UserLogin;