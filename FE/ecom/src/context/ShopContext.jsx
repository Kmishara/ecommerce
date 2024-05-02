import React, { createContext, useEffect, useState } from 'react'
import all_product from '../components/Assetes/all_product'
export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] =0;
}
       return cart;
   };

const ShopContextProvider = (props) => {
    //allproduct fetch
//      const [all_product, setall_products] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:4000/allproducts')
//   .then((response)=>response.json())
//    .then((data)=>setall_products(data));

  if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/getcart',{
    method:'POST',
    headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json'
    },
    body:""
})
        .then((response)=>response.json())
         .then((data)=>setcartItems(data));
  }

//   }, [])

    const [cartItems, setcartItems] = useState(getDefaultCart())

    console.log(cartItems);
    const addToCart=(itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     console.log(cartItems) 
    if(localStorage.getItem('auth-token')){
        fetch("http://localhost:4000/addtocart",{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"itemId"
            :itemId}),
        })
.then((response)=>response.json())
.then((data)=>console.log(data));

    }
    
    }
    const removeFromCart=(itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/removefromcart",{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId"
                :itemId}),
            })
    .then((response)=>response.json())
    .then((data)=>console.log(data));
        }   
}
    const addCartItemAmount=()=>{
        let amount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                amount += cartItems[item] * iteminfo.new_price;
            }
        }
        return amount;
    }
    const getTotalItem=()=>{
        let totalitem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                     totalitem += cartItems[item];
            }
        }
        return totalitem;
    }
    const contextValue = {all_product,getTotalItem,cartItems,addToCart,removeFromCart,addCartItemAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;