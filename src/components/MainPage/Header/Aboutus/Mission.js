import React from "react";
import "../Administration/AdminandDirectorates.css"; // Corrected CSS import path

import { Link, useLocation } from "react-router-dom";

function Mission() {
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
        <div className="allRightContentHeading">Mission</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center></center>
          <hr />
          {/* Profile description */}
          <p className="a"></p>
          <p>
            ❖ To provide high quality technical education through a creative
            balance of academia and industry by adopting highly effective
            teaching learning processes
          </p>
          <p>
            ❖ To promote multidisciplinary research with a global perspective to
            attain professional excellence
          </p>
          <p>
            ❖ To establish standards that inculcate ethical and moral values
            that contribute to growth in the Career and development of society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
