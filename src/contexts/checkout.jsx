import { useState, createContext, useContext } from "react";
import UserContext from "./user";
import CartContext from "./cart";

const CheckOutContext = createContext();

const CheckOutProvider = ({ children }) => {
    const user = useContext(UserContext);
    const cart = useContext(CartContext);
    const [delivery, setDelivery] = useState(null);
    const [payment, setPayment] = useState(null);

    const buy = () => new Promise((resolve, reject) => reject("Todo mal"));

    return <CheckOutContext.Provider value={{
        cart,
        user,
        delivery,
        setDelivery,
        payment,
        setPayment,
        buy
    }}>
        {children}
    </CheckOutContext.Provider>
};

export default CheckOutContext;
export { CheckOutProvider };