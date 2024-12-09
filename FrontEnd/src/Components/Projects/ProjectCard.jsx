import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css'
import $ from "jquery";
import Aos from "aos";
import "aos/dist/aos.css"
export default function ProjectCard(props){
  
    useEffect(()=>{
        Aos.init();
       
    },[])
  
    
    let img=process.env.REACT_APP_IMG+props.thumbnail;
    $(".hover").mouseleave(
        function() {
          $(this).removeClass("hover");
        }
      );
      let printStar=(i)=>{
        if(i==1){
            return (<i class="fa fa-star text-warning"></i> )
        }
        if(i==2){
            return (<><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i></>)
        }
        if(i==3){
            return (<><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i></>)
        }
        if(i==4){
            return (<><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i></>)
        }
        if(i==5){
            return(<><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i><i class="fa fa-star text-warning"></i></>)
        }
   
      }
    return(<>
    
   
        
          
 <div className="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay={props.delay}>
 <figure className="snip1577 rounded border-0">
    <button className="btn shadow text-light proj-cat-box" style={{fontSize:"13px",backgroundColor:"#98240d"}}>{props.category}</button>
    <img
     src={img}
      alt="sample109"
      style={{height:"250px",width:"100%"}}
    />
    <figcaption>
        <h4 className="mb-2">
       { (props.isRated==true)?   printStar(props.rating) :<></>}

        </h4>
        
      <h3>{(props.title.toString().length>20)?props.title.toString().slice(0,20)+'..':props.title}</h3>
   
      <h4  className=" mt-2" style={{color:"#0c8694"}}><span style={{fontSize:"13px"}}><i className="fa fa-location-dot"></i>&nbsp; {props.address}</span></h4>
    </figcaption>
    <NavLink to={'/projects/'+props.id} />
  </figure>
 </div>
 
  


    </>)
}