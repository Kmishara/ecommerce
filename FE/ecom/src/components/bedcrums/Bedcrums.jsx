import React from 'react'
import './Bedcrums.css'
import arrow_icon from '../Assetes/breadcrum_arrow.png'
const Bedcrums = (props) => {
    const {product} = props;
  return (
    <div className='bedcrums'>
        HOME <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Bedcrums