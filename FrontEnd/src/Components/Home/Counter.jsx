import React, { useState } from "react";
import $ from 'jquery';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
export default function Counter(){
let [cond,setCond]=useState(false);
    let nav=useNavigate();

    return(<>

 <div style={{ fontSize: "150px" }}>
            
            </div>
            <div className="container-fluid p-5 overflow-hidden">
<div className="row">
              <div className="col-lg-5 p-4 ">
<h3 style={{textTransform:"uppercase",color:'#98240d'}} >The Journey That Brought Us Here</h3>
<p style={{fontSize:"14px"}}>Ruby Interiors began with a simple yet powerful vision: to transform spaces into beautiful, functional sanctuaries that reflect the unique personalities of those who inhabit them. What started as a small, family-run design studio quickly blossomed into a trusted name in the world of interior design, thanks to a passion for design excellence and an unwavering commitment to quality.</p>
             <button className="btn mt-3  text-light rounded-pill" style={{backgroundColor:"#98240d"}} onClick={()=>{nav('/about')}}>View more</button>
              </div>
              <div className="col-lg-7 p-0">
              <ScrollTrigger onEnter={()=>{setCond(true)}} onExit={()=>{setCond(false)}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 text-center">
                   <div className="row  " style={{height:"150px"}}>
                  
                   <div className="col-12 text-center">
                   <br/>      
                 
                     <font className="text-start" style={{color:"#98240d",fontSize:"50px"}}>  
                     {cond && <CountUp start={0} end={1500} duration={3}/>}+</font>
                     <br/> <font  style={{color:"#0c8694", fontSize:"14px",textTransform:"uppercase"}}>Happy clients</font><br/>
                    </div>
                   </div>
                    </div>

                    <div className="col-lg-6 col-md-6 text-center">
                    <div className="row  " style={{height:"150px"}}>
                  
                    <div className="col-12 text-center">
                        <br/>
                        
                     <font className="text-start" style={{color:"#98240d",fontSize:"50px"}}>  
                      
                    {cond &&<CountUp start={0} end={5} duration={3}/>}+</font>


                     <br/>  <font  style={{color:"#0c8694", fontSize:"14px",textTransform:"uppercase"}}>years of Experience</font>
                    </div>
                   </div>
                    </div>

                    <div className="col-lg-6 col-md-6 text-center">
                    <div className="row  " style={{height:"150px"}}>
                   
                    <div className="col-12 text-center">
                        <br/>
                   
                     <font className="text-start" style={{color:"#98240d",fontSize:"50px"}}>  {cond && <CountUp start={0} end={150} duration={3}/>}+</font>
                    <br/> <font  style={{color:"#0c8694", fontSize:"14px",textTransform:"uppercase"}}>Projects</font>
                    </div>
                   </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-center">
                    <div className="row  " style={{height:"150px"}}>
                   
                    <div className="col-12 text-center">
                        <br/>
                   
                     <font className="text-start" style={{color:"#98240d",fontSize:"50px"}}>  {cond && <CountUp start={0} end={50} duration={3}/>}</font>
                    <br/> <font  style={{color:"#0c8694", fontSize:"14px",textTransform:"uppercase"}}>Awards</font>
                    </div>
                   </div>
                    </div>
                </div>
                </ScrollTrigger>
                </div>
                </div>
            </div>
    </>)
}