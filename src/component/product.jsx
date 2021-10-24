import React from 'react'
 

function Product(props){
    return (
        <>
        <div className="card">
   <a href={`/product/${props.val.id}`}>
     <img src={props.val.img} alt="product_image"></img>
   </a>
   <div className="card-body">
     <a href="">
       <h2>{props.val.model}</h2>
        
     </a>
   </div>
 </div>
        </>
    )
}
export default Product;