import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import BlogCard from "./BlogCard";

export default function BlogCat(){
    let param=useParams();
    let [info,setInfo]=useState([]);
    let fetchBlogs=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'blog-list/'+param.cata);
        if(d.data.length!=0){
         setInfo(d.data);
        }
    }
    let [count,setCount]=useState(0);
   
    let [cats,setCats]=useState([]);
    let fetchCats=async()=>{
     let d=await axios.get(process.env.REACT_APP_API_URL+'blog-cats');
     setCats(d.data);
    }
   
  
       let path=useLocation();
       useEffect(()=>{
       fetchBlogs();
       window.scrollTo(0,0);
       
        fetchCats();
        },[param.cata])
    
    return(<>
    
    
   
    <Header heading="Blogs"/>
    <div className="container-fluid p-5">
        <div className="row">

        <div className="col-md-2 p-2 ps-3 d-none d-md-block">
            <h3>Categories</h3>

            <ul className="list-group">
            {cats && cats.map((i)=>{
                return(<>
               <li className="list-group-item" >  <NavLink onClick={()=>{setCount(count+1)}}
    to={((i.category=='All')?'/blogs':"/blog-cat/"+i.category)}
    className="text-dark lnk"
    
  >
   {i.category}
  </NavLink></li>
                </>)
            })}
  
  
 
 
</ul>
     
 


            </div>


            <div className="col-md-3 p-2 ps-3 d-block d-md-none">
         
         <div className="btn-group">
<button
 type="button"
 className="btn btn-danger dropdown-toggle"
 data-bs-toggle="dropdown"
 aria-expanded="false"
>
 Category
</button>
<ul className="dropdown-menu">
  {cats && cats.map((i)=>{
             return(<>
            <li className="list-group-item" >  <NavLink
 to={((i.category=='All')?'/blogs':"/blog-cat/"+i.category)}
 className="text-dark lnk"
 onClick={()=>{setCount(count+1)}}
>
{i.category}
</NavLink></li>
             </>)
         })} 
</ul>
</div>
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