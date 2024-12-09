import React, { useEffect, useState } from "react";
import Header from "../Header";
import { NavLink, useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import CategoryNav from "./CategoryNav";
import axios from "axios";
import Loader from "../Loader";
import { each } from "jquery";
export default function ProjectPage(){
    let [projs,setProjs]=useState([]);

    let fetchProjs=async()=>{
      let d=await axios.get(process.env.REACT_APP_API_URL+'get-projects');

      setProjs(d.data);
    }
  
       let path=useLocation();
    useEffect(()=>{
      fetchProjs();
   
      window.scrollTo(0,0);
    },[path])




    return(<>
        <Header heading="Projects"/>
   

<CategoryNav/>
    <div className="container-fluid p-5 pt-3">
        
       <div className="row">
          {projs &&projs.map((i,index)=>{
  return(<>
  <ProjectCard title={i.title} delay={(index+1)*40} address={i.address} thumbnail={i.tumbnail} date={i.date} details={i.details} client_name={i.client_name} client_mobile={i.client_mobile}  isRated={i.isRated} rating={i.rating} id={i._id} category={i.category}  />

  </>)
})}
       </div>
    </div>
  
    

    
    
    </>)
}