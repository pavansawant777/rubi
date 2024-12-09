import React from "react";
import { useNavigate } from "react-router-dom";
export default function LinkBtn(props){
  let nav=useNavigate();
  
    return(<>
    <>
  
  <button className="link-btn" onClick={()=>{nav('/projects-list/'+props.cata)}}>
    <div className="text">
      <span>View</span>
      <span>more</span>
      
    </div>
    <div className="clone">
      <span>View</span>
      <span>more</span>
      
    
    </div>
    <svg
      strokeWidth={2}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
    >
      <path
        d="M14 5l7 7m0 0l-7 7m7-7H3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  </button>
</>

    </>)
}