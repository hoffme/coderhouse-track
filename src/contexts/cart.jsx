import { createContext, useContext, useState } from 'react';

const defaultCart = { items: {} };

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ cart = defaultCart, children }) => {
    const { items, setItems } = useState(cart.items);

    const addItem = (item, quantity) => {
        if (!items[item.id]) items[item.id] = { item: item, quantity: 0 }; 
        items[item.id].quantity += quantity;
        
        setItems(items);
    }

    const removeItem = (itemId, quantity) => {
        if (!items[itemId]) return;
        if (quantity) items[itemId].quantity -= quantity;
        if (!quantity || items[itemId].quantity <= 0) delete items[itemId];
    
        setItems(items);
    }

    const clearItems = () => {
        items = {};

        setItems(items);
    }

    const itemInCart = (itemID) => items[itemID] !== undefined;

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearItems, itemInCart }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
export { CartProvider, useCartContext };