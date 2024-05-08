import React from 'react'
import './Navbar.css'
import navlogo from "../../assets/bag.jpg"
const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
      <img src={navlogo} alt="" className='nav-logo' />
        <h1>Admin Pannel</h1>
    </div>
        <hr />
    </>
  )
}

export default Navbar