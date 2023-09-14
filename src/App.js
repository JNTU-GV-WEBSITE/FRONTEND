import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/Header/Header";
import ReadMore from "./components/MainPage/NoticeBoard/ReadMore";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor"; // Import the Chancellor component

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/readmore" element={<ReadMore />} />
      </Routes>
      <BelowBar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Add this route */}
        <Route path="/chancellor" element={<Chancellor />} />{" "}
        {/* Add this route */}
      </Routes>
    </div>
  );
}

export default App;
