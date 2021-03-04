import { useEffect, useState, createContext } from "react";
import { getAuth, getFirestore } from '../firebase';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        getAuth().onAuthStateChanged(user => {
            setUser(user);

            getFirestore()
                .collection('address')
                .where("user_id", "==", user.uid)
                .get()
                .then(snapshot => {
                    setAddress(snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() };
                    }));
                })
                .catch(() => setAddress([]));
        });

        return () => {}
    }, []);

    return <UserContext.Provider value={{
        user,
        address
    }}>
        {children}
    </UserContext.Provider>
};

export default UserContext;
export { UserProvider };