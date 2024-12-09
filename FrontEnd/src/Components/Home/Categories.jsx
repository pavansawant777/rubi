import React, { useEffect } from "react";
import LinkBtn from "../Other Elements/LinkBtn";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Categories(){
    useEffect(()=>{
        Aos.init();
    },[])
    return(<>
      <div className="container-fluid overflow-hidden">
    <div className="row p-2">
        <div className="col-lg-12 ">
            <h3 className=" text-secondary" data-aos="fade-right" ><span className="text-danger">O</span>ur poupular Categories</h3>
        </div>
    </div>
   </div>
   <div className="container-fluid overflow-hidden p-4">
    <div className="row justify-content-center align-item-center">
        <div className="col-lg-8 rounded-4 shadow " data-aos="fade-down" id="cata-box-1">
            <div className="row">
                <div className="col-md-5 ps-5 text-light">
                    <h1 style={{fontSize:"55px"}} className="mt-5"><span className="text-danger">F</span>urniutre</h1>
                    <font>See our furniutre projects</font><br/>
                    <LinkBtn cata="Furniture"/>
                    
                </div>
            </div>
            
        </div>
    </div>
    <div className="row justify-content-center align-item-center">
        <div className="col-lg-8">
            <div className="row ">
                <div className="col-lg-6 p-0 pt-3" >
                <div className="w-100  shadow rounded-4" data-aos="fade-right" id="cata-box-2">
                <div className="row">
                <div className="col-md-5 ps-5 text-light">
                    <h1 style={{fontSize:"55px"}} className="mt-5"><span className="text-danger">K</span>itchen Trollies</h1>
                    <font>See our kitchen-trolly projects</font><br/>
                    <LinkBtn cata="Kitchen Trolly"/>
                    
                </div>
            </div>
                </div>
                </div>
                <div className="col-lg-6 p-0 p-lg-2 ps-lg-3 pe-0 pt-lg-3 pt-3  " >
                <div className="w-100  shadow rounded-4" data-aos="fade-left" id="cata-box-3">
                <div className="row">
                <div className="col-md-5 ps-5 text-light">
                    <h1 style={{fontSize:"55px"}} className="mt-5"><span className="text-danger">G</span>lass railing</h1>
                    <font>See our glass railing projects</font><br/>
                    <LinkBtn cata="Glass Railing"/>
                    
                </div>
            </div>
</div>
                </div>
            </div>
        </div>
    </div>
    <div className="row justify-content-center pt-3 align-item-center">
        <div className="col-lg-8 rounded-4 shadow " data-aos="fade-up" id="cata-box-4">
            <div className="row">
                <div className="col-md-5 ps-5 text-light">
                    <h1 style={{fontSize:"55px"}} className="mt-5"><span className="text-danger">S</span>teel railing</h1>
                    <font>See our steel railing projects</font><br/>
                    <LinkBtn cata="Steel"/>
                </div>
            </div>
            
        </div>
    </div>
   </div>
    
    </>)
}