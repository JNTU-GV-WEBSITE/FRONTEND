import React from 'react';
import './App.css';
import Homepage from './Homepage';
import BelowBar from './components/BelowBar/BelowBar';
import Header from './components/MainPage/Header/Header';
import ReadMore from './components/MainPage/NoticeBoard/ReadMore';
import Chancellor from './components/MainPage/Header/Administration/Chancellor'; 
import ViceChancellor from './components/MainPage/Header/Administration/ViceChancellor';
import Registrar from './components/MainPage/Header/Administration/Registrar';
import Empowerment from './components/MainPage/Header/Directorates/Empowerment';
import Evaluation from './components/MainPage/Header/Directorates/Evaluation';
import FacultyDevelopmentCell from './components/MainPage/Header/Directorates/FacultyDevelopmentCell';
import ForeignUniversityRelations from './components/MainPage/Header/Directorates/ForeignUniversityRelations';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/MainPage/Footer/Footer';

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
      <Route path="/Empowerment" element={<Empowerment />} />
      <Route path="/Evaluation" element={<Evaluation />} />  
      <Route path="/FacultyDevelopmentCell" element={<FacultyDevelopmentCell />} /> 
      <Route path="/ForeignUniversityRelations" element={<ForeignUniversityRelations />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;