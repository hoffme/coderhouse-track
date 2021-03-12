import { createElement, Suspense, useContext } from 'react';

import SettingsContext from '../../contexts/settings';

import './style.css';

const ManagmentUI = ({structure = []}) => {
    const { loading, components } = useContext(SettingsContext);
    
    if (loading) return <label>Loading ...</label>;

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