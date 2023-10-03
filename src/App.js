import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/Header/Header";
import ReadMore from "./components/MainPage/NoticeBoard/ReadMore";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor/Chancellor";
import ViceChancellor from "./components/MainPage/Header/Administration/ViceChancellor/ViceChancellor";
import Registrar from "./components/MainPage/Header/Administration/Registrar/Registrar";
import AcademicAudit from "./components/MainPage/Header/Directorates/AcademicAudit/AcademicAudit";
import AcademicPlanning from "./components/MainPage/Header/Directorates/AcademicPlanning/AcademicPlanning";
import Admissions from "./components/MainPage/Header/Directorates/Admissions/Admissions";
import AlumniRelations from "./components/MainPage/Header/Directorates/AlumniRelations/AlumniRelations";
import Empowerment from "./components/MainPage/Header/Directorates/Empowerment/Empowerment";
import Evaluation from "./components/MainPage/Header/Directorates/Evaluation/Evaluation";
import FacultyDevelopmentCell from "./components/MainPage/Header/Directorates/FacultyDevelopmentCell/FacultyDevelopmentCell";
import ForeignUniversityRelations from "./components/MainPage/Header/Directorates/ForeignUniversityRelations/ForeignUniversityRelations";
import IQAC from "./components/MainPage/Header/Directorates/IQAC/IQAC";
import Placements from "./components/MainPage/Header/Directorates/Placements/Placements";
import Research from "./components/MainPage/Header/Directorates/Research/Research";
import SportsAdministration from "./components/MainPage/Header/Directorates/SportsAdministration/SportsAdministration";
import { Route, Routes } from "react-router-dom";
import AcademicsOP from "./components/MainPage/Header/Academics/Programs Offered/AcademicsOP";
import ConstituentCollegesOP from "./components/MainPage/Header/Academics/Constituent Colleges/ConstituentCollegesOP";
import AdmissionsOP from "./components/MainPage/Header/Academics/Admissions/AdmissionsOP";
import AffliatedCollegesOP from "./components/MainPage/Header/Academics/Affliated Colleges/AffliatedCollegesOP";
import ContactUs from "./components/MainPage/Header/ContactUs";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";
import AdministrationMain from "./components/MainPage/Header/Administration/AdministrationMain";
import DirectoratesMain from "./components/MainPage/Header/Directorates/DirectoratesMain";
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
          <Route
            path="AffliatedCollegesOP"
            element={<AffliatedCollegesOP />}
          />
        </Route>
        <Route path="/AdministrationMain" element={<AdministrationMain />}>
        <Route path="Chancellor" element={<Chancellor />} />{" "}
        {/* Add this route */}
        <Route path="ViceChancellor" element={<ViceChancellor />} />
        <Route path="Registrar" element={<Registrar />} />
        </Route>
        <Route path="/DirectoratesMain" element={<DirectoratesMain />}>
        <Route path="AcademicAudit" element={<AcademicAudit />} />{" "}
        {/* Add this route */}
        <Route path="AcademicPlanning" element={<AcademicPlanning />} />
        <Route path="Admissions" element={<Admissions />} />
        <Route path="AlumniRelations" element={<AlumniRelations />} />{" "}
        {/* Add this route */}
        <Route path="Empowerment" element={<Empowerment />} />
        <Route path="Evaluation" element={<Evaluation />} />
        <Route
          path="FacultyDevelopmentCell"
          element={<FacultyDevelopmentCell />}
        />
        <Route
          path="ForeignUniversityRelations"
          element={<ForeignUniversityRelations />}
        />
        <Route path="IQAC" element={<IQAC />} />
        <Route path="Placements" element={<Placements />} />
        <Route path="Research" element={<Research />} />
        <Route
          path="SportsAdministration"
          element={<SportsAdministration />}
        />
        </Route>
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
