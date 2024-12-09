import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CategoryNav from '../Projects/CategoryNav.jsx'
export default function ImgCataNav() {
  let [cats,setCats]=useState([]);
  let fetchCats=async()=>{
    let d=await axios.get(process.env.REACT_APP_API_URL+'categories');
    setCats(d.data);
  }
  useEffect(()=>{
    fetchCats();
  })
  let nav=useNavigate();
  const [activeTab, setActiveTab] = useState(0); // Track the active tab



  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab as active
  };
  return (
    <>
      {/* <div className="container-fluid p-4">
        <div className="row align-item-center justify-content-center">
          <div className="col-lg-7 me-auto ms-auto mb-lg-0">
            <ul className="nav nav-underline">
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link fs-5 text-dark"
                  to="/gallery"
                  
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link fs-5 text-dark"
                  to="/gallery/videos"
                  
                >
                  Videos
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link fs-5 text-dark"
                  to="/gallery/furniture"
                  
                >
                  <span style={{textTransform:"capitalize"}}>furniture</span>
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link fs-5 text-dark"
                  to="/gallery/trollies"
                  
                >
                  <span style={{textTransform:"capitalize"}}>kitchen trollies</span>
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink
                  className="nav-link fs-5 text-dark"
                  to="/gallery/railing"
                
                >
                  <span style={{textTransform:"capitalize"}}>railing</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="row d-none d-lg-block">
        <div className="tabs-container" >
      <div className="tabs-wrapper">
        <div className="tabs" style={{ width: `${cats&&cats.length * 100}px` }}>
          {cats&&cats.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <NavLink to={"/gallery/"+((tab.category=='All')?'':tab.category)}  className="text-decoration-none btn text-light  text-light " style={{backgroundColor:"#98240d"}}>
              {tab.category}
              </NavLink>
           
            </div>
          ))}
           <div
              
              className={`tab`}
              
            >
           <NavLink  to={'/gallery/videos'} className="text-decoration-none text-dark">
              Videos
              </NavLink>
              </div>
        </div>
      </div>
   
    </div>
        </div>
        <div className="row d-block d-lg-none">
        <div className="row d-block p-3 pb-0 d-lg-none">
  <div className="col-3">
  <div className="btn-group">
<button
 type="button"
 className="btn btn-danger w-25  text-light dropdown-toggle"
 data-bs-toggle="dropdown"
 aria-expanded="false"
 style={{backgroundColor:"#98240d"}}
>
 Category
</button>
<ul className="dropdown-menu overflow-scroll" style={{height:"300px"}}>
  {cats && cats.map((i)=>{
             return(<>
            <li className="list-group-item" >  <NavLink
 to={((i.category=='All')?'/gallery':"/gallery/"+i.category)}
 className="text-dark lnk"

>
{i.category}
</NavLink></li>
             </>)
         })} 
</ul>
</div>
  </div>

</div>
        </div>
      </div>
    
    </>
  );
}