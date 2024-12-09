import React, {useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import $ from 'jquery'
import 'aos/dist/aos.css';

import axios from "axios";
import Aos from "aos";
export default function Navbar(){
  let [comp,setComp]=useState();
  let nav=useNavigate();
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "white");
      $("#bars").removeClass("text-light");
      $("#bars").addClass("text-dark");
      $("#scroll-btn").css("display","block");

     
      $(".nav-link").css("color","black");
      
    }

    else{
      $(".navbar").css("background" , "");  
     $("#scroll-btn").css("display","none");
      $("#bars").css("color","white");
      $("#bars").addClass("text-light");
      $("#bars").removeClass("text-dark");
      $(".nav-link").css("color","white");
    }
  })

   let fetchCompData=async()=>{
    let d= await axios.get(process.env.REACT_APP_API_URL+'get-company-info')

  
    if(d.length!=0){
     setComp(d.data);
   }
   }
function scrollToTop(){
  window.scrollTo(0,0);
}


   let [cats,setCats]=useState([]);
   let fetchCats=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'get-main-cats');
    setCats(d.data);
   }
let path=useLocation();

useEffect(()=>{
  fetchCompData();
  Aos.init();
  fetchCats();
},[])
  function changeAct(ele){
    document.getElementById(ele).classList.add("act");
  }
    return(<>
    {/* <a id="s" onClick={()=>{console.log('hello')}} style={{position:"absolute",right:"25px",bottom:"20px",zIndex:"99999999999999"}} className="btn btn-danger"><i className="fa fa-arrow-up"></i></a> */}
  
  
  
   <div   className="overflow-hidden" style={{position:'fixed',bottom:"0px",right:"0px",width:"70px",zIndex:"99999999999",height:"380px"}}>
<div data-aos="fade-up"  data-aos-delay="600" className="w-100">
<NavLink to={`https://wa.me/${comp && comp.whatsapp}?text=hello`}> <button className="btn   mb-3 fs-5  btn-success" style={{borderRadius:"50%"}}><i className="fa fa-whatsapp"></i></button>
</NavLink>
</div>
<div data-aos="fade-up"  data-aos-delay="750" className="w-100">
   <NavLink data-aos="flip-left" to={comp && comp.facebook}> <button className="btn   fs-5 mb-3 btn-primary" style={{borderRadius:"50%"}}><i className="fa-brands fa-facebook-square"></i></button>
   </NavLink>
   </div>
   <div data-aos="fade-up"  data-aos-delay="850" className="w-100">
   <NavLink data-aos="flip-left" to={comp && comp.instagram}> <button className="btn   fs-5 mb-3  btn-danger" style={{borderRadius:"50%"}}><i className="fa fa-instagram"></i></button>
   </NavLink>
   </div>
   <div data-aos="fade-up"  data-aos-delay="950" className="w-100">
   <NavLink data-aos="flip-left" to={comp && comp.youtube}> <button className="btn   fs-5  mb-3 pe-2 bg-light text-danger" style={{borderRadius:"50%"}}><i className="fa fa-youtube"></i></button>
   </NavLink>
   </div>
   <div data-aos="fade-up"  data-aos-delay="1050"  className="w-100">
<NavLink to={`tel:${comp && comp.whatsapp}`}> <button className="btn   mb-3 fs-5  btn-success" style={{borderRadius:"50%"}}><i className="fa fa-phone"></i></button>
</NavLink>
</div>
<div   style={{position:"fixed",bottom:"0px"}}  id="scroll-btn"  className="w-100">
<button onClick={()=>{window.scrollTo(0,0)}} style={{borderRadius:"50%",padding:"10px 16px",backgroundColor:"#98240d"}} className="btn text-light  mb-3  "> <i className="fa fa-arrow-up"></i>
</button>
</div>
   </div>
   
    <div className="container-fluid overflow-hidden"  id="menu">
        <div className="row">
        
            <div className="col-lg-12 ">
 




  <nav className="navbar  fixed-top navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <div className="w-100 text-center ">
      <img src="./l3.jpg"  id="logo-img" style={{scale:"0.8"}}  className="w-100 rounded"/>
      
      </div>
    </NavLink>
    <button
      className="navbar-toggler "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fa fa-bars" id="bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mx-auto ">
      <li className="nav-item">
          <NavLink onClick={()=>{changeAct("home")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/" id="home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink onClick={()=>{changeAct("about")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/about" id="about">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink onClick={()=>{changeAct("service")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/services" id="service">
            Services
          </NavLink>
        </li>
        <li className="nav-item dropdown">
  <button
   onClick={(e)=>{changeAct("project")}} className="nav-link ms-0  ms-lg-3 dropdown-toggle  dropdownbtn"
   id="project"
 
  >
    Projects
  </button>
  <ul className="dropdown-content">
    {
cats && cats.map((i)=>{
 return (<li style={{fontSize:"14px"}}>
  <NavLink className="" to={'/projectes_sub_cats/'+i._id}>
    
    {i.name}


  </NavLink>
</li>) 
})

    }
    
 
    
  </ul>
</li>

{/* 
        <li className="nav-item">
        <NavLink className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/projects">
            Projects
          </NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink onClick={(e)=>{changeAct("blog")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/blogs" id="blog">
            Blogs
            
          </NavLink>
        </li>
        <li className="nav-item">
          
        <NavLink onClick={(e)=>{changeAct("gal")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/gallery" id="gal">
            Gallery
            
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink onClick={(e)=>{changeAct("certi")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/certification" id="certi">
            Certificates
            
          </NavLink>
          </li>
        <li className="nav-item">
        <NavLink onClick={(e)=>{changeAct("cont")}} className="nav-link ms-0  ms-lg-3 " aria-current="page" to="/contact" id="cont">
            Contact Us
            
          </NavLink>
          </li>
      </ul>
      <button className="btn mb-2 enq-button btn-sm fw-bold  rounded  "  onClick={()=>{
        nav('/enquiry');
      }} style={{width:"180px"}}>
      Enquire Now
        </button>
    </div>
  </div>
</nav>

  

            </div>
            
        </div>
    </div>
    
    </>)
}