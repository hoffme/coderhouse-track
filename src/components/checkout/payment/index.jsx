import './style.scss';

import CheckOutContext from '../../../contexts/checkout';

import SectionCheckout from '../section';
import { useContext } from 'react';

const CartPayment = () => {
    const {payment, setPayment} = useContext(CheckOutContext);

    const methodsPayment = {
        'en-puerta': { title: 'En Puerta', value: 'en-puerta', description: 'pago efectivo al momento de entregar el pedido' },
        'mercado-pago': { title: 'Mercado Pago', value: 'mercado-pago', description: 'pago con targetas aceptadas por mercado pago (debito/credito)' },
    }

    return <SectionCheckout className={"cart-payment"} title={"Metodo de Pago"}>
        <select 
            value={payment ? payment.value : ''} 
            onChange={e => setPayment(methodsPayment[e.currentTarget.value])} >
            {
                !payment && <option value={''} disabled >Seleccione un metodo de pago</option>
            }
            {
                Object.values(methodsPayment).map((payment, index) => { 
                    return <option key={index} value={payment.value}>{payment.title}</option>
                })
            }
        </select>
        { payment && <div className={"description"}>{payment.description}</div> }
    </SectionCheckout>;
}

export default CartPayment;