import { createElement } from 'react';

import './style.css';

import Slider from 'components/slider';

const ManagmentUI = ({structure = []}) => {
    const components = {
        'slider': Slider
    }

    return structure.reduce((result, data, index) => {
        if (data.type in components) {
            const props = { key: `manui-${data.type}-${index}` };
            
            Object.entries(data.settings).forEach(([name, value]) => {
                props[name] = value;
            })

            return createElement(components[data.type], props)
        }

        return result;
    }, []);
}

export default ManagmentUI;