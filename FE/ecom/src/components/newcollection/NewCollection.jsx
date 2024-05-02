import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import new_collections from '../Assetes/new_collections'
import Iteemss from '../items/Iteemss'

const NewCollection = () => {
  // const [new_collections, setnew_collections] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:4000/newcollection')
  // .then((response)=>response.json())
  //  .then((data)=>setnew_collections(data));
  // }, [])
  
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((items,i)=>{
                return <Iteemss key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price = {items.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection