import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";

export default function CatCard(props){
    useEffect(()=>{
Aos.init();
    },[])
    let nav=useNavigate();
    return(<>
    <div className="col-lg-4  col-md-6  " data-aos="zoom-in" data-aos-delay={props.delay} >
        <div className="row  "  style={{padding:"10px"}} >
            <div className="col-lg-12 cat-card" onClick={()=>{nav('/Gallery-sub-catagory/'+props.id)}} style={{position:"relative",backgroundImage:`linear-gradient(hsla(0,100%,0%,0.5),hsla(0,100%,0%,0.5)),url('${process.env.REACT_APP_IMG+props.img}')`,height:"250px",padding:"10px",backgroundPosition:"center center",backgroundSize:"cover"}}>
            <button className="atn-btn text-light fs-4" style={{margin:"25% auto",fontFamily:"sans-serif"}}>
  {props.category}

</button>
            </div>
            {/* <div className="col-lg-12 p-2 pb-0 text-center">
                <h6>{props.category}</h6>
            </div> */}
        </div>
    </div>
    
    </>)
}