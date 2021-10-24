import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../data/product_list'
import MultiCarousel from '../Multicarousel'
 
// import Feature_data from '../data/feature'
 

const Feature = () => {
    return <>
    <div className="main">
        
    </div>
        {/* <div className="heading">
            <h1>TOP BRANDS</h1>

        </div> */}
        <section class="feature_section">

            {/* {Data.feature.map((val) => {
                return <div class="featured" >
                  

                     <Link to="/samsung_product" className="featured_a"> 
                    <h1>Featured Brand</h1>
                    <h4>Sponsored</h4>
                    <div class="feature_img sam">
                        <img src={val.img} alt="" />
                        <div class="feature_title">
                            <h4>{val.model}  </h4>
                            <a href={`/product/${val.id}`}>Shop Now</a>
                        </div>
                    </div>
                    </Link>
                
                </div>
            })} */}
        </section>
        {/* <section>
        <div className="heading">
            <h1>SMARTPHONE</h1>
         
        </div> */}
        
       
        {/* <div class="grid">
            {Data.product.map((value)=>{
                return <div class="row_pro" key={value.id}>
                <div class="head_pro">
                    <img src={value.img}
                        alt="image not respond"/>
                </div>
                <div class="data_pro">
                    <h2>{value.model}</h2>
                    <span class="span_pro">4GB/64GB</span>
                    <a href="">28999.00 <span class="offrate">29999.00</span></a>
                    <span class="rating">4.3</span>
                    
                    <button class="btn_product"><a href="">Buy now</a></button>
                </div>
            </div>
            })}
         </div> */}

        {/* </section> */}

  <div className="heading">
            <h1>TOP BRANDS</h1>

        </div>
        <section class="feature_section">

<Link to="/mi_product" className="featured_a"> 
<div class="featured">
    {/* <h1>Featured Brand</h1>
    <h4>Sponsored</h4> */}
    <div class="feature_img sam">
        <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201907/redmi_note_7_pro_660_070319105703.jpg?size=1200:675"
            alt=""/>
        <div class="feature_title">

            <h4>REDMI | 64MP Quad Cam with OIS</h4>
            <a
                href="https://www.amazon.in/Samsung-Galaxy-Violet-256GB-Storage/dp/B08VB3CMTS/ref=sr_1_1?dchild=1&keywords=a72&qid=1627041918&sr=8-1">Shop
                Now</a>
        </div>
    </div>
</div>
</Link>
<Link to="/iphone" className="featured_a">
 
<div class="featured">
    {/* <h1>Featured Brand</h1>
    <h4>Sponsored</h4> */}
    <div class="feature_img sam">
        <img src="https://images.macrumors.com/article-new/2019/01/iphone11splash-800x403.jpg"
            alt=""/>
        <div class="feature_title">

            <h4>Apple Iphone | 64MP Quad Cam with OIS</h4>
            <a
                href="https://www.amazon.in/Samsung-Galaxy-Violet-256GB-Storage/dp/B08VB3CMTS/ref=sr_1_1?dchild=1&keywords=a72&qid=1627041918&sr=8-1">Shop
                Now</a>
        </div>
    </div>
</div>
</Link>

<Link to="/realme_product" className="featured_a">

 
<div class="featured">
    {/* <h1>Featured Brand</h1>
    <h4>Sponsored</h4> */}
    <div class="feature_img sam">
        <img src="https://i2.wp.com/www.oispice.com/wp-content/uploads/2021/07/Realme-GT-Master.jpg"
            alt=""/>
        <div class="feature_title">

            <h4>REALME | 64MP Quad Cam with OIS</h4>
            <a
                href="https://www.amazon.in/Samsung-Galaxy-Violet-256GB-Storage/dp/B08VB3CMTS/ref=sr_1_1?dchild=1&keywords=a72&qid=1627041918&sr=8-1">Shop
                Now</a>
        </div>
    </div>
</div>
</Link>
<Link to="/samsung_product" className="featured_a">

 
<div class="featured">
    {/* <h1>Featured Brand</h1>
    <h4>Sponsored</h4> */}
    <div class="feature_img sam">
        <img src="https://www.reliancedigital.in/medias/Samsung-A72-Smart-Phone-set1823-20?context=bWFzdGVyfGltYWdlc3wzNjk2OXxpbWFnZS9qcGVnfGltYWdlcy9oODUvaDhmLzk1MDc2MDY1NjA3OTguanBnfDM2ZTE4ZmQ0ZmVhNmY0ZTE1NGIzYmNmODVjOWVkYzMzODgzMzNmYjlkYjgyMjFjMWY2NGFmOGM3Zjc5Yzg1Njg"
            alt=""/>
        <div class="feature_title">

            <h4>Galaxy A72 | 64MP Quad Cam with OIS</h4>
            <a
                href="https://www.amazon.in/Samsung-Galaxy-Violet-256GB-Storage/dp/B08VB3CMTS/ref=sr_1_1?dchild=1&keywords=a72&qid=1627041918&sr=8-1">Shop
                Now</a>
        </div>
    </div>
</div>
</Link>
</section>

<div className="heading">
            <h1>SMARTPHONE</h1>
         
        </div> 
       <MultiCarousel />
       
    </>
}
export default Feature;