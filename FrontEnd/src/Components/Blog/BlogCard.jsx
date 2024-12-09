import React, { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import { NavLink } from "react-router-dom";

export default function BlogCard(props){
useEffect(()=>{
    Aos.init();
})
function calTime(inti){
let cur=new Date().getTime();
let s=(cur-inti)/1000;
    let min=s/60;
    let hr=min/60;
    let day=hr/24;
   
 
    let month=day/30;
    let year=month/12;
    if(s<60){
        return `${Math.floor(s)} sec`;
    }
    if(s>60 && min<60){
     return `${Math.floor(min)} min`;
    }
    else if(min>60 && hr<24){
        return `${Math.floor(hr)} hr`;
    }
     else if(hr>24 && day<30){
        return `${Math.floor(day)} days`;    }
     else if(day>30 && month<12){
        return `${Math.floor(month)} months`;
    }
     else if(month>12){
        return `${Math.floor(year)} years`;
    }
 
}
function removeHtmlTagsFromParagraph(paragraph) {
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = paragraph;

  
  return tempDiv.textContent || tempDiv.innerText || '';
}
return(<>
   
   <div className="col-lg-4 col-md-6 p-2">

 
      <div className="card border-0 rounded-4 shadow overflow-hidden" >
        <div className="w-100  overflow-hidden" style={{position:"relative",height:"260px"}}>
        <img
          src={props.img}
          className="w-100 h-100 blog-img"
        />
         <div className=" rounded-pill btn-sm text-light p-2" style={{backgroundColor:"#98240d",position:"absolute",left:"10px",bottom:"10px",fontSize:"14px"}}>{props.cata}</div>
        </div>
       
       
        <div className="card-body">
          <h5 className="card-title mt-2" style={{color:"#98240d"}}>{(props.title.length>30)?`${props.title.toString().slice(0,30)}..`:props.title}</h5>
          <p className="card-text text-justify" style={{fontSize:"14px"}}>
          {removeHtmlTagsFromParagraph(props.details).toString().slice(0,100)+'..'}
          
          <br/>
          <br/>
            <NavLink to={'/blog/'+props.id} style={{}} className="menu_link text-decoration-none mt-5">View more </NavLink>

          </p>
         <div className="w-100">
            <span className="float-start" ><span><i className="fa-regular fa-user " style={{color:"#0c8694"}}></i></span>&nbsp;{props.writer}</span>
            <span className="float-end" ><span><i className="fa-regular fa-clock " style={{color:"#0c8694"}}></i></span>&nbsp;{calTime(props.time)} ago</span>

         </div>
        </div>
      </div>
      </div>
   
  

    </>)
}