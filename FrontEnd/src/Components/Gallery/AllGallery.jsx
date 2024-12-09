import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import YoutubeCard from "../Aboutus/YoutubeCard";
import axios from "axios";
import Loader from '../Loader.jsx'
import { useLocation } from "react-router-dom";
export default function AllGallery(){
    let [imgs,setImgs]=useState([]);
    let [vdos,setVdos]=useState([]);
    let fetchVdos=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'get-videos');
        setVdos(d.data);
    }
    function Loder(){
        setTimeout(()=>{
      document.getElementById('blog-page').style.display='block';
      document.getElementById('loder').style.display='none';
        },50)
       }
    let fetchImgs=async()=>{
      let d=await axios.get(process.env.REACT_APP_API_URL+'get-images');
      setImgs(d.data);
    }
    let path=useLocation();
    useEffect(()=>{
     fetchImgs();
     fetchVdos();
   window.scrollTo(0,0);
    },[path])
return(<>

<div className="container-fluid p-5">
        <div className="row">
            <div className="w-100 mb-5 text-center"><h2 className="" style={{color:'#98240d'}}>Explore Our Collection</h2>
            <font style={{fontSize:"13px",color:"#0c8694"}}>Ruby's Gallery</font>
            </div>

       
        {imgs&&imgs.map((i)=>{
            return(
                <GalleryCard gallaryHeading={i.title} img={i.image} id={i._id} />
            )
        })}
        </div>
    </div>

    
<div className="container-fluid p-5">
        <div className="row">
        <div className="w-100 mb-5 text-center"><h2 className="" style={{color:"#98240d"}}>Watch Our Creations in Action</h2>
        <font style={{color:"#0c8694",fontSize:"13px"}}>Ruby's Video Section</font>
   </div>
      
       {vdos&&vdos.map((i)=>{
            return(
                <YoutubeCard link={i.video}/>
            )
        })}
      
     
        </div>
    </div>
  
   
</>)
}