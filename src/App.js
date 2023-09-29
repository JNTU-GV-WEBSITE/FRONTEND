import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/Header/Header";
import ReadMore from "./components/MainPage/NoticeBoard/ReadMore";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor";
import ViceChancellor from "./components/MainPage/Header/Administration/ViceChancellor";
import Registrar from "./components/MainPage/Header/Administration/Registrar";
import AcademicAudit from "./components/MainPage/Header/Directorates/AcademicAudit";
import AcademicPlanning from "./components/MainPage/Header/Directorates/AcademicPlanning";
import Admissions from "./components/MainPage/Header/Directorates/Admissions";
import AlumniRelations from "./components/MainPage/Header/Directorates/AlumniRelations";
import Empowerment from "./components/MainPage/Header/Directorates/Empowerment";
import Evaluation from "./components/MainPage/Header/Directorates/Evaluation";
import FacultyDevelopmentCell from "./components/MainPage/Header/Directorates/FacultyDevelopmentCell";
import ForeignUniversityRelations from "./components/MainPage/Header/Directorates/ForeignUniversityRelations";
import IQAC from "./components/MainPage/Header/Directorates/IQAC";
import Placements from "./components/MainPage/Header/Directorates/Placements";
import Research from "./components/MainPage/Header/Directorates/Research";
import SportsAdministration from "./components/MainPage/Header/Directorates/SportsAdministration";
import { Route, Routes } from "react-router-dom";
import AcademicsOP from "./components/MainPage/Header/Academics/Programs Offered/AcademicsOP";
import ConstituentCollegesOP from "./components/MainPage/Header/Academics/Constituent Colleges/ConstituentCollegesOP";
import AdmissionsOP from "./components/MainPage/Header/Academics/Admissions/AdmissionsOP";
import AffliatedCollegesOP from "./components/MainPage/Header/Academics/Affliated Colleges/AffliatedCollegesOP";
import ContactUs from "./components/MainPage/Header/ContactUs";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";

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
        <Route path="/AcademicsMain" element={<AcademicsMain />}>
          <Route
            path="ConstituentCollegesOP"
            element={<ConstituentCollegesOP />}
          />
          <Route path="ProgramsofferedOP" element={<AcademicsOP />} />
          <Route path="AdmissionsOP" element={<AdmissionsOP />} />
          <Route path="AffliatedCollegesOP" element={<AffliatedCollegesOP />} />
        </Route>
        <Route path="/chancellor" element={<Chancellor />} />{" "}
        {/* Add this route */}
        <Route path="/ViceChancellor" element={<ViceChancellor />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/AcademicAudit" element={<AcademicAudit />} />{" "}
        {/* Add this route */}
        <Route path="/AcademicPlanning" element={<AcademicPlanning />} />
        <Route path="/Admissions" element={<Admissions />} />
        <Route path="/AlumniRelations" element={<AlumniRelations />} />{" "}
        {/* Add this route */}
        <Route path="/Empowerment" element={<Empowerment />} />
        <Route path="/Evaluation" element={<Evaluation />} />
        <Route
          path="/FacultyDevelopmentCell"
          element={<FacultyDevelopmentCell />}
        />
        <Route
          path="/ForeignUniversityRelations"
          element={<ForeignUniversityRelations />}
        />
        <Route path="/IQAC" element={<IQAC />} />
        <Route path="/Placements" element={<Placements />} />
        <Route path="/Research" element={<Research />} />
        <Route
          path="/SportsAdministration"
          element={<SportsAdministration />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
