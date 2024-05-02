import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assetes/dropdown_icon.png'
// import Item from '../components/items/Iteemss'
import Iteemss from '../components/items/Iteemss'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
 <img src={props.banner} alt="" />
 <div className="shopcategory-indexSort">
  <p>

  <span>Showing 1-12</span> out of 36 products
  </p>
  <div className="shopcategory-sort">
    sort by <img src={dropdown_icon} alt="" />
  </div>
 </div>
 <div className="shopcategory-products">
  {all_product.map((items,i)=>{
    if(props.category===items.category){
return <Iteemss key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price = {items.old_price}/>
    } else{
      return null;
    }
  })}
 </div>
 <div className="shopcategory-loadmore">
  Explore More
 </div>
    </div>
  )
}

export default ShopCategory