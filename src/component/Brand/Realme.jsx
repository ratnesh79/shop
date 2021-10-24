import React from "react";
import Navbar from "../Navbar";
// import './productlist.css';

const Realme = () => {
    return <>
    <Navbar></Navbar>
        <div class="grid">
            <div class="row_pro">
                <div class="head_pro">
                    <img src="https://m.media-amazon.com/images/I/31VEHnJFAIL.jpg"
                        alt="image not respond" />
                </div>
                <div class="data_pro">
                    <h2>Realme GT</h2>
                    <span class="span_pro">4GB/64GB</span>
                    <a href="">28999.00 <span class="offrate">29999.00</span></a>
                    <span class="rating">4.3</span>
                    <a href="">Buy now</a>
                    <button class="btn_product"><a href="">Buy now</a></button>
                </div>
            </div>
        </div>
        </>
}
        export default Realme;