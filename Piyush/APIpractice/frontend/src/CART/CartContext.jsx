import React , {createContext, useState} from "react";

export const cartContext = createContext(null);

export const CartContextProvider = (props) =>{
    const [carts , setCarts] = useState([]);
    return (
        <cartContext.Provider value = {{carts , setCarts}}>
            {props.children}
        </cartContext.Provider>
    )
}