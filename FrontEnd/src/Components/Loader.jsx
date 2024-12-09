import React from "react";
export default function Loader(){
    return(<>
    <div className="container-fluid " style={{height:"600px"}}>
        <div className="row justify-content-center align-item-center">
            <div className="col-lg-6 justify-content-center align-item-center">
            <div className="loader" style={{margin:"250px auto"}}>
  <div className="loader-square" />
  <div className="loader-square" />
  <div className="loader-square" />
  <div className="loader-square" />
  <div className="loader-square" />
  <div className="loader-square" />
  <div className="loader-square" />
</div>
            </div>
        </div>
    </div>
   

    </>)
}