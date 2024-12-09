import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
export default function EnqFormSec(){
    const [formValues, setFormValues] = useState({
        name: '',
        contactNumber: '',
        workType: '',
        address: '',
      });
      let [cats,setCats]=useState([]);
      let fetchCats=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'get-cats');
        setCats(d.data);
      }
      let path=useLocation();
useEffect(()=>{
fetchNums();
fetchCats();
window.scrollTo(0,0);
},[path]);
let num=useRef(null);
let [myNum,setMyNum]=useState({'num':null});
    let [nums,setNums]=useState([]);
    

    let fetchNums=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+'enq-list');
       setNums(d.data);
    }  
   
    let sendData=async()=>{
        let d=await axios.post(process.env.REACT_APP_API_URL+'enquiry',formValues);

     
    }
    let nav=useNavigate();
      const [errors, setErrors] = useState({});
    
      
      const nameRegex = /^[a-zA-Z\s]+$/; 
      const contactNumberRegex = /^[0-9]{10}$/; 
      const addressRegex = / /; 
    
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        //setFormValues({})
      };
    
      
      const validateForm = () => {
        let formErrors = {};
    
        
        if (!nameRegex.test(formValues.name)) {
          formErrors.name = 'Name can only contain letters and spaces.';
        }
    
        
        if (!contactNumberRegex.test(formValues.contactNumber)) {
          formErrors.contactNumber = 'Contact number must be 10 digits.';
        }
    
        
        if (!formValues.workType) {
          formErrors.workType = 'Please select your work type.';
        }
    
        
        if (!addressRegex.test(formValues.address)) {
          formErrors.address = 'Address can only contain letters, numbers, and spaces.';
        }
    
        setErrors(formErrors);
        
        
        return Object.keys(formErrors).length === 0;
      };
      function checkMobile(val){
        let ar=[]; 
        nums.map((i)=>{
ar.push(i.contactNumber);
         })
         if(ar.includes(val)){
          document.getElementById('dup-num-warn').style.display='block';
          document.getElementById('submit-btn').disabled=true;
         }
         else{
          document.getElementById('dup-num-warn').style.display='none';
          document.getElementById('submit-btn').disabled=false;
         }
     
      }
    
    let [numCond,setNumCond]=useState(false);
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
         sendData(); 
   
         nav('/submitted');
         
         
        } else {
          console.log('Form has errors.');
        }
      };
      
    return(<>
     <Header heading="Enquiry "/>
       <div className="container-fluid overflow-hidden overflow-hidden p-5" style={{position:'relative'}}>
    <div className=" row  justify-content-center  z-3 align-item-center "  style={{height:'530px'}}>
        <div className="col-10 col-lg-4  rounded-4 p-3 shadow bg-white " style={{position:'absolute',left:'auto',top:'50px',zIndex:'999'}}>
            <div className="col-md-12 mb-5 text-center">
                <h4 className="mini-heading" style={{color:'#98240d'}}>Enquire now</h4>
            </div>
            <div className="row mt-4">
            <form onSubmit={handleSubmit}>
              {errors.name && <span className="text-danger" style={{"fontSize":"12px"}} > <i className='fa fa-warning me-1'></i>{errors.name}</span>}
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="form-control rounded-0 mb-3"
              value={formValues.name}
              onChange={handleChange}
              required
            />

{errors.contactNumber && <span className="text-danger" style={{"fontSize":"12px"}}><i className='fa fa-warning me-1'></i>{errors.contactNumber}</span>}
<span id="dup-num-warn" className="text-warning" style={{"fontSize":"12px"}}><i className='fa fa-warning me-1'></i>Your enquiry has already send !!</span>
            <input
              type="number"
              name="contactNumber"
              placeholder="Contact number*"
              className="form-control rounded-0 mb-3"
              value={formValues.contactNumber}
              ref={num}
              onChange={(e)=>{checkMobile(e.target.value);handleChange(e)}}
              required
            />

{errors.workType && <span className="text-danger" style={{"fontSize":"12px"}}> <i className='fa fa-warning me-1'></i>{errors.workType}</span>}
            <select
              name="workType"
              className="form-control rounded-0 mb-3"
              value={formValues.workType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your work type</option>
              
            {cats && cats.map((i)=>{
return(<>
<option>{i.category}</option>
</>)
            })}
            </select>

            {errors.address && <span className="text-danger " style={{"fontSize":"12px"}}> <i className='fa fa-warning me-1'></i>{errors.address}</span>}
            <textarea
              name="address"
              className="form-control rounded-0 mb-4"
              placeholder="Your Address"
              rows={5}
              value={formValues.address}
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn text-light w-100 rounded-0 mt-3" style={{backgroundColor:'#98240d'}} id="submit-btn" type="submit">Send Message</button>
          </form>
            </div>
        </div>


    </div>
    <div className=" p-0 w-100 z-1 " >
    <svg className="svg"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="100%"
  height="100%"
  viewBox="0 0 1600 900"
  preserveAspectRatio="xMidYMax slice"
>
  <defs>
    <linearGradient id="bg">
      <stop offset="0%" style={{ stopColor: "rgba(12, 134, 148,0.9)" }} />
      <stop offset="50%" style={{ stopColor: "rgba(12, 134, 148,0.8)" }} />
      <stop offset="100%" style={{ stopColor: "rgba(12, 134, 148,0.2)" }} />
    </linearGradient>
    <path
      id="wave"
      fill="url(#bg)"
      d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
    />
  </defs>
  <g>
    <use xlinkHref="#wave" opacity=".3">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="10s"
        calcMode="spline"
        values="270 230; -334 180; 270 230"
        keyTimes="0; .5; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#wave" opacity=".6">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="8s"
        calcMode="spline"
        values="-270 230;243 220;-270 230"
        keyTimes="0; .6; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#wave" opacty=".9">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="6s"
        calcMode="spline"
        values="0 230;-140 200;0 230"
        keyTimes="0; .4; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
  </g>
</svg>

    </div>
    </div>
    
    </>)
}