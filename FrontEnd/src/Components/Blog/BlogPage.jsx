import React, { useEffect, useState } from "react";
import Header from "../Header";
import BlogCard from "./BlogCard";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
export default function BlogPage(){
    let [info,setInfo]=useState([]);
    let fetchBlogs=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'blog-list');
        if(d.data.length!=0){
         setInfo(d.data);
        }
    }
    let [cats,setCats]=useState([]);
    let fetchCats=async()=>{
     let d=await axios.get(process.env.REACT_APP_API_URL+'blog-cats');
     setCats(d.data);
    }
   
   
       let path=useLocation();
       useEffect(()=>{
       fetchBlogs();
      
        fetchCats();
 window.scrollTo(0,0);   
    },[path])
    return(<>
     <Header heading="Blogs"/>
    
   
    <div className="container-fluid p-5">
        <div className="row">
        <div className="col-md-3 p-2 ps-3 d-block d-md-none">
         
         <div className="btn-group">
<button
 type="button"
 className="btn text-light dropdown-toggle"
 data-bs-toggle="dropdown"
 aria-expanded="false"
 style={{backgroundColor:"#98240d"}}
>
 Category
</button>
<ul className="dropdown-menu">
  {cats && cats.map((i)=>{
             return(<>
            <li className="list-group-item" >  <NavLink
 to={((i.category=='All')?'/blogs':"/blog-cat/"+i.category)}
 className="text-dark lnk"
 
>
{i.category}
</NavLink></li>
             </>)
         })} 
</ul>
</div>

      






         </div>
        <div className="col-md-2 p-2 ps-3 d-none d-md-block">
            <h3>Categories</h3>

            <ul className="list-group">
            {cats && cats.map((i)=>{
                return(<>
               <li className="list-group-item" >  <NavLink
    to={((i.category=='All')?'/blogs':"/blog-cat/"+i.category)}
    className="text-dark lnk"
    
  >
   {i.category}
  </NavLink></li>
                </>)
            })}
  
  
 
 
</ul>
     
 


            </div>
            <div className="col-md-10 p-0">
<div className="row p-0">

            
            {info && info.map((i)=>{
    
        return(
            <BlogCard id={i._id} img={process.env.REACT_APP_IMG+i.image} title={i.title} cata={i.category} writer={i.writer} date={i.date} time={i.time} details={i.details}/>
            )
       
        })}
</div>
            </div>

           
       
      
        </div>
    </div>
   
    </>)
}