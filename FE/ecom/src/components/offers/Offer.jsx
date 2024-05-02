import React from 'react'
import './Offer.css'
import exclusive_image from '../Assetes/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offer'>
        <div className="offers-left">
            <h1>exclusive</h1>
            <h1>offers for u</h1>
            <p>only on best seller</p>
            <button>check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
            
        </div>
    </div>
  )
}

export default Offer