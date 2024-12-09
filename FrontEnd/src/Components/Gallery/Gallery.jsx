import React from "react";
import Header from "../Header";
import GalleryCard from "./GalleryCard";
import ImgCataNav from "./ImgCataNav";
import { Route, Routes } from "react-router-dom";
import AllGallery from "./AllGallery";
import VideoCata from "./VideoCata";
import ImagesByCategory from "./ImagesByCategory";
export default function Gallery(){
    return(<>
    <Header heading="Gallery"></Header>
    <ImgCataNav/>
   <Routes>
    <Route path="/" element={<AllGallery/>}/>
    <Route path="/videos" element={<VideoCata/>}/>
    <Route path="/:cata" element={<ImagesByCategory/>}/>
   </Routes> 
   {/* <>
 
  <div className="container py-3">
    <div className="gallery" style={{ display: "none" }}>
      <img
        data-gallery-tag="furniture"
        className="gallery-item"
        src="https://images.pexels.com/photos/413727/pexels-photo-413727.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <div className="gallery-item h-100">
        <div className="bg-danger d-flex flex-column text-warning justify-content-center align-items-center h-100 w-100 p-3">
          <p className="lead m-0">I have no tag!</p>
        </div>
      </div>
      <img
        data-gallery-tag="furniture"
        className="gallery-item"
        src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="coffee"
        className="gallery-item"
        src="https://images.pexels.com/photos/539432/pexels-photo-539432.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="men"
        className="gallery-item"
        src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="dogs"
        className="gallery-item"
        src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="women"
        className="gallery-item"
        src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="dogs"
        className="gallery-item"
        src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <div className="gallery-item h-100">
        <div className="bg-warning d-flex flex-column text-dark justify-content-center align-items-center h-100 w-100 p-3">
          <p className="lead m-0">You can't filter me!</p>
        </div>
      </div>
      <img
        data-gallery-tag="coffee"
        className="gallery-item"
        src="https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="men"
        className="gallery-item"
        src="https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="women"
        className="gallery-item"
        src="https://images.pexels.com/photos/1036621/pexels-photo-1036621.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="coffee"
        className="gallery-item"
        src="https://images.pexels.com/photos/272887/pexels-photo-272887.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="dogs"
        className="gallery-item"
        src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <div className="gallery-item h-100">
        <div className="bg-info d-flex flex-column text-warning justify-content-center align-items-center h-100 w-100 p-3">
          <p className="lead m-0">Me neigher.</p>
        </div>
      </div>
      <img
        data-gallery-tag="women"
        className="gallery-item"
        src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
      <img
        data-gallery-tag="dogs"
        className="gallery-item"
        src="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=350"
      />
    </div>
    <hr />
    <i>more to come here...</i>
  </div>
</> */}

   
    </>)
}