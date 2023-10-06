import React from 'react';
import Controlleri from "../../../../assets/ExaminationImages/Controlleri.jpg";
import './Examinations.css';

function Controller() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Controller of Examinations
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {Controlleri} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3>Dr. V S Vakula</h3>
          </div>
          <div className="profileDesignation">
            <h4 className="regularStyleH4">Controller of Examinations</h4><br></br>
          </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: ce@jntugv.edu.in</p>
          <hr />
          <p>Dr VS Vakula is having a total of 17 years of experience in teaching and research. She has 09 years of administrative experience in JNTUK, UCEV and 05 years of administrative experience in other colleges. She worked as Project Engineer (Electrical), Officer in-charge of Hostels, Head of the Department, Deputy Warden and presently working as Controller of Examinationsi/c. Dr VS Vakula is a Senior member of IEEE, IEEE PES. She received the awards Outstanding Faculty in Engineering, Excellence in Reviewing from Asian Journal of Research in Computer Science and Innovative Technological Research  & Dedicated Academician Award.</p>
          <p>Dr VS Vakula has visited Abu Dhabi, United Arab Emirates and Malaysia on academic purposes. She published 75 research papers in various international/national journals and conferences. She is an editorial board member and reviewer of many international journals. She has guided One research scholar for their PhDs and currently guiding 8 research scholars as Supervisor/Co- Supervisor for their PhD degrees. Her research areas include the Power Quality, Power Systems, Smart Grids and Micro Grids, Distributed Generation Soft Computing and Optimization Techniques and Adaptive Power System Stabilizers.</p>
        </div>
      </div>
    </div>
  );
}

export default Controller;
