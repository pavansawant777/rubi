import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Loader from "../Loader";
import Header from "../Header"
export default function ProjectInfo(){
let param=useParams();
let nav=useNavigate();
let [nums,setNums]=useState([]);
let fetchNums=async()=>{
  let d=await axios.get(process.env.REACT_APP_API_URL+'enq-list');
 setNums(d.data);
}  

let sendData=async()=>{
  let d=await axios.post(process.env.REACT_APP_API_URL+'enquiry',formValues);


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
  const addressRegex = / /; 

  
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
      document.getElementById("form-close-btn").click();
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
  
      
      document.getElementById('submit-btn-sm').disabled=true;
     }
     else{
      document.getElementById('dup-num-warn').style.display='none';
   
      document.getElementById('submit-btn-sm').disabled=false;
     }
 
  }
  let [info,setInfo]=useState(null);
  
  let fetchInfo=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'view-project/'+param.id);
       document.getElementById('detials').innerHTML=d.data.details;  
    setInfo(d.data);
  }
  let [projs,setProjs]=useState([]);
  let fetchProjs=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'sim-cat-proj/'+param.id);
    
    if(d.data.length==1){
      let e=await axios.get(process.env.REACT_APP_API_URL+'get-other-proj');
      setProjs(e.data);
    }
    else{
    setProjs(d.data);
    }
  }
  let [count,setCount]=useState(0);
  useEffect(()=>{
fetchInfo();
fetchNums();

window.scrollTo(0,0);
fetchProjs();
window.scrollTo(0,0);
  },[param.id]);
    var settings = {
        autoplay: true,
        swipeToSlide:true,
      autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        navigation:true,
        fade: true,
      
       
        
      };
     
    return(<>
    <Header heading="Project Details"/>
  
    <div className="container mt-5  p-lg-0">
        



        <div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title text-center fs-5" style={{textTransform:"uppercase",color:"#98240d",letterSpacing:"2px",fontWeight:"400"}} id="exampleModalLabel">
        Enquire Now
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          id="form-close-btn"
        />
      </div>
      <div className="modal-body p-3">
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
      
    <input type="text" readOnly  name="workType" className="form-control rounded-0 mb-3"
              value={formValues.workType}
              onChange={handleChange}
              required placeholder="Work Type"/>
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

            <button className="btn text-light w-100 rounded-0" style={{backgroundColor:"#98240d"}} id="submit-btn-sm" type="submit">Send Message</button>
          </form>

      </div>
   
    </div>
  </div>
</div>


<div className="row">
  <div className="col-lg-7 p-5">

  <h1 style={{fontWeight:"400",textTransform:"uppercase",color:"#98240d"}} >
  {info && info.title }
  </h1>
  <font className=" " style={{color:"#0c8694",letterSpacing:"0px",textTransform:"uppercase",fontWeight:"400"}}>{info&&info.category}&nbsp;-&nbsp;{new Date((info && info.date)).toISOString().split('-').join('/').slice(0,10)}</font>

  <p id="detials" className="mt-3" style={{fontSize:"14px"}}></p>
  <button className="btn rounded-pill text-light" style={{backgroundColor:"#98240d"}} onClick={()=>{setFormValues({workType:(info && info.category)})}}  data-bs-toggle="modal" data-bs-target="#exampleModal">Enquire Now</button> 

  </div>
  <div className="col-lg-5 p-2 pt-5">
<div className="row">
  <div className="col-6 mt-2">
    <div className="row">
      <div className="col-4">
      <img src="https://cdn-icons-png.flaticon.com/128/3163/3163706.png" style={{height:"60px",width:"60px"}}/>
      </div>
      <div className="col-8 p-0">
        <font style={{fontSize:"13px"}}>Ratings</font><br/>
        <font> {(info&&info.isRated==true)?<><span className="text-warning"></span>   <span className="" style={{color:'#0c8694'}}>{info && info.rating}</span>/5 </>:<><button className="btn text-light btn-xs rounded-pill " style={{fontSize:"13px",backgroundColor:"#98240d"}}><NavLink className="text-decoration-none text-light" to={"/add-feedback/"+(info && info._id)}>Add Review</NavLink></button></>} </font>
      </div>
    </div>
  </div>
  <div className="col-6 mt-2">
    <div className="row">
      <div className="col-4">
      <img src="https://cdn-icons-png.flaticon.com/128/6009/6009897.png" style={{height:"50px",width:"50px",margin:"0px auto"}}/>
      </div>
      <div className="col-8 p-0">
        <font style={{fontSize:"13px"}}>Client</font><br/>
<font>{info && info.client_name} </font>
      </div>
    </div>
  </div>
  <div className="col-6 mt-2">
    <div className="row">
      <div className="col-4 ">
      <img src="https://cdn-icons-png.flaticon.com/128/9668/9668899.png" style={{height:"50px",width:"50px",margin:"0px auto"}}/>
      </div>
      <div className="col-8 p-0">
        <font style={{fontSize:"13px"}}>Location</font><br/>
<font>{info && info.address}</font>
      </div>
    </div>
  </div>
  <div className="col-6 mt-2">
    <div className="row">
      <div className="col-4">
      <img src="https://cdn-icons-png.flaticon.com/128/9374/9374883.png" style={{height:"50px",width:"50px",margin:"0px auto"}}/>
      </div>
      <div className="col-8 p-0">
        <font style={{fontSize:"13px"}}>Client Contact</font><br/>
<font><span className="text-start" style={{fontSize:"13px"}}><span className="" style={{color:'#0c8694'}}><i className="fa fa-phone"></i></span>&nbsp;&nbsp;&nbsp;{info && info.client_mobile}</span> <br/>
 </font>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
<div className="row mt-4">
  <div className="col-md-12" >
  <Slider {...settings}>
<div className="float-start proj-slider-imgs " style={{width:"100%"}}>
<img src={process.env.REACT_APP_IMG+(info&&info.tumbnail)} style={{height:"100%"}} className="w-100 "/>
</div>

{info && info.images.map((i)=>{
return(<>
<div className="float-start proj-slider-imgs" style={{width:"100%"}}>
<img src={process.env.REACT_APP_IMG+i} style={{height:"100%",width:"100%"}} />
</div>
</>)
})}

                   </Slider> 
  </div>
</div>



         <div className="row mt-5">
          <div className="col-lg-12 text-center pb-5">
            <h2 className="">You may also like..</h2>
          </div>
          {projs &&projs.map((i,index)=>{
  if(i._id!=param.id){
  return(<>
  
  <ProjectCard title={i.title} delay={(index+1)*100} address={i.address} onClick={()=>{setCount(count+1)}} thumbnail={i.tumbnail} date={i.date} details={i.details} client_name={i.client_name} client_mobile={i.client_mobile}  isRated={i.isRated} rating={i.rating} id={i._id} category={i.category}  />

  </>)
  }
})}
         
        </div> 
    </div>
    
 
    
    </>)
}