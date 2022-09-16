import { createContext, useContext, useState} from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([]);

    const addItem =(item)=>{
       const inCart = cart.find((product)=> product.id === item.id)
        if(inCart){
            inCart.cantidad = inCart.cantidad + item.cantidad;

            setCart([...cart])
        } else{
           setCart([...cart,item]) 
        }
        
    }

    const clear =()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((product)=> product.id !== id ))
    }

    const isInCart = (id)=>{
        return cart.some((product)=> product.id === id)
    }

    return(
        <CartContext.Provider value={{cart, clear, isInCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext)