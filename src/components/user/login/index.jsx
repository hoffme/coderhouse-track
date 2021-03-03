import './style.scss';

import { Link } from 'react-router-dom';

import userIcon from '../../../assets/logo/logo.png';
import { useState } from 'react';

const UserLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        
    }

    return <div className={"user-login"}>
        <Link to={"/"}><img src={userIcon} alt={"logo trank"} /></Link>
        <h1>Login</h1>
        <div className={"card"}>
            <form onSubmit={onSubmit}>
                <input type={"text"} placeholder={"Telefono"} onChange={e => setUsername(e.currentTarget.value)} value={username} />
                <input type={"password"} placeholder={"Contraseña"} onChange={e => setPassword(e.currentTarget.value)} value={password} />
                <input type={"submit"} className={"button-login"} value={"Ingresar"} />
            </form>
            <Link className={"button-register"} to={"/user/register"}>Registrar</Link>
            <Link className={"button-recover"} to={"/user/recover"}>Recuperar Contraseña</Link>
        </div>
        <button className={"button-google"}>Ingresa con Google</button>
        <button className={"button-facebook"}>Ingresa con Facebook</button>
    </div>;
}

export default UserLogin;