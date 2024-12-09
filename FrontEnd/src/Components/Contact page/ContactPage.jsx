import React, { useEffect, useState } from "react";
import Header from "../Header";
import 'aos/dist/aos.css'
import Aos from "aos";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function ContactPage(){
  let path=useLocation(); 
  useEffect(()=>{
    Aos.init();
    fetchInfo();
    window.scrollTo(0,0);
    },[path])
    const [value, setValue] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [error, setError] = useState({});
  
   
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectRegex = /^[a-zA-Z0-9\s.,!?'-]{10,}$/;
    const messageRegex = /^[a-zA-Z0-9\s.,!?'-]{10,}$/;
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValue({ ...value, [name]: value });
    };
  
  
    const validateForm = () => {
      let formErrors = {};
  
  
      if (!nameRegex.test(value.name)) {
        formErrors.name = 'Enter the Valid Name.';
      }
  
      if (!emailRegex.test(value.email)) {
        formErrors.email = ' enter a valid email ';
      }
  
  
      if (!subjectRegex.test(value.subject)) {
        formErrors.subject = 'Subject must be at least 10 characters Required';
      }
  
      if (!messageRegex.test(value.message)) {
        formErrors.message = 'Message must be at least 10 characters Required';
      }
  
      setError(formErrors);
  
  
      return Object.keys(formErrors).length === 0;
    };
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form Submitted:', value);
      } else {
        console.log('Form has errors.');
      }
    };

let [info,setInfo]=useState();
let fetchInfo=async()=>{
  let d=await axios.get(process.env.REACT_APP_API_URL+'get-company-info');
  setInfo(d.data);
}


    return(<>
    <>
    
    <Header heading="Contact Us"/>
  <section >
    <div className="p-5 container-fluid mt-2">
    <div className="row d-block d-lg-none p-5">
          <div className="col-12 p-0" >
            <div className="row p-0 " style={{position:'relative'}}>
            <div className="col-lg-9  p-0"   style={{position:"relative"}}>
          <div className="row shadow rounded-3" data-aos="fade-up" >
            <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-solid fa-map-location-dot "
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4 style={{color:"#98240d"}}>Location</h4>
                </div>
                <div className="col-lg-12 text-center">
                  <p style={{fontSize:"13px"}}>
                    PADMA NAGAR, opp. PRIME CARE HOSPITAL, Ekvira Chowk, Savedi,
                    Ahmednagar - 414003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
          <div className="col-12 p-0 mt-3">
<div className="row">
<div className="col-lg-9  p-0">
          <div className="row shadow rounded-3" data-aos="fade-up" style={{ minHeight: 130 }}>
            <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-solid fa-phone "
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row ">
                <div className="col-lg-12 text-center">
                  <h4 style={{color:"#98240d"}}>Phone</h4>
                </div>
                <div className="col-lg-12 text-center">
                  <p>+91 8446171061</p>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

          </div>
          <div className="col-12 p-0 mt-3">
            <div className="row">
            <div className="col-lg-9  p-0">
          <div className="row shadow rounded-3" data-aos="fade-up" style={{ minHeight: 130 }}>
            <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-regular fa-envelope"
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4 style={{color:"#98240d"}}>Email</h4>
                </div>
                <div className="col-lg-12 text-center">
                  <p>rubykitchentrolly@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
          <div className="col-12 mt-3 p-0">
            <div className="row">
            <div className="col-lg-9 p-0 ">
          <div className="row shadow rounded-3" data-aos="fade-up" style={{ minHeight: 130 }}>
            <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-regular fa-clock"
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4 style={{color:"#98240d"}}>Opening hours</h4>
                </div>
                <div className="col-lg-12 text-center">
                  <p>9:00 AM to 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
         </div>
    </div>
  </section>
  <section>
    <div className="container-flud mt-5 overflow-hidden mb-5">
      <div className="row">
        <div className="col-md-7 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15078.15560605116!2d74.73408001738281!3d19.127873899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbb5325deb105%3A0x55c9eacc5df4d567!2sPrime%20Care%20Hospital!5e0!3m2!1sen!2sin!4v1729488550471!5m2!1sen!2sin"
            className="w-100"
            height="565px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-md-5 d-none d-lg-block  p-5 pt-0 " data-aos='fade-left' style={{position:'relative'}}>
        <div className="w-75 rounded-4 shadow row" id="contact-sec" style={{height:'520px',top:'20px',position:'absolute',left:'-100px'}}>
     <div className="col-12  ">
      <div className="row">
      <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-solid fa-map-location-dot "
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-5 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <h4 style={{color:'#98240d'}}>Location</h4>
                </div>
                <div className="col-lg-12 ">
                  <p style={{fontSize:"13px"}}>
                    {info && info.address}
                  </p>
                </div>
              </div>
            </div>
      </div>
     </div>
     
     <div className="col-12 ">
      <div className="row ">
      <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-solid fa-phone "
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9  p-0">
              <div className="row ">
                <div className="col-lg-12 mt-3">
                  <h4 style={{color:'#98240d'}}>Phone</h4>
                </div>
                <div className="col-lg-12 ">
                  <p>+91 {info && info.mobile}</p>
                </div>
              </div>
            </div>
      </div>
     </div>
     <div className="col-12">
      <div className="row">
      <div className="col-lg-3 text-center " style={{color:" #0c8694"}}>
              <i
                className="fa-regular fa-envelope"
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 mt-3">
                  <h4 style={{color:'#98240d'}}>Email</h4>
                </div>
                <div className="col-lg-12 ">
                  <p>{info && info.email}</p>
                </div>
              </div>
            </div>
      </div>
     </div>
     <div className="col-12">
      <div className="row">
      <div className="col-lg-3 text-center " style={{color:"#0c8694"}}>
              <i
                className="fa-regular fa-clock"
                style={{ fontSize: 50, marginTop: 30 }}
              />
            </div>
            <div className="col-lg-9 pt-3 pt-lg-0">
              <div className="row">
                <div className="col-lg-12 mt-3 ">
                  <h4 style={{color:'#98240d'}}>Opening hours</h4>
                </div>
                <div className="col-lg-12 ">
                  <p>9:00 AM to 11:00 PM</p>
                </div>
              </div>
            </div>
      </div>
     </div>
        </div>
        </div>
      
      </div>
    </div>
  </section>
</>

     {/*  */}
    </>)
}