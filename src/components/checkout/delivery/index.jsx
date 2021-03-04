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

    const address = [
        { value: '-', disabled: true, title: 'Seleccione una direccion' },
        ...((user.address ? user.address : []).map(address => {
            return {value: address.id, title: address.city + ", " + address.address + " " + address.height};
        })),
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
            title={"Direcciones"}
            value={(delivery && delivery.address) ? (delivery.address.id ? delivery.address.id : '') : '-'}
            onChange={e => {
                const addressSelected = e.currentTarget.value !== '';
                setDelivery({...delivery, address: (addressSelected ? { id: e.currentTarget.value } : {}) });
                setNewAddress(!addressSelected);
            }}
            options={address}
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