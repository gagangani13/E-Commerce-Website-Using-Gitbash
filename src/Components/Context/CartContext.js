import { createContext } from 'react'

const CartContext = createContext({
    items:[],
    openCart:false,
    showCart:(item)=>{},
    addItemToCart:(id)=>{},
    removeItemFromCart:(id)=>{}
})

export default CartContext
