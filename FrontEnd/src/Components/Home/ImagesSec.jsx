import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImgCard from "./ImgCard";
import GalleryCard from "../Gallery/GalleryCard";
import CatCard from "./CatCard";
export default function ImagesSec(){
  let [imgs,setImgs]=useState([]);
  let fetchImgs=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'get-main-cats');
    setImgs(d.data);
  }
  useEffect(()=>{
   fetchImgs();
  },[])
    return(<>
  <div className="container-fluid overflow-hidden pt-5 mt-0 mt-md-5 mt-lg-0">
    <div className="row p-3">
        <div className="col-lg-12 text-center">
            <h2 className="  text-center"  style={{fontSize:"30px",fontWeight:"600",color:'#98240d'}}>Our Product & Categories</h2>
            <font style={{fontSize:"13px",color:'#0c8694'}}> we make</font>
        </div>
    </div>
   </div>
    <div className="container overflow-hidden bg-white pb-0  pt-0">
        <div className="row p-0">
        {imgs&&imgs.map((i,index)=>{
                return(
                <CatCard category={i.name} img={i.image} delay={(index+1)*150} id={i._id}/>
                )
              })}

            {/* <div className="col-lg-12 d-none d-md-block">
            <div className="bailey-stripes">
             
 

</div>

            </div> */}
         
        </div>
    </div>
    </>)
}