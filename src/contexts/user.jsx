import { useEffect, useState, createContext } from "react";
import { getAuth, getFirestore, googleAuthProvider } from '../firebase';
import emailValidator from '../utils/emailValidator';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState([]);
    const [buys, setBuys] = useState({});

    const addAddress = async (address) => {
        const userAddress = {...address, user_id: user.uid }
        
        const data = await getFirestore().collection('address').add(userAddress);
        if (!data || !data.id) return undefined;

        setAddress([...address, { ...userAddress, id: data.id }]);
        return data.id;
    }

    const getAddress = id => address.find(addr => addr.id === id);

    const addBuy = async buy => {
        const userBuy = {...buy, user_id: user.uid }
        
        const data = await getFirestore().collection('buy').add(userBuy);
        if (!data || !data.id) return undefined;

        const newBuys = {...buys};
        newBuys[data.id] = { ...userBuy, id: data.id };
        setBuys(newBuys);

        return newBuys[data.id];
    }
    
    const getBuy = id => buys[id];

    useEffect(() => {
        setLoading(true);
        
        getAuth().onAuthStateChanged(async (user) => {
            setUser(user);

            if (!user) return;

            const snapshotAddress = await getFirestore()
                .collection('address')
                .where("user_id", "==", user.uid)
                .get();
            
            if (snapshotAddress) {
                setAddress(snapshotAddress.docs.map(doc => {
                    return { id: doc.id, ...doc.data() };
                }));
            }

            const snapshotBuys = await getFirestore()
                .collection('buy')
                .where("user_id", "==", user.uid)
                .get();
            if (snapshotBuys) {
                const newBuys = {};
                snapshotBuys.docs.forEach(doc => newBuys[doc.id] = { id: doc.id, ...doc.data() })
                setBuys(newBuys);
            }

                
            setLoading(false);
        })

        return () => {}
    }, []);

    const loggedIn = !!user;

    const credentialSingUp = (fullName, email, password) => {
        return new Promise((resolve, reject) => {
            if (!fullName || fullName.length < 3) {
                throw new Error('Nombre invalido');
            }
            if (!email || !emailValidator(email)) {
                throw new Error('Email invalido');
            }
            if (!password || password.length < 8) {
                throw new Error('Contraseña invalida, minimo 8 caracteres');
            }
        
            getAuth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    getAuth()
                        .currentUser
                        .updateProfile({displayName: fullName})
                        .then(resolve)
                        .catch(reject)
                })
                .catch(reject)
        })
    }

    const socialLogin = (provider) => getAuth().signInWithPopup(provider);

    const credentialsLogin = (email, password) => {
        return new Promise((resolve, reject) => {
            if (!email || !emailValidator(email)) {
                reject('Email invalido');
                return;
            }
            if (!password || password.length < 8) {
                reject('Contraseña invalida, minimo 8 caracteres');
                return;
            }
        
            getAuth().signInWithEmailAndPassword(email, password)
                .then(resolve)
                .catch(reject);        
        })
    }

    const logOut = () => getAuth().signOut();

    const googleLogin = () => socialLogin(googleAuthProvider);

    const recoverEmail = email => getAuth().sendPasswordResetEmail(email);

    return <UserContext.Provider value={{
        loading,
        user,
        buys: buys ? Object.values(buys) : [],
        addBuy,
        getBuy,
        address,
        getAddress,
        addAddress,
        loggedIn,
        logOut,
        credentialSingUp,
        credentialsLogin,
        googleLogin,
        recoverEmail
    }}>
        {children}
    </UserContext.Provider>
};

export default UserContext;
export { UserProvider };