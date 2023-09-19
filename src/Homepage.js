import React from "react";
import "./App.css";
import Footer from "./components/MainPage/Footer/Footer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Noticeboard from "./components/MainPage/NoticeBoard/Noticeboard";
import Map from "./components/MainPage/Map/Map";

function Homepage() {
  return (
    <div>
      <ImageGallery />
      <Noticeboard />
      <br />
      <Map />
      <Footer />
    </div>
  );
}

export default Homepage;
