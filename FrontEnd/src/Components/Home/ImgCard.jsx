import React from "react";
export default function ImgCard(props){
    return(<>
    <div className="col-md-12 mb-3 mob-img" style={{backgroundImage: `url(http://localhost:1000/images/${props.img})`,backgroundPosition:'center center',backgroundSize:'cover',height:'200px'}} >

    </div>
    
    
    </>)
}