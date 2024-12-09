import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Loader from '../Loader.jsx'
import Header from "../Header.jsx";
export default function BlogInfo(){
    let param=useParams();
    let [blogs,setBlogs]=useState([]);
    let [info,setInfo]=useState();
    let [count,setCount]=useState(0);
    let fetchInfo=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'blog/'+param.id);
       setInfo(d.data);
      
    }
    let fetchBlogs=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'other-blog-list');
        setBlogs(d.data);
    }


    function Loder(){
        setTimeout(()=>{
      document.getElementById('blog-info').style.display='block';
      document.getElementById('loder').style.display='none';
        },100)
       }
       function setLoder(){
        document.getElementById('blog-info').style.display='none';
        document.getElementById('loder').style.display='block';
       }
       let path=useLocation();
    useEffect(()=>{
    fetchInfo();
    Loder();
fetchBlogs();   
window.scrollTo(0,0);
},[count,path])
    
 
    function calTime(inti){
        let cur=new Date().getTime();
        let s=(cur-inti)/1000;
            let min=s/60;
            let hr=min/60;
            let day=hr/24;
           
         
            let month=day/30;
            let year=month/12;
            if(s<60){
                return `${Math.floor(s)} sec`;
            }
            if(s>60 && min<60){
             return `${Math.floor(min)} min`;
            }
            else if(min>60 && hr<24){
                return `${Math.floor(hr)} hr`;
            }
             else if(hr>24 && day<30){
                return `${Math.floor(day)} days`;    }
             else if(day>30 && month<12){
                return `${Math.floor(month)} months`;
            }
             else if(month>12){
                return `${Math.floor(year)} years`;
            }
         
        }
    function addDetails(val){
        document.getElementById('para').innerHTML=val;
    }

    return(<>
    <Header heading="Blog Details"/>
    <div id="blog-info" >

    
    <div className="container-fluid p-0 p-lg-5 mt-5 mt-lg-0">
        <div className="row">
  

            <div className="col-lg-8 ps-5 pe-5">
                <div className="row">
                  

                    <div className="col-12">
                        <button className="btn text-light btn-sm rounded-pill" style={{backgroundColor:"#98240d"}}>{info&&info.category}</button>
                        <h2>{info&&info.title} </h2>
                    </div>
                    <div className="col-12 mt-3">
                        <span className="float-start " style={{fontSize:"14px"}}><i className="fa-regular fa-calendar-days " style={{color:"#98240d"}}></i>&nbsp;&nbsp;{info&&info.date.toString().slice(0,10)}</span>
                        <span className="float-start ms-2 ms-lg-5" style={{fontSize:"14px"}}><i className="fa fa-user " style={{color:"#98240d"}}></i>&nbsp;&nbsp;{info&&info.writer}</span>
                        <span className="float-start ms-2 ms-lg-5" style={{fontSize:"14px"}}><i className="fa-regular fa-clock " style={{color:"#98240d"}}></i>&nbsp;&nbsp;{calTime(info&&info.time)} ago</span>

                    </div>
                    <div className="col-12 mt-3">
                        <img src={process.env.REACT_APP_IMG+(info && info.image)} className="w-100 rounded-4 shadow"/>
                    </div>
                    <div className="col-12 mt-5">
                        <p className="text-justify" id="para" style={{fontSize:"16px"}}>
                        {setTimeout(()=>{
addDetails(`${info && info.details}`)
                        },50)}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-5">
<div className="row ps-0 mb-4">
    <h4>Recent Blogs</h4>
</div>
       {blogs && blogs.map((i)=>{
       if(i._id!=param.id){
        return (
<div className="row  shadow  mb-2" style={{borderLeft:"5px solid #0c8694"}}>
                    <div className="col-4 p-0">
                    
                        <img src={process.env.REACT_APP_IMG+i.image} style={{height:"76px"}} className="w-100"/>
                    
                    </div>
                    <div className="col-8 ">
<h6>{(i.title.length>30)?`${i.title.toString().slice(0,30)}..`:i.title}</h6>
<NavLink to={"/blog/"+i._id} onClick={()=>{setCount(count+1);setLoder()}} className="" style={{color:"#98240d"}}>View more</NavLink>
                    </div>
                </div>
        )
       }
       })}
                

            
            
            </div>
        </div>
    </div>
    </div>
    <div id="loder">
        <Loader/>
    </div>
    </>)
}