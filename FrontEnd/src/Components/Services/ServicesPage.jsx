import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Header from "../Header";
import axios from "axios";
import ImagesSec from "../Home/ImagesSec"
import Loader from "../Loader";
import { useLocation } from "react-router-dom";
export default function ServicesPage(){
    let [ser,setSer]=useState([]);
    let fecthService=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'get-services')
    if(d.data.length!=0){
        setSer(d.data);
        
    }

    }

    function Loder(){
        setTimeout(()=>{
      
      document.getElementById('loder').style.display='none';
      document.getElementById('service-page').style.display='block';
        },100)
       }
       let path=useLocation();
    useEffect(()=>{
       
fecthService();
Loder();
window.scrollTo(0,0);
    },[path])
   
    return(<>
     <Header heading="Services & Category"/>
    <div id="service-page">
   <ImagesSec/>
   <div className="container mt-5">
    <div className="row text-center">
        <h2 style={{color:'#98240d'}}>Why we are better ?</h2>
        <font style={{fontSize:"13px",color:"#0c8694"}}>Our Services</font>
    </div>
   </div>
    <div className="container  bg-white mt-5">
        <div className="row">
            {ser&&ser.map((e)=>{
                return(
                    <div className="col-lg-4 p-0">
                    <ServiceCard ico={e.ico} heading={e.title}  link="#"/>
                    </div>
                )
            })}
   
        </div>
    </div>
    </div>
    <div id="loder">
        <Loader/>
    </div>

    </>)
}