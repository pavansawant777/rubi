import React, { useEffect, useState } from "react";
import ProjectCard from "../Projects/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";

export default function Projects(){
  let [projs,setProjs]=useState([]);
  let fetchProjs=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'get-projects-home');
    
    setProjs(d.data);
  }
  function Loder(){
    setTimeout(()=>{
  
  document.getElementById('loder-2').style.display='none';
  document.getElementById('project-page').style.display='block';
    },500)
   }
  useEffect(()=>{
    fetchProjs();
    Loder();
  },[])
    var settings = {
        autoplay: true,
      autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        navigation:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
        
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        
      };
    return(<>
    <div className="container-fluid overflow-hidden mt-5 mb-3  pb-0">
        <div className="row">
            <div className="col-12 text-center p-0">
                <h2 style={{color:'#98240d'}}>Our Recent Projects</h2>
                <font style={{fontSize:"13px",color:'#0c8694'}}>Ruby's Signature Creations</font>
              
            </div>
            <div className="col-12">
            <NavLink to="/projects" className="text-danger float-end text-decoration-none" style={{fontSize:"13px"}}>View All</NavLink>
            </div>
        </div>
    </div>
    <div className="container-fluid overflow-hidden p-5">
      <div id="project-page">

        <div className="row p-0">
        {projs &&projs.map((i,index)=>{
  return(<>
  {(i.showHome==true)?<><ProjectCard address={i.address} title={i.title} delay={(index+1)*100} thumbnail={i.tumbnail} date={i.date} details={i.details} client_name={i.client_name} client_mobile={i.client_mobile}  isRated={i.isRated} rating={i.rating} id={i._id} category={i.category}  />
</>:<></>}
  
  </>)
})}

       
      
       
 
        </div>
      </div>
      <div id="loder-2">
        <Loader/>
      </div>

    </div>
  

    </>)
}