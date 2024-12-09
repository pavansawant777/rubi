import React from "react";
import { useNavigate } from "react-router-dom";
export default function SubCatCard(props){
    let nav=useNavigate();
    
    return(<>
     <div className="col-lg-6  " >
        <div className="row  "  style={{padding:"10px"}} >
            <div className="col-lg-12 cat-card" onClick={()=>{nav('/gallery/'+props.category)}} style={{position:"relative",backgroundImage:`linear-gradient(hsla(0,100%,0%,0.1),hsla(0,100%,0%,0.7)),url('${process.env.REACT_APP_IMG+props.img}')`,height:"250px",padding:"10px",backgroundPosition:"center center",backgroundSize:"cover"}}>
            <button className="atn-btn text-light fs-6" style={{position:"absolute",bottom:"10px",left:"10px",fontFamily:"sans-serif"}}>
  {props.category}

</button>
            </div>
            {/* <div className="col-lg-12 p-2 pb-0 text-center">
                <h6>{props.category}</h6>
            </div> */}
        </div>
    </div>
    
    </>)
}