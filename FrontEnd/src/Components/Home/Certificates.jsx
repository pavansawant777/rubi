import React, { useEffect, useState } from "react";
import Header from "../Header";
import CertificateCard from "./CertificateCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function Certificates(){
    let [certi,setCerti]=useState([]);
    let fetchData=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+"get-certificates");
        setCerti(d.data);
    }
    let path=useLocation();
    useEffect(()=>{
fetchData();
window.scrollTo(0,0);
    },[path])
    return(<>
  <Header heading="Certification"/>
    <div className="container p-5 ">
        <div className="w-100 text-center">
            <h2 style={{color:"#98240d"}}>Certification & Awards</h2>
            <font style={{fontSize:"13px",color:'#0c8694'}}>Ruby Interiors</font>
        </div>
        <div className="row mt-5">
            {certi && certi.map((i)=>{
                return(<CertificateCard img={i.image} title={i.title} id={i._id}/>)
            })}

        </div>
    </div>
    
    </>)
}