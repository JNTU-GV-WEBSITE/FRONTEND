import React from 'react';
import '../Administration/AdminandDirectorates.css'; // Import your CSS file here
import { Link, useLocation } from 'react-router-dom';

function AcademicAudit() {
    const location = useLocation(); 
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      <Link
          to="/AcademicAudit"
          className={`menuButton ${location.pathname === '/AcademicAudit' ? 'active' : ''}`}
        >
          Director of Academic Audit
        </Link>
        <Link
          to="/AcademicPlanning"
          className={`menuButton ${location.pathname === '/AcademicPlanning' ? 'active' : ''}`}
        >
          Director of Academic Planning
        </Link>
        <Link
          to="/Admissions"
          className={`menuButton ${location.pathname === '/Admissions' ? 'active' : ''}`}
        >
          Director of Admissions
        </Link>
        <Link
          to="/AlumniRelations"
          className={`menuButton ${location.pathname === '/AlumniRelations' ? 'active' : ''}`}
        >
          Director of Alumni Relations
        </Link>
        <Link to="/Empowerment" className={`menuButton ${location.pathname === '/Empowerment' ? 'active' : ''}`}>Empowerment of Women & Grievances</Link>
        <Link to="/Evaluation" className={`menuButton ${location.pathname === '/Evaluation' ? 'active' : ''}`}>Evaluation</Link>
        <Link to="/FacultyDevelopmentCell" className={`menuButton ${location.pathname === '/FacultyDevelopmentCell' ? 'active' : ''}`}>Faculty Development Cell</Link>
        <Link to="/ForeignUniversityRelations" className={`menuButton ${location.pathname === '/ForeignUniversityRelations' ? 'active' : ''}`}>Foreign University Relations</Link>
        <Link
          to="/IQAC"
          className={`menuButton ${location.pathname === '/IQAC' ? 'active' : ''}`}
        >
          Director of IQAC
        </Link>
        <Link
          to="/Placements"
          className={`menuButton ${location.pathname === '/Placements' ? 'active' : ''}`}
        >
          Director of IIIT & Placements
        </Link>
        <Link
          to="/Research"
          className={`menuButton ${location.pathname === '/Research' ? 'active' : ''}`}
        >
          Director of Research & Development
        </Link>
        <Link
          to="/SportsAdministration"
          className={`menuButton ${location.pathname === '/SportsAdministration' ? 'active' : ''}`}
        >
          Director of University Games & Sports Administration
        </Link>
        
       
        
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Academic Audit
        </div><br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="profileImage">
            <center>
            <img src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/daa.jpeg" alt="Profile" />
            </center>
          </div>
          </div>
          <center>
          <div className="profileName">
            <h3>Dr. R. Rajeswara Rao</h3>
            <h3><b>Director of Academic Audit</b></h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Professor of Dept. of Computer Science and Engineering</h4>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: Email: daa@jntugv.edu.in</p><br></br>
<p>Dr. Ramisetty Rajeswara Rao is presently working as Director(i/c) Academic Audit, JNTU-GV, Vizianagaram. Dr. Rao completed his B. Tech in CSE in the year 1999 from V.R. Siddhartha Engineering College, Vijayawada. M.Tech in CSE from JNTUH-Hyderabad in the year 2003, PhD in CSE from JNTUH-Hyderabad in the year 2010. Dr. Rao pursued his Post Doc in University of Missouri, Colombia, USA in the year 2019.. Dr. Rao is having 20 + Years of Teaching Experience in the field of Computer Science and Engineering. Dr. Rao served as officer in charge of Hostels and Head of the Department, Vice Principal and Principal(i/c) JNTUK, UCEV, Vizianagaram. JNTUK University College of Engineering, Vizianagaram got NBA accreditation for CSE, ECE and Mechanical for 3 years during his leadership as NBA Co-coordinator. He also served the institution as IQAC Co-Ordinator. He authored one monograph titled with <strong>“Automatic Text Independent Speaker Recognition using Source Feature”</strong> (Lap LABERT Publishing GmbH Co. KG, Germany) in the year 2012 and Two Text-Books titled <strong>“Cloud Computing and virtualization” (BSP Publications)</strong> in the year 2014 and Software Engineering-A New Approach in the year 2018. Dr. Rao is Expert Visit Committee Member to <strong>AICTE, New Delhi</strong>. He is a state level committee member for Curriculum Development for the <strong>state of Andhra Pradesh appointed by AP-State Council for Higher Education (APSCHE)</strong> for Computer Science & Engineering. Eight students have received <strong>Ph. D degree under his guidance from JNTUH-Hyderabad and JNTU-Kakinada</strong>. To his credit he had published papers in <strong>ACM, ELSEVIER, SPRINGER</strong> and other reputed journals. He authored 86 Journals, presented papers in 35 conferences and chaired 23 session chairs and gave 43 invited talks in various reputed colleges in Andhra Pradesh and Telengana. Prof. Rao received <strong>Best Researcher</strong> Award from JNUK, Kakinada on 28th December, 2018. He received <strong>VIDYA RATAN</strong> award from T.E.H.E.G, New Delhi for the year 2011. Dr. Rao is recipient of Jyesta Acharya Award from Bharat Education Excellence Awards, Visakhapatnam, India. He is an academic advisor to National Cyber Safety and Security Standards (NCSSS). He is a Member of CSI and Sr. Member of IEEE. His Areas of Interest are Artificial Intelligence, Speech Processing, Pattern Recognition, NLP and Cloud Computing.</p>

          </div>
      </div>
  );
}

export default AcademicAudit;