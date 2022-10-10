import { createContext, useContext, useEffect, useState} from "react";



export const CartContext = createContext();

const LocalStorageItems = JSON.parse(localStorage.getItem('carrito') || '[]')

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState(LocalStorageItems);

    useEffect(()=> {
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

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

    const cartCuantity = ()=>{
        return cart.reduce((acc, product) =>acc += product.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, product) => acc += product.cantidad * product.price,0)
    }
    return(
        <CartContext.Provider value={{cart, clear, isInCart, addItem, cartCuantity,removeItem, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext)