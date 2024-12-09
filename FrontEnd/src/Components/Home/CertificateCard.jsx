import React from "react";
export default function CertificateCard(props){
    return(<>
    <div className="col-lg-4 col-md-6 p-4" onClick={()=>{document.getElementById(props.id).click()}}>
        <div className="row">
            <div className="col-lg-12 p-0  shadow" style={{cursor:"pointer"}}>
                <img src={process.env.REACT_APP_IMG+props.img}  style={{height:"250px"}}/>
            </div>
        </div>
    </div>
    
    <>
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target={"#exampleModal"+props.id}
    id={props.id}
  >
    Launch demo modal
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id={"exampleModal"+props.id}
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
         {props.title}
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
               <img src={process.env.REACT_APP_IMG+props.img} style={{width:"100%",height:"300px"}}/>

        </div>
     
      </div>
    </div>
  </div>
</>

    </>)
}