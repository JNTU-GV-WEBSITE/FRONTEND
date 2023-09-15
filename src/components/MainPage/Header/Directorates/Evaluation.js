import React from 'react';
import '../Administration/AdminandDirectorates.css'; // Import your CSS file here
import { Link, useLocation } from 'react-router-dom';
function Evaluation() {
  const location = useLocation(); 
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
        <Link to="/Empowerment" className={`menuButton ${location.pathname === '/Empowerment' ? 'active' : ''}`}>Empowerment of Women & Grievances</Link>
        <Link to="/Evaluation" className={`menuButton ${location.pathname === '/Evaluation' ? 'active' : ''}`}>Evaluation</Link>
        <Link to="/FacultyDevelopmentCell" className={`menuButton ${location.pathname === '/FacultyDevelopmentCell' ? 'active' : ''}`}>Faculty Development Cell</Link>
        <Link to="/ForeignUniversityRelations" className={`menuButton ${location.pathname === '/ForeignUniversityRelations' ? 'active' : ''}`}>Foreign University Relations</Link>
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Director of Evaluation
        </div><br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
<img src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/director-of-evaluation.png" alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Dr.D.Rajya Lakshmi</h3>
            <h3>Director of Evaluation</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Professor of Dept. of Computer Science and Engineering</h4>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: de@jntugv.edu.in</p><br></br>
<p>Dr. D. Rajya Lakshmi obtained her BTech in Electronics and
Communications Engineering from Andhra University, M.Tech in
Computer Science from Andhra University, and PhD from JNTU
Hyderabad, India. She is currently working as Professor in the
Department of Computer Science and Engineering at JNTUGV,
Vizianagaram, India.</p>

<p>Her research interests arevested in the area of Image Processing,
Machine Learning, Data Mining and Software Engineering. She
accrued a total teaching experience of around 29 years in which
she found her calling with academia and is pursuing her passion
serving in various capacities as Professor,Principal, Vice Principal
Academics, HOD, CSE & IT,BoSmemberBoS Chairperson,
Academic Council Member, Regional Co-Ordinator for APSLPRB,
Co-Ordinator for campus wide network, Member Research
Review Committee at Department of CSE, JNTUK, Co-Ordinator
for AP POLYCET, APEMACET, Member, CAC, INTUK,
UCEN&UCEKfive emerging courses.</p>
<p>She has more than 75 research publications in various National,
International Journals and Conferences, Book Chapters, Books
andPatents published to her credit. With over 29 years of
experience, Dr. D. Rajya Lakshmi is well reputed for her Guest
Lectures on various topics spanning from Image Processing to
Career Advancement and is widely known for her commitment to
teaching and catering to students needs at large.She guided 13
students to completion of their Ph.D and is guiding08 Ph.D
students. Dr. Rajya Lakshmi is known for her unique initiatives
like Women Empowerment and makes her mark in the roles that

she adorns.
</p>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;