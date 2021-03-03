import './style.scss';

import { Link, Redirect, useHistory } from 'react-router-dom';

import userIcon from '../../../assets/logo/logo.png';
import { useContext, useState } from 'react';
import UserContext from '../../../contexts/user';
import { getAuth, googleAuthProvider } from '../../../firebase';

const UserSingUp = ({redirectTo = '/'}) => {
    const {user} = useContext(UserContext);
    const history = useHistory();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessasge] = useState("");

    if (user) return <Redirect to={"/user/"} />

    const showMessage = text => {
        setMessasge(text);
        
        new Promise(resolve => {
            const t = setTimeout(() => {
                setMessasge(null);
                resolve(t);
            }, 5000)
        }).then(t => clearTimeout(t));
    }

    const credentialsSingUp = async e => {
        e.preventDefault();

        await getAuth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                getAuth().currentUser.updateProfile({displayName: fullName})
                    .then(() => history.push(redirectTo))
                    .catch(() => showMessage("Estamos fritos, no tienes nombre"))
            })
            .catch(err => {
                if (err.code === 'auth/popup-closed-by-user') {
                    showMessage("El email esta en uso puede ser con google")
                } else {
                    showMessage("Error al ingresar, correo o contraseña invalidos");   
                }
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

    return <div className={"user-sing-up"}>
        <Link to={"/"}><img src={userIcon} alt={"logo trank"} /></Link>
        <h1>Crear Cuenta</h1>
        <div className={"card"}>
            <form onSubmit={credentialsSingUp}>
                <input type={"text"} placeholder={"Nombre Completo"} onChange={e => setFullName(e.currentTarget.value)} value={fullName} />
                <input type={"text"} placeholder={"Correo"} onChange={e => setEmail(e.currentTarget.value)} value={email} />
                <input type={"password"} placeholder={"Contraseña"} onChange={e => setPassword(e.currentTarget.value)} value={password} />
                <input type={"submit"} className={"button-login"} value={"Registrar"} />
            </form>
            <label>
                Ya tienes cuenta? 
                <Link to={"/user/login"}> Ingresa</Link>
            </label>
            
        </div>
        <button className={"button-google"} onClick={() => socialLogin(googleAuthProvider)}>Registrar con Google</button>
        { message && <div className={"message"}>{message}</div> }
    </div>;
}

export default UserSingUp;