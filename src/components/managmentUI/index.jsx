import { createElement, lazy, Suspense, useContext } from 'react';

import SettingsContext from '../../contexts/settings';

import './style.css';

const ManagmentUI = ({structure = []}) => {
    const { loading, settings } = useContext(SettingsContext);
    const managmentUISettings = settings?.managment_ui;

    if (loading) return <label>Loading ...</label>;

    const components = managmentUISettings.components.reduce((result, data) => {
        try {
            const component = lazy(() => import('../../' + data.import));
            result[data.type] = component;
        } catch (err) { console.error(err) }
        finally { return result }
    }, {})

    return <Suspense fallback={<label>Loading ...</label>}>
        {
            structure.reduce((result, data, index) => {
                if (data.type in components) {
                    const props = { key: `manui-${data.type}-${index}` };
                    
                    Object.entries(data.settings).forEach(([name, value]) => {
                        props[name] = value;
                    })
        
                    return createElement(components[data.type], props)
                }
        
                return result;
            }, [])
        }
    </Suspense>
}

export default ManagmentUI;