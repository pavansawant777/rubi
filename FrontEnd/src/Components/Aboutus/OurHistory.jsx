import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import axios from "axios";

export default function OurHistory(){
  let [his,setHis]=useState();
  let fetchHis=async()=>{
      let d=await axios.get(process.env.REACT_APP_API_URL+"get-history");
      setHis(d.data);
  }
    useEffect(()=>{
     Aos.init();
     fetchHis();
    },[])
    return(<>
    <div className="container-fluid">
      <div className="row text-center mb-4">
<h2 style={{color:"#98240d"}}>Our History</h2>
<font style={{fontSize:"13px",color:"#0c8694"}}>Vision & Mission</font>
      </div>
        <div className="row">
        <section className="timeline">
  <div className="container">
    {/*     ITEM 1  */}
    <div className="timeline-item" >
      <div className="timeline-img" />
      <div className="timeline-content js--fadeInLeft" data-aos="fade-right">
        <h4 style={{color:'#98240d'}}>Founding</h4>
        <p style={{fontSize:"14px"}}>
{his && his.founding}         
        </p>
      </div>
    </div>
    {/*     ITEM 2  */}
    <div className="timeline-item">
      <div className="timeline-img" />
      <div className="timeline-content js--fadeInRight"  data-aos="fade-left">
        <h4  style={{color:'#98240d'}}>Growth Expansion</h4>
        <p style={{fontSize:"14px"}}>
        {his && his.expansion}  
        </p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-img" />
      <div className="timeline-content js--fadeInLeft"  data-aos="fade-right">
        <h4  style={{color:'#98240d'}}>Our vision</h4>
        <p style={{fontSize:"14px"}}>
        {his && his.vision}  
        </p>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-img" />
      <div className="timeline-content "  data-aos="fade-left">
        <h4  style={{color:'#98240d'}}>Our mission</h4>
        <p style={{fontSize:"14px"}}>
        {his && his.mission}  
        </p>
      </div>
    </div>
  </div>
</section>

        </div>
    </div>
    </>)
}