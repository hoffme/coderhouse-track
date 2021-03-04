import { useEffect, useState, createContext } from "react";
import { getAuth, getFirestore } from '../firebase';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);
    const [buys, setBuys] = useState(null);

    const addAddress = async (address) => {
        const userAddress = {...address, user_id: user.uid }
        
        const data = await getFirestore().collection('address').add(userAddress);
        if (!data || !data.id) return undefined;

        setAddress([...address, { ...userAddress, id: data.id }]);
        return data.id;
    }

    const addBuy = async buy => {
        const userBuy = {...buy, user_id: user.uid }
        
        const data = await getFirestore().collection('buy').add(userBuy);
        if (!data || !data.id) return undefined;

        setBuys([...buys, { ...userBuy, id: data.id }]);
        return data.id;
    }

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

            getFirestore()
                .collection('buys')
                .where("user_id", "==", user.uid)
                .get()
                .then(snapshot => {
                    setBuys(snapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() };
                    }));
                })
                .catch(() => setBuys([]));
        });

        return () => {}
    }, []);

    return <UserContext.Provider value={{
        user,
        buys,
        addBuy,
        address,
        addAddress
    }}>
        {children}
    </UserContext.Provider>
};

export default UserContext;
export { UserProvider };