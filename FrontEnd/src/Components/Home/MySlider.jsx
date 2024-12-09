import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import {useTypewriter,Cursor, Typewriter } from "react-simple-typewriter";


export default function MySlider(){
  let [comp,setComp]=useState();
  let [slider,setSlider]=useState([]);
  let [title,setTitle]=useState([]);
  let fetchSlider=async()=>{
   let d=await axios.get(process.env.REACT_APP_API_URL+"get-slider");
   setSlider(d.data);
   for(let s of slider){
    title.push(s.title);
   }
  }
  function removeHTMLTags(str) {
        
    return str.replace(/<[^>]*>/g, '');
}
  let fetchCompData=async()=>{
   let d= await axios.get(process.env.REACT_APP_API_URL+'get-company-info')
    setComp(d.data);
  }
    useEffect(()=>{
      Aos.init();
      fetchCompData();
fetchSlider();
    },[])
    var settings = {
      autoplay: true,
    autoplaySpeed: 3000,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      navigation:true,
      fade: true,
    
      
      
    };
   
   
    
 
    let nav=useNavigate();
  
    const [typeEffect]=useTypewriter({
      words:[
        "Furnitures","Steel Railing","Glass Railing","Kitchen Trollies",
      ],
     loop:{},
      typeSpeed:90,
      deleteSpeed:60,
  
    }) 
    return(<>

    <div className="container-fluid overflow-hidden d-none d-md-block " style={{height:'730px'}} id="slider-box">
        <div className="row h-100" >
            <div className="col-lg-12 p-0 overflow-hidden h-100"  >
           
 <Slider style={{height:"100%"}}   {...settings}>
  {slider && slider.map((i)=>{
    return(<div className="h-100">
      <img src={process.env.REACT_APP_IMG+i.image} className="d-block" style={{width:'100%',height:"730px"}} alt="..." />
      </div>)
  })}
        


      
    
           
          
            </Slider>
            



            
            </div>
        </div>
        <div className="slider-cover-xl">
          <div className="row justify-content-center aling-item-center">
            <div className="col-lg-5 text-center" >
               <h5 className="text-light home-heading" style={{marginTop:"50%"}}>We Make</h5>
       

<h1 style={{fontSize:"50px",fontWeight:"bold"}}>
<p style={{color:"White",textTransform:"uppercase",fontFamily: "serif"}}>{typeEffect}</p>

   
   </h1>

  
          
            </div>
          </div>
        </div>
    </div>





    <div className="container-fluid overflow-hidden d-block d-md-none" >
    <div className="row h-100" >
            <div className="col-lg-12 p-0 overflow-hidden h-100"  >
           
 <Slider style={{height:"100%"}}   {...settings}>
            <div className="h-100">
            <img src="slider6.png" className="d-block" style={{width:'100%',height:"300px"}} alt="..." />
            </div>
            <div className="h-100">
            <img src="slider3.png" className="d-block" style={{width:'100%',height:"300px"}} alt="..." />
            </div>
            <div className="h-100">
            <img src="slider5.png" className="d-block" style={{width:'100%',height:"300px"}} alt="..." />
            </div>


      
    
           
          
            </Slider>
            



            
            </div>
        </div>
        <div className="slider-cover-sm">
          <div className="row justify-content-center aling-item-center">
            <div className="col-lg-5 text-center" >
               <h5 className="text-light home-heading" style={{marginTop:"30%"}}>We Make</h5>
      

<h1 style={{fontSize:"30px"}}>
<p style={{color:"White",textTransform:"uppercase",fontFamily: "serif"}}>{typeEffect}</p>

   
   </h1>

  
          
            </div>
          </div>
        </div>
     
    </div>
    </>)
}