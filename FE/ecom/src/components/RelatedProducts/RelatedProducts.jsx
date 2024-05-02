import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assetes/data'
import Iteemss from '../items/Iteemss'
const RelatedProducts = () => {
  return (
    <div className='repro'>
        <h1>Related Products</h1>
        <hr />
        <div className="repro-item">
            {data_product.map((item,i)=>{
                return <Iteemss key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts