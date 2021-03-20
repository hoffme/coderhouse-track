import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import WindowButton, { WindowContext } from '../../windowButton';

import UserControl from '../control';
import UserWindowLogin from '../windowLogin';

import userIcon from '../../../assets/icons/usuario.svg';

import './style.scss';

const UserContent = () => {
    const { setOpen } = useContext(WindowContext);
    const { loggedIn } = useContext(UserContext);

    if (!loggedIn) return <UserWindowLogin />;

    return <UserControl onChange={() => setOpen(false)} />
}

const Button = () => {
    return <img src={userIcon} alt={"icon user"} />;
}

const UserButton = () => {
    return <WindowButton className={"button-user"} contentButton={<Button/>} >
        <UserContent />
    </WindowButton>;
}

export default UserButton;