import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Bedcrums from '../components/bedcrums/Bedcrums';
import ProductDisplay from '../components/Productdisplay/ProductDisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Bedcrums product= {product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product