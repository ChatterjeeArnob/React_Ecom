import React from 'react'
import './product.css'
const Productlist = ({product,addtoCart}) => {
  return (
    <div className='product'>
      {
        product.map((productItem,productIndex)=>{
            return(
                <div key={productIndex} style={{width: '50%'}}>
                    <div >
                       <img src={productItem.url} width='50%' alt="" />
                        <h2>{productItem.name}</h2>
                        <p>{productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <h4>Rs. {productItem.price}</h4>
                        <button onClick={()=>addtoCart(productItem)}>Add to Cart</button>
                </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Productlist;
