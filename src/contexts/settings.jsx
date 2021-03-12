import {createContext, useEffect, useState, lazy} from "react";

import {getFirestore} from "../firebase";

const SettingsContext = createContext();

const SettingsProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState({});
    const [components, setComponents] = useState({});

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

                setComponents(Object.entries(settings.managment_ui.components).reduce((result, [type, data]) => {
                    try {
                        const component = lazy(() => import('../' + data.import));
                        result[type] = component;
                    }
                    catch (err) { console.error(err); }
                    finally { return result }
                }, {}));

                setLoading(false);
            });

        return () => {}
    }, [])

    return <SettingsContext.Provider value={{
        settings,
        components,
        loading,
    }}>
        {children}
    </SettingsContext.Provider>
}

export default SettingsContext;
export {SettingsProvider};