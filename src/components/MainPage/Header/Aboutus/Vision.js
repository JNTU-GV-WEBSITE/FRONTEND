import React from "react";
import "../Administration/AdminandDirectorates.css"; // Corrected CSS import path

import { Link, useLocation } from "react-router-dom";

function Vision() {
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
        <div className="allRightContentHeading">Vision</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <p className="a"></p>
          <p>
            ❖ To emerge as a premier technical Institution in the field of
            engineering and research with a focus to produce professionally
            competent and socially sensitive engineers capable of working in a
            multidisciplinary global environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
