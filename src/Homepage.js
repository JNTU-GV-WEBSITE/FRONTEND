import React from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Noticeboard from "./components/MainPage/NoticeBoard/Noticeboard";
import Map from "./components/MainPage/Map/Map";
import UpdatePanel from "./components/UpdatePanel/UpdatePanel";
import Footer from "./components/MainPage/Footer/Footer";
import './Homepage.css'
function Homepage() {
  return (
    <div>
      <ImageGallery />
      <div className="newsNUpdates">
        <UpdatePanel />
      </div>
      <Noticeboard />
      <br />
      <div class="aboutmap"><Map /></div>
      <Footer />
    </div>
  );
}

export default Homepage;
