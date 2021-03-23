import { createElement, Suspense, useContext } from 'react';

import SettingsContext from '../../contexts/settings';
import Loading from '../loading';

import './style.css';

const ManagmentUI = ({structure = []}) => {
    const { loading, components } = useContext(SettingsContext);
    
    if (loading) return <Loading />;

    return <Suspense fallback={<Loading />}>
        {
            structure.reduce((result, data, index) => {
                if (data.type in components) {
                    const props = { key: `manui-${data.type}-${index}` };
                    
                    Object.entries(data.settings).forEach(([name, value]) => {
                        props[name] = value;
                    })
        
                    result.push(createElement(components[data.type], props));
                }
        
                return result;
            }, [])
        }
    </Suspense>
}

export default ManagmentUI;