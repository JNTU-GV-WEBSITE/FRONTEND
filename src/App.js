import React from 'react';
import './App.css';
import Homepage from './Homepage';
import BelowBar from './components/BelowBar/BelowBar';
import Header from './components/MainPage/Header/Header';
import ReadMore from './components/MainPage/NoticeBoard/ReadMore';
import Chancellor from './components/MainPage/Header/Administration/Chancellor'; 
import ViceChancellor from './components/MainPage/Header/Administration/ViceChancellor';
import Registrar from './components/MainPage/Header/Administration/Registrar';
import { Route, Routes } from 'react-router-dom';
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