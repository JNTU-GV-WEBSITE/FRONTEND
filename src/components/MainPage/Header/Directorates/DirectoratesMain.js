import { Link, Outlet, useLocation } from "react-router-dom";
import "../Administration/AdminandDirectorates.css";
const DirectoratesMain = () => {
  const location = useLocation();

  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      <Link
          to="AcademicAudit"
          className={`menuButton ${
            location.pathname === "/AcademicAudit" ? "active" : ""
          }`}
        >
          Director of Academic Audit
        </Link>
        <Link
          to="AcademicPlanning"
          className={`menuButton ${
            location.pathname === "/AcademicPlanning" ? "active" : ""
          }`}
        >
          Director of Academic Planning
        </Link>
        <Link
          to="Admissions"
          className={`menuButton ${
            location.pathname === "/Admissions" ? "active" : ""
          }`}
        >
          Director of Admissions
        </Link>
        <Link
          to="AlumniRelations"
          className={`menuButton ${
            location.pathname === "/AlumniRelations" ? "active" : ""
          }`}
        >
          Director of Alumni Relations
        </Link>
        <Link
          to="Empowerment"
          className={`menuButton ${
            location.pathname === "/Empowerment" ? "active" : ""
          }`}
        >
          Empowerment of Women & Grievances
        </Link>
        <Link
          to="Evaluation"
          className={`menuButton ${
            location.pathname === "/Evaluation" ? "active" : ""
          }`}
        >
          Evaluation
        </Link>
        <Link
          to="FacultyDevelopmentCell"
          className={`menuButton ${
            location.pathname === "/FacultyDevelopmentCell" ? "active" : ""
          }`}
        >
          Faculty Development Cell
        </Link>
        <Link
          to="ForeignUniversityRelations"
          className={`menuButton ${
            location.pathname === "/ForeignUniversityRelations" ? "active" : ""
          }`}
        >
          Foreign University Relations
        </Link>
        <Link
          to="IQAC"
          className={`menuButton ${
            location.pathname === "/IQAC" ? "active" : ""
          }`}
        >
          Director of IQAC
        </Link>
        <Link
          to="Placements"
          className={`menuButton ${
            location.pathname === "/Placements" ? "active" : ""
          }`}
        >
          Director of IIIT & Placements
        </Link>
        <Link
          to="Research"
          className={`menuButton ${
            location.pathname === "/Research" ? "active" : ""
          }`}
        >
          Director of Research & Development
        </Link>
        <Link
          to="SportsAdministration"
          className={`menuButton ${
            location.pathname === "/SportsAdministration" ? "active" : ""
          }`}
        >
          Director of University Games & Sports Administration
        </Link> 
      </div>
      <Outlet />
    </div>
  );
};

export default DirectoratesMain;
