import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Data from '../data/product_list';
import Product from './product';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

function HomeScreen(){
  const [products,setproducts]=useState([])
  const [loading,setloading]=useState(false)
  const [err,seterr]=useState(false)
  useEffect(()=>{
    const fetchdata= async()=>{
    try{
      setloading(true)
        const {data}=await axios.get("/api/products")
       setproducts(data)
       setloading(false)
      } catch(err){
        seterr(err.message)
        setloading(false)
      };
    }
          fetchdata();
  },[])
    return (
     <>
     {loading?(<LoadingBox></LoadingBox>)
     :err?(
     <MessageBox variant="danger">{err}</MessageBox>
     ):(
     <div className="row center">
     {
       products.map((val)=>{
         return  <Product key={val.id} val={val}/>
       })
     }
   </div>
     )}
 
     </>
    )
}
export default HomeScreen;