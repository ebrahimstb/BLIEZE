import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [items, setItems] = useState([]);

    const addToCart = (name,price,category) =>{
        setItems((prevState) => [...prevState, {name, price, category } ]);
    }

    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
