import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assetes/logo.png'
import cart from '../Assetes/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from "../Assetes/dropdown_icon.png"
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalItem}= useContext(ShopContext)
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
    } 
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>sopper</p>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        </div>
        <ul ref={menuRef} className='nav-menu' >
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}  </li>
            <li onClick={()=>{setMenu("men")}} > <Link  style={{textDecoration:'none'}} to='/men'>Men</Link>  {menu==="men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("women")}} > <Link  style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==="women"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}} >  <Link style={{textDecoration:'none'}}   to='/kids'>Kids</Link>  {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'> <button>login</button></Link>}
          
           <Link to='/cart'><img src={cart} alt="" /></Link> 
            <div className='nav-cart-count'>{getTotalItem()}</div>
        </div>
    </div>
  )
}

export default Navbar