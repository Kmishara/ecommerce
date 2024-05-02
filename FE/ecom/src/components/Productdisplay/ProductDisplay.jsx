import React from 'react'
import star_dull_icon from '../Assetes/star_dull_icon.png';
import star_icon from '../Assetes/star_icon.png';
import './ProductDisplay.css'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className='productdisplay-right-prices-old'>${product.old_price}</div>
                <div className='productdisplay-right-prices-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet commodi laudantium earum, porro harum nobis aut deserunt consequuntur eaque distinctio obcaecati numquam rem molestias incidunt ipsam veritatis cupiditate quisquam sit placeat rerum. Maiores saepe velit dignissimos tempora?
            </div>
            <div className='productdisplay-right-size'>
                <h1>Selct Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-catrgory'><span>Category:</span> Women,tshirt,crop-top</p>
            <p className='productdisplay-right-catrgory'><span>Tags:</span>Latest,Modern</p>
        </div>
    </div>
  )
}

export default ProductDisplay