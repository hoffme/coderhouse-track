import { useState } from 'react';

import UserLogin from './login';
import UserRecover from './recover';
import UserSingUp from './singup';

import './style.scss';

const UserWindowLogin = () => {
    const [section, setSection] = useState('login');
    const [message, setMessage] = useState(null);

    const showMessage = (message, time = 5000) => {
        setMessage(message);

        new Promise(resolve => {
            const t = setTimeout(() => {
                setMessage(null);
                resolve(t);
            }, time)
        }).then(t => clearTimeout(t));
    }

    return <div className={"window-login"}>
        {
            (section === 'singup') &&
                <UserSingUp 
                    onMessage={showMessage} 
                    onLogin={() => setSection('login')}
                />
        }
        {
            (section === 'recover') &&
                <UserRecover
                    onMessage={showMessage} 
                    onLogin={() => setSection('login')}
                />
        }
        {
            (section === 'login') &&
                <UserLogin
                    onMessage={showMessage} 
                    onRecover={() => setSection('recover')}
                    onSingUp={() => setSection('singup')}
                />
        }
        { message && <div className={"message"}>{message}</div> }
    </div>
}

export default UserWindowLogin;