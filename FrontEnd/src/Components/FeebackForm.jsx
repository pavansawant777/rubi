import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "./Header";
export default function FeebackForm(){
  let param=useParams();
    let uname=useRef(null);
    let uemail=useRef(null);
    let umobile=useRef(null);
    let urating=useRef(null);
    let oi1=useRef(null);
    let oi2=useRef(null);
    let oi3=useRef(null);
    let oi4=useRef(null);
    let [info,setInfo]=useState({"name":null,"email":null,"mobile":null,"rating":null,"project":param.id});
    let [otp,setOtp]=useState({"otp":null});
   let [sysOtp,setSysotp]=useState(null);
   let [projInfo,setProjInfo]=useState(null);
  let fetchInfo=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'view-project/'+param.id);
  console.log(d.data);
    setProjInfo(d.data);
  }
  useEffect(()=>{
fetchInfo();
  },[])
    function setOtpValue(){
        setOtp({"otp":oi1.current.value+oi2.current.value+oi3.current.value+oi4.current.value});
    }
    function setValues(){
        setInfo({name:uname.current.value,"email":projInfo && projInfo.client_email,"mobile":projInfo && projInfo.client_email,rating:urating.current.value,project:param.id});
    }
    let getOtp=async()=>{
        let d=await axios.post(process.env.REACT_APP_API_URL+'feedback-req',info);
        if(d.length!=0){
hideAndShowForm();
setSysotp(d.data);

        }
    }
    let sendFeedback =async(req,res)=>{
     let d=axios.post(process.env.REACT_APP_API_URL+'save-feedbacks',info);
     if(d.length!=0){
      document.getElementById('go-back-btn').style.display='block';
      document.getElementById('verify-btn').style.display='none';
     }
    }
    function verifyOtp(){
   if(otp.otp.toString()==sysOtp.toString()){
    document.getElementById('otp-warn').style.display='none';
    sendFeedback();

   
    
   }
   else{
    document.getElementById('otp-warn').style.display='block';
   

   }

    }
    
    function hideAndShowForm(){
        document.getElementById('fb-form').style.display="none"; document.getElementById('otp-form').style.display="block";
    }
    return(<>
  <Header heading="Feedback "/>
    <div className="container">
        <div className="row justify-content-center p-5 align-item-center">
            <div className="col-lg-6 rounded-4 shadow p-4 " id="fb-form">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h3 className="sec-heading" style={{color:"#98240d"}}>Add Review</h3>
                    </div>
                    <form className="row" onSubmit={(e)=>{e.preventDefault();getOtp()}}>
                    <div className="col-12 mb-3">
                    <div className="input-group border-bottom  rounded-0 mb-3">
  <span className="input-group-text bg-white  rounded-0 border-0" style={{color:"#98240d"}} id="basic-addon1">
    <i className="fa fa-user"></i>
  </span>
  <input
    type="text"
    className="form-control rounded-0 border-0"
    required
    onChange={()=>{setValues()}} ref={uname}
    placeholder="Your Name*"
    aria-label="Your Name*"
    aria-describedby="basic-addon1"
  />
</div>

                    </div>
                    <div className="col-12 mb-3">
                    <div className="input-group border-bottom  rounded-0 mb-3">
  <span className="input-group-text bg-white  rounded-0 border-0" style={{color:"#98240d"}} id="basic-addon2">
    <i className="fa fa-envelope"></i>
  </span>
  <input
    type="text"
    className="form-control rounded-0 border-0"
    required
    value={projInfo && projInfo.client_email} 
    placeholder="Email Address*"
    aria-label="Your Name*"
    aria-describedby="basic-addon2"
  />
</div>

                    </div>
                    <div className="col-12 mb-3">
                    <div className="input-group border-bottom  rounded-0 mb-3">
  <span className="input-group-text bg-white  rounded-0 border-0" style={{color:"#98240d"}} id="basic-addon3">
    <i className="fa fa-phone"></i>
  </span>
  <input
    type="number"
    className="form-control rounded-0 border-0"
    required
  value={projInfo && projInfo.client_mobile} 
    placeholder="Mobile Number*"
    aria-label="Mobile Number*"
    aria-describedby="basic-addon3"
  />
</div>

                    </div>
                    <div className="col-12 mb-3">
                        <div className="w-100 text-center"><span className="fw-bold ">Rate our work</span></div>
                    <div className="row justify-content-center align-item-center">
<div className="col-md-6 me-5 me-lg-0">
  <div className="rating ">
    <input type="radio" id="star5" name="rate"  onClick={(e)=>{ document.getElementById('rating-inp').value=e.target.value; setValues()}}  defaultValue={5} />
    <label htmlFor="star5" title="text">
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="star-solid"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </label>
    <input type="radio" id="star4" name="rate"  onClick={(e)=>{ document.getElementById('rating-inp').value=e.target.value; setValues()}} defaultValue={4} />
    <label htmlFor="star4" title="text">
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="star-solid"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </label>
    <input
      defaultChecked=""
      type="radio"
      id="star3"
      name="rate"  onClick={(e)=>{ document.getElementById('rating-inp').value=e.target.value; setValues()}}
      defaultValue={3}
    />
    <label htmlFor="star3" title="text">
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="star-solid"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </label>
    <input type="radio" id="star2" name="rate"  onClick={(e)=>{ document.getElementById('rating-inp').value=e.target.value; setValues()}} defaultValue={2} />
    <label htmlFor="star2" title="text">
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="star-solid"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </label>
    <input type="radio"  id="star1" name="rate"  onClick={(e)=>{ document.getElementById('rating-inp').value=e.target.value; setValues()}} defaultValue={1} />
    <label htmlFor="star1" id="star_1" title="text">
      <svg
        viewBox="0 0 576 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="star-solid"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    </label>
  </div>
</div>
</div>
<input type="hidden"id="rating-inp" onChange={()=>{}}   ref={urating} value={1}/>

                    </div>
                    <div className="col-12 mt-3">
                        <button  type="submit" className="btn text-light rounded-0 w-100" style={{BackgroundColor:"#98240d"}}>Submit</button>
                    </div>
                    </form>
                  
                </div>
            </div>

            <div className="col-lg-4 rounded-4 shadow p-4" id="otp-form">
            <form className="form  w-100" onSubmit={(e)=>{e.preventDefault();verifyOtp();}}>
  {" "}
  <div className="title">OTP</div>{" "}
  <div className="title">Verification Code</div>{" "}
  <p className="message">
    We have sent a verification code to your Email
  </p>{" "}
  <div className="inputs">
    {" "}
    <input id="input1" type="text" onChange={()=>{setOtpValue();}} ref={oi1} required maxLength={1} />{" "}
    <input id="input2" type="text" onChange={()=>{setOtpValue();}} required ref={oi2} maxLength={1} />{" "}
    <input id="input3" type="text" onChange={()=>{setOtpValue();}} required ref={oi3} maxLength={1} />{" "}
    <input id="input4" type="text" onChange={()=>{setOtpValue();}} ref={oi4} maxLength={1} />{" "}

  </div>{" "}
  <div className="w-100 text-center mt-1">
    <span style={{fontSize:"14px",display:"none"}} id="otp-warn"  className="text-danger"><i className="fa fa-warning"></i>&nbsp;&nbsp;Otp does't match</span>
  </div>
  <div className="w-100 text-center " id="verify-btn">  <button className="action btn text-light" style={{backgroundColor:'#98240d'}}   >verify me</button></div>

{" "}
</form>
<div className="w-100 text-center mt-1" id="go-back-btn">
<font className="text-success">Thanks !! Your feedback is send</font><br/>
<NavLink className="btn text-light mt-4 rounded-pill" style={{BackgroundColor:"#98240d"}} to="/"><i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Go back</NavLink>
</div>
            </div>
        </div>
    </div>
    
    </>)
}