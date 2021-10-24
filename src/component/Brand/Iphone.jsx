import React from "react";
import Data from "../../data/product_list";
import Navbar from "../Navbar";
import SearchItem from "../SearchItem";
// import './productlist.css';

const Iphone = () => {
    return <>
    <Navbar></Navbar>
    <div className="box">
        <SearchItem />
        <div class="grid">
            {Data.iphone.map((val)=>{
                return <div class="row_pro">
                <div class="head_pro">
                    <img src={val.img}
                        alt="image not respond" />
                </div>
                <div class="data_pro">
                    <h2>{val.model}</h2>
                    <span class="span_pro">4GB/64GB</span>
                    <a href="">{val.price} <span class="offrate">{val.oldprice}</span></a>
                    <span class="rating">4.3</span>
                    <a href={`/product/${val.id}`} className="btn_products">BUY NOW</a>
                    {/* <a href="">Buy now</a>
                    <button class="btn_product"><a href="">Buy now</a></button> */}
                </div>
            </div>
            })}
        </div>
    </div>
        </>
}
        export default Iphone;