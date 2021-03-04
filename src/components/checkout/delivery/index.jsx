import './style.scss';

import { useState } from 'react';

import SectionCheckout from '../section';
import InputField from '../../fields/input';
import SelectField from '../../fields/select';

const dateInput = (date) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toJSON().slice(0,10);
}

const CreateDirection = ({onChange}) => {
    const [address, setAddress] = useState({});

    const cities = [{value:'peh', title:'Pehuajo'}];

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

const CartDelivery = () => {
    const hours = [
        { value: '1', title: '15:30' }
    ]
    const directions = [
        { value: '1', title: 'Gutierrez 1655, Pehuajo' },
        { value: '-', title: 'Crear Nueva' },
    ]

    const [date, setDate] = useState(dateInput(new Date()));
    const [hour, setHour] = useState('');
    const [address, setAddress] = useState(null);
    const [newAddress, setNewAddress] = useState(directions.length === 1);

    return <SectionCheckout className={"cart-delivery"} title={"Entrega"}>
        <InputField
            title={"Fecha"}
            type={"date"}
            value={date}
            onChange={e => setDate(e.currentTarget.value)}
        />
        <SelectField
            title={"Hora"}
            value={hour}
            onChange={e => setHour(e.currentTarget.value)}
            options={hours}
        />
        <SelectField
            title={"Direcciones"}
            value={address ? address : ''}
            onChange={e => {
                const value = e.currentTarget.value;
                setNewAddress(value === '-');
                setAddress(value);
            }}
            options={directions}
        />
        { newAddress && <CreateDirection onChange={address => setNewAddress(address)} /> }
    </SectionCheckout>;
}

export default CartDelivery;