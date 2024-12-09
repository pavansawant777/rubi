import React, { useEffect, useState } from "react";

import Aos from "aos";
import 'aos/dist/aos.css'
import axios from "axios";
export default function OurTeam(){
    let [mems,setMems]=useState([]);
    let fetchMems=async()=>{
      let d=await axios.get('http://localhost:1000/api/team-members');
      setMems(d.data);
    }
    useEffect(()=>{
        Aos.init({
            duration:1000
        });
        fetchMems();
    },[])

    
    return(<>
    <div className="container mt-5 mb-0">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2 className="sec-heading"><span className="text-danger">M</span>eet our Team</h2>
            </div>
        </div>
    </div>


    
   <div className="container-fluid">
    <div className="row">
    <section className="col-12">
  <section className="team-page-section">
    <div className="container">
    
      <div className="row clearfix">
        {/* Team Block */}
        {mems && mems.map((i)=>{
          return(
 <div className="team-block col-lg-4 col-md-6 col-sm-12 " data-aos={"fade-up"}>
 <div
   className="inner-box  wow fadeInLeft"
   data-wow-delay="0ms"
   data-wow-duration="1500ms"
 >
   
   <div className="image">
     <a href="#">
       <img src={'http://localhost:1000/images/'+(i.image)} alt="" style={{height:'350px'}}/>
     </a>
   </div>
   <div className="lower-content " style={{position:"relative"}}>
     <h3>
       <a>{i.name}</a>
     </h3>
     <div className="designation">{i.designation}</div>
     <div style={{width:"100%",height:"25px"}}></div>
     <div style={{position:"absolute",right:"-60px",top:"90px"}} className="w-100  text-center ico"><a href={i.facebook} className="m-2 fs-5"><i className="fa fa-facebook"></i></a>
     <a href={`https://wa.me/${i.whatsapp}?text=hello`} target="_blank" className="m-2 fs-5"><i className="fa fa-whatsapp"></i></a>  <a href={i.facebook} className="m-2 fs-5"><i className="fa fa-instagram"></i></a>
     </div>
   </div>
 </div>
</div>
          )
        })}
       
        
       

      </div>
    </div>
  </section>
</section>

    </div>
   </div>
    </>)
}