import React, { useEffect } from "react";
import VideoSec from "./VideoSec";
import OurTeam from "./OurTeam";
import 'aos/dist/aos.css'
import Aos from "aos";
import Header from "../Header";
import YoutubeCard from "./YoutubeCard";
import YoutubeSec from "./YoutubeSec";
import ReviewSec from "../ReviewSec"
import { useTypewriter } from "react-simple-typewriter";
import OurHistory from "./OurHistory";
import { useLocation } from "react-router-dom";

export default function Aboutus(){
 let path=useLocation();
useEffect(()=>{
  Aos.init();
 window.scrollTo(0,0);
},[path])
const {texte}=useTypewriter({
  words:["SteelRailing", "KitchenTrollies", "GlassRailing"],
  loop:{},
  typeSpeed:120,
  deleteSpeed:80
})
return(<>
<Header heading="About Us"/>


         <div className="container-fluid p-5 mt-5 overflow-hidden py-5">
  <div className="row">
  <div className="col-lg-6 bg-white p-4" data-aos="fade-right">
      <div className="w-100" >
      <h1 className=" sec-heading " style={{color:"#99250e"}}>
      About Ruby Interiors and Steel Designs
      </h1>
      <p className="mt-4 text-justify text-dark">
      With over 20 years of industry expertise, Ruby Interiors and Steel Designs has established itself as a leader in delivering high-quality, innovative interior and steel design solutions. Our journey began with a commitment to excellence and craftsmanship, and today, we are proud to be ISO certified, a testament to our dedication to maintaining the highest standards of quality, safety, and sustainability.
      </p>
      <p className="text-justify text-dark">
      Our ISO certification guarantees that we adhere to global standards, providing our clients with top-tier products and services. Over the years, we have built a reputation for delivering projects on time, within budget, and to the exact specifications of our clients, making us the trusted choice for all your interior and steel design needs.
    <br/><br/>
    Let us help you bring your vision to life with timeless designs that stand the test of time.
      </p>
      <div className="row">
        <div className="col-md-4 text-center mt-3">
          <div className="w-100">
            <img src="./trust.png" style={{height:"60px",width:"60px",margin:"0px auto"}}/>
          </div>
          <h4>Trusted shop</h4>
        </div>
        <div className="col-md-4 text-center mt-3">
        <div className="w-100">
            <img src="./bq1.png" style={{height:"60px",width:"60px",margin:"0px auto"}}/>
          </div>
          <h4>Best Quality</h4>
        </div>
        <div className="col-md-4 text-center mt-3">
        <div className="w-100">
            <img src="https://cdn-icons-png.flaticon.com/128/5759/5759734.png" style={{height:"60px",width:"60px",margin:"0px auto"}}/>
          </div>
          <h4>ISO Certified</h4>
        </div>
      </div>
      </div>
      
    </div>
    <div className="col-lg-6 p-5">
      <img
        src="./aboutimg.png"
        className="railingimg h-100"
        data-aos="fade-left"
        
      />
    </div>
   
  </div>
</div>
<OurHistory/>


   <VideoSec/>


       
<ReviewSec/>







    </>)
}