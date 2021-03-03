import { useEffect, useState, createContext } from "react";
import { getAuth } from '../firebase';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getAuth().onAuthStateChanged(user => setUser(user));

        return () => {}
    }, []);

    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
};

export default UserContext;
export { UserProvider };