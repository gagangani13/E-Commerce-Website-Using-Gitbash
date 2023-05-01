import React,{useState} from 'react'
import CartContext from './CartContext'
import axios from 'axios'

const CartProvider = (props) => {
    const[cartOpen,setCartOpen]=useState(false)
    const[login,setLogin]=useState(false)
    const[tokenId,setTokenId]=useState(null)
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
      setData(addItem)
      localStorage.setItem('Cart',JSON.stringify(addItem))
    }
    function removeItemFromCartHandler(id) {
      const removeItem=data.filter((item)=>{
        if(item.Id===Number(id)){
          return item.Qty='0'
        }
        return item
        
      })
      setData(removeItem)
      localStorage.setItem('Cart',JSON.stringify(removeItem))
    }
    async function crudcrud(cart) {
      const storage=await axios.get(`https://crudcrud.com/api/917fdde18c934ece8599c8be8f5a27a3/${tokenId}`)
      console.log(storage.data.length)
      try{
        if(storage.data.length===0){
          const response=await axios.post(`https://crudcrud.com/api/917fdde18c934ece8599c8be8f5a27a3/${tokenId}`,{cart})
          try {
            console.log(response.data)
            localStorage.setItem('CrudID',response.data._id)
          } catch (error) {
            console.log('error');
          }
        }
        else{
          const response=await axios.get(`https://crudcrud.com/api/917fdde18c934ece8599c8be8f5a27a3/${tokenId}`)
          try{
            const Key=await response.data[0]._id
            console.log(Key);
            const update=await axios.put(`https://crudcrud.com/api/917fdde18c934ece8599c8be8f5a27a3/${tokenId}/${Key}`,{cart})
            try {
              console.log(response.data)
              localStorage.setItem('CrudID',update.data._id)
            } catch (error) {
              console.log('error');
            }
          }catch{
            console.log('error in storage')
          }

        }
      }catch{
        const response=await axios.post(`https://crudcrud.com/api/917fdde18c934ece8599c8be8f5a27a3/${tokenId}`,{cart})
            try {
              console.log(response.data)
              localStorage.setItem('CrudID',response.data._id)
            } catch (error) {
              console.log('error in storage catch ');
            }
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
