import React,{useState} from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const[cartOpen,setCartOpen]=useState(false)
    const[login,setLogin]=useState(null)
    const[data,setData]=useState([
        {
          Id:1,
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
            Qty:'0'
        },
        {
          Id:2,
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
            Qty:'0'
        },
        {
          Id:3,
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
            Qty:'0'
        },
        {
          Id:4,
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
            Qty:'0'
        },
      
    ])
    function showCartHandler(){
        if(cartOpen){
          setCartOpen(false)
        }else{
          setCartOpen(true)
        }
    }
    function addItemToCartHandler(id) {
      const addItem=data.filter((item)=>{
        console.log(item);
        if(item.Id===Number(id)){
          return item.Qty=Number(item.Qty)+1
        }
        return item
        
      })
      setData(addItem)
    }
    function removeItemFromCartHandler(id) {
      const addItem=data.filter((item)=>{
        console.log(item);
        if(item.Id===Number(id)){
          return item.Qty='0'
        }
        return item
        
      })
      console.log(addItem)
      setData(addItem)
    }
    function isLoggedInFunctionHandler(token) {
      setLogin(token)
    }
    const cartCtx={
        items:data,
        showCart:showCartHandler,
        openCart:cartOpen,
        addItemToCart:addItemToCartHandler,
        removeItemFromCart:removeItemFromCartHandler,
        isLoggedIn:login,
        isLoggedInFunction:isLoggedInFunctionHandler
    }
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
