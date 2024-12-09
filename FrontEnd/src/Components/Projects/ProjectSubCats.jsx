import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import SubCatCard from "./SubCatCard";
import ProjSubCatCard from "./ProjSubCatCard";
export default function ProjectSubCats(){
    let path=useLocation();
    let [imgs,setImgs]=useState([]);
    let param=useParams();
    let fetchImgs=async()=>{
      let d=await axios.get(process.env.REACT_APP_API_URL+'get-sub-cats/'+param.id);
      setImgs(d.data);
    }

    useEffect(()=>{
     fetchImgs();
     window.scrollTo(0,0);
    },[path])
    return(<>
    <Header heading="Project Categories"/>
<div className="container p-5">
    <div className="w-100 text-center">
        <h3 className="text-center " style={{textTransform:"uppercase",color:'#98240d'}}>More in this category</h3>
        <font style={{fontSize:"13px",color:"#0c8694"}}>We got everything you need</font>
    </div>
    <div className="row mt-5 ">
        {imgs && imgs.map((i)=>{
         return( <ProjSubCatCard img={i.image} category={i.category} id={i._id}/>
         )
        })}
    </div>
</div>
    
    </>)
}