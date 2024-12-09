import React, { useEffect }  from "react"; 
import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";
export default function Header(props){
useEffect(()=>{
Aos.init({
    duration:500
});

},[])
    return(

        <>
        
        <div className="container-fluid">
        <div className="row border-bottom header_image" id="">
            {/* <div className="col-4 p-5  " style={{"position":"relative"}}>
                
                <div className="shadow p-5 " data-aos="fade-right" id="headerbox">
                    <h1 className="text-center"><b>{props.heading}</b></h1>
                    <h4 className="text-center"><NavLink to="/" className="text-decoration-none text-danger">Home <span id="icon_size"><i class="fa-solid fa-angle-right text-dark "></i></span> <span className="text-dark">{props.heading}</span></NavLink>  </h4>
                </div>

            </div>
            <div className="col-8 header_image p-5" data-aos="fade-left">
                
            </div> */}
            <div className="w-100 text-center">
            <h1 style={{fontSize:"50px",marginBottom:"0px",marginTop:"150px"}} className="text-light">{props.heading}</h1>
            <h6 className="text-center mt-3" style={{margin:"0px"}}><NavLink to="/" className="text-decoration-none " style={{color:"#98240d"}}>Home <span ><i class="fa-solid fa-angle-right text-light "></i></span> <span className="text-light">{props.heading}</span></NavLink>  </h6>
            </div>
         

        </div>
    </div>



        
        </>
    )
}