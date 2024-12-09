import React from "react";
export default function YoutubeCard(props){
 
    return(<>
                <div class="col-md-4 col-lg-3 mb-2" data-aos="zoom-in">
                <iframe height={'480px'} width={'100%'} src={props.link}></iframe>
            </div>

    </>)
}