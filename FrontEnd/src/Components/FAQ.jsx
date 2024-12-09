import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function FAQ(){
    let [f,setF]=useState([]);
    let fetchData=async()=>{
        let d=await axios.get(process.env.REACT_APP_API_URL+"get-faqs");
        setF(d.data);
    }
    let {pathname}=useLocation();
    useEffect(()=>{
      window.scrollTo(0, 0);

      fetchData();

    },[pathname])
    return(<>
   <Header heading="Frequently Asked Questions"/>
   <div className="container p-5">
    <div className="row">
        <div className="col-lg-12">
          <h1>FAQ’s</h1>
          <div className="accordion" id="accordionExample">
            {f && f.map((i,ind)=>{
                return(
                <div className="accordion-item ">
                    <h2 className="accordion-header ">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseOne"+ind}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        
                      {i.question}
                      </button>
                    </h2>
                    <div
                      id={"collapseOne"+ind}
                      className={"accordion-collapse collapse "+((ind==0)?"show":"")}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      {i.answer}
                      </div>
                    </div>
                  </div>)
            })}
  
 
</div>

        </div>
    </div>
   </div>
   
    </>)
}