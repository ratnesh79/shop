import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Data from "./data/product_list";


const PreviousBtn = (props) => {
    console.log(props)
    const { className, onClick } = props;
    return <>
        <div className={className} onClick={onClick}>
            <ArrowBackIos />

        </div>
    </>
}
const NextBtn = (props) => {
    const { className, onClick } = props;
    return <>
        <div className={className} onClick={onClick}>

            <ArrowForwardIos />
        </div>
    </>
}

const MultiCarousel = () => {
    return <>
        <div style={{   }}>
            <Slider
                slidesToShow={3}
                nextArrow={<NextBtn />}
                prevArrow={<PreviousBtn />}
            >

             {Data.product.map((val)=>{
             return  <div class="row_pro">
                    <div class="head_pro">
                        <img src={val.img}
                            alt="image not respond" />
                    </div>
                    <div class="data_pro">
                        <h2>{val.model}</h2>
                        <span class="span_pro">4GB/64GB</span>
                        <a href="">{val.price} <span class="offrate">29999.00</span></a>
                        {/* <span class="rating">4.3</span> */}
                        <div className="link">
                            <a href={`/product/${val.id}`}  >BUY NOW</a>
                        </div>
                       
                     
                    </div>
                </div>
             })}
            </Slider>
        </div>
        <div>
        <div className="heading">
           <h1>TAB/TABLET</h1>
       </div>
            <Slider
                slidesToShow={3}
                nextArrow={<NextBtn />}
                prevArrow={<PreviousBtn />}
            >

             {Data.taplet.map((val)=>{
             return  <div class="row_pro">
                    <div class="head_pro">
                        <img src={val.img}
                            alt="image not respond" />
                    </div>
                    <div class="data_pro">
                        <h2>{val.model}</h2>
                        <span class="span_pro">4GB/64GB</span>
                        <a href="">{val.price} <span class="offrate">29999.00</span></a>
                        <div className="link">
                            <a href={`/product/${val.id}`}  >BUY NOW</a>
                        </div>
                       
                     
                    </div>
                </div>
             })}
            </Slider>
        </div>
    </>
}
export default MultiCarousel;