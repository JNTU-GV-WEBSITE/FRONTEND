import React from 'react';
import './App.css';
import Homepage from './Homepage';
import BelowBar from './components/BelowBar/BelowBar';
import Header from './components/MainPage/Header/Header';
import ReadMore from './components/MainPage/NoticeBoard/ReadMore';
import Chancellor from './components/MainPage/Header/Administration/Chancellor'; // Import the Chancellor component

import Vicechancellor from './components/MainPage/Header/Administration/Vicechancellor';
import Registrar from './components/MainPage/Header/Administration/Registrar';
import SportsAdministration from './components/MainPage/Header/Directorates/SportsAdministration';
import { Route, Routes } from 'react-router-dom';
import Research from './components/MainPage/Header/Directorates/Research';
import Placements from './components/MainPage/Header/Directorates/Placements';
import IQAC from './components/MainPage/Header/Directorates/IQAC';


import { Route, Routes } from 'react-router-dom';

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
      <Route path="/chancellor" element={<Chancellor />} /> {/* Add this route */}

      <Route path="/Vicechancellor" element={<Vicechancellor />} />
      <Route path="/Registrar" element={<Registrar /> } />
      <Route path="/IQAC" element={<IQAC /> } />
      <Route path="/Placements" element={<Placements /> } />
      <Route path="/Research" element={<Research/> } />
      <Route path="/SportsAdministration" element={<SportsAdministration />} />
      </Routes>
    

      </Routes>

    </div>
  );
}

export default App;