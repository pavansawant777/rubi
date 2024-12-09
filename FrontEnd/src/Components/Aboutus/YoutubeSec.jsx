import React, { useEffect, useState } from "react";
import YoutubeCard from "./YoutubeCard";
import axios from "axios";
export default function YoutubeSec(){
    let [vdos,setVideos]=useState([]);
    let fetchVideos=async()=>{
        let d=await axios.get('http://localhost:1000/api/get-videos');
        setVideos(d.data);
    }
    useEffect(()=>{
     fetchVideos();
    },[])
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="">Videos</h2>
                <font style={{fontSize:"13px"}}>Ruby interiors</font>
            </div>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="row">
            {vdos && vdos.map((i)=>{
                if(i.showAbout==true){
                    return(<>
                     <YoutubeCard link={i.video}/>
                    </>)
                }
            })}
          
          
        </div>
    </div>
    
    </>)
}