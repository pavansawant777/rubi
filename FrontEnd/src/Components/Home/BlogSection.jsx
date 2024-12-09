import React, { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
export default function BlogSection(){
    let [info,setInfo]=useState([]);
    let fetchBlogs=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'blog-list');
        if(d.data.length!=0){
         setInfo(d.data);
        }
    }
 
    useEffect(()=>{
        fetchBlogs();
   
    },[]);
   
    return(<>
    <div className="container-fluid p-4 mt-5">
        <div className="row">
            <div className="col-12 text-center text-justify">
                <h2 style={{color:'#98240d'}}>Ideas & Innovations</h2>
                <font style={{fontSize:"13px",color:'#0c8694'}}>The Ruby Interiors Journal</font>
                

            </div>
            <div className="col-12">
            <NavLink to="/projects" style={{fontSize:"13px"}} className="text-danger float-end text-decoration-none">View All</NavLink>
            </div>
        </div>
    </div>
    <div className="container-fluid p-3 p-lg-3 ">



        <div className="row p-0">
        {info && info.map((i)=>{
       if(i.showHome==true){
        return(
            <BlogCard id={i._id} img={process.env.REACT_APP_IMG+i.image} title={i.title} cata={i.category} writer={i.writer} date={i.date} time={i.time} details={i.details}/>
         )
       }
        })}
            
           
       
        </div>
       

       
    </div>
    </>)
}