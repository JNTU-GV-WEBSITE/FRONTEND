import React from "react";
import "./AdmissionsOP.css";
import { Link, useLocation } from "react-router-dom";

function Admissions() {
  const location = useLocation();
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
        <Link
          to="/programsoffered"
          className={`menuButton ${
            location.pathname === "/programsoffered" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
        <Link
          to="/AdmissionsOP"
          className={`menuButton ${
            location.pathname === "/AdmissionsOP" ? "active" : ""
          }`}
        >
          Admissions
        </Link>
        <Link
          to="/ConstituentCollegesOP"
          className={`menuButton ${
            location.pathname === "/ConstituentCollegesOP" ? "active" : ""
          }`}
        >
          Constituent Colleges
        </Link>
        <Link
          to="/AffliatedCollegesOP"
          className={`menuButton ${
            location.pathname === "/AffliatedCollegesOP" ? "active" : ""
          }`}
        >
          Affiliated Colleges
        </Link>
      </div>
      <div className="actualContainer">
        <div className="allRightContentHolder">
          <div className="allRightContentHolderHeading">Admissions</div>
          <div className="allRightContentHolderContent">
            <h4>Under Graduate Programme</h4>
            <p>
              Admission to regular B.Tech Programmes are made based on the rank
              secured in AP EAPCET (Engineering, Agriculture and Pharmacy Common
              Entrance Test) conducted by Andhra Pradesh State Council of Higher
              Education (APSCHE), Andhra Pradesh.
            </p>
            <h4>Post Graduate Programme</h4>
            <p>
              Admission to regular M.Tech Programme is based on GATE or PGECET
              ranking conducted by Andhra Pradesh State Council of Higher
              Education (APSCHE), Andhra Pradesh.
            </p>
            <p>
              Admission to regular M.C.A Programme is based on AP-ICET ranking
              conducted by Andhra Pradesh State Council of Higher Education
              (APSCHE), Andhra Pradesh.
            </p>
            <h4>Ph.D</h4>
            <p>
              Admission into PhD & M.Phil programmes for both full time and
              part-time based on APRCET (AP Research Common Entrance Test)
            </p>

            <h4>Eligibility criteria for APRCET PhD & M.Phil Admissions:</h4>
            <p>
              The eligibility criteria for admission to APRCET (admission into
              M.Phil./Ph.D. programme) is the candidate should have a Master’s
              degree or a professional degree declared equivalent to the
              Master’s degree by the corresponding statutory regulatory body,
              with at least 55 per cent of marks in aggregate or its equivalent
              grade ‘B’ in the UGC 7-point scale. Those who are waiting for the
              result of PG Degree can also apply for APRCET. But they have to
              full fill the required criteria at the time of interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
