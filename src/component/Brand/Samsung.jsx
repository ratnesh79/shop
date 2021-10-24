import { Link } from "@material-ui/core";
import React from "react";
import Data from "../../data/product_list";
import Navbar from "../Navbar";
// import './productlist.css';

const Samsung = () => {
    return <>
    <Navbar></Navbar>
        <div class="grid">
            {Data.samsung.map((value)=>{
               return <div class="row_pro">
                  
                <div class="head_pro">
                    <img src={value.img}
                        alt="image not respond" />
                </div>
                <div class="data_pro">
                    <h2>{value.model}</h2>
                    <span class="span_pro">4GB/64GB</span>
                    <a href="">{value.price} <span class="offrate">29999.00</span></a>
                    <span class="rating">4.3</span>
                    {/* <button class="btn_product"><a href={`/product/${value.id}`}>BUY NOW</a></button> */}
                     
                    <a href={`/product/${value.id}`} className="btn_products">BUY NOW</a>
                </div>
                
            </div>

            })}
            </div>
        </>
}
        export default Samsung;