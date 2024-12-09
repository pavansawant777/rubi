import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import YoutubeCard from "../Aboutus/YoutubeCard";
import GalleryCard from "./GalleryCard";
import axios from "axios";
import Loader from "../Loader";
export default function ImagesByCategory(){
    let param=useParams();
    let navigate=useNavigate();
    let [imgs,setImgs]=useState([]);
    let fetchImgs=async()=>{
      let d=await axios.get(process.env.REACT_APP_API_URL+'get-images/'+param.cata);
      setImgs(d.data);
      setParameter(param.cata);      
    }
    function Loder(){
        document.getElementById('loder').style.display='block';
        document.getElementById('blog-page').style.display='none';
        setTimeout(()=>{
      
      document.getElementById('loder').style.display='none';
      document.getElementById('blog-page').style.display='block';
        },50)
       }
let [parameter,setParameter]=useState(null);
let path=useLocation();
    useEffect(()=>{
     fetchImgs();
     Loder();
     window.scrollTo(0,0);
     
    },[param.cata])
    return(<>
    <div id="blog-page">
    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-lg-12 mb-5">
                <h2 className="text-center"> <span style={{textTransform:"capitalize",color:"#98240d"}}>{param.cata}</span></h2>
            </div>
            {imgs&&imgs.map((i)=>{
            return(
                <GalleryCard gallaryHeading={i.title} img={i.image} id={i._id} />
            )
        })}

        </div>
    </div>
    </div>
    <div id="loder">
        <Loader/>
    </div>
    </>)
}