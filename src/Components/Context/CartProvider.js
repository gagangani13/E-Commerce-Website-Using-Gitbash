import React,{useState} from 'react'
import CartContext from './CartContext'


const CartProvider = (props) => {
    const[cartOpen,setCartOpen]=useState(false)
    const[tokenId,setTokenId]=useState(null)
    const[login,setLogin]=useState(false)
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
        if(item.Id===Number(id)){
          return item.Qty=Number(item.Qty)+1
        }
        return item
      })
      updateCart(addItem)
    }
    function removeItemFromCartHandler(id) {
      const removeItem=data.filter((item)=>{
        if(item.Id===Number(id)){
          return item.Qty='0'
        }
        return item
      })
      updateCart(removeItem)
    }
    async function updateCart(items) {
      const response=await fetch(`https://e-commerce-website-91f3e-default-rtdb.firebaseio.com/${tokenId}.json`,{
        method:'PUT',
        body:JSON.stringify(items)
      })
      const data=await response.json()
      try {
        if (!response.ok) {
          throw new Error()
        }
        console.log(data);
        setData(items)
        localStorage.setItem('Cart',JSON.stringify(items))

      } catch (error) {
        alert('Failed to update cart')
      }
    }
    async function crudcrud() {
      const response=await fetch(`https://e-commerce-website-91f3e-default-rtdb.firebaseio.com/${localStorage.getItem('Token')}.json`)
      const data=await response.json()
      try {
        if (!response.ok) {
          throw new Error()
        }
        console.log(data);
        data&&setData(data)
        localStorage.setItem('Cart',JSON.stringify(data))

      } catch (error) {
        console.log(error);
      }
    }
    function isLoggedInFunctionHandler(param) {
      setLogin(param)
    }
    function tokenHandler(params) {
      setTokenId(params)
    }
    function itemsHandler(params){
      setData(params)
    }
    const cartCtx={
        items:data,
        showCart:showCartHandler,
        openCart:cartOpen,
        addItemToCart:addItemToCartHandler,
        removeItemFromCart:removeItemFromCartHandler,
        isLoggedIn:{
          loggedIn:login,
          token:tokenId
        },
        isLoggedInFunction:isLoggedInFunctionHandler,
        tokenFunction:tokenHandler,
        loadFromCrud:crudcrud,
        itemsFromCrud:itemsHandler
    }
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
