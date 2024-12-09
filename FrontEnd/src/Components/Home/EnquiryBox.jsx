import Aos from "aos";
import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EnquiryBox(){
  let nav=useNavigate();
    useEffect(()=>{
Aos.init();
fetchNums();
    },[])
    let [nums,setNums]=useState([]);
    let fetchNums=async()=>{
      let d=await axios.get('http://localhost:1000/api/enq-list');
     setNums(d.data);
  }  
 
  let sendData=async()=>{
      let d=await axios.post('http://localhost:1000/api/enquiry',formValues);

   
  }
    const [formValues, setFormValues] = useState({
        name: '',
        contactNumber: '',
        workType: '',
        address: '',
      });
    
      const [errors, setErrors] = useState({});
    
      
      const nameRegex = /^[a-zA-Z\s]+$/; 
      const contactNumberRegex = /^[0-9]{10}$/; 
      const addressRegex = /^[a-zA-Z0-9\s]+$/; 
    
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
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
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          sendData();
              nav('/submitted');
        
        
        } else {
          console.log('Form has errors.');
        }
      };
      function checkMobile(val){
        let ar=[]; 
        nums.map((i)=>{
ar.push(i.contactNumber);
         })
         if(ar.includes(val)){
          document.getElementById('dup-num-warn').style.display='block';
          document.getElementById('dup-num-warn-sm').style.display='block';
          document.getElementById('submit-btn').disabled=true;
          document.getElementById('submit-btn-sm').disabled=true;
         }
         else{
          document.getElementById('dup-num-warn').style.display='none';
          document.getElementById('dup-num-warn-sm').style.display='none'
          document.getElementById('submit-btn').disabled=false;
          document.getElementById('submit-btn-sm').disabled=false;
         }
     
      }
    return(<>
     <div className="container-fluid overflow-hidden d-none d-lg-block overflow-hidden" id="enquiry-container">
    <div className="enquiry-box shadow rounded-4 p-3" data-aos="fade-up">
        <div className="row">
            <div className="col-md-12 text-center">
                <h4 className="mini-heading">Enquire now</h4>
            </div>
            <div className="col-md-12 mt-4">
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
              <option>Furniture</option>
              <option>Steel Railing</option>
              <option>Kitchen Trolly</option>
              <option>Glass Railing</option>
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

            <button className="btn btn-outline-danger w-100 rounded-0" id="submit-btn" type="submit">Send Message</button>
          </form>
            </div>
        </div>

    </div>
    </div>
 

    <div className="container-fluid overflow-hidden p-5 d-block d-md-block d-lg-none" id="enquiry-container">
    <div className="row rounded-4 shadow p-3" data-aos="fade-up">
            <div className="col-md-12 text-center rounded ">
                <div className="sec-heading-box">
                <h4 className="mini-heading">Enquire now</h4>
                </div>
            </div>
            <div className="col-md-12 mt-4">
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
            <span id="dup-num-warn-sm" className="text-warning" style={{"fontSize":"12px"}}><i className='fa fa-warning me-1'></i>Your enquiry has already send !!</span>

            <input
              type="number"
              
              name="contactNumber"
              placeholder="Contact number*"
              className="form-control rounded-0 mb-3"
              value={formValues.contactNumber}
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
              <option>Furniture</option>
              <option>Steel Railing</option>
              <option>Kitchen Trolly</option>
              <option>Glass Railing</option>
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

            <button className="btn btn-outline-danger w-100 rounded-0" id="submit-btn-sm" type="submit">Send Message</button>
          </form>
            </div>
        </div>
    </div>
    </>)
}