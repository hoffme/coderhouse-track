import { createContext, useState } from 'react';

const defaultCart = { items: {} };

const CartContext = createContext();

const CartProvider = ({ cart = defaultCart, children }) => {
    const [items, setItems] = useState(cart.items);

    const addItem = (item, quantity) => {
        const newItems = {...items};

        if (!newItems[item.id]) newItems[item.id] = { item: item, quantity: 0 }; 
        newItems[item.id].quantity += quantity;
        
        setItems(newItems);
    }

    const removeItem = (itemId, quantity = null) => {
        const newItems = {...items};

        if (!newItems[itemId]) return;
        if (quantity) newItems[itemId].quantity -= quantity;
        if (!quantity || newItems[itemId].quantity <= 0) delete newItems[itemId];
    
        setItems(newItems);
    }

    const clearItems = () => setItems({});

    const itemInCart = (itemID) => itemID in items;

    return <CartContext.Provider value={{
        cart: { items: items },
        addItem,
        removeItem,
        clearItems,
        itemInCart
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
export { CartProvider };