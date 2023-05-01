import { createContext } from 'react'

const CartContext = createContext({
    items:[],
    openCart:false,
    showCart:(item)=>{},
    addItemToCart:(id)=>{},
    removeItemFromCart:(id)=>{},
    isLoggedIn:{loggedIn:false,
        token:null},
    isLoggedInFunction:(param)=>{},
    tokenFunction:(token)=>{},
    loadFromCrud:(cart)=>{},
    itemsFromCrud:(params)=>{}
})

export default CartContext
