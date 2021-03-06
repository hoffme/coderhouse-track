import { useState, useEffect } from "react";

import './style.scss';

const WindowButton = ({contentButton, children, className = ''}) => {
    const [open, setOpen] = useState(false);
     
    useEffect(() => {
        const closeWindow = () => open && setOpen(false);
        window.addEventListener('click', closeWindow);
        return () => {
            window.removeEventListener('click', closeWindow)
        }
    }, [open, setOpen]);

    return <div className={"window-button " + className}>
        <button className="button" onClick={() => setOpen(!open)}>{contentButton}</button>
        { open && <div onClick={e => e.stopPropagation()} className={"window"}>{children}</div> }
    </div>
}

export default WindowButton;