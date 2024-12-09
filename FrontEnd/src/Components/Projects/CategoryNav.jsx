import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
 // Import custom styles for the tabs

const ScrollableTabs = () => {
  let [cats,setCats]=useState([]);
  let fetchCats=async()=>{
   let d=await axios.get(process.env.REACT_APP_API_URL+'categories');
   setCats(d.data);
  }
  const [activeTab, setActiveTab] = useState(0); // Track the active tab



  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab as active
  };
  useEffect(()=>{
fetchCats();
  },[])

  return (
    <div className="container-fluid">
      <div className="row d-none  d-lg-block">
      <div className="tabs-container" >
      <div className="tabs-wrapper">
        <div className="tabs" style={{ width: `${cats&&cats.length * 100}px` }}>
          {cats&&cats.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <NavLink  onClick={()=>{}} to={ (tab.category=='All')?'/projects' :'/projects-list/'+tab.category} className="text-decoration-none btn text-light" style={{backgroundColor:"#98240d"}}>
              {tab.category}
              </NavLink>
           
            </div>
          ))}
        </div>
      </div>
   
    </div>
      </div>
      <div className="row d-block p-3 pb-0 d-lg-none">
  <div className="col-3">
  <div className="btn-group">
<button
 type="button"
 className="btn btn-danger w-25 text-light dropdown-toggle"
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
 to={((i.category=='All')?'/projects':"/projects-list/"+i.category)}
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
 
  );
};

export default ScrollableTabs;
