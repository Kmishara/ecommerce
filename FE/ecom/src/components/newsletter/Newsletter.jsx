import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
        <input type="email" name="email" placeholder='your email' id="" />
<button>Subscribe</button>
        </div>
    </div>
    
  )
}

export default Newsletter