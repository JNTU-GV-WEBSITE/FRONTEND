import React from 'react';
import './AdminandDirectorates.css';  // Import your CSS file here
import { Link, useLocation } from 'react-router-dom';
function Registrar() {
  const location = useLocation(); 
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
        <Link to="/Chancellor" className={`menuButton ${location.pathname === '/Chancellor' ? 'active' : ''}`}>Chancellor</Link>
        <Link to="/ViceChancellor" className={`menuButton ${location.pathname === '/ViceChancellor' ? 'active' : ''}`}>Vice Chancellor</Link>
        <Link to="/Registrar" className={`menuButton ${location.pathname === '/Registrar' ? 'active' : ''}`}>Registrar</Link>
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Registrar
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            <img src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/registrar.jpeg" alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Prof.Dr.G.Jaya Suma</h3>
            <h3>Registrar</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Professor of Dept.of information Technology</h4>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: registrar@jntugv.edu.in</p>

<p>Dr. G. Jaya Suma, present working as a Professor in Department of Information Technology, Registrar, Director (i/c) of Industry Institute Interaction Placements & Training & Director(i/c) of Faculty Development Cell and Executive Council member of JNTUGV - Vizianagaram, AP. Completed her B.Tech (CS&SE), MTech (CS&T), Ph.D(CSE). Having experience of 22 plus years Teaching, Research and Administration of Engineering Education</p>

<p className='a'>Administration Contributions</p>
<p>❖	Served as Head, Department of Information Technology, university college of Engineering, since 2014 to August 2022.</p>
<p>❖    Special Officer of New Engineering College, JNTU-GV, Kurupam since from May 2020 to October 2022.</p>
<p>❖	IQAC Coordinator, university college of Engineering January 2020 to September 2022.</p>
<p>❖	SPOC of university college of Engineering for NPTEL Online Courses to till date.</p>
<p>❖	Convener for Women Empowerment & Grievance Cell, JNTUK, University College of Engineering from September 2017 to till date.</p>
<p>❖	Secretary & Member for Women Empowerment & Grievance Cell from January 2014-August 2017.</p>
<p className='a'>Academic Contributions</p>
<p>❖	Specialization of Artificial Intelligence, Data Mining, Machine Learning, Deep Learning, Soft Computing, and Internet of Things.</p>
<p>❖    Authored Book Titled “Artificial Intelligence & Machine Learning-2022.</p>
<p>❖	Awarded CMI Level 5 in Management and Leadership-2021.</p>
<p>❖	Awarded Out Standing Women in Engineering-VIWA-2017.</p>
<p>❖	Awarded Woman Researcher in Science and Technology-2020.</p>
<p>❖	Chairperson BOS, Dept. of Information Technology. (2017-2022).</p>
<p>❖	Member of Board of Studies for 3 years (2007-2010) in the Dept of CSE, GIT, GITAM University.</p>
<p className='a'>Research Contributions</p>
<p>❖	Awarded Six PhDs and Eight Scholars are working for PhD at present.</p>
<p>❖    Published 3 patents.</p>
<p>❖	Published 54 International Journals, 20 International Conferences, 2 National Conferences.</p>
<p>❖	Published 5 Book chapters.</p>
<p>❖	32 workshops Organized, 58 Attended, 5 Chaired sessions in international Conferences, and 32 technical talks delivered.</p>
<p className='a'>Professional Contributions</p>
<p>❖	Member of CSI (ID – 01170956).</p>
<p>❖  Senior Fellow of IEEE-92245858.</p>
<p>❖	Member of ISTE- (ID – LM44520).</p>
<p>❖	Faculty sponsor of IEEE WIE and faculty sponsor of ACM CHAPTER.</p>
 
        </div>
      </div>
    </div>
  );
}

export default Registrar;