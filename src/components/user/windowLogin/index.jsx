import { useState } from 'react';

import UserLogin from './login';
import UserRecover from './recover';
import UserSingUp from './singup';

import './style.scss';

const UserWindowLogin = () => {
    const [section, setSection] = useState('login');
    const [message, setMessage] = useState(null);

    const showMessage = (message, time) => {
        setMessage(message);

        new Promise(resolve => {
            const t = setTimeout(() => {
                setMessage(null);
                resolve(t);
            }, time)
        }).then(t => clearTimeout(t));
    }

    const viewSection = () => {
        switch (section) {
            case 'singup': return <UserSingUp
                onMessage={showMessage} 
                onLogin={() => setSection('login')}
            />;
            case 'recover': return <UserRecover
                onMessage={showMessage} 
                onLogin={() => setSection('login')}
            />;
            default: return <UserLogin
                onMessage={showMessage} 
                onRecover={() => setSection('recover')}
                onSingUp={() => setSection('singup')}
            />;
        }
    }

    return <div className={"window-login"}>
        { viewSection() }
        { message && <div className={"message"}>{message}</div> }
    </div>
}

export default UserWindowLogin;