import React, { useEffect } from "react";
import ContactPage from "./ContactPage";
import Loader from "../Loader";
export default function Contact(){
    function Loder(){
        setTimeout(()=>{
      document.getElementById('contact-page').style.display='block';
      document.getElementById('loder').style.display='none';
        },100)
       }
       useEffect(()=>{
       
        Loder();
        },[])
    return(<>
    <div id="contact-page">
    <ContactPage/>
    </div>
    <div id="loder">
        <Loader/>
    </div>
    </>)
}