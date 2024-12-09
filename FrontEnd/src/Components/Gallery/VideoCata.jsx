import React, { useEffect, useState } from "react";
import YoutubeCard from "../Aboutus/YoutubeCard";
import axios from "axios";
export default function VideoCata(){
    let [vdos,setVdos]=useState([]);
    let fetchVdos=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'get-videos');
        setVdos(d.data);
    }
    useEffect(()=>{
     fetchVdos();
    },[])
    return(<>
    <div className="container-fluid p-5">
        <div className="row">
        {vdos&&vdos.map((i)=>{
            return(
                <YoutubeCard link={i.video}/>
            )
        })}
        </div>
    </div>
    
    </>)
}