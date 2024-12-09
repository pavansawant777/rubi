import React, { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function ServiceCard(props){
   useEffect(()=>{
Aos.init();
   },[])
   return(<>
   
     <div className="w-100 p-3"  data-aos-delay="50" style={{maxHeight:"350px",minHeight:"200px"}}>
      <div className="service-card bg-white  rounded p-4 text-center h-100 w-100">
        <div className="row justify-content-center">
          <div className="col-5 ">
            <img src={props.ico} style={{height:"60px",width:"60px"}} />
          </div>
          <div className="col-12 text-center mt-4">
          <h6 className="" style={{color:'#98240d'}}>{props.heading}</h6>
          </div>
         
        </div>
      </div>
    </div>
    </>)
}