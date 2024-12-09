import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home/Home";
import Aboutus from "./Aboutus/Aboutus";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from "./Services/ServicesPage";
import ProjectPage from "./Projects/ProjectPage";
import ContactPage from "./Contact page/ContactPage";
import ProjectInfo from "./Projects/ProjectInfo";
import Gallery from "./Gallery/Gallery";
import BlogPage from "./Blog/BlogPage";
import BlogInfo from "./Blog/BlogInfo";
import FeebackForm from "./FeebackForm";
import Contact from "./Contact page/Contact";
import ProjByCat from "./Projects/ProjByCat";
import EnqFormSec from "./EnqFormSec";
import SubmitMessage from "./SubmitMessage";
import BlogCat from "./Blog/BlogCat";
import Privacyandpolicy from "./Home/Privacyandpolicy";
import FAQ from "./FAQ";
import ProjectSubCats from "./Projects/ProjectSubCats";
import Certificates from "./Home/Certificates";
import { refresh } from "aos";
import SubGal from "./Gallery/SubGal";
export default function App(){
    
    return(<>
    <Router>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:start" element={<Home/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/projects/:id" element={<ProjectInfo/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery/*" element={<Gallery/>}/>
           <Route path="/blogs" element={<BlogPage/>}/>
           <Route path="/blog/:id" element={<BlogInfo/>}/>
           <Route path="/add-feedback/:id" element={<FeebackForm/>}/>
           <Route path="/projects-list/:cata" element={<ProjByCat/>}/>
           <Route path="/enquiry" element={<EnqFormSec/>}/>
           <Route path="/submitted" element={<SubmitMessage/>}/>
           <Route path="/blog-cat/:cata" element={<BlogCat/>}/>
           <Route path="/privacyandpolicy" element={<Privacyandpolicy/>}/>
           <Route path="/faq" element={<FAQ/>}/>
           <Route path="/Gallery-sub-catagory/:id" element={<SubGal/>}/>
           <Route path="/projectes_sub_cats/:id" element={<ProjectSubCats/>}/>
           <Route path="/certification" element={<Certificates/>}/>
        </Routes>
        <Footer/>
    </Router>
   
    


    </>)
}