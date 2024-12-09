import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


export default function GalleryCard(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      once: true       // Whether animation happens only once
    });
  }, []);

  return (
    <>


  

          <div className=" col-lg-4  col-md-6 p-2 gal-card" style={{objectFit:"",height:"auto"}}>
            <div className="p-0 " data-aos="fade-up">
              <div className="overflow-hidden" onClick={()=>{document.getElementById("show-btn"+props.id).click()}} >
                <img src={process.env.REACT_APP_IMG+props.img} className="image-gallary rounded" style={{objectFit:"cover"}} width={"100%"} />
              </div>
              <div className="p-1 text-center ">
                <h6 style={{color:"#98240d"}}>{props.gallaryHeading}</h6>
              </div>
            </div>
          </div>
<button type="button"data-bs-toggle="modal" style={{display:'none'}} data-bs-target={"#exampleModal"+props.id} id={"show-btn"+props.id}>click</button>
          <div
  className="modal fade"
 id={"exampleModal"+props.id}
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered" >
    <div className="modal-content" >
      <div className="modal-header w-100 border-0" style={{position:'absolute',left:'0px',top:'0px'}}>
        <h1 className="modal-title fs-5" id="exampleModalLabel">
        {props.gallaryHeading}
        </h1>
        <button
          type="button"
          className="btn text-danger "
          data-bs-dismiss="modal"
          aria-label="Close"
        ><i className="fa fa-x"></i></button>
      </div>


     
      <img src={process.env.REACT_APP_IMG+props.img}  style={{height:'auto'}} width={"100%"} />


     
     
    </div>
  </div>
</div>

         
         
   
    </>
  );
}