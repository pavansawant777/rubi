import React, { useEffect, useState } from "react";

import EnquiryBox from "./EnquiryBox";
import 'aos/dist/aos.css'

import Aos from "aos";
import LinkBtn from "../Other Elements/LinkBtn";
import Categories from "./Categories";
import ServiceCard from "../Services/ServiceCard";
import Serivces from "./Services";
import Projects from "./Projects";

import Slider from "react-slick";
import MySlider from "./MySlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../Blog/BlogCard";
import BlogSection from "./BlogSection";
import ImagesSec from "./ImagesSec";
import axios from "axios";
import Loader from "../Loader";
import Clients from "../Clients";
import Counter from "./Counter";
import ReviewSec from "../ReviewSec";
import { useLocation, useNavigate } from "react-router-dom";
export default function Home(){
let param=useNavigate();
 let path=useLocation();
    useEffect(()=>{
    Aos.init();
  window.scrollTo(0,0);
    },[path]);
    
    return(<>
    
    <div  className="overflow-hidden" style={{overflow:"hidden"}}> <MySlider/>
  
    <ImagesSec/>



<Serivces/>
<Projects/>





<Counter/>
<BlogSection/>
<Clients/>
<ReviewSec/>


 
 

 
  </div>









    </>)
}
