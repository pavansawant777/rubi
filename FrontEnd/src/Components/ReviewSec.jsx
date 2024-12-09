import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import axios from "axios";
export default function ReviewSec(){
  let [r,setR]=useState([]);
  let fetchData=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'get-reviews');
    setR(d.data);
  }
    var settings = {
        autoplay: true,
      autoplaySpeed: 3000,
        dots: false,
        
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        navigation:true,
        responsive: [
            {
              breakpoint: 1024,  // Tablet size
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,  // Mobile portrait size
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,  // Mobile landscape size
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        
      
        
        
      };
      useEffect(()=>{
     fetchData();
      },[])
   
    return(<>
    <div className="container-fluid p-5 pt-0 overflow-hidden">
        <div className="row text-center">
            
        <div className="col-lg-12 text-center   ">
            <h2  className="" style={{color:'#98240d'}}>Testimonials</h2>
        <font className=" " style={{fontSize:"14px",color:"#0c8694"}}>See what our client say's...</font>
        </div>
        <div className="col-lg-12 mt-5 ">

        <Slider {...settings}>
        {r && r.map((i)=>{
            return(
            <ReviewCard name={i.name} det={i.details} star={i.stars} img={i.image} />
            
            )
          })}
            
        
            </Slider>
           
        </div>
        </div>


        <div className="row mt-5">
        
               
            
        
        </div>
    </div>
    
    
    </>)
}