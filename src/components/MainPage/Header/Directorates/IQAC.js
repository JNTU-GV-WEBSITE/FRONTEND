import React from 'react';
import '../Administration/AdminandDirectorates.css';// Import your CSS file here
import { Link, useLocation } from 'react-router-dom'; 

function IQAC() {
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
                Director of IQAC
            </div>
            <div class="allRightContentHolderContent">
                <div class="allRightContentHolderContentProfile">
                  <center>
                    <div class="allRightContentHolderContentProfileImage">
                        <img src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/profilephotos/iqac.jpg"alt="Profile"/>
                    </div>
                    <div class="allRightContentHolderContentProfileName">
                        <h3>Dr. K. Chandra Bhushana Rao</h3>
                    </div>
                    <div class="allRightContentHolderContentProfileDesignation">
                        <h4 class="regularStyleH4">Director of IQAC</h4>
                    </div>
                    <div class="allRightContentHolderContentProfileQualification">
                        <span>Professor of  Dept. of Electronics and Communication Engineering</span>
                    </div>
                    </center>
                </div>
                <hr/>
                <p>Email: diqac@jntugv.edu.in</p>
                <hr/>
                <p>Dr. Kota. Chandrabhushana Rao, completed his B.E, M.E and PhD in ECE from AU, Visakhapatnam during1992, 1995 and 2005 respectively. Having experience of 29 years in teaching, research and administration of engineering education. Worked as Principal, Dean, Professor and HoD in reputed private institutions during 1992-2012 in A.P. At present, working as a Professor and HoD of ECE at UCEV-JNTUK-Vizianagaram, A.P.</p>
                <hr/>
                <p className='a'>Achievements:</p>
                <p>❖	Senior member, IEEE since 2016.</p>
                <p>❖   Professor of ECE since Jan.2016.</p>
                <p>❖	HoD of ECE –UCEV since Feb.2017.</p>
                <p>❖	Published TWO Indian Patents; TWO copy rights;</p>
                <p>❖	Published 67 research papers, in reputed Journals and conference proceedings.</p>
                <p>❖	Guided TWO PhDs and seven scholars are working for PhD at present</p>
                <p>❖	Visited UK and Thailand to present research papers and chaired technical sessions.</p>
                <p>❖	Chaired several International conferences in India and abroad.</p>
                <p>❖	Fellow of IETE, Life member-ISTE, Life member-SEMC(I), LM- ISSS( IISc), Member- IAENG.</p>
                <p>❖	Research board member, Anna university, Vignan university, Integral university.</p>
                <p>❖	Chairman, BoS, ECE –UCEV-JNTUK since 2017.</p>
                <hr/>
                <p className='a'>Recognitions:</p>
                <p>❖	Evaluator- NBA since 2009.</p>
                <p>❖   EVC-Member, AICTE and Evaluator of NBA;</p>
                <p>❖	Obtained Level 5-CMI-UK- certificate.</p>
                <p>❖	Having National recognitions and associations with NAAC, NBA, MSME, CII, WIPRO, TCS andAICTE, learned and practiced quality SOPs to serve higher education in India.</p>
                <p>❖	Identified by AICTE as one of the 200 participants across India for UK-India EducationResearch Initiative (UKIERI) scheme and completed CMI certification during 2015-16.</p>
                <p>❖	Visited DUDLEY college of UK-Birmingham on invitation.</p>
                <p>❖	Expert member, RIFD Bureau of AICTE.</p>
                <p>❖	GB member and BoS member in reputed autonomous colleges appointed by JNTUK.</p>
                <p>❖	Coordinator for NAAC and NBA at UCEV-JNTUK during 2013-19.</p>
                <p>❖	NBA and NAAC- Consultant and trainer-so far guided Fifteen institutions successfully.</p>
                <p>❖	Resource person for ESCI-Hyderabad.</p>
                <p>❖	Chairman- CPRC- SAMEER Visakhapatnam.</p>
                <hr/>
                <p className='a'>Involvement in accreditations:</p>
                <p>❖	Expert member of National Board of Accreditation (NBA) since 2011, involved as member,
with Mock-accreditation team for Washington Accord (WA) regulations during Dec2012 withProf. Unnikrishnan, Advisor for INDIA, Washington Accord, USA.</p>
                <p>❖   Visited more than 20-good institutions for accreditation, as expert member of NBA so far.</p>
                <p>❖	Conducted Three OBA- OBE workshops of NBA at UCEV-JNTUK.</p>
                <p>❖	Conducted several OBE-OBA workshops across India at Jammu, Tamilnadu, MP, Maharashtra,
Uttar Pradesh, Rajasthan, Haryana, Telangana, AP and other states.</p>
                <hr/>
                <p className='a'>Given guidance towards NBA (SAR) OBE-OBA and NAAC (new SSR) to</p>
                <p>❖	SRKR Engg.College, a 30 year old institution at Bhimavaram.</p>
                <p>❖   Jayam COE, Dharmapuri, Tamilnadu.</p>
                <p>❖	Sona COE, salem , Tamilnadu.</p>
                <p>❖	Anna university COE, Trichy.</p>
                <p>❖	K.J. Somaih COE, Mumbai.</p>
                <p>❖	Learningware, winzest of Hyderabad towards Tier-1 and Tier-II formats of NBA.</p>
                <p>❖	VIIT- and VIEW at duvvada for SAR preparation.</p>
                <p>❖	Swarnandhra Group of colleges at Narsapur.</p>
                <p>❖	Vignan university at Guntur for NBA-SAR preparation.</p>
                <p>❖	VVIT-Guntur for SAR Preparation and SSR preparation.</p>
                <p>❖	GVP college of Engineering for Women, Visakhapatnam.</p>
                <p>❖	NBA and NAAC guidance has been given to many other reputed engineering colleges in A.P., Telangana,
Maharashtra, Madhya Pradesh, Jammu, Uttar Pradesh and Tamilnadu.</p>
                <p>❖	Conducted OBE-OBA workshops at Ujjain College of Engineering, MP, Bikaner College of Engineering- Rajasthan, Integral university, Lucknow and at ESCI chapter-Jammu.</p>
                <hr/>
                <p className='a'>Other Achievements:</p>
                <p>❖	Guided several students to acquire core jobs in ISRO, SAMEER, BSNL and other reputed organizations.</p>
                <p>❖   Obtained good feedback from students at UCEV and other institutes where I worked and taught.</p>
                <p>❖	Trained Contract faculty towards NBA, NAAC at UCEV.</p>
                <p>❖	Established RUSA project facilities at ECE Department.</p>
                <p>❖	Established SC/ST book bank at Library of UCEV during 2013-15.</p>
                <p>❖	TCS MoU under TAAP is executed during 2015 as TPO at UCEV.</p>
                <p>❖	Executed THREE MoUs with ECE department during 2020-21.</p>
                <p>❖	Trained students through Virtual labs using mobile app- first of its kind!</p>
                <p>❖	Given about 23 webinars as Resource person during 2020-21 Lock down.</p>
            </div>
        </div>
    </div>
  );
}

export default IQAC;