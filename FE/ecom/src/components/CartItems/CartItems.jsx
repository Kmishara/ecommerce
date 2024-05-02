import React, { useContext } from 'react'
import removeicon from "../Assetes/cart_cross_icon.png"
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
const CartItems = () => {
    const {addCartItemAmount,all_product,removeFromCart,cartItems} = useContext(ShopContext);

  return (
    <div className='cart'>
        <div className="cart-main"> 
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return    <div>
                <div className="cart-items-format cart-main ">
                    <img  className='cart-produ' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cart-quan'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cart-pro-img-remove'  src={removeicon} onClick={()=>{removeFromCart(e.id)}}  alt="" />
                </div>
               <hr />
           </div>
            }
            return null;
        })}
        <div className="cart-items-down">
            <div className="cartitems-total">
                <h1>cart total</h1>
                <div className="cart-total-items">
                    <p>subtotal</p>
                    <p>${addCartItemAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-items">
                    <p>Shippinf fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-total-items">
                    <h3>Total</h3>
                    <h3>${addCartItemAmount()}</h3>
                </div>
            <button>Proceed To checkout</button>
            </div>
        <div className="cartitems-promo">
            <p>if u have promo code,enter it here</p>
            <div className="code">
                <input type="text" placeholder='enter code' />
                <button>submit</button>
                </div>
        </div>
</div>
        </div>
  )
}

export default CartItems