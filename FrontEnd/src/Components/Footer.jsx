import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Footer(){
  let [comp,setComp]=useState();
   let fetchCompData=async()=>{
    let d= await axios.get(process.env.REACT_APP_API_URL+'get-company-info')
 
    if(d.length!=0){
     setComp(d.data);
   }
   }

  

useEffect(()=>{
  fetchCompData();
},[])
    return(<>
    <>
  {/* Site footer */}
  <footer className="site-footer bg-light overflow-hidden" style={{backgroundAttachment:"fixed"}}>
    <div className="container-fluid " style={{padding:'45px'}}>
    <h2 className="" style={{marginLeft:'-10px'}}><img src="./l2.png" style={{width:'160px',height:'76px'}}/></h2>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-6">
          <h6 className=" mb-3"  style={{color:"#98240d"}}>About</h6>
          <p>
{comp&&comp.about}
</p>
          
        </div>
        <div className="col-xs-6 col-md-3">
          <h6 className=" mb-3"  style={{color:"#98240d"}}>Quick Links</h6>
          <ul className="footer-links">
            <li className="footli">
            <NavLink to={'/'} className="text-secondary">Home</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/about'} className="text-secondary" >About</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/services'} className="text-secondary" >Service</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/projects'} className="text-secondary" >Project</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/blogs'} className="text-secondary" >Blogs</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/gallery'} className="text-secondary" >Gallery</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/contact'} className="text-secondary" >Contact us</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/privacyandpolicy'} className="text-secondary" >Privacy & policy</NavLink>
            </li>
            <li className="footli">
            <NavLink to={'/faq'} className="text-secondary" >F.A.Q.</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-3  text-left " >
          <h6 className=" mb-3" style={{color:'#98240d'}}>contact us</h6>
          <li className="footcontact  fs-5" style={{color:"#0c8694"}}>
            {" "}
            <ion-icon
              name="location-outline"
              className=" footicon"
            />
            <p className="footp text-dark fs-6">
             {comp&&comp.address}
            </p>
          </li>
          <li className="footcontact  fs-5" style={{color:"#0c8694"}}>
            {" "}
            <ion-icon name="call-outline" className=" footicon" />
            <p className="footp text-dark fs-6">+91   {comp&&comp.mobile}</p>
          </li>
          <li className="footcontact  fs-5" style={{color:"#0c8694"}}>
            {" "}
            <ion-icon
              name="mail-unread-outline"
              className=" footicon"
            />
            <p className="footp text-dark fs-6">  {comp&&comp.email}</p>
          </li>
          <ul></ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container-fluid" style={{padding:'45px',paddingTop:'0px'}}>
      <div className="row">
        <div className="col-12">
          <p className="">Designed & devloped by <b>Pratik chindhe</b></p>
        </div>
       
      </div>
    </div>
  </footer>
</>

    </>)
}