import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { TypeAnimation } from "react-type-animation";
export default function VideoSec(){
    const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
    return(<>
     {/*Video section */}

     <div className="container-fluid   overflow-hidden  mt-5">

<div className="row justify-content-center  align-item-center">

  <div className="col-md-12 p-0  overflow-hidden  video-con" style={{position:"relative"}}>
    <video  tabIndex="-1" autoPlay style={{width:"100%"}} loop muted playsInline disablePictureInPicture preload="true">
        <source src="video.mp4"/>
    </video>
    <div className="video-cover text-center  justify-content-center align-item-center">
  
          
                <h6 style={{textTransform:"uppercase",fontWeight:"400",letterSpacing:"3px"}} className="text-danger " id="video-heading-1">Design Stories</h6>
              {/* <h1 className="text-danger" style={{fontWeight:"bolder"}}>Watch Our Vision Come to Life</h1> */}
       
           <div className="text-white" >
    <h1 style={{textTransform:"uppercase",fontWeight:"400",letterSpacing:"3px",fontFamily:"serif"}} id="video-heading-2">Ruby Interior's Video Collection  </h1>
    <button className="button-48" role="button">
    <span className="text">Know more</span>
  </button>
</div>


        </div>
    </div>

  </div>

</div>


    
    </>)
}