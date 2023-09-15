import React from 'react';
import './App.css';
import Footer from './components/MainPage/Footer/Footer';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Policies from './components/MainPage/PoliciesSection/Policies';
import Notifications from './components/Notifications/Notifications';
import Noticeboard from './components/MainPage/NoticeBoard/Noticeboard';
import Map from './components/MainPage/Map/Map';

function Homepage() {
  return (
    <div>
      <div className="horizontal-container">
        <Notifications />
        <ImageGallery />
        <Policies />
      </div>
      <Noticeboard />
      <br />
      <Map />
      <Footer />
    </div>
  );
}

export default Homepage;