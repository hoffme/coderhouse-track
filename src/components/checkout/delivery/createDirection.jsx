import {useState} from 'react';

import InputField from '../../fields/input';
import SelectField from '../../fields/select';

const CreateDirection = ({onChange}) => {
    const [address, setAddress] = useState({});

    const cities = [
        {value:'', disabled: true, title: 'Seleccione una ciudad'},
        {value:'peh', title:'Pehuajo'}
    ];

    return <div className={"new-address"}>
        <SelectField
            title={"Ciudad"}
            value={address.city ? address.city : ''}
            onChange={e => {
                setAddress({...address, city: e.currentTarget.value});
                onChange({...address, city: e.currentTarget.value});
            }}
            options={cities}
        />
        <InputField
            title={"Calle"}
            value={address.address ? address.address : ''}
            onChange={e => {
                setAddress({...address, address: e.currentTarget.value});
                onChange({...address, address: e.currentTarget.value});
            }}
        />
        <InputField
            title={"Altura"}
            value={address.height ? address.height : ''}
            onChange={e => {
                setAddress({...address, height: e.currentTarget.value});
                onChange({...address, height: e.currentTarget.value});
            }}
        />
        <InputField
            title={"Depto/Numero"}
            value={address.deptoNumber ? address.deptoNumber : ''}
            onChange={e => {
                setAddress({...address, deptoNumber: e.currentTarget.value});
                onChange({...address, deptoNumber: e.currentTarget.value});
            }}
        />
    </div>
}

export default CreateDirection;