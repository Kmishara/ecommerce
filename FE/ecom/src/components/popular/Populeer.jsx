import React from 'react'
import Iteemss from '../items/Iteemss'
import './popular.css'
 import data_product from '../Assetes/data'
const Populeer = () => {

  //  const [popular_in_women, setpopular_in_women] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:4000/prodctwomen')
  // .then((response)=>response.json())
  //  .then((data)=>setpopular_in_women(data));
  // }, [])

  return (
    <div>
         <div className='popular'>
        <h1>Popular in Women</h1>
        <hr />
        <div className="popular-item">
            {data_product .
            // popular_in_women.
            map((items,i)=>{
              return <Iteemss key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price = {items.old_price}/>
            })}
        </div>
    </div>
    </div>
  )
}

export default Populeer