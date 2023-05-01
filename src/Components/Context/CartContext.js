import { createContext } from 'react'

const CartContext = createContext({
    items:[],
    openCart:false,
    showCart:(item)=>{},
    addItemToCart:(id)=>{},
    removeItemFromCart:(id)=>{},
    isLoggedIn:null,
    isLoggedInFunction:(token)=>{}
})

export default CartContext
