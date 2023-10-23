import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/Header/Header";

import AboutJNTUGV from "./components/MainPage/Header/Aboutus/AboutJNTUGV/AboutJNTUGV";
import Vision from "./components/MainPage/Header/Aboutus/Vision/Vision";
import Mission from "./components/MainPage/Header/Aboutus/Mission/Mission";
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
import AboutusMain from "./components/MainPage/Header/Aboutus/AboutusMain";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";
import AdministrationMain from "./components/MainPage/Header/Administration/AdministrationMain";
import DirectoratesMain from "./components/MainPage/Header/Directorates/DirectoratesMain";
import ExaminationMain from "./components/MainPage/Header/Examinations/ExaminationMain";
import EvaluationExam from "./components/MainPage/Header/Examinations/EvaluationExam";
import Controller from "./components/MainPage/Header/Examinations/Controller";
import ControllerSDC from "./components/MainPage/Header/Examinations/ControllerSDC";
import Controller1 from './components/MainPage/Header/Examinations/Controller1';
import Controller2 from './components/MainPage/Header/Examinations/Controller2';
import Controller3 from './components/MainPage/Header/Examinations/Controller3';
import ControllerPG from './components/MainPage/Header/Examinations/ControllerPG';
import ExamResults from './components/MainPage/Header/Examinations/ExamResults';
import Grievance from "./components/GrievanceForm/GrievanceForm";


function App() {
  return (
    <div>
     
      <BelowBar />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Add this route */}
       <Route path="/Aboutus" element={<AboutusMain />}>
        <Route path="About-JNTUGV" element={<AboutJNTUGV />}/>
        <Route path="Vision" element={<Vision />}/>
        <Route path="Mission" element={<Mission />}/>
       </Route>
        <Route path="/Academics" element={<AcademicsMain />}>
          <Route
            path="Constituent-Colleges"
            element={<ConstituentCollegesOP />}
          />
          <Route path="Programs-Offered" element={<AcademicsOP />} />
          <Route path="Admissions" element={<AdmissionsOP />} />
          <Route path="Affliated-Colleges" element={<AffliatedCollegesOP />} />
        </Route>
        <Route path="/Administration" element={<AdministrationMain />}>
        <Route path="Chancellor" element={<Chancellor />} />{" "}
        {/* Add this route */}
        <Route path="ViceChancellor" element={<ViceChancellor />} />
        <Route path="Registrar" element={<Registrar />} />
        </Route>
        <Route path="/Directorates" element={<DirectoratesMain />}>
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
        
        <Route path="/Examination" element={<ExaminationMain />}>
          <Route path="EvaluationExam" element={<EvaluationExam />} />
          <Route path="Controller" element={<Controller />} />
          <Route path="ControllerSDC" element={<ControllerSDC />} />
          <Route path="Controller1" element={<Controller1 />}/>
          <Route path="Controller2" element={<Controller2 />} />
          <Route path="Controller3" element={<Controller3 />} />
          <Route path="ControllerPG" element={<ControllerPG />}/>
          <Route path="ExamResults" element={<ExamResults />} />

        </Route>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/GrievanceForm" element={<Grievance />}/>
      </Routes>
    </div>
  );
}

export default App;
