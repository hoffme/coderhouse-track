import {createContext, useEffect, useState} from "react";

import {getFirestore} from "../firebase";

const SettingsContext = createContext();

const SettingsProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        getFirestore()
            .collection('settings')
            .get()
            .catch(console.error)
            .then(snapshot => {
                const settings = {};
                snapshot.docs.forEach(doc => {
                    settings[doc.id] = doc.data();
                });

                setSettings(settings);
                setLoading(false);
            });

        return () => {}
    }, [])

    return <SettingsContext.Provider value={{
        settings,
        loading,
    }}>
        {children}
    </SettingsContext.Provider>
}

export default SettingsContext;
export {SettingsProvider};