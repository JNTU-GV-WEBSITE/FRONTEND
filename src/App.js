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
import Footer from './components/MainPage/Footer/Footer';
import AcademicAudit from './components/MainPage/Header/Directorates/AcademicAudit';
import AcademicPlanning from './components/MainPage/Header/Directorates/AcademicPlanning';
import Admissions from './components/MainPage/Header/Directorates/Admissions';
import AluminiRelations from './components/MainPage/Header/Directorates/AluminiRelations';

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
      <Route path="/ViceChancellor" element={<ViceChancellor />} /> 
      <Route path="/Registrar" element={<Registrar />} /> 
      <Route path="AcademicAudit" element={<AcademicAudit />} /> {/* Add this route */}
      <Route path="/AcademicPlanning" element={<AcademicPlanning />} /> 
      <Route path="/Admissions" element={<Admissions />} /> 
      <Route path="/AluminiRelations" element={<AluminiRelations />} /> {/* Add this route */}
      </Routes>
      <Footer />

    </div>
  );
}

export default App;