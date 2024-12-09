import React, { useEffect, useState } from "react";
import ServiceCard from "../Services/ServiceCard";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Serivces(){
  let [service,setService]=useState([]);
  let fetchServices=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'get-services');
    if(d.data.length!=0){
setService(d.data);
    }
  }


  var settings = {
    autoplay: true,
  autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    navigation:true,
    responsive: [
      {
        breakpoint: 1024,  // Tablet size
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,  // Mobile portrait size
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    fetchServices();

  },[]);
let nav=useNavigate();

    return(<>
   


 <div >

 
 <div className="container-fluid overflow-hidden p-5  mt-5" style={{cursor:"pointer"}} onClick={()=>{nav('/services')}}>
  <div className="row">
    <div className="col-lg-3 text-center pt-3">
    <h1><span className="  " style={{fontSize:"60px",textTransform:"uppercase",fontWeight:"400",color:"#98240d"}} >Why</span>
            <br/>
         <span style={{fontWeight:"400",fontSize:"30px",color:'#0c8694'}} >choose us ?</span>   
            </h1>
    </div>
    <div className="col-lg-9">
    <Slider {...settings}>
    {service && service.map((d)=>{
      return(
      (d.atHome==true)?
      <ServiceCard ico={d.ico} heading={d.title} details={d.details}/>:
      '')
    })}

    </Slider>
    </div>
    
    

  </div>
 </div>
 </div>

    </>)
}