import './style.scss';

import { useContext } from 'react';
import CheckOutContext from '../../../contexts/checkout';

import SectionCheckout from '../section';
import Select from '../../fields/select';

const CartPayment = () => {
    const {payment, setPayment} = useContext(CheckOutContext);

    const methodsPayment = {
        'en-puerta': { title: 'En Puerta', value: 'en-puerta' },
        'mercado-pago': { title: 'Mercado Pago', value: 'mercado-pago' },
    }

    const options = [];
    if (!payment) options.push({value: '', disabled: true, title: 'Seleccione un metodo de pago'});
    Object.values(methodsPayment).map(payment => options.push({ title: payment.title, value: payment.value }));

    return <SectionCheckout className={"cart-payment"} title={"Metodo de Pago"}>
        <Select
            title={'Metodos de pago:'}
            value={payment ? payment : ''} 
            onChange={e => setPayment(e.currentTarget.value)}
            options={options}
        />
    </SectionCheckout>;
}

export default CartPayment;