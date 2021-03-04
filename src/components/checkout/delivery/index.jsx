import './style.scss';

import { useState, useContext, useEffect } from 'react';

import CheckOutContext from '../../../contexts/checkout';

import SectionCheckout from '../section';
import InputField from '../../fields/input';
import SelectField from '../../fields/select';
import CreateDirection from './createDirection';
import dateInputFormat from '../../../utils/dateInputFormat';

const CartDelivery = () => {
    const {user, delivery, setDelivery} = useContext(CheckOutContext);

    const getHours = date => {
        return {
            '1': {hours: '15', minutes: '30'},
            '2': {hours: '16', minutes: '00'}
        }
    }
    
    const hours = [
        { value: '-', disabled: true, title: 'Seleccione un horario' },
        ...Object.entries(getHours(delivery ? delivery.date : '')).map(([id, data]) => {
            return {value: id, title: data.hours + ":" + data.minutes};
        })
    ]
    if (hours.length === 0) hours.push({ value: '', title: 'No tenemos entrega para esa fecha', disable: true });

    const directions = [
        { value: '-', disabled: true, title: 'Seleccione una direccion' },
        ...Object.entries(user.address).map(([id, data]) => {
            return {value: id, title: data.city + ", " + data.address + " " + data.height};
        }),
        { value: '', title: 'Crear Nueva' }
    ]
    
    const [newAddress, setNewAddress] = useState(delivery && delivery.address && !delivery.address.id);

    useEffect(() => {
        const initialDelivery = delivery ? delivery : {};
        if (initialDelivery.date) return;

        initialDelivery.date = dateInputFormat(new Date());
        setDelivery(initialDelivery);

        return () => {};
    }, [delivery, setDelivery]);

    return <SectionCheckout className={"cart-delivery"} title={"Entrega"}>
        <InputField
            title={"Fecha"}
            type={"date"}
            value={(delivery && delivery.date) ? delivery.date : dateInputFormat(new Date())}
            onChange={e => setDelivery({...delivery, date: e.currentTarget.value})}
        />
        <SelectField
            title={"Hora"}
            value={(delivery && delivery.hour) ? delivery.hour : '-'}
            onChange={e => setDelivery({hour: e.currentTarget.value})}
            options={hours}
        />
        <SelectField
            title={"Direcciones"}
            value={(delivery && delivery.address) ? (delivery.address.id ? delivery.address.id : '') : '-'}
            onChange={e => {
                const addressSelected = e.currentTarget.value !== '';
                setDelivery({...delivery, address: (addressSelected ? { id: e.currentTarget.value } : {}) });
                setNewAddress(!addressSelected);
            }}
            options={directions}
        />
        { newAddress &&
            <CreateDirection
                onChange={address => {
                    setDelivery({...delivery, address: address});
                }}
            />    
        }
    </SectionCheckout>;
}

export default CartDelivery;