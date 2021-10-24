import React from 'react'
import Data from '../data/product_list';
import Navbar from './Navbar';
 

function ProductScreen(prop){
    var data = Data.samsung.find((x)=> x.id == prop.match.params.id) || Data.product.find((x)=> x.id == prop.match.params.id) || Data.taplet.find((x)=> x.id == prop.match.params.id);
     
    if(!data){
        return <div>Product Not Found</div>
    }
    return (
     <>
     <Navbar />
     {/* <div className="row">
         <div className="col">
            <img src={data.img} alt="" />
               <h1>{data.model}</h1>
                
               <a href="" className="buy">Pay now</a>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatibus sapiente, minus corporis dicta accusamus animi mollitia quisquam repellendus exercitationem. Debitis hic, fugiat deleniti earum aperiam eaque ad quidem quaerat?</p>             
         </div>
  <div className="col">
      
          <ul>
           <li>Price : ${data.price}</li>
           <li>status : In stock</li>
           <li><button>add to cart</button></li>
          </ul>
      </div>
   
     </div>
     <div class="heading">

<h1>PRODUCT DETAILS</h1>
</div> */}
<main>
<div class="heading">

<h1>PRODUCT DETAILS</h1>
</div>
<div class="container">
    <div class="product_img"> 
    <img src={data.img} alt="" />
    </div>
    <div class="product_price">
        <div class="data_pro">
             <h2>{data.model}</h2> 
            <span class="span_pro">4GB/64GB</span>
            <a href="">{data.price} <span class="offrate">29999.00</span></a>
            <span class="rating">4.3</span>
            <button class="btn_product">BUY NOW</button>
        </div>
    </div>
 
    <div class="detaile">
        <p>
      
Display
6.50-inch (1080x2400)
Processor
Qualcomm Snapdragon 720G
Front Camera
32MP
Rear Camera
64MP + 12MP + 5MP + 5MP
RAM
6GB
Storage
128GB
Battery Capacity
4500mAh
OS
Android 11
        </p>
          {/* <ul>
              <li>4GB RAM | 128GB ROM</li>
              <li>50MP + 2MP + 2MP REAM CAMERA</li>
              <li>8MP FRONT CAMERA</li>
              <li>6.5 inch HD+LCD In-cell Display</li>
              <li>5000 mAh</li>
              <li><a href="">MORE DETAILS</a></li>
              
          </ul> */}
    </div>
    </div>
</main>
     </>
    )
}
export default ProductScreen;