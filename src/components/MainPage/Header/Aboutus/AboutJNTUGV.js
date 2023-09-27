import React from "react";
import "../Administration/AdminandDirectorates.css"; // Corrected CSS import path

import { Link, useLocation } from "react-router-dom";

function AboutJNTUGV() {
  const location = useLocation();
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
        <Link
          to="/AboutJNTUGV"
          className={`menuButton ${
            location.pathname === "/Chancellor" ? "active" : ""
          }`}
        >
          About JNTUGV
        </Link>
        <Link
          to="/Vision"
          className={`menuButton ${
            location.pathname === "/ViceChancellor" ? "active" : ""
          }`}
        >
          Vision
        </Link>
        <Link
          to="/Mission"
          className={`menuButton ${
            location.pathname === "/Registrar" ? "active" : ""
          }`}
        >
          Mission
        </Link>
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">About JNTUGV</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <p>
            JNTU College of Engineering, Vizianagaram was established in the
            year 2007 as a constituent College of JNTU Hyderabad.JNTU Hyderabad
            was trifurcated into three Universities by the Andhra Pradesh Act
            No. 30 of 2008 and since 24th August 2008, the College has become
            the constituent college of JNTU Kakinada. Vide University Act No.22
            of 2021, JNTU Kakinada is bifurcated and Jawaharlal Nehru
            Technological University Gurajada, Vizianagaram come into existence
            as a separate University vide G.O.Ms.No.3, dated: 12-01-2022.
            <p>
              The university is spread across six districts i.e
              Vizianagaram,Visakhapatnam, Srikakulam, Parvathipuram Manyam,
              Alluri Sitharama Raju and Anakapalli. There are 2 constituent
              colleges and 37 affiliated colleges under its jurisdiction and
              catering education in different Engineering, Pharmacy and
              Management departments.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutJNTUGV;